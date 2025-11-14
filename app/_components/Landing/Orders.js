"use client";

import { useUser } from "@/_lib/userSession/useUser";

const Orders = () => {
  const user = useUser();

  const profileData = user?.user_metadata;

  return (
    <section className="bg-slate-950/60 py-5">
      <div className="container mx-auto  max-w-7xl px-4 sm:px-6">
        {/* text */}
        <h1 className="text-white font-bold text-2xl capitalize">My order</h1>

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

            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orders;
