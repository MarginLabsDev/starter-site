# Client site scaffold

White-label Next.js App Router template. Copy into a new repository and replace placeholders before build work.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before launch

- Fill in `brand.md` and mirror values in `app/globals.css`
- Update metadata in `app/layout.tsx`
- Add assets under `public/images/` and `public/fonts/` (see `brand.md`)
- Copy `.env.example` to `.env.local` and set required variables

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |
