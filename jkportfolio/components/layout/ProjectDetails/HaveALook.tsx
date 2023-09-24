import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { Raleway } from "next/font/google";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: "400",
});

const raleway = Raleway({
    subsets: ["latin"],
    weight: "900",
});

const HaveALook = ({ project }: { project: Record<string, any> }) => {
    const { githubLink, liveLink } = project;

    return (
        <div className="lg:px-32 md:px-16 sm:px-8 px-4 flex flex-col w-full py-16 bg-[#222] gap-5">
            <h3 className={`lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold text-neutral-100 ${raleway.className}`}>
                Have a look
            </h3>
            <div className="flex flex-row gap-4 mt-4">
                <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center px-5 py-3 rounded-2xl text-white cursor-pointer font-semibold bg-orange-700 ${montserrat.className}}`}
                >
                    <FaGithub className="mr-2" />
                    View on GitHub
                </a>
                <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center px-5 py-3 rounded-2xl text-white cursor-pointer font-semibold bg-orange-700 ${montserrat.className}}`}
                >
                    <FiExternalLink className="mr-2" />
                    View Live
                </a>
            </div>
        </div>
    );
};

export default HaveALook;