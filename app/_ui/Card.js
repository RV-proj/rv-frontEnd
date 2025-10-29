const Card = ({ title, list_items, icons }) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-linear-to-br from-slate-900 to-slate-800/60 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur ">
      {/* Card content goes here */}
      {title && <h2 className="text-lg font-bold text-white">{title}</h2>}
    </div>
  );
};

export default Card;
