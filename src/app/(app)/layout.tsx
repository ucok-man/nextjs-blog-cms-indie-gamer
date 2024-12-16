import Navbar from "@/components/shared/navbar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: Props) {
  return (
    <div className="font-firaCode bg-brand-eunry-200 min-h-screen">
      <section className="bg-brand-white-100  max-w-screen-xl mx-auto border-4 rounded-lg shadow-brand-y-md">
        <Navbar />
        <main>{children}</main>
      </section>
    </div>
  );
}
