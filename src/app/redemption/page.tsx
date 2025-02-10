"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import coupon from '../../assets/HomePageImage/coupon_icon.png'
import RedemptionSilder from '@/components/Redemption/RedemptionSilder';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
// // import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
// // import { Input } from '@/components/ui/input';
// import RedemptionSilder from '@/components/Redemption/RedemptionSilder';
// import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { Input } from '@/components/ui/input';
// // import { Input } from '@/components/ui/input';
const Redemption = () => {
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
        <>
            {
                isMobile ? <div className=''>
                    <div className='w-full bg-gradient-to-t from-[#003366] to-[#0055AA] px-5 py-7 text-white rounded-3xl shadow-xl'>
                        <h2 className='text-center font-extrabold py-2 text-2xl'>Check out these limited time offers!</h2>
                        <RedemptionSilder />
                    </div>
                    <div className='mb-9'>
                        <div className='flex lg:flex-row md:flex-row flex-col mt-3 lg:gap-12 md:gap-12 gap-2 justify-center items-center'>
                            <div className="w-[380px] p-[1px] bg-gradient-to-r from-[#FFCD36] to-[#38B2AC] rounded-[8px]">
                                <Select>
                                    <SelectTrigger className="w-full bg-white rounded-[8px]">
                                        <SelectValue placeholder="Select a fruit" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Fruits</SelectLabel>
                                            <SelectItem value="apple">Apple</SelectItem>
                                            <SelectItem value="banana">Banana</SelectItem>
                                            <SelectItem value="blueberry">Blueberry</SelectItem>
                                            <SelectItem value="grapes">Grapes</SelectItem>
                                            <SelectItem value="pineapple">Pineapple</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div >
                                <div className='flex gap-5'>
                                    <div className='bg-gradient-to-r from-[#FFCD36] to-[#38B2AC] p-[1px] rounded-[8px]'>
                                        <Input type="text" name="" id="" className='rounded-[8px]' />
                                    </div>
                                    <div className='bg-gradient-to-r from-[#FFCD36] to-[#38B2AC] p-[1px] rounded-[8px]'>
                                        <Input type="text" name="" id="" className='rounded-[8px]' />
                                    </div>
                                    <div className='bg-gradient-to-r from-[#FFCD36] to-[#38B2AC] p-[1px] rounded-[8px]'>
                                        <Input type="text" name="" id="" className='rounded-[8px]' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className='bg-black h-[3px] shadow-lg my-3 ' />
                        <div className="flex items-center gap-3">
                            <div>
                                <div className="flex-shrink-0 bg-gradient-to-r from-[#FFCD36] to-[#38B2AC] p-[2px] rounded-[8px]">
                                    <Image src={coupon} alt="Coupon Icon" width={120} height={70} className='rounded-[8px]' />
                                </div>
                                <div className='flex-col flex gap-1 text-white pt-1'>
                                    <button className='text-sm font-bold whitespace-nowrap bg-gradient-to-r from-[#FBBF24] to-[#FF9429] rounded-[8px] px-1'>REDEEM NOW!</button>
                                    <button className='text-sm font-bold whitespace-nowrap px-[6px] text-center rounded-[8px] bg-[#38B2AC]'>2D 5H 30M 25S</button>
                                    <button className='text-sm font-bold whitespace-nowrap px-[6px] text-center rounded-[8px] bg-[#003366]'>[Type]</button>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-lg font-bold text-[#374151]">Voucher Name</h2>
                                <h2 className="text-xs text-[#374151]">
                                    Lorem ipsum odor amet, consectetuer adipiscing elit. Ullamcorper primis duis lacus suspendisse pretium rhoncus fringilla. Lectus vel magnis mollis dignissim blandit conubia risus. Penatibus velit odio nam eu nulla tempus.
                                </h2>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 my-7">
                            <div>
                                <div className="flex-shrink-0 bg-gradient-to-r from-[#FFCD36] to-[#38B2AC] p-[2px] rounded-[8px]">
                                    <Image src={coupon} alt="Coupon Icon" width={120} height={70} className='rounded-[8px]' />
                                </div>
                                <div className='flex-col flex gap-1 text-white pt-1'>
                                    <button className='text-sm font-bold whitespace-nowrap bg-gradient-to-r from-[#FBBF24] to-[#FF9429] rounded-[8px] px-1'>REDEEM NOW!</button>
                                    <button className='text-sm font-bold whitespace-nowrap px-[6px] text-center rounded-[8px] bg-[#38B2AC]'>2D 5H 30M 25S</button>
                                    <button className='text-sm font-bold whitespace-nowrap px-[6px] text-center rounded-[8px] bg-[#003366]'>[Type]</button>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-lg font-bold text-[#374151]">Voucher Name</h2>
                                <h2 className="text-xs text-[#374151]">
                                    Lorem ipsum odor amet, consectetuer adipiscing elit. Ullamcorper primis duis lacus suspendisse pretium rhoncus fringilla. Lectus vel magnis mollis dignissim blandit conubia risus. Penatibus velit odio nam eu nulla tempus.
                                </h2>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 my-7">
                            <div>
                                <div className="flex-shrink-0 bg-gradient-to-r from-[#FFCD36] to-[#38B2AC] p-[2px] rounded-[8px]">
                                    <Image src={coupon} alt="Coupon Icon" width={120} height={70} className='rounded-[8px]' />
                                </div>
                                <div className='flex-col flex gap-1 text-white pt-1'>
                                    <button className='text-sm font-bold whitespace-nowrap bg-gradient-to-r from-[#FBBF24] to-[#FF9429] rounded-[8px] px-1'>REDEEM NOW!</button>
                                    <button className='text-sm font-bold whitespace-nowrap px-[6px] text-center rounded-[8px] bg-[#38B2AC]'>2D 5H 30M 25S</button>
                                    <button className='text-sm font-bold whitespace-nowrap px-[6px] text-center rounded-[8px] bg-[#003366]'>[Type]</button>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-lg font-bold text-[#374151]">Voucher Name</h2>
                                <h2 className="text-xs text-[#374151]">
                                    Lorem ipsum odor amet, consectetuer adipiscing elit. Ullamcorper primis duis lacus suspendisse pretium rhoncus fringilla. Lectus vel magnis mollis dignissim blandit conubia risus. Penatibus velit odio nam eu nulla tempus.
                                </h2>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div>
                                <div className="flex-shrink-0 bg-gradient-to-r from-[#FFCD36] to-[#38B2AC] p-[2px] rounded-[8px]">
                                    <Image src={coupon} alt="Coupon Icon" width={120} height={70} className='rounded-[8px]' />
                                </div>
                                <div className='flex-col flex gap-1 text-white pt-1'>
                                    <button className='text-sm font-bold whitespace-nowrap bg-gradient-to-r from-[#FBBF24] to-[#FF9429] rounded-[8px] px-1'>REDEEM NOW!</button>
                                    <button className='text-sm font-bold whitespace-nowrap px-[6px] text-center rounded-[8px] bg-[#38B2AC]'>2D 5H 30M 25S</button>
                                    <button className='text-sm font-bold whitespace-nowrap px-[6px] text-center rounded-[8px] bg-[#003366]'>[Type]</button>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-lg font-bold text-[#374151]">Voucher Name</h2>
                                <h2 className="text-xs text-[#374151]">
                                    Lorem ipsum odor amet, consectetuer adipiscing elit. Ullamcorper primis duis lacus suspendisse pretium rhoncus fringilla. Lectus vel magnis mollis dignissim blandit conubia risus. Penatibus velit odio nam eu nulla tempus.
                                </h2>
                            </div>
                        </div>

                    </div>
                </div> :
                    <div className='lg:px-40 md:px-40 px-2'
                        style={{
                            background: 'linear-gradient(to right, #FFFFFF 0%, #FFF3CE 51%, #D7EBFF 100%)',
                        }}>
                        <div className='bg-gradient-to-t from-[#003366] to-[#0055AA] px-20 py-7 text-white rounded-3xl  shadow-xl'>
                            <h2 className='font-bold'>Check out these limited time offers!</h2>
                            <div className='flex items-center gap-2 '>
                                <div className="flex-shrink-0 bg-gradient-to-r from-[#FFCD36] to-[#38B2AC] p-[2px] rounded-[8px]">
                                    <Image src={coupon} alt="Coupon Icon" width={70} height={70} className='rounded-[8px]' />
                                </div>
                                <div>
                                    <h2 className='text-lg font-bold'>Voucher Name</h2>
                                    <h2 className='text-xs'>Lorem ipsum odor amet, consectetuer adipiscing elit. Ullamcorper primis duis lacus suspendisse pretium rhoncus fringilla. Lectus vel magnis mollis dignissim blandit conubia risus. Penatibus velit odio nam eu nulla tempus.</h2>
                                </div>
                                <div className=''>
                                    <button className='text-sm font-bold whitespace-nowrap bg-gradient-to-r from-[#FBBF24] to-[#FF9429] rounded-[8px] px-1'>REDEEM NOW!</button>
                                    <button className='text-sm font-bold whitespace-nowrap px-[6px] text-center rounded-[8px] bg-[#38B2AC]'>2D 5H 30M 25S</button>
                                </div>
                            </div>
                            <div className='flex items-center gap-2  pt-3'>
                                <div className="flex-shrink-0 bg-gradient-to-r from-[#FFCD36] to-[#38B2AC] p-[2px] rounded-[8px]">
                                    <Image src={coupon} alt="Coupon Icon" width={70} height={70} className='rounded-[8px]' />
                                </div>
                                <div>
                                    <h2 className='text-lg font-bold'>Voucher Name</h2>
                                    <h2 className='text-xs'>Lorem ipsum odor amet, consectetuer adipiscing elit. Ullamcorper primis duis lacus suspendisse pretium rhoncus fringilla. Lectus vel magnis mollis dignissim blandit conubia risus. Penatibus velit odio nam eu nulla tempus.</h2>
                                </div>
                                <div className=''>
                                    <button className='text-sm font-bold whitespace-nowrap bg-gradient-to-r from-[#FBBF24] to-[#FF9429] rounded-[8px] px-1'>REDEEM NOW!</button>
                                    <button className='text-sm font-bold whitespace-nowrap px-[6px] text-center rounded-[8px] bg-[#38B2AC]'>2D 5H 30M 25S</button>
                                </div>
                            </div>
                        </div>
                        <div className='space-y-5'>
                            <div className='flex mt-3 gap-12'>
                                <div className='  p-[1px] bg-gradient-to-r from-[#FFCD36] to-[#38B2AC] rounded-[4px]'>
                                    <Select >
                                        <SelectTrigger className="w-[320px] ">
                                            <SelectValue placeholder="Select a fruit" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Fruits</SelectLabel>
                                                <SelectItem value="apple">Apple</SelectItem>
                                                <SelectItem value="banana">Banana</SelectItem>
                                                <SelectItem value="blueberry">Blueberry</SelectItem>
                                                <SelectItem value="grapes">Grapes</SelectItem>
                                                <SelectItem value="pineapple">Pineapple</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div >
                                    <div className='flex gap-5'>
                                        <div className='bg-gradient-to-r from-[#FFCD36] to-[#38B2AC] p-[1px] rounded-[4px]'>
                                            <Input type="text" name="" id="" />
                                        </div>
                                        <div className='bg-gradient-to-r from-[#FFCD36] to-[#38B2AC] p-[1px] rounded-[4px]'>
                                            <Input type="text" name="" id="" />
                                        </div>
                                        <div className='bg-gradient-to-r from-[#FFCD36] to-[#38B2AC] p-[1px] rounded-[4px]'>
                                            <Input type="text" name="" id="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className='bg-black h-[3px] shadow-lg' />
                            <>
                                <div className='flex items-center gap-2 '>
                                    <div className="flex-shrink-0 bg-gradient-to-r from-[#FFCD36] to-[#38B2AC] p-[2px] rounded-[8px]">
                                        <Image src={coupon} alt="Coupon Icon" width={70} height={70} className='rounded-[8px]' />
                                    </div>
                                    <div>
                                        <h2 className='text-lg font-bold text-[#374151]'>Voucher Name</h2>
                                        <h2 className='text-xs text-[#374151]'>Lorem ipsum odor amet, consectetuer adipiscing elit. Ullamcorper primis duis lacus suspendisse pretium rhoncus fringilla. Lectus vel magnis mollis dignissim blandit conubia risus. Penatibus velit odio nam eu nulla tempus.</h2>
                                    </div>

                                </div>
                                <div className='flex gap-5 text-white pt-[10px]'>
                                    <button className='text-sm font-bold whitespace-nowrap bg-gradient-to-r from-[#FBBF24] to-[#FF9429] rounded-[8px] px-1'>REDEEM NOW!</button>
                                    <button className='text-sm font-bold whitespace-nowrap px-[6px] text-center rounded-[8px] bg-[#38B2AC]'>2D 5H 30M 25S</button>
                                    <button className='text-sm font-bold whitespace-nowrap px-[6px] text-center rounded-[8px] bg-[#003366]'>[Type]</button>
                                </div>
                            </>
                            <>
                                <div className='flex items-center gap-2 '>
                                    <div className="flex-shrink-0 bg-gradient-to-r from-[#FFCD36] to-[#38B2AC] p-[2px] rounded-[8px]">
                                        <Image src={coupon} alt="Coupon Icon" width={70} height={70} className='rounded-[8px]' />
                                    </div>
                                    <div>
                                        <h2 className='text-lg font-bold text-[#374151]'>Voucher Name</h2>
                                        <h2 className='text-xs text-[#374151]'>Lorem ipsum odor amet, consectetuer adipiscing elit. Ullamcorper primis duis lacus suspendisse pretium rhoncus fringilla. Lectus vel magnis mollis dignissim blandit conubia risus. Penatibus velit odio nam eu nulla tempus.</h2>
                                    </div>

                                </div>
                                <div className='flex gap-5 text-white pt-[10px]'>
                                    <button className='text-sm font-bold whitespace-nowrap bg-gradient-to-r from-[#FBBF24] to-[#FF9429] rounded-[8px] px-1'>REDEEM NOW!</button>
                                    <button className='text-sm font-bold whitespace-nowrap px-[6px] text-center rounded-[8px] bg-[#38B2AC]'>2D 5H 30M 25S</button>
                                    <button className='text-sm font-bold whitespace-nowrap px-[6px] text-center rounded-[8px] bg-[#003366]'>[Type]</button>
                                </div>
                            </>
                            <>
                                <div className='flex items-center gap-2 '>
                                    <div className="flex-shrink-0 bg-gradient-to-r from-[#FFCD36] to-[#38B2AC] p-[2px] rounded-[8px]">
                                        <Image src={coupon} alt="Coupon Icon" width={70} height={70} className='rounded-[8px]' />
                                    </div>
                                    <div>
                                        <h2 className='text-lg font-bold text-[#374151]'>Voucher Name</h2>
                                        <h2 className='text-xs text-[#374151]'>Lorem ipsum odor amet, consectetuer adipiscing elit. Ullamcorper primis duis lacus suspendisse pretium rhoncus fringilla. Lectus vel magnis mollis dignissim blandit conubia risus. Penatibus velit odio nam eu nulla tempus.</h2>
                                    </div>

                                </div>
                                <div className='flex gap-5 text-white pt-[10px]'>
                                    <button className='text-sm font-bold whitespace-nowrap bg-gradient-to-r from-[#FBBF24] to-[#FF9429] rounded-[8px] px-1'>REDEEM NOW!</button>
                                    <button className='text-sm font-bold whitespace-nowrap px-[6px] text-center rounded-[8px] bg-[#38B2AC]'>2D 5H 30M 25S</button>
                                    <button className='text-sm font-bold whitespace-nowrap px-[6px] text-center rounded-[8px] bg-[#003366]'>[Type]</button>
                                </div>
                            </>

                        </div>
                    </div>
            }

        </>
    );
};

export default Redemption;