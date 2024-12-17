import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Heading2({ children, className }: Props) {
  return (
    <h2
      className={cn("mb-12 font-mono text-4xl font-black uppercase", className)}
    >
      {children}
    </h2>
  );
}
