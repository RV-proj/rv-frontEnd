import Table from "@/_ui/Table";

const Order = () => {
  const data = [
    {
      email: "john@example.com",
      name: "John Doe",
      phone: "+1-555-0101",
      size: "Medium",
      quality: "Premium",
      price: 45.99,
      status: "completed",
    },
    {
      email: "sarah.smith@email.com",
      name: "Sarah Smith",
      phone: "+1-555-0102",
      size: "Large",
      quality: "Standard",
      price: 29.99,
      status: "pending",
    },
    {
      email: "mike.johnson@web.com",
      name: "Mike Johnson",
      phone: "+1-555-0103",
      size: "Small",
      quality: "Premium",
      price: 39.99,
      status: "shipped",
    },
    {
      email: "emily.wilson@mail.com",
      name: "Emily Wilson",
      phone: "+1-555-0104",
      size: "Large",
      quality: "Economy",
      price: 19.99,
      status: "processing",
    },
    {
      email: "david.brown@site.com",
      name: "David Brown",
      phone: "+1-555-0105",
      size: "Medium",
      quality: "Standard",
      price: 34.99,
      status: "completed",
    },
    {
      email: "lisa.taylor@online.com",
      name: "Lisa Taylor",
      phone: "+1-555-0106",
      size: "X-Large",
      quality: "Premium",
      price: 59.99,
      status: "cancelled",
    },
    {
      email: "robert.garcia@email.com",
      name: "Robert Garcia",
      phone: "+1-555-0107",
      size: "Small",
      quality: "Economy",
      price: 15.99,
      status: "completed",
    },
    {
      email: "amanda.chen@web.com",
      name: "Amanda Chen",
      phone: "+1-555-0108",
      size: "Medium",
      quality: "Premium",
      price: 42.99,
      status: "shipped",
    },
    {
      email: "kevin.martin@mail.com",
      name: "Kevin Martin",
      phone: "+1-555-0109",
      size: "Large",
      quality: "Standard",
      price: 31.99,
      status: "pending",
    },
    {
      email: "jennifer.lee@site.com",
      name: "Jennifer Lee",
      phone: "+1-555-0110",
      size: "Small",
      quality: "Premium",
      price: 38.99,
      status: "completed",
    },
  ];

  return (
    <div>
      <h1 className=" text-white text-center text-3xl font-bold">All Order</h1>

      <div className="mt-5">
        <Table data={data} />
      </div>
    </div>
  );
};

export default Order;
