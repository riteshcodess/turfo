import { AlertTriangle, RefreshCcw, WifiOff, ServerCrash } from 'lucide-react';
import { ReactNode } from 'react';

interface ErrorStateProps {
  type?: 'general' | 'network' | 'server' | 'notfound';
  title?: string;
  message?: string;
  onRetry?: () => void;
  children?: ReactNode;
}

export function ErrorState({
  type = 'general',
  title,
  message,
  onRetry,
  children,
}: ErrorStateProps) {
  const errorConfig = {
    general: {
      icon: AlertTriangle,
      title: title || 'Something Went Wrong',
      message: message || 'An unexpected error occurred. Please try again.',
      color: 'text-red-500',
    },
    network: {
      icon: WifiOff,
      title: title || 'Network Error',
      message: message || 'Unable to connect. Please check your internet connection.',
      color: 'text-[#FFD700]',
    },
    server: {
      icon: ServerCrash,
      title: title || 'Server Error',
      message: message || 'Our servers are having issues. Please try again later.',
      color: 'text-red-500',
    },
    notfound: {
      icon: AlertTriangle,
      title: title || '404 - Not Found',
      message: message || 'The page you are looking for does not exist.',
      color: 'text-muted-foreground',
    },
  };

  const config = errorConfig[type];
  const Icon = config.icon;

  return (
    <div className="flex flex-col items-center justify-center py-20 px-4">
      <div className={`w-20 h-20 rounded-full bg-gradient-to-br from-red-500/20 to-red-600/20 flex items-center justify-center mb-6 border border-red-500/30`}>
        <Icon className={`w-10 h-10 ${config.color}`} />
      </div>
      <h3 className="text-2xl font-bold text-foreground mb-2">{config.title}</h3>
      <p className="text-muted-foreground text-center max-w-md mb-6">{config.message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-6 py-3 rounded-xl neon-button text-white font-semibold flex items-center gap-2"
        >
          <RefreshCcw className="w-5 h-5" />
          Try Again
        </button>
      )}
      {children}
    </div>
  );
}

// Specific Error Components
export function NetworkError({ onRetry }: { onRetry?: () => void }) {
  return <ErrorState type="network" onRetry={onRetry} />;
}

export function ServerError({ onRetry }: { onRetry?: () => void }) {
  return <ErrorState type="server" onRetry={onRetry} />;
}

export function NotFoundError() {
  return (
    <ErrorState type="notfound">
      <button
        onClick={() => (window.location.href = '/')}
        className="mt-4 px-6 py-3 rounded-xl glass-card border border-border text-foreground font-semibold hover-neon"
      >
        Go Home
      </button>
    </ErrorState>
  );
}
