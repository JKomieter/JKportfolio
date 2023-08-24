import { GiHamburgerMenu } from "react-icons/gi";
import NavLinks from "./NavLinks";
import { Bebas_Neue } from "next/font/google";
const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});


const Header = () => {
    return (
      <div className="w-full py-7 z-50 lg:px-32 md:px-16 sm:px-8 px-4 shadow-2xl flex flex-row items-center justify-between bg-neutral-600 fixed">
        <div
          className={`lg:text-3xl md:text-2xl sm:text-xl font-semibold text-orange-700 uppercase ${bebasNeue.className}`}
        >
          KomiEter
        </div>
        <span className="flex sm:hidden">
          <GiHamburgerMenu size={27} className="text-neutral-700" />
        </span>
        <NavLinks />
      </div>
    );
}

export default Header