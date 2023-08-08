import LeftHero from "./Heros/LeftHero"
import RightHero from "./Heros/RightHero";



const Hero = () => {
    return (
        <div className="w-full h-[90vh] flex md:flex-row flex-col items-center justify-between">
            <LeftHero />
            <RightHero />
        </div>
    )
}

export default Hero;