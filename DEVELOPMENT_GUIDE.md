# Turfo - Development Guide

## 🎨 Design System Overview

### Color Palette

#### Primary Colors
- **Primary**: `#00f0ff` - Main brand color for buttons, links, and key actions
- **Primary Dark**: `#00b8cc` - Hover and pressed states
- **Primary Light**: `#66f5ff` - Subtle backgrounds and accents

#### Accent Colors
- **Accent**: `#b800ff` - Secondary actions and highlights
- **Accent Green**: `#39ff14` - Success states and positive feedback
- **Accent Purple**: `#9d4edd` - Special features and badges

#### Neutral Colors
- **Background**: `#0a0a0f` - Main application background
- **Foreground**: `#ffffff` - Primary text color
- **Muted**: `#1a1a24` - Card backgrounds and secondary surfaces
- **Muted Foreground**: `#a1a1aa` - Secondary text and labels
- **Border**: `#27272a` - Borders and dividers
- **Input Background**: `#18181b` - Form input backgrounds

#### Feedback Colors
- **Success**: `#39ff14` - Success messages and confirmations
- **Error**: `#ef4444` - Error messages and warnings
- **Warning**: `#FFD700` - Warning states and alerts
- **Info**: `#00f0ff` - Informational messages

### Typography Scale

```
Display Large:  60px / 900 weight - Hero headlines
Display:        48px / 900 weight - Page titles
Heading 1:      36px / 700 weight - Section headers
Heading 2:      30px / 700 weight - Subsection headers
Heading 3:      24px / 700 weight - Card titles
Heading 4:      20px / 700 weight - Component headers
Body Large:     18px / 400 weight - Large body text
Body:           16px / 400 weight - Default text
Body Small:     14px / 400 weight - Secondary text
Caption:        12px / 400 weight - Captions and labels
```

### Spacing System

```
xs:   4px   - Minimal padding
sm:   8px   - Small spacing
md:   16px  - Default spacing
lg:   24px  - Large spacing
xl:   32px  - Extra large spacing
2xl:  48px  - Section spacing
3xl:  64px  - Page spacing
```

### Border Radius

```
sm:   8px    - Small components
md:   12px   - Cards and buttons (rounded-xl)
lg:   16px   - Large cards (rounded-2xl)
full: 9999px - Pills and avatars (rounded-full)
```

### Shadow Styles

```
sm:   Subtle elevation for small components
md:   Standard card shadows
lg:   Modal and popup shadows
xl:   Drawer and overlay shadows
neon: Glowing neon effect for interactive elements
```

---

## 🧩 Component Library

### Buttons

#### Primary Button
```tsx
<button className="neon-button">
  Book Now
</button>
```

States:
- Default: `neon-button`
- Hover: `neon-button hover-scale`
- Disabled: `glass-card border border-border/30 text-muted-foreground cursor-not-allowed`
- Loading: Add `<Loader2 className="animate-spin" />` icon

#### Secondary Button
```tsx
<button className="glass-card border border-border text-foreground hover-neon">
  View Details
</button>
```

#### Icon Button
```tsx
<button className="w-12 h-12 rounded-full glass-card border border-border hover-neon">
  <Icon className="w-5 h-5" />
</button>
```

### Input Fields

#### Text Input
```tsx
<input
  type="text"
  className="w-full bg-input-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
  placeholder="Enter text"
/>
```

#### Input with Icon
```tsx
<div className="relative">
  <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
  <input
    className="w-full bg-input-background border border-border rounded-xl pl-10 pr-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
  />
</div>
```

#### Select Dropdown
```tsx
<select className="w-full bg-input-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors">
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```

### Cards

#### Turf Card
```tsx
<div className="glass-card rounded-2xl overflow-hidden border border-border hover-neon">
  <div className="relative h-48">
    <img src="..." alt="..." className="w-full h-full object-cover" />
    <div className="absolute top-3 right-3 px-3 py-1 rounded-full glass-card border border-accent/50">
      <span className="text-xs font-semibold text-accent">Sport Type</span>
    </div>
  </div>
  <div className="p-4">
    <h3 className="font-semibold text-foreground">Turf Name</h3>
    <p className="text-sm text-muted-foreground">Location</p>
    <button className="w-full py-2.5 rounded-xl neon-button text-white font-semibold">
      Book Now
    </button>
  </div>
</div>
```

### Badges

```tsx
<span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/30">
  Available
</span>

<span className="px-3 py-1 rounded-full bg-[#39ff14]/10 text-[#39ff14] text-sm font-semibold border border-[#39ff14]/30">
  Confirmed
</span>

<span className="px-3 py-1 rounded-full bg-[#FFD700]/10 text-[#FFD700] text-sm font-semibold border border-[#FFD700]/30">
  Pending
</span>
```

---

## 📱 Responsive Design

### Breakpoints

```
sm:  640px  - Mobile landscape
md:  768px  - Tablets
lg:  1024px - Desktop
xl:  1280px - Large desktop
```

### Grid System

```tsx
// Responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Items */}
</div>

// Container
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Content */}
</div>
```

---

## 🎭 UI States

### Loading States

```tsx
import { LoadingState, TurfCardSkeleton } from '@/components/ui-states';

// Full page loading
<LoadingState message="Loading turfs..." size="lg" />

// Card skeleton
<TurfCardSkeleton />
```

### Empty States

```tsx
import { EmptyState, NoTurfsFound } from '@/components/ui-states';

// Generic empty state
<EmptyState
  icon="search"
  title="No Results"
  description="Try adjusting your search"
  action={{
    label: "Clear Filters",
    onClick: () => {}
  }}
/>

// Specific empty states
<NoTurfsFound />
<NoBookingsYet />
<NoMatchesFound />
```

### Error States

```tsx
import { ErrorState, NetworkError } from '@/components/ui-states';

// Generic error
<ErrorState
  type="general"
  title="Error"
  message="Something went wrong"
  onRetry={() => {}}
/>

// Specific errors
<NetworkError onRetry={() => {}} />
<ServerError onRetry={() => {}} />
<NotFoundError />
```

---

## 🗂️ File Structure

```
/src/app/
├── components/
│   ├── layout.tsx              # Main layout with nav & footer
│   ├── footer.tsx              # Footer component
│   ├── login-modal.tsx         # Login/signup modal
│   ├── turf-card.tsx           # Reusable turf card
│   ├── modals/                 # All modal components
│   │   ├── index.tsx
│   │   ├── confirm-booking-modal.tsx
│   │   ├── booking-success-modal.tsx
│   │   ├── payment-method-modal.tsx
│   │   └── ...
│   └── ui-states/              # Loading, empty, error states
│       ├── index.tsx
│       ├── loading-state.tsx
│       ├── empty-state.tsx
│       └── error-state.tsx
├── pages/
│   ├── home-page.tsx           # Homepage
│   ├── explore-page.tsx        # Browse all turfs
│   ├── turf-details-page.tsx  # Individual turf details
│   ├── booking-page.tsx        # Time slot selection
│   ├── checkout-page.tsx       # Payment & checkout
│   ├── dashboard-page.tsx      # User bookings dashboard
│   ├── profile-page.tsx        # User profile settings
│   ├── admin-dashboard-page.tsx # Admin panel
│   ├── turf-owner-panel-page.tsx # Turf owner dashboard
│   ├── map-page.tsx            # Map view of turfs
│   ├── matchmaking-page.tsx    # Find players
│   ├── tournaments-page.tsx    # Tournament listings
│   ├── design-system-page.tsx  # Design system documentation
│   ├── components-library-page.tsx # Component showcase
│   └── modals-demo-page.tsx    # Modal previews
├── data/
│   └── turfs.ts                # Mock turf data
├── routes.tsx                  # Route configuration
└── App.tsx                     # Main app component

/src/styles/
├── theme.css                   # CSS custom properties
└── fonts.css                   # Font imports
```

---

## 🔌 API Integration Guide

### Expected API Endpoints

```typescript
// Turfs
GET    /api/turfs              // List all turfs
GET    /api/turfs/:id          // Get turf details
POST   /api/turfs              // Create turf (owner)
PUT    /api/turfs/:id          // Update turf (owner)
DELETE /api/turfs/:id          // Delete turf (admin)

// Bookings
GET    /api/bookings           // User's bookings
POST   /api/bookings           // Create booking
GET    /api/bookings/:id       // Booking details
PUT    /api/bookings/:id       // Update booking
DELETE /api/bookings/:id       // Cancel booking

// Users
GET    /api/users/me           // Current user
PUT    /api/users/me           // Update profile
GET    /api/users/:id          // User details (admin)

// Payments
POST   /api/payments           // Process payment
GET    /api/payments/:id       // Payment details
```

### Data Types

```typescript
interface Turf {
  id: number;
  name: string;
  location: string;
  sport: string[];
  type: string;
  price: number;
  rating: number;
  image: string;
  distance?: string;
  amenities?: string[];
}

interface Booking {
  id: string;
  turfId: number;
  turfName: string;
  date: string;
  time: string;
  duration: string;
  amount: number;
  status: 'confirmed' | 'pending' | 'cancelled';
}

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
}
```

---

## 🎯 Key Features to Implement

### User Flow
1. **Browse Turfs** → Explore page with filters
2. **View Details** → Turf details with reviews & amenities
3. **Select Time** → Booking page with time slot grid
4. **Checkout** → Payment method selection
5. **Confirmation** → Success modal & booking details
6. **Dashboard** → View and manage bookings

### Admin Features
- User management (view, edit, delete)
- Turf approval/rejection
- Booking monitoring
- Revenue analytics

### Turf Owner Features
- Add/edit turfs
- Manage availability
- View bookings
- Revenue tracking

---

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Preview Pages
- Homepage: `/`
- Explore: `/explore`
- Design System: `/design-system`
- Components: `/components`
- Modals Demo: `/modals-demo`

---

## 📝 Best Practices

### Component Creation
1. Keep components small and focused
2. Use TypeScript for type safety
3. Extract reusable logic into hooks
4. Use proper semantic HTML
5. Add loading/error states

### Styling
1. Use Tailwind classes consistently
2. Stick to design tokens (colors, spacing)
3. Apply `hover-scale` and `hover-neon` for interactions
4. Use `glass-card` for card backgrounds
5. Maintain consistent border radius

### Accessibility
1. Add proper ARIA labels
2. Ensure keyboard navigation
3. Use semantic HTML elements
4. Provide alt text for images
5. Maintain color contrast ratios

### Performance
1. Lazy load images
2. Use React.memo for expensive components
3. Implement pagination for long lists
4. Optimize bundle size
5. Use skeleton loaders for better UX

---

## 🎨 Custom CSS Classes

### Glass Effects
- `glass-card` - Glassmorphism card background
- `glass-nav` - Navigation bar glass effect

### Neon Effects
- `neon-button` - Primary neon button with glow
- `neon-button-purple` - Purple variant neon button
- `neon-glow` - Neon glow shadow effect

### Interactions
- `hover-neon` - Border glow on hover
- `hover-scale` - Scale transform on hover

### Utilities
- `bg-background` - Main background color
- `text-foreground` - Primary text color
- `text-muted-foreground` - Secondary text color
- `border-border` - Border color

---

## 📞 Support

For questions or issues, refer to:
- Design System: `/design-system`
- Component Library: `/components`
- Modal Examples: `/modals-demo`

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
