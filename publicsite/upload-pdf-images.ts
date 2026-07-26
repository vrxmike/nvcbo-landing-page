import { Client, Storage, TablesDB, ID } from 'node-appwrite';
import { InputFile } from 'node-appwrite/file';
import fs from 'fs';
import path from 'path';

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || 'https://fra.cloud.appwrite.io/v1')
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || '692a34ec001f1efc9002')
  .setKey(process.env.APPWRITE_API_KEY || '');

const storage = new Storage(client);
const tablesDB = new TablesDB(client);

const DB_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || 'nvcbo_db';
const BUCKET_ID = process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID || 'nvcbo_bucket';
const TABLE_ID = 'media_gallery';

const EXTRACTED_DIR = '/home/vamp/.gemini/antigravity-cli/brain/df8881b8-7528-4fca-863b-158fc6910179/scratch/extracted_images';

const IMAGE_DESCRIPTIONS: Record<string, { title: string; caption: string; key: string }> = {
  'page_1_img_1_16.jpeg': {
    key: 'hero1',
    title: 'Jo and Zamzam Co-Facilitating',
    caption: 'Dr. Jo Bauen and Zamzam Bonaya co-facilitating the Healing Circle training in Isiolo, Kenya.',
  },
  'page_1_img_2_17.jpeg': {
    key: 'hero2',
    title: 'Training Participants Group Photo',
    caption: 'Group photo of 27 youth leaders from Borana, Rendille, Sakhuye, Somali and Luhya tribes.',
  },
  'page_2_img_1_20.jpeg': {
    key: 'walkto-classroom',
    title: 'Jo and Zamzam Heading to Classroom',
    caption: 'Jo Bauen and Zamzam Bonaya walking to the classroom courtyard at the Isiolo cultural center.',
  },
  'page_2_img_2_21.jpeg': {
    key: 'context1',
    title: 'Jo and Saadia Boru of Borana Council of Elders',
    caption: 'Dr. Jo Bauen in dialogue with Saadia Boru of the Borana Council of Elders.',
  },
  'page_3_img_1_24.jpeg': {
    key: 'morning1',
    title: 'Participants Using the Talking Piece',
    caption: 'Participants passing and holding the Talking Piece during the worldview reflection.',
  },
  'page_3_img_2_25.jpeg': {
    key: 'morning2',
    title: 'Whole Group Session in Circle',
    caption: 'The whole group session seated in circle around tables at the Isiolo cultural center.',
  },
  'page_4_img_1_28.jpeg': {
    key: 'practice1',
    title: 'Small Group Practice Healing Circle',
    caption: 'Small group break-out session practicing the 7-step Healing Circle method.',
  },
  'page_5_img_1_31.jpeg': {
    key: 'hussein',
    title: 'Hussein of Northern Vision',
    caption: 'Hussein of Northern Vision CBO core organizing team.',
  },
  'page_5_img_2_32.jpeg': {
    key: 'jillo',
    title: 'Jillo of Northern Vision',
    caption: 'Jillo of Northern Vision CBO core organizing team.',
  },
  'page_5_img_3_33.jpeg': {
    key: 'shampi',
    title: 'Shampi of Northern Vision',
    caption: 'Shampi of Northern Vision CBO core organizing team.',
  },
  'page_6_img_1_36.jpeg': {
    key: 'conclusion2',
    title: 'Northern Vision Team with Jo and Rebecca',
    caption: 'The Northern Vision team together with Dr. Jo Bauen and Rebecca.',
  },
  'page_6_img_2_37.jpeg': {
    key: 'conclusion3',
    title: 'Celebratory Circle Dance',
    caption: 'Celebratory community dance and songs at the completion of the Circle Keeper training.',
  },
};

async function seedPdfImages() {
  console.log('🚀 Starting Appwrite Cloud upload for PDF extracted images...');
  
  if (!fs.existsSync(EXTRACTED_DIR)) {
    console.error(`Directory not found: ${EXTRACTED_DIR}`);
    process.exit(1);
  }

  const files = fs.readdirSync(EXTRACTED_DIR).filter(f => f.endsWith('.jpeg') || f.endsWith('.jpg') || f.endsWith('.png'));
  console.log(`Found ${files.length} images to upload.`);

  const results: Record<string, { fileId: string; url: string; key: string; title: string; caption: string }> = {};

  for (let i = 0; i < files.length; i++) {
    const fileName = files[i];
    const filePath = path.join(EXTRACTED_DIR, fileName);
    const meta = IMAGE_DESCRIPTIONS[fileName] || {
      key: `img_${i + 1}`,
      title: fileName,
      caption: 'Extracted PDF image asset from Dr. Jo Bauen report.',
    };

    console.log(`\n[${i + 1}/${files.length}] Uploading ${fileName} (${meta.title})...`);

    try {
      const inputFile = InputFile.fromPath(filePath, fileName);
      const uploadedFile = await storage.createFile(BUCKET_ID, ID.unique(), inputFile);

      const previewUrl = `${process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT?.replace(/\/v1$/, '') || 'https://fra.cloud.appwrite.io'}/storage/buckets/${BUCKET_ID}/files/${uploadedFile.$id}/preview?width=1200&output=webp&project=${process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || '692a34ec001f1efc9002'}`;

      results[meta.key] = {
        fileId: uploadedFile.$id,
        url: previewUrl,
        key: meta.key,
        title: meta.title,
        caption: meta.caption,
      };

      console.log(`  ✓ Uploaded to Appwrite File ID: ${uploadedFile.$id}`);

      // Seed row in media_gallery table
      try {
        const rowData = {
          title: meta.title,
          category: 'HEALING_CIRCLES',
          type: 'image',
          appwriteId: uploadedFile.$id,
          caption: meta.caption,
          colSpan: i % 5 === 0 ? 'md:col-span-2 lg:col-span-2' : null,
        };
        await tablesDB.createRow(DB_ID, TABLE_ID, ID.unique(), rowData);
        console.log(`  ✓ Seeded row in media_gallery table (${TABLE_ID})`);
      } catch (rowErr: any) {
        console.warn(`  ⚠️ Could not seed table row: ${rowErr.message}`);
      }

    } catch (err: any) {
      console.error(`  ❌ Failed to upload ${fileName}:`, err.message);
    }
  }

  console.log('\n========================================');
  console.log('✅ ALL PDF IMAGES SEEDED TO APPWRITE!');
  console.log('========================================\n');
  console.log(JSON.stringify(results, null, 2));

  // Save mapping to scratch
  const mappingPath = '/home/vamp/.gemini/antigravity-cli/brain/df8881b8-7528-4fca-863b-158fc6910179/scratch/uploaded_appwrite_mapping.json';
  fs.writeFileSync(mappingPath, JSON.stringify(results, null, 2));
  console.log(`\nMapping saved to: ${mappingPath}`);
}

seedPdfImages().catch(console.error);
