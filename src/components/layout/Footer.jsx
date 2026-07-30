import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import Container from "../common/Container";
import { ROUTES } from "../../constants/routes";

const FOOTER_LINKS = {
  Product: [
    { label: "Restaurants", to: ROUTES.RESTAURANTS },
    { label: "Search", to: ROUTES.SEARCH },
    { label: "Order history", to: ROUTES.ORDERS },
  ],
  Company: [
    { label: "About", to: ROUTES.LANDING },
    { label: "Careers", to: ROUTES.LANDING },
    { label: "Contact", to: ROUTES.LANDING },
  ],
  Account: [
    { label: "Log in", to: ROUTES.LOGIN },
    { label: "Sign up", to: ROUTES.REGISTER },
    { label: "Profile", to: ROUTES.PROFILE },
  ],
};

export default function Footer() {
  // `new Date().getFullYear()` runs at render time, so the copyright
  // year updates itself every year without a code change.
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 bg-white">
      <Container className="py-14">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <Link to={ROUTES.LANDING} className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-white">
                <ShoppingBag size={18} />
              </span>
              <span className="text-lg font-bold text-ink">BiteHub</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-gray-500">
              Great food from your favorite local restaurants, delivered fast
              to your door.
            </p>
          </div>

          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-sm font-semibold text-ink">{heading}</h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-gray-500 hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-gray-100 pt-6 text-center text-sm text-gray-400">
          © {year} BiteHub. Built as a portfolio project.
        </div>
      </Container>
    </footer>
  );
}
