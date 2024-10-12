import React from 'react'

const Main = () => {
    return (
        <div id='main' className=' my-3 flex items-start'>
            <div className="col1 w-1/4 mx-2 p-2 bg-white">
                <div className="row1 flex items-center">
                    <img src="/img7.png" alt="" className=' w-10' />
                    <p className='text-xs'>New users</p>
                    <p className=' px-2 py-1 rounded-full bg-teal-300 mx-2 text-xs text-white'>see all</p>
                </div>
                <div className="row2 flex items-end py-2">
                    <img src="/img9.png" alt="" className=' w-8' />
                    <div className=' text-[12px] mx-2 font-light'>
                        <p>hubx</p>
                        <p>24 minutes</p>
                    </div>
                </div>
            </div>
            <div className="col2 w-1/4 mx-2 bg-white p-2 text-xs">
                <div className="row1 flex items-center">
                    <img src="/img11.png" alt="" className=' w-6 mx-1' />
                    <p className=' mx-1'>How to sell courses blog</p>
                    <p className=' text-white rounded-full px-2 py-1 bg-teal-300 mx-1'>see all</p>
                </div>
                <div className="row2 p-2">
                    <div className=' flex gap-7 py-2'>
                        <p className='  cursor-pointer text-[13px] text-teal-400 font-normal w-9/12'>Blended learning : What it is , Why it matters & how to apply</p>
                        <p className=' text-gray-500 font-thin text-[10px] w-3/12 text-end'>7 days ago</p>
                    </div>
                    <div className=' flex gap-7 py-2'>
                        <p className='  cursor-pointer text-[13px] text-teal-400 font-normal w-9/12'>Join the courses slaes Bootcamp [Free live workshop]</p>
                        <p className=' text-gray-500 font-thin text-[10px] w-3/12 text-end'>12 days ago</p>
                    </div>
                    <div className=' flex gap-7 py-2'>
                        <p className='  cursor-pointer text-[13px] text-teal-400 font-normal w-9/12'>12 steps to creating awesome live classes in 2021</p>
                        <p className=' text-gray-500 font-thin text-[10px] w-3/12 text-end'>20 days ago</p>
                    </div>
                    <div className=' flex gap-7 py-2'>
                        <p className='  cursor-pointer text-[13px] text-teal-400 font-normal w-9/12'>Guy kawasaki on future of the business in the midst of a pandemic</p>
                        <p className=' text-gray-500 font-thin text-[10px] w-3/12 text-end'>22 days ago</p>
                    </div>
                    <div className=' flex gap-7 py-2'>
                        <p className='  cursor-pointer text-[13px] text-teal-400 font-normal w-9/12'>What is educational marketing and how to use it to grow with examples</p>
                        <p className=' text-gray-500 font-thin text-[10px] w-3/12 text-end'>23 days ago</p>
                    </div>

                </div>
            </div>
            <div className="col3 w-1/4 mx-2 bg-white p-2">
                <div className="row1 flex items-center text-xs">
                    <img src="/img10.png" alt="" className=' w-6 mx-1' />
                    <p className=' mx-1'>Events Log</p>
                    <p className=' text-white rounded-full px-2 py-1 bg-teal-300 mx-1'>see all</p>
                </div>
                <div className="row2 flex items-start text-xs py-2">
                    <div className=' w-9/12 flex items-start'>
                        <div className="col1">
                            <img src="/img12.png" alt="" className=' w-5' />
                        </div>
                        <div className="col2 text-teal-400  px-2">
                            <p>Hubx</p>
                            <p className=' text-black'>Logged in</p>
                            <p>more info</p>
                        </div>
                    </div>

                    <div className="col3 w-3/12 text-end text-[10px] font-thin">22 minutes</div>
                </div>
            </div>
            <div className="col4 w-1/4 mx-2">
                <div className="row1 my-2 bg-white relative p-2">
                    <div className="row1 flex justify-between">
                        <p className=' font-semibold '>Trial period</p>
                        <img src="/img13.png" alt="" className=' w-6' />
                    </div>
                    <div className="row2">
                        <div className='w-28 h-28 rounded-full bg-teal-400 border-white border-[2px] flex flex-col items-center justify-center px-2 text-center text-white' style={{ boxShadow: "0 0 5px grey" }}>
                            <p className=' text-2xl font-semibold '>30</p>
                            <p className=' text-base font-normal'> Days left</p>
                        </div>
                    </div>
                    <div className="row3 flex justify-end">
                        <div className=' p-2 bg-pink-500 rounded-full text-white text-xs font-bold'>Upgrade Now! {`>>`} </div>
                    </div>
                </div>
                <div className="row2 bg-white p-2">
                    <div className="row1 flex items-center">
                        <img src="/img7.png" alt="" className=' w-10' />
                        <p className='text-sm font-normal'>Online users (1)</p>
                    </div>
                    <div className="row2 flex justify-between items-center py-2">
                        <div className='flex items-end'>
                            <img src="/img9.png" alt="" className=' w-8' />
                            <div className=' text-[12px] mx-2 font-light'>
                                <p>hubx</p>
                                <p>24 minutes</p>
                            </div>
                        </div>
                        <div className=' text-sm bg-teal-400 text-white font-semibold p-1 rounded-sm'>Connect</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main