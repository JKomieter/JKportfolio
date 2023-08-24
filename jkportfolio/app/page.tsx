import Image from 'next/image'
import Hero from '../components/layout/Hero'
import AboutMe from '@/components/layout/AboutMe';
import Skills from '@/components/Skills/Skills';
import Projects from '@/components/layout/Projects/Projects';

export default function Home() {
  return (
    <div style={{scrollBehavior: "smooth"}}>
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  );
}
