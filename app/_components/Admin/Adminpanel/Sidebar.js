import Collapse from "@/_ui/Collapse";

const Sidebar = () => {
  const sideBar = [
    {
      id: "1",
      title: "Order",
      content: [
        {
          name: "all order",
          link: "/adminpanel/order/all-order",
        },
        {
          name: "pending order",
          link: "/adminpanel/order/pending-order",
        },
        {
          name: "delivered order",
          link: "/delivered-order",
        },
        {
          name: "cancelled order",
          link: "/cancelled-order",
        },
      ],
    },
  ];
  return (
    <div className="text-white">
      {sideBar.map((sidebar, index) => (
        <Collapse key={index} {...sidebar} defaultOpen={false} />
      ))}
    </div>
  );
};

export default Sidebar;
