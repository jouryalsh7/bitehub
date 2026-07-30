import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";
import Button from "../common/Button";
import Container from "../common/Container";
import { ROUTES } from "../../constants/routes";

const NAV_LINKS = [
  { label: "Home", to: ROUTES.LANDING },
  { label: "Restaurants", to: ROUTES.RESTAURANTS },
  { label: "Search", to: ROUTES.SEARCH },
];

/**
 * useState here holds one thing: is the mobile menu open?
 * `isOpen` is the current value, `setIsOpen` is the ONLY way we're
 * allowed to change it. Calling setIsOpen tells React "re-render this
 * component with the new value" — we never mutate isOpen directly.
 *
 * NavLink (vs plain Link) automatically gets an "active" styling hook
 * via its className function, so the current page is highlighted in
 * the nav without us tracking that manually.
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive ? "text-primary" : "text-gray-600 hover:text-ink"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-background/80 backdrop-blur-md">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link to={ROUTES.LANDING} className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-white">
              <ShoppingBag size={18} />
            </span>
            <span className="text-lg font-bold text-ink">BiteHub</span>
          </Link>

          {/* Desktop links — hidden below md, shown as flex from md up */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.to} to={link.to} className={linkClasses} end>
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <Button as="link" to={ROUTES.LOGIN} variant="ghost" size="sm">
              Log in
            </Button>
            <Button as="link" to={ROUTES.REGISTER} variant="primary" size="sm">
              Sign up
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="grid h-10 w-10 place-items-center rounded-lg text-ink md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile dropdown — only rendered when isOpen is true */}
        {isOpen && (
          <div className="flex flex-col gap-1 border-t border-gray-100 py-4 md:hidden">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm font-medium ${
                    isActive
                      ? "bg-primary-light text-primary"
                      : "text-gray-600 hover:bg-gray-50"
                  }`
                }
                onClick={() => setIsOpen(false)}
                end
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-3 flex gap-3 px-3">
              <Button as="link" to={ROUTES.LOGIN} variant="outline" className="flex-1">
                Log in
              </Button>
              <Button as="link" to={ROUTES.REGISTER} variant="primary" className="flex-1">
                Sign up
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
