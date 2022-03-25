import { NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <div className="bg-[#43474d]">
      <div>
        <h1>quick contact</h1>
        <div>
          <input type="text" placeholder="Enter your e-mail*" />
          <textarea placeholder="Write your review"></textarea>
          <button>SEND A MESSAGE</button>
        </div>
      </div>
      <div>
        <h1>contact details</h1>
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

      <div>
        <h1>my account</h1>
        <div>
          <h1>My account</h1>
          <h1>Personal information</h1>
          <h1>Wishlist</h1>
          <h1>Search</h1>
          <h1>Latest News</h1>
        </div>
      </div>

      <div>
        <h1>Customer service</h1>
        <div>
          <h1>Help & contact</h1>
          <h1>Terms and Conditions</h1>
          <h1>Delivery</h1>
          <h1>Legal notice</h1>
          <h1>Buy Venedor</h1>
        </div>
      </div>

      <div>
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
