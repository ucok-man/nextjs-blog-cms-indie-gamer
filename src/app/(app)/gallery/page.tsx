import { getAllPostParams } from "@/actions/posts";
import { GenreSidebar } from "@/components/shared/genre-sidebar";
import Heading1 from "@/components/shared/heading-1";
import Pagination from "@/components/shared/pagination";
import { PostCard } from "@/components/shared/post-card";
import { SearchBox } from "@/components/shared/search-box";
import SearchButton from "@/components/shared/search-button";
import SectionWrapper from "@/components/shared/section-wrapper";
import { If, Iterate } from "@/components/utility";
import { formatTimestamp } from "@/lib/utils";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Gallery",
};

type Props = {
  searchParams: {
    search?: string;
    genre?: string;
    page?: string;
  };
};

export default async function GalleryPage({ searchParams }: Props) {
  const pageSize = 4;
  const currentPage = Number(searchParams.page) || 1;

  const {
    data: posts,
    meta: { resultCount },
  } = await getAllPostParams({
    search: searchParams.search || "",
    genre: searchParams.genre || "",
    start: (currentPage - 1) * pageSize,
    end: currentPage * pageSize,
  });

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

          <If
            condition={posts.length > 0}
            otherwise={
              <div className="flex flex-col justify-center items-center max-lg:h-[50vh]">
                <h1 className="text-3xl font-medium tracking-wide uppercase text-center text-black/70">
                  Whoops! We couldn&apos;t find anything 👻
                </h1>
                <p className="text-lg text-center text-gray-700">
                  But don&apos;t worry, the search continues. Try looking for
                  something else!
                </p>
              </div>
            }
          >
            <section className="grid gap-y-16 gap-x-8 lg:grid-cols-2 max-lg:place-items-center">
              <Iterate
                items={posts}
                render={(post) => (
                  <div key={post.slug.current} className="lg:max-h-[500px]">
                    <PostCard
                      title={post.title}
                      date={formatTimestamp(post.publishedAt)}
                      genre={post.genre.title}
                      genreColor={post.genre.color}
                      imageUrl={post.mainImage.asset.url}
                      imageAlt={post.mainImage.alt}
                      short={post.short}
                      href={`/post/${post.slug.current}`}
                    />
                  </div>
                )}
              />
              <div className="flex items-center justify-center space-x-4 col-span-full">
                <Pagination
                  currentPage={currentPage}
                  totalPage={Math.ceil(resultCount / pageSize)}
                />
              </div>
            </section>
          </If>
        </div>
      </SectionWrapper>
    </div>
  );
}
