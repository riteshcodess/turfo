import { Trophy, MapPin, Users, Calendar, DollarSign, Clock, Info } from 'lucide-react';
import { Tournament, TournamentStatus } from '../utils/mockData/tournaments';
import { Link } from 'react-router';

interface TournamentCardProps {
  tournament: Tournament;
  onRegister?: (tournamentId: string) => void;
}

const statusColors: Record<TournamentStatus, { bg: string; text: string; border: string; label: string }> = {
  registration: {
    bg: 'bg-accent/10',
    text: 'text-accent',
    border: 'border-accent/50',
    label: 'Registration Open'
  },
  upcoming: {
    bg: 'bg-primary/10',
    text: 'text-primary',
    border: 'border-primary/50',
    label: 'Upcoming'
  },
  ongoing: {
    bg: 'bg-[#ffaa00]/10',
    text: 'text-[#ffaa00]',
    border: 'border-[#ffaa00]/50',
    label: 'Live Now'
  },
  completed: {
    bg: 'bg-muted-foreground/10',
    text: 'text-muted-foreground',
    border: 'border-muted-foreground/50',
    label: 'Completed'
  }
};

export function TournamentCard({ tournament, onRegister }: TournamentCardProps) {
  const statusStyle = statusColors[tournament.status];
  const spotsLeft = tournament.maxTeams - tournament.registeredTeams;
  const fillPercentage = (tournament.registeredTeams / tournament.maxTeams) * 100;

  return (
    <div className="glass-card rounded-2xl overflow-hidden border border-primary/30 hover-neon group">
      {/* Image Header */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={tournament.image}
          alt={tournament.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <div className={`px-3 py-1.5 rounded-full glass-card border ${statusStyle.border} ${statusStyle.bg}`}>
            <div className="flex items-center gap-2">
              {tournament.status === 'ongoing' && (
                <div className="w-2 h-2 rounded-full bg-[#ffaa00] animate-pulse" />
              )}
              <span className={`text-xs font-bold ${statusStyle.text} uppercase tracking-wide`}>
                {statusStyle.label}
              </span>
            </div>
          </div>
        </div>

        {/* Featured Badge */}
        {tournament.featured && (
          <div className="absolute top-4 left-4">
            <div className="px-3 py-1.5 rounded-full gradient-bg-purple border border-secondary/50">
              <div className="flex items-center gap-1">
                <Trophy className="w-3 h-3 text-white" />
                <span className="text-xs font-bold text-white uppercase tracking-wide">
                  Featured
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Sport Badge */}
        <div className="absolute bottom-4 left-4">
          <div className="px-3 py-1 rounded-lg glass-card border border-primary/50">
            <span className="text-xs font-semibold text-primary">{tournament.sport}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-black text-foreground mb-3 group-hover:text-primary transition-colors">
          {tournament.name}
        </h3>

        {/* Info Grid */}
        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
            <span className="text-muted-foreground truncate">{tournament.venue}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="w-4 h-4 text-accent flex-shrink-0" />
            <span className="text-muted-foreground">
              {new Date(tournament.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - {new Date(tournament.endDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <Clock className="w-4 h-4 text-secondary flex-shrink-0" />
            <span className="text-muted-foreground">
              Registration closes: {new Date(tournament.registrationDeadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </span>
          </div>
        </div>

        {/* Prize Pool */}
        <div className="mb-4 p-4 rounded-xl glass-card border border-primary/30 bg-gradient-to-br from-[#00f0ff]/5 to-[#b800ff]/5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-primary" />
              <span className="text-xs text-muted-foreground">Prize Pool</span>
            </div>
            <div className="text-right">
              <div className="text-xl font-black text-primary">₹{tournament.prizePool.toLocaleString()}</div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="glass-card rounded-xl p-3 border border-border/50">
            <div className="flex items-center gap-2 mb-1">
              <Users className="w-3 h-3 text-accent" />
              <span className="text-xs text-muted-foreground">Teams</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-lg font-black text-foreground">{tournament.registeredTeams}</span>
              <span className="text-xs text-muted-foreground">/ {tournament.maxTeams}</span>
            </div>
          </div>
          
          <div className="glass-card rounded-xl p-3 border border-border/50">
            <div className="flex items-center gap-2 mb-1">
              <DollarSign className="w-3 h-3 text-secondary" />
              <span className="text-xs text-muted-foreground">Entry Fee</span>
            </div>
            <span className="text-lg font-black text-foreground">₹{tournament.entryFee.toLocaleString()}</span>
          </div>
        </div>

        {/* Teams Progress Bar */}
        <div className="mb-4">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="text-muted-foreground">Spots Available</span>
            <span className="font-semibold text-foreground">
              {spotsLeft} {spotsLeft === 1 ? 'spot' : 'spots'} left
            </span>
          </div>
          <div className="h-2 rounded-full bg-background/50 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-accent to-primary transition-all duration-500"
              style={{ width: `${fillPercentage}%` }}
            />
          </div>
        </div>

        {/* Format Tag */}
        <div className="mb-4 flex items-center gap-2">
          <Info className="w-3 h-3 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">{tournament.format}</span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          {tournament.status === 'registration' && spotsLeft > 0 ? (
            <>
              <button
                onClick={() => onRegister?.(tournament.id)}
                className="flex-1 py-3 rounded-xl neon-button-green text-white font-semibold text-sm flex items-center justify-center gap-2 hover-scale"
              >
                <Trophy className="w-4 h-4" />
                Register Team
              </button>
              <Link to={`/tournament/${tournament.id}`}>
                <button className="px-4 py-3 rounded-xl glass-card border border-primary/50 text-primary font-semibold text-sm hover-neon">
                  Details
                </button>
              </Link>
            </>
          ) : tournament.status === 'ongoing' ? (
            <Link to={`/tournament/${tournament.id}`} className="flex-1">
              <button className="w-full py-3 rounded-xl neon-button text-white font-semibold text-sm flex items-center justify-center gap-2">
                <Trophy className="w-4 h-4" />
                View Live Scores
              </button>
            </Link>
          ) : (
            <Link to={`/tournament/${tournament.id}`} className="flex-1">
              <button className="w-full py-3 rounded-xl glass-card border border-primary/50 text-primary font-semibold text-sm hover-neon">
                View Details
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
