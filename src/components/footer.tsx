import { Link } from 'react-router';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/90fb72376fb333816749802f330ac0785cab26cb.png';

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* About Turfo */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img
                src={logo}
                alt="Turfo"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-xl font-black">TURFO</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Your premium sports turf booking platform. Book instantly, play endlessly. Experience the future of sports facility management with Turfo.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full glass-card border border-primary/30 flex items-center justify-center hover-neon group">
                <Facebook className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-card border border-primary/30 flex items-center justify-center hover-neon group">
                <Twitter className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-card border border-primary/30 flex items-center justify-center hover-neon group">
                <Instagram className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-card border border-primary/30 flex items-center justify-center hover-neon group">
                <Linkedin className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/explore" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Explore Turfs
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Tournaments
                </a>
              </li>
              <li>
                <Link to="/dashboard" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  My Bookings
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">support@turfo.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">123 Sports Ave, City, ST 12345</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 Turfo. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms
              </Link>
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy
              </Link>
              <Link to="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
