import { statuses } from "@/_lists/status";
import { X } from "lucide-react";

export default function AdminStatusDrawer({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 opacity-95"
      />

      <div className="absolute top-1/2 right-0 translate-y-[-50%] w-1/6 h-[50vh] bg-slate-950 shadow-xl rounded-l-2xl transform animate-slideInRight z-50">
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="font-bold">Change status to</h2>
          <button
            onClick={onClose}
            className="text-slate-700 hover:scale-110 hover:cursor-pointer text-xl font-bold"
          >
            <X />
          </button>
        </div>

        <ul className="p-4 flex flex-col gap-2">
          {Object.entries(statuses).map(([key, items]) => (
            <li
              key={key}
              className={`relative p-2 rounded-md bg-linear-to-r ${items.className} cursor-pointer group scale-90 hover:scale-100 transition-all`}
            >
              {key}
              <span className="absolute left-0 bottom-10 bg-black text-white text-xs p-2 rounded opacity-0 group-hover:opacity-90 transition-opacity duration-200 z-50">
                {items.description}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
