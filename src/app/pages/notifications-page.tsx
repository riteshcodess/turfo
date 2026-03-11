import { Bell, CheckCircle, XCircle, Calendar, Trophy, Users, Trash2, Check } from 'lucide-react';
import { useState } from 'react';

interface Notification {
  id: string;
  type: 'booking' | 'cancellation' | 'reminder' | 'tournament' | 'match';
  title: string;
  message: string;
  time: string;
  read: boolean;
}

export function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'booking',
      title: 'Booking Confirmed',
      message: 'Your booking at Elite Sports Arena for March 15, 2026 at 6:00 PM has been confirmed.',
      time: '2 hours ago',
      read: false,
    },
    {
      id: '2',
      type: 'reminder',
      title: 'Match Reminder',
      message: 'Your game at Victory Field starts in 2 hours. Don\'t forget your equipment!',
      time: '3 hours ago',
      read: false,
    },
    {
      id: '3',
      type: 'tournament',
      title: 'Tournament Registration Open',
      message: 'The City Football Championship 2026 is now open for registration. Limited spots available!',
      time: '5 hours ago',
      read: false,
    },
    {
      id: '4',
      type: 'match',
      title: 'New Match Request',
      message: 'Alex Johnson is looking for players for a football match tomorrow at 7:00 PM.',
      time: '1 day ago',
      read: true,
    },
    {
      id: '5',
      type: 'cancellation',
      title: 'Booking Cancelled',
      message: 'Your booking at Champions Ground for March 10, 2026 has been cancelled. Full refund processed.',
      time: '2 days ago',
      read: true,
    },
    {
      id: '6',
      type: 'booking',
      title: 'Payment Successful',
      message: 'Payment of ₹1,500 for your booking at Elite Sports Arena was successful.',
      time: '2 days ago',
      read: true,
    },
    {
      id: '7',
      type: 'tournament',
      title: 'Tournament Update',
      message: 'The Spring Cricket League schedule has been updated. Check your match timings.',
      time: '3 days ago',
      read: true,
    },
  ]);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const getIcon = (type: string) => {
    switch (type) {
      case 'booking':
        return CheckCircle;
      case 'cancellation':
        return XCircle;
      case 'reminder':
        return Calendar;
      case 'tournament':
        return Trophy;
      case 'match':
        return Users;
      default:
        return Bell;
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case 'booking':
        return 'from-[#39ff14] to-[#00ff88]';
      case 'cancellation':
        return 'from-[#ef4444] to-[#dc2626]';
      case 'reminder':
        return 'from-[#00f0ff] to-[#0080ff]';
      case 'tournament':
        return 'from-[#FFD700] to-[#FFA500]';
      case 'match':
        return 'from-[#b800ff] to-[#9d4edd]';
      default:
        return 'from-[#00f0ff] to-[#b800ff]';
    }
  };

  const markAsRead = (id: string) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  const deleteNotification = (id: string) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  return (
    <div className="min-h-screen pb-16">
      {/* Header */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/10 via-[#b800ff]/10 to-[#00ff88]/10" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4">
                <span className="text-primary">Notifications</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Stay updated with your bookings and activities
              </p>
            </div>
            {unreadCount > 0 && (
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00f0ff] to-[#b800ff] flex items-center justify-center neon-glow">
                <span className="text-white font-bold">{unreadCount}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4">
        {/* Action Bar */}
        {notifications.length > 0 && (
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-muted-foreground">
              {unreadCount} unread notification{unreadCount !== 1 ? 's' : ''}
            </p>
            <div className="flex items-center gap-3">
              {unreadCount > 0 && (
                <button
                  onClick={markAllAsRead}
                  className="text-sm text-primary hover:text-accent transition-colors flex items-center gap-2"
                >
                  <Check className="w-4 h-4" />
                  Mark all as read
                </button>
              )}
              <button
                onClick={clearAll}
                className="text-sm text-muted-foreground hover:text-red-500 transition-colors flex items-center gap-2"
              >
                <Trash2 className="w-4 h-4" />
                Clear all
              </button>
            </div>
          </div>
        )}

        {/* Notifications List */}
        {notifications.length === 0 ? (
          <div className="glass-card border border-border rounded-2xl p-12 text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center mx-auto mb-6">
              <Bell className="w-10 h-10 text-muted-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">No Notifications</h3>
            <p className="text-muted-foreground">
              You're all caught up! Check back later for updates.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {notifications.map((notification) => {
              const Icon = getIcon(notification.type);
              const color = getColor(notification.type);

              return (
                <div
                  key={notification.id}
                  className={`glass-card border rounded-2xl p-5 transition-all hover:border-primary/50 ${
                    notification.read ? 'border-border' : 'border-primary/30'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center ${!notification.read ? 'neon-glow' : ''}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 className={`font-semibold ${notification.read ? 'text-foreground' : 'text-primary'}`}>
                          {notification.title}
                          {!notification.read && (
                            <span className="inline-block w-2 h-2 rounded-full bg-primary ml-2 animate-pulse"></span>
                          )}
                        </h3>
                        <span className="text-xs text-muted-foreground whitespace-nowrap">
                          {notification.time}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {notification.message}
                      </p>

                      {/* Actions */}
                      <div className="flex items-center gap-3">
                        {!notification.read && (
                          <button
                            onClick={() => markAsRead(notification.id)}
                            className="text-xs text-primary hover:text-accent transition-colors flex items-center gap-1"
                          >
                            <Check className="w-3 h-3" />
                            Mark as read
                          </button>
                        )}
                        <button
                          onClick={() => deleteNotification(notification.id)}
                          className="text-xs text-muted-foreground hover:text-red-500 transition-colors flex items-center gap-1"
                        >
                          <Trash2 className="w-3 h-3" />
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
