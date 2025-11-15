import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Professionele Websites vanaf €200 | Lito's Lab",
  description: "Complete professionele website in 2 dagen. Modern design, mobile-friendly, geen abonnement. Door Lito's Lab.",
  keywords: "website laten maken, goedkope website, professionele website, website €200, Next.js website, website bouwen, website 2 dagen",
  authors: [{ name: "Lito's Lab" }],
  creator: "Lito's Lab",
  publisher: "Lito's Lab",
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://actie.litoslab.nl/',
    title: "Professionele Websites vanaf €200 | Lito's Lab",
    description: "Complete professionele website in 2 dagen. Modern design, mobile-friendly, geen abonnement.",
    siteName: "Lito's Lab",
    images: [{
      url: 'https://actie.litoslab.nl/og-image.svg',
      width: 1200,
      height: 630,
      alt: "Lito's Lab - Professionele Websites vanaf €200",
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Professionele Websites vanaf €200 | Lito's Lab",
    description: "Complete professionele website in 2 dagen. Modern design, mobile-friendly, geen abonnement.",
    images: ['https://actie.litoslab.nl/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  other: {
    'referrer': 'strict-origin-when-cross-origin',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="dark">
      <head>
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https: blob:; font-src 'self' data:; connect-src 'self' https://www.google-analytics.com; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self'; worker-src 'self' blob:;" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="canonical" href="https://actie.litoslab.nl/" />
        {/* Google Analytics - Replace G-XXXXXXXXXX with your tracking ID */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className={`${inter.className} antialiased bg-black text-white`}>
        <a href="#contact" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-purple-600 focus:text-white focus:rounded">Skip to contact</a>
        <AnimatedBackground />
        {children}
      </body>
    </html>
  );
}
