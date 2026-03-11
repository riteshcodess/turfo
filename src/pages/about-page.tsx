import { Target, Users, Trophy, Zap, Heart, Shield } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen pb-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/10 via-[#b800ff]/10 to-[#00ff88]/10" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-black text-foreground mb-6">
            About <span className="text-primary">Turfo</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Revolutionizing sports turf bookings with cutting-edge technology and seamless user experience
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="glass-card rounded-2xl p-8 md:p-12 border border-primary/30">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00f0ff] to-[#b800ff] flex items-center justify-center neon-glow">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At Turfo, we're on a mission to make premium sports facilities accessible to everyone. We believe that finding and booking the perfect turf for your game should be as easy as a few taps on your phone. Our platform connects sports enthusiasts with top-quality venues, making it simple to organize games, discover new locations, and build a thriving sports community.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Value 1 */}
          <div className="glass-card rounded-2xl p-6 border border-border hover-neon">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#39ff14] to-[#00ff88] flex items-center justify-center neon-glow mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Community First</h3>
            <p className="text-muted-foreground">
              We build connections between players, venues, and communities to create unforgettable sporting experiences.
            </p>
          </div>

          {/* Value 2 */}
          <div className="glass-card rounded-2xl p-6 border border-border hover-neon">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00f0ff] to-[#0080ff] flex items-center justify-center neon-glow mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Innovation</h3>
            <p className="text-muted-foreground">
              We leverage the latest technology to provide seamless bookings, real-time availability, and instant confirmations.
            </p>
          </div>

          {/* Value 3 */}
          <div className="glass-card rounded-2xl p-6 border border-border hover-neon">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#b800ff] to-[#9d4edd] flex items-center justify-center neon-glow mb-4">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Excellence</h3>
            <p className="text-muted-foreground">
              We partner only with premium turfs that meet our high standards for quality, safety, and facilities.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="glass-card rounded-2xl p-8 md:p-12 border border-primary/30">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Turfo by the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-black text-primary mb-2">250+</div>
              <div className="text-sm text-muted-foreground">Active Turfs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-accent mb-2">50K+</div>
              <div className="text-sm text-muted-foreground">Happy Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-[#39ff14] mb-2">100K+</div>
              <div className="text-sm text-muted-foreground">Bookings Made</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-[#FFD700] mb-2">25+</div>
              <div className="text-sm text-muted-foreground">Cities Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12">Why Choose Turfo?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card rounded-2xl p-6 border border-border">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">Instant Booking</h3>
                <p className="text-muted-foreground">Book your preferred turf in seconds with real-time availability and instant confirmation.</p>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-border">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">Secure Payments</h3>
                <p className="text-muted-foreground">Safe and encrypted payment processing with multiple payment options for your convenience.</p>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-border">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#39ff14]/10 flex items-center justify-center flex-shrink-0">
                <Heart className="w-5 h-5 text-[#39ff14]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">Verified Venues</h3>
                <p className="text-muted-foreground">All turfs are verified and inspected to ensure quality, safety, and excellent facilities.</p>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-border">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#FFD700]/10 flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-[#FFD700]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">Community Features</h3>
                <p className="text-muted-foreground">Find players, join tournaments, and be part of a vibrant sports community.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="glass-card rounded-2xl p-8 md:p-12 border border-primary/30 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Play?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of sports enthusiasts who trust Turfo for their game bookings
          </p>
          <button className="px-8 py-3 rounded-xl neon-button text-white font-semibold">
            Start Booking Now
          </button>
        </div>
      </section>
    </div>
  );
}
