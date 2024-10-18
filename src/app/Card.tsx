import React from 'react'
import Image from 'next/image'

const Card = (props : Tprops) => {
  return (
    <div className='flex flex-col min-h-20 bg-white pt-14 '>
        <div className='flex-grow flex items-center justify-center p-2'>
            <div className= ' bg-slate-200 p-16 rounded-md shadow-md  w-200 h-80 flex items-center justify-center border-2 border-sky-300'>

                {/* <<<<<<Background>>>>> */}
{/* 
            <div className='absolute inset-0 flex items-center justify-center
            bg-center bg-cover'>
                <div className='relative max-w-sm h-md'></div>
                <Image src={'/111.jpg'} alt={' back ground'}
                width={320}
                height={300}
                className='opacity-10'/>
                </div> */}

                                {/* <<<<<<Details>>>>> */}

            
    <div className='w1/3 pr-4 pt-16  relative z-10 text-sm '>

            {/* <<<<<<logo Section>>>>> */}
            <img src={'/Gove.png'} alt={'Logo'}
            className=' absolute top-[-16px] left-0 w-14 h-18  z-10]'/>

            
           <p className=' mb-1'>
            <span className=' text-sky-500 '>Name:</span>
            <span className=' text-black  '>{props.name}</span>
            </p>

            <p className=' mb-2'>
            <span className=' text-sky-500'>Roll Num::</span>
            <span className=' text-black '>{props.rollnum}</span>
            </p>

            <p className=' mb-1'>
            <span className=' text-sky-500'>Distance:</span>
            <span className=' text-black '>{props.distance}</span>
            </p>

            <p className=' mb-1'>
            <span className=' text-sky-500'>City:</span>
            <span className=' text-black '>{props.city}</span>
            </p>

            <p className=' mb-1'>
            <span className=' text-sky-500'>Campus:</span>
            <span className=' text-black '>{props.capmus}</span>
            </p>

            <p className=' mb-1'>
            <span className=' text-sky-500'>Center:</span>
            <span className=' text-black '>{props.center}</span>
            </p>

            <p className=' mb-1'>
            <span className=' text-sky-500'>Day:</span>
            <span className=' text-black '>{props.days}</span>
            </p>

            {/* <<<<<<Lower Section>>>>> */}
            <div className=' flex flex-col mt-4'>
                <button className='relative h-4 w-md p-1 rounded-lg border border-gray-300 bg-blue-900 
                text-white items-center justify-center flex'>
                    <span className='absolute inset-0 bg-blue-500 '
                    style={{width : '50%'}}></span>
                    <span className=' relative z-10'>Q & WD</span>
                </button>

                 </div>
            </div>

            
        {/* <<<<<<Right Section>>>>> */}
<div className='w-1/3 text-center relative z-10'>
        <Image src={props.img} alt={"profile"}
        width={120}
        height={120}
        z-10
        className='rounded-lg mb-6 pt-16 '/>
        <p className='border-t-2 border-t-slate-400 pt-2 font-bold text-sky-500 mt-8'>Authorized Signature</p>            
            </div>
            </div>
            </div>
    </div>
  )
}

export default Card
