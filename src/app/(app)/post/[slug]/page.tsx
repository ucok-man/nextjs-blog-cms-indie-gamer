import { getPostBySlug } from "@/actions/posts";
import { formatdate } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostDetailPage({ params }: Props) {
  const post = await getPostBySlug(params);

  return (
    <div className="min-h-screen bg-brand-white-50 pb-16">
      <header className="bg-yellow-300 p-4 shadow-brand-y-lg">
        <div className="container mx-auto">
          <Link
            href="/gallery"
            className="inline-flex items-center rounded-none border-4 bg-brand-white-50 px-4 py-2 font-mono text-lg font-bold shadow-brand-br-md transition-all hover:translate-x-brand-md hover:translate-y-brand-md hover:shadow-none"
          >
            <ArrowLeft className="mr-2" />
            Back to Gallery
          </Link>
        </div>
      </header>

      <section className="container mx-auto mt-16 px-4">
        <article className="mx-auto max-w-4xl rounded-none border-8 bg-brand-white-50 shadow-brand-br-xl">
          <div className="relative aspect-[16/9] w-full overflow-hidden border-b-8">
            <Image
              src={post.mainImage.asset.url}
              alt={post.mainImage.alt}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8">
            <h1 className="mb-4 font-mono text-4xl font-black md:text-5xl">
              {post.title}
            </h1>
            <div className="mb-8 flex items-center justify-between border-b-4 pb-4">
              <span className="font-mono text-lg">
                {formatdate(post.publishedAt)}
              </span>
              <span className="rounded-none border-4 bg-[#FFB6E1] px-3 py-1 font-mono text-sm">
                By {post.author.name}
              </span>
            </div>
            <div className="prose prose-lg max-w-none prose-headings:font-mono prose-headings:font-bold prose-p:mb-4 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:font-bold prose-ul:list-disc prose-ol:list-decimal">
              <PortableText value={post.body} />
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}

//
