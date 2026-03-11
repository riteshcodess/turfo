import { useParams, useNavigate } from 'react-router';
import { useState } from 'react';
import { MapPin, Star, Calendar, Clock, CreditCard, Info } from 'lucide-react';
import { turfs } from '../utils/mockData/turfs';

export function BookingPage() {
  const { turfId } = useParams();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState('2026-03-08');
  const [selectedSlots, setSelectedSlots] = useState<string[]>([]);

  const turf = turfs.find((t) => t.id === turfId);

  if (!turf) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Turf not found</p>
      </div>
    );
  }

  const toggleSlot = (slotId: string) => {
    setSelectedSlots((prev) =>
      prev.includes(slotId) ? prev.filter((id) => id !== slotId) : [...prev, slotId]
    );
  };

  const calculateTotal = () => {
    return selectedSlots.reduce((total, slotId) => {
      const slot = turf.timeSlots.find((s) => s.id === slotId);
      return total + (slot?.price || 0);
    }, 0);
  };

  const handleConfirmBooking = () => {
    // Navigate to checkout page
    navigate('/checkout');
  };

  return (
    <div className="min-h-screen pb-16">
      {/* Hero Section with Turf Image */}
      <section className="relative h-80 overflow-hidden">
        <img
          src={turf.image}
          alt={turf.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 -mt-40 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Booking Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Turf Info Card */}
            <div className="glass-card rounded-2xl p-6 border border-primary/30">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-black text-foreground mb-2">{turf.name}</h1>
                  <p className="text-muted-foreground flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4" />
                    {turf.location}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-[#ffaa00] text-[#ffaa00]" />
                      <span className="font-semibold text-foreground">{turf.rating}</span>
                      <span className="text-sm text-muted-foreground">(250+ reviews)</span>
                    </div>
                    <div className="px-3 py-1 rounded-full glass-card border border-accent/50">
                      <span className="text-xs font-semibold text-accent">
                        {turf.sport.join(', ')}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-black text-primary">₹{turf.price}</span>
                  <p className="text-sm text-muted-foreground">/hour</p>
                </div>
              </div>

              <div className="border-t border-border/50 pt-4">
                <h3 className="font-semibold text-foreground mb-3">Description</h3>
                <p className="text-muted-foreground text-sm">{turf.description}</p>
              </div>

              <div className="border-t border-border/50 pt-4 mt-4">
                <h3 className="font-semibold text-foreground mb-3">Amenities</h3>
                <div className="flex flex-wrap gap-2">
                  {turf.amenities.map((amenity) => (
                    <div key={amenity} className="px-3 py-1.5 rounded-lg glass-card border border-border">
                      <span className="text-xs text-foreground flex items-center gap-1">
                        <Check className="w-3 h-3 text-accent" />
                        {amenity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Date Selection */}
            <div className="glass-card rounded-2xl p-6 border border-primary/30">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold text-foreground">Select Date</h2>
              </div>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min="2026-03-08"
                className="w-full bg-input-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            {/* Time Slot Selection */}
            <div className="glass-card rounded-2xl p-6 border border-primary/30">
              <div className="flex items-center gap-2 mb-6">
                <Clock className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold text-foreground">Select Time Slots</h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {turf.timeSlots.map((slot) => (
                  <button
                    key={slot.id}
                    onClick={() => slot.available && toggleSlot(slot.id)}
                    disabled={!slot.available}
                    className={`p-3 rounded-xl text-sm font-semibold transition-all ${
                      !slot.available
                        ? 'glass-card border border-border/30 text-muted-foreground opacity-50 cursor-not-allowed'
                        : selectedSlots.includes(slot.id)
                        ? 'neon-button text-white'
                        : 'glass-card border border-primary/30 text-foreground hover-neon'
                    }`}
                  >
                    <div className="text-xs mb-1">{slot.time}</div>
                    <div className="text-xs text-muted-foreground">₹{slot.price}</div>
                  </button>
                ))}
              </div>

              <div className="mt-4 p-3 rounded-xl glass-card border border-accent/30">
                <p className="text-xs text-muted-foreground">
                  <span className="text-accent font-semibold">Tip:</span> Select multiple slots for longer playtime
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Summary */}
          <div className="lg:col-span-1">
            <div className="glass-card rounded-2xl p-6 border border-secondary/30 sticky top-28">
              <h2 className="text-xl font-bold text-foreground mb-6">
                Booking Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center pb-3 border-b border-border/50">
                  <span className="text-sm text-muted-foreground">Turf</span>
                  <span className="text-sm font-semibold text-foreground">{turf.name}</span>
                </div>

                <div className="flex justify-between items-center pb-3 border-b border-border/50">
                  <span className="text-sm text-muted-foreground">Date</span>
                  <span className="text-sm font-semibold text-foreground">{selectedDate}</span>
                </div>

                <div className="flex justify-between items-center pb-3 border-b border-border/50">
                  <span className="text-sm text-muted-foreground">Selected Slots</span>
                  <span className="text-sm font-semibold text-foreground">
                    {selectedSlots.length} {selectedSlots.length === 1 ? 'slot' : 'slots'}
                  </span>
                </div>

                {selectedSlots.length > 0 && (
                  <div className="p-3 rounded-xl glass-card border border-primary/30">
                    <p className="text-xs text-muted-foreground mb-2">Selected Times:</p>
                    <div className="space-y-1">
                      {selectedSlots.map((slotId) => {
                        const slot = turf.timeSlots.find((s) => s.id === slotId);
                        return (
                          <div key={slotId} className="text-xs text-foreground flex justify-between">
                            <span>{slot?.time}</span>
                            <span className="text-primary">₹{slot?.price}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              <div className="mb-6 pt-4 border-t border-border/50">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">Subtotal</span>
                  <span className="text-sm text-foreground">₹{calculateTotal()}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">Platform Fee</span>
                  <span className="text-sm text-foreground">₹50</span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-border/50">
                  <span className="font-semibold text-foreground">Total</span>
                  <span className="text-2xl font-black text-primary">
                    ₹{calculateTotal() + 50}
                  </span>
                </div>
              </div>

              <button
                onClick={handleConfirmBooking}
                disabled={selectedSlots.length === 0}
                className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${
                  selectedSlots.length === 0
                    ? 'glass-card border border-border/30 text-muted-foreground cursor-not-allowed'
                    : 'neon-button-purple text-white'
                }`}
              >
                <CreditCard className="w-5 h-5" />
                Confirm Booking
              </button>

              <p className="text-xs text-muted-foreground text-center mt-4">
                Secure payment powered by Turfo
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
