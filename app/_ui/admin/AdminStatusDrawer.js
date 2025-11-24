import { X } from "lucide-react";

export default function AdminStatusDrawer({ open, onClose }) {
  if (!open) return null; // only render when open

  return (
    <div className="fixed inset-0 z-40">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 opacity-95"
      />

      <div className="absolute top-1/2 right-0 translate-y-[-50%] w-1/6 h-[50vh] bg-slate-950 shadow-xl rounded-l-2xl transform animate-slideInRight z-50 ">
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="font-bold">Change status to</h2>
          <button
            onClick={onClose}
            className="text-slate-700 hover:text-black text-xl font-bold"
          >
            <X />
          </button>
        </div>

        <div className="p-4 text-slate-800">Drawer Content</div>
      </div>
    </div>
  );
}
