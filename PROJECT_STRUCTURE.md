# Turfo - Project Structure & Organization

## 📁 Complete File Structure

```
turfo/
│
├── public/                           # Static assets
│   └── ...
│
├── src/
│   ├── app/
│   │   ├── components/              # Reusable UI Components
│   │   │   ├── layout.tsx           # Main layout wrapper
│   │   │   ├── footer.tsx           # Footer component
│   │   │   ├── login-modal.tsx      # Login/Signup modal
│   │   │   ├── turf-card.tsx        # Turf listing card
│   │   │   │
│   │   │   ├── modals/              # Modal Components
│   │   │   │   ├── index.tsx
│   │   │   │   ├── forgot-password-modal.tsx
│   │   │   │   ├── confirm-booking-modal.tsx
│   │   │   │   ├── booking-success-modal.tsx
│   │   │   │   ├── booking-failed-modal.tsx
│   │   │   │   ├── payment-method-modal.tsx
│   │   │   │   ├── payment-success-modal.tsx
│   │   │   │   ├── payment-failed-modal.tsx
│   │   │   │   ├── location-permission-modal.tsx
│   │   │   │   ├── filters-modal.tsx
│   │   │   │   └── cancel-booking-modal.tsx
│   │   │   │
│   │   │   ├── ui-states/           # UI State Components
│   │   │   │   ├── index.tsx
│   │   │   │   ├── loading-state.tsx    # Loading spinners & skeletons
│   │   │   │   ├── empty-state.tsx      # Empty results states
│   │   │   │   └── error-state.tsx      # Error handling states
│   │   │   │
│   │   │
│   │   ├── pages/                   # Application Pages
│   │   │   ├── home-page.tsx        # Homepage with hero
│   │   │   ├── explore-page.tsx     # Browse all turfs
│   │   │   ├── turf-details-page.tsx    # Individual turf details
│   │   │   ├── booking-page.tsx     # Time slot selection
│   │   │   ├── checkout-page.tsx    # Payment & checkout
│   │   │   ├── dashboard-page.tsx   # User dashboard
│   │   │   ├── profile-page.tsx     # User profile settings
│   │   │   ├── admin-dashboard-page.tsx     # Admin panel
│   │   │   ├── turf-owner-panel-page.tsx    # Owner dashboard
│   │   │   ├── map-page.tsx         # Map view of turfs
│   │   │   ├── matchmaking-page.tsx # Find players
│   │   │   ├── tournaments-page.tsx # Tournament listings
│   │   │   │
│   │   │   ├── design-system-page.tsx       # Design tokens & colors
│   │   │   ├── components-library-page.tsx  # Component showcase
│   │   │   └── modals-demo-page.tsx # Modal previews
│   │   │
│   │   ├── data/                    # Mock Data
│   │   │   └── turfs.ts             # Sample turf data
│   │   │
│   │   ├── routes.tsx               # Route configuration
│   │   └── App.tsx                  # Main app component
│   │
│   ├── styles/                      # Global Styles
│   │   ├── theme.css                # CSS custom properties & tokens
│   │   └── fonts.css                # Font imports
│   │
│   └── main.tsx                     # Application entry point
│
├── DEVELOPMENT_GUIDE.md             # Developer documentation
├── PROJECT_STRUCTURE.md             # This file
├── package.json                     # Dependencies
├── tsconfig.json                    # TypeScript config
├── tailwind.config.js              # Tailwind configuration
└── vite.config.ts                  # Vite configuration
```

---

## 🗂️ Organized by Feature

### **Design System** (`/design-system`)
Documentation of all design tokens, colors, typography, spacing, and styling guidelines.

**Files:**
- `/src/app/pages/design-system-page.tsx`
- `/src/styles/theme.css`

---

### **Core Components** (`/components`)
Reusable UI components used across the application.

**Files:**
- `layout.tsx` - Navigation + footer wrapper
- `footer.tsx` - Site footer
- `login-modal.tsx` - Authentication modal
- `turf-card.tsx` - Turf listing card component

---

### **Modal System** (`/components/modals`)
All popup modals for user interactions.

**Components:**
1. **Authentication**
   - Login/Signup modal
   - Forgot password modal

2. **Booking Flow**
   - Confirm booking modal
   - Booking success modal
   - Booking failed modal
   - Cancel booking modal

3. **Payment**
   - Payment method selection
   - Payment success modal
   - Payment failed modal

4. **Utility**
   - Location permission modal
   - Filters modal

---

### **UI States** (`/components/ui-states`)
Components for handling different UI states.

**Components:**
1. **Loading States**
   - Spinner loaders (sm/md/lg)
   - Skeleton loaders (card, table, booking)

2. **Empty States**
   - No turfs found
   - No bookings yet
   - No matches found
   - No tournaments available

3. **Error States**
   - Network error
   - Server error
   - 404 not found
   - General errors

---

### **Public Pages**

#### **Homepage** (`/`)
Hero section, featured turfs, sports categories, testimonials.

#### **Explore Turfs** (`/explore`)
Grid view of all turfs with filters (sport, price, location, rating).

#### **Turf Details** (`/turf/:id`)
Complete turf information, image gallery, reviews, amenities, booking widget.

#### **Map View** (`/map`)
Interactive map showing turf locations with markers.

#### **Find Players** (`/matchmaking`)
Connect with other players looking for matches.

#### **Tournaments** (`/tournaments`)
Browse and register for tournaments.

---

### **Booking Flow**

#### **Booking Page** (`/booking/:id`)
1. Date selection
2. Time slot grid
3. Duration selector
4. Price calculation
5. Book button → Checkout

#### **Checkout** (`/checkout`)
1. User details form
2. Payment method selection (Card/UPI/Wallet)
3. Order summary
4. Payment processing
5. Success/failure handling

---

### **User Dashboard** (`/dashboard`)
- Upcoming bookings
- Past bookings
- Booking history
- Quick actions

---

### **Profile Management** (`/profile`)
Tabbed interface:
1. **Profile** - Personal information
2. **Security** - Password & 2FA
3. **Notifications** - Email/SMS preferences
4. **Payment** - Saved payment methods

---

### **Admin Dashboard** (`/admin`)
Platform management:
1. **Overview** - Stats & metrics
2. **Users** - User management table
3. **Turfs** - Turf approval & management
4. **Bookings** - Booking monitoring

---

### **Turf Owner Panel** (`/owner`)
Business management:
1. **Overview** - Today's stats
2. **My Turfs** - Turf listings & editing
3. **Bookings** - Booking calendar
4. **Revenue** - Analytics & charts

---

## 🎨 Design System Pages

### **Design System** (`/design-system`)
Interactive documentation showing:
- Color palette with hex codes
- Typography scale
- Spacing system
- Border radius values
- Shadow styles
- Copy-to-clipboard functionality

### **Components Library** (`/components`)
Showcase of all UI components with:
- Default state
- Hover state
- Active state
- Disabled state
- Loading state
- Code examples

### **Modals Demo** (`/modals-demo`)
Interactive preview of all modal components with working examples.

---

## 📊 Data Structure

### Turfs Data (`/src/app/data/turfs.ts`)
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
}
```

---

## 🎯 Navigation Flow

```
Homepage (/)
├── Explore (/explore)
│   ├── Turf Details (/turf/:id)
│   │   └── Booking (/booking/:id)
│   │       └── Checkout (/checkout)
│   │           └── Success ✓
│   └── Filters Modal
├── Map (/map)
├── Find Players (/matchmaking)
├── Tournaments (/tournaments)
├── Dashboard (/dashboard)
├── Profile (/profile)
├── Admin (/admin) - Protected
└── Owner Panel (/owner) - Protected

Developer Tools
├── Design System (/design-system)
├── Components (/components)
└── Modals Demo (/modals-demo)
```

---

## 🔑 Key Features by Page

### Homepage
- Hero with search
- Featured turfs carousel
- Sports categories
- Popular locations
- Testimonials
- CTA sections

### Explore
- Grid/List view toggle
- Advanced filters panel
- Sort options
- Pagination
- Empty state when no results

### Turf Details
- Image gallery with navigation
- Complete information
- Amenities list
- Reviews section
- Booking sidebar
- Similar turfs

### Booking
- Calendar date picker
- Time slot grid
- Real-time availability
- Price calculation
- Booking summary

### Checkout
- Multi-step form
- Payment method selection
- Order review
- Terms acceptance
- Payment processing

### Dashboard
- Booking cards with status
- Quick filters (upcoming/past)
- Cancel booking action
- Empty state for new users
- Pagination

### Admin
- Stats dashboard
- User management table
- Turf approval queue
- Booking monitoring
- Export functionality

### Owner Panel
- Revenue charts
- Turf performance metrics
- Booking calendar
- Quick actions
- Analytics dashboard

---

## 🎨 Styling Approach

### Tailwind Classes
All components use Tailwind CSS v4 utility classes.

### Custom CSS
Located in `/src/styles/theme.css`:
- CSS custom properties
- Neon button styles
- Glass card effects
- Hover animations
- Glow effects

### Component Variants
Each component supports multiple variants:
- Size: sm, md, lg
- Color: primary, secondary, success, error
- State: default, hover, active, disabled, loading

---

## 🚀 Quick Start for Developers

1. **View Design System**: Navigate to `/design-system`
2. **Browse Components**: Check `/components` for all UI elements
3. **Test Modals**: Visit `/modals-demo` to see all popups
4. **Read Guide**: Open `DEVELOPMENT_GUIDE.md` for detailed docs
5. **Start Coding**: Use components from `/src/app/components/`

---

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

All components are fully responsive with proper mobile layouts.

---

## ✅ Checklist for Production

### Pages
- [x] Homepage
- [x] Explore Turfs
- [x] Turf Details
- [x] Booking Page
- [x] Checkout
- [x] User Dashboard
- [x] Profile Settings
- [x] Admin Dashboard
- [x] Owner Panel
- [x] Map View
- [x] Matchmaking
- [x] Tournaments

### Modals
- [x] Login/Signup
- [x] Forgot Password
- [x] Confirm Booking
- [x] Booking Success/Failed
- [x] Payment Method
- [x] Payment Success/Failed
- [x] Location Permission
- [x] Filters
- [x] Cancel Booking

### UI States
- [x] Loading states
- [x] Empty states
- [x] Error states
- [x] Skeleton loaders

### Documentation
- [x] Design System
- [x] Component Library
- [x] Development Guide
- [x] Project Structure

---

## 🎯 Next Steps

1. **Backend Integration**
   - Connect to REST API
   - Implement authentication
   - Add real-time features

2. **Testing**
   - Unit tests for components
   - Integration tests for flows
   - E2E testing

3. **Optimization**
   - Image optimization
   - Code splitting
   - Performance monitoring

4. **Deployment**
   - Set up CI/CD
   - Configure hosting
   - Set up monitoring

---

**Ready for production development! 🚀**
