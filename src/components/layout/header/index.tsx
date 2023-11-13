"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getActiveLink } from "@/lib/utils";
import { links } from "@/mocks/links";

const Header = () => {
  const router = usePathname();

  const [navColor, setNavColor] = useState(false);

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setNavColor(true) : setNavColor(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <header className="w-ful flex flex-row justify-center sticky top-0 right-0 left-0 pt-7 z-[9999]">
      <div
        className={`${
          navColor ? "saturate-150 backdrop-blur-xl bg-backdrop rounded-full" : ""
        } flex flex-row justify-center items-center md:gap-8 sm:gap-1 text-secondary py-1 px-3`}
      >
        {links?.map((l: any, index: number) => (
          <Link
            key={index}
            href={l?.href}
            className={`${
              getActiveLink(router, l?.href) ? "bg-linkBg  rounded-full px-4 py-2 transition-colors" : ""
            } font-medium selection:bg-slate-500 px-4 py-2 sm:px-2 text-fontLink`}
          >
            {l.name}
            {l?.id === 1 && (
              <span className="text-[10px] w-6 h-6  items-center justify-center rounded-md ml-2.5 p-0.5 px-2 shadow-myShadow sm:hidden">
                /
              </span>
            )}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
