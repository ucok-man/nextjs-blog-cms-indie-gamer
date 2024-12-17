import { Iterate } from "@/components/utility";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "../section-wrapper";

const featuredPosts = [
  {
    title: "The Rise of Neo Brutalism in Web Design",
    excerpt:
      "Explore how this bold and unapologetic style is shaping the future of web aesthetics.",
    genre: {
      name: "Survival",
      color: "#FFB6E1",
    },
    image: "/junggle.png",
    slug: "rise-of-neo-brutalism-in-web-design",
  },
  {
    title: "10 Must-Know JavaScript Tricks for 2024",
    excerpt:
      "Level up your coding game with these essential JavaScript techniques.",
    genre: {
      name: "Survival",
      color: "#FFB6E1",
    },
    image: "/junggle.png",
    slug: "must-know-javascript-tricks-2024",
  },
  {
    title: "The Ethics of AI in Content Creation",
    excerpt:
      "Examining the implications of AI-generated content in the digital landscape.",
    genre: {
      name: "Survival",
      color: "#FFB6E1",
    },
    image: "/junggle.png",
    slug: "ethics-of-ai-in-content-creation",
  },
];

export default function FeaturedPost() {
  return (
    <SectionWrapper className="bg-brand-white-50">
      <h2 className="mb-12 font-mono text-4xl font-black">FEATURED_POSTS</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <Iterate
          items={featuredPosts}
          render={(item, idx) => (
            <article
              key={idx}
              className="group relative rounded-none border-4 bg-brand-white-50 p-4 shadow-brand-br-xl transition-all hover:translate-x-brand-lg hover:translate-y-brand-lg hover:shadow-none"
            >
              <div className="aspect-video overflow-hidden border-2">
                <Image
                  src={item.image}
                  alt={item.title}
                  height={200}
                  width={200}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-4 space-y-2">
                <span
                  className="inline-block rounded-none border-2 bg-yellow-400 px-2 py-1 font-mono text-sm"
                  style={{ backgroundColor: item.genre.color }}
                >
                  {item.genre.name}
                </span>
                <h3 className="font-mono text-xl font-bold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.excerpt}</p>
              </div>
              <Link
                href={`/blog/${item.slug}`}
                className="absolute bottom-4 right-4 rounded-full border-2 bg-brand-green-400 p-2 opacity-0 transition-opacity group-hover:opacity-100"
              >
                <ArrowUpRight size={24} />
              </Link>
            </article>
          )}
        />
      </div>
    </SectionWrapper>
  );
}
