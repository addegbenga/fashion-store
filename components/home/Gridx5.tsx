import React from "react";
import { FaPinterestP } from "react-icons/fa";
import Cards from "./Cards";

export default function Gridx5() {
  return (
    <div>
      <div className="grid mx-1 md:grid-cols-2 mt-1 gap-1 md:h-[75vh]">
        <div className="grid gap-1">
          <Cards height={10} color="#ceb180" width={100}>
            <div className="p-4 md:h-full h-[10rem] ">
              <div className="border flex justify-center md:text-2xl md:tracking-wide items-center text-white h-full">
                <h1>END OF SEASON SALE</h1>
              </div>
            </div>
          </Cards>
          <div className="md:grid hidden  md:row-span-3">
            <Cards height={27} background="/assets/slide_12.jpg" width={100}>
              <div className=" h-full flex justify-center items-center">
                <div className="border-4 flex justify-center items-center text-white h-60 w-60">
                  <div className="text-5xl">
                    <h1>LAYER</h1>
                    <h1>-OVER-</h1>
                    <h1>LAYER</h1>
                  </div>
                </div>
              </div>
            </Cards>
          </div>
        </div>
        <div className="grid gap-1">
          <div className="grid md:row-span-3">
            <Cards
              height={18}
              background="/assets/newsletter_banner.jpg"
              width={100}
            >
              <div className="md:h-full h-[20rem] flex flex-col mx-5 md:mx-14 justify-center items-center">
                <h1 className="text-4xl px-8 py-5 text-white">
                  BE THE FIRST TO KNOW
                </h1>
                <input
                  className="p-2.5 md:p-4 w-full "
                  type="text"
                  placeholder="Enter your email address"
                />
              </div>
            </Cards>
          </div>
          <div className="grid md:hidden  md:row-span-3">
            <Cards height={20} background="/assets/slide_12.jpg" width={100}>
              <div className="p-20 h-full">
                <div className="border-4 flex justify-center items-center text-white h-full">
                  <div className="text-5xl">
                    <h1>LAYER</h1>
                    <h1>-OVER-</h1>
                    <h1>LAYER</h1>
                  </div>
                </div>
              </div>
            </Cards>
          </div>

          <Cards height={10} color="#b93524" width={100}>
            <div className="md:h-full h-[10rem] p-4">
              <div className="border h-full flex justify-center items-center flex-col text-white">
                <FaPinterestP size={32} />
                <h1>JOIN US ON PINTEREST</h1>
              </div>
            </div>
          </Cards>
        </div>
      </div>
    </div>
  );
}
