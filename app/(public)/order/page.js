import { getOrderByEmail } from "@/_lib/api/orders";
import { auth } from "@/_lib/authSession/auth";
import OrderTable from "@/_ui/OrderTable";
import { SpinnerMini } from "@/_ui/Spinner";

export default async function Page() {
  const session = await auth();
  const profileData = session.user;
  const email = session.user.email;
  const isPending = null;

  const data = await getOrderByEmail(email);
  const latestOrder = data?.length
    ? [...data].sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      )[0]
    : null;

  return (
    <section id="userOrder" className="bg-slate-950/50 py-5">
      <div className="container mx-auto px-4 sm:px-6">
        text
        <h1 className="text-white font-bold text-2xl capitalize">My order</h1>
        <div className="grid grid-cols-2 gap-5 mb-10">
          {/* profile data */}
          <div className="mt-5 bg-slate-800 p-5 rounded-lg">
            <h1 className="text-gray-300 font-semibold mb-2">
              Personal Profile
            </h1>
            {profileData &&
              Object.entries(profileData)
                .slice(0, 2)
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

                  {/* <div className="flex items-center gap-3">
                    <h1 className="font-semibold text-gray-400">Address:</h1>
                    <h1>{latestOrder.deliveryAddress}</h1>
                  </div> */}
                </div>
              )
            )}
          </div>
        </div>
        <OrderTable data={data} />
      </div>
    </section>
  );
}
