export default function Pill({ icon, children }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/90">
      {icon}
      <span>{children}</span>
    </div>
  );
}
