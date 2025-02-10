'use client'
import Image from "next/image";
import image1 from '../assets/HomePageImage/image 23.png'
import image2 from '../assets/HomePageImage/image 24.png'
import logo from '../assets/HomePageImage/readylab_mix_logo03a.png'
import coupon from '../assets/HomePageImage/coupon_icon.png'
import whiteLogo from '../assets/logo/readylab_white_icon.png'
import TicketMobile from '../assets/HomePageImage/image 23 (1).png'
import TicketMobile2 from '../assets/HomePageImage/image 24 (1).png'
import { useEffect, useState } from "react";
import { useLoginModal } from "@/hooks/useLoginModal";
import { LoginModal } from "@/components/Login/Login";
// import { useLoginModal } from "@/hooks/useLoginModal";
// import { LoginModal } from "@/components/Login/Login";
// import { LoginModal } from "@/components/Login/Login";
export default function Home() {

  const [isMobile, setIsMobile] = useState(false);
  const { openModal } = useLoginModal();

  useEffect(() => {
    // Function to check screen width
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); 
    };

    checkScreenSize(); // Check on mount
    window.addEventListener("resize", checkScreenSize); 
    return () => window.removeEventListener("resize", checkScreenSize); 
  }, []);

  const imageData = [
    {
      Img: "/images/image (1).png",
    },
    {
      Img: "/images/image (2).png",
    },
    {
      Img: "/images/image (3).png",
    },
    {
      Img: "/images/image (4).png",
    },
    {
      Img: "/images/image (5).png",
    },
  ]
  return (

    <div className=""
      style={{
        background: 'linear-gradient(to top, #82C0FF 0%, #D7EBFF 52%, #FFFFFF 100%)',
      }}>
      <div className="lg:p-7 md:p-7 bg-gradient-to-t from-[#013366] to-[#0266CC] ">
        <div className="flex justify-end sm:px-8">
          <button className="text-white underline font-bold" onClick={openModal}>Log in</button>
        </div>
        {isMobile ? (
          <div className="flex justify-between items-center ">
            <Image src={TicketMobile} alt="" width={192} height={192} />
            <div className="flex flex-col justify-center items-center">
              <Image src={logo} alt="" width={292} height={292} />
              <button className="bg-[#FFCD36] px-5 mt-10 rounded-[6px] font-extrabold">
                Join Us!
              </button>
            </div>
            <Image src={TicketMobile2} alt="" width={192} height={192} />
          </div>
        ) : (
          <div className="flex justify-center items-center gap-11">
            <Image src={image1} alt="" width={292} height={292} />
            <div className="flex flex-col justify-center items-center">
              <Image src={logo} alt="" width={292} height={292} />
              <button className="bg-[#FFCD36] px-16 mt-10 rounded-[6px] font-extrabold">
                Join Us!
              </button>
            </div>
            <Image src={image2} alt="" width={292} height={292} />
          </div>
        )}
      </div>
      <div
      >
        <h2 className="text-[#374151] text-center pt-20 font-bold text-3xl">Our Partners & Brands!</h2>
        <div className="flex justify-center mt-14">
          {isMobile ? (
            imageData[2] && (
              <div key={2}>
                <Image src={imageData[2].Img} alt="" width={180} height={180} />
              </div>
            )
          ) : (
            imageData.map((item, index) => (
              <div key={index}>
                <Image src={item.Img} alt="" width={180} height={180} />
              </div>
            ))
          )}
        </div>
        <div className="lg:mt-48 md:mt-40 mt-28 px-7 lg:flex md:flex justify-center gap-48 ">
          <div className="bg-gradient-to-t from-[#2E8B87] to-[#0055AA] border-[2px] md:w-[404px] lg:w-[404px] border-white rounded-[40px] h-[540px]  text-white text-center">
            <h2 className="mt-8 text-3xl font-extrabold">Challenges</h2>
            <h2>you brave enough to try?</h2>
            <div className="flex gap-2 my-14 justify-center">
              <Image src={whiteLogo} alt='' width={33} height={33} />
              <h2 className="font-bold">Challenge</h2>
            </div>
            <div className="flex gap-2 my-14 justify-center">
              <Image src={whiteLogo} alt='' width={33} height={33} />
              <h2 className="font-bold">Challenge</h2>
            </div>
            <div className="flex gap-2 my-14 justify-center">
              <Image src={whiteLogo} alt='' width={33} height={33} />
              <h2 className="font-bold">Challenge</h2>
            </div>
          </div>
          <div className="bg-gradient-to-t from-[#FBBF24] to-[#2E8B87] border-[2px] mt-12 lg:mt-0 md:mt-0 md:w-[404px] lg:w-[404px] border-white rounded-[40px] h-[540px]  text-white text-center">
            <h2 className="mt-8 text-3xl font-extrabold">Our brand Offers!</h2>
            <h2>Interested in them?</h2>
            <div className="flex gap-2 my-14 justify-center ">
              <div className="p-[1px] rounded-[6px] bg-gradient-to-t from-[#0055AA] to-[#FFA768]">
                <Image src={coupon} alt='' width={33} height={33} className="rounded-[6px]" />
              </div>
              <h2 className="font-bold">Brand Offer Name</h2>
            </div>
            <div className="flex gap-2 my-14 justify-center">
              <div className="p-[1px] rounded-[6px] bg-gradient-to-t from-[#0055AA] to-[#FFA768]">
                <Image src={coupon} alt='' width={33} height={33} className="rounded-[6px]" />
              </div>
              <h2 className="font-bold">Brand Offer Name</h2>
            </div>
            <div className="flex gap-2 my-14 justify-center">
              <div className="p-[1px] rounded-[6px] bg-gradient-to-t from-[#0055AA] to-[#FFA768]">
                <Image src={coupon} alt='' width={33} height={33} className="rounded-[6px]" />
              </div>
              <h2 className="font-bold">Brand Offer Name</h2>
            </div>
          </div>
        </div>
        <div className="text-center py-20">
          <h2 className="text-[#374151] text-center py-6  font-bold text-3xl">Want to explore more?</h2>
          <button className="bg-[#FFCD36]  font-bold px-10 rounded-[8px]">Demo Request</button>
        </div>
      </div>
      <LoginModal/>
    </div >
  )
}

