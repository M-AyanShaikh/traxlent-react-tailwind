import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Build() {
  return (
    <>
      <main className="bg-[#F8FAFC] text-[#111827] min-h-screen flex flex-col justify-between pt-32 px-6 pb-32">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-[#F97316]">
            Build Systems That Scale
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-80">
            From powerful websites to automation that saves you hours — we build the foundations that help your brand grow faster, smoother, and smarter.
          </p>
        </section>

        {/* Details Section */}
        <section className="max-w-5xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Build Philosophy</h2>
            <p className="opacity-80 mb-4">
              Building isn't just about launching — it's about designing systems that are scalable, efficient, and user-focused. We prioritize clean design, intuitive UX, and smart backend systems that save you time and maximize your reach.
            </p>
            <p className="opacity-80">
              Every solution we build is crafted to grow alongside your business — no more bottlenecks, no more band-aid fixes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">What We Deliver</h2>
            <ul className="space-y-4 list-disc list-inside text-[#111827] opacity-90">
              <li>Custom Landing Pages optimized for conversions</li>
              <li>Business Websites that blend design and functionality</li>
              <li>CRM and Lead Capture Integrations</li>
              <li>Email Automation and Client Follow-up Systems</li>
              <li>Simple, Non-Technical Management for You</li>
            </ul>
          </div>
        </section>

        {/* Why It Matters Section */}
<section className="text-center max-w-6xl mx-auto mb-24">
  <h2 className="text-3xl font-bold mb-12">Why Building Smart Systems Matters</h2>
  <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
      <p className="text-lg font-semibold mb-4">✅ 75% of users judge a business’s credibility based on website design alone.</p>
      <p className="text-sm opacity-60">Source: Stanford Web Credibility Research, 2022</p>
    </div>
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
      <p className="text-lg font-semibold mb-4">✅ Sites that load in under 2 seconds have a 50% higher conversion rate.</p>
      <p className="text-sm opacity-60">Source: Portent Site Speed Study, 2023</p>
    </div>
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
      <p className="text-lg font-semibold mb-4">✅ Businesses using marketing automation see a 451% increase in qualified leads.</p>
      <p className="text-sm opacity-60">Source: Annuitas Group Demand Generation Report, 2022</p>
    </div>
  </div>
</section>


        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">Let’s Build Your Foundation</h2>
          <Link
            to="/intake"
            className="bg-[#F97316] hover:bg-orange-500 text-black font-semibold py-4 px-8 rounded-full text-lg transition"
          >
            Book Your Free Strategy Call
          </Link>
        </section>
      </main>

      {/* Footer Component */}
      <Footer />
    </>
  );
}

export default Build;
