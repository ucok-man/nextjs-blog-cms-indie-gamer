import { getAllPost } from "@/actions/post";
import { If, Iterate } from "@/components/utility";
import Image from "next/image";

export default async function GalleryPage() {
  const posts = await getAllPost();
  return (
    <div>
      <section className="relative max-h-[250px] overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <div className="abosolute top-0 left-0 inset-0 max-h-[250px]">
          <Image
            src="/junggle.png"
            alt="Junggle Game"
            width={1300}
            height={700}
            className="object-fill w-full h-full"
          />
        </div>
        <div className="absolute w-full h-full top-0 flex justify-center items-center">
          <h2 className="text-amber-100 text-4xl uppercase">Gallery</h2>
        </div>
      </section>
      <If condition={posts.length > 0}>
        <Iterate
          items={posts}
          render={(post, idx) => <div key={idx}>{post.title}</div>}
        />
      </If>
    </div>
  );
}
