import { X, Users, MapPin, Clock, Calendar, Info } from 'lucide-react';
import { useState } from 'react';

interface CreateMatchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (matchData: MatchData) => void;
}

export interface MatchData {
  sport: string;
  skillLevel: string;
  teamSize: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

export function CreateMatchModal({ isOpen, onClose, onCreate }: CreateMatchModalProps) {
  const [formData, setFormData] = useState<MatchData>({
    sport: 'Football',
    skillLevel: 'intermediate',
    teamSize: '5v5',
    date: '',
    time: '',
    location: '',
    description: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreate(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-card rounded-3xl border border-primary/30 neon-border">
        {/* Header */}
        <div className="sticky top-0 bg-background/95 backdrop-blur-md p-6 border-b border-border/50 flex items-center justify-between z-10">
          <div>
            <h2 className="text-2xl font-black text-foreground">
              Create <span className="text-primary">Match</span>
            </h2>
            <p className="text-sm text-muted-foreground mt-1">Set up a new game and invite players</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-xl glass-card border border-border hover-neon flex items-center justify-center"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Sport Selection */}
          <div>
            <label className="text-sm font-semibold text-foreground mb-3 block">
              Sport Type
            </label>
            <div className="grid grid-cols-3 gap-3">
              {['Football', 'Cricket', 'Basketball', 'Badminton', 'Tennis'].map((sport) => (
                <button
                  key={sport}
                  type="button"
                  onClick={() => setFormData({ ...formData, sport })}
                  className={`py-3 rounded-xl text-sm font-semibold transition-all ${
                    formData.sport === sport
                      ? 'neon-button text-white'
                      : 'glass-card border border-border text-foreground hover-neon'
                  }`}
                >
                  {sport}
                </button>
              ))}
            </div>
          </div>

          {/* Skill Level */}
          <div>
            <label className="text-sm font-semibold text-foreground mb-3 block">
              Skill Level
            </label>
            <div className="grid grid-cols-4 gap-3">
              {['beginner', 'intermediate', 'advanced', 'professional'].map((level) => (
                <button
                  key={level}
                  type="button"
                  onClick={() => setFormData({ ...formData, skillLevel: level })}
                  className={`py-2.5 rounded-xl text-xs font-semibold transition-all capitalize ${
                    formData.skillLevel === level
                      ? 'neon-button-purple text-white'
                      : 'glass-card border border-border text-foreground hover-neon'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* Team Size */}
          <div>
            <label className="text-sm font-semibold text-foreground mb-3 block flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              Team Size
            </label>
            <input
              type="text"
              placeholder="e.g., 5v5, 7v7, Singles, Doubles"
              value={formData.teamSize}
              onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
              className="w-full bg-input-background border border-primary/30 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              required
            />
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold text-foreground mb-3 block flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                Date
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full bg-input-background border border-primary/30 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground mb-3 block flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                Time
              </label>
              <input
                type="time"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full bg-input-background border border-primary/30 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="text-sm font-semibold text-foreground mb-3 block flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              Location
            </label>
            <input
              type="text"
              placeholder="Enter turf or location name"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full bg-input-background border border-primary/30 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-sm font-semibold text-foreground mb-3 block flex items-center gap-2">
              <Info className="w-4 h-4 text-primary" />
              Description (Optional)
            </label>
            <textarea
              placeholder="Add any additional details about the match..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={4}
              className="w-full bg-input-background border border-primary/30 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 rounded-xl glass-card border border-border text-foreground font-semibold hover-neon"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-3 rounded-xl neon-button-green text-white font-semibold flex items-center justify-center gap-2 hover-scale"
            >
              <Users className="w-5 h-5" />
              Create Match
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}