import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shs.com.pk"),
  title: {
    default: "Standard Higher Secondary School | Rawalpindi",
    template: "%s | Standard Higher Secondary School",
  },
  description:
    "Standard Higher Secondary School, Mughalabad Road, Rawalpindi — quality education, character building and student development.",
  keywords: [
    "Standard Higher Secondary School Rawalpindi",
    "Standard High School Rawalpindi",
    "SHS Rawalpindi",
    "SHS Rawalpindi admissions",
    "Schools in Rawalpindi",
  ],
  openGraph: {
    title: "Standard Higher Secondary School | Rawalpindi",
    description:
      "Quality education, character building and student development on Mughalabad Road, Rawalpindi.",
    url: "https://shs.com.pk",
    siteName: "Standard Higher Secondary School",
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Standard Higher Secondary School | Rawalpindi",
    description:
      "Quality education, character building and student development on Mughalabad Road, Rawalpindi.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <AnnouncementBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
