import { Firebase, GitHub, HTML, JavaScript, MongoDB, NodeJs, ReactJs, CSS } from "../svg";

export type Skill = {
    name: string;
    icon: any;
}

export const skills: Skill[] = [
    {
        name: "HTML",
        icon: HTML,
    },
    {
        name: "CSS",
        icon: CSS
    },
    {
        name: "JavaScript",
        icon: JavaScript
    },
    {
        name: "React JS",
        icon: ReactJs
    },
    {
        name: "Node JS",
        icon: NodeJs
    },
    {
        name: "GitHub",
        icon: GitHub
    }, 
    {
        name: "MongoDB",
        icon: MongoDB
    },
    {
        name: "Firebase",
        icon: Firebase
    }
]