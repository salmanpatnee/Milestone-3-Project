import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Heart, Menu, Search, ShoppingCart, UserRound } from "lucide-react";
import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/" },
  { label: "Blog", href: "/" },
  { label: "Contact", href: "/" },
];

const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger className="mt-2 text-primary">
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetDescription className="mt-8">
            <nav className="mb-5">
              <ul className="mt-4 space-y-4 text-sm text-black text-start">
                {links.map((link) => (
                  <li className="border-b border-primary pb-2" key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </SheetDescription>
          <div className="flex space-x-5 items-center justify-between ">
            <Link href="/" className="group">
              <UserRound
                size={24}
                className="stroke-current text-black  transition-colors group-hover:stroke-primary"
              />
            </Link>
            <Link href="/" className="group">
              <Search
                size={24}
                className="stroke-current text-black  transition-colors group-hover:stroke-primary"
              />
            </Link>
            <Link href="/" className="group">
              <Heart
                size={24}
                className="stroke-current text-black  transition-colors group-hover:stroke-primary"
              />
            </Link>
            <Link href="/cart" className="group">
              <ShoppingCart
                size={24}
                className="stroke-current text-black  transition-colors group-hover:stroke-primary"
              />
            </Link>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
