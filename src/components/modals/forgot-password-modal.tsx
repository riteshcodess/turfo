import { X, Mail, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

interface ForgotPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ForgotPasswordModal({ isOpen, onClose }: ForgotPasswordModalProps) {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle forgot password logic here
    console.log('Reset password for:', email);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md glass-card border border-primary/30 rounded-2xl p-8 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full glass-card border border-border hover-neon flex items-center justify-center group"
        >
          <X className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </button>

        {!isSubmitted ? (
          <>
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#00f0ff] to-[#b800ff] mb-4 neon-glow">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Forgot Password?
              </h2>
              <p className="text-sm text-muted-foreground">
                No worries! Enter your email and we'll send you reset instructions
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-input-background border border-border rounded-xl pl-10 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 rounded-xl neon-button text-white font-semibold mt-6"
              >
                Send Reset Link
              </button>

              {/* Back to Login */}
              <button
                type="button"
                onClick={handleClose}
                className="w-full py-3 rounded-xl glass-card border border-border text-foreground font-medium hover-neon flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Login
              </button>
            </form>
          </>
        ) : (
          <>
            {/* Success State */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#39ff14] to-[#00ff88] mb-4 neon-glow">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Check Your Email
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                We've sent password reset instructions to <span className="text-primary font-semibold">{email}</span>
              </p>
              <button
                onClick={handleClose}
                className="w-full py-3 rounded-xl neon-button text-white font-semibold"
              >
                Got it!
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
