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
        "relative mb-8 font-mono font-black text-7xl uppercase z-20 ",
        className
      )}
    >
      {children}
    </h1>
  );
}
