import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-40 px-6 bg-[#F8FAFC]">
      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-[#F97316] mb-8">
        Growth Systems Built for Brands That Move Fast
      </h1>
      <p className="text-lg md:text-2xl text-[#111827] max-w-3xl opacity-80 mb-10">
        Traxlent partners with entrepreneurs and small businesses ready to scale smarter — with targeted outreach, authentic voice, and systems built to grow.
      </p>
      <div className="flex flex-col sm:flex-row gap-6">
        <Link
          to="/intake"
          className="bg-[#F97316] hover:bg-orange-500 hover:scale-105 transition-all duration-300 text-black font-semibold py-4 px-8 rounded-full text-lg"
        >
          Book a Discovery Call
        </Link>
        <Link
          to="/why-us"
          className="border-2 border-[#F97316] hover:bg-[#F97316] hover:text-black hover:scale-105 transition-all duration-300 text-[#F97316] font-semibold py-4 px-8 rounded-full text-lg"
        >
          Why Traxlent
        </Link>
      </div>
    </section>
  );
}

export default Hero;
