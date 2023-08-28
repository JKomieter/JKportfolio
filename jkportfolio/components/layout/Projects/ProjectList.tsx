import React from 'react'
import Image from 'next/image'
import { Bebas_Neue } from 'next/font/google'
import { Montserrat } from 'next/font/google';

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400"
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400"
});

const projects = [
  {
    name: "Emoticare AI",
    description: "Experience the future of emotional well-being with the Emoticare AI app. Harnessing the power of artificial intelligence and empathetic design, this innovative chatbot is your personalized companion for navigating life's ups and downs. Whether you're seeking a listening ear, advice, or simply a smile, Emoticare AI responds with understanding and care. Explore an interactive journey of emotional support and growth, one conversation at a time.",
    image: "/images/Emoticare.png",
    link: "",
  },
  {
    name: "Campus Commune",
    description: "Campus Commune is an innovative platform designed to revolutionize the way students connect and collaborate in their educational journey. Imagine a dynamic digital space where students from diverse backgrounds come together to share insights, seek knowledge, and engage in meaningful discussions.",
    image: "/images/CampusCommune.png",
    link: "",
  },
  {
    name: "SocialBuzz",
    description: "SocialBuzz is a social media platform that allows users to share their thoughts, ideas, and opinions with the world. It's a place where you can connect with friends, family, and colleagues in an open and honest way. You can also follow your favorite celebrities or brands to stay up-to-date on what they're doing.",
    image: "/images/SocialBuzz.png",
    link: "",
  },
  {
    name: "Road Wander",
    description: "Welcome to RoadWander, the virtual crossroads of wanderlust and exploration. Our meticulously crafted website is your gateway to a world of unforgettable journeys. From luxury car rentals to personalized itineraries, embark on adventures that redefine how you experience the open road.",
    image: "/images/RoadWander.png",
    link: "",
  }
]


const ProjectList = () => {
  return (
    <div className='w-full h-full flex flex-col gap-14 items-center'>
      {
        projects.map((project) => (
          <div 
          key={project.name}
          className="w-full flex md:flex-row flex-col gap-8 items-center justify-between">
            <div className="w-full h-full rounded-md overflow-hidden">
              <Image src={project.image} alt={project.name} width={500} height={400} className='w-full' />
            </div>
            <div className="flex flex-col w-full item-start gap-8">
              <h1 className={`md:text-3xl sm:text-2xl text-xl font-bold text-neutral-200 ${bebasNeue.className}`}>{project.name}</h1>
              <p
                className={`${montserrat.className} text-neutral-200 font-semibold md:text-base sm:text-sm text-xs }`}
              >
                {project.description}
              </p>
              <div className="flex flex-row items-center gap-5">
                <span
                  className={`px-4 py-3 rounded-md text-lg cursor-pointer bg-orange-700 text-neutral-100 ${bebasNeue.className}
            hover:bg-orange-900 transition-all duration-500 ease-in-out shadow-2xl`}
                >
                  View Project
                </span>
                <span
                  className={`px-4 py-2 rounded-md text-lg cursor-pointer border-4 border-neutral-orange-700 text-neutral-100 ${bebasNeue.className}
             transition-all duration-500 ease-in-out shadow-2xl hover:border-orange-700`} 
                >
                  Live Demo
                </span>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}


export default ProjectList;