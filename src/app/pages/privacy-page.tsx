import { Shield, Calendar, Lock } from 'lucide-react';

export function PrivacyPage() {
  return (
    <div className="min-h-screen pb-16">
      {/* Header */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/10 via-[#b800ff]/10 to-[#00ff88]/10" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#39ff14] to-[#00ff88] mb-6 neon-glow">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            Privacy <span className="text-primary">Policy</span>
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
          {/* Introduction */}
          <div>
            <p className="text-muted-foreground leading-relaxed">
              At Turfo, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform. Please read this policy carefully.
            </p>
          </div>

          {/* Section 1 */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">Personal Information</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When you create an account or make a booking, we may collect:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Name and contact information (email, phone number)</li>
              <li>Payment information (processed securely through third-party providers)</li>
              <li>Booking history and preferences</li>
              <li>Profile information and preferences</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Usage Data</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We automatically collect certain information when you use our platform:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Device information (IP address, browser type, operating system)</li>
              <li>Usage patterns and interactions with the platform</li>
              <li>Location data (with your permission)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use the collected information to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Process and manage your bookings</li>
              <li>Provide customer support and respond to inquiries</li>
              <li>Send booking confirmations and updates</li>
              <li>Improve and personalize your experience</li>
              <li>Analyze usage patterns and platform performance</li>
              <li>Detect and prevent fraud or unauthorized activities</li>
              <li>Send promotional communications (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Information Sharing and Disclosure</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may share your information with:
            </p>
            
            <h3 className="text-lg font-semibold text-foreground mb-2 mt-4">Service Providers</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Third-party vendors who help us operate the platform (payment processors, hosting providers, analytics services).
            </p>

            <h3 className="text-lg font-semibold text-foreground mb-2">Turf Venues</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We share necessary booking information with turf owners to facilitate your reservation.
            </p>

            <h3 className="text-lg font-semibold text-foreground mb-2">Legal Requirements</h3>
            <p className="text-muted-foreground leading-relaxed">
              We may disclose information if required by law or to protect our rights, safety, or property.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Security</h2>
            <div className="glass-card rounded-xl p-6 border border-accent/20 mb-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Industry-Standard Encryption</h3>
                  <p className="text-muted-foreground">
                    We use SSL/TLS encryption and secure data storage practices to protect your information. Payment data is processed through PCI-compliant payment gateways.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              While we implement reasonable security measures, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security of your data.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Your Rights and Choices</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Access and update your personal information</li>
              <li>Delete your account and associated data</li>
              <li>Opt-out of marketing communications</li>
              <li>Disable cookies in your browser settings</li>
              <li>Request a copy of your data</li>
              <li>Object to certain data processing activities</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Cookies and Tracking</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use cookies and similar technologies to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Remember your preferences and settings</li>
              <li>Analyze platform usage and performance</li>
              <li>Deliver personalized content and advertisements</li>
              <li>Improve user experience</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              You can control cookies through your browser settings. Disabling cookies may limit some functionality.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our platform is not intended for children under 13 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page and updating the "Last Updated" date. Your continued use of the platform after changes indicates acceptance of the updated policy.
            </p>
          </div>

          {/* Section 9 */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="glass-card rounded-xl p-4 border border-primary/20">
              <p className="text-foreground mb-2">
                <span className="font-semibold">Email:</span> privacy@turfo.com
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
