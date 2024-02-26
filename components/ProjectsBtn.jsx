import React from "react";
import Image from "next/image";
import Link from "next/link";

import {HiArrowRight} from 'react-icons/hi2'

const ProjectsBtn = () => {
  return (
    <div className="mx-auto lg:mx-0">
      <Link href={'/work'} className=" w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group">
        <Image
        src={'/rounded-text.png'}
        width={130}
        height={130}
        alt=""
        className="animate-spin-slow  max-w-[130px] mx-h-[130px]"
        />
      </Link>
     
    </div>
    );
};

export default ProjectsBtn;
