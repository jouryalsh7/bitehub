import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RestaurantListing from "./pages/RestaurantListing";
import RestaurantDetails from "./pages/RestaurantDetails";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderHistory from "./pages/OrderHistory";
import Profile from "./pages/Profile";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

/**
 * BrowserRouter: enables client-side routing using the browser's
 * History API, so navigating feels instant (no full page reload)
 * while the URL bar still updates normally.
 *
 * Routes / Route: declarative route matching. React Router looks at
 * the current URL and renders whichever <Route> element matches.
 *
 * Nesting every page Route INSIDE the Route with element={<MainLayout />}
 * means every one of these pages automatically gets the Navbar + Footer
 * from MainLayout, via the <Outlet /> we placed there. We only had to
 * write that shared chrome once.
 *
 * path="*" is a catch-all: if nothing above it matched the URL,
 * NotFound renders. Order matters here — it must be listed last.
 */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/restaurants" element={<RestaurantListing />} />
          <Route path="/restaurants/:id" element={<RestaurantDetails />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<OrderHistory />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
