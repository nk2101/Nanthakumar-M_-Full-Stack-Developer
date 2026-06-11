import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Nanthakumar M — Full Stack Software Developer Portfolio</title>
        <meta name="description" content="Portfolio of Nanthakumar M, a Full Stack Software Developer with 3.5+ years of experience building scalable web apps with React, Node.js, and TypeScript." />
        <link rel="canonical" href="https://nanthakumar-full-stack-developer.lovable.app/" />
        <meta property="og:title" content="Nanthakumar M — Full Stack Software Developer Portfolio" />
        <meta property="og:description" content="Portfolio of Nanthakumar M, a Full Stack Software Developer with 3.5+ years of experience building scalable web apps with React, Node.js, and TypeScript." />
        <meta property="og:url" content="https://nanthakumar-full-stack-developer.lovable.app/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
