// src/pages/WhyUs.jsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function WhyUs() {
  return (
    <>
      <main className="bg-[#F8FAFC] text-[#111827] min-h-screen flex flex-col justify-between pt-32 px-6 pb-32">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-[#F97316]">
            Why Choose Traxlent?
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-80">
            In a world of cookie-cutter agencies and endless delays, Traxlent is built for entrepreneurs who move fast, think sharp, and expect results.
          </p>
        </motion.section>

        {/* Advantage Cards */}
        <section className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-3 gap-12 text-left mb-24">
          {[
            {
              title: "Tailored Strategies, Not Templates",
              desc: "For brands who are tired of copy-paste campaigns and 'one-size-fits-all' packages. Every Traxlent solution is handcrafted to match your brand, your market, and your goals.",
              bullets: [
                "Custom lead generation strategies",
                "Voice and branding perfectly aligned",
                "Systems that evolve with your business"
              ]
            },
            {
              title: "Faster Turnarounds, Higher Standards",
              desc: "For businesses that can't afford to wait 3–6 months for results. Our lean structure delivers premium websites, outreach, and content in weeks — with full transparency throughout.",
              bullets: [
                "Websites in as little as 3–4 weeks",
                "Outreach campaigns in 10–14 days",
                "Clear timelines and proactive updates"
              ]
            },
            {
              title: "Built by Entrepreneurs, for Entrepreneurs",
              desc: "We're not career agency people — we're builders. We understand the pressure to grow without wasting time, budget, or momentum — and we design everything around making that happen.",
              bullets: [
                "Practical, results-focused systems",
                "Flexible and scalable solutions",
                "Clear deliverables, no agency fluff"
              ]
            }
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-[#F97316] mb-4">
                {card.title}
              </h3>
              <p className="opacity-80 mb-4 text-sm">
                {card.desc}
              </p>
              <ul className="list-disc list-inside text-sm opacity-70 space-y-2">
                {card.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </section>

        {/* Closing CTA */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-3xl font-bold mb-6">
            This is what working with the right partner feels like.
          </h2>
          <p className="text-lg opacity-80 max-w-3xl mx-auto mb-8">
            Move faster. Build smarter. Grow bigger. Let’s design the system your business actually deserves.
          </p>
          <Link
            to="/intake"
            className="bg-[#F97316] hover:bg-orange-500 hover:scale-105 transition-all duration-300 text-black font-semibold py-4 px-8 rounded-full text-lg"
          >
            Start Your Journey
          </Link>
        </motion.section>
      </main>

      {/* Footer Component */}
      <Footer />
    </>
  );
}

export default WhyUs;
