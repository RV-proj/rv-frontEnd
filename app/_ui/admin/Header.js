"use client";

import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();
  const pageTitle = path
    .split("/")
    .pop()
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="col-span-6 bg-slate-900 rounded-4xl p-5 flex justify-between">
      <p className="text-2xl">{pageTitle}</p>
      <div>Icons</div>
    </div>
  );
}
