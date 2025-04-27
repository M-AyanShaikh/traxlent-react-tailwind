import { motion } from 'framer-motion';

function TermsOfService() {
  return (
    <main className="bg-[#F8FAFC] text-[#111827] min-h-screen py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-10 text-[#F97316]">Terms of Service</h1>

        <div className="space-y-8 text-lg opacity-80 leading-relaxed">

          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using our website, services, or engaging with Traxlent, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Services Offered</h2>
            <p>
              Traxlent provides professional services including but not limited to outreach systems, content creation, branding consultation, and website development. Service details and deliverables will be clearly outlined before project engagement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
            <p>
              You agree to provide accurate information when working with us and to promptly communicate any changes or updates that may affect your project. You are responsible for reviewing and approving deliverables in a timely manner.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
            <p>
              Unless otherwise stated, all content, designs, and systems created by Traxlent remain our intellectual property until final payment is received. Upon full payment, ownership of project deliverables will be transferred to you unless otherwise specified.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Payment Terms</h2>
            <p>
              Payment terms, timelines, and methods will be clearly stated in your service agreement or proposal. Late payments may result in project delays or additional fees.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Cancellations and Refunds</h2>
            <p>
              Cancellations must be requested in writing. Refunds will be evaluated on a case-by-case basis depending on project progress and costs incurred. Certain deposits may be non-refundable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
            <p>
              We strive for excellence, but we are not liable for any indirect, incidental, or consequential damages arising from the use of our services or website. All services are provided "as is" without warranties of any kind unless explicitly stated.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Updates will be posted on this page with a new effective date. Your continued use of our services after changes are posted signifies your acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="mt-2 font-semibold">[traxlentinfo@gmail.com]</p>
          </section>

        </div>
      </motion.div>
    </main>
  );
}

export default TermsOfService;
