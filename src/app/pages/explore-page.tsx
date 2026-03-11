import { useState } from 'react';
import { Filter, SlidersHorizontal } from 'lucide-react';
import { TurfCard } from '../components/turf-card';
import { turfs } from '../data/turfs';

export function ExplorePage() {
  const [selectedSport, setSelectedSport] = useState<string>('All');
  const [priceRange, setPriceRange] = useState<string>('All');

  const sports = ['All', 'Football', 'Cricket', 'Badminton', 'Basketball', 'Tennis'];

  const filteredTurfs = turfs.filter((turf) => {
    if (selectedSport === 'All') return true;
    return turf.sport.includes(selectedSport);
  });

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/10 via-[#b800ff]/10 to-[#00ff88]/10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            Explore All <span className="text-primary">Turfs</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Discover the best sports venues in your city
          </p>
        </div>
      </section>

      {/* Filters and Content */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        {/* Filter Bar */}
        <div className="glass-card rounded-2xl p-6 mb-8 border border-primary/30">
          <div className="flex items-center gap-4 mb-6">
            <Filter className="w-5 h-5 text-primary" />
            <h2 className="font-semibold text-foreground">Filters</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Sport Filter */}
            <div>
              <label className="text-sm text-muted-foreground mb-3 block">Sport Type</label>
              <div className="flex flex-wrap gap-2">
                {sports.map((sport) => (
                  <button
                    key={sport}
                    onClick={() => setSelectedSport(sport)}
                    className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                      selectedSport === sport
                        ? 'neon-button text-white'
                        : 'glass-card border border-border text-foreground hover-neon'
                    }`}
                  >
                    {sport}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <label className="text-sm text-muted-foreground mb-3 block">Price Range</label>
              <div className="flex flex-wrap gap-2">
                {['All', 'Under ₹1000', '₹1000-₹2000', 'Above ₹2000'].map((range) => (
                  <button
                    key={range}
                    onClick={() => setPriceRange(range)}
                    className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                      priceRange === range
                        ? 'neon-button-purple text-white'
                        : 'glass-card border border-border text-foreground hover-neon'
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div>
              <label className="text-sm text-muted-foreground mb-3 block">Sort By</label>
              <div className="relative">
                <SlidersHorizontal className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                <select className="w-full bg-input-background border border-border rounded-xl pl-10 pr-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary transition-colors appearance-none">
                  <option>Most Popular</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Rating</option>
                  <option>Distance</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing <span className="text-primary font-semibold">{filteredTurfs.length}</span> turfs
          </p>
        </div>

        {/* Turfs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTurfs.map((turf) => (
            <TurfCard key={turf.id} turf={turf} />
          ))}
        </div>
      </section>
    </div>
  );
}