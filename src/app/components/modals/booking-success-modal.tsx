import { X, CheckCircle2, Calendar, Download, Share2 } from 'lucide-react';
import { Link } from 'react-router';

interface BookingSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingId: string;
  bookingDetails: {
    turfName: string;
    date: string;
    time: string;
    amount: number;
  };
}

export function BookingSuccessModal({
  isOpen,
  onClose,
  bookingId,
  bookingDetails,
}: BookingSuccessModalProps) {
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

        {/* Success Icon with Animation */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#39ff14] to-[#00ff88] mb-4 neon-glow animate-bounce">
            <CheckCircle2 className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Booking Confirmed! 🎉
          </h2>
          <p className="text-sm text-muted-foreground">
            Your turf has been successfully booked
          </p>
        </div>

        {/* Booking Details */}
        <div className="glass-card border border-border rounded-xl p-5 mb-6">
          <div className="text-center mb-4 pb-4 border-b border-border">
            <p className="text-xs text-muted-foreground mb-1">Booking ID</p>
            <p className="text-lg font-bold text-primary">#{bookingId}</p>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Turf</span>
              <span className="text-foreground font-semibold">{bookingDetails.turfName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Date</span>
              <span className="text-foreground font-semibold">{bookingDetails.date}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Time</span>
              <span className="text-foreground font-semibold">{bookingDetails.time}</span>
            </div>
            <div className="flex justify-between pt-3 border-t border-border">
              <span className="text-muted-foreground">Amount Paid</span>
              <span className="text-primary font-bold text-lg">₹{bookingDetails.amount}</span>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="p-4 rounded-xl glass-card border border-primary/30 bg-primary/5 mb-6">
          <p className="text-xs text-muted-foreground text-center">
            <Calendar className="w-4 h-4 inline mr-1" />
            A confirmation email has been sent to your registered email address
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Link to="/dashboard" onClick={onClose}>
            <button className="w-full py-3 rounded-xl neon-button text-white font-semibold">
              View My Bookings
            </button>
          </Link>
          
          <div className="grid grid-cols-2 gap-3">
            <button className="py-2.5 rounded-xl glass-card border border-border text-foreground text-sm font-medium hover-neon flex items-center justify-center gap-2">
              <Download className="w-4 h-4" />
              Download
            </button>
            <button className="py-2.5 rounded-xl glass-card border border-border text-foreground text-sm font-medium hover-neon flex items-center justify-center gap-2">
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
