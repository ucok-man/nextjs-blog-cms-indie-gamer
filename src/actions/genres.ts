import { POPULAR_GENRES_QUERY } from "@/constant/query";
import { client } from "@/sanity/lib/client";

export interface IFetchPopularGenres {
  title: string;
  color: string;
  recordCount: number;
}

export async function getPopularGenres(): Promise<IFetchPopularGenres[]> {
  const data = await client.fetch(POPULAR_GENRES_QUERY);
  return data as IFetchPopularGenres[];
}
