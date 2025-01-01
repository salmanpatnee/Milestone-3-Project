import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Props {
    title: string
}

const PageHeader = ({title}: Props) => {
  return (
    <header className='text-center py-12 bg-[url("/images/banners/shop.png")] bg-cover bg-fixed bg-no-repeat bg-left'>
      <h1 className="font-medium text-5xl mb-4">{title}</h1>
      <nav className="flex justify-center">
        <ul className="flex items-center space-x-2 font-medium text-base">
          <li className="font-medium">
            <Link href="/">Home</Link>
          </li>
          <li>
            <ChevronRight />
          </li>
          <li className="font-light">{title}</li>
        </ul>
      </nav>
    </header>
  );
};

export default PageHeader;
