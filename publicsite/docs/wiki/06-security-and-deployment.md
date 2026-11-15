# 06 — Security & Deployment

[← Back to Wiki Index](README.md)

## Environment Variable Matrix

All secrets and Appwrite identifiers are injected at runtime/build-time via environment variables. **Never** commit `.env*` files or hardcode values in source code or documentation (see [AGENTS.md](../../AGENTS.md) and [SECURITY.md](../../SECURITY.md)).

| Variable | Visibility | Required By | Purpose |
| :--- | :--- | :--- | :--- |
| `NEXT_PUBLIC_APPWRITE_ENDPOINT` | Public (Client & Server) | Next.js + Cloud Function | Appwrite API endpoint (`https://<ENDPOINT_HOST>/v1`) |
| `NEXT_PUBLIC_APPWRITE_PROJECT_ID` | Public (Client & Server) | Next.js + Cloud Function | Appwrite project identifier (`<PROJECT_ID>`) |
| `NEXT_PUBLIC_APPWRITE_DATABASE_ID` | Public (Client & Server) | `TablesDB` queries & Realtime | Target database identifier (`<DATABASE_ID>`) |
| `NEXT_PUBLIC_APPWRITE_BUCKET_ID` | Public (Client & Server) | Storage `/view` URLs & Realtime | Target storage bucket identifier (`<BUCKET_ID>`) |
| `APPWRITE_API_KEY` | **Server-Only (Secret)** | Server Components, API routes, Cloud Function, CLI scripts | Privileged server-side `node-appwrite` authentication |
| `NEXT_PUBLIC_ENABLE_SHOP` | Public | `/shop` route | Feature flag (`'true'` enables `/shop`; otherwise `notFound()`) |

> [!WARNING]
> **Never expose `APPWRITE_API_KEY` in any `"use client"` component or `NEXT_PUBLIC_*` variable.** Client components must only use the `appwrite` Web SDK with public endpoint/project identifiers.

---

## Local Development Setup

```bash
cd publicsite
npm install
# Create .env.local (gitignored) with the variables listed above
npm run dev
```

Available `package.json` scripts:
- `npm run dev` — Start Next.js development server (`http://localhost:3000`)
- `npm run build` — Build standalone Next.js production bundle
- `npm run start` — Start production standalone server
- `npm run lint` — Run ESLint (`eslint-config-next`)

---

## Deployment Architecture

### Appwrite Sites SSR (Active Target)
- `publicsite` is configured with `output: "standalone"` in [next.config.ts](../../next.config.ts) and is designed for **Appwrite Sites SSR Git Deployment** on pushes to `master`.
- All required `NEXT_PUBLIC_*` variables and the server-only `APPWRITE_API_KEY` are configured in the Appwrite Console environment settings.

### Custom Domain & First-Party Cookies
When `NEXT_PUBLIC_APPWRITE_ENDPOINT` is pointed at a custom domain (`https://<CUSTOM_DOMAIN>/v1`), Appwrite manages TLS certificates and issues session cookies as **first-party cookies**, avoiding third-party cookie blocking in Safari ITP and Chrome.

### Legacy GitHub Pages Note
The repository root contains [.github/workflows/deploy-pages.yml](../../../.github/workflows/deploy-pages.yml) from the archived static site ([old-site](../../../old-site/)). Because `publicsite` uses Next.js `output: "standalone"` with `force-dynamic` SSR routes and `/api/gallery-images`, it requires an SSR/Node runtime (such as Appwrite Sites SSR) rather than static GitHub Pages hosting.
