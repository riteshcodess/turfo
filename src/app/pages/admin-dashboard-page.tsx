import { Users, Building2, Calendar, DollarSign, TrendingUp, Activity, UserCheck, AlertCircle, Eye, Trash2, Edit } from 'lucide-react';
import { useState } from 'react';
import { LineChart, Line, BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export function AdminDashboardPage() {
  const [selectedTab, setSelectedTab] = useState<'overview' | 'users' | 'turfs' | 'bookings'>('overview');

  // Mock data
  const stats = [
    { label: 'Total Users', value: '12,543', change: '+12.5%', icon: Users, color: 'from-[#00f0ff] to-[#0080ff]' },
    { label: 'Active Turfs', value: '248', change: '+8.2%', icon: Building2, color: 'from-[#39ff14] to-[#00ff88]' },
    { label: 'Total Bookings', value: '3,847', change: '+23.1%', icon: Calendar, color: 'from-[#b800ff] to-[#ff00ff]' },
    { label: 'Revenue', value: '₹45.2L', change: '+18.4%', icon: DollarSign, color: 'from-[#FFD700] to-[#FFA500]' },
  ];

  // Analytics Chart Data
  const bookingsData = [
    { day: 'Mon', bookings: 45, revenue: 67500 },
    { day: 'Tue', bookings: 52, revenue: 78000 },
    { day: 'Wed', bookings: 38, revenue: 57000 },
    { day: 'Thu', bookings: 65, revenue: 97500 },
    { day: 'Fri', bookings: 75, revenue: 112500 },
    { day: 'Sat', bookings: 92, revenue: 138000 },
    { day: 'Sun', bookings: 88, revenue: 132000 },
  ];

  const revenueData = [
    { month: 'Jan', revenue: 320000 },
    { month: 'Feb', revenue: 380000 },
    { month: 'Mar', revenue: 420000 },
    { month: 'Apr', revenue: 450000 },
    { month: 'May', revenue: 490000 },
    { month: 'Jun', revenue: 520000 },
  ];

  const usersData = [
    { month: 'Jan', active: 8200, inactive: 1200 },
    { month: 'Feb', active: 8800, inactive: 1300 },
    { month: 'Mar', active: 9500, inactive: 1400 },
    { month: 'Apr', active: 10200, inactive: 1350 },
    { month: 'May', active: 11000, inactive: 1500 },
    { month: 'Jun', active: 12000, inactive: 1543 },
  ];

  const recentUsers = [
    { id: 1, name: 'Alex Johnson', email: 'alex@example.com', joined: '2 hours ago', status: 'Active' },
    { id: 2, name: 'Sarah Williams', email: 'sarah@example.com', joined: '5 hours ago', status: 'Active' },
    { id: 3, name: 'Mike Chen', email: 'mike@example.com', joined: '1 day ago', status: 'Inactive' },
    { id: 4, name: 'Emma Davis', email: 'emma@example.com', joined: '2 days ago', status: 'Active' },
  ];

  const recentTurfs = [
    { id: 1, name: 'Elite Sports Arena', owner: 'John Doe', location: 'Koramangala', status: 'Approved', revenue: '₹125K' },
    { id: 2, name: 'Champions Ground', owner: 'Jane Smith', location: 'Indiranagar', status: 'Pending', revenue: '₹98K' },
    { id: 3, name: 'Victory Field', owner: 'Bob Wilson', location: 'Whitefield', status: 'Approved', revenue: '₹156K' },
  ];

  const recentBookings = [
    { id: 1, user: 'Alex Johnson', turf: 'Elite Sports Arena', date: 'Mar 15, 2026', time: '6:00 PM', amount: '₹1,500', status: 'Confirmed' },
    { id: 2, user: 'Sarah Williams', turf: 'Champions Ground', date: 'Mar 16, 2026', time: '7:00 PM', amount: '₹1,800', status: 'Pending' },
    { id: 3, user: 'Mike Chen', turf: 'Victory Field', date: 'Mar 17, 2026', time: '8:00 PM', amount: '₹2,000', status: 'Confirmed' },
  ];

  return (
    <div className="min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
          <p className="text-muted-foreground mt-2">Manage your platform and monitor performance</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="glass-card border border-primary/20 rounded-2xl p-6 hover-scale">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center neon-glow`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center gap-1 text-[#39ff14] text-sm">
                  <TrendingUp className="w-4 h-4" />
                  <span>{stat.change}</span>
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
            {['overview', 'users', 'turfs', 'bookings'].map((tab) => (
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
          <div className="space-y-8">
            {/* Analytics Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Bookings Per Day */}
              <div className="glass-card border border-primary/20 rounded-2xl p-6">
                <h2 className="text-xl font-bold text-foreground mb-6">Bookings Per Day</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={bookingsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                    <XAxis dataKey="day" stroke="#a1a1aa" />
                    <YAxis stroke="#a1a1aa" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1a1a24', 
                        border: '1px solid #00f0ff33',
                        borderRadius: '12px',
                        color: '#ffffff'
                      }}
                    />
                    <Bar dataKey="bookings" fill="#00f0ff" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Revenue Trends */}
              <div className="glass-card border border-primary/20 rounded-2xl p-6">
                <h2 className="text-xl font-bold text-foreground mb-6">Revenue Trends</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={revenueData}>
                    <defs>
                      <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#FFD700" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#FFD700" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                    <XAxis dataKey="month" stroke="#a1a1aa" />
                    <YAxis stroke="#a1a1aa" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1a1a24', 
                        border: '1px solid #FFD70033',
                        borderRadius: '12px',
                        color: '#ffffff'
                      }}
                      formatter={(value: number) => `₹${value.toLocaleString()}`}
                    />
                    <Area type="monotone" dataKey="revenue" stroke="#FFD700" fillOpacity={1} fill="url(#colorRevenue)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Active Users Statistics */}
              <div className="glass-card border border-primary/20 rounded-2xl p-6">
                <h2 className="text-xl font-bold text-foreground mb-6">User Activity</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={usersData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                    <XAxis dataKey="month" stroke="#a1a1aa" />
                    <YAxis stroke="#a1a1aa" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1a1a24', 
                        border: '1px solid #39ff1433',
                        borderRadius: '12px',
                        color: '#ffffff'
                      }}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="active" stroke="#39ff14" strokeWidth={2} dot={{ fill: '#39ff14' }} />
                    <Line type="monotone" dataKey="inactive" stroke="#ef4444" strokeWidth={2} dot={{ fill: '#ef4444' }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Weekly Revenue */}
              <div className="glass-card border border-primary/20 rounded-2xl p-6">
                <h2 className="text-xl font-bold text-foreground mb-6">Weekly Revenue</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={bookingsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                    <XAxis dataKey="day" stroke="#a1a1aa" />
                    <YAxis stroke="#a1a1aa" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1a1a24', 
                        border: '1px solid #b800ff33',
                        borderRadius: '12px',
                        color: '#ffffff'
                      }}
                      formatter={(value: number) => `₹${value.toLocaleString()}`}
                    />
                    <Bar dataKey="revenue" fill="#b800ff" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Activity */}
              <div className="glass-card border border-primary/20 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-foreground">Recent Activity</h2>
                  <Activity className="w-5 h-5 text-primary" />
                </div>
                <div className="space-y-4">
                  {[
                    { action: 'New user registered', user: 'Alex Johnson', time: '2 hours ago', type: 'user' },
                    { action: 'Booking confirmed', user: 'Sarah Williams', time: '4 hours ago', type: 'booking' },
                    { action: 'New turf added', user: 'Champions Ground', time: '6 hours ago', type: 'turf' },
                    { action: 'Payment received', user: '₹1,500', time: '8 hours ago', type: 'payment' },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-xl glass-card border border-border">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        activity.type === 'user' ? 'bg-primary/10' :
                        activity.type === 'booking' ? 'bg-accent/10' :
                        activity.type === 'turf' ? 'bg-[#39ff14]/10' :
                        'bg-[#FFD700]/10'
                      }`}>
                        {activity.type === 'user' && <UserCheck className="w-5 h-5 text-primary" />}
                        {activity.type === 'booking' && <Calendar className="w-5 h-5 text-accent" />}
                        {activity.type === 'turf' && <Building2 className="w-5 h-5 text-[#39ff14]" />}
                        {activity.type === 'payment' && <DollarSign className="w-5 h-5 text-[#FFD700]" />}
                      </div>
                      <div className="flex-1">
                        <p className="text-foreground font-medium">{activity.action}</p>
                        <p className="text-sm text-muted-foreground">{activity.user} • {activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* System Alerts */}
              <div className="glass-card border border-primary/20 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-foreground">System Alerts</h2>
                  <AlertCircle className="w-5 h-5 text-[#FFD700]" />
                </div>
                <div className="space-y-4">
                  {[
                    { title: 'Server maintenance scheduled', description: 'Planned maintenance on March 20, 2026', priority: 'medium' },
                    { title: 'Payment gateway update', description: 'New payment methods available', priority: 'low' },
                    { title: 'High traffic detected', description: 'Increased bookings in last 24 hours', priority: 'high' },
                    { title: 'New feature request', description: '15 users requested mobile app', priority: 'low' },
                  ].map((alert, index) => (
                    <div key={index} className="p-4 rounded-xl glass-card border border-border">
                      <div className="flex items-start justify-between mb-2">
                        <p className="text-foreground font-medium">{alert.title}</p>
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          alert.priority === 'high' ? 'bg-red-500/10 text-red-500' :
                          alert.priority === 'medium' ? 'bg-[#FFD700]/10 text-[#FFD700]' :
                          'bg-primary/10 text-primary'
                        }`}>
                          {alert.priority}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{alert.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Users Tab */}
        {selectedTab === 'users' && (
          <div className="glass-card border border-primary/20 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-foreground">User Management</h2>
              <button className="px-4 py-2 rounded-xl neon-button text-white font-semibold">
                + Add User
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">Name</th>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">Email</th>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">Joined</th>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">Status</th>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentUsers.map((user) => (
                    <tr key={user.id} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00f0ff] to-[#b800ff] flex items-center justify-center">
                            <Users className="w-5 h-5 text-white" />
                          </div>
                          <span className="font-medium text-foreground">{user.name}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-muted-foreground">{user.email}</td>
                      <td className="py-4 px-4 text-muted-foreground">{user.joined}</td>
                      <td className="py-4 px-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          user.status === 'Active' ? 'bg-[#39ff14]/10 text-[#39ff14]' : 'bg-muted text-muted-foreground'
                        }`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <button className="p-2 rounded-lg glass-card border border-border hover-neon">
                            <Eye className="w-4 h-4 text-primary" />
                          </button>
                          <button className="p-2 rounded-lg glass-card border border-border hover-neon">
                            <Edit className="w-4 h-4 text-accent" />
                          </button>
                          <button className="p-2 rounded-lg glass-card border border-border hover-neon">
                            <Trash2 className="w-4 h-4 text-red-500" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Turfs Tab */}
        {selectedTab === 'turfs' && (
          <div className="glass-card border border-primary/20 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-foreground">Turf Management</h2>
              <button className="px-4 py-2 rounded-xl neon-button text-white font-semibold">
                + Add Turf
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">Turf Name</th>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">Owner</th>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">Location</th>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">Revenue</th>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">Status</th>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentTurfs.map((turf) => (
                    <tr key={turf.id} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#39ff14] to-[#00ff88] flex items-center justify-center">
                            <Building2 className="w-5 h-5 text-white" />
                          </div>
                          <span className="font-medium text-foreground">{turf.name}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-muted-foreground">{turf.owner}</td>
                      <td className="py-4 px-4 text-muted-foreground">{turf.location}</td>
                      <td className="py-4 px-4 text-primary font-semibold">{turf.revenue}</td>
                      <td className="py-4 px-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          turf.status === 'Approved' ? 'bg-[#39ff14]/10 text-[#39ff14]' : 'bg-[#FFD700]/10 text-[#FFD700]'
                        }`}>
                          {turf.status}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <button className="p-2 rounded-lg glass-card border border-border hover-neon">
                            <Eye className="w-4 h-4 text-primary" />
                          </button>
                          <button className="p-2 rounded-lg glass-card border border-border hover-neon">
                            <Edit className="w-4 h-4 text-accent" />
                          </button>
                          <button className="p-2 rounded-lg glass-card border border-border hover-neon">
                            <Trash2 className="w-4 h-4 text-red-500" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Bookings Tab */}
        {selectedTab === 'bookings' && (
          <div className="glass-card border border-primary/20 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-foreground">Booking Management</h2>
              <button className="px-4 py-2 rounded-xl glass-card border border-primary text-primary font-semibold hover-neon">
                Export Data
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">User</th>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">Turf</th>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">Date</th>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">Time</th>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">Amount</th>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">Status</th>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentBookings.map((booking) => (
                    <tr key={booking.id} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                      <td className="py-4 px-4 text-foreground font-medium">{booking.user}</td>
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
                        <div className="flex items-center gap-2">
                          <button className="p-2 rounded-lg glass-card border border-border hover-neon">
                            <Eye className="w-4 h-4 text-primary" />
                          </button>
                          <button className="p-2 rounded-lg glass-card border border-border hover-neon">
                            <Trash2 className="w-4 h-4 text-red-500" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}