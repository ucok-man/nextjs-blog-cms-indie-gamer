import { getPopularGenres } from "@/actions/genres";
import { getFeaturedPost } from "@/actions/posts";
import GenreCard from "@/components/shared/genre-card";
import Heading2 from "@/components/shared/heading-2";
import LogoAnimation from "@/components/shared/logo-animation";
import { PostCard } from "@/components/shared/post-card";
import SectionWrapper from "@/components/shared/section-wrapper";
import Subscription from "@/components/shared/subscription";
import { Iterate } from "@/components/utility";
import { formatTimestamp } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default async function HomePage() {
  const featuredPosts = await getFeaturedPost();
  const popularGenres = await getPopularGenres();

  return (
    <div>
      {/* Hero */}
      <SectionWrapper className="bg-brand-pink-300">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          {/* Content Text */}
          <div>
            <h1 className="font-mono text-5xl font-black lg:text-7xl mb-8">
              WELCOME TO
              <br />
              INDIE_GAMER
            </h1>
            <p className="max-w-lg text-xl mb-8 leading-relaxed">
              Delve into honest reviews, unique insights, and the vibrant
              culture of indie games. Join our community of devoted enthusiasts.
            </p>
            <Link
              href={"/gallery"}
              className="group flex items-center rounded-none border-4 bg-brand-green-400 px-6 py-3 font-mono text-lg font-bold shadow-brand-br-md transition-all hover:translate-x-brand-md hover:translate-y-brand-md hover:shadow-none max-w-[250px]"
            >
              Explore Posts
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Content IMAGE */}
          <LogoAnimation />
        </div>

        {/* Decorative elements */}
        <div className="absolute -left-16 -top-16 h-32 w-32 rounded-full border-8 border-black bg-brand-white-100"></div>
        <div className="absolute -bottom-8 -right-8 h-24 w-24 border-8 bg-brand-green-400 "></div>
      </SectionWrapper>

      {/* Featured Post */}
      <SectionWrapper className="bg-brand-white-50">
        <Heading2>FEATURED_POSTS</Heading2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Iterate
            items={featuredPosts}
            render={(post, idx) => (
              <PostCard
                key={idx}
                title={post.title}
                date={formatTimestamp(post.publishedAt)}
                genre={post.genre.title}
                genreColor={post.genre.color}
                imageUrl={post.mainImage.asset.url}
                imageAlt={post.mainImage.alt}
                short={post.short}
                href={`/post/${post.slug.current}`}
              />
            )}
          />
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-brand-white-100">
        <h2 className="mb-12 font-mono text-4xl font-black">POPULAR_GENRES</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Iterate
            items={popularGenres}
            render={(item, idx) => (
              <GenreCard
                key={idx}
                href={`/gallery?genre=${item.title}`}
                genre={{
                  name: item.title,
                  color: item.color,
                  count: item.recordCount,
                }}
                showCount
              />
            )}
          />
        </div>
      </SectionWrapper>

      <Subscription />
    </div>
  );
}
