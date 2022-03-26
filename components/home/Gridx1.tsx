import React from "react";
import { RiScissorsFill } from "react-icons/ri";
import Image from "next/image";
import { MySwiper } from "./MySwiper";
import Cards from "./Cards";

export default function Gridx1() {
  return (
    <>
      <div className="bg-white ">
        <div className=" md:grid gap-1 md:grid-cols-2  md:h-[100vh] mx-1">
          {/* <Cards width={100}> */}
          <div className="h-[28rem]  md:h-full">
            <MySwiper />
          </div>
          {/* </Cards> */}
          <div className="grid md:grid-cols-2  gap-1 ">
            <div className="grid  gap-1 ">
              <Cards
                height={27}
                width={100}
                background="/assets/share_insta_1.jpg"
              >
                <div className="flex flex-col justify-center items-center h-[24rem] md:h-full">
                  <Image
                    src="/assets/insta.svg"
                    width={40}
                    height={40}
                    layout="fixed"
                    alt="logo"
                  />
                  <h1 className="text-white text-2xl md:text-4xl ">
                    Share you story
                  </h1>
                  <span className="text-white">#insta_vendor</span>
                </div>
              </Cards>
              <Cards height={27} width={100} background="/assets/banner_3.jpg">
                <div className="flex text-white justify-center items-center h-[28rem] md:h-full">
                  <h1 className="lg:text-6xl px-20 md:px-0  flex items-center text-2xl tracking-wider md:tracking-normal text-center font-semibold">
                    TIMELESS DESIGN
                  </h1>
                </div>
              </Cards>
            </div>
            <div className="grid  gap-1">
              <div className="grid row-span-5">
                <Cards
                  height={27}
                  width={100}
                  background="/assets/slide_4_600x.jpg"
                >
                  <div className="md:h-full h-[28rem]">
                    {/* <h1>Share you story</h1> */}
                  </div>
                </Cards>
              </div>
              <div className="grid md:row-span-8">
                <Cards color="#43474d" height={27} width={100}>
                  <div className="md:h-full h-[25rem] p-5">
                    <div className="border h-full flex justify-center items-center  flex-col gap-3 ">
                      <RiScissorsFill size={36} color="white" />
                      <h1 className="text-white text-2xl text-center">
                        CUSTOM TAILORED
                      </h1>
                      <button className="bg-[#b99d6b] px-3 py-2 text-white">
                        Made to Fit
                      </button>
                    </div>
                  </div>
                </Cards>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
