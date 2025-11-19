"use client";
import { getOrders } from "@/_lib/api/orders";
import { SpinnerMini } from "@/_ui/Spinner";
import { useQuery } from "@tanstack/react-query";
import AllOrderTable from "@/_components/Admin/Order/AllOrderTable";

export default function Page() {
  const { data, isPending } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
  });

  console.log(data);

  return (
    <section id="all-order">
      {/* <p>All order table</p> */}

      {isPending ? <SpinnerMini size="md" /> : <AllOrderTable data={data} />}
    </section>
  );
}
