// src/pages/Intake.jsx

import { motion } from 'framer-motion';

function Intake() {
  return (
    <main className="bg-[#F8FAFC] text-[#111827] min-h-screen flex flex-col justify-center items-center py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl bg-white p-10 rounded-2xl shadow-md border border-gray-200"
      >
        <h1 className="text-3xl font-bold mb-8 text-center text-[#F97316]">
          Book Your Discovery Call
        </h1>

        <form
          action="https://formsubmit.co/YOUR@EMAIL.COM" 
          method="POST"
          className="space-y-6"
        >
          {/* Hidden config inputs */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="box" />
          <input type="hidden" name="_subject" value="New Traxlent Discovery Call Intake!" />
          <input type="hidden" name="_next" value="http://localhost:5173/thankyou" />
          {/* Replace above URL with production later */}

          {/* Full Name */}
          <div>
            <label className="block mb-2 font-semibold">Full Name</label>
            <input
              type="text"
              name="Name"
              required
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-[#F97316]"
              placeholder="John Doe"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-semibold">Email Address</label>
            <input
              type="email"
              name="Email"
              required
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-[#F97316]"
              placeholder="you@example.com"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-2 font-semibold">Phone Number</label>
            <input
              type="text"
              name="Phone"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-[#F97316]"
              placeholder="(123) 456-7890"
            />
          </div>

          {/* Business Name */}
          <div>
            <label className="block mb-2 font-semibold">Business Name</label>
            <input
              type="text"
              name="Business Name"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-[#F97316]"
              placeholder="My Company Inc."
            />
          </div>

          {/* Website */}
          <div>
            <label className="block mb-2 font-semibold">Website (Optional)</label>
            <input
              type="text"
              name="Website"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-[#F97316]"
              placeholder="https://example.com"
            />
          </div>

          {/* Project Needs */}
          <div>
            <label className="block mb-2 font-semibold">What Are You Looking For?</label>
            <textarea
              name="Project Needs"
              required
              rows="4"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-[#F97316]"
              placeholder="e.g., I need help with outreach campaigns and website redesign..."
            ></textarea>
          </div>

          {/* Budget Range */}
          <div>
            <label className="block mb-2 font-semibold">Approximate Budget (Optional)</label>
            <input
              type="text"
              name="Budget Range"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-[#F97316]"
              placeholder="$3,000 - $5,000"
            />
          </div>

          {/* Preferred Call Time */}
          <div>
            <label className="block mb-2 font-semibold">Preferred Call Time</label>
            <input
              type="text"
              name="Preferred Call Time"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-[#F97316]"
              placeholder="Monday morning, Wednesday afternoon, etc."
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#F97316] hover:bg-orange-500 text-black font-bold py-4 px-10 rounded-full text-lg transition"
            >
              Book My Discovery Call
            </button>
          </div>
        </form>
      </motion.div>
    </main>
  );
}

export default Intake;
