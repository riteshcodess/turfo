import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Calendar, Clock, MapPin, CreditCard, User, Mail, Phone, CheckCircle2, ArrowLeft } from 'lucide-react';

export function CheckoutPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState<'details' | 'payment' | 'success'>('details');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    paymentMethod: 'card',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  // Mock booking data
  const bookingData = {
    turfName: 'Elite Sports Arena',
    location: 'Koramangala, Bangalore',
    date: 'March 15, 2026',
    time: '6:00 PM - 7:00 PM',
    duration: '1 Hour',
    pricePerHour: 1500,
    serviceFee: 50,
  };

  const total = bookingData.pricePerHour + bookingData.serviceFee;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 'details') {
      setStep('payment');
    } else if (step === 'payment') {
      setStep('success');
      setTimeout(() => {
        navigate('/dashboard');
      }, 3000);
    }
  };

  if (step === 'success') {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 pb-20">
        <div className="max-w-md w-full glass-card border border-primary/30 rounded-2xl p-8 text-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#39ff14] to-[#00f0ff] flex items-center justify-center mx-auto mb-6 neon-glow">
            <CheckCircle2 className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-3">Booking Confirmed!</h2>
          <p className="text-muted-foreground mb-6">
            Your turf booking has been successfully confirmed. Check your email for details.
          </p>
          <div className="glass-card border border-border rounded-xl p-6 mb-6 text-left">
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Booking ID</span>
                <span className="text-foreground font-semibold">#TRF2024001</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Turf</span>
                <span className="text-foreground">{bookingData.turfName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Date & Time</span>
                <span className="text-foreground">{bookingData.date}, {bookingData.time}</span>
              </div>
              <div className="flex justify-between pt-3 border-t border-border">
                <span className="text-muted-foreground">Total Paid</span>
                <span className="text-primary font-bold text-lg">₹{total}</span>
              </div>
            </div>
          </div>
          <Link
            to="/dashboard"
            className="w-full py-3 rounded-xl neon-button text-white font-semibold text-center block"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link to="/explore" className="inline-flex items-center gap-2 text-primary hover:text-accent mb-6 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back
          </Link>
          <h1 className="text-3xl font-bold text-foreground">Checkout</h1>
          <p className="text-muted-foreground mt-2">Complete your booking</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-4">
            <div className={`flex items-center gap-2 ${step === 'details' ? 'text-primary' : 'text-muted-foreground'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step === 'details' ? 'bg-primary neon-glow' : 'bg-muted'}`}>
                <span className="text-white font-semibold">1</span>
              </div>
              <span className="hidden sm:block font-medium">Details</span>
            </div>
            <div className={`w-16 h-0.5 ${step === 'payment' ? 'bg-primary' : 'bg-border'}`} />
            <div className={`flex items-center gap-2 ${step === 'payment' ? 'text-primary' : 'text-muted-foreground'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step === 'payment' ? 'bg-primary neon-glow' : 'bg-muted'}`}>
                <span className="text-white font-semibold">2</span>
              </div>
              <span className="hidden sm:block font-medium">Payment</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {step === 'details' && (
              <form onSubmit={handleSubmit} className="glass-card border border-primary/20 rounded-2xl p-8">
                <h2 className="text-xl font-bold text-foreground mb-6">Your Details</h2>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="w-full bg-input-background border border-border rounded-xl pl-10 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="w-full bg-input-background border border-border rounded-xl pl-10 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className="w-full bg-input-background border border-border rounded-xl pl-10 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                        required
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl neon-button text-white font-semibold mt-8"
                >
                  Continue to Payment
                </button>
              </form>
            )}

            {step === 'payment' && (
              <form onSubmit={handleSubmit} className="glass-card border border-primary/20 rounded-2xl p-8">
                <h2 className="text-xl font-bold text-foreground mb-6">Payment Method</h2>
                
                {/* Payment Method Selection */}
                <div className="space-y-3 mb-6">
                  <label className="flex items-center gap-3 p-4 rounded-xl glass-card border border-border cursor-pointer hover-neon">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={handleChange}
                      className="w-5 h-5 accent-primary"
                    />
                    <CreditCard className="w-5 h-5 text-primary" />
                    <span className="text-foreground font-medium">Credit/Debit Card</span>
                  </label>

                  <label className="flex items-center gap-3 p-4 rounded-xl glass-card border border-border cursor-pointer hover-neon">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="upi"
                      checked={formData.paymentMethod === 'upi'}
                      onChange={handleChange}
                      className="w-5 h-5 accent-primary"
                    />
                    <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z"/>
                    </svg>
                    <span className="text-foreground font-medium">UPI</span>
                  </label>

                  <label className="flex items-center gap-3 p-4 rounded-xl glass-card border border-border cursor-pointer hover-neon">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="wallet"
                      checked={formData.paymentMethod === 'wallet'}
                      onChange={handleChange}
                      className="w-5 h-5 accent-primary"
                    />
                    <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                    </svg>
                    <span className="text-foreground font-medium">Wallet</span>
                  </label>
                </div>

                {/* Card Details (shown only for card payment) */}
                {formData.paymentMethod === 'card' && (
                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Card Number</label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                        className="w-full bg-input-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Expiry Date</label>
                        <input
                          type="text"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleChange}
                          placeholder="MM/YY"
                          maxLength={5}
                          className="w-full bg-input-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">CVV</label>
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleChange}
                          placeholder="123"
                          maxLength={3}
                          className="w-full bg-input-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep('details')}
                    className="flex-1 py-3 rounded-xl glass-card border border-border text-foreground font-semibold hover-neon"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 rounded-xl neon-button text-white font-semibold"
                  >
                    Pay ₹{total}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="glass-card border border-primary/30 rounded-2xl p-6 sticky top-24">
              <h3 className="text-lg font-bold text-foreground mb-6">Booking Summary</h3>

              <div className="space-y-4 mb-6">
                <div className="glass-card border border-border rounded-xl p-4">
                  <h4 className="font-semibold text-foreground mb-2">{bookingData.turfName}</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{bookingData.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{bookingData.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{bookingData.time}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pb-6 border-b border-border">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">₹{bookingData.pricePerHour} × {bookingData.duration}</span>
                  <span className="text-foreground">₹{bookingData.pricePerHour}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Service fee</span>
                  <span className="text-foreground">₹{bookingData.serviceFee}</span>
                </div>
              </div>

              <div className="flex items-center justify-between font-semibold pt-6">
                <span className="text-foreground text-lg">Total</span>
                <span className="text-primary text-2xl">₹{total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
