// src/pages/Services.jsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Services() {
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
            Services Built for Growth
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-80">
            Traxlent helps entrepreneurs, small businesses, and growing brands expand faster with smarter outreach, stronger voice, and scalable systems.
          </p>
        </motion.section>

        {/* Services Overview Cards */}
        <section className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-3 gap-12 text-left mb-24">
          {[
            {
              title: "Reach",
              desc: "For businesses ready to move beyond word-of-mouth and inconsistent leads. We design precision outreach systems that connect you with real prospects, not random noise.",
              bullets: [
                "Hand-curated lead lists in your industry",
                "Personalized cold emails & messaging",
                "Automated follow-ups to boost response"
              ],
              link: "/reach"
            },
            {
              title: "Voice",
              desc: "For brands tired of blending in. We craft your story, sharpen your messaging, and give you a voice that earns trust and drives loyalty across every platform.",
              bullets: [
                "Website copy and email sequences",
                "Brand voice guidelines for consistency",
                "Thought leadership content & strategy"
              ],
              link: "/voice"
            },
            {
              title: "Build",
              desc: "For entrepreneurs who need systems that don’t break when they grow. We design fast websites, automated funnels, and backend solutions built to scale without stress.",
              bullets: [
                "Landing pages that actually convert",
                "CRM, email capture, and automations",
                "Backend systems built for growth"
              ],
              link: "/build"
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-[#F97316] mb-4">
                {service.title}
              </h3>
              <p className="opacity-80 mb-4 text-sm">
                {service.desc}
              </p>
              <ul className="list-disc list-inside text-sm opacity-80 mb-6">
                {service.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
              <Link
                to={service.link}
                className="inline-block bg-[#F97316] hover:bg-orange-500 hover:scale-105 transition-all duration-300 text-black font-semibold py-2 px-6 rounded-full text-sm"
              >
                Explore {service.title}
              </Link>
            </motion.div>
          ))}
        </section>

        {/* Closing CTA */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-6">
            Built for businesses that are serious about growth.
          </h2>
          <p className="text-lg opacity-80 mb-8 max-w-3xl mx-auto">
            Book a free discovery call. Let’s design the system that takes your brand from next step to next level.
          </p>
          <Link
            to="/intake"
            className="bg-[#F97316] hover:bg-orange-500 hover:scale-105 transition-all duration-300 text-black font-semibold py-4 px-8 rounded-full text-lg"
          >
            Book My Discovery Call
          </Link>
        </motion.section>
      </main>

      {/* Footer Component */}
      <Footer />
    </>
  );
}

export default Services;
