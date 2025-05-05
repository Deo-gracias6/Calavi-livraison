import Hero from '../components/home/Hero';
import HowItWorks from '../components/home/HowItWorks';
import Features from '../components/home/Features';
import Testimonials from '../components/home/Testimonials';
import Stats from '../components/home/Stats';
import CallToAction from '../components/home/CallToAction';
import { useEffect } from 'react';

const HomePage = () => {
  useEffect(() => {
    document.title = 'CALAVI COURSES | Service de livraison locale rapide';
  }, []);

  return (
    <>
      <Hero />
      <HowItWorks />
      <Features />
      <Stats />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default HomePage;