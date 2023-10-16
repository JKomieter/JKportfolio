"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import NavLinks from "./NavLinks";
import { Bebas_Neue } from "next/font/google";
import { useRouter } from "next/navigation";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});


const Header = () => {

    const router = useRouter();

    return (
      <div className="w-full py-6 z-50 lg:px-32 md:px-16 sm:px-8 px-4 shadow-2xl flex flex-row items-center justify-between bg-neutral-600 fixed">
        <div
          onClick={() => router.push("/")}
          className={`md:text-4xl sm:text-3xl text-2xl font-semibold text-orange-700 uppercase ${bebasNeue.className} cursor-pointer`}
        >
          KomiEter
        </div>
        <span className="flex sm:hidden">
          <GiHamburgerMenu size={27} className="text-neutral-100" />
        </span>
        <NavLinks />
      </div>
    );
}

export default Header