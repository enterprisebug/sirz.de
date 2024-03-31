This is a React + Next.js project based on [`Tailwind Spotlight template`](https://tailwindui.com/templates/spotlight).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


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