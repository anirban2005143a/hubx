import React from 'react'

const Hero = () => {
    return (
        <div id='hero' className=' flex mx-2 px-2 my-1 bg-white'>
            <div className="col1 w-8/12">
                <div className="row1 flex justify-between items-center">
                    <div className="col1 text-xs flex items-center gap-1">
                        <div className="icon"><img src="/img1.png" alt="" className=' w-8' /></div>
                        <p>Your school</p>
                    </div>
                    <div className="col2 flex">
                        <div className=' mx-1 p-1 cursor-pointer text-xs text-gray-500 hover:text-black hover:border-b-2 border-b-teal-600'>New signups</div>
                        <div className=' mx-1 p-1 cursor-pointer text-xs text-gray-500 hover:text-black hover:border-b-2 border-b-teal-600'>Revenue</div>
                        <div className=' mx-1 p-1 cursor-pointer text-xs text-gray-500 hover:text-black hover:border-b-2 border-b-teal-600'>Product sales</div>
                        <div className=' mx-1 p-1 cursor-pointer text-xs text-gray-500 hover:text-black hover:border-b-2 border-b-teal-600'>Active learners</div>
                        <div className=' mx-1 p-1 cursor-pointer text-xs text-gray-500 hover:text-black hover:border-b-2 border-b-teal-600'>Last 7 days</div>
                    </div>
                </div>
                <div className="row2">
                    <img src="/img8.png" alt="" className=' w-full' />
                </div>
            </div>
            <div className="col2 w-4/12">
                <div className="row1 flex">
                    <div className=' w-1/3 p-2 flex flex-col items-center justify-end'>
                        <img src="/img7.png" alt="" className=' w-8' />
                        <p className=' text-xs'>All users</p>
                        <p>1</p>
                    </div>
                    <div className=' w-1/3 p-2 flex flex-col items-center justify-end'>
                        <img src="/img6.png" alt="" className=' w-8' />
                        <p className=' text-xs'>Conversions</p>
                        <p>0 <span className=' text-[9px] font-light'>%</span> </p>
                    </div>
                    <div className=' w-1/3 p-2 flex flex-col items-center justify-end'>
                        <img src="/img5.png" alt="" className=' w-8' />
                        <p className=' text-xs'>30 Days sales</p>
                        <p>0</p>
                    </div>
                </div>
                <div className="row2 flex">
                    <div className=' w-1/3 p-2 flex flex-col items-center justify-end'>
                        <img src="/img4.png" alt="" className=' w-8' />
                        <p className=' text-xs'>Avg time</p>
                        <p>0 <span className=' text-[9px] font-light'>min</span></p>
                    </div>
                    <div className=' w-1/3 p-2 flex flex-col items-center justify-end'>
                        <img src="/img3.png" alt="" className=' w-8' />
                        <p className=' text-xs'>Courses</p>
                        <p>0</p>
                    </div>
                    <div className=' w-1/3 p-2 flex flex-col items-center justify-end'>
                        <img src="/img2.png" alt="" className=' w-8' />
                        <p className=' text-xs'>Courses categories</p>
                        <p>0</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero