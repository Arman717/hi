# Architecture Overview

This repository hosts the monorepo for the **Sales Call Recorder & AI Notes** platform. The goal of
this first commit is to provide a structured foundation that reflects the product requirements and
accelerates the next implementation steps.

## Repository Layout

```
.
├── apps/
│   ├── api/     # NestJS backend (REST + WebSocket ready)
│   └── web/     # Next.js frontend (App Router + Tailwind)
├── docs/        # Product and architecture documentation
├── package.json # npm workspaces configuration
└── README.md
```

## Backend (NestJS)

* `TypeORM` is preconfigured for PostgreSQL with entity stubs for `User`, `Call`, and `CallEvent`.
* Service and controller scaffolding demonstrates the CRUD flows for calls and the audit trail.
* Validation is enabled globally via `class-validator` and `class-transformer`.
* TODO markers indicate where authentication/authorization and file handling should be wired in.

### Next steps

1. Implement authentication (JWT) and guard decorators for role-based access control.
2. Add upload handling (S3/minio) for call audio and integrate BullMQ queues for ASR/NLP.
3. Flesh out DTOs, pagination, filtering, and error handling to match the API contract.
4. Define database migrations (using TypeORM migrations) and configure CI checks.

## Frontend (Next.js)

* Uses the App Router with TailwindCSS prewired.
* Home page introduces the product value proposition and links to planned core pages.
* Global layout + design tokens ensure a consistent look when additional pages arrive.

### Next steps

1. Build authentication pages (`/login`, `/register`) and wire them to the API.
2. Implement the dashboard, call detail pages, and upload workflow.
3. Connect to realtime updates via WebSocket once backend endpoints are available.
4. Add component library primitives (buttons, inputs, tables) tailored to accessibility.

## Tooling

* npm workspaces keep the frontend and backend dependencies isolated while sharing commands.
* `npm run dev:web` / `npm run dev:api` start each app in development mode.
* `npm run build` composes both build commands for CI/CD pipelines.

## Compliance Considerations

The data model already reflects consent events and appointment tracking. Future iterations should
ensure:

* Consent prompts are enforced on the frontend and recorded via `CallEvent` entries.
* Deletion flows cascade to S3 objects and transcripts.
* Audit logs remain immutable to satisfy regulatory expectations.
