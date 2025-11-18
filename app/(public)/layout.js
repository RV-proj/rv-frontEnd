import FooterCart from "@/_components/Cart/FooterCart";
import { auth } from "@/_lib/authSession/auth";
import Footer from "@/_ui/Footer";
import Header from "@/_ui/Header";

export default async function publicLayout({ children }) {
  const session = await auth();
  return (
    <>
      <Header />
      {children}
      {session && <FooterCart />}
      <Footer />
    </>
  );
}
