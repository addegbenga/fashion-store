import React from "react";
import Cards from "./Cards";

export default function Gridx5() {
  return (
    <div>
      <div className="grid grid-cols-2 mt-1 gap-1 h-[35rem]">
        <div className="grid gap-1">
          <Cards color="#ceb180" width={100}>
            <h1>END OF SEASON</h1>
          </Cards>
          <div className="grid  row-span-3">
            <Cards background="/assets/slide_12.jpg" width={100}>
              <h1>hello</h1>
            </Cards>
          </div>
        </div>
        <div className="grid gap-1">
          <div className="grid row-span-3">
            <Cards background="/assets/newsletter_banner.jpg" width={100}>
              <h1>hello</h1>
            </Cards>
          </div>

          <Cards color="red" width={100}>
            <h1>hello</h1>
          </Cards>
        </div>
      </div>
    </div>
  );
}
