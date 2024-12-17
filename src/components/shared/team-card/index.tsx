import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
  author: {
    image: string;
    name: string;
    role: string;
    bio: string;
  };
};

export default function TeamCard({ author }: Props) {
  return (
    <div
      className={cn(
        "group relative rounded-none border-4 bg-brand-white-50 p-4 shadow-brand-br-md transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none",
        "max-w-sm lg:flex lg:max-w-4xl lg:gap-x-8"
      )}
    >
      <div className="mb-4 aspect-square overflow-hidden rounded-none border-4 border-black grow max-h-[200px] w-full">
        <Image
          src={author.image}
          alt={author.name}
          width={400}
          height={400}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="max-w-xl">
        <h3 className="font-mono text-2xl font-bold">{author.name}</h3>
        <p className="mb-2 text-base text-gray-600">{author.role}</p>
        <p className="text-base">{author.bio}</p>
      </div>
    </div>
  );
}
