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

export const ALL_GENRES_QUERY = `
*[_type == "genre"] | order("title" desc){
  title,
  color,
}
`;

export const All_POST_WITH_PARAMS_QUERY = `
*[_type == "post" && 
  (!defined($search) || $search == "" || title match $search) && 
  (!defined($genre) || $genre == "" || genre->title == $genre)
] {
   mainImage {
    asset->{
      url
    },
    alt
  },
  title,
  slug { current },
  author->{
    name
  },
  genre->{
    title,
    color
  },
  publishedAt,
  short
} | order(publishedAt desc)[$start...$end]
`;

export const All_POST_WITH_PARAMS_COUNT_QUERY = `
count(*[_type == "post" && 
  (!defined($search) || $search == "" || title match $search) && 
  (!defined($genre) || $genre == "" || genre->title == $genre)
])
`;

export const GET_POST_BY_SLUG_QUERY = `
*[_type == "post" && slug.current == $slug][0] {
  mainImage {
    asset-> {
      url
    },
    alt
  },
  title,
  publishedAt,
  author-> {
    name
  },
  body,
  slug
}
`;
