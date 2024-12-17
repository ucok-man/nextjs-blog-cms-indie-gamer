"use client";

import { Button } from "@/components/ui/button";
import { If, Iterate } from "@/components/utility";
import { GENRES_DUMMY } from "@/constant";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useState } from "react";
import GenreCard from "../genre-card";

export function GenreSidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

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
              items={GENRES_DUMMY}
              render={(genre, idx) => (
                <GenreCard
                  selected={(name) => name === selectedGenre}
                  key={idx}
                  genre={genre}
                  nameClass="font-medium text-base"
                  containerClass="p-2 px-4"
                  onClick={(genreName) => setSelectedGenre(genreName)}
                />
              )}
            />
            <If condition={selectedGenre !== null}>
              <div>
                <Button
                  variant={"default"}
                  className="mt-4 bg-green-400 text-lg text-black w-full shadow-black shadow-[4px_4px] transition-all font-medium border-4"
                  onClick={() => {
                    setSelectedGenre(null);
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
            items={GENRES_DUMMY}
            render={(genre, idx) => (
              <GenreCard
                selected={(name) => name === selectedGenre}
                key={idx}
                genre={genre}
                nameClass="font-medium"
                onClick={(genreName) => setSelectedGenre(genreName)}
              />
            )}
          />
          <If condition={selectedGenre !== null}>
            <div>
              <Button
                variant={"default"}
                className="mt-4 bg-green-400 text-lg text-black w-full shadow-black shadow-[4px_4px] transition-all font-medium border-4 py-6"
                onClick={() => {
                  setSelectedGenre(null);
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
