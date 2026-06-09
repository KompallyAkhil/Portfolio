This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## SEO And Image Basics

This app now includes:

- Global metadata in `src/app/layout.js`
- Open Graph and Twitter card images via `src/app/opengraph-image.js` and `src/app/twitter-image.js`
- `robots.txt` and `sitemap.xml` route handlers

For the best image rendering and performance:

- Use `next/image` for local and remote images instead of plain `<img>`.
- Always provide `width` and `height` when possible so Next can reserve space.
- If CSS changes only one dimension, set the other one to `auto` to preserve aspect ratio.
- Add a `sizes` prop for responsive images so the browser can choose the right file.
- Prefer modern formats like WebP or AVIF for large visual assets when available.
- Keep the `NEXT_PUBLIC_SITE_URL` environment variable set for correct canonical, sitemap, and social URLs in production.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
