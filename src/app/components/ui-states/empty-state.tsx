import { Search, Calendar, Users, MapPin, Trophy, Building2 } from 'lucide-react';
import { ReactNode } from 'react';

interface EmptyStateProps {
  icon?: 'search' | 'calendar' | 'users' | 'map' | 'trophy' | 'building';
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  children?: ReactNode;
}

export function EmptyState({
  icon = 'search',
  title,
  description,
  action,
  children,
}: EmptyStateProps) {
  const icons = {
    search: Search,
    calendar: Calendar,
    users: Users,
    map: MapPin,
    trophy: Trophy,
    building: Building2,
  };

  const Icon = icons[icon];

  return (
    <div className="flex flex-col items-center justify-center py-20 px-4">
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center mb-6">
        <Icon className="w-10 h-10 text-muted-foreground" />
      </div>
      <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-center max-w-md mb-6">{description}</p>
      {action && (
        <button
          onClick={action.onClick}
          className="px-6 py-3 rounded-xl neon-button text-white font-semibold"
        >
          {action.label}
        </button>
      )}
      {children}
    </div>
  );
}

// Specific Empty State Components
export function NoTurfsFound() {
  return (
    <EmptyState
      icon="search"
      title="No Turfs Found"
      description="We couldn't find any turfs matching your search criteria. Try adjusting your filters or search in a different area."
      action={{
        label: 'Clear Filters',
        onClick: () => window.location.reload(),
      }}
    />
  );
}

export function NoBookingsYet() {
  return (
    <EmptyState
      icon="calendar"
      title="No Bookings Yet"
      description="You haven't made any bookings yet. Start exploring turfs and book your first game!"
      action={{
        label: 'Explore Turfs',
        onClick: () => (window.location.href = '/explore'),
      }}
    />
  );
}

export function NoMatchesFound() {
  return (
    <EmptyState
      icon="users"
      title="No Matches Found"
      description="There are no active players looking for a match in your area right now. Create your own match request!"
      action={{
        label: 'Create Match Request',
        onClick: () => {},
      }}
    />
  );
}

export function NoTournamentsAvailable() {
  return (
    <EmptyState
      icon="trophy"
      title="No Tournaments Available"
      description="There are no upcoming tournaments at the moment. Check back soon for new competitions!"
    />
  );
}
