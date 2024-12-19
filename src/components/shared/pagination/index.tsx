"use client";

import { useSearch } from "@/context/search";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  totalPage: number;
  currentPage: number;
};

export default function Pagination({ currentPage, totalPage }: Props) {
  return (
    <>
      <PaginationButton
        key={"prev"}
        direction="prev"
        currentPage={currentPage}
        disabled={currentPage <= 1}
      />
      <span className="font-mono text-lg font-bold">
        Page {currentPage} of {totalPage}
      </span>
      <PaginationButton
        key={"next"}
        direction="next"
        currentPage={currentPage}
        disabled={currentPage >= totalPage}
      />
    </>
  );
}

interface PaginationButtonProps {
  direction: "prev" | "next";
  disabled: boolean;
  currentPage: number;
}

function PaginationButton({
  direction,
  currentPage,
  disabled,
}: PaginationButtonProps) {
  const { setParams, goSearch } = useSearch();

  const handleClick = () => {
    setParams({
      key: "page",
      value: direction === "next" ? currentPage + 1 : currentPage - 1,
    });
    goSearch();
  };

  const Icon = direction === "prev" ? ChevronLeft : ChevronRight;

  return (
    <div
      key={direction}
      onClick={handleClick}
      className={cn(
        `group flex items-center rounded-none border-4 bg-green-400 px-4 py-2 font-mono text-lg font-bold cursor-pointer`,
        disabled
          ? "cursor-not-allowed opacity-50"
          : "shadow-brand-br-md transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
      )}
    >
      {direction === "prev" && <Icon className="mr-2 h-5 w-5" />}
      {direction === "prev" ? "Prev" : "Next"}
      {direction === "next" && <Icon className="ml-2 h-5 w-5" />}
    </div>
  );
}
