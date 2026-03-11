import { MapPin, Star, Clock, Trophy, UserPlus, MessageCircle } from 'lucide-react';
import { Player, SkillLevel } from '../utils/mockData/players';

interface PlayerCardProps {
  player: Player;
  onJoinMatch?: (playerId: string) => void;
  onInvite?: (playerId: string) => void;
}

const skillColors: Record<SkillLevel, { bg: string; text: string; border: string }> = {
  beginner: {
    bg: 'bg-[#00ff88]/10',
    text: 'text-[#00ff88]',
    border: 'border-[#00ff88]/30'
  },
  intermediate: {
    bg: 'bg-[#ffaa00]/10',
    text: 'text-[#ffaa00]',
    border: 'border-[#ffaa00]/30'
  },
  advanced: {
    bg: 'bg-[#00f0ff]/10',
    text: 'text-[#00f0ff]',
    border: 'border-[#00f0ff]/30'
  },
  professional: {
    bg: 'bg-[#b800ff]/10',
    text: 'text-[#b800ff]',
    border: 'border-[#b800ff]/30'
  }
};

export function PlayerCard({ player, onJoinMatch, onInvite }: PlayerCardProps) {
  const skillStyle = skillColors[player.skillLevel];

  return (
    <div className="glass-card rounded-2xl overflow-hidden border border-primary/30 hover-neon group">
      {/* Header with Avatar and Status */}
      <div className="relative p-6 pb-4 bg-gradient-to-br from-[#00f0ff]/5 via-[#b800ff]/5 to-[#00ff88]/5">
        <div className="flex items-start gap-4">
          {/* Avatar */}
          <div className="relative flex-shrink-0">
            <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-primary/50 neon-glow">
              <img
                src={player.avatar}
                alt={player.name}
                className="w-full h-full object-cover"
              />
            </div>
            {player.lookingForMatch && (
              <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-accent border-2 border-background animate-pulse-slow">
                <div className="absolute inset-0 rounded-full bg-accent/50 animate-ping" />
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-foreground mb-1 truncate">{player.name}</h3>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 fill-[#ffaa00] text-[#ffaa00]" />
                <span className="text-sm font-semibold text-foreground">{player.rating}</span>
              </div>
              <span className="text-xs text-muted-foreground">•</span>
              <span className="text-xs text-muted-foreground">{player.matchesPlayed} matches</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="w-3 h-3" />
              <span className="truncate">{player.distance} away</span>
            </div>
          </div>
        </div>

        {/* Skill Level Badge */}
        <div className="absolute top-4 right-4">
          <div className={`px-3 py-1 rounded-full glass-card border ${skillStyle.border} ${skillStyle.bg}`}>
            <span className={`text-xs font-bold ${skillStyle.text} uppercase tracking-wide`}>
              {player.skillLevel}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 pt-4 space-y-4">
        {/* Sports */}
        <div>
          <label className="text-xs font-semibold text-muted-foreground mb-2 block uppercase tracking-wide">
            Sports
          </label>
          <div className="flex flex-wrap gap-2">
            {player.sport.map((sport) => (
              <span
                key={sport}
                className="px-3 py-1 rounded-lg glass-card border border-primary/30 text-xs font-semibold text-primary"
              >
                {sport}
              </span>
            ))}
          </div>
        </div>

        {/* Bio */}
        <div>
          <p className="text-sm text-muted-foreground line-clamp-2">{player.bio}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="glass-card rounded-xl p-3 border border-border/50">
            <div className="flex items-center gap-2 mb-1">
              <Clock className="w-3 h-3 text-primary" />
              <span className="text-xs text-muted-foreground">Availability</span>
            </div>
            <span className="text-xs font-semibold text-foreground">{player.availability}</span>
          </div>
          <div className="glass-card rounded-xl p-3 border border-border/50">
            <div className="flex items-center gap-2 mb-1">
              <Trophy className="w-3 h-3 text-accent" />
              <span className="text-xs text-muted-foreground">Team Size</span>
            </div>
            <span className="text-xs font-semibold text-foreground">{player.teamSize}</span>
          </div>
        </div>

        {/* Preferred Time Tags */}
        <div>
          <label className="text-xs font-semibold text-muted-foreground mb-2 block uppercase tracking-wide">
            Preferred Time
          </label>
          <div className="flex flex-wrap gap-2">
            {player.preferredTime.map((time) => (
              <span
                key={time}
                className="px-2 py-1 rounded-lg bg-accent/10 border border-accent/30 text-xs font-medium text-accent capitalize"
              >
                {time}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          <button
            onClick={() => onJoinMatch?.(player.id)}
            className="flex-1 py-2.5 rounded-xl neon-button text-white font-semibold text-sm flex items-center justify-center gap-2 hover-scale"
          >
            <UserPlus className="w-4 h-4" />
            Join Match
          </button>
          <button
            onClick={() => onInvite?.(player.id)}
            className="px-4 py-2.5 rounded-xl glass-card border border-primary/50 text-primary font-semibold text-sm flex items-center justify-center hover-neon"
          >
            <MessageCircle className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Looking for Match Indicator */}
      {player.lookingForMatch && (
        <div className="px-6 pb-6">
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-accent/10 border border-accent/30">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-semibold text-accent">Looking for match now</span>
          </div>
        </div>
      )}
    </div>
  );
}
