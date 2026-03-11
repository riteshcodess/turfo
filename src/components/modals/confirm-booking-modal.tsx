import { X, Calendar, Clock, MapPin, User, AlertCircle } from 'lucide-react';

interface ConfirmBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  bookingDetails: {
    turfName: string;
    location: string;
    date: string;
    time: string;
    duration: string;
    price: number;
  };
}

export function ConfirmBookingModal({
  isOpen,
  onClose,
  onConfirm,
  bookingDetails,
}: ConfirmBookingModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md glass-card border border-primary/30 rounded-2xl p-8 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full glass-card border border-border hover-neon flex items-center justify-center group"
        >
          <X className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#00f0ff] to-[#b800ff] mb-4 neon-glow">
            <Calendar className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Confirm Your Booking
          </h2>
          <p className="text-sm text-muted-foreground">
            Please review your booking details before proceeding
          </p>
        </div>

        {/* Booking Details */}
        <div className="glass-card border border-border rounded-xl p-5 mb-6 space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">Turf</p>
              <p className="font-semibold text-foreground">{bookingDetails.turfName}</p>
              <p className="text-xs text-muted-foreground">{bookingDetails.location}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
              <Calendar className="w-5 h-5 text-accent" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">Date</p>
              <p className="font-semibold text-foreground">{bookingDetails.date}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#39ff14]/10 flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5 text-[#39ff14]" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">Time & Duration</p>
              <p className="font-semibold text-foreground">{bookingDetails.time}</p>
              <p className="text-xs text-muted-foreground">{bookingDetails.duration}</p>
            </div>
          </div>

          <div className="pt-4 border-t border-border flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Total Amount</span>
            <span className="text-2xl font-bold text-primary">₹{bookingDetails.price}</span>
          </div>
        </div>

        {/* Warning Notice */}
        <div className="flex items-start gap-3 p-4 rounded-xl glass-card border border-[#FFD700]/30 bg-[#FFD700]/5 mb-6">
          <AlertCircle className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
          <p className="text-xs text-muted-foreground">
            By confirming, you agree to our cancellation policy. Cancellations made less than 24 hours before the booking time may not be eligible for a refund.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-xl glass-card border border-border text-foreground font-semibold hover-neon"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 py-3 rounded-xl neon-button text-white font-semibold"
          >
            Confirm & Pay
          </button>
        </div>
      </div>
    </div>
  );
}
