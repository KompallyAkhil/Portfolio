import { JetBrains_Mono, Source_Serif_4, VT323 } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const siteName = "Portfolio V2";

const vt323 = VT323({
  variable: "--font-display-next",
  subsets: ["latin"],
  weight: "400",
});

const sourceSerif4 = Source_Serif_4({
  variable: "--font-body-next",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono-next",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Akhil Kompally - AI & Full Stack Engineer",
    template: `%s | Akhil Kompally`,
  },
  description:
    "Portfolio of Akhil Kompally — AI & Full Stack Engineer passionate about crafting scalable web applications and intelligent solutions.",
  applicationName: "Akhil's Portfolio",
  authors: [{ name: "Akhil Kompally" }],
  creator: "Akhil Kompally",
  publisher: "Akhil Kompally",
  icons: {
    icon: [
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/favicon/apple-touch-icon.png",
    other: [
      { rel: "manifest", url: "/favicon/site.webmanifest" },
    ],
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Akhil Kompally",
    title: "Akhil Kompally - AI & Full Stack Engineer",
    description:
      "Explore the projects, skills, and experience of Akhil Kompally — AI & Full Stack Engineer.",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Akhil Kompally Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akhil Kompally - AI & Full Stack Engineer",
    description:
      "Portfolio of Akhil Kompally — AI & Full Stack Engineer passionate about crafting scalable web applications and intelligent solutions.",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${vt323.variable} ${sourceSerif4.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
      <Analytics/>
    </html>
  );
}
