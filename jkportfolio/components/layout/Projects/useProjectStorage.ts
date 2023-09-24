import { storage } from "@/firebase/config";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { use, useEffect, useState } from "react";


export default function useProjectStorage() {

    const [emoticareImg, setEmoticareImg] = useState<string[]>([]);
    const [campcommImg, setCampcommImg] = useState<string>("");
    const [socialbuzzImg, setSocialbuzzImg] = useState<string>("");
    const [roadwanderImg, setRoadwanderImg] = useState<string>("");

    useEffect(() => {
        const listRef = ref(storage, 'emoticare/');
        listAll(listRef).then((res) => {
            res.items.forEach((itemRef) => {
                getDownloadURL(itemRef).then((url) => {
                    setEmoticareImg((prev) => [...prev, url])
                }).catch((error) => {
                    console.log(error)
                });
            });
        }).catch((error) => {
            console.log(error)
        });
    }, [])

    useEffect(() => {
        const listRef = ref(storage, 'campus-commune/');
        listAll(listRef).then((res) => {
            res.items.forEach((itemRef) => {
                getDownloadURL(itemRef).then((url) => {
                    setCampcommImg(url)
                }).catch((error) => {
                    console.log(error)
                });
            });
        }).catch((error) => {
            console.log(error)
        });
    }, [])


    useEffect(() => {
        const listRef = ref(storage, 'socialbuzz/');
        listAll(listRef).then((res) => {
            res.items.forEach((itemRef) => {
                getDownloadURL(itemRef).then((url) => {
                    setSocialbuzzImg(url)
                }).catch((error) => {
                    console.log(error)
                });
            });
        }).catch((error) => {
            console.log(error)
        });
    }, [])


    useEffect(() => {
        const listRef = ref(storage, 'road-wander/');
        listAll(listRef).then((res) => {
            res.items.forEach((itemRef) => {
                getDownloadURL(itemRef).then((url) => {
                    setRoadwanderImg(url)
                }).catch((error) => {
                    console.log(error)
                });
            });
        }).catch((error) => {
            console.log(error)
        });
    }, [])

    console.log(emoticareImg)


    return [emoticareImg, campcommImg, socialbuzzImg, roadwanderImg]
}