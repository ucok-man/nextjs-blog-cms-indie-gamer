import { QueryProviders } from "@/context/query";
import React from "react";
import { firacode } from "./fonts";
import "./globals.css";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: {
    default: "Indie Gamer",
    template: "%s | Indie Gamer",
  },
  description: "Indie Gamers",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={`${firacode.variable} antialiased`}>
        <QueryProviders>{children}</QueryProviders>
      </body>
    </html>
  );
}
