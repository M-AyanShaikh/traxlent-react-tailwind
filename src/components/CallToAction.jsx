import { Link } from 'react-router-dom';

function FinalCTA() {
  return (
    <section className="py-24 px-6 bg-[#111827] text-[#F8FAFC] text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-[#F97316]">
          Ready to Build Something Exceptional?
        </h2>
        <p className="text-lg opacity-80 mb-10">
          Your next stage of growth doesn’t happen by accident. It happens by design.
          Let’s craft a system that takes you there — with precision, speed, and strength.
        </p>
        <Link
          to="/intake"
          className="inline-block bg-[#F97316] hover:bg-orange-500 hover:scale-105 transition-all duration-300 text-black font-semibold py-4 px-8 rounded-full text-lg"
        >
          Book My Discovery Call
        </Link>
      </div>
    </section>
  );
}

export default FinalCTA;
