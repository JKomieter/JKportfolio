import LeftHero from "./Heros/LeftHero"
import RightHero from "./Heros/RightHero";



const Hero = () => {
    return (
      <div
        className="w-full lg:px-32 md:px-16 sm:px-8 px-4 flex md:flex-row flex-col py-32 
        items-center justify-between sm:py-10 bg-center bg-fixed bg-no-repeat bg-cover h-screen"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url(/images/forestcloud.jpg)",
        }}
      >
        <LeftHero />
        <RightHero />
      </div>
    );
}

export default Hero;