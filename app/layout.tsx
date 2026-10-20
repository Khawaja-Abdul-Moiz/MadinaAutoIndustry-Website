import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Madina Auto Industries",
  description:
    "Reliable motorcycle parts manufactured by Madina Auto Industries in Pakistan.",
  icons: {
    icon: "/favicon.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
