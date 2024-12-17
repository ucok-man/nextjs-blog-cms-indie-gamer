"use client";

import { Button } from "@/components/ui/button";
import { Iterate } from "@/components/utility";
import { MENU_CONTENT } from "@/constant";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Icons } from "../icons";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-brand-green-400 shadow-brand-y-xl">
      <div className="flex items-center justify-between lg:px-24 py-2 px-6">
        {/* LOGO */}
        <Link
          href="/"
          className="text-2xl font-black text-brand-white-100 bg-black p-2 border-4 border-brand-white-100 hover:-translate-y-brand-lg hover:shadow-brand-y-lg z-50 transition-all"
        >
          <span className="flex">
            <Icons.logo className="size-8 mr-1" />
            INDIE_GAMER
          </span>
        </Link>

        {/* Navigation */}
        <div className="z-20">
          <MobileMenu />
          <DesktopMenu />
        </div>
      </div>
    </nav>
  );
}

function DesktopMenu() {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:block">
      <ul className="flex space-x-6 font-mono">
        <Iterate
          items={MENU_CONTENT}
          render={(item, idx) => (
            <Link key={idx} href={item.link} passHref className="">
              <Button
                variant="link"
                className={cn(
                  "text-lg uppercase font-bold border-4 p-5 m-0 bg-brand-pink-400",
                  pathname === item.link &&
                    "shadow-brand-br-md scale-x-110 transition-all"
                )}
              >
                <span>{item.name}</span>
              </Button>
            </Link>
          )}
        />
      </ul>
    </nav>
  );
}

function MobileMenu() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <div className="lg:hidden">
      {/* Menu Trigger */}
      <div
        className="space-y-2 cursor-pointer"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <Icons.burgerMenu className="bg-black 0 h-1" />
      </div>

      {/* Menu Container */}
      <div
        className={cn(
          menuOpen && "block absolute w-full h-screen inset-0 backdrop-blur-sm",
          !menuOpen && "hidden"
        )}
      >
        {/* Close Icon */}
        <div
          className="absolute top-0 right-0 px-6 py-6 cursor-pointer "
          onClick={() => setMenuOpen(false)}
        >
          <Icons.close className="size-10 border-4 shadow-brand-br-md hover:translate-x-brand-md hover:shadow-none bg-brand-green-400 transition-all" />
        </div>

        {/* Menu Content */}
        <ul className="flex flex-col items-center justify-center h-full py-24 bg-brand-pink-500 gap-y-6">
          <Iterate
            items={MENU_CONTENT}
            render={(item, idx) => (
              <Link key={idx} href={item.link} passHref className="">
                <Button
                  variant="link"
                  className="text-3xl uppercase py-8 font-semibold border-4 shadow-brand-br-md hover:translate-x-brand-md hover:shadow-none min-w-[400px] bg-yellow-300 transition-all"
                >
                  <span className="relative right-4 flex gap-x-4 justify-start items-center">
                    <Icons.logo
                      size={4}
                      className={cn(
                        pathname === item.link ? "block" : "text-transparent"
                      )}
                    />
                    {item.name}
                  </span>
                </Button>
              </Link>
            )}
          />
        </ul>
      </div>
    </div>
  );
}
