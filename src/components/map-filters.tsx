import { Filter, SlidersHorizontal, Star } from 'lucide-react';

interface MapFiltersProps {
  selectedSport: string;
  setSelectedSport: (sport: string) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  distance: number;
  setDistance: (distance: number) => void;
  minRating: number;
  setMinRating: (rating: number) => void;
  onReset: () => void;
}

export function MapFilters({
  selectedSport,
  setSelectedSport,
  priceRange,
  setPriceRange,
  distance,
  setDistance,
  minRating,
  setMinRating,
  onReset
}: MapFiltersProps) {
  const sports = ['All', 'Football', 'Cricket', 'Badminton', 'Basketball', 'Tennis'];

  return (
    <div className="glass-card rounded-2xl p-6 border border-primary/30 h-full overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-bold text-foreground">Filters</h2>
        </div>
        <button
          onClick={onReset}
          className="text-xs text-muted-foreground hover:text-primary transition-colors"
        >
          Reset All
        </button>
      </div>

      {/* Sport Type Filter */}
      <div className="mb-6">
        <label className="text-sm font-semibold text-foreground mb-3 block flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-primary" />
          Sport Type
        </label>
        <div className="flex flex-wrap gap-2">
          {sports.map((sport) => (
            <button
              key={sport}
              onClick={() => setSelectedSport(sport)}
              className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
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

      {/* Price Range Filter */}
      <div className="mb-6">
        <label className="text-sm font-semibold text-foreground mb-3 block">
          Price Range
        </label>
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Min: ₹{priceRange[0]}</span>
            <span className="text-muted-foreground">Max: ₹{priceRange[1]}</span>
          </div>
          <div className="space-y-2">
            <input
              type="range"
              min="0"
              max="5000"
              step="100"
              value={priceRange[0]}
              onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #00f0ff 0%, #00f0ff ${(priceRange[0] / 5000) * 100}%, rgba(255,255,255,0.1) ${(priceRange[0] / 5000) * 100}%, rgba(255,255,255,0.1) 100%)`
              }}
            />
            <input
              type="range"
              min="0"
              max="5000"
              step="100"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.1) ${(priceRange[1] / 5000) * 100}%, #b800ff ${(priceRange[1] / 5000) * 100}%, #b800ff 100%)`
              }}
            />
          </div>
        </div>
      </div>

      {/* Distance Filter */}
      <div className="mb-6">
        <label className="text-sm font-semibold text-foreground mb-3 block">
          Distance (km)
        </label>
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Within {distance} km</span>
          </div>
          <input
            type="range"
            min="1"
            max="10"
            step="0.5"
            value={distance}
            onChange={(e) => setDistance(Number(e.target.value))}
            className="w-full h-2 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #00ff88 0%, #00ff88 ${(distance / 10) * 100}%, rgba(255,255,255,0.1) ${(distance / 10) * 100}%, rgba(255,255,255,0.1) 100%)`
            }}
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>1 km</span>
            <span>10 km</span>
          </div>
        </div>
      </div>

      {/* Rating Filter */}
      <div className="mb-6">
        <label className="text-sm font-semibold text-foreground mb-3 block">
          Minimum Rating
        </label>
        <div className="space-y-3">
          <div className="flex items-center justify-center gap-1 mb-2">
            {[1, 2, 3, 4, 5].map((rating) => (
              <button
                key={rating}
                onClick={() => setMinRating(rating)}
                className="transition-transform hover:scale-110"
              >
                <Star
                  className={`w-6 h-6 ${
                    rating <= minRating
                      ? 'fill-[#ffaa00] text-[#ffaa00]'
                      : 'text-muted-foreground'
                  }`}
                />
              </button>
            ))}
          </div>
          <div className="text-center">
            <span className="text-xs text-muted-foreground">
              {minRating === 0 ? 'Any rating' : `${minRating}+ stars`}
            </span>
          </div>
        </div>
      </div>

      {/* Availability Status Legend */}
      <div className="border-t border-border/50 pt-6">
        <label className="text-sm font-semibold text-foreground mb-3 block">
          Availability Legend
        </label>
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-[#00ff88] shadow-[0_0_10px_rgba(0,255,136,0.6)]" />
            <span className="text-xs text-muted-foreground">Available (6+ slots)</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-[#ffaa00] shadow-[0_0_10px_rgba(255,170,0,0.6)]" />
            <span className="text-xs text-muted-foreground">Limited (1-5 slots)</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-[#ff0055] shadow-[0_0_10px_rgba(255,0,85,0.6)]" />
            <span className="text-xs text-muted-foreground">Fully Booked</span>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="border-t border-border/50 pt-6 mt-6">
        <div className="grid grid-cols-2 gap-3">
          <div className="glass-card rounded-xl p-3 border border-accent/30">
            <div className="text-2xl font-black text-accent mb-1">8</div>
            <div className="text-xs text-muted-foreground">Available</div>
          </div>
          <div className="glass-card rounded-xl p-3 border border-primary/30">
            <div className="text-2xl font-black text-primary mb-1">10</div>
            <div className="text-xs text-muted-foreground">Total Turfs</div>
          </div>
        </div>
      </div>
    </div>
  );
}
