"use client";

import { getOrderByEmail } from "@/_lib/api/getOrders";
import { useUser } from "@/_lib/userSession/useUser";
import { SpinnerMini } from "@/_ui/Spinner";
import { useQuery } from "@tanstack/react-query";

const Orders = () => {
  const user = useUser();

  const profileData = user?.user_metadata;

  // data fetch
  const { data, isPending } = useQuery({
    queryKey: ["orders", profileData?.email],
    queryFn: () => getOrderByEmail(profileData?.email),
  });

  // filter order for updated data
  const latestOrder = data?.length
    ? [...data].sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      )[0]
    : null;

  const headers = [
    "created_at",
    "deliveryAddress",
    "phone",
    "quality",
    "status",
    "price",
    "amount_paid",
  ];
  const headerText = {
    created_at: "Placed On",
    quality: "Quality",
    phone: "Phone",
    deliveryAddress: "Address",
    amount_paid: "Paid Amount",
    price: "Price",
    status: "Status",
  };

  return (
    <section className="bg-slate-950/60 py-5 h-screen">
      <div className="container mx-auto  max-w-7xl px-4 sm:px-6">
        {/* text */}
        <h1 className="text-white font-bold text-2xl capitalize">My orders</h1>

        <div className="grid grid-cols-2 gap-5">
          {/* profile data */}
          <div className="mt-5 bg-slate-800 p-5 rounded-lg">
            <h1 className="text-gray-300 font-semibold mb-2">
              Personal Profile
            </h1>
            {profileData &&
              Object.entries(profileData)
                .slice(0, 4)
                .map(([key, value]) => {
                  if (key === "avatar_url") return null;
                  return (
                    <div key={key} className="block text-gray-300 truncate">
                      {value}
                    </div>
                  );
                })}
          </div>

          {/* address */}
          <div className="mt-5 bg-slate-800 p-5 rounded-lg">
            <h1 className="text-gray-300 font-semibold mb-2">Address Book</h1>

            {isPending ? (
              <SpinnerMini size="sm" />
            ) : (
              latestOrder && (
                <div key={latestOrder.id} className="text-gray-300">
                  <div className="flex items-center gap-3">
                    <h1 className="font-semibold text-gray-400">Phone:</h1>
                    <h1>{latestOrder.phone}</h1>
                  </div>

                  <div className="flex items-center gap-3">
                    <h1 className="font-semibold text-gray-400">Address:</h1>
                    <h1>{latestOrder.deliveryAddress}</h1>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* orders */}
        <div className="pt-20 text-white">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700 ">
                {headers.map((h) => (
                  <th
                    key={h}
                    className="p-2 text-center font-semibold text-white/50"
                  >
                    {headerText[h]}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="">
              {isPending && (
                <tr className="">
                  <td colSpan={headers.length} className="text-center py-4">
                    <SpinnerMini size="md" />
                  </td>
                </tr>
              )}
              {data?.map((row) => (
                <tr
                  key={row.id}
                  className="border-b border-slate-800 text-center"
                >
                  {headers.map((h) => {
                    const value = row[h];
                    if (h === "created_at" && value) {
                      return (
                        <td key={h} className="p-2">
                          {new Date(value).toLocaleDateString()}
                        </td>
                      );
                    }
                    return (
                      <td key={h} className="p-2">
                        {String(value ?? "")}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Orders;
