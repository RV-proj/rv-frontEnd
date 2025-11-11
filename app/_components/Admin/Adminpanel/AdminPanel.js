import Divider from "@/_ui/Divider";
import Sidebar from "./Sidebar";

const AdminPanel = ({ children }) => {
  return (
    <section className="px-5 pt-5">
      <div className="flex h-screen w-full gap-3 flex-col md:flex-row md:overflow-hidden">
        {/* sidebar */}
        <div className="w-full flex-none md:w-[15%] ">
          <Sidebar />
        </div>

        {/* divider */}
        <Divider />

        {/* sidebar element */}
        <div className="md:w-[85%] w-full grow overflow-y-auto ">
          {children}
        </div>
      </div>
    </section>
  );
};

export default AdminPanel;
