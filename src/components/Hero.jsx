function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-32 px-8 bg-[#F8FAFC]">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight text-[#F97316]">
        Build Your Brand <br className="hidden md:block" /> with Precision
      </h1>
      <p className="text-xl md:text-2xl mb-10 max-w-2xl text-[#111827]">
        At Traxlent, we craft your reach, your voice, and your growth — elegantly.
      </p>
      <a href="/intake" className="bg-[#F97316] hover:bg-orange-500 text-black font-bold py-4 px-8 rounded-full text-lg transition">
        Start Your Journey
      </a>
    </section>
  );
}

export default Hero;
