import { Loader2 } from 'lucide-react';

interface LoadingStateProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function LoadingState({ message = 'Loading...', size = 'md' }: LoadingStateProps) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  return (
    <div className="flex flex-col items-center justify-center py-20">
      <Loader2 className={`${sizes[size]} text-primary animate-spin mb-4`} />
      <p className="text-muted-foreground">{message}</p>
    </div>
  );
}

// Skeleton Loader Components
export function TurfCardSkeleton() {
  return (
    <div className="glass-card rounded-2xl overflow-hidden border border-border animate-pulse">
      <div className="h-48 bg-muted" />
      <div className="p-4">
        <div className="h-4 bg-muted rounded mb-2" />
        <div className="h-3 bg-muted rounded w-2/3 mb-3" />
        <div className="flex items-center justify-between mb-4">
          <div className="h-3 bg-muted rounded w-16" />
          <div className="h-4 bg-muted rounded w-20" />
        </div>
        <div className="h-10 bg-muted rounded-xl" />
      </div>
    </div>
  );
}

export function BookingCardSkeleton() {
  return (
    <div className="glass-card border border-border rounded-2xl p-6 animate-pulse">
      <div className="flex items-start gap-4">
        <div className="w-24 h-24 bg-muted rounded-xl" />
        <div className="flex-1 space-y-3">
          <div className="h-4 bg-muted rounded w-3/4" />
          <div className="h-3 bg-muted rounded w-1/2" />
          <div className="h-3 bg-muted rounded w-2/3" />
        </div>
      </div>
    </div>
  );
}

export function TableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="space-y-3">
      {[...Array(rows)].map((_, i) => (
        <div key={i} className="flex items-center gap-4 p-4 glass-card border border-border rounded-xl animate-pulse">
          <div className="w-12 h-12 bg-muted rounded-full" />
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-muted rounded w-3/4" />
            <div className="h-3 bg-muted rounded w-1/2" />
          </div>
          <div className="flex gap-2">
            <div className="w-8 h-8 bg-muted rounded-lg" />
            <div className="w-8 h-8 bg-muted rounded-lg" />
          </div>
        </div>
      ))}
    </div>
  );
}
