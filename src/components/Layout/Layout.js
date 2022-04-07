import TopButton from "../Buttons/TopButton";
import Footer from "./Footer";
import Navigation from "./Navigation";

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      {children}
      <TopButton />
      <Footer />
    </>
  );
}
