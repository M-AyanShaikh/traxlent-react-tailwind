import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    title: "Precision Outreach: How Smart Lead Generation Drives Real Growth",
    description: "How modern outreach systems create better connections, more leads, and stronger brands.",
    slug: "precision-outreach-smart-lead-generation",
    date: "April 2025"
  },
  {
    title: "Why Building a Strong Brand Voice Is Your Competitive Advantage",
    description: "How clarity, authenticity, and consistency in messaging drive loyalty and real growth.",
    slug: "building-a-competitive-voice",
    date: "April 2025"
  },
  {
    title: "Why Scalable Systems Separate Small Brands from Big Brands",
    description: "Why backend systems are the foundation for sustainable, stress-free business growth.",
    slug: "scaling-systems-for-business-growth",
    date: "April 2025"
  }
];

function Blog() {
  return (
    <main className="bg-[#F8FAFC] text-[#111827] min-h-screen py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-16 text-center text-[#F97316]">
          Insights & Case Studies
        </h1>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
                <p className="opacity-80 text-sm mb-6">{post.description}</p>
              </div>
              <Link
                to={`/blog/${post.slug}`}
                className="text-[#F97316] hover:underline font-semibold text-sm mt-auto"
              >
                Read More →
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}

export default Blog;
