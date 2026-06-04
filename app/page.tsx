'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';

import Loader from '@/components/ui/Loader';
import CustomCursor from '@/components/ui/CustomCursor';
import ScrollProgress from '@/components/ui/ScrollProgress';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import MarqueeStrip from '@/components/sections/MarqueeStrip';
import Services from '@/components/sections/Services';
import Stats from '@/components/sections/Stats';
import TechStack from '@/components/sections/TechStack';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

const Projects = dynamic(() => import('@/components/sections/Projects'), { ssr: false });
const About = dynamic(() => import('@/components/sections/About'), { ssr: false });

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Loader onComplete={() => setLoaded(true)} />
      {loaded && (
        <>
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          <main className="relative z-10">
            <Hero />
            <MarqueeStrip />
            <Services />
            <Projects />
            <Stats />
            <TechStack />
            <About />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
