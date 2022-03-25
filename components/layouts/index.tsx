import { NextPage } from "next";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TopNav from "./TopNav";

type reactChild = {
  children: React.ReactNode;
};

const Layouts: NextPage<reactChild> = ({ children }) => {
  return (
    <div>
      <TopNav />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layouts;
