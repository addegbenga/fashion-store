import React from "react";
import Cards from "./Cards";

export default function Gridx1() {
  return (
    <div className="bg-white">
      <div className="grid gap-1 grid-cols-2 h-[44rem] mx-1">
        <Cards height={60} width={100} background="/assets/slide_1.jpg">
          <h1>Timeless Design</h1>
        </Cards>
        <div className="grid grid-cols-2  gap-1 ">
          <div className="grid  gap-1 ">
            <Cards height={30} width={100} background="/assets/slide_9.jpg">
              <h1>Share you story</h1>
            </Cards>
            <Cards height={30} width={100} background="/assets/banner_3.jpg">
              <h1>Timeless Design</h1>
            </Cards>
          </div>
          <div className="grid  gap-1">
            <div className="grid row-span-3">
              <Cards height={30} width={100} background="/assets/banner_13.jpg">
                <h1>Share you story</h1>
              </Cards>
            </div>
            <div className="grid row-span-2">
              <Cards height={30} width={100} background="/assets/banner_1.jpg">
                <h1>Timeless Design</h1>
              </Cards>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
