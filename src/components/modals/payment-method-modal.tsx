import { X, CreditCard, Smartphone, Wallet as WalletIcon } from 'lucide-react';
import { useState } from 'react';

interface PaymentMethodModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectMethod: (method: string) => void;
  amount: number;
}

export function PaymentMethodModal({
  isOpen,
  onClose,
  onSelectMethod,
  amount,
}: PaymentMethodModalProps) {
  const [selectedMethod, setSelectedMethod] = useState<string>('');

  if (!isOpen) return null;

  const paymentMethods = [
    {
      id: 'card',
      name: 'Credit/Debit Card',
      description: 'Visa, Mastercard, RuPay',
      icon: CreditCard,
      color: 'from-[#00f0ff] to-[#0080ff]',
    },
    {
      id: 'upi',
      name: 'UPI Payment',
      description: 'Google Pay, PhonePe, Paytm',
      icon: Smartphone,
      color: 'from-[#39ff14] to-[#00ff88]',
    },
    {
      id: 'wallet',
      name: 'Digital Wallet',
      description: 'Paytm, Amazon Pay, Mobikwik',
      icon: WalletIcon,
      color: 'from-[#b800ff] to-[#ff00ff]',
    },
  ];

  const handleContinue = () => {
    if (selectedMethod) {
      onSelectMethod(selectedMethod);
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
            <CreditCard className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Select Payment Method
          </h2>
          <p className="text-sm text-muted-foreground">
            Choose your preferred payment option
          </p>
        </div>

        {/* Amount Display */}
        <div className="glass-card border border-border rounded-xl p-4 mb-6 text-center">
          <p className="text-sm text-muted-foreground mb-1">Amount to Pay</p>
          <p className="text-3xl font-bold text-primary">₹{amount}</p>
        </div>

        {/* Payment Methods */}
        <div className="space-y-3 mb-6">
          {paymentMethods.map((method) => (
            <button
              key={method.id}
              onClick={() => setSelectedMethod(method.id)}
              className={`w-full p-4 rounded-xl transition-all ${
                selectedMethod === method.id
                  ? 'glass-card border-2 border-primary neon-glow'
                  : 'glass-card border border-border hover-neon'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center flex-shrink-0`}>
                  <method.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 text-left">
                  <p className="font-semibold text-foreground">{method.name}</p>
                  <p className="text-xs text-muted-foreground">{method.description}</p>
                </div>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  selectedMethod === method.id
                    ? 'border-primary bg-primary'
                    : 'border-border'
                }`}>
                  {selectedMethod === method.id && (
                    <div className="w-2 h-2 rounded-full bg-white" />
                  )}
                </div>
              </div>
            </button>
          ))}
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
            onClick={handleContinue}
            disabled={!selectedMethod}
            className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
              selectedMethod
                ? 'neon-button text-white'
                : 'glass-card border border-border/30 text-muted-foreground cursor-not-allowed'
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
