"use client";
import React, { useEffect, useState } from 'react'
import { storage } from '@/firebase/config';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import DisplayProjects from './DisplayProjects';

const fetchImages = async (folderName: string) => {
  const listRef = ref(storage, folderName);
  const urls: string[] = [];

  try {
    const res = await listAll(listRef);
    await Promise.all(
      res.items.map(async (itemRef) => {
        const url = await getDownloadURL(itemRef);
        urls.push(url);
      })
    );
  } catch (error) {
    console.error(error);
  }

  return urls;
};

const ProjectList = () => {
  const [emoticareImg, setEmoticareImg] = useState<string[]>([]);
  const [campcommImg, setCampcommImg] = useState<string[]>([]);
  const [socialbuzzImg, setSocialbuzzImg] = useState<string[]>([]);
  const [roadwanderImg, setRoadwanderImg] = useState<string[]>([]);

  useEffect(() => {
    fetchImages('emoticare/').then((urls) => setEmoticareImg(urls));
    fetchImages('camp-comm/').then((urls) => setCampcommImg(urls));
    fetchImages('socialbuzz/').then((urls) => setSocialbuzzImg(urls));
    fetchImages('road-wander/').then((urls) => setRoadwanderImg(urls));
  }, []);

  return (
    <DisplayProjects
      emoticareImg={emoticareImg}
      campcommImg={campcommImg}
      socialbuzzImg={socialbuzzImg}
      roadwanderImg={roadwanderImg}
    />
  );
}

export default ProjectList;
