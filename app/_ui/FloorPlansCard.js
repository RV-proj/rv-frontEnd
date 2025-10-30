const FloorPlansCard = (title, badge) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-linear-to-br from-slate-900 to-slate-800/60 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur ">
      <div>
        {title && <h2 className="text-lg font-bold text-white">{title}</h2>}
        {badge && (
          <span className="mt-2 inline-block rounded-full bg-blue-600/20 px-3 py-1 text-sm font-medium text-blue-400">
            {badge}
          </span>
        )}
      </div>
    </div>
  );
};

export default FloorPlansCard;
