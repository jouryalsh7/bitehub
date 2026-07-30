export default function CategoryCard({ category }) {
  return (
    <button className="flex min-w-[110px] flex-col items-center gap-3 rounded-2xl border border-gray-100 bg-white px-5 py-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-md">
      <span className="text-3xl">{category.icon}</span>
      <span className="text-sm font-medium text-ink">{category.name}</span>
    </button>
  );
}
