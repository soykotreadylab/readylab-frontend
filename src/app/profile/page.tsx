'use client'

import { CircleUserRound, Settings, TriangleAlert } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

// import { CircleUserRound, Settings, TriangleAlert } from 'lucide-react';
// import React, { useEffect, useState } from 'react';
import coins from '../../assets/HomePageImage/coins.png'
// import Image from 'next/image';
import game1 from '../../assets/Profile/Rectangle 114.png'
import game2 from '../../assets/Profile/Rectangle 115.png'
import game3 from '../../assets/Profile/Rectangle 116.png'

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

    return (
        <div className=''>
            {
                isMobile ?
                    <div className='bg-gradient-to-r from-[#0055AA] to-[#38B2AC] px-14 py-7 '>
                        <div className='flex items-center gap-1 justify-start'>
                            <CircleUserRound className="w-28 h-28 text-white " strokeWidth={1.2} />
                            <div>
                                <h2 className='font-extrabold text-2xl text-white' >Soykot Alam</h2>
                                <div>
                                    <div className="flex items-center gap-1">
                                        <h2 className="text-[#FFCD36] text-base font-extrabold">300</h2>
                                        <Image src={coins} alt="" className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex text-white'>
                            <div className="w-24 font-extrabold"><h2 >Level 5:</h2></div>
                            <div className="w-[287px] bg-gradient-to-r from-[#38B2AC] to-[#FBBF24] text-center rounded-full">
                                <h2 className="">500/500</h2>
                            </div>
                        </div>
                    </div>
                    : <div className='bg-gradient-to-r from-[#0055AA] to-[#38B2AC] px-14 py-7 flex items-center'>
                        <CircleUserRound className="w-28 h-28 text-white " strokeWidth={1.2} />
                        <div className='space-y-3'>
                            <div>
                                <h2 className='font-extrabold text-2xl text-white' >Soykot Alam</h2>
                            </div>
                            <div className='flex text-white'>
                                <div className="w-24 font-extrabold"><h2 >Level 5:</h2></div>
                                <div className="w-[550px] bg-gradient-to-r from-[#38B2AC] to-[#FBBF24] text-center rounded-full">
                                    <h2 className="">500/500</h2>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-1">
                                    <h2 className="text-[#FFCD36] text-base font-extrabold">300</h2>
                                    <Image src={coins} alt="" className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    </div>
            }
            <div className='mt-5 px-20'>
                <h2 className='lg:text-2xl md:text-2xl font-extrabold text-center text-[#374151]'>Your most played games!</h2>
                <div className='flex flex-col md:flex-row lg:flex-row justify-center mt-8 gap-4 lg:gap-16 md:gap-16'>
                    <div className='flex gap-2 items-center text-white'>
                        <Image src={game1} alt='' width={110} height={110} />
                        <div className='flex flex-col gap-2'>
                            <h2 className='inline-block font-bold bg-[#0055AA] text-center rounded-[8px] px-1 py-[2px]'>
                                Game Name
                            </h2>
                            <h2 className='inline-block font-bold bg-[#38B2AC] text-center rounded-[8px] px-1 py-[2px]'>140 hours</h2>
                        </div>
                    </div>
                    <div className='flex gap-2 items-center text-white'>
                        <Image src={game2} alt='' width={110} height={110} />
                        <div className='flex flex-col gap-2'>
                            <h2 className='inline-block font-bold bg-[#0055AA] text-center rounded-[8px] px-1 py-[2px]'>
                                Game Name
                            </h2>
                            <h2 className='inline-block font-bold bg-[#38B2AC] text-center rounded-[8px] px-1 py-[2px]'>140 hours</h2>
                        </div>
                    </div>
                    <div className='flex gap-2 items-center text-white'>
                        <Image src={game3} alt='' width={110} height={110} />
                        <div className='flex flex-col gap-2'>
                            <h3 className='inline-block font-bold bg-[#0055AA] text-center rounded-[8px] px-1 py-[2px]'>
                                Game Name
                            </h3>
                            <h3 className='inline-block font-bold bg-[#38B2AC] text-center rounded-[8px] px-1 py-[2px]'>140 hours</h3>
                        </div>
                    </div>
                </div>
            </div>
            <hr
                className="h-[3px] bg-black mt-8"
                style={{ boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.5)' }}
            />
            <div className='flex flex-col lg:flex-row md:flex-row gap-4 my-5'>
                <div className='w-[70%]'>
                    <div className='flex justify-end'>
                        <div className="inline-flex rounded-[6px]  gap-2 bg-[#FFCD36] px-2 py-1 ">
                            <Settings />
                            <h2 className='font-bold'>Edit Information</h2>
                        </div>
                    </div>
                    <div className='lg:space-y-14 md:space-y-14 space-y-2 text-center py-8 '>
                        <div className='flex lg:flex-row md:flex-row flex-col px-8 gap-1'>
                            <h2 className='lg:ml-8 md:ml-8 ml-0 text-left text-[#374151] font-bold'>UserName:</h2>
                            <input type="text" className='w-80' />
                        </div>
                        <div className='flex lg:flex-row md:flex-row flex-col px-8 gap-1'>
                            <h2 className='lg:ml-[69px] md:ml-[69px] ml-0 text-left text-[#374151] font-bold'>Email:</h2>
                            <input type="text" className='w-80' />
                        </div>
                        {
                            isMobile ? <>
                                <div className='pl-8   w-80'>
                                    <div className='flex justify-between py-1 '>
                                        <h2 className='inline-block '>Password</h2>
                                        <h2 className='inline-block '>Change Password</h2>
                                    </div>
                                    <input type="text" className='w-80' />
                                </div>
                            </> :
                                <div className='flex lg:flex-row md:flex-row flex-col px-8 gap-1'>
                                    <h2 className='lg:ml-[37px] md:lg:ml-[37px] ml-0 text-left text-[#374151] font-bold'>Password:</h2>
                                    <input type="text" className='w-80' />
                                </div>
                        }
                        {
                            isMobile ? <>
                                <div className='flex justify-end  w-[350px] '>
                                    <div className="inline-flex bg-[#FFCD36] items-center  gap-1 px-2 rounded-[4px]">
                                        <h2 className="text-white font-bold">2FA Link</h2>
                                        <TriangleAlert className="text-white w-[18px] h-[18px]" />
                                    </div>
                                </div>
                                <div className='flex lg:flex-row md:flex-row flex-col px-8 gap-1'>
                                    <h2 className='lg:ml-[69px] md:ml-[69px] ml-0 text-left text-[#374151] font-bold'>Password:</h2>
                                    <input type="text" className='w-80' />
                                </div>

                            </>
                                : <div className='text-left'>
                                    <div className='flex text-[#374151] px-8 gap-1'>
                                        <h2 className='font-bold'>Phone Number:</h2>
                                        <input type="text" className='w-80' />
                                        <div className='flex bg-[#FFCD36] items-center gap-1 px-1 ml-2 rounded-[4px]'>
                                            <h2 className='text-white font-bold'>2FA Link</h2>
                                            <TriangleAlert className='text-white w-[18px] h-[18px]' />
                                        </div>
                                    </div>
                                    <a href="" className='ml-8 mt-2 underline text-sm'>Change Password?</a>
                                </div>
                        }
                    </div>
                </div>
                <div className='px-5 md:px-0 lg:px-0'>
                    <div className='border-[2px] border-black rounded-[20px] px-10 text-center'>
                        <h2 className='text-xl font-bold  py-6'>Your Activity</h2>
                        <p>You played [GameName] today</p>
                        <div className='flex gap-1'>
                            <p>and won</p>
                            <div className="flex items-center gap-1">
                                <h2 className="text-[#FFCD36] text-base ">300</h2>
                                <Image src={coins} alt="" className="w-4 h-4" />
                            </div>
                        </div>
                        <p className='pt-3'>Welcome back Soykot!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;