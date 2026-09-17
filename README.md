# NUMI V1

NUMI is a cinematic digital showroom for finished website systems.

## Stack

- React + TypeScript + Vite
- Express + tRPC
- Drizzle ORM + MySQL
- Tailwind CSS
- Stripe Checkout + signed webhook verification

## Local development

1. Install Node.js 22+ and pnpm 10.
2. Copy `.env.example` to `.env` and provide the required database/auth values.
3. Run `pnpm install`.
4. Run `pnpm db:push` for a fresh database.
5. Run `pnpm dev`.

## Validation

```bash
pnpm check
pnpm test
pnpm build
```

## Production configuration

The application does not fabricate external credentials.

Required for real Stripe payments:

- `STRIPE_SECRET_KEY`
- `VITE_STRIPE_PUBLISHABLE_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `PUBLIC_APP_URL`

Required for automatic customer provisioning:

- `PROVISIONING_API_URL`
- `PROVISIONING_API_KEY`

A real product should only advertise a live demo when `demoUrl` points to an actual deployed site.

## Customer isolation

The intended lifecycle is:

`MASTER → PRODUCT VERSION → CUSTOMER INSTANCE`

A provisioning provider is responsible for creating the independent customer website/admin/database/hosting resources represented by the delivery record. NUMI never grants a live demo URL or claims a ready delivery when the required provider response is absent.

## Visual identity

NUMI uses a cinematic Algerian-futurist direction: deep-space atmosphere, slow stars, geometric architecture, digital interfaces, subtle North African geometry, and restrained motion. Repository-local SVG assets keep the public visual layer portable outside the original build environment.
