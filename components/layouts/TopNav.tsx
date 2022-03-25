import { NextPage } from "next";

const TopNav: NextPage = () => {
  return (
    <div>
      <div className="bg-yellow-500">
        <div className="flex container mx-auto justify-between">
          <h1>Links</h1>
          <div className="flex gap-6">
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
