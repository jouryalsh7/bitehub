import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

/**
 * <Outlet /> is React Router's placeholder for "whichever child route
 * matched the current URL goes here." Instead of putting <Navbar /> and
 * <Footer /> inside every single page component, we nest all page routes
 * under this one Layout route in App.jsx. React Router then swaps out
 * ONLY the <Outlet /> contents as you navigate, while Navbar and Footer
 * stay mounted. This is the standard pattern for shared page chrome.
 */
export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
