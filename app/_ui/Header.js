import { auth } from "@/_lib/authSession/auth";
import Link from "next/link";
import Logo from "./Logo";
import SignInWithGoogle from "@/_components/Auth/SigninWithGoogleButton";
import UserProfile from "@/_components/Auth/UserProfile";
import CallButton from "./CallButton";
import BookFlexButton from "./BookFlexButton";
import HeaderMobile from "./HeaderMobile";

const links = [
  { href: "#", label: "Why Flex+" },
  { href: "#", label: "How it Works" },
  { href: "/rvSelector", label: "RV Selector" },
];

export default async function Header() {
  const session = await auth();
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

        <div className="hidden items-center gap-2 md:flex">
          <CallButton />
          <BookFlexButton />
          {session ? <UserProfile session={session} /> : <SignInWithGoogle />}
        </div>

        <HeaderMobile links={links} session={session} />
      </div>
    </header>
  );
}
