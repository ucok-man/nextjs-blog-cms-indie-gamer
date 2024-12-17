import GenreCard from "@/components/shared/genre-card";
import Heading2 from "@/components/shared/heading-2";
import LogoAnimation from "@/components/shared/logo-animation";
import { PostCard } from "@/components/shared/post-card";
import SectionWrapper from "@/components/shared/section-wrapper";
import Subscription from "@/components/shared/subscription";
import { Iterate } from "@/components/utility";
import { GENRES_DUMMY, POSTS_DUMMY } from "@/constant";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
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
            <p className="max-w-md text-xl mb-8">
              Delve into honest reviews, unique insights, and the vibrant
              culture of indie games. Join our community of devoted enthusiasts.
            </p>
            <button className="group flex items-center rounded-none border-4 bg-brand-green-400 px-6 py-3 font-mono text-lg font-bold shadow-brand-br-md transition-all hover:translate-x-brand-md hover:translate-y-brand-md hover:shadow-none">
              Explore Posts
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </button>
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
            items={POSTS_DUMMY}
            render={(post, idx) => <PostCard key={idx} {...post} />}
          />
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-brand-white-100">
        <h2 className="mb-12 font-mono text-4xl font-black">POPULAR_GENRES</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Iterate
            items={GENRES_DUMMY}
            render={(item, idx) => (
              <GenreCard key={idx} href="#" genre={item} showCount />
            )}
          />
        </div>
      </SectionWrapper>

      <Subscription />
    </div>
  );
}
