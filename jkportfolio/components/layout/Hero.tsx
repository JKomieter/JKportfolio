import LeftHero from "./Heros/LeftHero"
import RightHero from "./Heros/RightHero";



const Hero = () => {
    return (
      <div className="w-full lg:px-32 md:px-16 sm:px-8 px-4 flex md:flex-row flex-col items-center justify-between py-10 bg-neutral-200">
        <LeftHero />
        <RightHero />
      </div>
    );
}

export default Hero;