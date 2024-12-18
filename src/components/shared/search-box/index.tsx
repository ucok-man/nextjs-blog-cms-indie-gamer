"use client";

// import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSearch } from "@/context/search";
import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";
import { useRef } from "react";

type Props = {
  containerClass?: string;
};

export function SearchBox({ containerClass }: Props) {
  const { goSearch, isSearching, setParams, paramsConstruct } = useSearch();
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className={cn(
        "relative shadow-brand-br-md transition-all hover:translate-x-brand-md hover:translate-y-brand-md hover:shadow-none",
        containerClass
      )}
    >
      <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform" />
      <Input
        disabled={isSearching}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            goSearch();
          }

          if (e.key === "Escape") {
            inputRef?.current?.blur();
          }
        }}
        value={paramsConstruct.search}
        onChange={(e) =>
          setParams({
            key: "search",
            value: e.target.value,
          })
        }
        ref={inputRef}
        className="h-12 w-full rounded-none border-4 bg-brand-white-50 pl-10 font-mono text-lg"
        placeholder="Search post..."
      />
      {/* <Button
        variant={"noShadow"}
        disabled={isSearching}
        size={"sm"}
        onClick={goSearch}
        className="absolute inset-y-0 right-0 h-full rounded-none transform"
      >
        {isSearching && "Searching..."}
        {!isSearching && "Search"}
      </Button> */}
    </div>
  );
}
