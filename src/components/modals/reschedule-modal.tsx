import { X, Calendar, Clock, CheckCircle } from 'lucide-react';
import { useState } from 'react';

interface RescheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingId?: string;
  currentDate?: string;
  currentTime?: string;
  onReschedule?: (newDate: string, newTime: string) => void;
}

export function RescheduleModal({
  isOpen,
  onClose,
  bookingId = 'TRF2024001',
  currentDate = 'March 15, 2026',
  currentTime = '6:00 PM - 7:00 PM',
  onReschedule,
}: RescheduleModalProps) {
  const [selectedDate, setSelectedDate] = useState('2026-03-16');
  const [selectedSlot, setSelectedSlot] = useState('');

  if (!isOpen) return null;

  const timeSlots = [
    { id: '1', time: '6:00 AM - 7:00 AM', available: true },
    { id: '2', time: '7:00 AM - 8:00 AM', available: true },
    { id: '3', time: '8:00 AM - 9:00 AM', available: false },
    { id: '4', time: '9:00 AM - 10:00 AM', available: true },
    { id: '5', time: '10:00 AM - 11:00 AM', available: true },
    { id: '6', time: '11:00 AM - 12:00 PM', available: false },
    { id: '7', time: '12:00 PM - 1:00 PM', available: true },
    { id: '8', time: '1:00 PM - 2:00 PM', available: true },
    { id: '9', time: '2:00 PM - 3:00 PM', available: true },
    { id: '10', time: '3:00 PM - 4:00 PM', available: true },
    { id: '11', time: '4:00 PM - 5:00 PM', available: false },
    { id: '12', time: '5:00 PM - 6:00 PM', available: true },
    { id: '13', time: '6:00 PM - 7:00 PM', available: true },
    { id: '14', time: '7:00 PM - 8:00 PM', available: true },
    { id: '15', time: '8:00 PM - 9:00 PM', available: true },
    { id: '16', time: '9:00 PM - 10:00 PM', available: true },
  ];

  const handleReschedule = () => {
    if (!selectedSlot) {
      alert('Please select a new time slot');
      return;
    }

    const slot = timeSlots.find((s) => s.id === selectedSlot);
    if (slot) {
      console.log('Rescheduling booking:', { bookingId, date: selectedDate, time: slot.time });
      
      if (onReschedule) {
        onReschedule(selectedDate, slot.time);
      }
      
      onClose();
    }
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
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#00f0ff] to-[#b800ff] mb-4 neon-glow">
            <Calendar className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Reschedule Booking
          </h2>
          <p className="text-sm text-muted-foreground">
            Booking ID: <span className="text-primary font-semibold">{bookingId}</span>
          </p>
        </div>

        {/* Current Booking Details */}
        <div className="glass-card border border-border rounded-xl p-4 mb-6">
          <p className="text-xs text-muted-foreground mb-2">Current Booking</p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground">{currentDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground">{currentTime}</span>
            </div>
          </div>
        </div>

        {/* New Date Selection */}
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              Select New Date *
            </label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              className="w-full bg-input-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          {/* Time Slot Selection */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              Select New Time Slot *
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-80 overflow-y-auto p-1">
              {timeSlots.map((slot) => (
                <button
                  key={slot.id}
                  type="button"
                  onClick={() => slot.available && setSelectedSlot(slot.id)}
                  disabled={!slot.available}
                  className={`
                    p-3 rounded-xl text-sm font-medium transition-all
                    ${
                      selectedSlot === slot.id
                        ? 'neon-button text-white'
                        : slot.available
                        ? 'glass-card border border-border text-foreground hover-neon'
                        : 'glass-card border border-border text-muted-foreground opacity-50 cursor-not-allowed'
                    }
                  `}
                >
                  {slot.time}
                  {!slot.available && (
                    <span className="block text-xs mt-1">Booked</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-8">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-3 rounded-xl glass-card border border-border text-foreground font-medium hover-neon"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleReschedule}
            className="flex-1 py-3 rounded-xl neon-button text-white font-semibold flex items-center justify-center gap-2"
          >
            <CheckCircle className="w-5 h-5" />
            Confirm Reschedule
          </button>
        </div>

        {/* Info */}
        <div className="mt-6 p-4 rounded-xl bg-primary/10 border border-primary/30">
          <p className="text-xs text-muted-foreground">
            <span className="text-primary font-semibold">Note:</span> Rescheduling is subject to availability. No additional charges will be applied if rescheduled within 24 hours of the original booking time.
          </p>
        </div>
      </div>
    </div>
  );
}
