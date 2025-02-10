"use client";

import { ChevronLeft, ChevronRight, Users } from "lucide-react";
import Image from "next/image";
import Slider, { CustomArrowProps } from "react-slick";

// import React from "react";
// import Slider, { CustomArrowProps } from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Image from "next/image";
// import { Users, ChevronLeft, ChevronRight } from "lucide-react";
import coins from "../../assets/HomePageImage/coins.png";

function CustomPrevArrow(props: CustomArrowProps) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} !flex items-center justify-center !w-8 !h-8 !left-4`}
      onClick={onClick}
      style={{ zIndex: 2 }}
    >
      <ChevronLeft className="text-white bg-gray-800 p-1 rounded-full" size={30} />
    </div>
  );
}

function CustomNextArrow(props: CustomArrowProps) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} !flex items-center justify-center !w-8 !h-8 !right-4`}
      onClick={onClick}
      style={{ zIndex: 2 }}
    >
      <ChevronRight className="text-white bg-gray-800 p-1 rounded-full" size={30} />
    </div>
  );
}

function CustomDot({ onClick, active }: { onClick?: () => void; active: boolean }) {
  return (
    <button
      className={`w-2 h-2 mx-1 rounded-full transition-all duration-200 ${
        active ? 'bg-[#2E8B87] w-4' : 'bg-gray-300'
      }`}
      onClick={onClick}
    />
  );
}

function GameSlider() {
  const data = [
    {
      Img: "/images/geometry_dash.png",
      title: "Geometry Dash",
      users: "174,560",
      coins: "300",
    },
    {
      Img: "/images/angry_bird.png",
      title: "Angry Birds",
      users: "123,456",
      coins: "250",
    },
    {
      Img: "/images/geometry_dash.png",
      title: "Geometry Dash",
      users: "174,560",
      coins: "300",
    },
    {
      Img: "/images/angry_bird.png",
      title: "Angry Birds",
      users: "123,456",
      coins: "250",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    appendDots: (dots: React.ReactNode) => (
      <div style={{ bottom: '-35px' }}>
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <div className="slider-container relative pb-12">
      <style jsx global>{`
        .slick-prev:before,
        .slick-next:before {
          display: none;
        }
        .slick-dots {
          bottom: -30px;
        }
        .slick-dots li {
          margin: 0 4px;
          width: 8px;
          height: 8px;
        }
        .slick-dots li button {
          width: 8px;
          height: 8px;
          padding: 0;
          border-radius: 9999px;
          background: #D1D5DB;
          transition: all 0.2s;
        }
        .slick-dots li button:before {
          display: none;
        }
        .slick-dots li.slick-active button {
          width: 16px;
          background: #2E8B87;
        }
      `}</style>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index}>
            <div className="flex justify-center">
              <Image src={item.Img} alt={item.title} width={155} height={150} />
            </div>
            <div className="text-center mt-1">
              <h2 className="inline-block bg-[#2E8B87] font-extrabold text-sm py-1 rounded-xl text-white px-4">
                {item.title}
              </h2>
            </div>
            <div className="flex mt-1 gap-2 justify-center items-center bg-[#003366] w-[151px] rounded-xl text-white lg:ml-[51px] ml-6 md:ml-[51px] text-sm py-[2px]">
              <Users className="w-[15px]" />
              <h2>{item.users}</h2>
            </div>
            <div className="flex mt-1 gap-2 justify-center items-center bg-gradient-to-r from-[#FFCD36] to-[#FF9429] w-[151px] rounded-xl text-white lg:ml-[51px] ml-6 md:ml-[51px] text-sm py-[2px]">
              <h2>{item.coins}</h2>
              <Image src={coins} alt="" width={12} height={12} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default GameSlider;