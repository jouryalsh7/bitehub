import { Link } from "react-router-dom";

/**
 * Reusable Button.
 *
 * Why a shared component instead of styling <button> everywhere?
 * If BiteHub later decides the primary color needs to change, or
 * every button needs a loading spinner, we edit ONE file instead of
 * every page. This is the "reusable components over duplicated code"
 * principle from the project brief in practice.
 *
 * `as="link"` lets the same component render either a real <button>
 * (for actions like "Add to cart") or a react-router <Link> (for
 * navigation like "Sign up"), so callers don't need two components.
 */
const VARIANTS = {
  primary:
    "bg-primary text-white hover:bg-primary-dark focus-visible:outline-primary",
  outline:
    "bg-transparent text-ink border border-gray-300 hover:border-ink focus-visible:outline-primary",
  ghost:
    "bg-transparent text-primary hover:bg-primary-light focus-visible:outline-primary",
};

const SIZES = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-sm",
  lg: "px-7 py-4 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  as = "button",
  to,
  type = "button",
  className = "",
  onClick,
  ...rest
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl font-semibold
    transition-colors duration-200 outline-offset-2
    ${VARIANTS[variant]} ${SIZES[size]} ${className}`;

  if (as === "link" && to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...rest}>
      {children}
    </button>
  );
}
