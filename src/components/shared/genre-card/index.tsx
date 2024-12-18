import { cn } from "@/lib/utils";
import Link from "next/link";
import { Icons } from "../icons";

interface Genre {
  name: string;
  color: string;
  count?: number;
}

interface Props {
  genre: Genre;
  selected?: (genreName: string) => boolean;
  showCount?: boolean;
  href?: string;
  nameClass?: string;
  containerClass?: string;
  onClick?: (genre: string) => void;
}

export default function GenreCard({
  genre,
  selected,
  showCount,
  href,
  nameClass,
  containerClass,
  onClick,
}: Props) {
  const content = (
    <>
      <span
        className={cn(
          "font-mono text-xl font-bold flex justify-between items-center w-full",
          nameClass
        )}
      >
        <span>{genre.name}</span>
        {selected?.(genre.name) && <Icons.logo className="size-8" />}
      </span>
      {showCount && (
        <span className="rounded-full bg-brand-white-100 px-3 py-1 font-mono text-sm">
          {genre.count}
        </span>
      )}
    </>
  );

  const wrapperClass = cn(
    "group flex items-center justify-between rounded-none border-4 bg-brand-white-100 p-4 shadow-brand-br-md transition-all hover:translate-x-brand-md hover:translate-y-brand-md hover:shadow-none w-full cursor-pointer",
    containerClass
  );

  const style = { backgroundColor: genre.color };

  return href ? (
    <Link href={href} className={wrapperClass} style={style}>
      {content}
    </Link>
  ) : (
    <div
      className={wrapperClass}
      style={style}
      onClick={() => onClick?.(genre.name)}
    >
      {content}
    </div>
  );
}
