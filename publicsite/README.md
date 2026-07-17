# Northern Vision CBO (NVCBO) Landing Page

This is the official platform for Northern Vision Community-Based Organization (NVCBO), a grassroots-led initiative working with indigenous and pastoralist communities in Northern Kenya to strengthen climate resilience, gender justice, education, and community wellbeing.

## Tech Stack
- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Styling**: Vanilla CSS with Tailwind CSS utilities
- **Typography**: Optimized loading for Fredoka, Inter, and Caveat
- **Backend / Database / Storage**: [Appwrite Cloud](https://appwrite.io)
- **Realtime reactivity**: Appwrite Client SDK (`client.subscribe`)

## Local Development

First, copy `.env.example` (or set up your environment variables based on your Appwrite Cloud project credentials) to `.env`:
```bash
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT_ID=your_project_id
NEXT_PUBLIC_APPWRITE_DATABASE_ID=nvcbo_db
NEXT_PUBLIC_APPWRITE_BUCKET_ID=nvcbo_bucket
APPWRITE_API_KEY=your_secret_api_key  # Server-side scripts only! Never expose to client.
```

Run the development server:
```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment: Appwrite Site Next.js SSR

This project is fully deployed and hosted entirely within the Appwrite ecosystem using **Appwrite Site's SSR Git Deployment** pipeline. 

### Deployment Workflow
Appwrite Cloud directly integrates with this GitHub repository to provide automatic continuous deployment (CD) with Server-Side Rendering (SSR) support. 

When code is pushed to the `master` branch:
1. **GitHub Trigger**: Appwrite detects the commit.
2. **Build Process**: Appwrite automatically runs `npm install` and `npm run build`.
3. **SSR Provisioning**: Appwrite spins up serverless compute required for Next.js 16's dynamic App Router and API routes.
4. **Live Release**: The new version instantly goes live. 

### Environment Variables
For production, ensure the following keys are safely configured within the **Appwrite Console Settings** under your Site deployment environment variables:
- `NEXT_PUBLIC_APPWRITE_ENDPOINT`
- `NEXT_PUBLIC_APPWRITE_PROJECT_ID`
- `NEXT_PUBLIC_APPWRITE_DATABASE_ID`
- `NEXT_PUBLIC_APPWRITE_BUCKET_ID`

*(Do NOT commit your `APPWRITE_API_KEY` into Git. It is solely utilized for local backend data-seeding CLI scripts.)*

## Key Features

- **Dynamic Media Gallery**: Realtime synchronization with Appwrite TablesDB rows instead of legacy Appwrite collections. Employs recursive cursor-based pagination to fluidly bypass 100-item rate limits.
- **Glassmorphism UI**: Uses Bento grid, Tactile Minimalism, and premium gradients.
- **WhatsApp Integration**: Immediate "Book Consultation" triggers linking deep into WhatsApp via URL parameters.
