import Sidebar from "@/_ui/admin/Sidebar";

const publicLayout = ({ children }) => {
  return (
    <div className="bg-slate-800 grid grid-cols-[16rem_1fr] h-lvh gap-5 mx-auto w-full text-white">
      <Sidebar />
      <div className="bg-slate-900 rounded-l-4xl p-10">{children}</div>
    </div>
  );
};

export default publicLayout;
