import { Link } from 'react-router-dom';
import Footer from '../components/Footer'; // ✅ Add this import

function Reach() {
  return (
    <>
      <main className="bg-[#F8FAFC] text-[#111827] min-h-screen flex flex-col justify-between pt-32 px-6 pb-32">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-[#F97316]">
            Expand Your Reach
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-80">
            We connect you to the right audience through strategic, data-driven outreach campaigns designed to deliver real, measurable growth.
          </p>
        </section>

        {/* Details Section */}
        <section className="max-w-5xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
            <p className="opacity-80 mb-4">
              We believe outreach isn't just about volume — it's about precision. We identify and engage high-potential prospects through customized messaging, personalized campaigns, and consistent follow-ups.
            </p>
            <p className="opacity-80">
              Every campaign is crafted to reflect your brand voice, goals, and audience profile, ensuring that you don’t just get leads — you build lasting relationships.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">What We Deliver</h2>
            <ul className="space-y-4 list-disc list-inside text-[#111827] opacity-90">
              <li>Targeted Lead Lists curated to your niche</li>
              <li>Personalized Cold Email Campaigns and Scripts</li>
              <li>Follow-up Sequences optimized for response rates</li>
              <li>Outreach Automation Systems (optional)</li>
              <li>Weekly Reporting and Performance Insights</li>
            </ul>
          </div>
        </section>

{/* Why It Matters Section */}
<section className="text-center max-w-6xl mx-auto mb-24">
  <h2 className="text-3xl font-bold mb-12">Why Reach Matters</h2>
  <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
      <p className="text-lg font-semibold mb-4">✅ 80% of B2B buyers expect personalized outreach before engaging with a brand.</p>
      <p className="text-sm opacity-60">Source: Demand Gen Report, 2022</p>
    </div>
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
      <p className="text-lg font-semibold mb-4">✅ Companies with consistent lead generation grow 30% faster than competitors.</p>
      <p className="text-sm opacity-60">Source: HubSpot State of Marketing Report, 2023</p>
    </div>
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
      <p className="text-lg font-semibold mb-4">✅ 44% of salespeople give up after one follow-up — persistence unlocks opportunity.</p>
      <p className="text-sm opacity-60">Source: Salesforce Sales Effectiveness Study, 2022</p>
    </div>
  </div>
</section>



        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Grow?</h2>
          <Link
            to="/intake"
            className="bg-[#F97316] hover:bg-orange-500 text-black font-semibold py-4 px-8 rounded-full text-lg transition"
          >
            Book a Free Discovery Call
          </Link>
        </section>
      </main>

      {/* Footer Component */}
      <Footer />
    </>
  );
}

export default Reach;
