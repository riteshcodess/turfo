import { Link } from 'react-router';
import { 
  Palette, 
  Layers, 
  FileText, 
  Code, 
  Folder,
  CheckCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export function IndexPage() {
  const sections = [
    {
      title: 'Design System',
      description: 'Complete design tokens, colors, typography, spacing, and styling guidelines',
      icon: Palette,
      link: '/design-system',
      color: 'from-[#00f0ff] to-[#0080ff]',
      features: ['Color Palette', 'Typography Scale', 'Spacing System', 'Border Radius', 'Shadow Styles']
    },
    {
      title: 'Components Library',
      description: 'Reusable UI components with all states (default, hover, active, disabled, loading)',
      icon: Layers,
      link: '/components',
      color: 'from-[#b800ff] to-[#ff00ff]',
      features: ['Buttons', 'Inputs', 'Cards', 'Badges', 'Loading States']
    },
    {
      title: 'Modals & Popups',
      description: 'Complete modal system with 12 interactive popup components',
      icon: Sparkles,
      link: '/modals-demo',
      color: 'from-[#39ff14] to-[#00ff88]',
      features: ['Auth Modals', 'Booking Flows', 'Payment Modals', 'Filters', 'Confirmations']
    }
  ];

  const pages = [
    { name: 'Homepage', route: '/', description: 'Hero, featured turfs, categories' },
    { name: 'Explore Turfs', route: '/explore', description: 'Browse with filters and sorting' },
    { name: 'Turf Details', route: '/turf/1', description: 'Complete information & reviews' },
    { name: 'Booking', route: '/booking/1', description: 'Date and time slot selection' },
    { name: 'Checkout', route: '/checkout', description: 'Payment and confirmation' },
    { name: 'User Dashboard', route: '/dashboard', description: 'Manage bookings' },
    { name: 'Profile', route: '/profile', description: 'Account settings' },
    { name: 'Admin Dashboard', route: '/admin', description: 'Platform management' },
    { name: 'Owner Panel', route: '/owner', description: 'Business analytics' },
    { name: 'Map View', route: '/map', description: 'Interactive turf map' },
    { name: 'Find Players', route: '/matchmaking', description: 'Player matchmaking' },
    { name: 'Tournaments', route: '/tournaments', description: 'Tournament listings' },
  ];

  const features = [
    'Complete Design System with Tokens',
    'Reusable Component Library',
    '12 Interactive Modal Components',
    'UI States (Loading, Empty, Error)',
    'Responsive Across All Devices',
    'Clean Code Architecture',
    'TypeScript Support',
    'Tailwind CSS v4',
    'React Router v7',
    'Production Ready'
  ];

  return (
    <div className="min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-20 text-center border-b border-border">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#00f0ff] to-[#b800ff] mb-6 neon-glow">
            <Code className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-6xl font-black text-foreground mb-4">
            Turfo Developer Hub
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Complete design system, component library, and developer resources for the Turfo sports turf booking platform
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link to="/design-system">
              <button className="px-8 py-4 rounded-xl neon-button text-white font-semibold text-lg flex items-center gap-2">
                View Design System
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link to="/components">
              <button className="px-8 py-4 rounded-xl glass-card border border-border text-foreground font-semibold text-lg hover-neon">
                Browse Components
              </button>
            </Link>
          </div>
        </div>

        {/* Main Sections */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Developer Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sections.map((section) => (
              <Link key={section.title} to={section.link}>
                <div className="glass-card border border-primary/20 rounded-2xl p-8 hover-neon hover-scale transition-all h-full">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center mb-6 neon-glow`}>
                    <section.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{section.title}</h3>
                  <p className="text-muted-foreground mb-6">{section.description}</p>
                  <ul className="space-y-2">
                    {section.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Application Pages */}
        <section className="py-16 border-t border-border">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Application Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pages.map((page) => (
              <Link key={page.name} to={page.route}>
                <div className="glass-card border border-border rounded-xl p-6 hover-neon transition-all">
                  <h3 className="font-bold text-foreground mb-2">{page.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{page.description}</p>
                  <div className="flex items-center gap-2 text-primary text-sm font-medium">
                    Visit Page
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 border-t border-border">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature) => (
              <div key={feature} className="glass-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#39ff14] to-[#00ff88] flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Documentation */}
        <section className="py-16 border-t border-border">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Documentation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card border border-border rounded-2xl p-8 text-center">
              <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Development Guide</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Complete guide with design tokens, components, and best practices
              </p>
              <a href="/DEVELOPMENT_GUIDE.md" target="_blank" className="text-primary hover:text-accent transition-colors text-sm font-medium">
                Read Guide →
              </a>
            </div>

            <div className="glass-card border border-border rounded-2xl p-8 text-center">
              <Folder className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Project Structure</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Complete file organization and architecture overview
              </p>
              <a href="/PROJECT_STRUCTURE.md" target="_blank" className="text-primary hover:text-accent transition-colors text-sm font-medium">
                View Structure →
              </a>
            </div>

            <div className="glass-card border border-border rounded-2xl p-8 text-center">
              <Code className="w-12 h-12 text-[#39ff14] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Developer Handoff</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Production-ready implementation guide with API specs
              </p>
              <a href="/DEVELOPER_HANDOFF.md" target="_blank" className="text-primary hover:text-accent transition-colors text-sm font-medium">
                Get Started →
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 border-t border-border">
          <div className="glass-card border border-primary/30 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Ready to Build?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Everything you need is organized and documented. Start exploring the design system and component library.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link to="/design-system">
                <button className="px-8 py-4 rounded-xl neon-button text-white font-semibold">
                  Design System
                </button>
              </Link>
              <Link to="/components">
                <button className="px-8 py-4 rounded-xl neon-button-purple text-white font-semibold">
                  Components
                </button>
              </Link>
              <Link to="/modals-demo">
                <button className="px-8 py-4 rounded-xl glass-card border border-border text-foreground font-semibold hover-neon">
                  Modals Demo
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
