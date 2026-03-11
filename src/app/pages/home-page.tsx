import { MapPin, Calendar, Clock, Search, TrendingUp, Trophy, Zap, Users } from 'lucide-react';
import { TurfCard } from '../components/turf-card';
import { SportCard } from '../components/sport-card';
import { turfs } from '../data/turfs';
import { Link } from 'react-router';

export function HomePage() {
  const featuredTurfs = turfs.slice(0, 6);
  const nearbyTurfs = turfs.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1761941210086-d44de26a4efd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzcG9ydHMlMjBmaWVsZCUyMGFlcmlhbCUyMHZpZXd8ZW58MXx8fHwxNzcyOTY5NDkxfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Sports Turf"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00f0ff]/10 via-[#b800ff]/10 to-[#00ff88]/10" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/50 mb-6 animate-pulse-slow">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-accent">
              Instant Booking Available
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-foreground mb-6 leading-tight">
            Book Your <span className="text-primary">Turf</span>
            <br />
            Instantly
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Premium sports facilities at your fingertips. Find, book, and play in minutes.
          </p>

          {/* Search Booking Form */}
          <div className="max-w-4xl mx-auto glass-card rounded-3xl p-6 border border-primary/30 neon-border">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Location */}
              <div className="relative">
                <label className="text-xs text-muted-foreground mb-2 block">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                  <select className="w-full bg-input-background border border-border rounded-xl pl-10 pr-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors appearance-none">
                    <option>Downtown</option>
                    <option>West End</option>
                    <option>North Plaza</option>
                    <option>East Side</option>
                    <option>South Bay</option>
                  </select>
                </div>
              </div>

              {/* Sport Type */}
              <div className="relative">
                <label className="text-xs text-muted-foreground mb-2 block">Sport Type</label>
                <div className="relative">
                  <Trophy className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                  <select className="w-full bg-input-background border border-border rounded-xl pl-10 pr-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors appearance-none">
                    <option>Football</option>
                    <option>Cricket</option>
                    <option>Badminton</option>
                    <option>Basketball</option>
                    <option>Tennis</option>
                  </select>
                </div>
              </div>

              {/* Date */}
              <div className="relative">
                <label className="text-xs text-muted-foreground mb-2 block">Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                  <input
                    type="date"
                    defaultValue="2026-03-08"
                    className="w-full bg-input-background border border-border rounded-xl pl-10 pr-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              {/* Time Slot */}
              <div className="relative">
                <label className="text-xs text-muted-foreground mb-2 block">Time Slot</label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                  <select className="w-full bg-input-background border border-border rounded-xl pl-10 pr-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors appearance-none">
                    <option>Morning</option>
                    <option>Afternoon</option>
                    <option>Evening</option>
                    <option>Night</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Search Button */}
            <button className="mt-6 w-full md:w-auto px-12 py-4 rounded-xl neon-button text-white font-semibold flex items-center justify-center gap-2 mx-auto">
              <Search className="w-5 h-5" />
              Find Turf
            </button>
          </div>
        </div>
      </section>

      {/* Featured Turfs Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-2">
              Featured <span className="text-secondary">Turfs</span>
            </h2>
            <p className="text-muted-foreground">Top-rated venues in your area</p>
          </div>
          <button className="px-6 py-2 rounded-xl glass-card border border-primary/30 text-primary font-semibold hover-neon text-sm">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTurfs.map((turf) => (
            <TurfCard key={turf.id} turf={turf} />
          ))}
        </div>
      </section>

      {/* Sports Categories Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-2">
            Browse by <span className="text-accent">Sport</span>
          </h2>
          <p className="text-muted-foreground">Find the perfect venue for your favorite sport</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <SportCard
            icon={Trophy}
            name="Football"
            gradient="gradient-bg-blue"
          />
          <SportCard
            icon={TrendingUp}
            name="Cricket"
            gradient="gradient-bg-purple"
          />
          <SportCard
            icon={Zap}
            name="Badminton"
            gradient="gradient-bg-green"
          />
          <SportCard
            icon={Trophy}
            name="Basketball"
            gradient="gradient-bg-blue"
          />
          <SportCard
            icon={TrendingUp}
            name="Tennis"
            gradient="gradient-bg-purple"
          />
        </div>
      </section>

      {/* Nearby Turfs Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-2">
            Nearby <span className="text-primary">Turfs</span>
          </h2>
          <p className="text-muted-foreground">Closest venues to your location</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {nearbyTurfs.map((turf) => (
            <div key={turf.id} className="glass-card rounded-2xl overflow-hidden hover-neon">
              <div className="relative h-40">
                <img
                  src={turf.image}
                  alt={turf.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-1">{turf.name}</h3>
                <p className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {turf.distance}
                </p>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-muted-foreground">Available slots:</span>
                  <span className="text-xs font-semibold text-accent">6 slots today</span>
                </div>
                <button className="w-full py-2 rounded-lg neon-button-green text-white font-semibold text-xs">
                  Quick Book
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Map View CTA */}
        <div className="mt-12 glass-card rounded-2xl p-8 border border-primary/30 bg-gradient-to-br from-[#00f0ff]/10 via-[#b800ff]/10 to-[#00ff88]/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-black text-foreground mb-2">
                Explore Turfs on <span className="text-primary">Live Map</span>
              </h3>
              <p className="text-muted-foreground">
                View real-time availability, filter by location, and find the perfect turf near you with our interactive map
              </p>
            </div>
            <Link to="/map">
              <button className="px-8 py-4 rounded-xl neon-button-purple text-white font-semibold flex items-center gap-2 hover-scale">
                <MapPin className="w-5 h-5" />
                Open Map View
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Turfo Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            Why Choose <span className="text-primary">Turfo?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the future of sports booking with cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card rounded-2xl p-8 border border-primary/30 hover-neon">
            <div className="w-16 h-16 rounded-2xl gradient-bg-blue border border-primary/50 flex items-center justify-center mb-6">
              <Calendar className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Instant Booking</h3>
            <p className="text-muted-foreground">
              Book your favorite turf in seconds with real-time availability updates and instant confirmation
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 border border-accent/30 hover-neon">
            <div className="w-16 h-16 rounded-2xl gradient-bg-green border border-accent/50 flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Location Based</h3>
            <p className="text-muted-foreground">
              Find the best turfs near you with our advanced map view and location-based search features
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 border border-secondary/30 hover-neon">
            <div className="w-16 h-16 rounded-2xl gradient-bg-purple border border-secondary/50 flex items-center justify-center mb-6">
              <Trophy className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Premium Quality</h3>
            <p className="text-muted-foreground">
              Access only verified, high-quality sports facilities with professional maintenance and amenities
            </p>
          </div>
        </div>
      </section>

      {/* Find Players CTA Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="glass-card rounded-3xl overflow-hidden border border-primary/30">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Side - Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-[#00f0ff]/10 via-[#b800ff]/10 to-[#00ff88]/10">
              <div className="inline-block px-3 py-1 rounded-full glass-card border border-accent/30 text-xs font-bold text-accent uppercase tracking-wide mb-4 w-fit">
                New Feature
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-foreground mb-4">
                Find Your Perfect <span className="text-primary">Match</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Connect with players at your skill level, join exciting matches, or create your own game. Build your sports community and never play alone again.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg gradient-bg-blue border border-primary/50 flex items-center justify-center">
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm text-foreground">500+ Active Players</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg gradient-bg-green border border-accent/50 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-sm text-foreground">Live Matchmaking</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg gradient-bg-purple border border-secondary/50 flex items-center justify-center">
                    <Trophy className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="text-sm text-foreground">All Skill Levels</span>
                </div>
              </div>
              <Link to="/matchmaking">
                <button className="px-8 py-4 rounded-xl neon-button-purple text-white font-semibold flex items-center gap-2 hover-scale w-fit">
                  <Users className="w-5 h-5" />
                  Find Players Now
                </button>
              </Link>
            </div>

            {/* Right Side - Visual */}
            <div className="relative h-64 lg:h-auto bg-gradient-to-br from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 p-8">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="glass-card rounded-xl p-4 border border-primary/30 hover-neon"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00f0ff] to-[#b800ff] mb-2" />
                      <div className="h-2 bg-primary/30 rounded mb-1" />
                      <div className="h-2 bg-primary/20 rounded w-2/3" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tournaments CTA Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1676746424139-77f8bd8922a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBmaWVsZCUyMG5pZ2h0JTIwc3RhZGl1bXxlbnwxfHx8fDE3NzI5Njk0OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Tournament"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 p-8 lg:p-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/50 mb-6">
                <Trophy className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-sm font-semibold text-primary">
                  Epic Competitions
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-4">
                Join <span className="text-secondary">Tournaments</span> &<br />
                Win Big Prizes
              </h2>

              <p className="text-lg text-muted-foreground mb-8">
                Compete in professional tournaments, showcase your skills, and win massive prize pools. Championship glory awaits!
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="glass-card rounded-xl p-4 border border-primary/30">
                  <div className="text-3xl font-black text-primary mb-1">15+</div>
                  <div className="text-xs text-muted-foreground">Active Tournaments</div>
                </div>
                <div className="glass-card rounded-xl p-4 border border-accent/30">
                  <div className="text-3xl font-black text-accent mb-1">₹5L+</div>
                  <div className="text-xs text-muted-foreground">Prize Pool</div>
                </div>
                <div className="glass-card rounded-xl p-4 border border-secondary/30">
                  <div className="text-3xl font-black text-secondary mb-1">200+</div>
                  <div className="text-xs text-muted-foreground">Teams Competing</div>
                </div>
              </div>

              <Link to="/tournaments">
                <button className="px-8 py-4 rounded-xl neon-button text-white font-semibold flex items-center gap-2 hover-scale">
                  <Trophy className="w-5 h-5" />
                  View Tournaments
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}