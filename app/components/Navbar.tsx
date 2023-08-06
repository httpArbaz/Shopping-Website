import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="hidden lg:block">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
          <Link className="navbar__link relative" href={"#"}>
            HOME
          </Link>
          <Link className="navbar__link relative" href={"#"}>
            CATEGORIES
          </Link>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <Link className="navbar__link relative" href="#">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            MEN'S
          </Link>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <Link className="navbar__link relative" href="#">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            WOMEN'S
          </Link>
          <Link className="navbar__link relative" href={"&apos;"}>
            JEWELERY
          </Link>
          <Link className="navbar__link relative" href={"&apos;"}>
            PERFUME
          </Link>
          <Link className="navbar__link relative" href={"&apos;"}>
            BLOG
          </Link>
          <Link className="navbar__link relative" href={"&apos;"}>
            HOT OFFER
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
