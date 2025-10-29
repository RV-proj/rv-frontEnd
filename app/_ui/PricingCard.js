const Card = ({ title, list_items, action }) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-linear-to-br from-slate-900 to-slate-800/60 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur ">
      {/* Card content goes here */}
      {title && <h2 className="text-lg font-bold text-white">{title}</h2>}
      {/* list item */}
      {list_items && (
        <ul className="mt-4 space-y-2">
          {list_items.map((item, index) => (
            <li key={index} className="flex items-center gap-3 text-sm">
              {item.icon}
              <span className="text-white text-sm">{item.text}</span>
            </li>
          ))}
        </ul>
      )}
      {/* action */}
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
};

export default Card;
