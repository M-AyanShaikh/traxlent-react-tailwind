// src/components/WhyUsMini.jsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function WhyUsMini() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-24 px-6 bg-[#F8FAFC] text-[#111827] text-center"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-[#F97316]">
          Why Traxlent?
        </h2>
        <p className="text-lg opacity-80 mb-6">
          We’re not a bloated agency with recycled templates and vague promises. 
          We build precision systems — fast, tailored, and built to scale with you.
        </p>
        <p className="text-lg opacity-80 mb-12">
          Work with people who think like builders, not middle managers.
        </p>
        <Link
          to="/why-us"
          className="inline-block bg-[#F97316] hover:bg-orange-500 hover:scale-105 transition-all duration-300 text-black font-semibold py-4 px-8 rounded-full text-lg"
        >
          See the Traxlent Difference
        </Link>
      </div>
    </motion.section>
  );
}

export default WhyUsMini;
