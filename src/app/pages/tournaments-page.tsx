import { useState } from 'react';
import { Trophy, Filter, Plus, Target, Award, TrendingUp, Users, Zap } from 'lucide-react';
import { TournamentCard } from '../components/tournament-card';
import { Leaderboard } from '../components/leaderboard';
import { tournaments, leaderboards } from '../data/tournaments';

export function TournamentsPage() {
  const [selectedSport, setSelectedSport] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [showSuccess, setShowSuccess] = useState(false);

  const sports = ['All', 'Football', 'Cricket', 'Basketball', 'Badminton', 'Tennis'];
  const statuses = [
    { value: 'all', label: 'All Tournaments' },
    { value: 'registration', label: 'Registration Open' },
    { value: 'upcoming', label: 'Upcoming' },
    { value: 'ongoing', label: 'Live Now' },
    { value: 'completed', label: 'Completed' }
  ];

  const filteredTournaments = tournaments.filter((tournament) => {
    if (selectedSport !== 'All' && tournament.sport !== selectedSport) {
      return false;
    }
    if (selectedStatus !== 'all' && tournament.status !== selectedStatus) {
      return false;
    }
    return true;
  });

  const featuredTournaments = tournaments.filter(t => t.featured);
  const registrationOpen = tournaments.filter(t => t.status === 'registration').length;
  const ongoingCount = tournaments.filter(t => t.status === 'ongoing').length;
  const totalPrizePool = tournaments.reduce((sum, t) => sum + t.prizePool, 0);

  const handleRegister = (tournamentId: string) => {
    const tournament = tournaments.find(t => t.id === tournamentId);
    console.log('Registering for tournament:', tournament?.name);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleResetFilters = () => {
    setSelectedSport('All');
    setSelectedStatus('all');
  };

  return (
    <div className="min-h-screen pb-16">
      {/* Success Notification */}
      {showSuccess && (
        <div className="fixed top-24 right-4 z-50 animate-in slide-in-from-top-2 duration-300">
          <div className="glass-card rounded-2xl p-4 border border-accent/50 neon-border-green">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full gradient-bg-green border border-accent/50 flex items-center justify-center">
                <Trophy className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">Registration Successful!</h4>
                <p className="text-xs text-muted-foreground">Check your dashboard for details</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/10 via-[#b800ff]/10 to-[#00ff88]/10" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary/30 blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-accent/30 blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/3 w-36 h-36 rounded-full bg-secondary/30 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/50 mb-4">
              <Zap className="w-4 h-4 text-accent animate-pulse" />
              <span className="text-sm font-semibold text-accent">
                {registrationOpen} Tournaments Open for Registration
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-foreground mb-4">
              <span className="text-primary">Epic</span> Tournaments <span className="text-secondary">Await</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Compete for glory, massive prizes, and championship titles. Join India's premier sports tournaments.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="glass-card rounded-2xl p-6 border border-primary/30 hover-neon">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-xl gradient-bg-blue border border-primary/50 flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="text-3xl font-black text-primary mb-1">{tournaments.length}</div>
              <div className="text-sm text-muted-foreground">Active Tournaments</div>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-accent/30 hover-neon">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-xl gradient-bg-green border border-accent/50 flex items-center justify-center">
                  <Target className="w-6 h-6 text-accent" />
                </div>
              </div>
              <div className="text-3xl font-black text-accent mb-1">{registrationOpen}</div>
              <div className="text-sm text-muted-foreground">Open Registration</div>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-secondary/30 hover-neon">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-xl gradient-bg-purple border border-secondary/50 flex items-center justify-center">
                  <Award className="w-6 h-6 text-secondary" />
                </div>
              </div>
              <div className="text-3xl font-black text-secondary mb-1">₹{(totalPrizePool / 100000).toFixed(1)}L</div>
              <div className="text-sm text-muted-foreground">Total Prize Pool</div>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-primary/30 hover-neon">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-xl gradient-bg-blue border border-primary/50 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="text-3xl font-black text-primary mb-1">{ongoingCount}</div>
              <div className="text-sm text-muted-foreground">Live Tournaments</div>
            </div>
          </div>

          {/* Create Tournament CTA */}
          <div className="glass-card rounded-2xl p-6 border border-accent/30 bg-gradient-to-r from-[#00ff88]/10 to-[#00f0ff]/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl gradient-bg-green border border-accent/50 flex items-center justify-center">
                  <Plus className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    Host Your Own Tournament
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Organize competitions, manage registrations, and create unforgettable sporting events
                  </p>
                </div>
              </div>
              <button className="px-6 py-3 rounded-xl neon-button-green text-white font-semibold flex items-center gap-2 hover-scale whitespace-nowrap">
                <Plus className="w-5 h-5" />
                Create Tournament
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <div className="glass-card rounded-2xl p-6 border border-primary/30">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-bold text-foreground">Filters</h2>
            </div>
            <button
              onClick={handleResetFilters}
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Reset All
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Sport Type Filter */}
            <div>
              <label className="text-sm font-semibold text-foreground mb-3 block">
                Sport Type
              </label>
              <div className="flex flex-wrap gap-2">
                {sports.map((sport) => (
                  <button
                    key={sport}
                    onClick={() => setSelectedSport(sport)}
                    className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                      selectedSport === sport
                        ? 'neon-button text-white'
                        : 'glass-card border border-border text-foreground hover-neon'
                    }`}
                  >
                    {sport}
                  </button>
                ))}
              </div>
            </div>

            {/* Status Filter */}
            <div>
              <label className="text-sm font-semibold text-foreground mb-3 block">
                Tournament Status
              </label>
              <div className="grid grid-cols-2 gap-2">
                {statuses.map((status) => (
                  <button
                    key={status.value}
                    onClick={() => setSelectedStatus(status.value)}
                    className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                      selectedStatus === status.value
                        ? 'neon-button-purple text-white'
                        : 'glass-card border border-border text-foreground hover-neon'
                    }`}
                  >
                    {status.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tournaments List - Left Side (2/3) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Featured Section */}
            {featuredTournaments.length > 0 && selectedStatus === 'all' && selectedSport === 'All' && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl gradient-bg-purple border border-secondary/50 flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-foreground">
                      Featured <span className="text-secondary">Tournaments</span>
                    </h2>
                    <p className="text-sm text-muted-foreground">Don't miss these premium events</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 mb-8">
                  {featuredTournaments.map((tournament) => (
                    <TournamentCard
                      key={tournament.id}
                      tournament={tournament}
                      onRegister={handleRegister}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* All Tournaments */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-black text-foreground">
                  {selectedStatus === 'all' ? 'All' : statuses.find(s => s.value === selectedStatus)?.label} <span className="text-primary">Tournaments</span>
                </h2>
                <span className="text-sm text-muted-foreground">
                  {filteredTournaments.length} {filteredTournaments.length === 1 ? 'tournament' : 'tournaments'}
                </span>
              </div>

              {filteredTournaments.length > 0 ? (
                <div className="grid grid-cols-1 gap-6">
                  {filteredTournaments.map((tournament) => (
                    <TournamentCard
                      key={tournament.id}
                      tournament={tournament}
                      onRegister={handleRegister}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 glass-card rounded-2xl border border-primary/30">
                  <div className="w-20 h-20 rounded-full gradient-bg-blue border border-primary/50 flex items-center justify-center mx-auto mb-6">
                    <Trophy className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">No tournaments found</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Try adjusting your filters to see more tournaments
                  </p>
                  <button
                    onClick={handleResetFilters}
                    className="px-6 py-3 rounded-xl neon-button text-white font-semibold"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar - Right Side (1/3) */}
          <div className="lg:col-span-1 space-y-6">
            {/* Live Leaderboard */}
            {leaderboards['3'] && (
              <Leaderboard
                entries={leaderboards['3']}
                title="Live Leaderboard"
                compact={true}
              />
            )}

            {/* Quick Stats Widget */}
            <div className="glass-card rounded-2xl p-6 border border-primary/30">
              <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Tournament Stats
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-border/50">
                  <span className="text-sm text-muted-foreground">Total Teams</span>
                  <span className="text-lg font-black text-primary">
                    {tournaments.reduce((sum, t) => sum + t.registeredTeams, 0)}
                  </span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-border/50">
                  <span className="text-sm text-muted-foreground">Avg Prize Pool</span>
                  <span className="text-lg font-black text-accent">
                    ₹{Math.round(totalPrizePool / tournaments.length / 1000)}K
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Sports Covered</span>
                  <span className="text-lg font-black text-secondary">
                    {new Set(tournaments.map(t => t.sport)).size}
                  </span>
                </div>
              </div>
            </div>

            {/* Why Participate Widget */}
            <div className="glass-card rounded-2xl p-6 border border-accent/30 bg-gradient-to-br from-[#00ff88]/5 to-[#00f0ff]/5">
              <h3 className="text-lg font-bold text-foreground mb-4">Why Participate?</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg gradient-bg-green border border-accent/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Trophy className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-1">Win Big Prizes</h4>
                    <p className="text-xs text-muted-foreground">Compete for massive prize pools and rewards</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg gradient-bg-blue border border-primary/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-1">Build Reputation</h4>
                    <p className="text-xs text-muted-foreground">Establish your team as champions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg gradient-bg-purple border border-secondary/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-1">Network & Compete</h4>
                    <p className="text-xs text-muted-foreground">Connect with top players and teams</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}