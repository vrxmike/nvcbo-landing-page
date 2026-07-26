# Deployment Guide: MOV to MP4 FFmpeg Function

This Appwrite Cloud function automatically intercepts uploaded `.mov` video files, converts them to cross-browser compatible `.mp4` (H.264/AAC) using FFmpeg, and seamlessly replaces them in your Appwrite storage bucket and `media_gallery` database table.

## 1. Environment Variables (Secrets)
Before deploying, you must configure the following environment variables globally in your Appwrite project or directly within the Function Settings:

- `NEXT_PUBLIC_APPWRITE_ENDPOINT`: Your Appwrite API endpoint (e.g., `https://cloud.appwrite.io/v1`)
- `NEXT_PUBLIC_APPWRITE_PROJECT_ID`: Your target Appwrite Project ID.
- `NEXT_PUBLIC_APPWRITE_DATABASE_ID`: The ID of the database containing the `media_gallery` table (e.g., `nvcbo_db`).
- `APPWRITE_API_KEY`: A backend API key with scopes: `files.read`, `files.write`, `documents.read`, `documents.write`. *(CRITICAL: Keep this strictly hidden!)*

## 2. Deploying to Appwrite Cloud
You can deploy this directly via the Appwrite Console using your GitHub integration:

1. In the Appwrite Console, navigate to **Functions** > **Create Function** > **Connect Repository**.
2. Select your `nvcbo-landing-page` repository.
3. Configure the function:
   - **Name**: `MOV to MP4 Converter`
   - **Runtime**: `Node.js 18.0` (or the latest stable Node runtime)
   - **Entrypoint**: `appwrite-functions/mov-to-mp4/src/main.js`
   - **Build Command**: `cd appwrite-functions/mov-to-mp4 && npm install`
4. Deploy the function.

## 3. Running on Autopilot (Automated Triggers)
To ensure the function automatically triggers the moment a user uploads a `.mov` file:

1. Navigate to your deployed Function in the Appwrite Console.
2. Go to the **Settings** tab.
3. Scroll down to the **Events** section and click **Add Event**.
4. Select the specific bucket event: `buckets.[YOUR_BUCKET_ID].files.*.create` (Replace `[YOUR_BUCKET_ID]` with your actual bucket ID, usually `nvcbo_bucket`).
5. Save settings. 

Now, every time a file is uploaded, the function spins up, verifies if it's a `.mov`, and automatically transcodes and maps it!

## 4. Running Manually (Appwrite Console)
If you have existing `.mov` files sitting in your bucket and you want to convert them manually:

1. Open the Appwrite Console and navigate to your `nvcbo_bucket`.
2. Find the `.mov` file you want to convert and copy its `File ID`.
3. Navigate to **Functions** > `MOV to MP4 Converter`.
4. Click **Execute Now**.
5. In the **Custom Data** field, pass the simulated event JSON explicitly:
   ```json
   {
     "$id": "YOUR_COPIED_FILE_ID",
     "bucketId": "nvcbo_bucket",
     "name": "filename.mov"
   }
   ```
6. Click **Execute**. You can monitor the conversion progress live in the function's Execution Logs.
