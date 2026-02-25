This is a React + Next.js project based on [`Tailwind Spotlight template`](https://tailwindui.com/templates/spotlight).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## SEO setup

### Google Search Console verification

This project reads a Google verification token from:

- `GOOGLE_SITE_VERIFICATION`

Set it in your deployment environment (for example in Vercel project settings), then redeploy.

### Top 3 page SEO checklist

Use this checklist regularly for your highest-priority pages:

1. Home (`/`)
  - Keep one clear H1 and a concise intro paragraph in the first viewport.
  - Ensure primary internal links point to `/it-services` and your best blog post.
  - Keep title and meta description aligned with your core expertise.

2. IT Services (`/it-services`)
  - Make service offering explicit in headings and first 100 words.
  - Add trust signals: concrete outcomes, years of experience, and proof points.
  - Add strong internal links to relevant blog posts and contact path.

3. Best-performing Blog Post (`/blog/<slug>`)
  - Keep the first section directly answering the post’s core search intent.
  - Add 2-4 internal links to related posts/services with descriptive anchor text.
  - Refresh content date and examples when information changes.

### After publishing changes

- Re-submit `/sitemap.xml` in Google Search Console.
- Use URL Inspection for changed pages and request indexing.
- Re-check Core Web Vitals and indexing status after a few days.


## Hosting model:

website build and deployment hosted on [Vercel](https://vercel.com/enterprisebugs-projects/sirz-de). This enabled MDX (stuff that can be run on a server).

I have tried hosting on my personal webserver which only worked without the server components like:

After renaming `next.config.mjs` to `next.config.js` with contents:
```
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true }
}
   
module.exports = nextConfig
```

# DNS change @Hetzner for Vercel app:
for Vercel hosting i needed to change:

## A-Record
**Original:**
Type: A 
Name: @
Value: 188.40.28.6

**New:**
Type: A
Name: @
Value: 76.76.21.21

## CNAME-Record
**Original:**
Type: CNAME
Name: www
Value: 188.40.28.6

**New:**
Type: CNAME
Name: www
Value: 76.76.21.123 (original was: "cname.vercel-dns.com." but Hetzner console wanted to have a IP address)

## AAAA-Record
Removed the following records completely
**Original:**
Type: AAAA 
Name: @
Value: 2a01:4f8:d0a:11fc::2

**Original:**
Type: AAAA 
Name: www
Value: 2a01:4f8:d0a:11fc::2