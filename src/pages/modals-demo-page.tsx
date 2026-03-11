import { useState } from 'react';
import { Layers } from 'lucide-react';
import {
  ConfirmBookingModal,
  BookingSuccessModal,
  BookingFailedModal,
  PaymentMethodModal,
  PaymentSuccessModal,
  PaymentFailedModal,
  LocationPermissionModal,
  FiltersModal,
  CancelBookingModal,
  ForgotPasswordModal,
} from '../components/modals';
import { LoginModal } from '../components/login-modal';

export function ModalsDemo() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const mockBookingDetails = {
    id: 'TRF2024001',
    turfName: 'Elite Sports Arena',
    location: 'Koramangala, Bangalore',
    date: 'March 15, 2026',
    time: '6:00 PM - 7:00 PM',
    duration: '1 Hour',
    price: 1550,
    amount: 1550,
  };

  const modals = [
    { id: 'login', name: 'Login / Signup', color: 'from-[#00f0ff] to-[#0080ff]' },
    { id: 'forgotPassword', name: 'Forgot Password', color: 'from-[#b800ff] to-[#ff00ff]' },
    { id: 'confirmBooking', name: 'Confirm Booking', color: 'from-[#00f0ff] to-[#b800ff]' },
    { id: 'bookingSuccess', name: 'Booking Success', color: 'from-[#39ff14] to-[#00ff88]' },
    { id: 'bookingFailed', name: 'Booking Failed', color: 'from-red-500 to-red-600' },
    { id: 'paymentMethod', name: 'Payment Method', color: 'from-[#00f0ff] to-[#0080ff]' },
    { id: 'paymentSuccess', name: 'Payment Success', color: 'from-[#39ff14] to-[#00ff88]' },
    { id: 'paymentFailed', name: 'Payment Failed', color: 'from-red-500 to-red-600' },
    { id: 'location', name: 'Location Permission', color: 'from-[#00f0ff] to-[#b800ff]' },
    { id: 'filters', name: 'Filters', color: 'from-[#b800ff] to-[#ff00ff]' },
    { id: 'cancelBooking', name: 'Cancel Booking', color: 'from-red-500 to-red-600' },
  ];

  return (
    <div className="min-h-screen pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#00f0ff] to-[#b800ff] mb-4 neon-glow">
            <Layers className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-3">
            Modals & Popups Demo
          </h1>
          <p className="text-muted-foreground text-lg">
            Click any button below to preview the modal
          </p>
        </div>

        {/* Modal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modals.map((modal) => (
            <button
              key={modal.id}
              onClick={() => setActiveModal(modal.id)}
              className="group glass-card border border-primary/20 rounded-2xl p-6 hover-neon transition-all"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${modal.color} flex items-center justify-center mb-4 neon-glow group-hover:scale-110 transition-transform`}>
                <Layers className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{modal.name}</h3>
              <p className="text-sm text-muted-foreground">Click to preview</p>
            </button>
          ))}
        </div>

        {/* Info Card */}
        <div className="mt-12 glass-card border border-primary/30 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-foreground mb-3">
            All Modals Implemented ✨
          </h3>
          <p className="text-muted-foreground">
            All popup modals feature consistent cyberpunk styling with glassmorphism effects,
            neon accents, and smooth animations. Each modal is fully functional and ready to use.
          </p>
        </div>
      </div>

      {/* Modals */}
      <LoginModal
        isOpen={activeModal === 'login'}
        onClose={() => setActiveModal(null)}
      />

      <ForgotPasswordModal
        isOpen={activeModal === 'forgotPassword'}
        onClose={() => setActiveModal(null)}
      />

      <ConfirmBookingModal
        isOpen={activeModal === 'confirmBooking'}
        onClose={() => setActiveModal(null)}
        onConfirm={() => {
          setActiveModal(null);
          setTimeout(() => setActiveModal('bookingSuccess'), 300);
        }}
        bookingDetails={mockBookingDetails}
      />

      <BookingSuccessModal
        isOpen={activeModal === 'bookingSuccess'}
        onClose={() => setActiveModal(null)}
        bookingId={mockBookingDetails.id}
        bookingDetails={mockBookingDetails}
      />

      <BookingFailedModal
        isOpen={activeModal === 'bookingFailed'}
        onClose={() => setActiveModal(null)}
        onRetry={() => setActiveModal(null)}
      />

      <PaymentMethodModal
        isOpen={activeModal === 'paymentMethod'}
        onClose={() => setActiveModal(null)}
        onSelectMethod={() => setActiveModal(null)}
        amount={mockBookingDetails.amount}
      />

      <PaymentSuccessModal
        isOpen={activeModal === 'paymentSuccess'}
        onClose={() => setActiveModal(null)}
        transactionId="TXN123456789"
        amount={mockBookingDetails.amount}
        paymentMethod="Credit Card"
      />

      <PaymentFailedModal
        isOpen={activeModal === 'paymentFailed'}
        onClose={() => setActiveModal(null)}
        onRetry={() => setActiveModal(null)}
        onChangeMethod={() => setActiveModal('paymentMethod')}
        amount={mockBookingDetails.amount}
      />

      <LocationPermissionModal
        isOpen={activeModal === 'location'}
        onClose={() => setActiveModal(null)}
        onAllow={() => setActiveModal(null)}
        onDeny={() => setActiveModal(null)}
      />

      <FiltersModal
        isOpen={activeModal === 'filters'}
        onClose={() => setActiveModal(null)}
        onApply={() => setActiveModal(null)}
      />

      <CancelBookingModal
        isOpen={activeModal === 'cancelBooking'}
        onClose={() => setActiveModal(null)}
        onConfirmCancel={() => setActiveModal(null)}
        bookingDetails={mockBookingDetails}
      />
    </div>
  );
}
