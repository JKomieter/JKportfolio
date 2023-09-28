"use client";
import LeftHero from "./LeftHero"
import RightHero from "./RightHero";
import { SvgBg } from "@/components/svg";


const Hero = () => {
    return (
      <>
      <SvgBg className="w-full h-full -z-50 absolute" />
      <div
        className="w-screen lg:px-32 md:px-16 sm:px-8 px-4 flex md:flex-row flex-col py-32
        items-center justify-between gap-6 sm:py-10 bg-center bg-fixed bg-no-repeat bg-cover h-screen"
      >
        <LeftHero />
        <RightHero />
      </div>
      </>
    );
}

export default Hero;