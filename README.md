# Agency Website — Setup, Customization & Deployment Guide

A modern, high-converting, accessible Next.js (App Router) website built for a web development agency targeting non-technical business owners and entrepreneurs.

## 1. Customizing Your Agency Details

Open [`src/lib/site-data.ts`](./src/lib/site-data.ts) and edit `SITE_CONFIG`:
- `agencyName`: Your agency's name
- `phone` & `email`: Direct contact details
- `whatsappNumber`: Digits only with country code (e.g., `15552345678`) for the floating WhatsApp chat button
- `formspreeEndpoint`: Optional Formspree URL or Google Sheets Webhook URL

## 2. Running Locally

```bash
cd /Users/ranjitbarik/.gemini/antigravity/scratch/agency-website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 3. Deploying on Vercel

1. Push this project folder to a GitHub, GitLab, or Bitbucket repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import your repository.
3. Add optional environment variables if desired:
   - `FORMSPREE_ENDPOINT` — Your Formspree form URL (e.g. `https://formspree.io/f/xxxxxxx`)
   - `GOOGLE_SHEETS_WEBHOOK_URL` — Your Google Apps Script Web App URL
4. Click **Deploy**. Vercel will automatically build and deploy your Next.js App Router website with SSL and global CDN caching.
