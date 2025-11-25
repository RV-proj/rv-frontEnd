"use client";

import {
  CircleGauge,
  Logs,
  UserCog,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  {
    name: "Dashboard",
    href: "/adminpanel",
    icon: <CircleGauge className="h-5 w-5" />,
  },
  {
    name: "Order",
    href: "/adminpanel/order",
    icon: <Logs className="h-5 w-5" />,
    subLinks: [
      { name: "All Orders", href: "/adminpanel/order/all-order" },
      { name: "Create Order", href: "/adminpanel/order/create-order" },
    ],
  },
  {
    name: "Users",
    href: "/profile",
    icon: <UserCog className="h-5 w-5" />,
    subLinks: [
      { name: "All Users", href: "/profile/all-users" },
      { name: "Create User", href: "/profile/create-user" },
    ],
  },
];

export default function SideNavigation() {
  const pathname = usePathname();
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (name) => {
    setOpenMenus((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <nav className="row-span-10 bg-slate-900 rounded-e-4xl p-5">
      <p className="font-semibold text-3xl mb-10">Admin Panel</p>
      <ul className="flex flex-col gap-2 text-lg">
        {navLinks.map((link) => (
          <li key={link.name}>
            {link.subLinks ? (
              <>
                <button
                  onClick={() => toggleMenu(link.name)}
                  className={`w-full flex justify-between items-center py-3 px-5 rounded-lg hover:bg-slate-950 hover:text-slate-100 transition-colors font-semibold ${
                    pathname.startsWith(link.href) ? "bg-slate-950" : ""
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {link.icon}
                    <span>{link.name}</span>
                  </div>
                  {openMenus[link.name] ? (
                    <ChevronUp className="h-5 w-5 transition-transform duration-300" />
                  ) : (
                    <ChevronDown className="h-5 w-5 transition-transform duration-300" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
                    openMenus[link.name]
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="pl-12 flex flex-col gap-1 mt-1 list-disc">
                    {link.subLinks.map((sub) => (
                      <li key={sub.name}>
                        <Link
                          className={`py-2 px-5 rounded-lg hover:bg-slate-950 hover:text-slate-100 transition-colors block ${
                            pathname === sub.href ? "bg-slate-950" : ""
                          }`}
                          href={sub.href}
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              <Link
                className={`py-3 px-5 hover:bg-slate-950 hover:text-slate-100 transition-colors flex items-center gap-4 font-semibold ${
                  pathname === link.href ? "bg-slate-950" : ""
                }`}
                href={link.href}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            )}
          </li>
        ))}
        <li className="fixed bottom-5 left-5">
          {/* <SignOutButton /> */} Sign Out Button
        </li>
      </ul>
    </nav>
  );
}
