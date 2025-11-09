import Sidebar from "./Sidebar";

const AdminPanel = ({ children }) => {
  return (
    <section className="container mx-auto max-w-7xl px-4 sm:px-6 mt-5">
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64 ">
          <Sidebar />
        </div>
        <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
      </div>
    </section>
  );
};

export default AdminPanel;
