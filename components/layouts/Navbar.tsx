import { NextPage } from "next";

const Navbar: NextPage = () => {
  return (
    <div>
      <div className="bg-white py-10">
        <div className="flex container mx-auto justify-between">
          <h1>Logo</h1>
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
