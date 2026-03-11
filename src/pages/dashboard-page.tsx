import { useState } from 'react';
import { Calendar, Clock, MapPin, CreditCard, Heart, TrendingUp, CheckCircle, XCircle, Star, MessageSquare, Edit, Trash2 } from 'lucide-react';
import { mockBookings, turfs } from '../utils/mockData/turfs';
import { TurfCard } from '../components/turf-card';
import { Link } from 'react-router';

export function DashboardPage() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past' | 'favorites' | 'reviews' | 'payments'>('upcoming');

  const upcomingBookings = mockBookings.filter((b) => b.status === 'upcoming');
  const pastBookings = mockBookings.filter((b) => b.status === 'completed');
  const favoriteTurfs = turfs.slice(0, 3);

  return (
    <div className="min-h-screen pb-16">
      {/* Header */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/10 via-[#b800ff]/10 to-[#00ff88]/10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            My <span className="text-secondary">Dashboard</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Manage your bookings and track your activity
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="glass-card rounded-2xl p-6 border border-primary/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Total Bookings</span>
              <Calendar className="w-5 h-5 text-primary" />
            </div>
            <p className="text-3xl font-black text-primary">12</p>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-accent/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Hours Played</span>
              <Clock className="w-5 h-5 text-accent" />
            </div>
            <p className="text-3xl font-black text-accent">24</p>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-secondary/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Total Spent</span>
              <CreditCard className="w-5 h-5 text-secondary" />
            </div>
            <p className="text-3xl font-black text-secondary">₹45k</p>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-primary/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Favorites</span>
              <Heart className="w-5 h-5 text-primary" />
            </div>
            <p className="text-3xl font-black text-primary">3</p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="glass-card rounded-2xl p-2 mb-8 border border-primary/30 inline-flex gap-2 flex-wrap">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
              activeTab === 'upcoming'
                ? 'neon-button text-white'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setActiveTab('past')}
            className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
              activeTab === 'past'
                ? 'neon-button text-white'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Past Bookings
          </button>
          <button
            onClick={() => setActiveTab('favorites')}
            className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
              activeTab === 'favorites'
                ? 'neon-button text-white'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Favorites
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
              activeTab === 'reviews'
                ? 'neon-button text-white'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            My Reviews
          </button>
          <button
            onClick={() => setActiveTab('payments')}
            className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
              activeTab === 'payments'
                ? 'neon-button text-white'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Payments
          </button>
        </div>

        {/* Tab Content */}
        <div>
          {/* Upcoming Bookings */}
          {activeTab === 'upcoming' && (
            <div className="space-y-4">
              {upcomingBookings.map((booking) => {
                const turf = turfs.find((t) => t.id === booking.turfId);
                return (
                  <div
                    key={booking.id}
                    className="glass-card rounded-2xl p-6 border border-primary/30 hover-neon"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Turf Image */}
                      <div className="w-full md:w-48 h-32 rounded-xl overflow-hidden flex-shrink-0">
                        <img
                          src={turf?.image}
                          alt={turf?.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Booking Details */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-foreground mb-1">
                              {booking.turfName}
                            </h3>
                            <p className="text-sm text-muted-foreground flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {turf?.location}
                            </p>
                          </div>
                          <div className="px-3 py-1 rounded-full glass-card border border-accent/50">
                            <span className="text-xs font-semibold text-accent flex items-center gap-1">
                              <CheckCircle className="w-3 h-3" />
                              Confirmed
                            </span>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-primary" />
                            <div>
                              <p className="text-xs text-muted-foreground">Date</p>
                              <p className="text-sm font-semibold text-foreground">{booking.date}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-primary" />
                            <div>
                              <p className="text-xs text-muted-foreground">Time</p>
                              <p className="text-sm font-semibold text-foreground">{booking.timeSlot}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <CreditCard className="w-4 h-4 text-primary" />
                            <div>
                              <p className="text-xs text-muted-foreground">Amount Paid</p>
                              <p className="text-sm font-semibold text-primary">₹{booking.totalPrice}</p>
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 flex gap-3">
                          <button className="px-6 py-2 rounded-xl glass-card border border-primary/30 text-primary font-semibold text-sm hover-neon">
                            View Details
                          </button>
                          <button className="px-6 py-2 rounded-xl glass-card border border-destructive/30 text-destructive font-semibold text-sm hover:border-destructive/60 transition-colors">
                            Cancel Booking
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Past Bookings */}
          {activeTab === 'past' && (
            <div className="space-y-4">
              {pastBookings.map((booking) => {
                const turf = turfs.find((t) => t.id === booking.turfId);
                return (
                  <div
                    key={booking.id}
                    className="glass-card rounded-2xl p-6 border border-border/30 opacity-75"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="w-full md:w-48 h-32 rounded-xl overflow-hidden flex-shrink-0">
                        <img
                          src={turf?.image}
                          alt={turf?.name}
                          className="w-full h-full object-cover grayscale"
                        />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-foreground mb-1">
                              {booking.turfName}
                            </h3>
                            <p className="text-sm text-muted-foreground">{turf?.location}</p>
                          </div>
                          <div className="px-3 py-1 rounded-full glass-card border border-muted/50">
                            <span className="text-xs font-semibold text-muted-foreground">
                              Completed
                            </span>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div>
                            <p className="text-xs text-muted-foreground">Date</p>
                            <p className="text-sm font-semibold text-foreground">{booking.date}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Time</p>
                            <p className="text-sm font-semibold text-foreground">{booking.timeSlot}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Amount Paid</p>
                            <p className="text-sm font-semibold text-foreground">₹{booking.totalPrice}</p>
                          </div>
                        </div>

                        <button className="px-6 py-2 rounded-xl neon-button-green text-white font-semibold text-sm">
                          Book Again
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Favorites */}
          {activeTab === 'favorites' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favoriteTurfs.map((turf) => (
                <div
                  key={turf.id}
                  className="glass-card rounded-2xl overflow-hidden border border-primary/30 hover-neon"
                >
                  <div className="relative h-48">
                    <img
                      src={turf.image}
                      alt={turf.name}
                      className="w-full h-full object-cover"
                    />
                    <button className="absolute top-3 right-3 w-10 h-10 rounded-full glass-card border border-destructive/50 flex items-center justify-center">
                      <Heart className="w-5 h-5 fill-destructive text-destructive" />
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg text-foreground mb-1">{turf.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {turf.location}
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-lg font-bold text-primary">₹{turf.price}</span>
                      <span className="text-xs text-muted-foreground">/hour</span>
                    </div>
                    <button className="w-full py-2.5 rounded-xl neon-button text-white font-semibold text-sm">
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Reviews */}
          {activeTab === 'reviews' && (
            <div className="space-y-4">
              <div className="glass-card rounded-2xl p-6 border border-primary/30">
                <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-primary" />
                  My Reviews
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Reviews you've submitted for turfs you've visited
                </p>
                
                <div className="space-y-4">
                  {/* Review 1 */}
                  <div className="glass-card border border-border rounded-xl p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Elite Sports Arena</h4>
                        <div className="flex items-center gap-1 mb-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
                          ))}
                        </div>
                        <p className="text-xs text-muted-foreground">Reviewed on March 10, 2026</p>
                      </div>
                      <div className="flex gap-2">
                        <button className="w-8 h-8 rounded-lg glass-card border border-border hover-neon flex items-center justify-center">
                          <Edit className="w-4 h-4 text-primary" />
                        </button>
                        <button className="w-8 h-8 rounded-lg glass-card border border-border hover:border-destructive/50 flex items-center justify-center">
                          <Trash2 className="w-4 h-4 text-muted-foreground hover:text-destructive" />
                        </button>
                      </div>
                    </div>
                    <p className="text-sm text-foreground">
                      Amazing facility! The turf quality is top-notch and the lighting is perfect for night games. Staff was very helpful and professional.
                    </p>
                  </div>

                  {/* Review 2 */}
                  <div className="glass-card border border-border rounded-xl p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Champions Ground</h4>
                        <div className="flex items-center gap-1 mb-2">
                          {[1, 2, 3, 4].map((star) => (
                            <Star key={star} className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
                          ))}
                          <Star className="w-4 h-4 text-muted-foreground" />
                        </div>
                        <p className="text-xs text-muted-foreground">Reviewed on March 5, 2026</p>
                      </div>
                      <div className="flex gap-2">
                        <button className="w-8 h-8 rounded-lg glass-card border border-border hover-neon flex items-center justify-center">
                          <Edit className="w-4 h-4 text-primary" />
                        </button>
                        <button className="w-8 h-8 rounded-lg glass-card border border-border hover:border-destructive/50 flex items-center justify-center">
                          <Trash2 className="w-4 h-4 text-muted-foreground hover:text-destructive" />
                        </button>
                      </div>
                    </div>
                    <p className="text-sm text-foreground">
                      Great place to play. Well maintained and staff is very helpful. Only issue is parking can be tight on weekends.
                    </p>
                  </div>

                  {/* Review 3 */}
                  <div className="glass-card border border-border rounded-xl p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Victory Field</h4>
                        <div className="flex items-center gap-1 mb-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
                          ))}
                        </div>
                        <p className="text-xs text-muted-foreground">Reviewed on February 28, 2026</p>
                      </div>
                      <div className="flex gap-2">
                        <button className="w-8 h-8 rounded-lg glass-card border border-border hover-neon flex items-center justify-center">
                          <Edit className="w-4 h-4 text-primary" />
                        </button>
                        <button className="w-8 h-8 rounded-lg glass-card border border-border hover:border-destructive/50 flex items-center justify-center">
                          <Trash2 className="w-4 h-4 text-muted-foreground hover:text-destructive" />
                        </button>
                      </div>
                    </div>
                    <p className="text-sm text-foreground">
                      Best turf in the city! Booking is easy and the facilities are clean. Highly recommend!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Payments */}
          {activeTab === 'payments' && (
            <div className="glass-card rounded-2xl p-6 border border-primary/30">
              <h3 className="text-xl font-bold text-foreground mb-6">Payment History</h3>
              <div className="space-y-4">
                {mockBookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="flex items-center justify-between p-4 rounded-xl glass-card border border-border/30"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full glass-card border border-accent/50 flex items-center justify-center">
                        <CreditCard className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{booking.turfName}</p>
                        <p className="text-sm text-muted-foreground">{booking.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-primary">₹{booking.totalPrice}</p>
                      <p className="text-xs text-muted-foreground">
                        {booking.status === 'completed' ? 'Completed' : 'Upcoming'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-xl glass-card border border-secondary/30">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Total Lifetime Spent</span>
                  <span className="text-2xl font-black text-secondary">₹45,500</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
