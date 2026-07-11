import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Northern Vision CBO — Grassroots Climate, Gender & Education Solutions",
  description:
    "Northern Vision Community-Based Organization (NVCBO) works with indigenous and pastoralist communities to strengthen climate resilience, gender justice, education and community wellbeing in Northern Kenya.",
  keywords: [
    "Northern Vision CBO",
    "NVCBO",
    "Northern Kenya",
    "climate resilience",
    "gender justice",
    "education",
    "grassroots organization",
    "pastoralist communities",
    "healing circles",
    "ASAL",
  ],
  openGraph: {
    title: "Northern Vision CBO — Grassroots Solutions in Northern Kenya",
    description:
      "Community-led climate adaptation, education, gender justice and peacebuilding in Northern Kenya.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
