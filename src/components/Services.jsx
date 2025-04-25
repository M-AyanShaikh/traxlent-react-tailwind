function Services() {
  const services = [
    { title: "Reach", desc: "Expand your presence with precision-crafted outreach." },
    { title: "Voice", desc: "Shape a voice that's uniquely yours with premium content." },
    { title: "Build", desc: "Develop stunning websites and automations to scale." }
  ];
  return (
    <section className="py-24 px-6 bg-[#F97316]">
      <h2 className="text-4xl font-bold text-center mb-16 text-black">Our Expertise</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-12">
        {services.map((service) => (
          <div
            key={service.title}
            className="p-10 rounded-2xl bg-white shadow-lg hover:scale-105 transform transition"
          >
            <h3 className="text-2xl font-semibold mb-4 text-black">{service.title}</h3>
            <p className="text-[#111827] opacity-80">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
