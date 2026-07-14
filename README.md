# Fitness 48

Premium fitness website for Fitness 48, a gym in Muthanallur, Sarjapur Road, Bangalore.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons
- Node.js + Express backend scaffold
- PostgreSQL + Prisma

## Features

- Premium responsive homepage and inner pages
- Membership plans
- Programs and transformations
- Free trial form
- Contact form
- FAQ and legal pages
- Admin dashboard scaffold
- SEO metadata, sitemap, and robots.txt
- Azure VM deployment guide

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Create your environment file:

```bash
copy .env.example .env
```

3. Update `.env` with your database and secret values.

4. Generate Prisma client:

```bash
npm run prisma:generate
```

5. Run database migrations:

```bash
npm run prisma:migrate
```

6. Start the app:

```bash
npm run dev
```

The site will run at `http://localhost:3000`.

## Useful Scripts

- `npm run dev` - start the Next.js app
- `npm run build` - production build
- `npm run start` - run the production build
- `npm run lint` - run ESLint
- `npm run typecheck` - run TypeScript checks
- `npm run dev:server` - start the Express backend scaffold
- `npm run prisma:generate` - generate Prisma client
- `npm run prisma:migrate` - run Prisma migrations

## Environment Variables

Required values are listed in [`.env.example`](.env.example).

## Hosting

See [DEPLOYMENT.md](DEPLOYMENT.md) for the full Azure VM deployment guide.

## Notes

- The Next.js app already handles the contact and trial APIs.
- The Express backend is optional unless you want to run it separately.