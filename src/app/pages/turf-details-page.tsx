import { useParams, Link } from 'react-router';
import { MapPin, Star, Calendar, Clock, Users, Shield, Zap, Wifi, Car, Coffee, Camera, Heart, Share2, ChevronLeft, ChevronRight } from 'lucide-react';
import { turfs } from '../data/turfs';
import { useState } from 'react';

export function TurfDetailsPage() {
  const { turfId } = useParams();
  const turf = turfs.find(t => t.id === parseInt(turfId || '1'));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!turf) {
    return <div className="text-center py-20">Turf not found</div>;
  }

  const images = [turf.image, turf.image, turf.image]; // Mock multiple images
  const reviews = [
    { id: 1, name: 'Alex Johnson', rating: 5, comment: 'Amazing facility! The turf quality is top-notch and the lighting is perfect for night games.', date: '2 days ago', avatar: '👤' },
    { id: 2, name: 'Sarah Williams', rating: 4, comment: 'Great place to play. Well maintained and staff is very helpful. Only issue is parking can be tight on weekends.', date: '1 week ago', avatar: '👤' },
    { id: 3, name: 'Mike Chen', rating: 5, comment: 'Best turf in the city! Booking is easy and the facilities are clean. Highly recommend!', date: '2 weeks ago', avatar: '👤' },
  ];

  const amenities = [
    { icon: Wifi, label: 'Free WiFi' },
    { icon: Car, label: 'Parking' },
    { icon: Coffee, label: 'Cafeteria' },
    { icon: Shield, label: 'Security' },
    { icon: Camera, label: 'CCTV' },
    { icon: Zap, label: 'Floodlights' },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link to="/explore" className="inline-flex items-center gap-2 text-primary hover:text-accent mb-6 transition-colors">
          <ChevronLeft className="w-5 h-5" />
          Back to Explore
        </Link>

        {/* Image Gallery */}
        <div className="relative h-[500px] rounded-2xl overflow-hidden mb-8 glass-card border border-primary/30">
          <img
            src={images[currentImageIndex]}
            alt={turf.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          {/* Image Navigation */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-card border border-border hover-neon flex items-center justify-center"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-card border border-border hover-neon flex items-center justify-center"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full glass-card border border-border">
            <span className="text-sm text-foreground">{currentImageIndex + 1} / {images.length}</span>
          </div>

          {/* Action Buttons */}
          <div className="absolute top-4 right-4 flex gap-3">
            <button className="w-12 h-12 rounded-full glass-card border border-border hover-neon flex items-center justify-center">
              <Heart className="w-5 h-5 text-foreground" />
            </button>
            <button className="w-12 h-12 rounded-full glass-card border border-border hover-neon flex items-center justify-center">
              <Share2 className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div className="glass-card border border-primary/20 rounded-2xl p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-foreground mb-2">{turf.name}</h1>
                  <div className="flex items-center gap-2 text-muted-foreground mb-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>{turf.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 fill-[#FFD700] text-[#FFD700]" />
                      <span className="font-semibold text-foreground">{turf.rating}</span>
                    </div>
                    <span className="text-muted-foreground">(128 reviews)</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-primary mb-1">₹{turf.price}</div>
                  <div className="text-sm text-muted-foreground">per hour</div>
                </div>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Type</div>
                    <div className="font-semibold text-foreground">{turf.type}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Availability</div>
                    <div className="font-semibold text-foreground">Open Now</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#39ff14]/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[#39ff14]" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Hours</div>
                    <div className="font-semibold text-foreground">6 AM - 11 PM</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="glass-card border border-primary/20 rounded-2xl p-8">
              <h2 className="text-xl font-bold text-foreground mb-4">About This Turf</h2>
              <p className="text-muted-foreground leading-relaxed">
                Experience premium sports facility with state-of-the-art artificial turf, professional-grade lighting, and excellent drainage system. 
                Perfect for football, cricket, and other sports. Our facility is well-maintained and regularly cleaned to ensure the best playing experience. 
                Located in a convenient area with ample parking and modern amenities. Whether you're organizing a tournament or a casual game with friends, 
                this turf provides the perfect setting for all your sporting needs.
              </p>
            </div>

            {/* Amenities */}
            <div className="glass-card border border-primary/20 rounded-2xl p-8">
              <h2 className="text-xl font-bold text-foreground mb-6">Amenities</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-xl glass-card border border-border hover-neon">
                    <amenity.icon className="w-5 h-5 text-primary" />
                    <span className="text-foreground">{amenity.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="glass-card border border-primary/20 rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-foreground">Reviews</h2>
                <button className="text-primary hover:text-accent transition-colors">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {reviews.map((review) => (
                  <div key={review.id} className="p-6 rounded-xl glass-card border border-border">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00f0ff] to-[#b800ff] flex items-center justify-center text-2xl">
                          {review.avatar}
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">{review.name}</div>
                          <div className="text-sm text-muted-foreground">{review.date}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Booking Card */}
          <div className="lg:col-span-1">
            <div className="glass-card border border-primary/30 rounded-2xl p-6 sticky top-24">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-primary mb-1">₹{turf.price}</div>
                <div className="text-sm text-muted-foreground">per hour</div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Select Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="date"
                      className="w-full bg-input-background border border-border rounded-xl pl-10 pr-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Time Slot</label>
                  <select className="w-full bg-input-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors">
                    <option>6:00 AM - 7:00 AM</option>
                    <option>7:00 AM - 8:00 AM</option>
                    <option>8:00 AM - 9:00 AM</option>
                    <option>9:00 AM - 10:00 AM</option>
                    <option>10:00 AM - 11:00 AM</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Duration</label>
                  <select className="w-full bg-input-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors">
                    <option>1 Hour</option>
                    <option>2 Hours</option>
                    <option>3 Hours</option>
                  </select>
                </div>
              </div>

              <Link
                to={`/booking/${turf.id}`}
                className="w-full py-3 rounded-xl neon-button text-white font-semibold text-center flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Book Now
              </Link>

              <div className="mt-6 pt-6 border-t border-border space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">₹{turf.price} × 1 hour</span>
                  <span className="text-foreground">₹{turf.price}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Service fee</span>
                  <span className="text-foreground">₹50</span>
                </div>
                <div className="flex items-center justify-between font-semibold pt-3 border-t border-border">
                  <span className="text-foreground">Total</span>
                  <span className="text-primary text-lg">₹{turf.price + 50}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
