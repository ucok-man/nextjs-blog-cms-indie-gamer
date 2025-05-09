"use client";

import { Button } from "@/components/ui/button";
import { useSearch } from "@/context/search";
import { cn } from "@/lib/utils";

type Props = {
  containerClass?: string;
};

export default function SearchButton({ containerClass }: Props) {
  const { goSearch, isSearching } = useSearch();

  return (
    <div
      className={cn(
        "border-4 shadow-brand-br-md hover:translate-x-brand-md hover:translate-y-brand-md hover:shadow-none transition-all",
        containerClass
      )}
    >
      <Button
        disabled={isSearching}
        size={"sm"}
        onClick={goSearch}
        className="text-lg border-none uppercase bg-brand-green-400 hover:bg-brand-green-400 text-black w-full font-semibold p-6"
      >
        {isSearching && "Searching..."}
        {!isSearching && "Search"}
      </Button>
    </div>
  );
}
