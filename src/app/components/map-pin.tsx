import { useState } from 'react';
import { Star, MapPin as MapPinIcon, ArrowRight } from 'lucide-react';
import { MapTurf, AvailabilityStatus } from '../data/map-data';
import { Link } from 'react-router';

interface MapPinProps {
  turf: MapTurf;
}

const pinColors: Record<AvailabilityStatus, { bg: string; glow: string; border: string }> = {
  available: {
    bg: 'bg-[#00ff88]',
    glow: 'shadow-[0_0_20px_rgba(0,255,136,0.6)]',
    border: 'border-[#00ff88]'
  },
  limited: {
    bg: 'bg-[#ffaa00]',
    glow: 'shadow-[0_0_20px_rgba(255,170,0,0.6)]',
    border: 'border-[#ffaa00]'
  },
  booked: {
    bg: 'bg-[#ff0055]',
    glow: 'shadow-[0_0_20px_rgba(255,0,85,0.6)]',
    border: 'border-[#ff0055]'
  }
};

export function MapPin({ turf }: MapPinProps) {
  const [isHovered, setIsHovered] = useState(false);
  const colors = pinColors[turf.availabilityStatus];

  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-full cursor-pointer z-10 group"
      style={{
        left: `${turf.coordinates.x}%`,
        top: `${turf.coordinates.y}%`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Pin */}
      <div className="relative">
        <div
          className={`w-8 h-8 rounded-full ${colors.bg} ${colors.glow} border-2 border-white animate-pulse-slow group-hover:scale-125 transition-transform duration-300`}
        >
          <div className="absolute inset-0 rounded-full bg-white/30" />
        </div>
        <div
          className={`w-1 h-6 ${colors.bg} mx-auto relative`}
          style={{
            clipPath: 'polygon(50% 0%, 0% 0%, 50% 100%)'
          }}
        />
        
        {/* Pulse Effect */}
        <div
          className={`absolute top-0 left-0 w-8 h-8 rounded-full ${colors.bg} opacity-30 animate-ping pointer-events-none`}
        />
      </div>

      {/* Hover Card */}
      {isHovered && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="glass-card rounded-2xl overflow-hidden border border-primary/40 neon-border">
            {/* Image */}
            <div className="relative h-32">
              <img
                src={turf.image}
                alt={turf.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 px-2 py-1 rounded-full glass-card border border-primary/50">
                <span className="text-xs font-semibold text-primary flex items-center gap-1">
                  <MapPinIcon className="w-3 h-3" />
                  {turf.distance}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-bold text-foreground mb-1">{turf.name}</h3>
              <p className="text-xs text-muted-foreground mb-2">{turf.location}</p>

              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 fill-[#ffaa00] text-[#ffaa00]" />
                  <span className="text-xs font-semibold text-foreground">{turf.rating}</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  {turf.sport.join(', ')}
                </div>
              </div>

              {/* Availability Status */}
              <div className="mb-3 p-2 rounded-lg glass-card border ${colors.border}/30">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Availability</span>
                  <span className={`text-xs font-semibold ${colors.bg.replace('bg-', 'text-')}`}>
                    {turf.availableSlots}/{turf.totalSlots} slots
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between mb-3">
                <div>
                  <span className="text-lg font-black text-primary">₹{turf.price}</span>
                  <span className="text-xs text-muted-foreground">/hour</span>
                </div>
              </div>

              <Link to={`/booking/${turf.id}`}>
                <button className="w-full py-2 rounded-xl neon-button text-white font-semibold text-sm flex items-center justify-center gap-2">
                  View Turf
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}