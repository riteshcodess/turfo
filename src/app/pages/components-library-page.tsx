import { Calendar, Star, MapPin, Loader2 } from 'lucide-react';
import { useState } from 'react';

export function ComponentsLibraryPage() {
  const [buttonStates, setButtonStates] = useState({
    primary: 'default',
    secondary: 'default',
  });

  return (
    <div className="min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="py-12 border-b border-border">
          <h1 className="text-5xl font-black text-foreground mb-4">
            Components Library
          </h1>
          <p className="text-lg text-muted-foreground">
            Reusable UI components with all states and variants
          </p>
        </div>

        {/* Buttons */}
        <section className="py-12 border-b border-border">
          <h2 className="text-3xl font-bold text-foreground mb-8">Buttons</h2>
          
          {/* Primary Button */}
          <div className="glass-card border border-border rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-bold text-foreground mb-6">Primary Button</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div>
                <p className="text-sm text-muted-foreground mb-3">Default</p>
                <button className="w-full py-3 px-6 rounded-xl neon-button text-white font-semibold">
                  Book Now
                </button>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-3">Hover</p>
                <button className="w-full py-3 px-6 rounded-xl neon-button text-white font-semibold hover-scale">
                  Book Now
                </button>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-3">Active</p>
                <button className="w-full py-3 px-6 rounded-xl bg-primary/80 text-white font-semibold">
                  Book Now
                </button>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-3">Disabled</p>
                <button className="w-full py-3 px-6 rounded-xl glass-card border border-border/30 text-muted-foreground font-semibold cursor-not-allowed" disabled>
                  Book Now
                </button>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-3">Loading</p>
                <button className="w-full py-3 px-6 rounded-xl neon-button text-white font-semibold flex items-center justify-center gap-2">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Loading...
                </button>
              </div>
            </div>
            <div className="mt-6 p-4 bg-muted rounded-xl">
              <code className="text-sm text-foreground">
                {`<button className="neon-button">Book Now</button>`}
              </code>
            </div>
          </div>

          {/* Secondary Button */}
          <div className="glass-card border border-border rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-bold text-foreground mb-6">Secondary Button</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div>
                <p className="text-sm text-muted-foreground mb-3">Default</p>
                <button className="w-full py-3 px-6 rounded-xl glass-card border border-border text-foreground font-semibold">
                  View Details
                </button>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-3">Hover</p>
                <button className="w-full py-3 px-6 rounded-xl glass-card border border-primary text-primary font-semibold hover-neon">
                  View Details
                </button>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-3">Active</p>
                <button className="w-full py-3 px-6 rounded-xl glass-card border border-primary bg-primary/10 text-primary font-semibold">
                  View Details
                </button>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-3">Disabled</p>
                <button className="w-full py-3 px-6 rounded-xl glass-card border border-border/30 text-muted-foreground font-semibold cursor-not-allowed" disabled>
                  View Details
                </button>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-3">Loading</p>
                <button className="w-full py-3 px-6 rounded-xl glass-card border border-border text-foreground font-semibold flex items-center justify-center gap-2">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Loading...
                </button>
              </div>
            </div>
            <div className="mt-6 p-4 bg-muted rounded-xl">
              <code className="text-sm text-foreground">
                {`<button className="glass-card border border-border">View Details</button>`}
              </code>
            </div>
          </div>

          {/* Icon Button */}
          <div className="glass-card border border-border rounded-2xl p-8">
            <h3 className="text-xl font-bold text-foreground mb-6">Icon Button</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div>
                <p className="text-sm text-muted-foreground mb-3">Default</p>
                <button className="w-12 h-12 rounded-full glass-card border border-border flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-foreground" />
                </button>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-3">Hover</p>
                <button className="w-12 h-12 rounded-full glass-card border border-primary hover-neon flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary" />
                </button>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-3">Active</p>
                <button className="w-12 h-12 rounded-full bg-primary neon-glow flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </button>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-3">Disabled</p>
                <button className="w-12 h-12 rounded-full glass-card border border-border/30 flex items-center justify-center cursor-not-allowed" disabled>
                  <Calendar className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-3">Loading</p>
                <button className="w-12 h-12 rounded-full glass-card border border-border flex items-center justify-center">
                  <Loader2 className="w-5 h-5 text-foreground animate-spin" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Input Fields */}
        <section className="py-12 border-b border-border">
          <h2 className="text-3xl font-bold text-foreground mb-8">Input Fields</h2>
          
          <div className="glass-card border border-border rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-bold text-foreground mb-6">Text Input</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Default</label>
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="w-full bg-input-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Focused</label>
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="w-full bg-input-background border border-primary rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">With Icon</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Enter location"
                    className="w-full bg-input-background border border-border rounded-xl pl-10 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Disabled</label>
                <input
                  type="text"
                  placeholder="Disabled input"
                  className="w-full bg-muted/50 border border-border/30 rounded-xl px-4 py-3 text-muted-foreground placeholder:text-muted-foreground cursor-not-allowed"
                  disabled
                />
              </div>
            </div>
          </div>

          <div className="glass-card border border-border rounded-2xl p-8">
            <h3 className="text-xl font-bold text-foreground mb-6">Select Dropdown</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Default</label>
                <select className="w-full bg-input-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors">
                  <option>Select sport type</option>
                  <option>Football</option>
                  <option>Cricket</option>
                  <option>Badminton</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Disabled</label>
                <select className="w-full bg-muted/50 border border-border/30 rounded-xl px-4 py-3 text-muted-foreground cursor-not-allowed" disabled>
                  <option>Select sport type</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="py-12 border-b border-border">
          <h2 className="text-3xl font-bold text-foreground mb-8">Cards</h2>
          
          <div className="glass-card border border-border rounded-2xl p-8">
            <h3 className="text-xl font-bold text-foreground mb-6">Turf Card States</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Default Card */}
              <div className="glass-card rounded-2xl overflow-hidden border border-border">
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-muted-foreground">Image</span>
                  </div>
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full glass-card border border-accent/50">
                    <span className="text-xs font-semibold text-accent">Football</span>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-foreground mb-1">Elite Sports Arena</h4>
                  <p className="text-sm text-muted-foreground mb-3 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    Koramangala, Bangalore
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
                      <span className="text-sm font-semibold text-foreground">4.8</span>
                    </div>
                    <div>
                      <span className="text-lg font-bold text-primary">₹1,500</span>
                      <span className="text-xs text-muted-foreground">/hour</span>
                    </div>
                  </div>
                  <button className="mt-4 w-full py-2.5 rounded-xl neon-button text-white font-semibold text-sm">
                    Book Now
                  </button>
                </div>
              </div>

              {/* Hover Card */}
              <div className="glass-card rounded-2xl overflow-hidden border border-primary/30 hover-neon">
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-muted-foreground">Image</span>
                  </div>
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full glass-card border border-accent/50">
                    <span className="text-xs font-semibold text-accent">Football</span>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-foreground mb-1">Elite Sports Arena</h4>
                  <p className="text-sm text-muted-foreground mb-3 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    Koramangala, Bangalore
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
                      <span className="text-sm font-semibold text-foreground">4.8</span>
                    </div>
                    <div>
                      <span className="text-lg font-bold text-primary">₹1,500</span>
                      <span className="text-xs text-muted-foreground">/hour</span>
                    </div>
                  </div>
                  <button className="mt-4 w-full py-2.5 rounded-xl neon-button text-white font-semibold text-sm hover-scale">
                    Book Now
                  </button>
                </div>
              </div>

              {/* Loading Card */}
              <div className="glass-card rounded-2xl overflow-hidden border border-border animate-pulse">
                <div className="h-48 bg-muted" />
                <div className="p-4">
                  <div className="h-4 bg-muted rounded mb-2" />
                  <div className="h-3 bg-muted rounded w-2/3 mb-3" />
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-3 bg-muted rounded w-16" />
                    <div className="h-4 bg-muted rounded w-20" />
                  </div>
                  <div className="h-10 bg-muted rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Badges & Tags */}
        <section className="py-12 border-b border-border">
          <h2 className="text-3xl font-bold text-foreground mb-8">Badges & Tags</h2>
          
          <div className="glass-card border border-border rounded-2xl p-8">
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/30">
                Available
              </span>
              <span className="px-3 py-1 rounded-full bg-[#39ff14]/10 text-[#39ff14] text-sm font-semibold border border-[#39ff14]/30">
                Confirmed
              </span>
              <span className="px-3 py-1 rounded-full bg-[#FFD700]/10 text-[#FFD700] text-sm font-semibold border border-[#FFD700]/30">
                Pending
              </span>
              <span className="px-3 py-1 rounded-full bg-red-500/10 text-red-500 text-sm font-semibold border border-red-500/30">
                Cancelled
              </span>
              <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/30">
                Featured
              </span>
            </div>
          </div>
        </section>

        {/* Loading States */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-foreground mb-8">Loading States</h2>
          
          <div className="glass-card border border-border rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-bold text-foreground mb-6">Spinner</h3>
            <div className="flex items-center gap-8">
              <Loader2 className="w-8 h-8 text-primary animate-spin" />
              <Loader2 className="w-12 h-12 text-accent animate-spin" />
              <Loader2 className="w-16 h-16 text-[#39ff14] animate-spin" />
            </div>
          </div>

          <div className="glass-card border border-border rounded-2xl p-8">
            <h3 className="text-xl font-bold text-foreground mb-6">Skeleton Loader</h3>
            <div className="space-y-3">
              <div className="h-4 bg-muted rounded animate-pulse" />
              <div className="h-4 bg-muted rounded w-5/6 animate-pulse" />
              <div className="h-4 bg-muted rounded w-4/6 animate-pulse" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
