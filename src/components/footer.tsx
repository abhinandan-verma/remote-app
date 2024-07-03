import { footerData } from '@/config/footer-data'
import Image from 'next/image'
import React from 'react'
import { Separator } from './ui/separator'

function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 dark:text-gray-100 text-gray-600 text-center pb-4">
      <div className="flex flex-col md:flex-row items-top justify-around gap-2 px-2 py-3 ">
        <div className="flex flex-col gap-5 justify-start items-start">
          <div className="flex gap-0">
            <Image alt="RemoteOk" height={40} src="/remoteok.jpg" width={40} />
            <p className="font-bold text-inherit">Remote OK</p>
          </div>
          {/* <GetSubscribed /> */}
        </div>
        {footerData.map((block, index) => (
          <div
            key={`${block.title}-${index}`}
            className="flex flex-col items-top justify-top px-4 py-6 "
          >
            <h3 className="text-lg font-bold">{block.title}</h3>
            <div className="flex flex-col gap-2 mt-2">
              {block.links.map((link, index) => (
                <a
                  key={`${link.label}-${index}`}
                  className="text-sm text-gray-500 hover:text-gray-800"
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Separator className='h-3 w-full'/>
      
      <div className="text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Remote OK
      </div>
    </footer>
  )
}

export default Footer