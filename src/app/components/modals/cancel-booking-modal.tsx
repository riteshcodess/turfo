import { X, AlertTriangle, Calendar, Info } from 'lucide-react';

interface CancelBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmCancel: () => void;
  bookingDetails: {
    id: string;
    turfName: string;
    date: string;
    time: string;
    amount: number;
  };
}

export function CancelBookingModal({
  isOpen,
  onClose,
  onConfirmCancel,
  bookingDetails,
}: CancelBookingModalProps) {
  if (!isOpen) return null;

  // Calculate refund amount (mock logic: 80% refund if cancelled more than 24h before)
  const refundPercentage = 80;
  const refundAmount = Math.floor((bookingDetails.amount * refundPercentage) / 100);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md glass-card border border-red-500/30 rounded-2xl p-8 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full glass-card border border-border hover-neon flex items-center justify-center group"
        >
          <X className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-red-600 mb-4 neon-glow">
            <AlertTriangle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Cancel Booking?
          </h2>
          <p className="text-sm text-muted-foreground">
            Are you sure you want to cancel this booking?
          </p>
        </div>

        {/* Booking Details */}
        <div className="glass-card border border-border rounded-xl p-5 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-5 h-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Booking ID</p>
              <p className="font-semibold text-foreground">#{bookingDetails.id}</p>
            </div>
          </div>

          <div className="space-y-2 text-sm">
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
            <div className="flex justify-between pt-2 border-t border-border">
              <span className="text-muted-foreground">Amount Paid</span>
              <span className="text-foreground font-semibold">₹{bookingDetails.amount}</span>
            </div>
          </div>
        </div>

        {/* Refund Information */}
        <div className="p-4 rounded-xl glass-card border border-primary/30 bg-primary/5 mb-6">
          <div className="flex items-start gap-3 mb-3">
            <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-foreground mb-1">Refund Policy</p>
              <p className="text-xs text-muted-foreground">
                You will receive {refundPercentage}% refund for cancellations made more than 24 hours before the booking time.
              </p>
            </div>
          </div>
          <div className="pt-3 border-t border-border flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Refund Amount</span>
            <span className="text-xl font-bold text-[#39ff14]">₹{refundAmount}</span>
          </div>
        </div>

        {/* Warning */}
        <div className="p-4 rounded-xl glass-card border border-red-500/30 bg-red-500/5 mb-6">
          <div className="flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-muted-foreground">
              This action cannot be undone. The refund will be processed within 5-7 business days to your original payment method.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-xl glass-card border border-border text-foreground font-semibold hover-neon"
          >
            Keep Booking
          </button>
          <button
            onClick={onConfirmCancel}
            className="flex-1 py-3 rounded-xl bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold hover:from-red-600 hover:to-red-700 transition-all"
          >
            Cancel Booking
          </button>
        </div>
      </div>
    </div>
  );
}
