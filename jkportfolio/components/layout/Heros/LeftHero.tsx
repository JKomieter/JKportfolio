/* eslint-disable react/no-unescaped-entities */
"use client";
import Typed from "react-typed";
import ReactTyped from "react-typed";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400" });

const LeftHero = () => {
    return (
      <div className="w-full flex flex-col gap-4">
        <div className={`${bebasNeue.className}`}>
          <div>
            <span className="text-orange-700 lg:text-8xl md:text-7xl sm:text-6xl text-5xl font-semibold">
              Akwaaba!{" "}
            </span>
            <span className="lg:text-7xl md:text-6xl sm:text-5xl text-4xl font-semibold text-neutral-100">
              I'm Joel
            </span>
          </div>
          <div
            className={`${bebasNeue.className} lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold text-neutral-100`}
          >
            I'm a{" "}
            <ReactTyped
              strings={[
                "Software Engineer",
                "Frontend Developer",
                "Backend Developer",
                "Fullstack Developer",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
              className=""
            />
          </div>
        </div>
        <div className="md:text-md text-sm font-semibold text-orange-200">
          Designing and Coding Simply Beautiful Creations, Driven by Passion.
        </div>
      </div>
    );
}

export default LeftHero