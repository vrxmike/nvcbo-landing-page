import type { Metadata } from "next";
import { Fredoka, Caveat, Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
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
      className={`${inter.variable} ${fredoka.variable} ${caveat.variable} antialiased font-sans`}
    >
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
