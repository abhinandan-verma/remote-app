import React from 'react'

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
  
import { NAV,  } from '@/config/nav-data'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Button } from './button'

function Nav() {
    const pathname = usePathname();
    const router = useRouter();

  return (
      <NavigationMenu>
          <NavigationMenuList className='bg-transparent'>
              {NAV.map((item) => (
                    <NavigationMenuItem key={item.title} className='bg-transparent bg-opacity-30'>
                        <NavigationMenuTrigger
                        className={item.href === pathname ? 'text-primary bg-primary/30 ' : 'text-primary/90 hover:bg-primary/30 hover:text-primary/80 bg-transparent bg-opacity-30'}
                        onClick={() => router.push(item.href!)}
                        >
                          {item.title}
                        </NavigationMenuTrigger>
                      <NavigationMenuContent className='bg-opacity-50'>
                        <ul className="grid w-[400px] gap-1 p-2 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-opacity-50">
                            { item.children &&
                                item.children?.map((child) => (
                                    <Link key={child.title} href={child.href!} className='flex gap-1 -1 rounded-sm items-center justify-start text-primary hover:bg-primary/30 p-2'>
                                        {child.icon}
                                        {child.title}
                                    </Link>
                                ))
                            }
                        </ul>
                      </NavigationMenuContent>
                  </NavigationMenuItem>
                )
              )}
          </NavigationMenuList>
        </NavigationMenu>
  )
}

export default Nav