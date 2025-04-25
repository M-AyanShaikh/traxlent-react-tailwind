function HowItWorks() {
  const steps = [
    {
      title: "1. Discovery Call",
      description: "We meet to understand your business, your goals, and your growth vision."
    },
    {
      title: "2. Strategy Tailoring",
      description: "We design a customized outreach, content, and build plan that fits your needs."
    },
    {
      title: "3. Precision Execution",
      description: "Our team brings your strategy to life with professionalism, speed, and care."
    },
    {
      title: "4. Scale and Thrive",
      description: "You watch your brand grow with high-converting systems and powerful presence."
    }
  ];

  return (
    <section className="py-24 px-6 bg-black text-white">
      <h2 className="text-4xl font-bold text-center mb-16">Our Process</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-12 text-center">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center gap-4">
            <div className="bg-[#F97316] text-black font-bold rounded-full h-16 w-16 flex items-center justify-center text-lg">
              {index + 1}
            </div>
            <p className="font-semibold">{step.title}</p>
            <p className="text-sm opacity-70">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
