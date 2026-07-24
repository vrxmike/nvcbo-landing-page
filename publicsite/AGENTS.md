<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Security Rules
- NEVER commit `.env` or other sensitive environment files. Ensure they remain gitignored.
- NEVER hardcode secrets, API keys, database credentials, or bucket IDs in the source code. Always access them via environment variables (e.g., `process.env.NEXT_PUBLIC_APPWRITE_SHOP_BUCKET_ID`).
