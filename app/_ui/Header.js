"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";
import BookFlexButton from "./BookFlexButton";
import CallButton from "./CallButton";

const links = [
  { href: "#", label: "Why Flex+" },
  // { href: "#", label: "Destinations" },
  // { href: "#", label: "Experiences" },
  { href: "#", label: "How it Works" },
  { href: "/rvSelector", label: "RV Selector" },
  // { href: "/rvTypes", label: "RV Types" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(false);
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-900/80 backdrop-blur supports-backdrop-filter:bg-slate-900/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-3 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <Logo />
        </div>

        <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          {links.map((l, index) => (
            <Link key={index} href={l.href} className="hover:text-white">
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop-view right portion */}
        <div className="hidden items-center gap-2 md:flex">
          <CallButton />
          <BookFlexButton />
        </div>

        {/* Mobile-view Right Hamburger */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 text-white/80 hover:bg-white/10 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile-view dropdown links */}
      <div
        className={`md:hidden transition-[max-height,opacity] duration-200 ease-out overflow-hidden ${
          open ? "max-h-[60vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-3 pb-3 sm:px-6">
          <nav className="flex flex-col gap-1 rounded-xl border border-white/10 bg-slate-900/70 p-2">
            {links.map((l, index) => (
              <Link
                key={index}
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm text-white/90 hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </Link>
            ))}

            <div className="mt-2 grid grid-cols-1 gap-2">
              <CallButton />
              <BookFlexButton />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
