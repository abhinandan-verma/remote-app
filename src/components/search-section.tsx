import React from 'react'
import { Input } from './ui/input'

function SearchSection() {
  return (
      <div className='flex items-center justify-center'>
          <div className='-my-12 lg:-my-32 w-full lg:w-2/3 rounded-2xl p-5 lg:px-10 flex flex-col items-center justify-center bg-gradient-to-r from-indigo-400 via-purple-300 to-orange-300 self-center'>
            <Input
               placeholder='Search for a job, company, skill or location'
                  className='w-full h-[60px]   px-4 py-6'
                  
            />
          Test
        </div>
    </div>
  )
}

export default SearchSection