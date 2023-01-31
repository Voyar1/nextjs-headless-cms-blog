import React, { useContext } from "react";
import Link from "next/link";
const categories = [
  { name: "React", slug: "react" },
  { name: "Web Development", slug: "web-dev" },
];

const Header = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full flex justify-between items-center border-blue-400 py-8">
        <div>
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">
              VOYAR
            </span>
          </Link>
        </div>
        <div className="hidden md:block">
          {categories.map((category) => (
            <Link key={category.slug} href={`/${category.slug}`}>
              <span className="mt-2 text-white ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
