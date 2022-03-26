import { NextPage } from "next";
import Image from "next/image";

const Navbar: NextPage = () => {
  return (
    <div>
      <div className="bg-white py-10">
        <div className="flex 2xl:container px-4 mx-auto justify-between items-center">
          logo
          <div className="flex hidden  gap-8 text-sm">
            <h1>SKINS</h1>
            <h1>FEATURES</h1>
            <h1>FASHION</h1>
            <h1>PAGES</h1>
            <h1>BUY VENEDOR</h1>
          </div>
          <div className="flex">
            <h1>1</h1>
            <h1>2</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
