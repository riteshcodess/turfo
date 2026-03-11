export type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'professional';
export type PlayTime = 'morning' | 'afternoon' | 'evening' | 'night' | 'flexible';

export interface Player {
  id: string;
  name: string;
  avatar: string;
  sport: string[];
  skillLevel: SkillLevel;
  preferredTime: PlayTime[];
  location: string;
  distance: string;
  bio: string;
  matchesPlayed: number;
  rating: number;
  lookingForMatch: boolean;
  teamSize?: string;
  availability: string;
}

export const players: Player[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
    sport: ['Football', 'Cricket'],
    skillLevel: 'advanced',
    preferredTime: ['evening', 'night'],
    location: 'Downtown, Central District',
    distance: '1.2 km',
    bio: 'Passionate football player, looking for competitive matches',
    matchesPlayed: 87,
    rating: 4.8,
    lookingForMatch: true,
    teamSize: '5v5',
    availability: 'Today, 6:00 PM'
  },
  {
    id: '2',
    name: 'Priya Sharma',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    sport: ['Badminton', 'Tennis'],
    skillLevel: 'intermediate',
    preferredTime: ['morning', 'evening'],
    location: 'North Plaza, Sector 12',
    distance: '2.5 km',
    bio: 'Love badminton doubles, play regularly on weekends',
    matchesPlayed: 52,
    rating: 4.6,
    lookingForMatch: true,
    teamSize: 'Doubles',
    availability: 'Tomorrow, 7:00 AM'
  },
  {
    id: '3',
    name: 'Arjun Mehta',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    sport: ['Football'],
    skillLevel: 'professional',
    preferredTime: ['afternoon', 'evening'],
    location: 'West End, Block A',
    distance: '3.0 km',
    bio: 'Ex-club player, coaching available',
    matchesPlayed: 156,
    rating: 4.9,
    lookingForMatch: true,
    teamSize: '7v7',
    availability: 'Today, 4:00 PM'
  },
  {
    id: '4',
    name: 'Sneha Patel',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    sport: ['Basketball', 'Badminton'],
    skillLevel: 'intermediate',
    preferredTime: ['morning', 'afternoon'],
    location: 'East Side, Mall Road',
    distance: '4.1 km',
    bio: 'Basketball enthusiast, love team games',
    matchesPlayed: 64,
    rating: 4.5,
    lookingForMatch: true,
    teamSize: '3v3',
    availability: 'Today, 2:00 PM'
  },
  {
    id: '5',
    name: 'Vikram Singh',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    sport: ['Cricket'],
    skillLevel: 'advanced',
    preferredTime: ['afternoon', 'evening', 'night'],
    location: 'South Bay, Cricket Avenue',
    distance: '2.8 km',
    bio: 'All-rounder, looking for weekend matches',
    matchesPlayed: 98,
    rating: 4.7,
    lookingForMatch: true,
    teamSize: '11v11',
    availability: 'Weekend, Flexible'
  },
  {
    id: '6',
    name: 'Anjali Desai',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
    sport: ['Tennis', 'Badminton'],
    skillLevel: 'beginner',
    preferredTime: ['morning', 'evening'],
    location: 'Garden District, Tennis Lane',
    distance: '3.5 km',
    bio: 'New to tennis, looking to improve with regular practice',
    matchesPlayed: 18,
    rating: 4.2,
    lookingForMatch: true,
    teamSize: 'Singles',
    availability: 'Tomorrow, 6:00 AM'
  },
  {
    id: '7',
    name: 'Rohit Verma',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    sport: ['Football', 'Basketball'],
    skillLevel: 'intermediate',
    preferredTime: ['evening', 'night'],
    location: 'Downtown Sports Hub',
    distance: '1.8 km',
    bio: 'Casual player, enjoy friendly matches',
    matchesPlayed: 43,
    rating: 4.4,
    lookingForMatch: true,
    teamSize: '5v5',
    availability: 'Today, 7:00 PM'
  },
  {
    id: '8',
    name: 'Kavya Reddy',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
    sport: ['Badminton'],
    skillLevel: 'advanced',
    preferredTime: ['morning', 'afternoon'],
    location: 'Central Park, Level 2',
    distance: '2.2 km',
    bio: 'Former state level player, competitive matches only',
    matchesPlayed: 112,
    rating: 4.9,
    lookingForMatch: true,
    teamSize: 'Singles',
    availability: 'Tomorrow, 8:00 AM'
  },
  {
    id: '9',
    name: 'Aditya Joshi',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
    sport: ['Cricket', 'Football'],
    skillLevel: 'beginner',
    preferredTime: ['afternoon', 'evening'],
    location: 'Northwest Avenue',
    distance: '4.5 km',
    bio: 'Learning the game, friendly players welcome',
    matchesPlayed: 12,
    rating: 4.0,
    lookingForMatch: true,
    teamSize: '7v7',
    availability: 'Weekend, Flexible'
  },
  {
    id: '10',
    name: 'Meera Iyer',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop',
    sport: ['Tennis'],
    skillLevel: 'intermediate',
    preferredTime: ['morning', 'flexible'],
    location: 'Riverside District',
    distance: '3.8 km',
    bio: 'Tennis coach, available for practice sessions',
    matchesPlayed: 78,
    rating: 4.7,
    lookingForMatch: true,
    teamSize: 'Singles',
    availability: 'Daily, Morning'
  },
  {
    id: '11',
    name: 'Karthik Nair',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop',
    sport: ['Football', 'Basketball'],
    skillLevel: 'advanced',
    preferredTime: ['evening', 'night'],
    location: 'Downtown, Central District',
    distance: '1.5 km',
    bio: 'Love fast-paced games, very competitive',
    matchesPlayed: 94,
    rating: 4.8,
    lookingForMatch: true,
    teamSize: '5v5',
    availability: 'Today, 8:00 PM'
  },
  {
    id: '12',
    name: 'Divya Gupta',
    avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop',
    sport: ['Badminton', 'Tennis'],
    skillLevel: 'professional',
    preferredTime: ['morning', 'afternoon', 'evening'],
    location: 'North Plaza, Sector 12',
    distance: '2.0 km',
    bio: 'Professional player, training sessions available',
    matchesPlayed: 203,
    rating: 5.0,
    lookingForMatch: true,
    teamSize: 'Singles/Doubles',
    availability: 'Daily, Flexible'
  }
];
