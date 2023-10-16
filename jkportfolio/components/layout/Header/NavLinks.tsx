import { Bebas_Neue } from "next/font/google";
import { useRouter } from "next/navigation";

const bebasNeue = Bebas_Neue({
    subsets: ["latin"],
    weight: "400",
});

const NavLinks = () => {

    const router = useRouter();

    return (
        <div className={`flex-row gap-10 sm:flex hidden text-neutral-100 uppercase text-xl font-semibold ${bebasNeue.className}`}>
            <div
            onClick={() => router.push("/")}
            className="cursor-pointer hover:text-orange-700 transition-all duration-300">Home</div>
            <div 
            onClick={() => router.push("/about")}
            className="cursor-pointer hover:text-orange-700 transition-all duration-300">About</div>
            <div 
            onClick={() => router.push("/skills")}
            className="cursor-pointer hover:text-orange-700 transition-all duration-300">Skills</div>
            <div 
            onClick={() => router.push("/projects")}
            className="cursor-pointer hover:text-orange-700 transition-all duration-300">Projects</div>
            <div 
            onClick={() => router.push("/contact")}
            className="cursor-pointer hover:text-orange-700 transition-all duration-300">Contact</div>
        </div>
    )
}

export default NavLinks;