import React from "react";
import Image from "next/image";
import Link from "next/link";
import Social from "./Socials";

const Header = () => {
  return (
    <header className="absolute w-full flex items-center px-16 lg:px-0 lg:h-[90px] ">
      <div className="container mx-auto">
        <div className=" flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          <Link href={","}>
            <Image src={"/logo.svg"} alt="" width={220} height={28} priority />{" "}
          </Link>
          <Social/>
        </div>
      </div>
    </header>
  );
};

export default Header;
