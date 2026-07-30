export default function StepCard({ step, title, description }) {
  return (
    <div className="relative rounded-2xl border border-gray-100 bg-white p-8">
      <span className="text-sm font-bold text-primary/40">{step}</span>
      <h3 className="mt-3 text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-500">
        {description}
      </p>
    </div>
  );
}
