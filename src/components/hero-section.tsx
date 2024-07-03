import React from 'react'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

function HeroSection() {
  return (
      <section
          className='flex flex-col gap-4 w-full h-[550px] md:h-[650px] bg-no-repeat bg-cover bg-top pt-10 pr-5 bg-opacity-35'
            style={{
              backgroundImage: 'url(/hero.png)'
            }}
      >
        <div className="text-5xl md:text-6xl text-primary font-bold flex flex-col items-end justify-end  lg:mr-20">
          
            <h1>Get Your</h1>
          <h1 className="text-primary font-serif font-italic ">Remote</h1>
          <h1>Job Today</h1>
          <div className="flex flex-row items-center justify-end gap-3 mt-9">
            <Button className='gap-1'>
             Find a Job
              <ArrowRight />
            </Button>
            <Button
            variant={'outline'}
            className='gap-1'
            >
              Post a Job
              <ArrowRight className="" />
            </Button>
          </div>
        </div>
    </section>
  )
}

export default HeroSection