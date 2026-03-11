import { X, SlidersHorizontal, MapPin, DollarSign, Star, Calendar } from 'lucide-react';
import { useState } from 'react';

interface FiltersModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: FilterValues) => void;
}

export interface FilterValues {
  sport: string;
  priceRange: string;
  rating: number;
  distance: number;
  amenities: string[];
  availability: string;
}

export function FiltersModal({ isOpen, onClose, onApply }: FiltersModalProps) {
  const [filters, setFilters] = useState<FilterValues>({
    sport: 'All',
    priceRange: 'All',
    rating: 0,
    distance: 10,
    amenities: [],
    availability: 'All',
  });

  if (!isOpen) return null;

  const sports = ['All', 'Football', 'Cricket', 'Badminton', 'Basketball', 'Tennis', 'Multi-Sport'];
  const priceRanges = ['All', 'Under ₹1000', '₹1000-₹2000', 'Above ₹2000'];
  const amenitiesList = ['Parking', 'Changing Room', 'Cafeteria', 'Floodlights', 'CCTV', 'First Aid'];
  const availabilityOptions = ['All', 'Morning (6AM-12PM)', 'Afternoon (12PM-6PM)', 'Evening (6PM-12AM)'];

  const handleReset = () => {
    setFilters({
      sport: 'All',
      priceRange: 'All',
      rating: 0,
      distance: 10,
      amenities: [],
      availability: 'All',
    });
  };

  const handleApply = () => {
    onApply(filters);
    onClose();
  };

  const toggleAmenity = (amenity: string) => {
    setFilters({
      ...filters,
      amenities: filters.amenities.includes(amenity)
        ? filters.amenities.filter(a => a !== amenity)
        : [...filters.amenities, amenity],
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl glass-card border border-primary/30 rounded-2xl p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full glass-card border border-border hover-neon flex items-center justify-center group"
        >
          <X className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00f0ff] to-[#b800ff] flex items-center justify-center neon-glow">
              <SlidersHorizontal className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">Filters</h2>
              <p className="text-sm text-muted-foreground">Refine your search results</p>
            </div>
          </div>
        </div>

        {/* Filter Sections */}
        <div className="space-y-6">
          {/* Sport Type */}
          <div>
            <label className="text-sm font-semibold text-foreground mb-3 block flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              Sport Type
            </label>
            <div className="flex flex-wrap gap-2">
              {sports.map((sport) => (
                <button
                  key={sport}
                  onClick={() => setFilters({ ...filters, sport })}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    filters.sport === sport
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
            <label className="text-sm font-semibold text-foreground mb-3 block flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-primary" />
              Price Range
            </label>
            <div className="flex flex-wrap gap-2">
              {priceRanges.map((range) => (
                <button
                  key={range}
                  onClick={() => setFilters({ ...filters, priceRange: range })}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    filters.priceRange === range
                      ? 'neon-button-purple text-white'
                      : 'glass-card border border-border text-foreground hover-neon'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>

          {/* Rating */}
          <div>
            <label className="text-sm font-semibold text-foreground mb-3 block flex items-center gap-2">
              <Star className="w-4 h-4 text-primary" />
              Minimum Rating
            </label>
            <div className="flex gap-2">
              {[0, 3, 4, 4.5].map((rating) => (
                <button
                  key={rating}
                  onClick={() => setFilters({ ...filters, rating })}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    filters.rating === rating
                      ? 'neon-button text-white'
                      : 'glass-card border border-border text-foreground hover-neon'
                  }`}
                >
                  {rating === 0 ? 'All' : `${rating}+ ⭐`}
                </button>
              ))}
            </div>
          </div>

          {/* Distance */}
          <div>
            <label className="text-sm font-semibold text-foreground mb-3 block flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              Distance (within {filters.distance} km)
            </label>
            <div className="glass-card border border-border rounded-xl p-4">
              <input
                type="range"
                min="1"
                max="50"
                value={filters.distance}
                onChange={(e) => setFilters({ ...filters, distance: parseInt(e.target.value) })}
                className="w-full accent-primary"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>1 km</span>
                <span>50 km</span>
              </div>
            </div>
          </div>

          {/* Amenities */}
          <div>
            <label className="text-sm font-semibold text-foreground mb-3 block">
              Amenities
            </label>
            <div className="grid grid-cols-2 gap-2">
              {amenitiesList.map((amenity) => (
                <button
                  key={amenity}
                  onClick={() => toggleAmenity(amenity)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    filters.amenities.includes(amenity)
                      ? 'neon-button text-white'
                      : 'glass-card border border-border text-foreground hover-neon'
                  }`}
                >
                  {amenity}
                </button>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div>
            <label className="text-sm font-semibold text-foreground mb-3 block">
              Preferred Timing
            </label>
            <div className="flex flex-wrap gap-2">
              {availabilityOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => setFilters({ ...filters, availability: option })}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    filters.availability === option
                      ? 'neon-button-purple text-white'
                      : 'glass-card border border-border text-foreground hover-neon'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-8 pt-6 border-t border-border">
          <button
            onClick={handleReset}
            className="flex-1 py-3 rounded-xl glass-card border border-border text-foreground font-semibold hover-neon"
          >
            Reset All
          </button>
          <button
            onClick={handleApply}
            className="flex-1 py-3 rounded-xl neon-button text-white font-semibold"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
}
