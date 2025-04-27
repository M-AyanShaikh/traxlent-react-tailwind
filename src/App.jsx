import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Reach from './pages/Reach';
import Voice from './pages/Voice';
import Build from './pages/Build';
import Intake from './pages/Intake';
import WhyUs from './pages/WhyUs';
import Services from './pages/Services';
import ThankYou from './pages/ThankYou';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reach" element={<Reach />} />
        <Route path="/voice" element={<Voice />} />
        <Route path="/build" element={<Build />} />
        <Route path="/intake" element={<Intake />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </main>
  );
}

export default App;
