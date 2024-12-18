"use client";

import { useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";
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
  page: number;
};

type Key = keyof ParamConstructType;

// Define the context type
interface SearchContextType {
  paramsConstruct: ParamConstructType;
  setParams: (input: { key: Key; value: ParamConstructType[Key] }) => void;
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
  const searchParams = useSearchParams();

  // State for managing the search parameters
  const [paramsConstruct, setParamsConstruct] = useState<ParamConstructType>({
    genre: searchParams.get("genre") || "",
    search: searchParams.get("search") || "",
    page: Number(searchParams.get("page")) || 1,
  });

  const setParams = useCallback(
    (input: { key: Key; value: ParamConstructType[Key] }) => {
      setParamsConstruct((prev) => ({
        ...prev,
        [input.key]: input.value,
      }));
    },
    []
  );

  const [trigger, setTrigger] = useState<boolean>(true);
  const goSearch = useCallback(() => {
    setTrigger((prev) => !prev);
  }, []);

  const router = useRouter();
  const [isSearching, startTransition] = useTransition();

  const handleSearch = () => {
    const sanitizedParams = {
      genre: paramsConstruct.genre || undefined,
      search: paramsConstruct.search || undefined,
      page: paramsConstruct.page || undefined,
    };

    const query = queryString.stringify(sanitizedParams);
    startTransition(() => {
      router.push(`/gallery?${query}`);
    });
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
