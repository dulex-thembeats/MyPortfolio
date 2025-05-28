import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Product Manager Portfolio - Muhammad Abdulkadir",
  description: "Lead Product Manager in Nigeria who is Data-Driven, Detail-Oriented, and Problem Solver",
  keywords: ["Product Manager", "Portfolio", "Muhammad Abdulkadir", "Product Management", "UX", "Data-Driven"],
  authors: [{ name: "Muhammad Abdulkadir" }],
  creator: "Muhammad Abdulkadir",
  publisher: "Muhammad Abdulkadir",
  metadataBase: new URL("https://mabdulkadir.com"),
  openGraph: {
    title: "Product Manager Portfolio - Muhammad Abdulkadir",
    description: "Lead Product Manager in Nigeria who is Data-Driven, Detail-Oriented, and Problem Solver",
    url: "https://mabdulkadir.com",
    siteName: "Muhammad Abdulkadir",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Manager Portfolio - Muhammad Abdulkadir",
    description: "Lead Product Manager in Nigeria who is Data-Driven, Detail-Oriented, and Problem Solver",
    creator: "@mabdulkadir",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClientBody>
        <div className="flex flex-col min-h-screen">
          <AnnouncementBar />
          <Navigation />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </ClientBody>
    </html>
  );
}
