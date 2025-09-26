# Sales Call Recorder & AI Notes

This repository contains the monorepo for a consent-first sales enablement platform. It provides a
NestJS backend, a Next.js frontend, and documentation scaffolding aligned with the product
requirements:

* Record or upload sales calls and store them in S3-compatible storage.
* Run transcription and summarization pipelines using queue workers (Whisper + rule-based NLP).
* Capture consent events to comply with German call recording regulations.
* Expose dashboards, KPIs, and exports for managers to coach their teams.

## Getting started

1. Install dependencies in each workspace:

   ```bash
   npm install --workspace=@sales-call/api
   npm install --workspace=@sales-call/web
   ```

2. Run the development servers:

   ```bash
   npm run dev:api   # NestJS backend on http://localhost:8080
   npm run dev:web   # Next.js frontend on http://localhost:3000
   ```

   The API will automatically fall back to a local SQLite database (`tmp/dev.sqlite`) when
   `DATABASE_URL` is not provided, so you can boot the backend without additional services during
   early development. Provide a PostgreSQL connection string through `DATABASE_URL` in production
   or when you want to validate against the target infrastructure.

3. Explore the repository structure in [`docs/architecture.md`](docs/architecture.md) for the next
   implementation steps.

> **Note:** Database credentials, S3 settings, and other secrets are expected through environment
> variables (`.env` files are intentionally excluded from version control).
