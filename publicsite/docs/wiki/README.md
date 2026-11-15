# Northern Vision CBO (`publicsite`) — Master Architecture Wiki

Welcome to the Master Architecture Wiki for [publicsite](../../), the **Next.js 16 (App Router) + Appwrite Cloud** web platform powering **Northern Vision Community-Based Organization (NVCBO)**.

> [!IMPORTANT]
> **Secret-Free Documentation Policy**: This wiki intentionally omits all live Appwrite identifiers, endpoints, file IDs, and API keys. All configuration is referenced strictly by environment variable names (e.g., `NEXT_PUBLIC_APPWRITE_PROJECT_ID`, `APPWRITE_API_KEY`) and generic placeholders (`<PROJECT_ID>`, `<DATABASE_ID>`, `<BUCKET_ID>`, `<FILE_ID>`).

---

## Wiki Index

| Page | Scope |
| :--- | :--- |
| [01 — System Architecture](01-system-architecture.md) | Next.js 16 App Router, `output: "standalone"`, Server vs. Client SDK boundaries, rendering modes |
| [02 — Routing & Pages](02-routing-and-pages.md) | Full route map, feature-flagged `/shop`, Healing Circles, Impact tracks, interactive forms, and `/api/gallery-images` |
| [03 — Appwrite Data & Media](03-appwrite-data-and-media.md) | `TablesDB` cursor pagination, Direct CDN `/view` delivery, Realtime WebSockets, and Storage helpers |
| [04 — Components & Styling](04-components-and-styling.md) | Root layout, Google Fonts, Tailwind CSS v4 `@theme` tokens, shared navigation, and lightbox modals |
| [05 — Cloud Functions & Scripts](05-cloud-functions-and-scripts.md) | `mov-to-mp4` FFmpeg Appwrite Function and root seeding/sync/verification scripts |
| [06 — Security & Deployment](06-security-and-deployment.md) | Environment variable matrix, secret hygiene, Appwrite Sites SSR deployment, and custom domain cookies |

---

## High-Level Stack & Topology

```mermaid
flowchart TD
    Browser["Web Browser"]

    subgraph NextApp["Next.js 16 App Router (output: standalone)"]
        StaticPages["Static / Prerendered Routes"]
        DynamicSSR["Dynamic SSR Routes (force-dynamic + node-appwrite)"]
        ApiRoute["API Route (/api/gallery-images)"]
        ClientUI["Client Components (appwrite Web SDK)"]
    end

    subgraph Appwrite["Appwrite Cloud"]
        TablesDB["TablesDB (<DATABASE_ID>)"]
        Storage["Storage Bucket (<BUCKET_ID>)"]
        Realtime["Realtime WebSockets"]
        MovFn["Cloud Function (mov-to-mp4)"]
    end

    Browser -->|HTTP GET| StaticPages
    Browser -->|HTTP GET| DynamicSSR
    Browser -->|HTTP GET| ApiRoute
    DynamicSSR -->|TablesDB.listRows| TablesDB
    ApiRoute -->|Storage / View URLs| Storage
    ClientUI -->|Direct CDN /view & MP4 Stream| Storage
    ClientUI -->|client.subscribe| Realtime
    Realtime -.->|Live Row/File Events| ClientUI
    Storage -->|MOV Upload Event| MovFn
    MovFn -->|Transcoded MP4 + Row Update| TablesDB
```

---

## Related Documentation

- [Technical Architecture Blueprint](../TECHNICAL_ARCHITECTURE.md)
- [Non-Technical Platform Manual](../NON_TECHNICAL_MANUAL.md)
- [Platform README](../../README.md)
- [Security Policy](../../SECURITY.md)
- [AI Agent Rules](../../AGENTS.md)
