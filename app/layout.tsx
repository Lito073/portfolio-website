import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Professionele Websites vanaf €200 | Lito's Lab",
  description: "Complete professionele website in 24-48 uur. Modern design, mobile-friendly, geen abonnement. Door Lito's Lab.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="dark">
      <body className={`${inter.className} antialiased bg-black text-white`}>
        <AnimatedBackground />
        {children}
      </body>
    </html>
  );
}
