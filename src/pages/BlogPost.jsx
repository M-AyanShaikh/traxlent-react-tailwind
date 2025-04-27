import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const posts = {
  "precision-outreach-smart-lead-generation": {
    title: "Precision Outreach: How Smart Lead Generation Drives Real Growth",
    content: `
In today's saturated marketplace, getting noticed isn’t about shouting louder — it’s about speaking smarter.

Businesses that rely on outdated cold lists or random mass messaging are burning budgets and damaging their brands without even realizing it.

When we work with companies looking to grow, the first place we focus is precision outreach — building smart, targeted lead generation systems that put quality over quantity, every single time.

The Problem with Traditional Outreach:

Huge spreadsheets of random leads.  
Generic email blasts.  
Minimal personalization.  
Low response rates, even lower trust.

The result? Damaged reputations, lost opportunities, wasted spend.

The Shift: Precision Over Volume:

At Traxlent, we design precision outreach systems based on two principles:
- Relevance: Hand-curated lead lists tailored to industry, role, and growth stage.
- Personalization: Messaging crafted specifically to resonate with the target.

One client saw a 4x increase in qualified leads in just 60 days by shifting to this method.

Why Personalization Matters:

- McKinsey: Personalization delivers 5–8x marketing ROI.
- Salesforce: 76% of buyers expect companies to understand their needs.

How We Build Outreach Systems:

1. Ideal Customer Profile mapping  
2. Custom Lead Sourcing  
3. Personalized Messaging  
4. Smart Follow-Up Systems  
5. Weekly Performance Optimization

Case Study: Rebuilding a Pipeline:

A Toronto SaaS startup went from near-zero traction to over 30 qualified calls in 90 days — without increasing spend.

Why It Matters for You:

Precision outreach:
- Protects your brand
- Increases conversion rates
- Shortens your sales cycle
- Scales sustainably

Final Thoughts:

The future isn’t louder.  
It’s smarter, sharper, and more human.

Businesses that embrace precision today will dominate tomorrow.
    `
  },

  "building-a-competitive-voice": {
    title: "Why Building a Strong Brand Voice Is Your Competitive Advantage",
    content: `
Your product matters.  
Your service matters.

But in a noisy, distracted marketplace, what matters even more is how you communicate.

Brand voice isn't just tone — it's the emotional thread that ties your business to your customers. It builds trust before you ever meet, and loyalty long after the transaction.

The Danger of Sounding Like Everyone Else:

Generic taglines.  
Cliché buzzwords.  
Inconsistent messaging across platforms.

Brands that blend into the background are quickly forgotten.

Trends: Why Voice Matters:

- 86% of consumers say authenticity is a major factor in choosing brands. (Stackla)
- Consistent branding across channels increases revenue by 33%. (Lucidpress)

How We Craft Brand Voices:

Our brand voice process focuses on:
- Audience Research
- Value Proposition Deep-Dives
- Tone Mapping (serious, bold, friendly, expert, etc.)
- Voice Guides for scaling your brand consistently

Case Study: Amplifying Authority:

A financial services firm reduced bounce rates by 37% and increased conversions by 22% within six weeks of refining their brand voice.

Why It Matters for You:

A strong voice:
- Attracts better-fit customers
- Creates emotional loyalty
- Builds a real, defensible brand asset

Final Thoughts:

Your voice is your brand’s signature.

Clarity, consistency, and authenticity create loyalty and growth.
    `
  },

  "scaling-systems-for-business-growth": {
    title: "Why Scalable Systems Separate Small Brands from Big Brands",
    content: `
There’s a common myth among small business owners: "We'll figure out the systems later."

Later rarely comes — and when it does, it's often too late.

Brands that scale fast are the ones that build systems early, before chaos sets in.

The Problem Without Systems:

Without solid backend systems:
- Leads fall through the cracks
- Customer experience becomes inconsistent
- Growth becomes stressful instead of scalable

Why Systems Are the Secret Weapon:

Brands with smart systems scale sustainably.  
Brands without systems grow in fits and starts — then stall.

Systems allow you to:
- Serve more customers without more stress
- Deliver better service with less friction
- Make smarter decisions with better data

What Systems We Build:

At Traxlent, we specialize in:
- Automated Lead Capture
- CRM Integrations
- Follow-up and Nurture Automations
- Backend Process Flows

Case Study: From Chaos to Calm:

A mobile service company overwhelmed after a surge in demand streamlined operations with an automated booking and payment system, doubling their client load without doubling their stress.

Why It Matters for You:

Without systems:
- Growth becomes a liability
- Customer loyalty drops
- Operations break under pressure

With systems:
- You unlock scalable growth
- You protect customer experience
- You free your time to focus on strategic decisions

Final Thoughts:

Systems don't limit creativity — they protect it.

The brands that will dominate tomorrow are building their infrastructure today.
    `
  }
};

function BlogPost() {
  const { slug } = useParams();
  const post = posts[slug];

  if (!post) {
    return (
      <div className="flex items-center justify-center min-h-screen text-center">
        <p className="text-xl font-semibold">Post not found.</p>
      </div>
    );
  }

  return (
    <main className="bg-[#F8FAFC] text-[#111827] min-h-screen py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 text-[#F97316]">{post.title}</h1>
        <p className="whitespace-pre-line text-lg opacity-80 leading-relaxed">
          {post.content}
        </p>
      </motion.div>
    </main>
  );
}

export default BlogPost;
