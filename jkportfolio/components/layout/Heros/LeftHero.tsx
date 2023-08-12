"use client";
import Typed from "react-typed";
import { Rubik } from "next/font/google";
import ReactTyped from "react-typed";

const rubik = Rubik({ subsets: ["latin"], weights: ["400", "500", "600", "700"] });

const LeftHero = () => {
    return (
      <div className="w-full flex flex-col gap-4">
        <div className={`${rubik.className}`}>
          <div>
            <span className="text-orange-700 lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-semibold">
              Akwaaba!{" "}
            </span>
            <span className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-semibold">
              I'm Joel
            </span>
          </div>
          <div
            className={`${rubik.className} lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold text-neutral-700`}
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
        <div className="md:text-md text-sm font-semibold text-green-700">
          Designing and Coding Simply Beautiful Creations, Driven by Passion.
        </div>
      </div>
    );
}

export default LeftHero