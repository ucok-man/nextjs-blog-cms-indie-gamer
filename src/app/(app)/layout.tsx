import Background from "@/components/shared/background";
import Navbar from "@/components/shared/navbar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: Props) {
  return (
    <div className="font-firaCode">
      <Background />
      <Navbar />
      <main className="container mx-auto px-6">{children}</main>
    </div>
  );
}
