"use client";
// import { getOrders } from "@/_lib/api/orders";
import { SpinnerMini } from "@/_ui/Spinner";
import { useQuery } from "@tanstack/react-query";
import OrderTable from "@/_ui/OrderTable";
import { getAllOrders } from "@/_lib/api/getAllOrders";

export default function Page() {
  const { data, isPending } = useQuery({
    queryKey: ["orders"],
    queryFn: () => getAllOrders(),
  });

  // console.log(data);

  return (
    <section id="all-order">
      {isPending ? (
        <SpinnerMini size="md" />
      ) : (
        <div className="relative overflow-x-auto bg-[#0F172A] rounded-xl border border-[#1E293B] shadow">
          <OrderTable data={data} isAdmin={true} />
        </div>
      )}
    </section>
  );
}
