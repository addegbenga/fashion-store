import React from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const MySwiper = ({}) => {
  return (
    <Swiper
      style={{ height: "100%", width: "100%" }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      effect="fade"
      fadeEffect={{
        crossFade: true,
      }}
      pagination={{
        clickable: true,
      }}
      draggable="true"
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide
        style={{
          background: "url(/assets/slide_1.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="h-full bg-red-100  flex justify-center items-center  "
      >
        {({ isActive }) => (
          <div className="relative ">
            <div
              className={
                isActive
                  ? "opacity-100     ease-in-out delay-500  duration-700 "
                  : "h-[25rem] opacity-0 ease-in-out delay-500  duration-700  md:h-full"
              }
            >
              {/* <h1>Timeless Design</h1> */}
              <div className="  text-white z-10 gap-3 flex flex-col justify-center items-center   ">
                <h1 className="text-[10rem] font-bold leading-[8rem]">300+</h1>
                <h1 className="text-2xl text-center">NEW STYLES JUST LANDED</h1>
                <button className="bg-[#b99d6b] w-11/12 p-2">
                  TAKE A LOOK
                </button>
              </div>
            </div>
          </div>
        )}
      </SwiperSlide>
      <SwiperSlide
        style={{
          background: "url(/assets/slide_1.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="h-full bg-red-100 m-auto  flex justify-center items-center  "
      >
        {({ isActive }) => (
          <div className="relative ">
            <div
              className={
                isActive
                  ? "opacity-100   transition transform  ease-in-out delay-500  duration-700 "
                  : "h-[25rem] opacity-0 transform  transition ease-in-out delay-500  duration-700  md:h-full"
              }
            >
              {/* <h1>Timeless Design</h1> */}
              <div className=" transform transition m-auto   text-white z-10 gap-3 flex flex-col justify-center items-center   ">
                <h1 className="text-[10rem] font-bold leading-[8rem]">300+</h1>
                <h1 className="text-2xl text-center">NEW STYLES JUST LANDED</h1>
                <button className="bg-[#b99d6b] w-11/12 p-2">
                  TAKE A LOOK
                </button>
              </div>
            </div>
          </div>
        )}
      </SwiperSlide>
      <SwiperSlide
        style={{
          background: "url(/assets/slide_1.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="h-full bg-red-100 m-auto  flex justify-center items-center  "
      >
        {({ isActive }) => (
          <div className="relative ">
            <div
              className={
                isActive
                  ? "opacity-100   transition transform  ease-in-out delay-500  duration-700 "
                  : "h-[25rem] opacity-0 transform  transition ease-in-out delay-500  duration-700  md:h-full"
              }
            >
              {/* <h1>Timeless Design</h1> */}
              <div className=" transform transition m-auto   text-white z-10 gap-3 flex flex-col justify-center items-center   ">
                <h1 className="text-[10rem] font-bold leading-[8rem]">300+</h1>
                <h1 className="text-2xl text-center">NEW STYLES JUST LANDED</h1>
                <button className="bg-[#b99d6b] w-11/12 p-2">
                  TAKE A LOOK
                </button>
              </div>
            </div>
          </div>
        )}
      </SwiperSlide>
    </Swiper>
  );
};

const MySwiper1 = ({}) => {
  return (
    <Swiper
      style={{ height: "100%", width: "100%" }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      effect="fade"
      fadeEffect={{
        crossFade: true,
      }}
      pagination={{
        clickable: true,
      }}
      draggable="true"
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide
        style={{
          background: "url(/assets/slide_1.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="h-full bg-red-100  flex justify-center items-center  "
      >
        {({ isActive }) => (
          <div className="relative ">
            <div
              className={
                isActive
                  ? "opacity-100     ease-in-out delay-500  duration-700 "
                  : "h-[25rem] opacity-0 ease-in-out delay-500  duration-700  md:h-full"
              }
            >
              {/* <h1>Timeless Design</h1> */}
              <div className="  text-white z-10 gap-3 flex flex-col justify-center items-center   ">
                <h1 className="text-[10rem] font-bold leading-[8rem]">300+</h1>
                <h1 className="text-2xl text-center">NEW STYLES JUST LANDED</h1>
                <button className="bg-[#b99d6b] w-11/12 p-2">
                  TAKE A LOOK
                </button>
              </div>
            </div>
          </div>
        )}
      </SwiperSlide>
      <SwiperSlide
        style={{
          background: "url(/assets/slide_1.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="h-full bg-red-100  flex justify-center items-center  "
      >
        {({ isActive }) => (
          <div className="relative ">
            <div
              className={
                isActive
                  ? "opacity-100     ease-in-out delay-500  duration-700 "
                  : "h-[25rem] opacity-0 ease-in-out delay-500  duration-700  "
              }
            >
              {/* <h1>Timeless Design</h1> */}
              <div className="  text-white z-10 gap-3 flex flex-col justify-center items-center   ">
                <h1 className="text-[10rem] font-bold leading-[8rem]">300+</h1>
                <h1 className="text-2xl text-center">NEW STYLES JUST LANDED</h1>
                <button className="bg-[#b99d6b] w-11/12 p-2">
                  TAKE A LOOK
                </button>
              </div>
            </div>
          </div>
        )}
      </SwiperSlide>
    </Swiper>
  );
};

export { MySwiper, MySwiper1 };
