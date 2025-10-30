export default function Card({ icon, title, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-linear-to-br from-slate-900 to-slate-800/60 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-lg bg-cyan-400/15 p-2 text-cyan-300 ring-1 ring-cyan-400/20">
          {icon}
        </div>
        <div>
          <h3 className="font-bold text-white">{title}</h3>
          <p className="mt-1 text-sm text-white/70">{text}</p>
        </div>
      </div>
    </div>
  );
}
