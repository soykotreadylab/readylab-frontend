"use client";
// import React from 'react';
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import coupon from '../../assets/HomePageImage/coupon_icon.png'
import Slider from 'react-slick';
import { Users } from "lucide-react";
// import { Users } from 'lucide-react';
const LetsPlayMobileSlider = () => {

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
    ];
    const usersData = [
        {
            "userName": "JohnDoe123",
            "level": 95,
            "score": 25000
        },
        {
            "userName": "MarySmith456",
            "level": 77,
            "score": 23798
        },
        {
            "userName": "SarahJohnson789",
            "level": 87,
            "score": 21607
        },
        {
            "userName": "TomWilliams246",
            "level": 66,
            "score": 16790
        },
        {
            "userName": "EmilyDavis135",
            "level": 90,
            "score": 13760
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Shows 5 divs per slide
        slidesToScroll: 1, // Scrolls 5 divs per interaction
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        // responsive: [
        //     {
        //         breakpoint: 1024, // For screens smaller than 1024px
        //         settings: {
        //             slidesToShow: 3,
        //             slidesToScroll: 3,
        //         },
        //     },
        //     {
        //         breakpoint: 768, // For screens smaller than 768px
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 2,
        //         },
        //     },
        //     {
        //         breakpoint: 480, // For screens smaller than 480px
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1,
        //         },
        //     },
        // ],
    };
    return (
        <div>
            <Slider {...settings}>

                {
                    data?.map((item, index) => (
                        <div key={index} className='w-[200px]'>
                            <div className='flex items-start gap-2'>
                                <div className="flex justify-center">
                                    <Image src={item.Img} alt={item.title} width={100} height={100} />
                                </div>
                                <div>
                                    <div className="text-center  mt-1 ">
                                        <h2 className="inline-block w-[100px]  bg-[#2E8B87] font-bold text-[11px] py-1 rounded-xl text-white px-2">
                                            {item.title}
                                        </h2>
                                    </div>
                                    <div className="flex mt-1 w-[100px]  gap-2 justify-center items-center bg-[#374151] rounded-xl text-white text-sm py-[2px]">
                                        <Users className="w-[15px]" />
                                        <h2 className='text-xs font-semibold'>{item.users}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
};

export default LetsPlayMobileSlider;