import { NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <div className="bg-[#43474d]  text-[#d1d9e1] ">
      <div className="flex flex-col md:flex-row gap-20 text-[#d1d9e1]  px-4 py-32 ">
        <div className=" flex flex-col gap-8 ">
          <h1 className="text-lg"> quick contact</h1>
          <div className="flex flex-col gap-2 items-start justify-center">
            <input
              className="p-2 grid bg-transparent border w-full md:w-[30rem]  "
              type="text"
              placeholder="Enter  your e-mail*"
            />
            <textarea
              className="grid bg-transparent border p-2 w-full md:w-[30rem] h-[6rem]"
              placeholder="Write your review"
            ></textarea>
            <button className="text-sm mt-2 font-semibold">
              SEND A MESSAGE
            </button>
          </div>
        </div>
        <div className="bg-white h-[18rem] hidden md:flex bg-opacity-20 w-0.5 mx-10 overflow-y-hidden">
          {" "}
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-lg">contact details</h1>
          <div>
            <h1>0203 - 980 - 14 - 79</h1>
            <h1>0203 - 478 - 12 - 96</h1>
          </div>
          <div>
            <h1>vene@gmail.com</h1>
            <h1>venedor@mail.com</h1>
          </div>
          <div>
            <h1>ven_shop_contact</h1>
            <h1>venedor_support</h1>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <h1 className="text-lg">my account</h1>
          <div className="flex flex-col gap-3">
            <h1>My account</h1>
            <h1>Personal information</h1>
            <h1>Wishlist</h1>
            <h1>Search</h1>
            <h1>Latest News</h1>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <h1 className="text-lg">Customer service</h1>
          <div className="flex flex-col gap-3">
            <h1>Help & contact</h1>
            <h1>Terms and Conditions</h1>
            <h1>Delivery</h1>
            <h1>Legal notice</h1>
            <h1>Buy Venedor</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-between py-4 items-center px-4">
        <div>
          <h1>COOKIES INFORMATION</h1>
          <p>Easy returns. Free shipping on orders over $100.</p>
        </div>
        <div>
          <h1>Socials</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
