"use client";

import React from 'react'
import { NAV} from '@/config/nav-data'
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useMedia } from 'react-use'
import { CrossIcon, Menu, Search, SearchIcon, SidebarCloseIcon } from 'lucide-react'
import { CardHeader, CardTitle, Card } from '@/components/ui/card'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import ThemeToggle from '@/components/theme-toggle';
import { Input } from '@/components/ui/input';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Nav from './ui/nav';
import { Separator } from './ui/separator';
import Link from 'next/link';
 

function NavBar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
    const [selected, setSelected] = React.useState("Home");  

    const pathname = usePathname();
    const isMobile = useMedia("(max-width: 1024px)", false);
    const router = useRouter();

    const onClick = (href: string) => {
        router.push(href);
        setIsOpen(false);
    }

    const onDropdownClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }
 
    if(isMobile) {
        return (
          <nav className='w-full fixed top-0 bg-transparent bg-opacity-70 dark:bg-gray-600 p-2 flex items-center justify-between backdrop-filter backdrop-blur-lg'>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger>
              <Button
              variant={'outline'}
              size={'sm'}
              className='font-normal text-primary transition bg-transparent' 
              >
                <Menu className='size-4'/>
              </Button>
            </SheetTrigger>
            <SheetContent side={'left'} className='px-2  bg-opacity-20 backdrop-filter backdrop-blur-lg w-[370px]'>
              <SheetClose className='absolute top-2 right-2'>
                  <SidebarCloseIcon className='size-4 text-primary '/>
                </SheetClose>
                <div className='flex gap-1'>
                  <nav className='pt-6 flex-col gap-1 px-2'>
                    {NAV.map((navitem) => (                                       
                          <h3
                            className={pathname === navitem.href ? 'text-primary bg-primary/30 p-2 rounded-md' : 'text-primary/90 p-2'}
                            key={navitem.title}>
                            {navitem.title}
                          </h3>             
                    ))}           
                  </nav>
                  <Separator orientation='vertical' className=' bg-primary h-full' /> 
                  <div className='flex flex-col pt-10 overflow-scroll'>
                    {NAV.filter((navitem) => navitem.href === pathname)[0].children?.map((child) => (
                      <Link
                        key={child.title}
                        href={child.href!}
                        className='flex gap-1 rounded-sm items-center justify-start text-primary hover:bg-primary/30 p-2'>
                        {/* {child.icon} */}
                        {child.title}
                      </Link>
                    ))}
                  </div>

                </div>
                
            </SheetContent>
            </Sheet>

            <Image
              src={'/remote.svg'}
              alt='logo'
              width={150}
              height={150}
            />

            <div className='flex items-center gap-2 '>
              <Search className='size-4 text-primary' />
              <ThemeToggle />
           </div>
          </nav>
        )
      }
  return (
    <nav className='flex items-center justify-between gap-2 bg-transparent dark:bg-gray-600 bg-opacity-70 fixed top-0 w-full backdrop-filter backdrop-blur-lg'>
      <div className='flex flex-row gap-3 p-1 '>
        <Image
          src={'/remote.svg'}
          alt='logo'
          width={150}
          height={150}
        />

        <Nav />
      </div>

      <div className='flex gap-2 p-1'>
        <Input
          placeholder='Search for anything...'
          className='w-80 rounded-lg ring-primary focus:outline-none bg-primary/10 text-primary/90 dark:bg-primary/10 dark:text-primary dark:placeholder-primary/50 dark:ring-primary/30 dark:focus:ring-primary/60 dark:focus:placeholder-primary/50 dark:focus:text-primary/90 dark:focus:bg-primary/10 dark:focus:outline-none transition'
        />
        <Button
          variant={'default'}
          onClick={() => router.push('/sign-up')}
        >
          Sign Up
        </Button>
        <Button
          variant={'outline'}
          className='hover:bg-primary/30 text-primary border-2 border-primary/30 hover:text-primary'
        >
          Sign In
        </Button>
        <ThemeToggle />
      </div>
    </nav>
  )
}

export default NavBar