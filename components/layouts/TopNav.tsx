import { NextPage } from "next";

const TopNav: NextPage = () => {
  return (
    <div>
      <div className="bg-[#b99d6b]">
        <div className="flex 2xl:container px-6 mx-auto justify-between">
          <h1>Links</h1>
          <div className="flex text-sm gap-6">
            <h1>USD</h1>
            <h1>English</h1>
            <h1>Cart</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
