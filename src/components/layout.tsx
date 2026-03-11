import { Outlet, Link, useLocation, useNavigate } from 'react-router';
import { Menu, X, Undo2, Redo2, Search, User, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Footer } from './footer';
import { LoginModal } from './login-modal';
import logo from '../assets/90fb72376fb333816749802f330ac0785cab26cb.png';

export function Layout() {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleUndo = () => {
    navigate(-1); // Go back one page in history
  };

  const handleRedo = () => {
    navigate(1); // Go forward one page in history
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Undo/Redo Buttons - Top Left Corner aligned with navbar */}
      <div className="fixed top-4 left-4 z-50 flex items-center gap-2">
        <button
          onClick={handleUndo}
          className="w-10 h-10 rounded-full glass-card border border-primary/30 flex items-center justify-center hover-neon group"
          title="Undo"
        >
          <Undo2 className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
        </button>
        <button
          onClick={handleRedo}
          className="w-10 h-10 rounded-full glass-card border border-primary/30 flex items-center justify-center hover-neon group"
          title="Redo"
        >
          <Redo2 className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
        </button>
      </div>

      {/* Floating Glass Navigation Bar */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-7xl">
        <div className="glass-nav rounded-full px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <img 
                src={logo} 
                alt="Turfo" 
                className="w-10 h-10 rounded-full object-cover hover-scale transition-transform duration-300"
              />
              <span className="text-xl font-black hidden sm:block">TURFO</span>
            </div>
          </Link>

          {/* Center Search Bar */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search turfs or locations..."
                className="w-full bg-input-background border border-border rounded-full pl-10 pr-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Home
            </Link>
            <Link
              to="/explore"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/explore') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Explore
            </Link>
            <Link
              to="/tournaments"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/tournaments') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Tournaments
            </Link>
            <Link
              to="/matchmaking"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/matchmaking') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Find Players
            </Link>
            <Link
              to="/dashboard"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/dashboard') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Dashboard
            </Link>
          </div>

          {/* Right Side - Login/Profile */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsLoginModalOpen(true)}
              className="hidden sm:block px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Login
            </button>
            <div className="relative">
              <button 
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00f0ff] to-[#b800ff] flex items-center justify-center neon-glow hover-scale"
              >
                <User className="w-5 h-5 text-white" />
              </button>
              
              {/* User Dropdown Menu */}
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 glass-card border border-primary/30 rounded-xl overflow-hidden shadow-xl">
                  <Link
                    to="/dashboard"
                    onClick={() => setShowUserMenu(false)}
                    className="block px-4 py-3 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/profile"
                    onClick={() => setShowUserMenu(false)}
                    className="block px-4 py-3 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    Profile Settings
                  </Link>
                  <Link
                    to="/owner"
                    onClick={() => setShowUserMenu(false)}
                    className="block px-4 py-3 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    Turf Owner Panel
                  </Link>
                  <Link
                    to="/admin"
                    onClick={() => setShowUserMenu(false)}
                    className="block px-4 py-3 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors border-t border-border"
                  >
                    Admin Dashboard
                  </Link>
                  <div className="border-t border-border">
                    <Link
                      to="/design-system"
                      onClick={() => setShowUserMenu(false)}
                      className="block px-4 py-3 text-sm text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      Design System
                    </Link>
                    <Link
                      to="/components"
                      onClick={() => setShowUserMenu(false)}
                      className="block px-4 py-3 text-sm text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      Components
                    </Link>
                    <Link
                      to="/modals-demo"
                      onClick={() => setShowUserMenu(false)}
                      className="block px-4 py-3 text-sm text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      Modals Demo
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <button className="md:hidden w-10 h-10 rounded-full bg-muted flex items-center justify-center">
              <Menu className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

      {/* Login Modal */}
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </div>
  );
}
