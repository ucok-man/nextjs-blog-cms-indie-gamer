import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const genreType = defineType({
  name: "genre",
  title: "Genre",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "color",
      type: "string",
    }),
  ],
});
