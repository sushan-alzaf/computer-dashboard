import { TodayOrderIcon, TodayOrderShape, TodaySaleIcon, TodaySaleShape, TotalCustomerIcon, TotalCustomerShape, TotalProductIcon, TotalProductShape, TotalSaleIcon, TotalSaleShape  } from '@/app/assets/icons/icons'
import React from 'react'
import { ChartApp } from '../ChartApp';

export default function LineChart() {
    
    type Data = {
        id: number;
        icon: React.JSX.Element |null,
        title: string;
        count: string;
        countDate: string;
    }[];
    
    // Initialize the data array
    const data:Data = [
        {
            id: 1,
            icon:TodayOrderIcon(),
            title: "Today Order",
            count: "252",
            countDate: "0.25%",
        },
        {
            id: 2,
            icon:TodaySaleIcon(),
            title: "Today Sale",
            count: "52291",
            countDate: "0.25%", 
        },
        {
            id: 3,
            icon:TotalSaleIcon(),
            title: "Total Sale",
            count: "1452426",
            countDate: "0.25%",
        },
        {
            id: 4,
            icon:TotalCustomerIcon(),
            title: "Total Customers",
            count: "20426",
            countDate: "0.25%", 
        },
        {
            id: 5,
            icon:TotalProductIcon(),
            title: "Total Product",
            count: "2,292",
            countDate: "0.25%", 
        },
    ];
  return (
    <div>
      <div className="grid grid-cols-5 gap-5 ">
        {data.map(item=>(
            <div className={`bg-white/70 rounded-[14px]  p-5 `} key={item.id}>
                <div className='flex items-center gap-4'>
                <span>{item.icon}</span>
                <h2 className='text-[#344054] text-base font-medium leading-6'>{item.title}</h2>
                </div>
                <div className={`flex items-center justify-between`}>
                    <div className='w-[150px]'>
                    <h2 className='text-[#344054] text-xl font-bold leading-[30px] (--font-family-Inter)'>{item.id==3?`৳`:''} {item.count} {item.id==4?`+`:item.id==5?`+`:''}</h2>
                    </div>
                    <div className='w-[300px] relative'>
                        <span className='absolute top-[-30px] right-[-9px]'>
                            {item.id==1?<TodayOrderShape/>:item.id==2?<TodaySaleShape/>:item.id==3?<TotalSaleShape/>:item.id==4?<TotalCustomerShape/>:item.id==5?<TotalProductShape/>:''}
                        
                        </span>
                    <ChartApp item={item}/>
                    </div>
                </div>
                <p className='text-[#667085] text-xs font-normal leading-[28px]'><span className={`text-[#12B76A] text-sm font-medium leading-5 (--font-family-Inter) ${item.id==2?'text-[#F04438]':item.id==5?'text-[#F04438]':''}`}>{item.countDate} </span>up from yesterday</p>
            </div>
        ))}
      </div>
    </div>
  )
}
