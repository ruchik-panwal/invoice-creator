import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pin Voice",
  description: "Give me an invoice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
