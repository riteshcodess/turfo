import { useState } from 'react';
import { Users, Search, Filter, Plus, TrendingUp, UserPlus, Zap } from 'lucide-react';
import { PlayerCard } from '../components/player-card';
import { CreateMatchModal, MatchData } from '../components/create-match-modal';
import { players, SkillLevel } from '../utils/mockData/players';

export function MatchmakingPage() {
  const [selectedSport, setSelectedSport] = useState('All');
  const [selectedSkillLevel, setSelectedSkillLevel] = useState<string>('all');
  const [maxDistance, setMaxDistance] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const sports = ['All', 'Football', 'Cricket', 'Basketball', 'Badminton', 'Tennis'];
  const skillLevels = [
    { value: 'all', label: 'All Levels' },
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' },
    { value: 'professional', label: 'Professional' }
  ];

  const filteredPlayers = players.filter((player) => {
    // Sport filter
    if (selectedSport !== 'All' && !player.sport.includes(selectedSport)) {
      return false;
    }

    // Skill level filter
    if (selectedSkillLevel !== 'all' && player.skillLevel !== selectedSkillLevel) {
      return false;
    }

    // Distance filter
    const playerDistance = parseFloat(player.distance);
    if (playerDistance > maxDistance) {
      return false;
    }

    // Search filter
    if (searchQuery && !player.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !player.location.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }

    return true;
  });

  const handleJoinMatch = (playerId: string) => {
    const player = players.find(p => p.id === playerId);
    console.log('Joining match with:', player?.name);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleInvite = (playerId: string) => {
    const player = players.find(p => p.id === playerId);
    console.log('Inviting player:', player?.name);
  };

  const handleCreateMatch = (matchData: MatchData) => {
    console.log('Creating match:', matchData);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleResetFilters = () => {
    setSelectedSport('All');
    setSelectedSkillLevel('all');
    setMaxDistance(10);
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen pb-16">
      {/* Success Notification */}
      {showSuccess && (
        <div className="fixed top-24 right-4 z-50 animate-in slide-in-from-top-2 duration-300">
          <div className="glass-card rounded-2xl p-4 border border-accent/50 neon-border-green">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full gradient-bg-green border border-accent/50 flex items-center justify-center">
                <UserPlus className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">Success!</h4>
                <p className="text-xs text-muted-foreground">Request sent successfully</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative py-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/10 via-[#b800ff]/10 to-[#00ff88]/10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-2">
            <Users className="w-8 h-8 text-primary" />
            <h1 className="text-3xl md:text-4xl font-black text-foreground">
              Find <span className="text-primary">Players</span>
            </h1>
          </div>
          <p className="text-muted-foreground mb-6">
            Connect with players, join matches, and level up your game
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="glass-card rounded-xl p-4 border border-primary/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg gradient-bg-blue border border-primary/50 flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-black text-primary">{filteredPlayers.length}</div>
                  <div className="text-xs text-muted-foreground">Online Now</div>
                </div>
              </div>
            </div>
            <div className="glass-card rounded-xl p-4 border border-accent/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg gradient-bg-green border border-accent/50 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-black text-accent">
                    {filteredPlayers.filter(p => p.lookingForMatch).length}
                  </div>
                  <div className="text-xs text-muted-foreground">Looking Now</div>
                </div>
              </div>
            </div>
            <div className="glass-card rounded-xl p-4 border border-secondary/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg gradient-bg-purple border border-secondary/50 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="text-2xl font-black text-secondary">24</div>
                  <div className="text-xs text-muted-foreground">Active Matches</div>
                </div>
              </div>
            </div>
            <div className="glass-card rounded-xl p-4 border border-primary/30">
              <button
                onClick={() => setIsCreateModalOpen(true)}
                className="w-full h-full flex items-center justify-center gap-2 hover-scale"
              >
                <Plus className="w-5 h-5 text-primary" />
                <span className="text-sm font-bold text-primary">Create Match</span>
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
            <input
              type="text"
              placeholder="Search players by name or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-input-background border border-primary/30 rounded-2xl pl-12 pr-4 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors neon-border"
            />
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <div className="max-w-7xl mx-auto px-4 mb-6">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                    className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
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

            {/* Skill Level Filter */}
            <div>
              <label className="text-sm font-semibold text-foreground mb-3 block">
                Skill Level
              </label>
              <div className="grid grid-cols-2 gap-2">
                {skillLevels.map((level) => (
                  <button
                    key={level.value}
                    onClick={() => setSelectedSkillLevel(level.value)}
                    className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                      selectedSkillLevel === level.value
                        ? 'neon-button-purple text-white'
                        : 'glass-card border border-border text-foreground hover-neon'
                    }`}
                  >
                    {level.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Distance Filter */}
            <div>
              <label className="text-sm font-semibold text-foreground mb-3 block">
                Distance (km)
              </label>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Within {maxDistance} km</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  step="1"
                  value={maxDistance}
                  onChange={(e) => setMaxDistance(Number(e.target.value))}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #00ff88 0%, #00ff88 ${(maxDistance / 20) * 100}%, rgba(255,255,255,0.1) ${(maxDistance / 20) * 100}%, rgba(255,255,255,0.1) 100%)`
                  }}
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>1 km</span>
                  <span>20 km</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Create Match CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <div className="glass-card rounded-2xl p-6 border border-accent/30 bg-gradient-to-br from-[#00ff88]/10 to-[#00f0ff]/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl gradient-bg-green border border-accent/50 flex items-center justify-center">
                <Plus className="w-7 h-7 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  Can't find the right match?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Create your own game and let other players join you
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsCreateModalOpen(true)}
              className="px-6 py-3 rounded-xl neon-button-green text-white font-semibold flex items-center gap-2 hover-scale whitespace-nowrap"
            >
              <Plus className="w-5 h-5" />
              Create Match
            </button>
          </div>
        </div>
      </div>

      {/* Players Grid */}
      <div className="max-w-7xl mx-auto px-4">
        {filteredPlayers.length > 0 ? (
          <>
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing {filteredPlayers.length} {filteredPlayers.length === 1 ? 'player' : 'players'}
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs text-muted-foreground">Live updates</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPlayers.map((player) => (
                <PlayerCard
                  key={player.id}
                  player={player}
                  onJoinMatch={handleJoinMatch}
                  onInvite={handleInvite}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <div className="glass-card rounded-2xl p-12 border border-primary/30 max-w-md mx-auto">
              <div className="w-20 h-20 rounded-full gradient-bg-blue border border-primary/50 flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">No players found</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Try adjusting your filters or create your own match
              </p>
              <div className="flex gap-3">
                <button
                  onClick={handleResetFilters}
                  className="flex-1 px-6 py-3 rounded-xl glass-card border border-border text-foreground font-semibold hover-neon"
                >
                  Reset Filters
                </button>
                <button
                  onClick={() => setIsCreateModalOpen(true)}
                  className="flex-1 px-6 py-3 rounded-xl neon-button-green text-white font-semibold flex items-center justify-center gap-2"
                >
                  <Plus className="w-5 h-5" />
                  Create Match
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Create Match Modal */}
      <CreateMatchModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onCreate={handleCreateMatch}
      />
    </div>
  );
}
