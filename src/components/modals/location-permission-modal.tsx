import { X, MapPin, Navigation, AlertCircle } from 'lucide-react';

interface LocationPermissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAllow: () => void;
  onDeny: () => void;
}

export function LocationPermissionModal({
  isOpen,
  onClose,
  onAllow,
  onDeny,
}: LocationPermissionModalProps) {
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
            <MapPin className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Enable Location Access
          </h2>
          <p className="text-sm text-muted-foreground">
            Turfo would like to access your location
          </p>
        </div>

        {/* Benefits */}
        <div className="glass-card border border-border rounded-xl p-5 mb-6">
          <p className="text-sm font-semibold text-foreground mb-4">Why we need location:</p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Navigation className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Find Nearby Turfs</p>
                <p className="text-xs text-muted-foreground">Discover sports venues close to you</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4 text-accent" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Accurate Distances</p>
                <p className="text-xs text-muted-foreground">Get real-time distance information</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#39ff14]/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-[#39ff14]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Personalized Results</p>
                <p className="text-xs text-muted-foreground">See turfs sorted by proximity</p>
              </div>
            </div>
          </div>
        </div>

        {/* Privacy Notice */}
        <div className="p-4 rounded-xl glass-card border border-primary/30 bg-primary/5 mb-6">
          <div className="flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-xs text-muted-foreground">
              Your privacy is important to us. We only use your location to show nearby turfs and never share it with third parties.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={onAllow}
            className="w-full py-3 rounded-xl neon-button text-white font-semibold flex items-center justify-center gap-2"
          >
            <MapPin className="w-5 h-5" />
            Allow Location Access
          </button>
          
          <button
            onClick={onDeny}
            className="w-full py-3 rounded-xl glass-card border border-border text-foreground font-semibold hover-neon"
          >
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  );
}
