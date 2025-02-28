import type { Metadata, Viewport } from "next";
import { Inter, Lato } from "next/font/google";
import { Layout } from "../lib/layouts/layout";
import { ReactQueryProvider } from "../lib/providers/query-provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400"], // Regular
  display: "swap",
  variable: "--font-lato",
});

import "./globals.css";

export const metadata: Metadata = {
  title: "Soar: Front-End Developer Assessment Task",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${lato.variable}`}>
      <body>
        <ReactQueryProvider>
          <Layout>{children}</Layout>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
