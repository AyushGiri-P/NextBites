
import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NextBites",
  description: "Discover delicious recipes from around the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <Link href="/" className="logo">NextBites</Link>
          <span>Discover • Cook • Enjoy</span>
        </nav>

        {children}
      </body>
    </html>
  );
}
