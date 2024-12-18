import {
  All_POST_WITH_PARAMS_COUNT_QUERY,
  All_POST_WITH_PARAMS_QUERY,
  FEATURED_POST_QUERY,
} from "@/constant/query";
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

/* ---------------------------------------------------------------- */
/*                      fetch post with params                      */
/* ---------------------------------------------------------------- */

export interface IFetchAllPostParamsResult {
  data: {
    mainImage: {
      asset: {
        url: string;
      };
      alt: string;
    };
    title: string;
    slug: {
      current: string;
    };
    author: {
      name: string;
    };
    genre: {
      title: string;
      color: string;
    };
    publishedAt: string;
    short: string;
  }[];

  meta: {
    resultCount: number;
  };
}

export async function getAllPostParams(params: {
  search: string | null;
  genre: string | null;
  start: number;
  end: number;
}): Promise<IFetchAllPostParamsResult> {
  const [data, resultCount] = await Promise.all([
    client.fetch(All_POST_WITH_PARAMS_QUERY, params),
    client.fetch(All_POST_WITH_PARAMS_COUNT_QUERY, params),
  ]);
  return {
    data: data,
    meta: { resultCount: resultCount },
  } as IFetchAllPostParamsResult;
}
