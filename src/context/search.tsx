"use client";

import { useRouter } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  useTransition,
} from "react";

// Define types for the params
type ParamConstructType = {
  search: string;
  genre: string;
};

type Key = keyof ParamConstructType;

// Define the context type
interface SearchContextType {
  paramsConstruct: ParamConstructType;
  setParams: (input: { key: Key; value: string }) => void;
  goSearch: () => void;
  isSearching: boolean;
}

// Create the context
export const SearchContext = createContext<SearchContextType | undefined>(
  undefined
);

// SearchProvider component to provide the context
export default function SearchProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // State for managing the search parameters
  const [paramsConstruct, setParamsConstruct] = useState<ParamConstructType>({
    search: "",
    genre: "",
  });

  const setParams = useCallback((input: { key: Key; value: string }) => {
    setParamsConstruct((prev) => ({
      ...prev,
      [input.key]: input.value,
    }));
  }, []);

  const [trigger, setTrigger] = useState<boolean>(true);
  const goSearch = useCallback(() => {
    setTrigger((prev) => !prev);
  }, []);

  const router = useRouter();
  const [isSearching, startTransition] = useTransition();

  const handleSearch = () => {
    const searchQuery = paramsConstruct.search
      ? `search=${paramsConstruct.search}`
      : "";

    const filterQuery = paramsConstruct.genre
      ? `genre=${paramsConstruct.genre}`
      : "";

    switch (true) {
      case paramsConstruct.search === "" && paramsConstruct.genre == "":
        startTransition(() => {
          router.push(`/gallery`);
        });
        break;

      case paramsConstruct.search !== "" && paramsConstruct.genre === "":
        startTransition(() => {
          router.push(`/gallery?${searchQuery}`);
        });
        break;

      case paramsConstruct.genre !== "" && paramsConstruct.search === "":
        startTransition(() => {
          router.push(`/gallery?${filterQuery}`);
        });
        break;

      case paramsConstruct.genre !== "" && paramsConstruct.search !== "":
        startTransition(() => {
          router.push(`/gallery?${searchQuery}&${filterQuery}`);
        });
        break;
    }
  };

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger]);

  return (
    <SearchContext.Provider
      value={{ goSearch, setParams, isSearching, paramsConstruct }}
    >
      {children}
    </SearchContext.Provider>
  );
}

// Custom hook to use the search context
export const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
