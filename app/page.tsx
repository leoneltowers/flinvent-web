import Hero3D from './components/Hero3D';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Hero3D />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
