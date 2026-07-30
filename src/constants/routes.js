/**
 * Centralized route paths.
 *
 * Why this file exists:
 * Instead of typing "/restaurants/123" as a raw string in every
 * component (and risking typos), we import ROUTES and reference
 * ROUTES.RESTAURANT_DETAILS(123). If a URL ever needs to change,
 * we update it here once instead of hunting through the codebase.
 */
export const ROUTES = {
  LANDING: "/",
  HOME: "/home",
  LOGIN: "/login",
  REGISTER: "/register",
  RESTAURANTS: "/restaurants",
  RESTAURANT_DETAILS: (id = ":id") => `/restaurants/${id}`,
  SEARCH: "/search",
  CART: "/cart",
  CHECKOUT: "/checkout",
  ORDERS: "/orders",
  PROFILE: "/profile",
  ADMIN: "/admin",
};
