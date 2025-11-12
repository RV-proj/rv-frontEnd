"use client";

import { useState } from "react";
import { LogOut } from "lucide-react";

const DropDown = ({ item, signOut }) => {
  const [isOpen, setIsOpen] = useState(false);

  const profileData = item?.user_metadata;

  console.log(profileData);

  return (
    <div className="relative">
      {/* profile picture */}
      {profileData?.avatar_url && (
        <img
          onClick={() => setIsOpen(!isOpen)}
          src={profileData?.avatar_url}
          className="h-11 w-11 object-cover rounded-full cursor-pointer"
          alt="user avatar"
        />
      )}

      {/* logic for dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-44 rounded-2xl border border-white/10 bg-linear-to-br from-slate-900 to-slate-800/60 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur">
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

          {signOut && (
            <button
              className="text-black/70 hover:text-white font-bold py-2 mt-3 bg-sky-300 hover:bg-red-300 cursor-pointer transition-all duration-300 w-full rounded-lg"
              onClick={signOut}
            >
              <div className="flex gap-1 justify-center items-center">
                <LogOut />
                <h1>Sign Out</h1>
              </div>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default DropDown;
