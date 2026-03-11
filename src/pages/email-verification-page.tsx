import { CheckCircle2, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

export function EmailVerificationPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pb-20">
      <div className="max-w-md w-full glass-card border border-primary/30 rounded-2xl p-8 text-center">
        {/* Success Icon */}
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#39ff14] to-[#00f0ff] flex items-center justify-center mx-auto mb-6 neon-glow animate-pulse-slow">
          <CheckCircle2 className="w-12 h-12 text-white" />
        </div>

        {/* Success Message */}
        <h1 className="text-3xl font-black text-foreground mb-3">
          Email Verified!
        </h1>
        <p className="text-muted-foreground mb-6">
          Your email has been successfully verified. You can now access all features and start booking turfs.
        </p>

        {/* Email Confirmation */}
        <div className="glass-card border border-border rounded-xl p-4 mb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Mail className="w-5 h-5 text-primary" />
          </div>
          <div className="text-left">
            <p className="text-xs text-muted-foreground">Verified Email</p>
            <p className="text-sm text-foreground font-semibold">user@example.com</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Link
            to="/explore"
            className="w-full py-3 rounded-xl neon-button text-white font-semibold flex items-center justify-center gap-2"
          >
            Start Exploring Turfs
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/dashboard"
            className="w-full py-3 rounded-xl glass-card border border-border text-foreground font-medium hover-neon flex items-center justify-center"
          >
            Go to Dashboard
          </Link>
        </div>

        {/* Additional Info */}
        <div className="mt-6 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground">
            Welcome to Turfo! You're all set to book premium sports facilities.
          </p>
        </div>
      </div>
    </div>
  );
}
