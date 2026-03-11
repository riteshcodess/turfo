import { Trophy, TrendingUp, Award } from 'lucide-react';
import { LeaderboardEntry } from '../utils/mockData/tournaments';

interface LeaderboardProps {
  entries: LeaderboardEntry[];
  title?: string;
  compact?: boolean;
}

const rankColors: Record<number, { bg: string; text: string; border: string; icon: string }> = {
  1: {
    bg: 'gradient-bg-gold',
    text: 'text-[#FFD700]',
    border: 'border-[#FFD700]/50',
    icon: '🥇'
  },
  2: {
    bg: 'gradient-bg-silver',
    text: 'text-[#C0C0C0]',
    border: 'border-[#C0C0C0]/50',
    icon: '🥈'
  },
  3: {
    bg: 'gradient-bg-bronze',
    text: 'text-[#CD7F32]',
    border: 'border-[#CD7F32]/50',
    icon: '🥉'
  }
};

export function Leaderboard({ entries, title = 'Leaderboard', compact = false }: LeaderboardProps) {
  return (
    <div className="glass-card rounded-2xl border border-primary/30 overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-border/50 bg-gradient-to-r from-[#00f0ff]/5 to-[#b800ff]/5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl gradient-bg-purple border border-secondary/50 flex items-center justify-center">
              <Trophy className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-black text-foreground">{title}</h3>
              <p className="text-xs text-muted-foreground">Top performing teams</p>
            </div>
          </div>
          {!compact && (
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-accent" />
              <span className="text-xs text-accent font-semibold">Live Updates</span>
            </div>
          )}
        </div>
      </div>

      {/* Leaderboard Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border/50">
              <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Rank
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Team
              </th>
              {!compact && (
                <>
                  <th className="px-6 py-4 text-center text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    W
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    L
                  </th>
                </>
              )}
              <th className="px-6 py-4 text-center text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Points
              </th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, index) => {
              const rankStyle = rankColors[entry.rank];
              const isTopThree = entry.rank <= 3;

              return (
                <tr
                  key={entry.rank}
                  className={`border-b border-border/30 transition-colors hover:bg-primary/5 ${
                    isTopThree ? 'bg-gradient-to-r from-transparent to-primary/5' : ''
                  }`}
                >
                  {/* Rank */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {isTopThree ? (
                        <div className={`w-10 h-10 rounded-xl ${rankStyle.bg} border ${rankStyle.border} flex items-center justify-center`}>
                          <span className="text-lg">{rankStyle.icon}</span>
                        </div>
                      ) : (
                        <div className="w-10 h-10 rounded-xl glass-card border border-border/50 flex items-center justify-center">
                          <span className="text-sm font-bold text-foreground">{entry.rank}</span>
                        </div>
                      )}
                    </div>
                  </td>

                  {/* Team */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg overflow-hidden border border-primary/30 flex-shrink-0">
                        <img
                          src={entry.logo}
                          alt={entry.teamName}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className={`font-bold ${isTopThree ? rankStyle.text : 'text-foreground'}`}>
                          {entry.teamName}
                        </div>
                        {!compact && entry.goalsScored !== undefined && (
                          <div className="text-xs text-muted-foreground">
                            GD: {entry.goalsScored - (entry.goalsConceded || 0)}
                          </div>
                        )}
                      </div>
                    </div>
                  </td>

                  {/* Wins & Losses (only if not compact) */}
                  {!compact && (
                    <>
                      <td className="px-6 py-4 text-center">
                        <span className="text-sm font-semibold text-accent">{entry.wins}</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-sm font-semibold text-destructive">{entry.losses}</span>
                      </td>
                    </>
                  )}

                  {/* Points */}
                  <td className="px-6 py-4 text-center">
                    <div className="inline-flex items-center gap-1 px-3 py-1 rounded-lg glass-card border border-primary/30">
                      <Award className="w-3 h-3 text-primary" />
                      <span className="text-sm font-black text-primary">{entry.points}</span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      {!compact && (
        <div className="p-4 border-t border-border/50 bg-background/50">
          <div className="flex items-center justify-center gap-6 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-accent" />
              <span className="text-muted-foreground">Wins</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-destructive" />
              <span className="text-muted-foreground">Losses</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-3 h-3 text-primary" />
              <span className="text-muted-foreground">Points</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
