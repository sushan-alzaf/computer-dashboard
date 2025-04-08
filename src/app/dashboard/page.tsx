import React from 'react'

import LineChart from './_components/LineChart/LineChart'
import MainLineChart from './_components/LineChart/MainLineChart'
import SellingsProduct from './_components/SellingsProduct/SellingsProduct'

export default function page() {
  return (
    <div className='p-5'>
      <div className='w-full'>
      <LineChart/>
      </div>
      <div className='flex justify-center items-center mt-4 gap-5'>
        <div className='bg-white rounded-[14px]  w-3/4 h-[444px]'><MainLineChart/></div>
        <div className='bg-white rounded-[14px] h-[444px] w-1/4  pt-5 pr-5 pl-5 pb-6'>
        <SellingsProduct/>
        </div>
      </div>
    </div>
  )
}
