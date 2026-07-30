/**
 * Mock data, shaped exactly like we expect the Spring Boot REST API
 * to eventually return it (e.g. GET /api/restaurants).
 *
 * Keeping the shape realistic now means that in a later milestone we
 * can swap `mockRestaurants` for `const { data } = await api.get("/restaurants")`
 * and the components below won't need to change at all — they already
 * consume the data in this shape.
 */

export const categories = [
  { id: "pizza", name: "Pizza", icon: "🍕" },
  { id: "burgers", name: "Burgers", icon: "🍔" },
  { id: "sushi", name: "Sushi", icon: "🍣" },
  { id: "salads", name: "Salads", icon: "🥗" },
  { id: "desserts", name: "Desserts", icon: "🍰" },
  { id: "drinks", name: "Drinks", icon: "🧋" },
];

export const featuredRestaurants = [
  {
    id: 1,
    name: "Nonna's Kitchen",
    cuisine: "Italian",
    rating: 4.8,
    deliveryTimeMinutes: 25,
    priceRange: "$$",
    coverEmoji: "🍝",
  },
  {
    id: 2,
    name: "Sakura Sushi Bar",
    cuisine: "Japanese",
    rating: 4.9,
    deliveryTimeMinutes: 30,
    priceRange: "$$$",
    coverEmoji: "🍣",
  },
  {
    id: 3,
    name: "The Burger Yard",
    cuisine: "American",
    rating: 4.6,
    deliveryTimeMinutes: 20,
    priceRange: "$",
    coverEmoji: "🍔",
  },
  {
    id: 4,
    name: "Green Bowl Co.",
    cuisine: "Healthy",
    rating: 4.7,
    deliveryTimeMinutes: 18,
    priceRange: "$$",
    coverEmoji: "🥗",
  },
];

export const howItWorksSteps = [
  {
    step: "01",
    title: "Browse restaurants",
    description:
      "Explore local restaurants by cuisine, rating, or delivery time.",
  },
  {
    step: "02",
    title: "Place your order",
    description:
      "Add dishes to your cart and check out securely in a few taps.",
  },
  {
    step: "03",
    title: "Track & enjoy",
    description:
      "Follow your order in real time and enjoy it fresh at your door.",
  },
];
