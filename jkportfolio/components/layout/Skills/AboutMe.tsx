/* eslint-disable react/no-unescaped-entities */
"use client";
import { useInView } from "react-intersection-observer";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const AboutMe = () => {
  const { ref: divRef, inView } = useInView();

  return (
    <div
      className={` flex items-center justify-center bg-cover bg-center bg-no-repeat bg-fixed
       h-[50vh] text-white lg:px-32 md:px-16 sm:px-8 px-4 shadow-2xl bg-[#333]
       }`}
    // style={{
    //   backgroundImage:
    //     "linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url(/images/greengrass.jpg",
    // }}
    >
      <div
        ref={divRef}
        className={`flex flex-col gap-4 items-center justify-center py-10 ${inView ? "opacity-1" : "opacity-0 translate-y-14"
          } transition-all duration-1000`}
      >
        <span
          className={`font-semibold lg:text-4xl md:text-3xl sm:text-2xl text-orange-200 text-xl ${bebasNeue.className}`}
        >
          Hi, I'm Joel. Nice to meet you!
        </span>
        <span className="text-center lg:text-md md:text-sm text-xs">
          My knack for stunning design drives me to craft captivating digital
          experiences. As a dedicated computer science student at Caldwell
          University, I've transformed visions into reality through projects
          like the Campus Commune app. Confidence fuels my drive. Challenges are
          opportunities to learn and grow. Ready to collaborate and create
          ripples in web development. Cheers to innovation and endless
          possibilities,
        </span>
      </div>
    </div>
  );
};

export default AboutMe;
