import FeaturedPost from "@/components/shared/featured-post";
import Hero from "@/components/shared/hero";
import PopularGenre from "@/components/shared/popular-genre";
import Subscription from "@/components/shared/subscription";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <FeaturedPost />
      <PopularGenre />
      <Subscription />
    </div>
  );
}
