/**
 * Consistent horizontal padding + max-width wrapper.
 * Every page section sits inside this so content lines up
 * on every screen size instead of each page inventing its own
 * "max-w-7xl mx-auto px-4" string.
 */
export default function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-6 md:px-10 ${className}`}>
      {children}
    </div>
  );
}
