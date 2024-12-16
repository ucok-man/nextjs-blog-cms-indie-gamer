import { client } from "@/sanity/lib/client";
import { Post } from "@/sanity/types";

export type GetAllPostType = Omit<Post, "body">[];

export async function getAllPost(): Promise<GetAllPostType> {
  const query = `
          *[_type == "post"] {
              title,
              slug,
              publishedAt,
              excerpt,
          }
      `;
  const data = await client.fetch(query);
  return data as GetAllPostType;
}
