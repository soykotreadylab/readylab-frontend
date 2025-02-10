'use client'
import { Key, ShoppingBag, Trophy, User } from "lucide-react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// // import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
// // import { AppSidebar } from "@/components/ui/app-sidebar";
// // import { CustomSidebar } from "@/components/SideBar/SideBar";
// // import { Header } from "@/components/Header/Header";
// import { usePathname } from "next/navigation";
// import { CustomSidebar } from "@/components/SideBar/SideBar";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { CustomSidebar } from "@/components/SideBar/SideBar";
// import { Key, Settings, ShoppingBag, Trophy, User } from "lucide-react";
// import { CustomSidebar } from "@/Components/SideBar/SideBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const data = {
    navMain: [


      {
        title: 'Shop',
        url: '#',
        icon: <ShoppingBag className='w-5 h-5' />
      },
      {
        title: 'Redemption',
        url: 'redemption',
        icon: <Key className='w-5 h-5' />
      },
      {
        title: 'PLAY!',
        url: 'letsplay',
      },
      {
        title: 'Account',
        url: 'profile',
        icon: <User className='w-5 h-5' />,
      },
      {
        title: 'Challenges',
        url: '/challenges',
        icon: <Trophy className='w-5 h-5' />
      },
    ],
  }
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
  const pathname = usePathname();
  console.log('path name : ', pathname)
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {pathname === "/"
          ? children
          : <div className="relative pb-16 lg:pb-0 md:pb-0">
            <CustomSidebar>{children}</CustomSidebar>
            {
              isMobile ?
              <div className="bg-gradient-to-t from-[#003366] to-[#374151] fixed bottom-0 w-full p-2 flex justify-around rounded-t-[30px]">
              {data.navMain.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center p-2 text-white ${
                    item.title === "PLAY!" ? "bg-yellow-500 rounded-[7px] px-3 py-3 mt-3 !text-black" : ""
                  }`}
                >
                  {item.icon}
                  <a href={item.url} className="text-sm">{item.title}</a>
                </div>
              ))}
            </div>
            
                : <></>
            }
          </div>
        }
      </body>
    </html>
  );
}
