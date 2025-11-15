"use client";

import { getOrders } from "@/_lib/api/getOrders";
import { SpinnerMini } from "@/_ui/Spinner";
import Table from "@/_ui/Table";
import { useQuery } from "@tanstack/react-query";

export default function Page() {
  const { data, isPending } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
  });

  return (
    <section id="all-order">
      {/* <p>All order table</p> */}

      {isPending ? <SpinnerMini size="md" /> : <Table data={data} />}
    </section>
  );
}
