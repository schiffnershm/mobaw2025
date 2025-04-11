import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "The HM Store Product Catalog",
  description: "The HM Demo store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
