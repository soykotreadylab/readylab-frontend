"use client"

import LetsPlayMobileSlider from "@/components/LetsPlayComponent/LetsPlayMobileSlider";
import LetsPlaySlider from "@/components/LetsPlayComponent/LetsPlaySlider";
import { CircleUserRound, Search, Users } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

// import { ArrowDownUp, CircleUserRound, Search, Users } from 'lucide-react';
// import Image from 'next/image';
// import React, { useEffect, useState } from 'react';
import doodle_jump_rounded from '../../assets/letsPlay/doodle_jump_rounded.png'
// import LetsPlaySlider from '@/components/LetsPlayComponent/LetsPlaySlider';
// import LetsPlayMobileSlider from '@/components/LetsPlayComponent/LetsPlayMobileSlider';
const page = () => {

    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {

        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkScreenSize(); // Check on mount
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

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
    return (
        <>
            {
                isMobile ?
                    <>
                        <div className='p-4'>
                            <div className='bg-gradient-to-b from-[#003366]  to-[#0055AA]  space-y-4  py-8 px-14 rounded-[40px]  '>
                                <h2 className='text-center text-white text-xl font-extrabold'>Most Popular games right now!</h2>
                                <div className=''>
                                    <LetsPlayMobileSlider />
                                </div>
                            </div>
                            <div className='mt-3'>
                                <h2 className='font-bold text-lg'>Play Our Games!</h2>
                                <div className="relative">
                                    <input
                                        type="text"
                                        className="border-[2px] border-black rounded-[5px] shadow-md pl-6 pr-2 py-1 w-[200px] h-[28px]"
                                        placeholder=""
                                    />
                                    <Search
                                        className="absolute top-1/2 left-2 w-4 h-4 text-black transform -translate-y-1/2"
                                    />
                                </div>
                                <hr className='h-[3px] bg-black mt-2 ' />
                            </div>
                            <div className='mt-3'>
                                <LetsPlaySlider />
                            </div>
                            <div className='flex justify-center'>
                                <div className=' border-2 border-black rounded-3xl w-[316px] h-[481px] px-5'>
                                    <div className='flex justify-center gap-10 items-center  py-6 '>
                                        <div className='w-11'><Image src={doodle_jump_rounded} alt='' w-10 h-10 /></div>
                                        <h2 className='font-extrabold text-xl'>Top Weekly</h2>
                                    </div>
                                    <div className='space-y-8 '>
                                        {usersData?.map((item, index) => {
                                            const colors = [
                                                'bg-gradient-to-r from-[#C2BC00] to-[#FF9429]',
                                                'bg-gradient-to-r from-[#989898] to-[#4F7498]',
                                                'bg-gradient-to-r from-[#CD7F32] to-[#976200]',
                                                'bg-gradient-to-r from-[#32CD32] to-[#228B22]',
                                                'bg-gradient-to-r from-[#9370DB] to-[#6A5ACD]',
                                            ];
                                            const bgColor = colors[index % colors.length];

                                            return (
                                                <div
                                                    key={index}
                                                    className={`px-2 m-2 rounded-[12px] shadow-md text-white ${bgColor} flex justify-between items-center `}
                                                >
                                                    <div className='flex items-center gap-1'>
                                                        <h2 className='pl-2 text-lg'>{index + 1}. </h2>
                                                        <CircleUserRound className="w-8 h-8 text-white pl-2" />
                                                        <div className=" text-sm">
                                                            <h2 className="font-bold">{item.userName}</h2>
                                                            <p>Level: {item.level}</p>
                                                        </div>
                                                    </div>
                                                    <p> {item.score}</p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </> :
                    <div className=''>
                        <div className='flex justify-between'>
                            <div className='bg-gradient-to-b from-[#003366] h-[255px] to-[#0055AA] mt-16 space-y-4  py-8 px-14 w-[650px] rounded-[40px]  '>
                                <h2 className='text-center text-white text-xl font-extrabold'>Most Popular games right now!</h2>
                                <div className='flex justify-center items-center '>
                                    {
                                        data?.map((item, index) => (
                                            <div key={index} className='w-[200px]'>
                                                <div className="flex justify-center">
                                                    <Image src={item.Img} alt={item.title} width={100} height={100} />
                                                </div>
                                                <div className="text-center  mt-1 ">
                                                    <h2 className="inline-block w-[100px]  bg-[#2E8B87] font-bold text-[11px] py-1 rounded-xl text-white px-2">
                                                        {item.title}
                                                    </h2>
                                                </div>
                                                <div className="flex mt-1 w-[100px] ml-10 gap-2 justify-center items-center bg-[#374151] rounded-xl text-white text-sm py-[2px]">
                                                    <Users className="w-[15px]" />
                                                    <h2 className='text-xs font-semibold'>{item.users}</h2>
                                                </div>

                                            </div>
                                        ))
                                    }
                                </div>

                            </div>
                            <div className=' border-2 border-black rounded-3xl w-[316px] h-[481px] px-5'>
                                <div className='flex justify-center gap-10 items-center  py-6 '>
                                    <div className='w-11'><Image src={doodle_jump_rounded} alt='' w-10 h-10 /></div>
                                    <h2 className='font-extrabold text-xl'>Top Weekly</h2>
                                </div>
                                <div className='space-y-8 '>
                                    {usersData?.map((item, index) => {
                                        const colors = [
                                            'bg-gradient-to-r from-[#C2BC00] to-[#FF9429]',
                                            'bg-gradient-to-r from-[#989898] to-[#4F7498]',
                                            'bg-gradient-to-r from-[#CD7F32] to-[#976200]',
                                            'bg-gradient-to-r from-[#32CD32] to-[#228B22]',
                                            'bg-gradient-to-r from-[#9370DB] to-[#6A5ACD]',
                                        ];
                                        const bgColor = colors[index % colors.length];

                                        return (
                                            <div
                                                key={index}
                                                className={`px-2 m-2 rounded-[12px] shadow-md text-white ${bgColor} flex justify-between items-center `}
                                            >
                                                <div className='flex items-center gap-1'>
                                                    <h2 className='pl-2 text-lg'>{index + 1}. </h2>
                                                    <CircleUserRound className="w-8 h-8 text-white pl-2" />
                                                    <div className=" text-sm">
                                                        <h2 className="font-bold">{item.userName}</h2>
                                                        <p>Level: {item.level}</p>
                                                    </div>
                                                </div>
                                                <p> {item.score}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <div className='w-[650px] px-6'>
                                <div className='flex justify-between items-center '>
                                    <h2 className='font-bold text-lg'>Play Our Games!</h2>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            className="border-[2px] border-black rounded-[5px] shadow-md pl-6 pr-2 py-1 w-[200px] h-[28px]"
                                            placeholder=""
                                        />
                                        <Search
                                            className="absolute top-1/2 left-2 w-4 h-4 text-black transform -translate-y-1/2"
                                        />
                                    </div>
                                </div>
                                <hr className='h-[3px] bg-black ' />
                            </div>
                            <div className='mt-3'>
                                <LetsPlaySlider />
                            </div>
                        </div>
                    </div>
            }
        </>
    );
};

export default page;