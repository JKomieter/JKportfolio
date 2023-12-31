import { useState } from "react";
import ProjectListItem from "./ProjectListItem"



const DisplayProjects = ({
    emoticareImg,
    campcommImg,
    socialbuzzImg,
    roadwanderImg
}: {
    emoticareImg: string[];
    campcommImg: string[];
    socialbuzzImg: string[];
    roadwanderImg: string[];
}) => {

    const projects = [
        {
            name: "Emoticare AI",
            description: "Experience the future of emotional well-being with the Emoticare AI app. Harnessing the power of artificial intelligence and empathetic design, this innovative chatbot is your personalized companion for navigating life's ups and downs. Whether you're seeking a listening ear, advice, or simply a smile, Emoticare AI responds with understanding and care. Explore an interactive journey of emotional support and growth, one conversation at a time.",
            image: emoticareImg[0] || "",
            link: `project/emoticare`,
        },
        {
            name: "Campus Commune",
            description: "Campus Commune is an innovative platform designed to revolutionize the way students connect and collaborate in their educational journey. Imagine a dynamic digital space where students from diverse backgrounds come together to share insights, seek knowledge, and engage in meaningful discussions.",
            image: campcommImg[0] || "",
            link: `project/campus-commune`,
        },
        {
            name: "SocialBuzz",
            description: "SocialBuzz is a social media platform that allows users to share their thoughts, ideas, and opinions with the world. It's a place where you can connect with friends, family, and colleagues in an open and honest way. You can also follow your favorite celebrities or brands to stay up-to-date on what they're doing.",
            image: socialbuzzImg[0] || "",
            link: `project/socialbuzz`,
        },
        {
            name: "Road Wander",
            description: "Welcome to RoadWander, the virtual crossroads of wanderlust and exploration. Our meticulously crafted website is your gateway to a world of unforgettable journeys. From luxury car rentals to personalized itineraries, embark on adventures that redefine how you experience the open road.",
            image: roadwanderImg[0] || "",
            link: `project/road-wander`,
        }
    ]

    return (
        <div className='w-full h-full flex flex-col gap-14 items-center'>
            {
                projects.map((project) => (
                    <ProjectListItem
                        key={project.name}
                        name={project.name}
                        description={project.description}
                        image={project.image}
                        link={project.link}
                    />
                ))
            }
        </div>
    )
}

export default DisplayProjects;