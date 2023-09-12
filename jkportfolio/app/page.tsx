import Image from 'next/image'
import Hero from '../components/layout/Heros/Hero'
import AboutMe from '@/components/layout/Skills/AboutMe';
import Skills from '@/components/layout/Skills/Skills';
import Projects from '@/components/layout/Projects/Projects';
import Contact from '@/components/layout/Contact/Contact';
import Footer from '@/components/layout/Footer/Footer';
import ParticlesBg from '@/particles/ParticlesBg';

export default function Home() {
  return (
    <div style={{scrollBehavior: "smooth"}} className='overflow-x-hidden'>
      <ParticlesBg gradient='"linear-gradient(19deg, #222222 0%, #C2410C 100%)"' />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
