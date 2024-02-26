import React from "react";
import Image from "next/image";
import ParticlesContainer from "../components/ParticlesContainer";
import { motion } from "framer-motion";
import Avatar from '../components/Avatar'
import { fadeIn } from "../variants";
import ProjectsBtn from "../components/ProjectsBtn";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      <div className=" w-full  h-full bg-gradient-to-r from-primary/10 via-black/30 to-black">
        <div className=" text-center flex flex-col justify-center lg:pt-30 lg:text-left h-full container mx-auto">
          {/*title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="h1"
          >
            {" "}
            Trnsforming Ideas <br /> Into{" "}
            <span className="text-accent">Digital Reality</span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className=" text-[14px] max-w-sm lg:max-w-xl mx-auto lg:mx-0 mb-10 lg:mb-16"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            sequi dolorem consequuntur amet maxime est voluptas natus tenetur ad
            nihil iure, quam, vel vitae, aliquid modi deserunt ab sapiente
            culpa.
          </motion.p>
          {/* <div className="flex justify-center lg:hidden relative">
            <ProjectsBtn />
          </div> */}
          {/* <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="hidden md:flex md:items-start md:justify-start"
          >
            <ProjectsBtn />
          </motion.div> */}
        </div>
      </div>

      <div className=" w-[1200px] h-full absolute right-0 bottom-0">
        <div className="bg-none  lg:bg-cover lg:bg-right lg:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0 ">
        </div>
        <ParticlesContainer/>
        <div className="w-full h-full max-w-[520px] max-h-[450px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]">
          <Avatar/>
        </div>
      </div>
    </div>
  );
};

export default Home;
