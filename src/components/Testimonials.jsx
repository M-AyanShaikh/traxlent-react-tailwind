import { useState, useEffect } from 'react';

function Testimonials() {
  const testimonials = [
    {
      quote: "Partnering with Traxlent transformed our online strategy. Their team was efficient, creative, and detail-obsessed. Highly recommend!",
      name: "Satisfied Client"
    },
    {
      quote: "Traxlent didn’t just deliver a service — they built a system that keeps delivering leads and results month after month.",
      name: "Business Owner"
    },
    {
      quote: "Smart, sharp, and fast. Traxlent helped us find our voice and expand our brand without getting bogged down in complexity.",
      name: "Startup Founder"
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000); // rotate every 5 seconds
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-24 px-6 bg-[#F97316] text-black text-center">
      <h2 className="text-4xl font-bold mb-16">What Clients Are Saying</h2>

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl border border-black/10 shadow-md transition-all duration-500">
        <p className="italic text-lg mb-6">
          "{testimonials[current].quote}"
        </p>
        <p className="font-semibold text-[#111827] not-italic">
          - {testimonials[current].name}
        </p>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center gap-3 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full ${index === current ? 'bg-black' : 'bg-white/50'} transition`}
            onClick={() => setCurrent(index)}
          ></button>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
