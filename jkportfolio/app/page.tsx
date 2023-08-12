import Image from 'next/image'
import Hero from '../components/layout/Hero'
import AboutMe from '@/components/layout/AboutMe';
import Skills from '@/components/Skills/Skills';

export default function Home() {
  return (
    <div className="">
      <Hero />
      <AboutMe />
      <Skills />
    </div>
  );
}
