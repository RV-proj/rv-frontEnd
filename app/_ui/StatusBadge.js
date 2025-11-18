export default function StatusBadge({ status }) {
  const stat = status.toUpperCase();

  const styles = {
    PENDING: "from-yellow-500/20 to-yellow-700/30 text-yellow-300",
    "WAITING FOR CONFIRMATION":
      "from-orange-500/20 to-orange-700/30 text-orange-300",
    CONFIRMED: "from-blue-500/20 to-blue-700/30 text-blue-300",
    "ON ROUTE": "from-purple-500/20 to-purple-700/30 text-purple-300",
    DELIVERED: "from-green-500/20 to-green-700/30 text-green-300",
    CANCELLED: "from-red-500/20 to-red-700/30 text-red-300",
    REFUNDED: "from-rose-500/20 to-rose-700/30 text-rose-300",
    FAILED: "from-gray-500/20 to-gray-700/30 text-gray-300",
  };

  const color =
    styles[stat] || "from-slate-600/20 to-slate-800/30 text-slate-300";

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-br ${color} border border-white/5`}
    >
      {stat}
    </span>
  );
}
