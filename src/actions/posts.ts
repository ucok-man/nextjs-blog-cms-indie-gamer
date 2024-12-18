import { FEATURED_POST_QUERY } from "@/constant/query";
import { client } from "@/sanity/lib/client";

/* ---------------------------------------------------------------- */
/*                           featured post                          */
/* ---------------------------------------------------------------- */

export interface IFetchFeaturedPostResult {
  mainImage: {
    asset: {
      _id: string;
      url: string;
    };
    alt: string;
  };
  title: string;
  short: string;
  slug: {
    current: string;
    _type: string;
  };
  author: {
    name: string;
  };
  genre: {
    title: string;
    color: string;
  };
  publishedAt: Date;
}

export async function getFeaturedPost(): Promise<IFetchFeaturedPostResult[]> {
  const data = await client.fetch(FEATURED_POST_QUERY);
  return data as IFetchFeaturedPostResult[];
}
