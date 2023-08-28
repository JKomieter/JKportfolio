import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
    subsets: ["latin"],
    weight: "400"
});


const SkillItem = ({ name, Icon }: { 
    name: string;
    Icon: any;
 }) => {

    return (
        <div className="rounded-md p-3 flex flex-col gap-2 items-center cursor-pointer hover:border-[#FFA500]
        justify-center bg-neutral-500 w-full shadow-inner hover:-translate-y-0.5 transition-all duration-300">
          <Icon className="text-4xl" />
          <p
            className={`text-neutral-200 font-semibold ${bebasNeue.className} `}
          >
            {name}
          </p>
        </div>
    );
 }

 export default SkillItem;