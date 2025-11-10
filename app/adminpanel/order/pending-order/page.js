import AdminPanel from "@/_components/Admin/Adminpanel/AdminPanel";
import PendingOrder from "@/_components/Admin/Order/PendingOrder";

const page = () => {
  return (
    <AdminPanel>
      <PendingOrder />
    </AdminPanel>
  );
};

export default page;
