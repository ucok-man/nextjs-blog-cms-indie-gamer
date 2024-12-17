import { If } from "@/components/utility";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Icons } from "../icons";

interface Genre {
  name: string;
  color: string;
  count: number;
}

interface LinkProps {
  genre: Genre;
  selected?: never;
  showCount?: boolean;
  href: string;
  nameClass?: string;
  containerClass?: string;
  onClick?: never;
}

interface ClickProps {
  genre: Genre;
  selected?: (genreName: string) => boolean;
  showCount?: boolean;
  href?: never;
  nameClass?: string;
  containerClass?: string;
  onClick: (category: string) => void;
}

type Props = LinkProps | ClickProps;

export default function GenreCard(props: Props) {
  const { genre, nameClass, containerClass, href, onClick } = props;

  const content = (
    <>
      <span
        className={cn(
          "font-mono text-xl font-bold flex justify-between items-center w-full",
          nameClass
        )}
      >
        <span>{genre.name}</span>{" "}
        {props.selected?.(props.genre.name) && (
          <Icons.logo className="size-8" />
        )}
      </span>
      <If condition={props.showCount !== undefined && props.showCount === true}>
        <span className="rounded-full bg-brand-white-100 px-3 py-1 font-mono text-sm">
          {props.genre.count}
        </span>
      </If>
    </>
  );

  const wrapperClass = cn(
    "group flex items-center justify-between rounded-none border-4 bg-brand-white-100 p-4 shadow-brand-br-md transition-all hover:translate-x-brand-md hover:translate-y-brand-md hover:shadow-none w-full cursor-pointer",
    containerClass
  );

  return (
    <If
      condition={props.href !== undefined}
      otherwise={
        <div
          className={wrapperClass}
          style={{ backgroundColor: genre.color }}
          onClick={() => props.onClick?.(genre.name)}
        >
          {content}
        </div>
      }
    >
      <Link
        href={href as string}
        className={wrapperClass}
        style={{ backgroundColor: genre.color }}
      >
        {content}
      </Link>
    </If>
  );
}
