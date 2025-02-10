'use client'

// import * as React from 'react'
// import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider } from '../ui/sidebar'
import Image from 'next/image'
import logo from '../../assets/logo/readylab_white_icon.png'
import { CircleUserRound, icons, Key, Settings, ShoppingBag, Trophy, User } from 'lucide-react'
import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider } from '../ui/sidebar';
import { usePathname } from 'next/navigation';
import { useLoginModal } from '@/hooks/useLoginModal';
import { SignUpModal } from '../Signup/Signup';
import { LoginModal } from '../Login/Login';
// import { useLoginModal } from '@/hooks/useLoginModal'
// // import { LoginModal } from '../Login/Login'
// // import { SignUpModal } from '../Signup/Signup'
// import { usePathname } from 'next/navigation'
// import { LoginModal } from '../Login/Login'
// import { SignUpModal } from '../Signup/Signup'

const data = {
  navMain: [
    {
      title: 'LETS PLAY!',
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
    {
      title: 'Shop',
      url: '#',
      icon: <ShoppingBag className='w-5 h-5' />
    },
    {
      title: 'Settings',
      url: '#',
      icon: <Settings className='w-5 h-5' />
    },
    {
      title: 'Redemption',
      url: 'redemption',
      icon: <Key className='w-5 h-5' />
    },
  ],
}


export function CustomSidebar({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();
  const { openModal } = useLoginModal();
  return (
    <SidebarProvider defaultOpen={true} className="">
      <div className="flex h-screen w-full">
        <Sidebar className="w-48 flex-shrink-0  sidebar-gradient  flex items-center justify-center ">
          <SidebarHeader className="w-full">
            <SidebarMenu>
              <SidebarMenuItem>
                <div className="flex justify-center mb-4">
                  <a href="/"><Image src={logo} alt="ReadyLab Logo" width={66} /></a>
                </div>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>
          <SidebarContent className="flex flex-col items-center justify-between w-full h-full scrollbar-hide">
            <div className="flex flex-col items-center gap-4">
              <SidebarMenu>
                {data.navMain.map((item) =>
                  item ? (
                    <SidebarMenuItem
                      key={item.title}
                      className={`text-white font-extrabold ${item.title === 'LETS PLAY!'
                        ? 'ml-3 bg-[#FFCD36] text-black pl-2 h-12 pt-2 rounded-3xl mb-3 hover:bg-transparent' // Background color and styling for "LETS PLAY!"
                        : ''
                        }`}
                    >
                      <SidebarMenuButton className='hover:bg-[#FFCD36]' asChild>
                        <a href={item.url} className="flex items-center  hover:rounded-[8px]">
                          {item.icon && item.icon}
                          {item.title}
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ) : null
                )}
              </SidebarMenu>
            </div>
            <div className="flex flex-col items-center gap-2 mb-2">
              <button onClick={openModal} className="">
                <CircleUserRound className="w-14 h-14 text-white" />
              </button>
              <h3 className="text-base bg-[#FFCD36] px-3 py-1 rounded-[6px]">Log Out</h3>
            </div>
          </SidebarContent>
        </Sidebar>

        {
          pathName === '/redemption' ? (
            <>
              <main
                className="flex-1 inline-block lg:px-6 md:py-6 px-2 py-2 overflow-auto scrollbar-hide w-full"
                style={{
                  background: 'linear-gradient(to right, #FFFFFF 0%, #FFF3CE 51%, #D7EBFF 100%)',
                }}
              >
                <div className="pl-0">{children}</div>
              </main>
            </>
          ) : pathName === '/profile' ? (
            <>
              <main
                className="flex-1 inline-block  overflow-auto scrollbar-hide bg-gradient-to-b from-white to-[#D7E8FF] w-full"
              >
                <div className="pl-0">{children}</div>
              </main>
            </>
          ) : (
            <>
              <main
                className="flex-1 inline-block lg:px-6 md:py-6 px-0 overflow-auto scrollbar-hide bg-gradient-to-b from-white to-[#D7E8FF] w-full"
              >
                <div className="pl-0">{children}</div>
              </main>
            </>
          )
        }
      </div>
      <LoginModal />
      <SignUpModal />
    </SidebarProvider>
  )
}
