"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";

type Props = {
  containerClass?: string;
} & React.ComponentProps<typeof Input>;

export function SearchBox({ containerClass, ...props }: Props) {
  return (
    <div
      className={cn(
        "relative shadow-brand-br-md transition-all hover:translate-x-brand-md hover:translate-y-brand-md hover:shadow-none",
        containerClass
      )}
    >
      <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform" />
      <Input
        {...props}
        className="h-12 w-full rounded-none border-4 bg-brand-white-50 pl-10 font-mono text-lg"
        placeholder="Search post..."
      />
    </div>
  );
}
