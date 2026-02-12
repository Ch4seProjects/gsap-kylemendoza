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
  metadataBase: new URL("https://kylemendoza.com"),
  title: {
    default: "Kyle Dominic Mendoza",
    template: "%s | Kyle Dominic Mendoza",
  },
  description:
    "Portfolio of Kyle Dominic Mendoza — Front-End Developer specializing in interactive, animation-driven web experiences.",
  keywords: [
    "Kyle Dominic Mendoza",
    "front-end developer",
    "portfolio",
    "web developer",
    "GSAP",
    "Next.js",
    "interactive design",
  ],
  authors: [{ name: "Kyle Dominic Mendoza" }],
  creator: "Kyle Dominic Mendoza",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Kyle Dominic Mendoza",
    title: "Kyle Dominic Mendoza",
    description:
      "Front-End Developer specializing in interactive, animation-driven web experiences.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kyle Dominic Mendoza",
    description:
      "Front-End Developer specializing in interactive, animation-driven web experiences.",
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
              name: "Kyle Dominic Mendoza",
              url: "https://kylemendoza.com",
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
