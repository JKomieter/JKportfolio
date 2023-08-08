"use client";
import Typed from "react-typed";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"], weights: ["400", "500", "600", "700"] });

const LeftHero = () => {
    return (
      <div className="w-full flex flex-col gap-7">
        <div className={`w-full flex flex-col gap-3 ${rubik.className}`}>
          <span className="text-orange-500 text-5xl font-bold h-full">
            Akwaaba!{" "}
            <span className="text-primary-500 text-neutral-200">
              {" "}
              I'm Komieter.
            </span>
          </span>
          <div className="text-5xl text-neutral-200 font-semibold">
            I am a
            <Typed
              strings={[
                // " Full Stack Developer.",
                " Web Developer.",
                // " Software Engineer.",
                // " Freelancer.",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </div>
        </div>
        <div className=" text-neutral-300" style={{lineHeight: "1.7rem"}}>
          Greetings! I'm Joel Adjetey Komieter, a
          <span className="text-green-500"> dedicated</span> web developer and{" "}
          <span className="text-green-500">React enthusiast</span>. Fueled by my
          passion for coding and my determination to{" "}
          <span className="text-green-500">make a meaningful impact</span> in the
          digital realm, I thrive on creating seamless user experiences. With a
          penchant for <span className="text-green-500">self-starting</span> and an{" "}
          <span className="text-green-500">insatiable curiosity</span>, I'm
          constantly seeking new opportunities to{" "}
          <span className="text-green-500">sharpen my skills</span> and craft
          innovative solutions. Let's{" "}
          <span className="text-green-500">
            embark on this exciting journey of development together
          </span>
          !
        </div>
      </div>
    );
}

export default LeftHero