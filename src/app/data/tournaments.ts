export type TournamentStatus = 'upcoming' | 'ongoing' | 'completed' | 'registration';

export interface Tournament {
  id: string;
  name: string;
  sport: string;
  location: string;
  venue: string;
  prizePool: number;
  registeredTeams: number;
  maxTeams: number;
  startDate: string;
  endDate: string;
  registrationDeadline: string;
  status: TournamentStatus;
  format: string;
  entryFee: number;
  organizer: string;
  description: string;
  image: string;
  rules: string[];
  featured: boolean;
}

export interface LeaderboardEntry {
  rank: number;
  teamName: string;
  logo: string;
  wins: number;
  losses: number;
  points: number;
  goalsScored?: number;
  goalsConceded?: number;
}

export const tournaments: Tournament[] = [
  {
    id: '1',
    name: 'Cyber Cup 2026',
    sport: 'Football',
    location: 'Downtown, Central District',
    venue: 'Elite Sports Arena',
    prizePool: 100000,
    registeredTeams: 12,
    maxTeams: 16,
    startDate: '2026-03-15',
    endDate: '2026-03-20',
    registrationDeadline: '2026-03-12',
    status: 'registration',
    format: '5v5 Knockout',
    entryFee: 5000,
    organizer: 'Turfo Sports',
    description: 'The ultimate 5v5 football championship with massive prizes and glory',
    image: 'https://images.unsplash.com/photo-1676746424139-77f8bd8922a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBmaWVsZCUyMG5pZ2h0JTIwc3RhZGl1bXxlbnwxfHx8fDE3NzI5Njk0OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rules: ['5 players per team', 'Knockout format', 'Professional referee', 'Standard FIFA rules'],
    featured: true
  },
  {
    id: '2',
    name: 'Neon Cricket Championship',
    sport: 'Cricket',
    location: 'South Bay, Cricket Avenue',
    venue: 'Cricket Legends Ground',
    prizePool: 150000,
    registeredTeams: 6,
    maxTeams: 8,
    startDate: '2026-03-18',
    endDate: '2026-03-25',
    registrationDeadline: '2026-03-14',
    status: 'registration',
    format: '11v11 League + Knockout',
    entryFee: 8000,
    organizer: 'Cricket Masters',
    description: 'Premier cricket tournament with T20 format and international standards',
    image: 'https://images.unsplash.com/photo-1771909713995-d793a0c93660?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwZ3JvdW5kJTIwc3RhZGl1bXxlbnwxfHx8fDE3NzI5NjY0OTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rules: ['11 players per team', 'T20 format', '20 overs per side', 'ICC standard rules'],
    featured: true
  },
  {
    id: '3',
    name: 'Badminton Battle Royale',
    sport: 'Badminton',
    location: 'Central Park, Level 2',
    venue: 'Badminton Excellence Center',
    prizePool: 50000,
    registeredTeams: 20,
    maxTeams: 32,
    startDate: '2026-03-10',
    endDate: '2026-03-12',
    registrationDeadline: '2026-03-08',
    status: 'ongoing',
    format: 'Singles Knockout',
    entryFee: 1500,
    organizer: 'Badminton Pro League',
    description: 'Fast-paced singles badminton tournament for all skill levels',
    image: 'https://images.unsplash.com/photo-1624024834874-2a1611305604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvb3IlMjBiYWRtaW50b24lMjBjb3VydHxlbnwxfHx8fDE3NzI5Njk0OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rules: ['Singles format', 'Best of 3 games', '21 points per game', 'BWF rules apply'],
    featured: false
  },
  {
    id: '4',
    name: 'Hoops Championship 2026',
    sport: 'Basketball',
    location: 'Downtown Sports Hub',
    venue: 'Hoops Basketball Court',
    prizePool: 80000,
    registeredTeams: 8,
    maxTeams: 12,
    startDate: '2026-03-22',
    endDate: '2026-03-28',
    registrationDeadline: '2026-03-18',
    status: 'registration',
    format: '3v3 Streetball',
    entryFee: 4000,
    organizer: 'Urban Hoops League',
    description: '3v3 basketball tournament with streetball rules and massive prizes',
    image: 'https://images.unsplash.com/photo-1741940513798-4ce04b95ffda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwY291cnQlMjBpbmRvb3IlMjBsaWdodGluZ3xlbnwxfHx8fDE3NzI5Njk0OTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rules: ['3 players per team', '12-minute halves', 'Streetball scoring', 'FIBA 3x3 rules'],
    featured: true
  },
  {
    id: '5',
    name: 'Tennis Open Series',
    sport: 'Tennis',
    location: 'Garden District, Tennis Lane',
    venue: 'Tennis Pro Academy',
    prizePool: 60000,
    registeredTeams: 16,
    maxTeams: 32,
    startDate: '2026-03-25',
    endDate: '2026-03-30',
    registrationDeadline: '2026-03-20',
    status: 'upcoming',
    format: 'Singles & Doubles',
    entryFee: 2000,
    organizer: 'Tennis Federation',
    description: 'Professional tennis tournament with both singles and doubles categories',
    image: 'https://images.unsplash.com/photo-1764439063840-a03b75a477f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjBjb3VydCUyMG91dGRvb3IlMjB2aWV3fGVufDF8fHx8MTc3Mjk2OTQ5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    rules: ['Singles & Doubles', 'Best of 3 sets', 'Standard ATP rules', 'Professional umpire'],
    featured: false
  },
  {
    id: '6',
    name: 'Futsal Premier League',
    sport: 'Football',
    location: 'East Side, Mall Road',
    venue: 'Urban Futsal Arena',
    prizePool: 75000,
    registeredTeams: 10,
    maxTeams: 10,
    startDate: '2026-04-01',
    endDate: '2026-04-15',
    registrationDeadline: '2026-03-25',
    status: 'upcoming',
    format: 'Round Robin + Playoffs',
    entryFee: 6000,
    organizer: 'Futsal League India',
    description: 'Indoor futsal league with round-robin format and playoffs',
    image: 'https://images.unsplash.com/photo-1760174053338-4def27153cb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXRzYWwlMjBjb3VydCUyMGluZG9vcnxlbnwxfHx8fDE3NzI5MjY5NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rules: ['5 players per team', 'FIFA Futsal rules', 'Indoor court', '40-minute matches'],
    featured: true
  }
];

export const leaderboards: Record<string, LeaderboardEntry[]> = {
  '3': [
    {
      rank: 1,
      teamName: 'Thunder Smashers',
      logo: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=100&h=100&fit=crop',
      wins: 8,
      losses: 0,
      points: 24
    },
    {
      rank: 2,
      teamName: 'Neon Warriors',
      logo: 'https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?w=100&h=100&fit=crop',
      wins: 6,
      losses: 2,
      points: 18
    },
    {
      rank: 3,
      teamName: 'Cyber Shuttlers',
      logo: 'https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=100&h=100&fit=crop',
      wins: 5,
      losses: 3,
      points: 15
    },
    {
      rank: 4,
      teamName: 'Volt Strikers',
      logo: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=100&h=100&fit=crop',
      wins: 4,
      losses: 4,
      points: 12
    },
    {
      rank: 5,
      teamName: 'Digital Aces',
      logo: 'https://images.unsplash.com/photo-1614680376417-4c7c59e6b4d0?w=100&h=100&fit=crop',
      wins: 2,
      losses: 6,
      points: 6
    }
  ]
};
