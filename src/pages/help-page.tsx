import { Headphones, Mail, Phone, MessageSquare, Book, FileQuestion, Users, Search } from 'lucide-react';
import { Link } from 'react-router';

export function HelpPage() {
  return (
    <div className="min-h-screen pb-16">
      {/* Header */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/10 via-[#b800ff]/10 to-[#00ff88]/10" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#00f0ff] to-[#b800ff] mb-6 neon-glow">
            <Headphones className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            How Can We <span className="text-primary">Help?</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Get support from our team or find answers in our help resources
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for help articles..."
                className="w-full bg-input-background border border-border rounded-xl pl-12 pr-4 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold text-foreground text-center mb-8">Contact Support</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Email Support */}
          <div className="glass-card rounded-2xl p-6 border border-primary/20 hover-neon text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00f0ff] to-[#0080ff] flex items-center justify-center neon-glow mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Email Support</h3>
            <p className="text-muted-foreground mb-4">
              Get help via email. We typically respond within 24 hours.
            </p>
            <a href="mailto:support@turfo.com" className="text-primary font-semibold hover:text-accent transition-colors">
              support@turfo.com
            </a>
          </div>

          {/* Phone Support */}
          <div className="glass-card rounded-2xl p-6 border border-accent/20 hover-neon text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#39ff14] to-[#00ff88] flex items-center justify-center neon-glow mx-auto mb-4">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Phone Support</h3>
            <p className="text-muted-foreground mb-4">
              Call us for immediate assistance. Available 24/7.
            </p>
            <a href="tel:+911234567890" className="text-accent font-semibold hover:text-primary transition-colors">
              +91-1234567890
            </a>
          </div>

          {/* Live Chat */}
          <div className="glass-card rounded-2xl p-6 border border-[#b800ff]/20 hover-neon text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#b800ff] to-[#9d4edd] flex items-center justify-center neon-glow mx-auto mb-4">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Live Chat</h3>
            <p className="text-muted-foreground mb-4">
              Chat with our support team in real-time.
            </p>
            <button className="px-6 py-2 rounded-xl neon-button text-white font-semibold">
              Start Chat
            </button>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold text-foreground text-center mb-8">Quick Help Links</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Getting Started */}
          <Link to="/faq" className="glass-card rounded-2xl p-6 border border-border hover-neon block">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Book className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">Getting Started</h3>
                <p className="text-sm text-muted-foreground">
                  Learn how to create an account and make your first booking
                </p>
              </div>
            </div>
          </Link>

          {/* FAQ */}
          <Link to="/faq" className="glass-card rounded-2xl p-6 border border-border hover-neon block">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <FileQuestion className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">FAQ</h3>
                <p className="text-sm text-muted-foreground">
                  Find answers to frequently asked questions
                </p>
              </div>
            </div>
          </Link>

          {/* Booking Help */}
          <div className="glass-card rounded-2xl p-6 border border-border hover-neon">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#39ff14]/10 flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-[#39ff14]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">Booking Help</h3>
                <p className="text-sm text-muted-foreground">
                  Learn about making, modifying, and canceling bookings
                </p>
              </div>
            </div>
          </div>

          {/* Payment Issues */}
          <div className="glass-card rounded-2xl p-6 border border-border hover-neon">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#FFD700]/10 flex items-center justify-center flex-shrink-0">
                <FileQuestion className="w-6 h-6 text-[#FFD700]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">Payment Issues</h3>
                <p className="text-sm text-muted-foreground">
                  Resolve payment and refund related queries
                </p>
              </div>
            </div>
          </div>

          {/* Account Settings */}
          <div className="glass-card rounded-2xl p-6 border border-border hover-neon">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#b800ff]/10 flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-[#b800ff]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">Account Settings</h3>
                <p className="text-sm text-muted-foreground">
                  Manage your profile and account preferences
                </p>
              </div>
            </div>
          </div>

          {/* Turf Owners */}
          <div className="glass-card rounded-2xl p-6 border border-border hover-neon">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Book className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">For Turf Owners</h3>
                <p className="text-sm text-muted-foreground">
                  Information for venue owners and partners
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold text-foreground text-center mb-8">Popular Help Articles</h2>
        <div className="glass-card rounded-2xl border border-border p-6">
          <div className="space-y-4">
            {[
              'How do I book a turf?',
              'What is the cancellation policy?',
              'How do I get a refund?',
              'Can I reschedule my booking?',
              'What payment methods are accepted?',
              'How do I reset my password?',
              'How do I update my profile information?',
              'What if it rains on my booking day?',
            ].map((article, index) => (
              <Link
                key={index}
                to="/faq"
                className="block p-4 rounded-xl glass-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-foreground">{article}</span>
                  <span className="text-primary">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Still Need Help */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="glass-card rounded-2xl p-8 md:p-12 border border-primary/30 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Still Need Help?
          </h2>
          <p className="text-muted-foreground mb-6">
            Our support team is available 24/7 to assist you with any questions or issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 rounded-xl neon-button text-white font-semibold">
              Contact Support
            </button>
            <Link to="/faq" className="px-8 py-3 rounded-xl glass-card border border-border text-foreground font-semibold hover-neon">
              View All FAQs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
