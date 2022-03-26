import React from "react";
import Cards from "./Cards";

export default function Gridx4() {
  return (
    <div className="bg-white">
      <div className="grid mt-1 gap-1 md:grid-cols-2 md:h-[52vh] mx-1">
        <Cards height={27} width={100} background="/assets/slide_1.jpg">
          <div className="md:h-full h-[12rem]">
            <h1>Timeless Design</h1>
          </div>
        </Cards>
        <div className="grid md:grid-cols-2  gap-1 ">
          <div className="grid  gap-1 ">
            <Cards height={27} width={100} background="/assets/slide_9.jpg">
              <div className="md:h-full h-[12rem]">
                <h1>Timeless Design</h1>
              </div>
            </Cards>
            <Cards height={27} width={100} background="/assets/banner_3.jpg">
              <div className="md:h-full h-[12rem]">
                <h1>Timeless Design</h1>
              </div>
            </Cards>
          </div>
          <div className="grid  gap-1">
            <div className="grid ">
              <Cards height={27} width={100} background="/assets/banner_13.jpg">
                <div className="md:h-full h-[12rem]">
                  <h1>Timeless Design</h1>
                </div>
              </Cards>
            </div>
            <div className="grid ">
              <Cards height={27} width={100} background="/assets/banner_1.jpg">
                <div className="md:h-full h-[25rem]">
                  <h1>Timeless Design</h1>
                </div>
              </Cards>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
