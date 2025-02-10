"use client";
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import coupon from '../../assets/HomePageImage/coupon_icon.png'
const RedemptionSilder = () => {

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
                <div className=''>
                    <div className='flex items-center gap-2 py-2'>
                        <div className="flex-shrink-0 bg-gradient-to-r from-[#FFCD36] to-[#38B2AC] p-[2px] rounded-[8px]">
                            <Image src={coupon} alt="Coupon Icon" width={70} height={70} className='rounded-[8px]' />
                        </div>
                        <div>
                            <h2 className='text-lg font-bold'>Voucher Name</h2>
                            <h2 className='text-xs'>Lorem ipsum odor amet, consectetuer adipiscing elit. Ullamcorper primis duis lacus suspendisse pretium rhoncus fringilla. Lectus vel magnis mollis dignissim blandit conubia risus. Penatibus velit odio nam eu nulla tempus.</h2>
                        </div>
                    </div>
                    <div className='space-x-3'>
                        <button className='text-sm font-bold whitespace-nowrap bg-gradient-to-r from-[#FBBF24] to-[#FF9429] rounded-[8px] px-1'>REDEEM NOW!</button>
                        <button className='text-sm font-bold whitespace-nowrap px-[6px] text-center rounded-[8px] bg-[#38B2AC]'>2D 5H 30M 25S</button>
                    </div>
                </div>
                <div className=''>
                    <div className='flex items-center gap-2'>
                        <div className="flex-shrink-0 bg-gradient-to-r from-[#FFCD36] to-[#38B2AC] p-[2px] rounded-[8px]">
                            <Image src={coupon} alt="Coupon Icon" width={70} height={70} className='rounded-[8px]' />
                        </div>
                        <div>
                            <h2 className='text-lg font-bold'>Voucher Name</h2>
                            <h2 className='text-xs'>Lorem ipsum odor amet, consectetuer adipiscing elit. Ullamcorper primis duis lacus suspendisse pretium rhoncus fringilla. Lectus vel magnis mollis dignissim blandit conubia risus. Penatibus velit odio nam eu nulla tempus.</h2>
                        </div>
                    </div>
                    <div className='space-x-3'>
                        <button className='text-sm font-bold whitespace-nowrap bg-gradient-to-r from-[#FBBF24] to-[#FF9429] rounded-[8px] px-1'>REDEEM NOW!</button>
                        <button className='text-sm font-bold whitespace-nowrap px-[6px] text-center rounded-[8px] bg-[#38B2AC]'>2D 5H 30M 25S</button>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default RedemptionSilder;