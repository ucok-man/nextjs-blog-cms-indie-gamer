import { ALL_GENRES_QUERY, POPULAR_GENRES_QUERY } from "@/constant/query";
import { client } from "@/sanity/lib/client";

export interface IFetchPopularGenreResult {
  title: string;
  color: string;
  recordCount: number;
}

export async function getPopularGenres(): Promise<IFetchPopularGenreResult[]> {
  const data = await client.fetch(POPULAR_GENRES_QUERY);
  return data as IFetchPopularGenreResult[];
}

export interface IFetchAllGenreResult {
  title: string;
  color: string;
}

export async function getAllGenre(): Promise<IFetchAllGenreResult[]> {
  const data = await client.fetch(ALL_GENRES_QUERY);
  return data as IFetchAllGenreResult[];
}
