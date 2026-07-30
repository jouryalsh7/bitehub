import { Star, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

/**
 * Takes one restaurant object and renders it as a card.
 * This is a "presentational component" — it has no state of its own,
 * it just receives data via props and displays it. We'll reuse this
 * exact component on the Restaurant Listing page in a later milestone.
 */
export default function RestaurantCard({ restaurant }) {
  const { id, name, cuisine, rating, deliveryTimeMinutes, priceRange, coverEmoji } =
    restaurant;

  return (
    <Link
      to={ROUTES.RESTAURANT_DETAILS(id)}
      className="group block overflow-hidden rounded-2xl border border-gray-100 bg-white transition-shadow hover:shadow-lg hover:shadow-gray-200/60"
    >
      <div className="flex h-36 items-center justify-center bg-primary-light text-5xl">
        {coverEmoji}
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-ink group-hover:text-primary">
            {name}
          </h3>
          <span className="shrink-0 text-sm text-gray-400">{priceRange}</span>
        </div>
        <p className="mt-1 text-sm text-gray-500">{cuisine}</p>

        <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <Star size={14} className="fill-amber-400 text-amber-400" />
            {rating}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {deliveryTimeMinutes} min
          </span>
        </div>
      </div>
    </Link>
  );
}
