import { X, XCircle, AlertTriangle, RefreshCcw, HelpCircle, ArrowLeft } from 'lucide-react';

interface PaymentFailedModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRetry: () => void;
  onChangeMethod: () => void;
  errorMessage?: string;
  amount: number;
}

export function PaymentFailedModal({
  isOpen,
  onClose,
  onRetry,
  onChangeMethod,
  errorMessage = 'Payment could not be processed. Please try again.',
  amount,
}: PaymentFailedModalProps) {
  if (!isOpen) return null;

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

        {/* Error Icon */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-red-600 mb-4 neon-glow">
            <XCircle className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Payment Failed
          </h2>
          <p className="text-sm text-muted-foreground">
            {errorMessage}
          </p>
        </div>

        {/* Amount Display */}
        <div className="glass-card border border-border rounded-xl p-4 mb-6 text-center">
          <p className="text-sm text-muted-foreground mb-1">Amount</p>
          <p className="text-2xl font-bold text-foreground">₹{amount}</p>
        </div>

        {/* Error Details */}
        <div className="p-4 rounded-xl glass-card border border-red-500/30 bg-red-500/5 mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">Common issues:</p>
              <ul className="space-y-1 text-xs">
                <li>• Insufficient balance in your account</li>
                <li>• Card/payment method expired or blocked</li>
                <li>• Incorrect payment details entered</li>
                <li>• Network connectivity issue</li>
                <li>• Bank server temporarily down</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={onRetry}
            className="w-full py-3 rounded-xl neon-button text-white font-semibold flex items-center justify-center gap-2"
          >
            <RefreshCcw className="w-5 h-5" />
            Try Again
          </button>
          
          <button
            onClick={onChangeMethod}
            className="w-full py-3 rounded-xl glass-card border border-primary text-primary font-semibold hover-neon flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Change Payment Method
          </button>

          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl glass-card border border-border text-foreground font-medium hover-neon"
          >
            Cancel
          </button>

          <button className="w-full py-2.5 rounded-xl text-primary text-sm font-medium hover:text-accent transition-colors flex items-center justify-center gap-2">
            <HelpCircle className="w-4 h-4" />
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}
