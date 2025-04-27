import { motion } from 'framer-motion';

function PrivacyPolicy() {
  return (
    <main className="bg-[#F8FAFC] text-[#111827] min-h-screen py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-10 text-[#F97316]">Privacy Policy</h1>

        <div className="space-y-8 text-lg opacity-80 leading-relaxed">

          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p>
              Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our website and services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            <p>
              We may collect personal information that you provide to us voluntarily, such as your name, email address, phone number, and business information when you fill out our intake form or contact us directly.
            </p>
            <p className="mt-2">
              We may also collect non-personal information automatically when you browse our website, such as IP address, browser type, and usage data through cookies or analytics tools.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p>
              We use your information to:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>Respond to your inquiries and provide requested services</li>
              <li>Schedule discovery calls and consultations</li>
              <li>Improve our website, services, and customer experience</li>
              <li>Send important updates, service-related communications, or marketing offers (only with your consent)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Sharing Your Information</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our website or conducting our business, provided they agree to keep your information confidential.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Cookies</h2>
            <p>
              Our website may use cookies to enhance your browsing experience. Cookies are small data files stored on your device that help improve functionality and analyze website usage. You can choose to disable cookies through your browser settings if you prefer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
            <p>
              We implement reasonable security measures to protect your personal information. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal information at any time. To make a request, please contact us using the information provided below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or how we handle your data, please contact us at:
            </p>
            <p className="mt-2 font-semibold">[traxlentinfo@gmail.com]</p>
          </section>

        </div>
      </motion.div>
    </main>
  );
}

export default PrivacyPolicy;
