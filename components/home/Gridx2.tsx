import React from "react";
import Cards from "./Cards";

export default function Gridx2() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-1 mt-1 h-[40rem]">
        <div className="grid col-span-2 gap-1  ">
          <div className="grid row-span-3 gap-1  grid-cols-2 ">
            <Cards width={100} height={60} background="/assets/banner_2.jpg">
              <h1>A RELAXED ELEGANCE</h1>
            </Cards>
            <Cards color="#ceb180" width={100} height={90} background="red">
              <h1>A RELAXED ELEGANCE</h1>
            </Cards>
          </div>
          <div className="grid  ">
            <Cards
              color="#43474d"
              width={100}
              height={60}
              background="/assets/banner_2.jpg"
            >
              <h1>FREE SHIPPING ON OVER$100</h1>
            </Cards>
          </div>
        </div>
        <div className="grid  ">
          <Cards width={100} height={60} background="/assets/slide_8_1000x.jpg">
            <h1>A RELAXED ELEGANCE</h1>
          </Cards>
        </div>
      </div>
    </div>
  );
}
