import { storage } from "@/firebase/config";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";


export const useProjectStorage = () => {

    const [imageList, setImageList] = useState<string[]>([])

    useEffect(() => {
        const listRef = ref(storage, 'images/');
        listAll(listRef).then((res) => {
            res.items.forEach((itemRef) => {
                getDownloadURL(itemRef).then((url) => {
                    setImageList((prev) => [...prev, url])
                }).catch((error) => {
                    console.log(error)
                });
            });
        }).catch((error) => {
            console.log(error)
        });
    }, [])

    console.log(imageList)

    const projects = [
        {
            name: "Emoticare AI",
            description: "Experience the future of emotional well-being with the Emoticare AI app. Harnessing the power of artificial intelligence and empathetic design, this innovative chatbot is your personalized companion for navigating life's ups and downs. Whether you're seeking a listening ear, advice, or simply a smile, Emoticare AI responds with understanding and care. Explore an interactive journey of emotional support and growth, one conversation at a time.",
            image: imageList[1] || "",
            link: `project/emoticare`,
        },
        {
            name: "Campus Commune",
            description: "Campus Commune is an innovative platform designed to revolutionize the way students connect and collaborate in their educational journey. Imagine a dynamic digital space where students from diverse backgrounds come together to share insights, seek knowledge, and engage in meaningful discussions.",
            image: imageList[0] || "",
            link: `project/campus-commune`,
        },
        {
            name: "SocialBuzz",
            description: "SocialBuzz is a social media platform that allows users to share their thoughts, ideas, and opinions with the world. It's a place where you can connect with friends, family, and colleagues in an open and honest way. You can also follow your favorite celebrities or brands to stay up-to-date on what they're doing.",
            image: imageList[3] || "",
            link: `project/socialbuzz`,
        },
        {
            name: "Road Wander",
            description: "Welcome to RoadWander, the virtual crossroads of wanderlust and exploration. Our meticulously crafted website is your gateway to a world of unforgettable journeys. From luxury car rentals to personalized itineraries, embark on adventures that redefine how you experience the open road.",
            image: imageList[2] || "",
            link: `project/road-wander`,
        }
    ]

    const [projectList, setProjectList] = useState<Record<string, any>[]>(projects)

    return [ projectList, setProjectList ] as const
}