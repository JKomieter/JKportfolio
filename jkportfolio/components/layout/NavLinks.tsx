import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
    subsets: ["latin"],
    weight: "400",
});

const NavLinks = () => {
    return (
        <div className={`flex-row gap-10 sm:flex hidden text-neutral-100 uppercase text-xl font-semibold ${bebasNeue.className}`}>
            <div className="cursor-pointer hover:text-orange-700 transition-all duration-300">Home</div>
            <div className="cursor-pointer hover:text-orange-700 transition-all duration-300">About</div>
            <div className="cursor-pointer hover:text-orange-700 transition-all duration-300">Skills</div>
            <div className="cursor-pointer hover:text-orange-700 transition-all duration-300">Projects</div>
            <div className="cursor-pointer hover:text-orange-700 transition-all duration-300">Contact</div>
        </div>
    )
}

export default NavLinks;