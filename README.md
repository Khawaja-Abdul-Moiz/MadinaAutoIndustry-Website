# Madina Auto Industries Website

The Madina Auto Industries business website is now packaged as a Next.js project
and is ready to deploy on Vercel.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) after the development server
starts.

## Production build

```bash
npm run build
npm start
```

Vercel detects the Next.js framework automatically. The repository includes a
`vercel.json` declaration for clarity.

## Project structure

- `app/` contains the Next.js entry route and metadata.
- `public/` contains the existing website pages, styles, scripts, and product
  images. Keeping these files in `public/` preserves all existing page URLs and
  relative asset links while the project is migrated incrementally.
- `MADINA/` is retained as the original source snapshot.

The root route redirects to the existing home page at `/index.html`, and all
other existing HTML pages remain directly deployable under their original URLs.
Let's Deploy
A final Edit
