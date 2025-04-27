// src/components/ServicesPreview.jsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function ServicesPreview() {
  const services = [
    {
      title: "Reach",
      desc: "Expand your audience through precision outreach and smart lead generation systems.",
      link: "/reach"
    },
    {
      title: "Voice",
      desc: "Craft a brand voice that builds trust, loyalty, and real engagement across platforms.",
      link: "/voice"
    },
    {
      title: "Build",
      desc: "Launch powerful websites, automations, and backend systems designed to scale fast.",
      link: "/build"
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#111827] text-white">
      <h2 className="text-4xl font-bold text-center mb-16 text-[#F97316]">
        What We Build
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-[#111827] p-8 rounded-2xl border border-[#64748B] hover:border-[#F97316] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-sm opacity-80 mb-6">{service.desc}</p>
            </div>
            <Link
              to={service.link}
              className="inline-block bg-[#F97316] hover:bg-orange-500 hover:scale-105 transition-all duration-300 text-black font-semibold py-2 px-6 rounded-full text-sm mt-auto"
            >
              Learn More
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ServicesPreview;
