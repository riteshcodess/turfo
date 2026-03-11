import { createBrowserRouter } from "react-router";
import { Layout } from "./components/layout";
import { HomePage } from "./pages/home-page";
import { BookingPage } from "./pages/booking-page";
import { DashboardPage } from "./pages/dashboard-page";
import { ExplorePage } from "./pages/explore-page";
import { MapPage } from "./pages/map-page";
import { MatchmakingPage } from "./pages/matchmaking-page";
import { TournamentsPage } from "./pages/tournaments-page";
import { TurfDetailsPage } from "./pages/turf-details-page";
import { CheckoutPage } from "./pages/checkout-page";
import { ProfilePage } from "./pages/profile-page";
import { AdminDashboardPage } from "./pages/admin-dashboard-page";
import { TurfOwnerPanelPage } from "./pages/turf-owner-panel-page";
import { ModalsDemo } from "./pages/modals-demo-page";
import { DesignSystemPage } from "./pages/design-system-page";
import { ComponentsLibraryPage } from "./pages/components-library-page";
import { IndexPage } from "./pages/index-page";
import { EmailVerificationPage } from "./pages/email-verification-page";
import { NotificationsPage } from "./pages/notifications-page";
import { AboutPage } from "./pages/about-page";
import { FAQPage } from "./pages/faq-page";
import { TermsPage } from "./pages/terms-page";
import { PrivacyPage } from "./pages/privacy-page";
import { HelpPage } from "./pages/help-page";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "dev", Component: IndexPage },
      { path: "explore", Component: ExplorePage },
      { path: "map", Component: MapPage },
      { path: "matchmaking", Component: MatchmakingPage },
      { path: "tournaments", Component: TournamentsPage },
      { path: "turf/:turfId", Component: TurfDetailsPage },
      { path: "booking/:turfId", Component: BookingPage },
      { path: "checkout", Component: CheckoutPage },
      { path: "dashboard", Component: DashboardPage },
      { path: "profile", Component: ProfilePage },
      { path: "admin", Component: AdminDashboardPage },
      { path: "owner", Component: TurfOwnerPanelPage },
      { path: "verify-email", Component: EmailVerificationPage },
      { path: "notifications", Component: NotificationsPage },
      { path: "about", Component: AboutPage },
      { path: "faq", Component: FAQPage },
      { path: "terms", Component: TermsPage },
      { path: "privacy", Component: PrivacyPage },
      { path: "help", Component: HelpPage },
      { path: "modals-demo", Component: ModalsDemo },
      { path: "design-system", Component: DesignSystemPage },
      { path: "components", Component: ComponentsLibraryPage },
    ],
  },
]);
