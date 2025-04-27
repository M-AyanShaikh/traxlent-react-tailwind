// src/pages/Home.jsx

import Hero from '../components/Hero';
import ServicesPreview from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import WhyUsMini from '../components/WhyUsMini';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

function Home() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <ServicesPreview />
      <WhyUsMini />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  );
}

export default Home;
