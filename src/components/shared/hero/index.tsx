import { ArrowRight } from "lucide-react";
import { Icons } from "../icons";
import SectionWrapper from "../section-wrapper";

export default function Hero() {
  return (
    <SectionWrapper className="bg-brand-pink-300">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
        {/* Content Text */}
        <div className="">
          <h1 className="font-mono text-5xl font-black lg:text-7xl mb-8">
            WELCOME TO
            <br />
            INDIE_GAMER
          </h1>
          <p className="max-w-md text-xl mb-8">
            Delve into honest reviews, unique insights, and the vibrant culture
            of indie games. Join our community of devoted enthusiasts.
          </p>
          <button className="group flex items-center rounded-none border-4 bg-brand-green-400 px-6 py-3 font-mono text-lg font-bold shadow-brand-br-md transition-all hover:translate-x-brand-md hover:translate-y-brand-md hover:shadow-none">
            Explore Posts
            <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Content IMAGE */}
        <div className="py-12">
          <span className="flex items-center justify-center gap-x-6">
            <Icons.logo className="size-32 text-center text-yellow-200 w-full animate-bounce duration-3000" />
            <Icons.logo className="size-32 text-center w-full animate-bounce duration-3000 delay-150" />
            <Icons.logo className="size-32 text-center text-brand-eunry-500 w-full animate-bounce duration-3000 delay-300" />
          </span>
          <div className="rounded-none border-b-8"></div>
          <div className="rounded-none border-b-8 relative top-2"></div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -left-16 -top-16 h-32 w-32 rounded-full border-8 border-black bg-brand-white-100"></div>
      <div className="absolute -bottom-8 -right-8 h-24 w-24 border-8 bg-brand-green-400 "></div>
    </SectionWrapper>
  );
}
