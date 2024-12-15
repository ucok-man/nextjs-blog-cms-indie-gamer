import type { Metadata } from "next";
import React from "react";
import { firacode } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Indie Gamers |",
  description: "Indie Gamers",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={`${firacode.variable} antialiased`}>{children}</body>
    </html>
  );
}
