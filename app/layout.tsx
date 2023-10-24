import type { Metadata } from "next";
import { IBM_Plex_Sans_Condensed } from "next/font/google";
import "./globals.css";

const DEFAULT_FONT = IBM_Plex_Sans_Condensed({ weight: ["400", "700"], subsets: ["latin"]  });

export const metadata: Metadata = {
  title: "EDGE Core ITB",
  description: "Website created by EDGE Core ITB",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={DEFAULT_FONT.className}>{children}</body>
    </html>
  );
}
