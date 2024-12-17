import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Heading1({ children, className }: Props) {
  return (
    <h1
      className={cn(
        "mb-8 font-mono text-5xl font-black lg:text-7xl uppercase",
        className
      )}
    >
      {children}
    </h1>
  );
}
