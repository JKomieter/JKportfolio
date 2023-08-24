/* eslint-disable react/no-unescaped-entities */
"use client";
import { Bebas_Neue } from "next/font/google";
import { useInView } from "react-intersection-observer";

const bebasNeue = Bebas_Neue({
    subsets: ["latin"],
    weight: "400",
});



const GetToKnowMe = () => {

    const { ref: divRef, inView: divIsVisible } = useInView();

    return (
      <div
        className={`w-full h-full flex flex-col gap-10 transition-all duration-1000
        ${divIsVisible ? "opacity-1" : "opacity-0 -translate-x-48"}
      `}
        ref={divRef}
      >
        <h2
          className={`font-semibold lg:text-4xl md:text-3xl 
          sm:text-2xl text-xl text-orange-700 ${bebasNeue.className}`}
        >
          Get to know me!
        </h2>
        <div
          className="text-sm text-neutral-200 flex flex-col gap-4"
          style={{ lineHeight: "1.4rem" }}
        >
          <span>
            I'm a dedicated{" "}
            <b className="text-neutral-100">Frontend Web Developer</b> crafting
            captivating user interfaces and seamless web experiences that drive
            the success of digital products. Discover a collection of my
            accomplished
            <b className="text-neutral-100"> Projects</b> in the Portfolio
            section.
          </span>
          <span>
            Beyond coding, I'm passionate about sharing insights gained from my
            extensive Web Development journey. Join me on LinkedIn for a
            treasure trove of valuable content encompassing Web Development and
            Programming.
          </span>
          <span>
            Ready to Excel! I eagerly welcome job opportunities that allow me to
            make meaningful contributions, learn, and flourish. If you have an
            exciting prospect aligned with my skills and expertise, don't
            hesitate to reach out. Let's connect and pave the way for success
            together!
          </span>
        </div>
        <div className="">
          <span
            className={`px-4 py-3 rounded-md text-lg cursor-pointer bg-orange-700 text-neutral-100 ${bebasNeue.className}
            hover:bg-orange-900 transition-all duration-500 ease-in-out shadow-2xl`}
          >
            Contact me
          </span>
        </div>
      </div>
    );
}

export default GetToKnowMe;