import { Client, Storage, TablesDB, ID, Query } from 'node-appwrite';
import { InputFile } from 'node-appwrite/file';
import ffmpeg from 'fluent-ffmpeg';
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg';
import fs from 'fs';
import path from 'path';

// Set the FFmpeg binary path securely provided by the installer package
ffmpeg.setFfmpegPath(ffmpegInstaller.path);

export default async ({ req, res, log, error }) => {
  log("Starting MOV to MP4 conversion function...");

  // 1. Validate the Trigger Event
  const eventDataRaw = req.variables.APPWRITE_FUNCTION_EVENT_DATA;
  if (!eventDataRaw) {
    return res.json({ success: false, message: 'No event data found.' });
  }

  const fileData = JSON.parse(eventDataRaw);
  const fileId = fileData.$id;
  const bucketId = fileData.bucketId;
  const fileName = fileData.name;

  if (!fileName.toLowerCase().endsWith('.mov')) {
    log(`File ${fileName} is not a .MOV file. Skipping.`);
    return res.json({ success: true, message: 'Not a MOV file.' });
  }

  log(`Processing MOV file: ${fileName} (${fileId})`);

  // 2. Initialize Appwrite Client
  const client = new Client()
    .setEndpoint(req.variables.NEXT_PUBLIC_APPWRITE_ENDPOINT || req.variables.APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1')
    .setProject(req.variables.NEXT_PUBLIC_APPWRITE_PROJECT_ID || req.variables.APPWRITE_FUNCTION_PROJECT_ID)
    .setKey(req.variables.APPWRITE_API_KEY);

  const storage = new Storage(client);
  const tablesDB = new TablesDB(client);
  
  const dbId = req.variables.NEXT_PUBLIC_APPWRITE_DATABASE_ID || 'nvcbo_db';
  const tableId = 'media_gallery';

  const tmpInputPath = path.join('/tmp', `${fileId}.mov`);
  const tmpOutputPath = path.join('/tmp', `${fileId}.mp4`);

  try {
    // 3. Download the .MOV file
    log(`Downloading file ${fileId} to ${tmpInputPath}...`);
    const fileBuffer = await storage.getFileDownload(bucketId, fileId);
    fs.writeFileSync(tmpInputPath, fileBuffer);
    log('Download complete.');

    // 4. Convert using FFmpeg
    log('Starting FFmpeg conversion to MP4 (H.264/AAC)...');
    await new Promise((resolve, reject) => {
      ffmpeg(tmpInputPath)
        .outputOptions([
          '-c:v libx264',    // Video codec: H.264 for wide browser compatibility
          '-preset fast',    // Encoding speed
          '-crf 23',         // Constant Rate Factor (visual quality)
          '-c:a aac',        // Audio codec: AAC
          '-b:a 128k',       // Audio bitrate
          '-movflags +faststart' // Optimize for web streaming
        ])
        .save(tmpOutputPath)
        .on('end', () => {
          log('FFmpeg conversion successfully completed.');
          resolve();
        })
        .on('error', (err) => {
          error(`FFmpeg error: ${err.message}`);
          reject(err);
        });
    });

    // 5. Upload the new .MP4 file
    const newFileName = fileName.replace(/\.mov$/i, '.mp4');
    log(`Uploading converted file: ${newFileName}...`);
    const inputFile = InputFile.fromPath(tmpOutputPath, newFileName);
    const newUploadedFile = await storage.createFile(bucketId, ID.unique(), inputFile);
    log(`Successfully uploaded new MP4 file: ${newUploadedFile.$id}`);

    // 6. Update the Database Row
    log('Searching for existing database row linked to the old MOV file...');
    const searchRes = await tablesDB.listRows(dbId, tableId, [
      Query.equal('appwriteId', fileId)
    ]);

    if (searchRes.rows.length > 0) {
      const row = searchRes.rows[0];
      log(`Updating database row ${row.$id} to point to new MP4 file...`);
      await tablesDB.updateRow(dbId, tableId, row.$id, {
        appwriteId: newUploadedFile.$id
        // We keep title, caption, category, etc. untouched
      });
      log('Database row updated successfully.');
    } else {
      log('No matching database row found to update. (Maybe it was uploaded manually without being mapped yet).');
    }

    // 7. Cleanup the Old .MOV File
    log(`Deleting old MOV file ${fileId} from bucket...`);
    await storage.deleteFile(bucketId, fileId);
    log('Old MOV file deleted.');

    return res.json({ 
      success: true, 
      message: 'Successfully converted MOV to MP4.',
      newFileId: newUploadedFile.$id 
    });

  } catch (err) {
    error(`Conversion process failed: ${err.message}`);
    return res.json({ success: false, error: err.message }, 500);
  } finally {
    // 8. Cleanup local tmp files
    log('Cleaning up temporary files...');
    if (fs.existsSync(tmpInputPath)) fs.unlinkSync(tmpInputPath);
    if (fs.existsSync(tmpOutputPath)) fs.unlinkSync(tmpOutputPath);
  }
};
