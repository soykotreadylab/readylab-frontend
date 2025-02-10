"use client"

import { Game } from "@/utils/Interfaces/GameSlider/types";
import { Bell, CircleUserRound, Triangle } from "lucide-react";
import { useEffect, useState } from "react";

// import { LoginModal } from "@/components/Login/Login";
// import { Bell, CircleUserRound, Triangle } from "lucide-react";
// import Image from "next/image";
import coins from '../../assets/HomePageImage/coins.png'
import colorIcon from '../../assets/HomePageImage/readylab_icon_color.png'
import coupon from '../../assets/HomePageImage/coupon_icon.png'
import game from '../../assets/HomePageImage/games_icon.png'
import Image from "next/image";
import GameSlider from "@/components/HomeSlider/GameSlider";
import { Calendar } from "@/components/ui/calendar";
// // import { Calendar } from "@/components/ui/calendar";

// // import { GameSlider } from './components/GameSlider';
// // import type { Game } from '../utils/Interfaces/GameSlider/types';
// import type { Game } from '../../utils/Interfaces/GameSlider/types';
// import GameSlider from "@/components/HomeSlider/GameSlider";
// import { Calendar } from "@/components/ui/calendar";
// import { useEffect, useState } from "react";
// // import GameSlider from "@/components/HomeSlider/GameSlider";
// // import GameSlider from "@/components/HomeSlider/GameSlider";
// // import { GameSlider } from "@/components/HomeSlider/GameSlider";
export default function Home() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check screen width
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize(); // Check on mount
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  const games: Game[] = [
    {
      title: "Geometry Dash",
      userCount: 174560,
      rating: "300",
      imageUrl: "/api/placeholder/155/150"
    },
    {
      title: "Angry Birds",
      userCount: 60500,
      rating: "300",
      imageUrl: "/api/placeholder/155/150"
    },
    {
      title: "Minecraft",
      userCount: 950000,
      rating: "300",
      imageUrl: "/api/placeholder/155/150"
    },
    {
      title: "Among Us",
      userCount: 350000,
      rating: "300",
      imageUrl: "/api/placeholder/155/150"
    }
  ];
  return (
    <>
      {
        isMobile ?
          <div className="p-3">

            <div className="bg-gradient-to-b from-[#0055AA] to-[#2E8B87] rounded-[62px] ">
              <div className="bg-gradient-to-b from-[#003366] to-[#0055AA]   p-4 px-7 shadow-lg rounded-full">
                <div className="flex justify-between pr-24 items-center">
                  <div className="flex gap-2">
                    <CircleUserRound className="w-11 h-11 text-white" />
                    <div>
                      <h2 className="text-base font-extrabold text-white">Soykot Alam</h2>
                      <div className="flex items-center gap-2">
                        <h2 className="text-[#FFCD36] text-base font-extrabold">300</h2>
                        <Image src={coins} alt="" className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-28 text-center text-[11px] font-extrabold h-[35px] rounded-xl bg-gradient-to-r from-amber-400 to-orange-300">
                      <h2>Complite Your Profile</h2>
                    </div>
                    <Bell className="text-[#FFCD36]" />
                  </div>
                </div>
                <div>
                  <div className="flex pr-10 text-white mt-2">
                    <div className="w-24"><h2 >Level 5:</h2></div>
                    <div className="w-full bg-gradient-to-r from-[#38B2AC] to-[#FBBF24] text-center rounded-full">
                      <h2 className="">500/500</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex py-4 px-6 gap-1">
                <Bell className="text-white" />
                <h2 className="text-white text-sm font-extrabold">Reminder! this voucher offer is about to expire soon!</h2>
              </div>
              <div className="px-12 flex gap-2">
                <div className="w-10 p-[1px] rounded-[12px] bg-gradient-to-b from-[#FFCD36]  to-[#38B2AC]">
                  {/* This creates the inner background */}
                  <Image src={coupon} alt="" className="w-[39px] h-[39px] rounded-[12px]" />
                  {/* </div> */}
                </div>
                <div className="text-white">
                  <h2>Voucher Name</h2>
                  <div className="flex gap-2 text-xs">
                    <button className="bg-gradient-to-r from-[#FFCD36] to-[#FF9429] px-4 rounded-full">Redirect</button>
                    <p className="block bg-gradient-to-r from-[#FF9429] to-[#38B2AC] px-1 rounded-full">0D 5H 22M 10S</p>
                  </div>
                </div>
              </div>
              <hr className="w-[480px] bg-white h-[3px] my-6 ml-6 shadow-[4px]" />
              <div className="flex py-4 px-6 gap-1">
                <Bell className="text-white" />
                <h2 className="text-white text-sm font-extrabold">Reminder! this voucher offer is about to expire soon!</h2>
              </div>
              <div className="px-12 flex gap-2">
                <div className="w-10 p-[1px] rounded-[12px] bg-gradient-to-b from-[#FFCD36]  to-[#38B2AC]">
                  {/* This creates the inner background */}
                  <Image src={game} alt="" className="w-[39px] h-[39px] rounded-[12px]" />
                  {/* </div> */}
                </div>
                <div className="text-white">
                  <h2>Voucher Name</h2>
                  <div className="flex gap-2 text-xs">
                    <button className="bg-gradient-to-r from-[#FFCD36] to-[#FF9429] px-4 rounded-full">Redirect</button>
                    <p className="block bg-gradient-to-r from-[#FF9429] to-[#38B2AC] px-1 rounded-full">0D 5H 22M 10S</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center py-3">
                <Triangle fill="#FFCD36" className="text-[#FFCD36]" />
              </div>
            </div>
            <div className="w-full flex justify-center pt-8 ">
              <div className="w-[460px]">
                <h2 className=" text-center text-[#374151] pt-8 text-4xl font-bold">Games we recommend
                  you to try!</h2>
              </div>
            </div>
            <div className="my-8">
              <GameSlider />
            </div>
            <div className="flex justify-center">
              <div className="border-[2px] border-[#374151] px-7 w-[364px] py-4 rounded-3xl space-y-4">
                <h2 className="text-sm text-center font-extrabold pb-2">Daily Tasks</h2>
                <div className="flex justify-between pb-7">
                  <div className="flex items-center gap-1">
                    <Image src={colorIcon} alt="" className="w-5 h-5" />
                    <h2 className="font-bold ">.</h2>
                    <h2 className="text-[12px] font-extrabold">Log In one time</h2>
                  </div>
                  <div className="flex items-center gap-1">
                    <button className="text-white bg-gradient-to-r from-[#FBBF24] to-[#FF9429] text-[12px] py-[2px] px-2 rounded-full text-xs  ">CLAIM!</button>
                    <h2 className="text-[#FFCD36] text-xs">50</h2>
                    <Image src={coins} alt="" className="w-3 h-3" />
                  </div>
                </div>
                <div className="flex justify-between pb-7">
                  <div className="flex items-center gap-1">
                    <Image src={colorIcon} alt="" className="w-5 h-5" />
                    <h2 className="font-bold ">.</h2>
                    <h2 className="text-[12px] font-extrabold">Play one game</h2>
                  </div>
                  <div className="flex items-center gap-1">
                    <button className="text-white text-xs bg-gradient-to-r from-[#003366] to-[#38B2AC] text-[12px] py-[2px] px-[16px] rounded-full  ">Play</button>
                    <h2 className="text-[#FFCD36] text-xs">50</h2>
                    <Image src={coins} alt="" className="w-3 h-3" />
                  </div>
                </div>
                <div className="flex justify-between pb-7">
                  <div className="flex items-center gap-1">
                    <Image src={colorIcon} alt="" className="w-5 h-5" />
                    <h2 className="font-bold ">.</h2>
                    <h2 className="text-[12px] font-extrabold">Log In one time</h2>
                  </div>
                  <div className="flex items-center gap-1">
                    <button className="text-white bg-gradient-to-r from-[#FBBF24] to-[#FF9429] text-[12px] py-[2px] px-2 rounded-full text-xs  ">CLAIM!</button>
                    <h2 className="text-[#FFCD36] text-xs">50</h2>
                    <Image src={coins} alt="" className="w-3 h-3" />
                  </div>
                </div>
                <hr className="h-[2px] bg-black" />
                <h2 className="text-sm text-center font-extrabold pb-2">Weekly Tasks</h2>
                <div className="flex justify-between pb-7">
                  <div className="flex items-center gap-1">
                    <Image src={colorIcon} alt="" className="w-5 h-5" />
                    <h2 className="font-bold ">.</h2>
                    <h2 className="text-[12px] font-extrabold">Win 5 times</h2>
                  </div>
                  <div className="flex items-center gap-1">
                    <button className="text-white bg-gradient-to-r from-[#FBBF24] to-[#FF9429] text-[12px] py-[2px] px-2 rounded-full text-xs  ">CLAIM!</button>
                    <h2 className="text-[#FFCD36] text-xs">50</h2>
                    <Image src={coins} alt="" className="w-3 h-3" />
                  </div>
                </div>
                <div className="flex justify-between pb-7">
                  <div className="flex items-center gap-1">
                    <Image src={colorIcon} alt="" className="w-5 h-5" />
                    <h2 className="font-bold ">.</h2>
                    <h2 className="text-[12px] font-extrabold">Get [X] Points in
                      one match</h2>
                  </div>
                  <div className="flex items-center gap-1">
                    <button className="text-white text-xs bg-gradient-to-r from-[#003366] to-[#38B2AC] text-[12px] py-[2px] px-[16px] rounded-full  ">Play</button>
                    <h2 className="text-[#FFCD36] text-xs">50</h2>
                    <Image src={coins} alt="" className="w-3 h-3" />
                  </div>
                </div>
                <div className="flex justify-between pb-7">
                  <div className="flex items-center gap-1">
                    <Image src={colorIcon} alt="" className="w-5 h-5" />
                    <h2 className="font-bold ">.</h2>
                    <h2 className="text-[12px] font-extrabold">Log in 7 times</h2>
                  </div>
                  <div className="flex items-center gap-1">
                    <button className="text-white bg-gradient-to-r from-[#FBBF24] to-[#FF9429] text-[12px] py-[2px] px-2 rounded-full text-xs  ">CLAIM!</button>
                    <h2 className="text-[#FFCD36] text-xs">50</h2>
                    <Image src={coins} alt="" className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </div>
            <div className="my-7 px-5">
              <Calendar
                className="border-2 border-[#374151] rounded-3xl pl-2"
              />
            </div>
          </div> : <>
            <div className="flex justify-between gap-11">
              <div>
                <div className="bg-gradient-to-b from-[#0055AA] to-[#2E8B87] rounded-[55px] h-[400px]">
                  <div className="bg-gradient-to-b from-[#003366] to-[#0055AA] w-[650px] h-28 p-4 px-7 shadow-lg rounded-full">
                    <div className="flex justify-between pr-24 items-center">
                      <div className="flex gap-2">
                        <CircleUserRound className="w-11 h-11 text-white" />
                        <div>
                          <h2 className="text-base font-extrabold text-white">Soykot Alam</h2>
                          <div className="flex items-center gap-2">
                            <h2 className="text-[#FFCD36] text-base font-extrabold">300</h2>
                            <Image src={coins} alt="" className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-28 text-center text-[11px] font-extrabold h-[35px] rounded-xl bg-gradient-to-r from-amber-400 to-orange-300">
                          <h2>Complite Your Profile</h2>
                        </div>
                        <Bell className="text-[#FFCD36]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex pr-10 text-white mt-2">
                        <div className="w-24"><h2 >Level 5:</h2></div>
                        <div className="w-full bg-gradient-to-r from-[#38B2AC] to-[#FBBF24] text-center rounded-full">
                          <h2 className="">500/500</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex py-4 px-6 gap-1">
                    <Bell className="text-white" />
                    <h2 className="text-white text-sm font-extrabold">Reminder! this voucher offer is about to expire soon!</h2>
                  </div>
                  <div className="px-12 flex gap-2">
                    <div className="w-10 p-[1px] rounded-[12px] bg-gradient-to-b from-[#FFCD36]  to-[#38B2AC]">
                      {/* This creates the inner background */}
                      <Image src={coupon} alt="" className="w-[39px] h-[39px] rounded-[12px]" />
                      {/* </div> */}
                    </div>
                    <div className="text-white">
                      <h2>Voucher Name</h2>
                      <div className="flex gap-2 text-xs">
                        <button className="bg-gradient-to-r from-[#FFCD36] to-[#FF9429] px-4 rounded-full">Redirect</button>
                        <p className="block bg-gradient-to-r from-[#FF9429] to-[#38B2AC] px-1 rounded-full">0D 5H 22M 10S</p>
                      </div>
                    </div>
                  </div>
                  <hr className="w-[480px] bg-white h-[3px] my-6 ml-6 shadow-[4px]" />
                  <div className="flex py-4 px-6 gap-1">
                    <Bell className="text-white" />
                    <h2 className="text-white text-sm font-extrabold">Reminder! this voucher offer is about to expire soon!</h2>
                  </div>
                  <div className="px-12 flex gap-2">
                    <div className="w-10 p-[1px] rounded-[12px] bg-gradient-to-b from-[#FFCD36]  to-[#38B2AC]">
                      {/* This creates the inner background */}
                      <Image src={game} alt="" className="w-[39px] h-[39px] rounded-[12px]" />
                      {/* </div> */}
                    </div>
                    <div className="text-white">
                      <h2>Voucher Name</h2>
                      <div className="flex gap-2 text-xs">
                        <button className="bg-gradient-to-r from-[#FFCD36] to-[#FF9429] px-4 rounded-full">Redirect</button>
                        <p className="block bg-gradient-to-r from-[#FF9429] to-[#38B2AC] px-1 rounded-full">0D 5H 22M 10S</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center py-3">
                    <Triangle fill="#FFCD36" className="text-[#FFCD36]" />
                  </div>
                </div>
                <div className="w-full flex justify-center pt-8 ">
                  <div className="w-[460px]">
                    <h2 className=" text-center text-[#374151] pt-8 text-4xl font-bold">Games we recommend
                      you to try!</h2>
                  </div>
                </div>
              </div>
              <div className="border-[2px] border-[#374151] px-7 w-[364px] py-4 rounded-3xl space-y-4">
                <h2 className="text-sm text-center font-extrabold pb-2">Daily Tasks</h2>
                <div className="flex justify-between pb-7">
                  <div className="flex items-center gap-1">
                    <Image src={colorIcon} alt="" className="w-5 h-5" />
                    <h2 className="font-bold ">.</h2>
                    <h2 className="text-[12px] font-extrabold">Log In one time</h2>
                  </div>
                  <div className="flex items-center gap-1">
                    <button className="text-white bg-gradient-to-r from-[#FBBF24] to-[#FF9429] text-[12px] py-[2px] px-2 rounded-full text-xs  ">CLAIM!</button>
                    <h2 className="text-[#FFCD36] text-xs">50</h2>
                    <Image src={coins} alt="" className="w-3 h-3" />
                  </div>
                </div>
                <div className="flex justify-between pb-7">
                  <div className="flex items-center gap-1">
                    <Image src={colorIcon} alt="" className="w-5 h-5" />
                    <h2 className="font-bold ">.</h2>
                    <h2 className="text-[12px] font-extrabold">Play one game</h2>
                  </div>
                  <div className="flex items-center gap-1">
                    <button className="text-white text-xs bg-gradient-to-r from-[#003366] to-[#38B2AC] text-[12px] py-[2px] px-[16px] rounded-full  ">Play</button>
                    <h2 className="text-[#FFCD36] text-xs">50</h2>
                    <Image src={coins} alt="" className="w-3 h-3" />
                  </div>
                </div>
                <div className="flex justify-between pb-7">
                  <div className="flex items-center gap-1">
                    <Image src={colorIcon} alt="" className="w-5 h-5" />
                    <h2 className="font-bold ">.</h2>
                    <h2 className="text-[12px] font-extrabold">Log In one time</h2>
                  </div>
                  <div className="flex items-center gap-1">
                    <button className="text-white bg-gradient-to-r from-[#FBBF24] to-[#FF9429] text-[12px] py-[2px] px-2 rounded-full text-xs  ">CLAIM!</button>
                    <h2 className="text-[#FFCD36] text-xs">50</h2>
                    <Image src={coins} alt="" className="w-3 h-3" />
                  </div>
                </div>
                <hr className="h-[2px] bg-black" />
                <h2 className="text-sm text-center font-extrabold pb-2">Weekly Tasks</h2>
                <div className="flex justify-between pb-7">
                  <div className="flex items-center gap-1">
                    <Image src={colorIcon} alt="" className="w-5 h-5" />
                    <h2 className="font-bold ">.</h2>
                    <h2 className="text-[12px] font-extrabold">Win 5 times</h2>
                  </div>
                  <div className="flex items-center gap-1">
                    <button className="text-white bg-gradient-to-r from-[#FBBF24] to-[#FF9429] text-[12px] py-[2px] px-2 rounded-full text-xs  ">CLAIM!</button>
                    <h2 className="text-[#FFCD36] text-xs">50</h2>
                    <Image src={coins} alt="" className="w-3 h-3" />
                  </div>
                </div>
                <div className="flex justify-between pb-7">
                  <div className="flex items-center gap-1">
                    <Image src={colorIcon} alt="" className="w-5 h-5" />
                    <h2 className="font-bold ">.</h2>
                    <h2 className="text-[12px] font-extrabold">Get [X] Points in
                      one match</h2>
                  </div>
                  <div className="flex items-center gap-1">
                    <button className="text-white text-xs bg-gradient-to-r from-[#003366] to-[#38B2AC] text-[12px] py-[2px] px-[16px] rounded-full  ">Play</button>
                    <h2 className="text-[#FFCD36] text-xs">50</h2>
                    <Image src={coins} alt="" className="w-3 h-3" />
                  </div>
                </div>
                <div className="flex justify-between pb-7">
                  <div className="flex items-center gap-1">
                    <Image src={colorIcon} alt="" className="w-5 h-5" />
                    <h2 className="font-bold ">.</h2>
                    <h2 className="text-[12px] font-extrabold">Log in 7 times</h2>
                  </div>
                  <div className="flex items-center gap-1">
                    <button className="text-white bg-gradient-to-r from-[#FBBF24] to-[#FF9429] text-[12px] py-[2px] px-2 rounded-full text-xs  ">CLAIM!</button>
                    <h2 className="text-[#FFCD36] text-xs">50</h2>
                    <Image src={coins} alt="" className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-6 lg:p-6 ">
              {/* <GameSlider games={games} /> */}
              <div className="w-[505px]">
                <GameSlider />
              </div>
              <div>
                <Calendar
                  className="border-2 border-[#374151] rounded-3xl pl-2"
                />
              </div>
            </div>
          </>
      }

    </>
  )
}

