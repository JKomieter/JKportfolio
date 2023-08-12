import { GiHamburgerMenu } from "react-icons/gi";
import { Rubik } from "next/font/google";
const rubik = Rubik({
  subsets: ["latin"],
  weights: ["400", "500", "600", "700"],
});


const Header = () => {
    return (
      <div className="w-full py-7 lg:px-32 md:px-16 sm:px-8 px-4 flex flex-row items-center justify-between bg-neutral-300">
        <div className={`text-2xl font-semibold text-orange-700 uppercase ${rubik.className}`}>
          KomiEter
        </div>
        <span className="">
          <GiHamburgerMenu size={27} className="text-green-700" />
        </span>
      </div>
    );
}

export default Header