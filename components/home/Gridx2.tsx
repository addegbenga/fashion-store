import React from "react";
import { RiScissorsFill } from "react-icons/ri";
import Cards from "./Cards";

export default function Gridx2() {
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-1 mt-1 md:h-[75vh]">
        <div className=" md:grid md:col-span-2 gap-1  ">
          <div className="grid md:row-span-3 gap-1  md:grid-cols-2 ">
            <Cards width={100} height={27} background="/assets/banner_2.jpg">
              <div className="flex flex-col h-[20rem] md:h-full gap-4 text-white justify-center items-center">
                <h1 className="text-xl text-center">A RELAXED ELEGANCE</h1>
                <button className="bg-[#b99d6b] text-sm px-5 py-2 text-white">
                  ALL STORIES
                </button>
              </div>
            </Cards>
            <Cards color="#ceb180" width={100} height={27} background="red">
              <div className="md:h-full h-[25rem] p-5">
                <div className="border h-full flex justify-center items-center  flex-col gap-3 ">
                  <RiScissorsFill size={36} color="white" />
                  <h1 className="text-white">CUSTOM TAILORED</h1>
                  <button className="bg-[#b99d6b] px-3 py-2 text-white">
                    Made to Fit
                  </button>
                </div>
              </div>
            </Cards>
          </div>
          <div className="hidden md:grid ">
            <Cards
              color="#43474d"
              width={100}
              height={27}
              background="/assets/banner_2.jpg"
            >
              <div className="h-full p-5">
                <div className="border h-full flex justify-center items-center  flex-col gap-3 ">
                  <h1 className="text-white text-2xl">
                    FREE SHIPPING ON OVER $100
                  </h1>
                </div>
              </div>
            </Cards>
          </div>
        </div>

        <div className="grid  ">
          <Cards width={100} height={27} background="/assets/slide_8_1000x.jpg">
            <div className="md:h-full h-[30rem]">
              <h1>A RELAXED ELEGANCE</h1>
            </div>
          </Cards>
        </div>
        <div className="grid md:hidden  ">
          <Cards
            color="#43474d"
            width={100}
            height={10}
            background="/assets/banner_2.jpg"
          >
            <div className="md:h-full h-[10rem] p-5">
              <div className="border h-full flex justify-center items-center  flex-col  ">
                <h1 className="text-white">FREE SHIPPING ON OVER $100</h1>
              </div>
            </div>
          </Cards>
        </div>
      </div>
    </div>
  );
}
