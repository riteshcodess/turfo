import { HelpCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQ[] = [
    {
      category: 'Booking',
      question: 'How do I book a turf?',
      answer: 'Booking a turf is simple! Browse available turfs, select your preferred date and time slot, and proceed to payment. You\'ll receive an instant confirmation once your booking is complete.',
    },
    {
      category: 'Booking',
      question: 'Can I cancel or reschedule my booking?',
      answer: 'Yes, you can cancel or reschedule your booking from your dashboard. Cancellations made 24 hours before the booking time are eligible for a full refund. Rescheduling is subject to availability.',
    },
    {
      category: 'Booking',
      question: 'What happens if it rains on my booking day?',
      answer: 'For covered turfs, bookings proceed as scheduled. For open turfs, you can reschedule or request a refund if weather conditions make play impossible. Contact support for assistance.',
    },
    {
      category: 'Booking',
      question: 'Can I book multiple time slots?',
      answer: 'Yes! You can select and book multiple consecutive time slots during the booking process. The total amount will be calculated automatically.',
    },
    {
      category: 'Payment',
      question: 'What payment methods are accepted?',
      answer: 'We accept all major credit/debit cards, UPI, net banking, and digital wallets. All payments are processed securely through our encrypted payment gateway.',
    },
    {
      category: 'Payment',
      question: 'Is my payment information secure?',
      answer: 'Absolutely! We use industry-standard encryption and don\'t store your card details. All transactions are processed through secure payment gateways.',
    },
    {
      category: 'Payment',
      question: 'When will I receive my refund?',
      answer: 'Refunds are processed within 5-7 business days and will be credited to your original payment method. You\'ll receive an email confirmation once the refund is initiated.',
    },
    {
      category: 'Account',
      question: 'How do I create an account?',
      answer: 'Click on the "Sign Up" button in the navigation bar. Fill in your details including name, email, and phone number, then verify your email address to activate your account.',
    },
    {
      category: 'Account',
      question: 'I forgot my password. What should I do?',
      answer: 'Click on "Forgot Password" on the login page. Enter your registered email address, and we\'ll send you a link to reset your password.',
    },
    {
      category: 'Account',
      question: 'Can I update my profile information?',
      answer: 'Yes, you can update your profile information anytime from the Profile Settings page in your dashboard.',
    },
    {
      category: 'Turfs',
      question: 'How are turfs verified?',
      answer: 'All turfs undergo a verification process where we inspect facilities, amenities, and safety standards. Only turfs meeting our quality criteria are listed on the platform.',
    },
    {
      category: 'Turfs',
      question: 'Can I see reviews before booking?',
      answer: 'Yes! Each turf page displays reviews and ratings from verified users who have booked and played there. This helps you make an informed decision.',
    },
    {
      category: 'Turfs',
      question: 'Do turfs provide equipment?',
      answer: 'Equipment availability varies by venue. Check the turf\'s amenities section on the details page. Some turfs offer equipment rental as an additional service.',
    },
    {
      category: 'Features',
      question: 'Can I find players for my game?',
      answer: 'Yes! Use our Matchmaking feature to connect with other players in your area. Create a match request or join existing ones.',
    },
    {
      category: 'Features',
      question: 'How do tournaments work?',
      answer: 'Browse tournaments in the Tournaments section, register for ones that interest you, and we\'ll handle the scheduling and updates. You\'ll receive notifications about matches.',
    },
    {
      category: 'Support',
      question: 'How can I contact customer support?',
      answer: 'You can reach our support team via email at support@turfo.com or call us at +91-1234567890. We\'re available 24/7 to help you.',
    },
  ];

  const categories = ['All', ...Array.from(new Set(faqs.map(faq => faq.category)))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredFAQs = activeCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  return (
    <div className="min-h-screen pb-16">
      {/* Header */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/10 via-[#b800ff]/10 to-[#00ff88]/10" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#00f0ff] to-[#b800ff] mb-6 neon-glow">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about Turfo
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-xl font-semibold text-sm transition-all ${
                activeCategory === category
                  ? 'neon-button text-white'
                  : 'glass-card border border-border text-muted-foreground hover:text-foreground hover-neon'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/20 transition-colors"
              >
                <div className="flex-1 pr-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="px-2 py-1 rounded-lg bg-primary/10 text-primary text-xs font-semibold">
                      {faq.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {faq.question}
                  </h3>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-primary transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-12 glass-card rounded-2xl p-8 border border-primary/30 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Still have questions?
          </h2>
          <p className="text-muted-foreground mb-6">
            Can't find the answer you're looking for? Our support team is here to help!
          </p>
          <button className="px-8 py-3 rounded-xl neon-button text-white font-semibold">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}
