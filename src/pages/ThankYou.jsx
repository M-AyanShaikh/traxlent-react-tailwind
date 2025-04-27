// src/pages/ThankYou.jsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function ThankYou() {
  return (
    <main className="bg-[#F8FAFC] text-[#111827] min-h-screen flex flex-col justify-center items-center py-24 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white p-10 rounded-2xl shadow-md border border-gray-200 max-w-xl"
      >
        <h1 className="text-4xl font-bold mb-6 text-[#F97316]">
          Thank You!
        </h1>
        <p className="text-lg opacity-80 mb-8">
          Your form has been received.  
          A member of the Traxlent team will reach out to you shortly to schedule your discovery call.
        </p>
        <Link
          to="/"
          className="bg-[#F97316] hover:bg-orange-500 text-black font-semibold py-4 px-10 rounded-full text-lg transition"
        >
          Back to Home
        </Link>
      </motion.div>
    </main>
  );
}

export default ThankYou;
