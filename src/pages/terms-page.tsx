import { FileText, Calendar } from 'lucide-react';

export function TermsPage() {
  return (
    <div className="min-h-screen pb-16">
      {/* Header */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/10 via-[#b800ff]/10 to-[#00ff88]/10" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#00f0ff] to-[#b800ff] mb-6 neon-glow">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            Terms & <span className="text-primary">Conditions</span>
          </h1>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>Last updated: March 9, 2026</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="glass-card rounded-2xl p-8 md:p-12 border border-border space-y-8">
          {/* Section 1 */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              By accessing and using Turfo ("the Platform"), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these Terms and Conditions, please do not use the Platform.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these terms at any time. Your continued use of the Platform following any changes indicates your acceptance of the new terms.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. User Accounts</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To use certain features of the Platform, you must create an account. You agree to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and promptly update your account information</li>
              <li>Maintain the security of your password</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized use</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Booking and Payments</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              All bookings are subject to availability and confirmation. By making a booking, you agree to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Pay the full booking amount at the time of reservation</li>
              <li>Arrive at the turf at your scheduled time</li>
              <li>Follow the rules and regulations of the turf venue</li>
              <li>Respect the facilities and other users</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Cancellation and Refund Policy</h2>
            <div className="space-y-3 text-muted-foreground">
              <p className="leading-relaxed">
                <span className="font-semibold text-foreground">Cancellations made 24+ hours before booking:</span> Full refund (minus processing fees)
              </p>
              <p className="leading-relaxed">
                <span className="font-semibold text-foreground">Cancellations made 12-24 hours before booking:</span> 50% refund
              </p>
              <p className="leading-relaxed">
                <span className="font-semibold text-foreground">Cancellations made less than 12 hours before:</span> No refund
              </p>
              <p className="leading-relaxed mt-4">
                Refunds will be processed within 5-7 business days to the original payment method.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. User Conduct</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You agree not to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Upload or transmit malicious code or viruses</li>
              <li>Attempt to gain unauthorized access to the Platform</li>
              <li>Use the Platform for any fraudulent or illegal purposes</li>
              <li>Harass, abuse, or harm other users</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content on the Platform, including text, graphics, logos, images, and software, is the property of Turfo or its licensors and is protected by copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              Turfo acts as a platform connecting users with turf venues. We are not responsible for the quality, safety, or condition of the turfs. Users assume all risks associated with using the facilities. Turfo shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Platform.
            </p>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Dispute Resolution</h2>
            <p className="text-muted-foreground leading-relaxed">
              Any disputes arising from these Terms shall be resolved through binding arbitration in accordance with the laws of India. You agree to waive your right to participate in a class action lawsuit.
            </p>
          </div>

          {/* Section 9 */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have any questions about these Terms and Conditions, please contact us:
            </p>
            <div className="glass-card rounded-xl p-4 border border-primary/20">
              <p className="text-foreground mb-2">
                <span className="font-semibold">Email:</span> legal@turfo.com
              </p>
              <p className="text-foreground mb-2">
                <span className="font-semibold">Phone:</span> +91-1234567890
              </p>
              <p className="text-foreground">
                <span className="font-semibold">Address:</span> Turfo Headquarters, Bangalore, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
