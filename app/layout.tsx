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
  title: "Vitalii Karasov — AI Engineer · Award Winner @ AI Week Milan 2026",
  description:
    "Award-winning AI engineer (AI Agent Olympics, AI Week Milan 2026 — Europe's largest AI event). I build multi-agent systems, RAG pipelines, and voice AI that replace manual work. From problem to production in days.",
  keywords: [
    "Product Manager",
    "AI Engineer",
    "PRINCE2",
    "n8n",
    "Make.com",
    "Claude API",
    "LangGraph",
    "CrewAI",
    "MVP",
    "automation",
    "multi-agent AI",
    "fractional PM",
    "multi-agent systems",
    "voice AI",
    "Speechmatics",
    "FastAPI",
    "AI Week Milan",
    "award winning AI engineer",
  ],
  authors: [{ name: "Vitalii Karasov" }],
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Vitalii Karasov — AI Engineer · Award Winner @ AI Week Milan 2026",
    description:
      "Award-winning AI engineer (AI Agent Olympics, AI Week Milan 2026 — Europe's largest AI event). I build multi-agent systems, RAG pipelines, and voice AI that replace manual work. From problem to production in days.",
    type: "website",
    url: siteUrl,
    images: [
      {
        // TODO: regenerate og-image.png with the AI Week Milan 2026 award badge
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vitalii Karasov",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vitalii Karasov — AI Engineer · Award Winner @ AI Week Milan 2026",
    description:
      "Award-winning AI engineer (AI Agent Olympics, AI Week Milan 2026 — Europe's largest AI event). I build multi-agent systems, RAG pipelines, and voice AI that replace manual work. From problem to production in days.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vitalii Karasov",
  jobTitle: "Product Manager & AI Engineer",
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
