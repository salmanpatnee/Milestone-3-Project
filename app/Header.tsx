import { Heart, Search, ShoppingCart, UserRound } from "lucide-react";
import Link from "next/link";
import MobileNavbar from "./components/MobileNavbar";
import Navbar from "./components/Navbar";

import MiniCart from "./components/MiniCart";

const Header = () => {
  return (
    <header className="border border-b py-8">
      <div className="wrapper flex items-center justify-between">
        {/* Logo Section */}
        <div className="col logo w-full text-center md:w-auto">
          <Link href="/" className="flex items-center gap-1">
          <ShoppingCart size={'35'} className="text-primary"/>
            <h1 className="font-bold text-[34px]">NextCart</h1>
          </Link>
        </div>

        {/* Desktop Navigation Menu */}
        <div className="col menu hidden lg:block">
          <Navbar />
        </div>

        {/* Mobile Navigation Menu */}
        <div className="lg:hidden w-2/12 text-end">
          <MobileNavbar />
        </div>

        {/* Action Section (User Account, Search, Wishlist, Cart) */}
        <div className="col action hidden lg:block">
          <div className="flex space-x-11 items-center justify-end">
            {/* User Profile Icon */}
            <Link href="/" className="group">
              <UserRound
                size={32}
                className="stroke-current text-black transition-colors group-hover:stroke-primary"
              />
            </Link>

            {/* Search Icon */}
            <Link href="/" className="group">
              <Search
                size={32}
                className="stroke-current text-black transition-colors group-hover:stroke-primary"
              />
            </Link>

            {/* Wishlist Icon */}
            <Link href="/" className="group">
              <Heart
                size={32}
                className="stroke-current text-black transition-colors group-hover:stroke-primary"
              />
            </Link>

            {/* Shopping Cart Icon with Popover for Cart Items */}
            <MiniCart/>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
