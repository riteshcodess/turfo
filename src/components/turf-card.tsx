import { Link } from 'react-router';
import { Star, MapPin, Heart } from 'lucide-react';
import { Turf } from '../utils/mockData/turfs';
import { useState } from 'react';

interface TurfCardProps {
  turf: Turf;
}

export function TurfCard({ turf }: TurfCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    console.log('Toggled favorite for:', turf.name);
  };

  return (
    <div className="glass-card rounded-2xl overflow-hidden hover-neon group cursor-pointer">
      {/* Image */}
      <Link to={`/turf/${turf.id}`}>
        <div className="relative h-48 overflow-hidden">
          <img
            src={turf.image}
            alt={turf.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          
          {/* Favorite Button */}
          <button
            onClick={toggleFavorite}
            className="absolute top-3 left-3 w-10 h-10 rounded-full glass-card border border-border hover-neon flex items-center justify-center z-10 transition-all"
          >
            <Heart
              className={`w-5 h-5 transition-all ${
                isFavorite
                  ? 'fill-red-500 text-red-500'
                  : 'text-foreground'
              }`}
            />
          </button>

          <div className="absolute top-3 right-3 px-3 py-1 rounded-full glass-card border border-accent/50">
            <span className="text-xs font-semibold text-accent">
              {turf.sport.join(', ')}
            </span>
          </div>
          {turf.distance && (
            <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full glass-card border border-primary/50">
              <span className="text-xs font-semibold text-primary flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {turf.distance}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-semibold text-lg text-foreground mb-1">{turf.name}</h3>
          <p className="text-sm text-muted-foreground mb-3 flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {turf.location}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-[#ffaa00] text-[#ffaa00]" />
              <span className="text-sm font-semibold text-foreground">{turf.rating}</span>
              <span className="text-xs text-muted-foreground">(250+)</span>
            </div>
            <div>
              <span className="text-lg font-bold text-primary">₹{turf.price}</span>
              <span className="text-xs text-muted-foreground">/hour</span>
            </div>
          </div>
        </div>
      </Link>

      <div className="px-4 pb-4">
        <Link to={`/booking/${turf.id}`}>
          <button className="w-full py-2.5 rounded-xl neon-button text-white font-semibold text-sm">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
}
