import { Turf } from './turfs';

export type AvailabilityStatus = 'available' | 'limited' | 'booked';

export interface MapTurf extends Turf {
  coordinates: {
    x: number; // percentage from left
    y: number; // percentage from top
  };
  availabilityStatus: AvailabilityStatus;
  availableSlots: number;
  totalSlots: number;
}

export const mapTurfs: MapTurf[] = [
  {
    id: '1',
    name: 'Elite Sports Arena',
    location: 'Downtown, Central District',
    price: 2500,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1676746424139-77f8bd8922a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBmaWVsZCUyMG5pZ2h0JTIwc3RhZGl1bXxlbnwxfHx8fDE3NzI5Njk0OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    sport: ['Football', 'Cricket'],
    distance: '2.5 km',
    available: true,
    amenities: ['Floodlights', 'Parking', 'Changing Rooms', 'Cafeteria'],
    description: 'Premium artificial turf with state-of-the-art lighting and facilities.',
    coordinates: { x: 45, y: 35 },
    availabilityStatus: 'available',
    availableSlots: 8,
    totalSlots: 12
  },
  {
    id: '2',
    name: 'Champions Football Ground',
    location: 'West End, Block A',
    price: 2000,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1761225091881-0d3bda9f6d5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHBpdGNoJTIwZmxvb2RsaWdodHN8ZW58MXx8fHwxNzcyOTY5NDk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    sport: ['Football'],
    distance: '3.2 km',
    available: true,
    amenities: ['Floodlights', 'Parking', 'Changing Rooms'],
    description: 'Professional-grade football turf perfect for competitive matches.',
    coordinates: { x: 25, y: 50 },
    availabilityStatus: 'limited',
    availableSlots: 3,
    totalSlots: 12
  },
  {
    id: '3',
    name: 'Green Valley Sports Complex',
    location: 'North Plaza, Sector 12',
    price: 3000,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1772441257992-918b1adf0c0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwdHVyZiUyMHNvY2NlciUyMGZpZWxkfGVufDF8fHx8MTc3Mjk2OTQ5N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    sport: ['Football', 'Cricket', 'Basketball'],
    distance: '1.8 km',
    available: true,
    amenities: ['Floodlights', 'Parking', 'Changing Rooms', 'Cafeteria', 'First Aid'],
    description: 'Multi-sport facility with premium amenities and excellent maintenance.',
    coordinates: { x: 55, y: 20 },
    availabilityStatus: 'available',
    availableSlots: 10,
    totalSlots: 12
  },
  {
    id: '4',
    name: 'Urban Futsal Arena',
    location: 'East Side, Mall Road',
    price: 1800,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1760174053338-4def27153cb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXRzYWwlMjBjb3VydCUyMGluZG9vcnxlbnwxfHx8fDE3NzI5MjY5NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    sport: ['Football'],
    distance: '4.1 km',
    available: true,
    amenities: ['Indoor', 'Parking', 'Changing Rooms', 'Air Conditioned'],
    description: 'Indoor futsal court with climate control and modern facilities.',
    coordinates: { x: 70, y: 45 },
    availabilityStatus: 'booked',
    availableSlots: 0,
    totalSlots: 12
  },
  {
    id: '5',
    name: 'Cricket Legends Ground',
    location: 'South Bay, Cricket Avenue',
    price: 2800,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1771909713995-d793a0c93660?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwZ3JvdW5kJTIwc3RhZGl1bXxlbnwxfHx8fDE3NzI5NjY0OTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    sport: ['Cricket'],
    distance: '5.5 km',
    available: true,
    amenities: ['Floodlights', 'Parking', 'Changing Rooms', 'Practice Nets', 'Coaching'],
    description: 'Professional cricket ground with practice facilities and coaching available.',
    coordinates: { x: 35, y: 70 },
    availabilityStatus: 'available',
    availableSlots: 7,
    totalSlots: 10
  },
  {
    id: '6',
    name: 'Badminton Excellence Center',
    location: 'Central Park, Level 2',
    price: 800,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1624024834874-2a1611305604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvb3IlMjBiYWRtaW50b24lMjBjb3VydHxlbnwxfHx8fDE3NzI5Njk0OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    sport: ['Badminton'],
    distance: '2.0 km',
    available: true,
    amenities: ['Indoor', 'Air Conditioned', 'Professional Courts', 'Equipment Rental'],
    description: 'Premium indoor badminton courts with professional-grade flooring.',
    coordinates: { x: 50, y: 55 },
    availabilityStatus: 'limited',
    availableSlots: 2,
    totalSlots: 8
  },
  {
    id: '7',
    name: 'Hoops Basketball Court',
    location: 'Downtown Sports Hub',
    price: 1500,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1741940513798-4ce04b95ffda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwY291cnQlMjBpbmRvb3IlMjBsaWdodGluZ3xlbnwxfHx8fDE3NzI5Njk0OTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    sport: ['Basketball'],
    distance: '3.0 km',
    available: true,
    amenities: ['Indoor', 'Air Conditioned', 'Professional Court', 'Locker Rooms'],
    description: 'Full-size basketball court with professional standards and lighting.',
    coordinates: { x: 65, y: 30 },
    availabilityStatus: 'available',
    availableSlots: 6,
    totalSlots: 10
  },
  {
    id: '8',
    name: 'Tennis Pro Academy',
    location: 'Garden District, Tennis Lane',
    price: 1200,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1764439063840-a03b75a477f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjBjb3VydCUyMG91dGRvb3IlMjB2aWV3fGVufDF8fHx8MTc3Mjk2OTQ5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    sport: ['Tennis'],
    distance: '4.5 km',
    available: true,
    amenities: ['Outdoor', 'Floodlights', 'Coaching Available', 'Equipment Rental'],
    description: 'Professional tennis courts with coaching services and equipment rental.',
    coordinates: { x: 40, y: 60 },
    availabilityStatus: 'limited',
    availableSlots: 4,
    totalSlots: 12
  },
  {
    id: '9',
    name: 'Victory Sports Ground',
    location: 'Northwest Avenue',
    price: 2200,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1676746424139-77f8bd8922a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBmaWVsZCUyMG5pZ2h0JTIwc3RhZGl1bXxlbnwxfHx8fDE3NzI5Njk0OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    sport: ['Football', 'Cricket'],
    distance: '3.8 km',
    available: true,
    amenities: ['Floodlights', 'Parking', 'Changing Rooms'],
    description: 'Well-maintained sports ground with excellent facilities.',
    coordinates: { x: 30, y: 25 },
    availabilityStatus: 'booked',
    availableSlots: 0,
    totalSlots: 12
  },
  {
    id: '10',
    name: 'Ace Tennis Courts',
    location: 'Riverside District',
    price: 1000,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1764439063840-a03b75a477f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjBjb3VydCUyMG91dGRvb3IlMjB2aWV3fGVufDF8fHx8MTc3Mjk2OTQ5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    sport: ['Tennis'],
    distance: '2.8 km',
    available: true,
    amenities: ['Outdoor', 'Floodlights', 'Equipment Rental'],
    description: 'Quality tennis courts with good lighting and equipment.',
    coordinates: { x: 60, y: 65 },
    availabilityStatus: 'available',
    availableSlots: 9,
    totalSlots: 12
  }
];
