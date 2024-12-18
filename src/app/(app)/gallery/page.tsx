import { getAllPost } from "@/actions/post";
import { GenreSidebar } from "@/components/shared/genre-sidebar";
import Heading1 from "@/components/shared/heading-1";
import { PostCard } from "@/components/shared/post-card";
import { SearchBox } from "@/components/shared/search-box";
import SearchButton from "@/components/shared/search-button";
import SectionWrapper from "@/components/shared/section-wrapper";
import { Iterate } from "@/components/utility";
import { POSTS_DUMMY } from "@/constant";

type Props = {
  searchParams: {
    query?: string;
    genre?: string;
    page?: string;
  };
};

export default async function GalleryPage({ searchParams }: Props) {
  const posts = await getAllPost();

  return (
    <div>
      <SectionWrapper className="bg-brand-pink-300">
        <Heading1>Gallery</Heading1>

        <div className="flex flex-col gap-4 xl:max-w-2xl items-center mx-auto">
          <SearchBox containerClass="w-full" />
          <SearchButton containerClass="w-full" />
        </div>

        {/* Decorative elements */}
        <div className="absolute right-12 top-12 h-16 w-16 rounded-full border-4 border-black bg-brand-green-400" />
        <div className="absolute right-32 top-24 h-8 w-8 border-4 border-black bg-orange-400" />
      </SectionWrapper>

      <SectionWrapper className="bg-brand-white-100">
        <div className="grid gap-8 xl:grid-cols-[300px_1fr]">
          <aside>
            <GenreSidebar />
          </aside>
          <section className="grid gap-8 lg:grid-cols-2">
            <Iterate
              items={POSTS_DUMMY}
              render={(post, idx) => <PostCard key={idx} {...post} />}
            />
          </section>
        </div>
      </SectionWrapper>
    </div>
  );
}
