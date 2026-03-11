import { Building2, Calendar, DollarSign, TrendingUp, Clock, Users, Settings, Plus, Edit, Eye, BarChart3 } from 'lucide-react';
import { useState } from 'react';

export function TurfOwnerPanelPage() {
  const [selectedTab, setSelectedTab] = useState<'overview' | 'turfs' | 'bookings' | 'revenue'>('overview');

  // Mock data
  const stats = [
    { label: 'My Turfs', value: '5', change: '+1 new', icon: Building2, color: 'from-[#00f0ff] to-[#0080ff]' },
    { label: 'Total Bookings', value: '847', change: '+15.3%', icon: Calendar, color: 'from-[#39ff14] to-[#00ff88]' },
    { label: 'Active Bookings', value: '23', change: 'Today', icon: Clock, color: 'from-[#b800ff] to-[#ff00ff]' },
    { label: 'Total Revenue', value: '₹8.4L', change: '+22.1%', icon: DollarSign, color: 'from-[#FFD700] to-[#FFA500]' },
  ];

  const myTurfs = [
    { 
      id: 1, 
      name: 'Elite Sports Arena', 
      location: 'Koramangala, Bangalore',
      type: 'Football',
      price: '₹1,500/hr',
      bookings: 234,
      revenue: '₹3.5L',
      rating: 4.8,
      status: 'Active'
    },
    { 
      id: 2, 
      name: 'Champions Ground', 
      location: 'Indiranagar, Bangalore',
      type: 'Cricket',
      price: '₹1,800/hr',
      bookings: 189,
      revenue: '₹2.9L',
      rating: 4.6,
      status: 'Active'
    },
    { 
      id: 3, 
      name: 'Victory Field', 
      location: 'Whitefield, Bangalore',
      type: 'Multi-Sport',
      price: '₹2,000/hr',
      bookings: 156,
      revenue: '₹2.0L',
      rating: 4.9,
      status: 'Maintenance'
    },
  ];

  const upcomingBookings = [
    { id: 1, user: 'Alex Johnson', turf: 'Elite Sports Arena', date: 'Mar 15, 2026', time: '6:00 PM - 7:00 PM', amount: '₹1,500', status: 'Confirmed' },
    { id: 2, user: 'Sarah Williams', turf: 'Champions Ground', date: 'Mar 15, 2026', time: '7:00 PM - 8:00 PM', amount: '₹1,800', status: 'Confirmed' },
    { id: 3, user: 'Mike Chen', turf: 'Elite Sports Arena', date: 'Mar 16, 2026', time: '8:00 AM - 9:00 AM', amount: '₹1,500', status: 'Pending' },
    { id: 4, user: 'Emma Davis', turf: 'Victory Field', date: 'Mar 16, 2026', time: '5:00 PM - 6:00 PM', amount: '₹2,000', status: 'Confirmed' },
  ];

  const revenueData = [
    { month: 'Oct', amount: 65000 },
    { month: 'Nov', amount: 72000 },
    { month: 'Dec', amount: 68000 },
    { month: 'Jan', amount: 78000 },
    { month: 'Feb', amount: 84000 },
    { month: 'Mar', amount: 90000 },
  ];

  const maxRevenue = Math.max(...revenueData.map(d => d.amount));

  return (
    <div className="min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Turf Owner Panel</h1>
            <p className="text-muted-foreground mt-2">Manage your turfs and track performance</p>
          </div>
          <button className="px-6 py-3 rounded-xl neon-button text-white font-semibold flex items-center gap-2">
            <Plus className="w-5 h-5" />
            Add New Turf
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="glass-card border border-primary/20 rounded-2xl p-6 hover-scale">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center neon-glow`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-[#39ff14] text-sm font-semibold">
                  {stat.change}
                </div>
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Navigation Tabs */}
        <div className="glass-card border border-primary/20 rounded-2xl p-2 mb-8">
          <div className="flex gap-2">
            {['overview', 'turfs', 'bookings', 'revenue'].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab as any)}
                className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all ${
                  selectedTab === tab
                    ? 'bg-primary/10 text-primary border border-primary/30'
                    : 'text-muted-foreground hover:bg-muted/50'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Overview Tab */}
        {selectedTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Quick Stats */}
            <div className="glass-card border border-primary/20 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-foreground mb-6">Today's Overview</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-xl glass-card border border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Bookings Today</p>
                      <p className="text-xl font-bold text-foreground">23</p>
                    </div>
                  </div>
                  <TrendingUp className="w-5 h-5 text-[#39ff14]" />
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl glass-card border border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Today's Revenue</p>
                      <p className="text-xl font-bold text-foreground">₹34,500</p>
                    </div>
                  </div>
                  <TrendingUp className="w-5 h-5 text-[#39ff14]" />
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl glass-card border border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#39ff14]/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-[#39ff14]" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">New Customers</p>
                      <p className="text-xl font-bold text-foreground">8</p>
                    </div>
                  </div>
                  <TrendingUp className="w-5 h-5 text-[#39ff14]" />
                </div>
              </div>
            </div>

            {/* Upcoming Bookings */}
            <div className="glass-card border border-primary/20 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-foreground">Upcoming Bookings</h2>
                <button className="text-primary hover:text-accent transition-colors text-sm">
                  View All
                </button>
              </div>
              <div className="space-y-3">
                {upcomingBookings.slice(0, 4).map((booking) => (
                  <div key={booking.id} className="p-4 rounded-xl glass-card border border-border hover-neon">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-semibold text-foreground">{booking.user}</p>
                        <p className="text-sm text-muted-foreground">{booking.turf}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        booking.status === 'Confirmed' ? 'bg-[#39ff14]/10 text-[#39ff14]' : 'bg-[#FFD700]/10 text-[#FFD700]'
                      }`}>
                        {booking.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{booking.date}</span>
                      <span>•</span>
                      <span>{booking.time}</span>
                      <span>•</span>
                      <span className="text-primary font-semibold">{booking.amount}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Turfs Tab */}
        {selectedTab === 'turfs' && (
          <div className="space-y-6">
            {myTurfs.map((turf) => (
              <div key={turf.id} className="glass-card border border-primary/20 rounded-2xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#00f0ff] to-[#b800ff] flex items-center justify-center neon-glow">
                      <Building2 className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">{turf.name}</h3>
                      <p className="text-muted-foreground mb-2">{turf.location}</p>
                      <div className="flex items-center gap-4">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                          {turf.type}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          turf.status === 'Active' ? 'bg-[#39ff14]/10 text-[#39ff14]' : 'bg-[#FFD700]/10 text-[#FFD700]'
                        }`}>
                          {turf.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-3 rounded-xl glass-card border border-border hover-neon">
                      <Eye className="w-5 h-5 text-primary" />
                    </button>
                    <button className="p-3 rounded-xl glass-card border border-border hover-neon">
                      <Edit className="w-5 h-5 text-accent" />
                    </button>
                    <button className="p-3 rounded-xl glass-card border border-border hover-neon">
                      <Settings className="w-5 h-5 text-muted-foreground" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-6 pt-6 border-t border-border">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Price per Hour</p>
                    <p className="text-lg font-bold text-foreground">{turf.price}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Total Bookings</p>
                    <p className="text-lg font-bold text-foreground">{turf.bookings}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Revenue Generated</p>
                    <p className="text-lg font-bold text-primary">{turf.revenue}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Rating</p>
                    <p className="text-lg font-bold text-foreground">⭐ {turf.rating}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bookings Tab */}
        {selectedTab === 'bookings' && (
          <div className="glass-card border border-primary/20 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-foreground">All Bookings</h2>
              <div className="flex gap-3">
                <select className="bg-input-background border border-border rounded-xl px-4 py-2 text-foreground">
                  <option>All Turfs</option>
                  <option>Elite Sports Arena</option>
                  <option>Champions Ground</option>
                  <option>Victory Field</option>
                </select>
                <select className="bg-input-background border border-border rounded-xl px-4 py-2 text-foreground">
                  <option>All Status</option>
                  <option>Confirmed</option>
                  <option>Pending</option>
                  <option>Cancelled</option>
                </select>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">Customer</th>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">Turf</th>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">Date</th>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">Time</th>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">Amount</th>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">Status</th>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {upcomingBookings.map((booking) => (
                    <tr key={booking.id} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00f0ff] to-[#b800ff] flex items-center justify-center">
                            <Users className="w-5 h-5 text-white" />
                          </div>
                          <span className="font-medium text-foreground">{booking.user}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-muted-foreground">{booking.turf}</td>
                      <td className="py-4 px-4 text-muted-foreground">{booking.date}</td>
                      <td className="py-4 px-4 text-muted-foreground">{booking.time}</td>
                      <td className="py-4 px-4 text-primary font-semibold">{booking.amount}</td>
                      <td className="py-4 px-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          booking.status === 'Confirmed' ? 'bg-[#39ff14]/10 text-[#39ff14]' : 'bg-[#FFD700]/10 text-[#FFD700]'
                        }`}>
                          {booking.status}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <button className="text-primary hover:text-accent transition-colors text-sm font-medium">
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Revenue Tab */}
        {selectedTab === 'revenue' && (
          <div className="space-y-8">
            {/* Revenue Chart */}
            <div className="glass-card border border-primary/20 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-foreground">Revenue Analytics</h2>
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <div className="h-64 flex items-end justify-between gap-4">
                {revenueData.map((data, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full relative group">
                      <div
                        className="w-full bg-gradient-to-t from-primary to-accent rounded-t-lg transition-all hover-scale cursor-pointer"
                        style={{ height: `${(data.amount / maxRevenue) * 200}px` }}
                      >
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background border border-primary rounded-lg px-2 py-1 text-xs whitespace-nowrap">
                          ₹{(data.amount / 1000).toFixed(1)}K
                        </div>
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">{data.month}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Revenue Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card border border-primary/20 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">This Month</p>
                    <p className="text-2xl font-bold text-foreground">₹90K</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[#39ff14] text-sm">
                  <TrendingUp className="w-4 h-4" />
                  <span>+7.1% from last month</span>
                </div>
              </div>

              <div className="glass-card border border-primary/20 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Average per Booking</p>
                    <p className="text-2xl font-bold text-foreground">₹1,650</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[#39ff14] text-sm">
                  <TrendingUp className="w-4 h-4" />
                  <span>+3.2% from last month</span>
                </div>
              </div>

              <div className="glass-card border border-primary/20 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#39ff14]/10 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-[#39ff14]" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Top Performing Turf</p>
                    <p className="text-lg font-bold text-foreground">Elite Sports</p>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  Generated ₹3.5L this month
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
