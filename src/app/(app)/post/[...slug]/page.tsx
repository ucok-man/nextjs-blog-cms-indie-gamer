import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: {
    slug: string;
  };
};

export default function PostDetailPage({ params }: Props) {
  // Dummy blog post data
  const post = {
    title: "The Rise of Neo Brutalism in Web Design",
    date: "December 16, 2023",
    author: "Jane Doe",
    headlineImage: "/placeholder.svg?height=600&width=1200",
    content: `
      <p>Neo Brutalism is making waves in the world of web design, bringing a bold and unapologetic aesthetic to the digital landscape. This style, characterized by its raw, unpolished look, is a reaction to the sleek, minimalist designs that have dominated the web for years.</p>
      
      <h2>What is Neo Brutalism?</h2>
      
      <p>Neo Brutalism in web design takes inspiration from the architectural movement of the same name. It features:</p>
      
      <ul>
        <li>High-contrast color schemes</li>
        <li>Bold, oversized typography</li>
        <li>Stark, geometric shapes</li>
        <li>Lack of shadows or gradients</li>
        <li>Intentionally "unfinished" or "raw" look</li>
      </ul>
      
      <h2>Why is it gaining popularity?</h2>
      
      <p>In an era of cookie-cutter websites, Neo Brutalism offers a refreshing change. It allows designers to create memorable, impactful experiences that stand out in a crowded digital space. Moreover, its simplicity can lead to faster loading times and improved performance.</p>
      
      <h2>Implementing Neo Brutalism in Your Designs</h2>
      
      <p>To incorporate Neo Brutalism into your web designs, consider the following:</p>
      
      <ol>
        <li>Use bold, contrasting colors</li>
        <li>Opt for sans-serif fonts in large sizes</li>
        <li>Embrace asymmetry and unconventional layouts</li>
        <li>Incorporate basic shapes and simple illustrations</li>
        <li>Don't be afraid of empty space</li>
      </ol>
      
      <p>While Neo Brutalism might not be suitable for every project, it offers an exciting avenue for designers looking to push boundaries and create truly unique web experiences.</p>
    `,
  };

  return (
    <div className="min-h-screen bg-[#F0F0F0] pb-16">
      <header className="bg-[#B4FF39] p-4 shadow-[0_4px_0_0_rgba(0,0,0,1)]">
        <div className="container mx-auto">
          <Link
            href="/gallery"
            className="inline-flex items-center rounded-none border-4 border-black bg-white px-4 py-2 font-mono text-lg font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
          >
            <ArrowLeft className="mr-2" />
            Back to Gallery
          </Link>
        </div>
      </header>

      <main className="container mx-auto mt-16 px-4">
        <article className="mx-auto max-w-4xl rounded-none border-8 border-black bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden border-b-8 border-black">
            <Image
              src={post.headlineImage}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8">
            <h1 className="mb-4 font-mono text-4xl font-black md:text-5xl">
              {post.title}
            </h1>
            <div className="mb-8 flex items-center justify-between border-b-4 border-black pb-4">
              <span className="font-mono text-lg">{post.date}</span>
              <span className="rounded-none border-4 border-black bg-[#FFB6E1] px-3 py-1 font-mono text-sm">
                By {post.author}
              </span>
            </div>
            <div
              className="prose prose-lg max-w-none prose-headings:font-mono prose-headings:font-bold prose-p:mb-4 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:font-bold prose-ul:list-disc prose-ol:list-decimal"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>
      </main>

      <div className="container mx-auto mt-16 px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 font-mono text-3xl font-black">Read Next</h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {[1, 2].map((i) => (
              <Link
                key={i}
                href={`/blog/dummy-post-${i}`}
                className="group block rounded-none border-4 border-black bg-white p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
              >
                <h3 className="mb-2 font-mono text-xl font-bold">
                  Another Interesting Article {i}
                </h3>
                <p className="text-gray-600">
                  This is a brief excerpt of another article that might interest
                  the reader...
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
