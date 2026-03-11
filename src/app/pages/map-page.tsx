import { useState } from 'react';
import { Search, MapIcon, Navigation, Maximize2 } from 'lucide-react';
import { MapPin } from '../components/map-pin';
import { MapFilters } from '../components/map-filters';
import { mapTurfs } from '../data/map-data';

export function MapPage() {
  const [selectedSport, setSelectedSport] = useState('All');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [distance, setDistance] = useState(10);
  const [minRating, setMinRating] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTurfs = mapTurfs.filter((turf) => {
    // Sport filter
    if (selectedSport !== 'All' && !turf.sport.includes(selectedSport)) {
      return false;
    }

    // Price filter
    if (turf.price < priceRange[0] || turf.price > priceRange[1]) {
      return false;
    }

    // Distance filter (simplified - in real app would use actual distance calculation)
    const turfDistance = parseFloat(turf.distance);
    if (turfDistance > distance) {
      return false;
    }

    // Rating filter
    if (turf.rating < minRating) {
      return false;
    }

    // Search filter
    if (searchQuery && !turf.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !turf.location.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }

    return true;
  });

  const handleResetFilters = () => {
    setSelectedSport('All');
    setPriceRange([0, 5000]);
    setDistance(10);
    setMinRating(0);
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen pb-16">
      {/* Header with Search */}
      <section className="relative py-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/10 via-[#b800ff]/10 to-[#00ff88]/10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <MapIcon className="w-8 h-8 text-primary" />
            <h1 className="text-3xl md:text-4xl font-black text-foreground">
              Live Turf <span className="text-primary">Availability Map</span>
            </h1>
          </div>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
            <input
              type="text"
              placeholder="Search turfs by location or name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-input-background border border-primary/30 rounded-2xl pl-12 pr-4 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors neon-border"
            />
          </div>

          {/* Quick Info */}
          <div className="mt-4 flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Navigation className="w-4 h-4 text-accent" />
              <span>Showing {filteredTurfs.length} nearby turfs</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>Live updates</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Map Section */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar - Filters */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="sticky top-28">
              <MapFilters
                selectedSport={selectedSport}
                setSelectedSport={setSelectedSport}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                distance={distance}
                setDistance={setDistance}
                minRating={minRating}
                setMinRating={setMinRating}
                onReset={handleResetFilters}
              />
            </div>
          </div>

          {/* Map Area */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <div className="glass-card rounded-2xl border border-primary/30 overflow-hidden">
              {/* Map Controls */}
              <div className="p-4 border-b border-border/50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-sm font-semibold text-foreground">
                    Real-time Availability
                  </span>
                </div>
                <button className="p-2 rounded-lg glass-card border border-primary/30 hover-neon">
                  <Maximize2 className="w-4 h-4 text-primary" />
                </button>
              </div>

              {/* Map Canvas */}
              <div className="relative w-full h-[600px] bg-gradient-to-br from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f] overflow-hidden">
                {/* Futuristic Grid Background */}
                <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path
                        d="M 40 0 L 0 0 0 40"
                        fill="none"
                        stroke="rgba(0, 240, 255, 0.3)"
                        strokeWidth="0.5"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>

                {/* Glowing Roads/Pathways */}
                <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="roadGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#00f0ff', stopOpacity: 0.3 }} />
                      <stop offset="50%" style={{ stopColor: '#b800ff', stopOpacity: 0.5 }} />
                      <stop offset="100%" style={{ stopColor: '#00ff88', stopOpacity: 0.3 }} />
                    </linearGradient>
                  </defs>
                  {/* Main roads */}
                  <path
                    d="M 0 200 Q 300 150, 600 200 T 1200 200"
                    fill="none"
                    stroke="url(#roadGradient)"
                    strokeWidth="2"
                  />
                  <path
                    d="M 0 400 Q 400 380, 800 400"
                    fill="none"
                    stroke="url(#roadGradient)"
                    strokeWidth="2"
                  />
                  <path
                    d="M 400 0 L 400 600"
                    fill="none"
                    stroke="url(#roadGradient)"
                    strokeWidth="2"
                  />
                  <path
                    d="M 700 0 L 700 600"
                    fill="none"
                    stroke="url(#roadGradient)"
                    strokeWidth="2"
                  />
                </svg>

                {/* City Blocks / Areas */}
                <div className="absolute top-[15%] left-[20%] w-32 h-32 glass-card rounded-lg border border-primary/20 opacity-30" />
                <div className="absolute top-[40%] left-[60%] w-40 h-40 glass-card rounded-lg border border-secondary/20 opacity-30" />
                <div className="absolute bottom-[20%] left-[30%] w-36 h-36 glass-card rounded-lg border border-accent/20 opacity-30" />
                
                {/* Glowing Area Labels */}
                <div className="absolute top-[10%] left-[5%] glass-card rounded-lg px-3 py-1.5 border border-primary/30">
                  <span className="text-xs font-semibold text-primary">Downtown</span>
                </div>
                <div className="absolute top-[10%] right-[5%] glass-card rounded-lg px-3 py-1.5 border border-secondary/30">
                  <span className="text-xs font-semibold text-secondary">North Plaza</span>
                </div>
                <div className="absolute bottom-[10%] left-[5%] glass-card rounded-lg px-3 py-1.5 border border-accent/30">
                  <span className="text-xs font-semibold text-accent">South Bay</span>
                </div>
                <div className="absolute bottom-[10%] right-[5%] glass-card rounded-lg px-3 py-1.5 border border-primary/30">
                  <span className="text-xs font-semibold text-primary">East Side</span>
                </div>

                {/* Center marker for user location */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="w-6 h-6 rounded-full bg-[#00f0ff] shadow-[0_0_20px_rgba(0,240,255,0.8)] border-2 border-white animate-pulse-slow">
                      <div className="absolute inset-0 rounded-full bg-white/50" />
                    </div>
                    <div className="absolute top-0 left-0 w-6 h-6 rounded-full bg-[#00f0ff] opacity-30 animate-ping" />
                  </div>
                  <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap glass-card rounded-lg px-2 py-1 border border-primary/30">
                    <span className="text-xs font-semibold text-primary">You</span>
                  </div>
                </div>

                {/* Turf Pins */}
                {filteredTurfs.map((turf) => (
                  <MapPin key={turf.id} turf={turf} />
                ))}

                {/* No Results Message */}
                {filteredTurfs.length === 0 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center glass-card rounded-2xl p-8 border border-primary/30 max-w-md">
                      <div className="w-16 h-16 rounded-full gradient-bg-blue border border-primary/50 flex items-center justify-center mx-auto mb-4">
                        <Search className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">No turfs found</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Try adjusting your filters or search in a different area
                      </p>
                      <button
                        onClick={handleResetFilters}
                        className="px-6 py-2 rounded-xl neon-button text-white font-semibold text-sm"
                      >
                        Reset Filters
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Map Footer Stats */}
              <div className="p-4 border-t border-border/50">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-black text-accent mb-1">
                      {filteredTurfs.filter(t => t.availabilityStatus === 'available').length}
                    </div>
                    <div className="text-xs text-muted-foreground">Available Now</div>
                  </div>
                  <div className="text-center border-x border-border/50">
                    <div className="text-2xl font-black text-[#ffaa00] mb-1" style={{ textShadow: '0 0 10px rgba(255, 170, 0, 0.8)' }}>
                      {filteredTurfs.filter(t => t.availabilityStatus === 'limited').length}
                    </div>
                    <div className="text-xs text-muted-foreground">Limited Slots</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-black text-destructive mb-1" style={{ textShadow: '0 0 10px rgba(255, 0, 85, 0.8)' }}>
                      {filteredTurfs.filter(t => t.availabilityStatus === 'booked').length}
                    </div>
                    <div className="text-xs text-muted-foreground">Fully Booked</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}