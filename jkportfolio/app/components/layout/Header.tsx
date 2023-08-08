import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
    return (
      <div className="w-full py-7 px-32 flex flex-row items-center justify-between top-0 fixed bg-neutral-900">
        <div className="text-2xl font-semibold text-green-500 uppercase">
          KomiEter
        </div>
        <span className="">
          <GiHamburgerMenu size={27} className="text-neutral-200" />
        </span>
      </div>
    );
}

export default Header