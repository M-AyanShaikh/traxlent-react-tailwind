// src/components/HowItWorks.jsx

import { motion } from 'framer-motion';

function HowItWorks() {
  const steps = [
    {
      title: "Discovery Call",
      desc: "We learn your goals, challenges, and ambitions — so we can craft solutions that fit, not force."
    },
    {
      title: "Strategy Tailoring",
      desc: "We design a custom roadmap across outreach, voice, and systems — built around your growth stage."
    },
    {
      title: "Precision Execution",
      desc: "We launch high-impact campaigns and build smart systems — fast, efficient, and transparent."
    },
    {
      title: "Scale and Thrive",
      desc: "With better leads, a sharper brand, and scalable systems, you’re positioned to grow without bottlenecks."
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#F8FAFC] text-[#111827]">
      <h2 className="text-4xl font-bold text-center mb-16 text-[#F97316]">
        How It Works
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-12 text-center">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
          >
            <div className="bg-[#F97316] text-black font-bold rounded-full h-16 w-16 flex items-center justify-center text-lg mx-auto mb-6">
              {index + 1}
            </div>
            <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
            <p className="text-sm opacity-80">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
