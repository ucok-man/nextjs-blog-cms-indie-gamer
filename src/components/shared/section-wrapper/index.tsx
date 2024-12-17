import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionWrapper({ children, className }: Props) {
  return (
    <section className={cn("relative overflow-hidden py-20", className)}>
      <div className="px-6">{children}</div>
    </section>
  );
}
