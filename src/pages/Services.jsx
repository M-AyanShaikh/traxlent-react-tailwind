import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Services() {
  return (
    <>
      <main className="bg-[#F8FAFC] text-[#111827] min-h-screen flex flex-col justify-between pt-32 px-6 pb-32">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-[#F97316]">
            Services Built for Growth
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-80">
            Traxlent helps entrepreneurs, small businesses, and growing brands expand faster with smarter outreach, stronger voice, and scalable systems.
          </p>
        </section>

        {/* Services Overview Cards */}
        <section className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-3 gap-12 text-left mb-24">
          {/* Reach Card */}
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300">
            <h3 className="text-2xl font-semibold text-[#F97316] mb-4">Reach</h3>
            <p className="opacity-80 mb-4 text-sm">
              For businesses ready to move beyond word-of-mouth and inconsistent leads. We design precision outreach systems that connect you with real prospects, not random noise.
            </p>
            <ul className="list-disc list-inside text-sm opacity-80 mb-6">
              <li>Hand-curated lead lists in your industry</li>
              <li>Personalized cold emails & messaging</li>
              <li>Automated follow-ups to boost response</li>
            </ul>
            <Link
              to="/reach"
              className="inline-block bg-[#F97316] hover:bg-orange-500 hover:scale-105 transition-all duration-300 text-black font-semibold py-2 px-6 rounded-full text-sm"
            >
              Explore Reach
            </Link>
          </div>

          {/* Voice Card */}
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300">
            <h3 className="text-2xl font-semibold text-[#F97316] mb-4">Voice</h3>
            <p className="opacity-80 mb-4 text-sm">
              For brands tired of blending in. We craft your story, sharpen your messaging, and give you a voice that earns trust and drives loyalty across every platform.
            </p>
            <ul className="list-disc list-inside text-sm opacity-80 mb-6">
              <li>Website copy and email sequences</li>
              <li>Brand voice guidelines for consistency</li>
              <li>Thought leadership content & strategy</li>
            </ul>
            <Link
              to="/voice"
              className="inline-block bg-[#F97316] hover:bg-orange-500 hover:scale-105 transition-all duration-300 text-black font-semibold py-2 px-6 rounded-full text-sm"
            >
              Explore Voice
            </Link>
          </div>

          {/* Build Card */}
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300">
            <h3 className="text-2xl font-semibold text-[#F97316] mb-4">Build</h3>
            <p className="opacity-80 mb-4 text-sm">
              For entrepreneurs who need systems that don’t break when they grow. We design fast websites, automated funnels, and backend solutions built to scale without stress.
            </p>
            <ul className="list-disc list-inside text-sm opacity-80 mb-6">
              <li>Landing pages that actually convert</li>
              <li>CRM, email capture, and automations</li>
              <li>Backend systems built for growth</li>
            </ul>
            <Link
              to="/build"
              className="inline-block bg-[#F97316] hover:bg-orange-500 hover:scale-105 transition-all duration-300 text-black font-semibold py-2 px-6 rounded-full text-sm"
            >
              Explore Build
            </Link>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">Built for businesses that are serious about growth.</h2>
          <p className="text-lg opacity-80 mb-8 max-w-3xl mx-auto">
            Book a free discovery call. Let’s design the system that takes your brand from next step to next level.
          </p>
          <Link
            to="/intake"
            className="bg-[#F97316] hover:bg-orange-500 hover:scale-105 transition-all duration-300 text-black font-semibold py-4 px-8 rounded-full text-lg"
          >
            Book My Discovery Call
          </Link>
        </section>
      </main>

      {/* Footer Component */}
      <Footer />
    </>
  );
}

export default Services;
