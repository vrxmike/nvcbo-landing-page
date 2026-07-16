require('dotenv').config({ path: '.env' });
const { Client, TablesDB } = require('node-appwrite');

// Check for required environment variables
if (!process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || !process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || !process.env.APPWRITE_API_KEY) {
    console.error("Missing Appwrite environment variables in .env");
    process.exit(1);
}

const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID)
    .setKey(process.env.APPWRITE_API_KEY);

const tablesDB = new TablesDB(client);
const DB_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || 'nvcbo_db';

async function setupDatabase() {
    console.log(`Setting up TablesDB: ${DB_ID}...`);

    try {
        // --- 1. PROGRAMS TABLE ---
        console.log("Creating 'programs' table...");
        await tablesDB.createTable(DB_ID, 'programs', 'Programs');
        await tablesDB.createStringColumn(DB_ID, 'programs', 'title', 255, true);
        await tablesDB.createStringColumn(DB_ID, 'programs', 'slug', 100, true);
        await tablesDB.createStringColumn(DB_ID, 'programs', 'description', 500, true);
        await tablesDB.createStringColumn(DB_ID, 'programs', 'content', 10000, false);
        await tablesDB.createStringColumn(DB_ID, 'programs', 'icon_name', 50, false);
        await tablesDB.createBooleanColumn(DB_ID, 'programs', 'is_active', false, true); // (DB_ID, tableId, key, required, default)
        
        // --- 2. PROJECTS TABLE ---
        console.log("Creating 'projects' table...");
        await tablesDB.createTable(DB_ID, 'projects', 'Projects');
        await tablesDB.createStringColumn(DB_ID, 'projects', 'title', 255, true);
        await tablesDB.createStringColumn(DB_ID, 'projects', 'slug', 100, true);
        await tablesDB.createStringColumn(DB_ID, 'projects', 'status', 50, false);
        await tablesDB.createStringColumn(DB_ID, 'projects', 'hero_image_id', 255, false);
        await tablesDB.createStringColumn(DB_ID, 'projects', 'content', 10000, false);
        // Note: Array of strings for challenges
        await tablesDB.createStringColumn(DB_ID, 'projects', 'challenges', 255, false, undefined, true); 
        // JSON column for metrics
        await tablesDB.createStringColumn(DB_ID, 'projects', 'metrics_json', 5000, false); 
        
        // --- 3. STORIES TABLE ---
        console.log("Creating 'stories' table...");
        await tablesDB.createTable(DB_ID, 'stories', 'Stories');
        await tablesDB.createStringColumn(DB_ID, 'stories', 'title', 255, true);
        await tablesDB.createStringColumn(DB_ID, 'stories', 'slug', 100, true);
        await tablesDB.createStringColumn(DB_ID, 'stories', 'excerpt', 500, false);
        await tablesDB.createStringColumn(DB_ID, 'stories', 'body', 10000, true);
        await tablesDB.createStringColumn(DB_ID, 'stories', 'cover_image_id', 255, false);
        await tablesDB.createDatetimeColumn(DB_ID, 'stories', 'published_at', false);

        // --- 4. PARTNERS TABLE ---
        console.log("Creating 'partners' table...");
        await tablesDB.createTable(DB_ID, 'partners', 'Partners');
        await tablesDB.createStringColumn(DB_ID, 'partners', 'name', 255, true);
        await tablesDB.createStringColumn(DB_ID, 'partners', 'logo_image_id', 255, true);
        await tablesDB.createStringColumn(DB_ID, 'partners', 'website_url', 500, false);
        await tablesDB.createIntegerColumn(DB_ID, 'partners', 'sort_order', false);

        // --- 5. MEDIA GALLERY TABLE ---
        console.log("Creating 'media_gallery' table...");
        await tablesDB.createTable(DB_ID, 'media_gallery', 'Media Gallery');
        await tablesDB.createStringColumn(DB_ID, 'media_gallery', 'title', 255, true);
        await tablesDB.createStringColumn(DB_ID, 'media_gallery', 'caption', 500, false);
        await tablesDB.createStringColumn(DB_ID, 'media_gallery', 'file_id', 255, true);
        await tablesDB.createStringColumn(DB_ID, 'media_gallery', 'category', 100, false); // e.g., 'gotu-farm', 'events'
        await tablesDB.createIntegerColumn(DB_ID, 'media_gallery', 'sort_order', false);

        console.log("✅ Tables and Columns setup completed successfully!");

    } catch (error) {
        console.error("❌ Error setting up tables:", error.message || error);
    }
}

setupDatabase();
