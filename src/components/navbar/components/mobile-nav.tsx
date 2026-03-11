"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { links } from "../navbar-links";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-primary" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="sr-only">Mobile navigation</SheetTitle>
        </SheetHeader>
        <div className="mt-20 mb-30 text-center">
          {/* <Link href="/">
            <h1 className="text-4xl font-semibold">
              Johnsen<span className="text-primary">.</span>
            </h1>
          </Link> */}
        </div>
        <nav className="flex flex-col justify-center items-center gap-y-8">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.name}
              className={`${
                pathname === link.href &&
                "text-primary border-b-2 border-primary/70"
              } text-xl hover:text-primary transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
