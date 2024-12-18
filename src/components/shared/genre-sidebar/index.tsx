"use client";

import { Button } from "@/components/ui/button";
import { If, Iterate } from "@/components/utility";
import { ALL_GENRES_QUERY } from "@/constant/query";
import { useSearch } from "@/context/search";
import { cn } from "@/lib/utils";
import { client } from "@/sanity/lib/client";
import { useQuery } from "@tanstack/react-query";
import { Menu } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import GenreCard from "../genre-card";

export function GenreSidebar() {
  // TODO: FIX THIS IF FIND ANY BETTER SOLUTION
  useEffect(() => {
    const globalEnter = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        goSearch();
      }
    };

    document.addEventListener("keydown", globalEnter);

    return () => {
      document.removeEventListener("keydown", globalEnter);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchParams = useSearchParams();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState<string>(
    searchParams.get("genre") || ""
  );
  const { setParams, goSearch } = useSearch();

  useEffect(() => {
    setParams({
      key: "genre",
      value: selectedGenre,
    });
  }, [selectedGenre, setParams]);

  const { isLoading, data: genres } = useQuery<
    { title: string; color: string }[]
  >({
    queryKey: ["genre-filter"],
    queryFn: async () => client.fetch(ALL_GENRES_QUERY),
  });

  if (isLoading) {
    return <div></div>;
  }

  return (
    <div>
      {/* Mobile */}
      <div className="shadow-brand-br-lg bg-yellow-300 p-6 xl:hidden border-4">
        <Button
          variant={"default"}
          className="mb-4 bg-green-400 text-lg text-black w-full shadow-black shadow-[4px_4px] transition-all font-medium border-4"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <span>
            <Menu size={24} />
          </span>
          <span>
            {isSidebarOpen && "Close Genres"}
            {!isSidebarOpen && "Open Genres"}
          </span>
        </Button>

        <div className={cn("w-full", isSidebarOpen ? "block" : "hidden")}>
          <ul className="space-y-2">
            <Iterate
              items={genres!}
              render={(genre, idx) => (
                <GenreCard
                  selected={(name) => name === selectedGenre}
                  key={idx}
                  genre={{
                    color: genre.color,
                    name: genre.title,
                  }}
                  nameClass="font-medium text-base"
                  containerClass="p-2 px-4"
                  onClick={(genreName) => setSelectedGenre(genreName)}
                />
              )}
            />
            <If condition={selectedGenre !== ""}>
              <div>
                <Button
                  variant={"default"}
                  className="mt-4 bg-green-400 text-lg text-black w-full shadow-black shadow-[4px_4px] transition-all font-medium border-4"
                  onClick={() => {
                    setSelectedGenre("");
                    setIsSidebarOpen(false);
                  }}
                >
                  Clear Filter
                </Button>
              </div>
            </If>
          </ul>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden xl:block w-full max-w-xs space-y-6 rounded-none border-4 bg-yellow-300 p-6 shadow-brand-br-lg">
        <h2 className="font-mono text-2xl font-black">Genres</h2>
        <ul className="space-y-2">
          <Iterate
            items={genres!}
            render={(genre, idx) => (
              <GenreCard
                selected={(name) => name === selectedGenre}
                key={idx}
                genre={{
                  color: genre.color,
                  name: genre.title,
                }}
                nameClass="font-medium"
                onClick={(genreName) => setSelectedGenre(genreName)}
              />
            )}
          />
          <If condition={selectedGenre !== ""}>
            <div>
              <Button
                variant={"default"}
                className="mt-4 bg-green-400 text-lg text-black w-full shadow-black shadow-[4px_4px] transition-all font-medium border-4 py-6"
                onClick={() => {
                  setSelectedGenre("");
                  setIsSidebarOpen(false);
                }}
              >
                Clear Filter
              </Button>
            </div>
          </If>
        </ul>
      </div>
    </div>
  );
}
