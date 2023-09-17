"use client";
import LeftHero from "./LeftHero"
import RightHero from "./RightHero";
import ParticlesBg from "../../../particles/ParticlesBg";



const Hero = () => {
    return (
      <>
      
      <div
        // style={{backgroundImage: "url(/images/matrix.jpg)"}}
        className="w-full lg:px-32 md:px-16 sm:px-8 px-4 flex md:flex-row flex-col py-32 bg-gray-700
        items-center justify-between gap-6 sm:py-10 bg-center bg-fixed bg-no-repeat bg-cover h-screen"
      >
        <LeftHero />
        <RightHero />
      </div>
      </>
    );
}

export default Hero;