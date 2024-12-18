export const FEATURED_POST_QUERY = `
*[_type == "post" && defined(publishedAt)] | order(publishedAt desc)[0...3] {
  mainImage {
    asset->{
      _id,
      url
    },
    alt
  },
  title,
  slug,
  author->{
    name
  },
  genre->{
    title,
    color
  },
  publishedAt,
  short
}
`;

export const POPULAR_GENRES_QUERY = `
*[_type == "genre"] | order(count(*[_type == "post" && references(^._id)]) desc)[0...6] {
  title,
  color,
  "recordCount": count(*[_type == "post" && references(^._id)])
}
`;
