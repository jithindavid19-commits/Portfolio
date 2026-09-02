import type { Metadata } from "next";
import { Fraunces, Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/layout/CustomCursor";
import Loader from "@/components/layout/Loader";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { profile } from "@/lib/data";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const siteUrl = "https://jithingeorge.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Jithin George — Digital & Influencer Marketing",
  description:
    "Jithin George — Marketing Executive specialising in influencer marketing, social media and content strategy. MSc Digital Marketing, real campaign experience, visual storytelling.",
  keywords: [
    "Jithin George",
    "Digital Marketing",
    "Influencer Marketing",
    "Social Media Marketing",
    "Content Marketing",
    "Marketing Executive",
    "London",
    "UK",
  ],
  authors: [{ name: "Jithin George" }],
  openGraph: {
    title: "Jithin George — Digital & Influencer Marketing",
    description:
      "Marketing Executive specialising in influencer marketing, social media and content strategy.",
    url: siteUrl,
    siteName: "Jithin George",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jithin George — Digital & Influencer Marketing",
    description:
      "Marketing Executive specialising in influencer marketing, social media and content strategy.",
  },
  robots: { index: true, follow: true },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "London",
    addressCountry: "GB",
  },
  sameAs: [profile.linkedin.url, profile.instagram.url],
  knowsAbout: [
    "Digital Marketing",
    "Influencer Marketing",
    "Social Media Marketing",
    "Content Marketing",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${spaceMono.variable} h-full`}
    >
      <body className="min-h-full bg-ink text-paper antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-accent focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <div className="grain-overlay" aria-hidden />
        <Loader />
        <CustomCursor />
        <SmoothScroll>
          <Nav />
          <main id="main">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
