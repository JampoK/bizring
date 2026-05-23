# Environment & Secrets Guide

## Overview
All configuration lives in environment variables.
Server-only variables **must NOT** be prefixed with `NEXT_PUBLIC_` – they are never sent to the client bundle.
Public variables **must** be prefixed with `NEXT_PUBLIC_` so Next.js can expose them safely.

## Files
- `.env.example` – Template showing every variable the app expects (committed to repo).
- `.env.local` – Local development overrides (**git-ignored**).
- `.env.staging` – Staging configuration (managed via CI secrets).
- `.env.production` – Production configuration (managed via deployment platform).

## Workflow
1. **Copy** the example: `cp .env.example .env.local`
2. **Fill** in the values for your environment
3. **Validate** locally: `pnpm run validate`
   The script exits with non-zero code if any required variable is missing or malformed.
4. **CI** runs the same validation step automatically (added in Ticket P1-008).

## Secrets Safety
- Never commit `.env.*` files. They are listed in `.gitignore`.
- Store production secrets in your cloud provider's secret manager (e.g., Vercel, AWS Parameter Store).
- The validation script only reads from `process.env`; it does **not** expose secret values in logs.

## Adding a New Variable
1. Add the variable name & type to `packages/shared/src/env.ts` (Server or Public schema).
2. Add a comment line in `.env.example` under the appropriate section.
3. Run `pnpm run validate` to confirm the schema works.

## Variable Reference

### Server-Only (never exposed to client)
| Variable | Type | Required | Default | Description |
|----------|------|----------|---------|-------------|
| `DB_HOST` | string | ✅ | – | Database host |
| `DB_PORT` | number | – | 5432 | Database port |
| `DB_USER` | string | ✅ | – | Database user |
| `DB_PASSWORD` | string | ✅ | – | Database password |
| `DATABASE_URL` | URL | – | – | Alternative full connection string |
| `JWT_SECRET` | string (≥32 chars) | ✅ | – | JWT signing secret |
| `JWT_EXPIRES_IN` | string | – | 7d | JWT expiration |
| `JWT_ISSUER` | string | – | linkedin-for-businesses | JWT issuer claim |
| `API_RATE_LIMIT` | number | – | 1000 | API rate limit per window |
| `PAYLOAD_SECRET` | string (≥32 chars) | ✅ | – | Payload CMS secret |

### Public (exposed to client via NEXT_PUBLIC_ prefix)
| Variable | Type | Required | Default | Description |
|----------|------|----------|---------|-------------|
| `NEXT_PUBLIC_APP_NAME` | string | – | LinkedIn for Businesses | App display name |
| `NEXT_PUBLIC_APP_URL` | URL | – | http://localhost:3000 | Frontend URL |
| `NEXT_PUBLIC_API_URL` | URL | – | http://localhost:3000/api | API base URL |

---

_This document should be kept up-to-date whenever environment variables change._