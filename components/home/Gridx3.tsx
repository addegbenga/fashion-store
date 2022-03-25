import React from "react";
import Cards from "./Cards";

export default function Gridx3() {
  return (
    <div>
      <div className="grid grid-cols-2 mt-1 h-[40rem]">
        <Cards width={100} height={60} background="/assets/banner_2.jpg">
          <h1>A RELAXED ELEGANCE</h1>
        </Cards>
        <Cards
          width={100}
          height={60}
          background="/assets/product4_01_78f7c272-feef-40c6-bbed-9cf1fdd77341_400x.jpg"
        >
          <h1>A RELAXED ELEGANCE</h1>
        </Cards>
      </div>
    </div>
  );
}
