import FooterCart from "@/_components/Cart.js/FooterCart";
import Footer from "@/_ui/Footer";
import Header from "@/_ui/Header";

const publicLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <FooterCart />
      <Footer />
    </>
  );
};

export default publicLayout;
