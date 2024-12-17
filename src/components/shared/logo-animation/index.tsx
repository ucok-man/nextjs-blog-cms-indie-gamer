import { Icons } from "../icons";

export default function LogoAnimation() {
  return (
    <div className="py-12">
      <span className="flex items-center justify-center gap-x-6">
        <Icons.logo className="size-32 text-center text-yellow-200 w-full animate-bounce duration-3000" />
        <Icons.logo className="size-32 text-center w-full animate-bounce duration-3000 delay-150" />
        <Icons.logo className="size-32 text-center text-brand-eunry-500 w-full animate-bounce duration-3000 delay-300" />
      </span>
      <div className="rounded-none border-b-8"></div>
      <div className="rounded-none border-b-8 relative top-2"></div>
    </div>
  );
}
