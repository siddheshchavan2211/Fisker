import React from "react";
import { RiGlobalLine } from "react-icons/ri";
import Image from "next/image";
const Header = () => {
  return (
    <header className="mb-4">
     <section className="mb-2 bg-gray-200 py-1 text-center text-sm font-medium">
        <p>All electric &#x2022; Dynamic &#x2022; Driver Range</p>
      </section>
      <section className="mx-auto flex max-w-7xl justify-between px-2">
        <Image
          src="fisker.svg"
          alt="Fisker Logo"
          height={100}
          width={100}
          className="w-12 cursor-pointer duration-100 hover:scale-110 sm:w-20"
        />
        <div className="flex items-center gap-1 text-stone-700 cursor-pointer">
          <RiGlobalLine className="text-xl" />
          <p>IN</p>
        </div>
      </section>
    </header>
  );
};

export default Header;
