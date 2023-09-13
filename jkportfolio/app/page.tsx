import Hero from '../components/layout/Heros/Hero'
import AboutMe from '@/components/layout/Skills/AboutMe';
import Skills from '@/components/layout/Skills/Skills';
import Projects from '@/components/layout/Projects/Projects';
import Contact from '@/components/layout/Contact/Contact';
import Footer from '@/components/layout/Footer/Footer';
import ParticlesBg from '@/particles/ParticlesBg';
import Particles2 from '@/particles/Particles2';

export default function Home() {
  return (
    <div style={{scrollBehavior: "smooth"}} className='overflow-x-hidden'>
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
