import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
});

const siteUrl = "https://karasov.co";

export const metadata: Metadata = {
  title: "Karasov Systems — Private AI Operations for Contractors",
  description:
    "Private AI operations systems for design-build, remodeling and specialty contractor companies. Connect leads, estimates, field reporting, project knowledge and documents without replacing the tools your team already uses.",
  keywords: [
    "construction automation",
    "contractor CRM automation",
    "lead follow-up system",
    "home services AI",
    "HVAC lead automation",
    "design-build operations",
    "missed call recovery",
    "construction back office",
    "AI for contractors",
  ],
  authors: [{ name: "Vitalii Karasov" }],
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Karasov Systems — Private AI Operations for Contractors",
    description:
      "Private AI operations systems for design-build, remodeling and specialty contractor companies. Connect leads, estimates, field reporting, project knowledge and documents without replacing the tools your team already uses.",
    type: "website",
    url: siteUrl,
    images: [
      {
        // TODO: regenerate og-image.png - drop the old AI-engineer tagline, reflect the
        // construction & home-service positioning (see meta title/description above)
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vitalii Karasov",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karasov Systems — Private AI Operations for Contractors",
    description:
      "Private AI operations systems for design-build, remodeling and specialty contractor companies. Connect leads, estimates, field reporting, project knowledge and documents without replacing the tools your team already uses.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vitalii Karasov",
  jobTitle: "Private AI operations for design-build, remodeling & specialty contractors",
  url: siteUrl,
  email: "v.karasov.pm@gmail.com",
  sameAs: [
    "https://github.com/vkarasovpm-dotcom",
    "https://www.linkedin.com/in/vitaliikarasov/",
    "https://www.youtube.com/@TheHumanGambit",
    "https://www.upwork.com/freelancers/~01af851972931ea5c2",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0A0A0A] text-white antialiased">{children}</body>
    </html>
  );
}
