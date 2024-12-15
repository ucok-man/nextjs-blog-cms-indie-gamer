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
    <nav className="container mx-auto p-6 relative">
      <div className="flex justify-between items-center w-full">
        {/* LOGO */}
        <Link href="/" className="flex items-center justify-center z-30">
          <Icons.logo className="text-amber-950 size-8" />
          <div className="text-3xl pl-2 uppercase font-bold bg-gradient-to-r from-amber-950 via-yellow-800 to-amber-900 bg-clip-text text-transparent ">
            IndieGamer
          </div>
        </Link>

        {/* Navigation */}
        <div className="">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}

function MobileMenu() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <div className="">
      {/* Menu Trigger */}
      <div
        className="space-y-2 cursor-pointer"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <Icons.burgerMenu className="bg-amber-950" />
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
          className="absolute top-0 right-0 px-6 py-6 cursor-pointer"
          onClick={() => setMenuOpen(false)}
        >
          <Icons.close />
        </div>

        {/* Menu Content */}
        <ul className="flex flex-col items-center justify-center h-full py-24">
          <Iterate
            items={MENU_CONTENT}
            render={(item, idx) => (
              <Link key={idx} href={item.link} passHref>
                <Button
                  variant="link"
                  className="text-3xl uppercase py-8 font-semibold"
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
