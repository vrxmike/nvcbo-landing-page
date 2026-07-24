#!/usr/bin/env bash
# ==============================================================================
# Jules Environment Initialization Script
# Project: Northern Vision CBO (NVCBO) Landing Page
# ==============================================================================

echo "🚀 Initializing Jules Environment for NVCBO Landing Page..."

# 1. Verify Environment Variables
# Jules provisions secrets dynamically from the Jules Env Setting Console.
# Do NOT hardcode secrets here.
echo "🔍 Checking for required Appwrite environment variables..."
REQUIRED_VARS=(
  "NEXT_PUBLIC_APPWRITE_ENDPOINT"
  "NEXT_PUBLIC_APPWRITE_PROJECT_ID"
  "NEXT_PUBLIC_APPWRITE_DATABASE_ID"
  "NEXT_PUBLIC_APPWRITE_BUCKET_ID"
)

MISSING_VARS=0
for VAR in "${REQUIRED_VARS[@]}"; do
  if [ -z "${!VAR}" ]; then
    echo "⚠️  WARNING: $VAR is not set!"
    MISSING_VARS=$((MISSING_VARS + 1))
  fi
done

if [ $MISSING_VARS -gt 0 ]; then
  echo "⚠️  Please ensure the missing secrets are injected via the Jules Env Setting Console before launching."
else
  echo "✅ Core environment variables detected."
fi

# 2. Install Dependencies
echo "📦 Installing npm dependencies..."
npm install

# 3. Clean Next.js Build Cache (Optional but recommended for fresh environments)
echo "🧹 Cleaning up .next cache..."
rm -rf .next

# 4. Ready!
echo "✨ Environment successfully provisioned."
echo "▶️  To start the Next.js development server, run: npm run dev"
echo "▶️  To build the project for production, run: npm run build"
