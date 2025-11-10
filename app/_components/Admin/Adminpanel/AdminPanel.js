import Sidebar from "./Sidebar";

const AdminPanel = ({ children }) => {
  return (
    <section className="px-5 pt-5">
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-64 ">
            <Sidebar />
          </div>
          <div className="grow p-6 md:overflow-y-auto ">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default AdminPanel;
