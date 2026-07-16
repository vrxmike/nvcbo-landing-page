require('dotenv').config({ path: '.env' });
const { Client, TablesDB, ID } = require('node-appwrite');

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

async function seedData() {
    console.log(`Seeding rows into TablesDB: ${DB_ID}...`);

    try {
        // --- 1. PROGRAMS ---
        console.log("Seeding 'programs'...");
        const programs = [
            { title: "Circle Keeper Training", slug: "circle-keepers", description: "Empowering local leaders to resolve community disputes peacefully.", icon_name: "Users", is_active: true },
            { title: "Gender & Social Inclusion", slug: "gender-equality", description: "Bridging the gender gap and ensuring equal opportunities for women and marginalized groups.", icon_name: "HeartHandshake", is_active: true },
            { title: "Peace and Security", slug: "peace-security", description: "Fostering stability and conflict resolution across Northern regions.", icon_name: "TreePine", is_active: true },
            { title: "Education & Youth Leadership", slug: "education-youth", description: "Cultivating the next generation of climate-smart leaders and thinkers.", icon_name: "BookOpen", is_active: true }
        ];
        for (const prog of programs) {
            await tablesDB.createRow(DB_ID, 'programs', ID.unique(), prog);
        }

        // --- 2. PROJECTS ---
        console.log("Seeding 'projects'...");
        const projects = [
            { title: "Climate Resilience", slug: "climate-resilience", status: "Active", challenges: ["Drought", "Resource Scarcity"], metrics_json: JSON.stringify({ metric: "+15% Yield" }) },
            { title: "Gotu Gamachu Farm", slug: "gotu-farm", status: "Active", challenges: ["Cold Storage Limitations", "Grid Dependency"], metrics_json: JSON.stringify({ metric: "+30% Income" }) },
            { title: "Eco-Tourism Hub", slug: "eco-tourism", status: "Planning", challenges: ["Infrastructure", "Marketing"], metrics_json: JSON.stringify({ metric: "500+ Expected Visitors" }) },
            { title: "Digital Literacy Camp", slug: "holiday-camp", status: "Active", challenges: ["Device Shortage", "Internet Access"], metrics_json: JSON.stringify({ metric: "120 Students Trained" }) },
            { title: "Indigenous Knowledge", slug: "indigenous-knowledge", status: "Active", challenges: ["Documentation", "Youth Engagement"], metrics_json: JSON.stringify({ metric: "5 Archives Restored" }) }
        ];
        for (const proj of projects) {
            await tablesDB.createRow(DB_ID, 'projects', ID.unique(), proj);
        }

        // --- 3. STORIES ---
        console.log("Seeding 'stories'...");
        const stories = [
            { title: "Reaping the Harvest at Gotu Gamachu", slug: "reaping-harvest-gotu", excerpt: "Discover how our flagship farm is changing the agricultural landscape...", body: "Full story content goes here." },
            { title: "Meet Our New Circle Keepers", slug: "meet-circle-keepers", excerpt: "50 new youth leaders have graduated from our peace-building program...", body: "Full story content goes here." },
            { title: "Our 2025 Vision & Impact", slug: "2025-vision-impact", excerpt: "A look back at a transformative year for climate resilience and community...", body: "Full story content goes here." }
        ];
        for (const story of stories) {
            await tablesDB.createRow(DB_ID, 'stories', ID.unique(), story);
        }

        // --- 4. PARTNERS ---
        console.log("Seeding 'partners'...");
        const partners = [
            { name: "PACJA", sort_order: 1, website_url: "https://pacja.org", logo_image_id: "placeholder" },
            { name: "WFP", sort_order: 2, website_url: "https://wfp.org", logo_image_id: "placeholder" },
            { name: "Landesa", sort_order: 3, website_url: "https://landesa.org", logo_image_id: "placeholder" },
            { name: "USAID", sort_order: 4, website_url: "https://usaid.gov", logo_image_id: "placeholder" }
        ];
        for (const part of partners) {
            await tablesDB.createRow(DB_ID, 'partners', ID.unique(), part);
        }

        // --- 5. MEDIA GALLERY ---
        console.log("Seeding 'media_gallery'...");
        const media = [
            { title: "Aquaculture Ponds", category: "gotu-farm", file_id: "6a5584e100306fc44f56", caption: "Climate-smart aquaculture infrastructure.", sort_order: 1 },
            { title: "Kitchen Gardens", category: "gotu-farm", file_id: "6a5584e1002d80a187d8", caption: "Women-managed household food security plots.", sort_order: 2 },
            { title: "GSSCR Excursions", category: "gotu-farm", file_id: "6a5584e100306a35c9ce", caption: "Intergenerational learning on the farm.", sort_order: 3 }
        ];
        for (const med of media) {
            await tablesDB.createRow(DB_ID, 'media_gallery', ID.unique(), med);
        }

        console.log("✅ Data seeding completed successfully!");

    } catch (error) {
        console.error("❌ Error seeding rows:", error.message || error);
    }
}

seedData();
