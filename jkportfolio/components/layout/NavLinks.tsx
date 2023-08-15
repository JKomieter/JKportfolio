import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
    subsets: ["latin"],
    weight: "400",
});

const NavLinks = () => {
    return (
        <div className={`flex-row gap-10 sm:flex hidden text-neutral-100 uppercase text-xl font-semibold ${bebasNeue.className}`}>
            <div className="">Home</div>
            <div className="">About</div>
            <div className="">Skills</div>
            <div className="">Projects</div>
            <div className="">Contact</div>
        </div>
    )
}

export default NavLinks;