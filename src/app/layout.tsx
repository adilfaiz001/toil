import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const quicksand = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "Toil",
  description: "Organize yours documents with AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quicksand.className}>{children}</body>
    </html>
  );
}
