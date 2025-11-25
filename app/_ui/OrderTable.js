"use client";

import { tripLengthCalc } from "@/_lib/tripLengthCalc";
import { getPrice } from "@/_lib/getPrice";
import { useState } from "react";
import StatusBadge from "./StatusBadge";
import TierBadge from "./TierBadge";
import AdminStatusDrawer from "./admin/AdminStatusDrawer";

export default function OrderTable({ data, isAdmin }) {
  const [showDrawer, setShowDrawer] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  return (
    <>
      <table className="w-full text-sm text-left text-gray-300">
        <thead className="bg-slate-950 text-gray-400 border-b border-[#334155]">
          <tr>
            <th className="px-6 py-3 font-medium">ID/Created At</th>
            <th className="px-6 py-3 font-medium">User Info</th>
            <th className="px-6 py-3 font-medium">Order Details</th>
            <th className="px-6 py-3 font-medium">Delivery Dates</th>
            <th className="px-6 py-3 font-medium">Price Details</th>
            <th className="px-6 py-3 font-medium">Status</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => {
            const remaining = item.price - item.amount_paid;
            const price = getPrice(item.size, item.quality);
            const flexPrice = price?.flexPrice ?? null;

            return (
              <tr
                key={item.id}
                className={`border-b border-[#1E293B] ${
                  index % 2 === 0 ? "bg-[#0F172A]" : "bg-[#111827]"
                }`}
              >
                <th className="px-6 py-4 font-semibold text-gray-200 whitespace-nowrap">
                  <div>
                    <p>{item.id}</p>
                    <p>{new Date(item.created_at).toLocaleString()}</p>
                  </div>
                </th>
                <td className="px-6 py-4">
                  <div>
                    <p>{item.name}</p>
                    <p>{item.email}</p>
                    <p>{item.phone}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <TierBadge tierKey={item.quality} />

                    <p>Size: {item.size}</p>
                    <p>Qty: x{item.quantity}</p>
                    <p>Flex Price: ${flexPrice}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <p>
                      {item.startDate} to {item.endDate}
                    </p>
                    <p>
                      Total Date: {tripLengthCalc(item.startDate, item.endDate)}{" "}
                      days
                    </p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <p>Total Price: ${item.price}</p>
                    <p>Paid: ${item.amount_paid}</p>
                    <p>Remaining: ${remaining}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <p>
                    {isAdmin ? (
                      <button
                        onClick={() => {
                          setSelectedOrder({
                            id: item.id,
                            status: item.status,
                          });
                          setShowDrawer(true);
                        }}
                      >
                        <StatusBadge status={item.status} />
                      </button>
                    ) : (
                      <StatusBadge status={item.status} />
                    )}
                  </p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <AdminStatusDrawer
        open={showDrawer}
        orderId={selectedOrder?.id}
        currentStatus={selectedOrder?.status}
        onClose={() => setShowDrawer(false)}
      />
    </>
  );
}
