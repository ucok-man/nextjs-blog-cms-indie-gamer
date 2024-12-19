import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import { Toaster } from "@/components/ui/toaster";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: Props) {
  return (
    <div className="font-firaCode min-h-screen">
      <Navbar />
      <div className="min-h-screen bg-brand-white-50 lg:p-24">
        <div className="relative mx-auto overflow-hidden rounded-none border-8 shadow-brand-br-xl">
          <main>{children}</main>
        </div>
      </div>
      <Footer />
      <Toaster />
    </div>
  );
}
