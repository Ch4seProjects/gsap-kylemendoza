import type { Metadata } from "next";
import { Fragment_Mono, Roboto } from "next/font/google";
import "./globals.css";

const fragmentMono = Fragment_Mono({
  variable: "--font-fragment-mono",
  subsets: ["latin"],
  weight: "400",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://kylemendoza.vercel.app",
  ),
  title: {
    default: "Kyle Dominic Mendoza - Portfolio",
    template: "%s | KDM",
  },
  description:
    "Portfolio of Kyle Dominic Mendoza — Front-End Developer specializing in React.js and TypeScript.",
  keywords: [
    "Kyle Dominic Mendoza",
    "front-end developer",
    "marketing developer",
    "SEO",
    "web developer",
    "GSAP",
    "Next.js",
    "Strapi",
  ],
  authors: [{ name: "Kyle Dominic Mendoza" }],
  creator: "Kyle Dominic Mendoza",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Kyle Dominic Mendoza - Portfolio",
    title: "Kyle Dominic Mendoza - Portfolio",
    description: "Front-End Developer specializing in React.js and TypeScript.",
    images: [
      {
        url: "/kyle.jpg",
        width: 1200,
        height: 630,
        alt: "Kyle Dominic Mendoza - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kyle Dominic Mendoza - Portfolio",
    description: "Front-End Developer specializing in React.js and TypeScript.",
    images: ["/kyle.jpg"],
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
  alternates: {
    canonical:
      process.env.NEXT_PUBLIC_SITE_URL ?? "https://kylemendoza.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="KM" />
      </head>
      <body
        className={`${fragmentMono.variable} ${roboto.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Kyle Dominic Mendoza - Portfolio",
              url:
                process.env.NEXT_PUBLIC_SITE_URL ??
                "https://kylemendoza.vercel.app",
              jobTitle: "Front-End Developer",
              sameAs: [],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
