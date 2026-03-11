export interface Turf {
  id: string;
  name: string;
  location: string;
  price: number;
  rating: number;
  image: string;
  sport: string[];
  distance?: string;
  available: boolean;
  amenities: string[];
  description: string;
}

export interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
  price: number;
}

export interface Booking {
  id: string;
  turfId: string;
  turfName: string;
  date: string;
  timeSlot: string;
  duration: number;
  totalPrice: number;
  status: 'upcoming' | 'completed' | 'cancelled';
}

export const turfs: Turf[] = [
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
    description: 'Premium artificial turf with state-of-the-art lighting and facilities.'
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
    description: 'Professional-grade football turf perfect for competitive matches.'
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
    description: 'Multi-sport facility with premium amenities and excellent maintenance.'
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
    description: 'Indoor futsal court with climate control and modern facilities.'
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
    description: 'Professional cricket ground with practice facilities and coaching available.'
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
    description: 'Premium indoor badminton courts with professional-grade flooring.'
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
    description: 'Full-size basketball court with professional standards and lighting.'
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
    description: 'Professional tennis courts with coaching services and equipment rental.'
  }
];

export const timeSlots: TimeSlot[] = [
  { id: '1', time: '06:00 AM - 07:00 AM', available: true, price: 2000 },
  { id: '2', time: '07:00 AM - 08:00 AM', available: true, price: 2000 },
  { id: '3', time: '08:00 AM - 09:00 AM', available: false, price: 2500 },
  { id: '4', time: '09:00 AM - 10:00 AM', available: true, price: 2500 },
  { id: '5', time: '10:00 AM - 11:00 AM', available: true, price: 2500 },
  { id: '6', time: '11:00 AM - 12:00 PM', available: true, price: 2500 },
  { id: '7', time: '12:00 PM - 01:00 PM', available: false, price: 2500 },
  { id: '8', time: '01:00 PM - 02:00 PM', available: true, price: 2500 },
  { id: '9', time: '02:00 PM - 03:00 PM', available: true, price: 2500 },
  { id: '10', time: '03:00 PM - 04:00 PM', available: true, price: 2500 },
  { id: '11', time: '04:00 PM - 05:00 PM', available: true, price: 3000 },
  { id: '12', time: '05:00 PM - 06:00 PM', available: true, price: 3000 },
  { id: '13', time: '06:00 PM - 07:00 PM', available: false, price: 3500 },
  { id: '14', time: '07:00 PM - 08:00 PM', available: true, price: 3500 },
  { id: '15', time: '08:00 PM - 09:00 PM', available: true, price: 3500 },
  { id: '16', time: '09:00 PM - 10:00 PM', available: true, price: 3000 },
];

export const mockBookings: Booking[] = [
  {
    id: 'b1',
    turfId: '1',
    turfName: 'Elite Sports Arena',
    date: '2026-03-10',
    timeSlot: '07:00 PM - 08:00 PM',
    duration: 1,
    totalPrice: 3500,
    status: 'upcoming'
  },
  {
    id: 'b2',
    turfId: '3',
    turfName: 'Green Valley Sports Complex',
    date: '2026-03-12',
    timeSlot: '06:00 PM - 08:00 PM',
    duration: 2,
    totalPrice: 7000,
    status: 'upcoming'
  },
  {
    id: 'b3',
    turfId: '2',
    turfName: 'Champions Football Ground',
    date: '2026-03-01',
    timeSlot: '08:00 PM - 09:00 PM',
    duration: 1,
    totalPrice: 3500,
    status: 'completed'
  }
];
