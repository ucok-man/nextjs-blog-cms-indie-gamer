import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  short: string;
  date: string;
  genre: string;
  genreColor: string;
  imageUrl: string;
  imageAlt: string;
  href: string;
};

export function PostCard({
  title,
  short,
  date,
  genre,
  imageUrl,
  href,
  imageAlt,
  genreColor,
}: Props) {
  return (
    <article className="group relative rounded-none border-4 bg-brand-white-50 p-4 shadow-brand-br-xl transition-all hover:translate-x-brand-lg hover:translate-y-brand-lg hover:shadow-none">
      <div className="aspect-video overflow-hidden border-2">
        <Image
          src={imageUrl}
          alt={imageAlt}
          height={200}
          width={200}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mt-4 space-y-3">
        <div className="flex items-center justify-between">
          <span
            className="rounded-none border-2 bg-[#FFB6E1] px-3 py-1 font-mono text-sm"
            style={{
              backgroundColor: genreColor,
            }}
          >
            {genre}
          </span>
          <time className="font-mono text-sm text-muted-foreground">
            {date}
          </time>
        </div>
        <h3 className="font-mono text-xl font-bold">{title}</h3>
        <p className="line-clamp-2 text-muted-foreground">{short}</p>
      </div>
      <Link
        href={href}
        className="absolute bottom-4 right-4 rounded-full border-2 bg-brand-green-400 p-2 opacity-0 transition-opacity group-hover:opacity-100"
      >
        <ArrowUpRight size={24} />
      </Link>
    </article>
  );
}
