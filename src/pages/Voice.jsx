import { Link } from 'react-router-dom';
import Footer from '../components/Footer'; // ✅ Add this import

function Voice() {
  return (
    <>
      <main className="bg-[#F8FAFC] text-[#111827] min-h-screen flex flex-col justify-between pt-32 px-6 pb-32">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-[#F97316]">
            Shape Your Brand Voice
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-80">
            Your brand’s story deserves to be told with clarity, consistency, and impact. We help you find — and amplify — the voice that sets you apart.
          </p>
        </section>

        {/* Details Section */}
        <section className="max-w-5xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Philosophy</h2>
            <p className="opacity-80 mb-4">
              A strong voice is more than just good writing. It’s about building trust, evoking emotion, and positioning your brand as a leader in your space. We craft your messaging so every piece of content — from emails to web copy — speaks with authenticity and purpose.
            </p>
            <p className="opacity-80">
              Whether you're starting fresh or refining your narrative, we help your brand sound confident, consistent, and unforgettable.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">What We Create</h2>
            <ul className="space-y-4 list-disc list-inside text-[#111827] opacity-90">
              <li>Website Copywriting optimized for engagement</li>
              <li>Email Campaigns that build loyalty and drive action</li>
              <li>Social Media Captions and Content Calendars</li>
              <li>Blog Posts and Thought Leadership Articles</li>
              <li>Brand Voice Guidelines for future consistency</li>
            </ul>
          </div>
        </section>

        {/* Why It Matters Section */}
<section className="text-center max-w-6xl mx-auto mb-24">
  <h2 className="text-3xl font-bold mb-12">Why Brand Voice Matters</h2>
  <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
      <p className="text-lg font-semibold mb-4">✅ Brands that present themselves consistently see a 33% increase in revenue.</p>
      <p className="text-sm opacity-60">Source: Lucidpress State of Brand Consistency Report, 2022</p>
    </div>
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
      <p className="text-lg font-semibold mb-4">✅ 86% of consumers say authenticity is a key factor when choosing brands to support.</p>
      <p className="text-sm opacity-60">Source: Stackla Consumer Content Survey, 2022</p>
    </div>
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
      <p className="text-lg font-semibold mb-4">✅ Content marketing generates 3x more leads than traditional marketing — at 62% less cost.</p>
      <p className="text-sm opacity-60">Source: Demand Metric Content Marketing Study, 2023</p>
    </div>
  </div>
</section>


        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">Let’s Craft Your Voice</h2>
          <Link
            to="/intake"
            className="bg-[#F97316] hover:bg-orange-500 text-black font-semibold py-4 px-8 rounded-full text-lg transition"
          >
            Book a Free Strategy Session
          </Link>
        </section>
      </main>

      {/* Footer Component */}
      <Footer />
    </>
  );
}

export default Voice;
