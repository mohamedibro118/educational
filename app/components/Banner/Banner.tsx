"use client"
import Dropdownone from './Dropdownone';
import MyModal from "../mydialog";
import { useState } from 'react';

const Banner = () => {
    let [isOpen, setIsOpen] = useState(false)
    return (
        <main className='banner-image'>
            <div className='w-full  bg-[#fcf6ef] bg-opacity-75'>
                <div className="relative px-6 lg:px-8">
                    <div className="mx-auto max-w-5xl pt-16 sm:pt-40 sm:pb-24">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-70px md:4px">
                                Inspire teach real estate agents and brokers how to achieve big results using social media,
                                video marketing and AI
                                <br />
                                (without spending a ton of time!)
                                <br />
                                skills with our courses
                            </h1>
                            <p className="mt-6 text-lg font-bold leading-8 text-[#611f69] shadow-sm">
                                Build skills with our courses and mentor from world-class companies.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <div className="hidden sm:block -space-x-2 overflow-hidden">
                        
                                    <img
                                        className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                                        src="/whats.svg"
                                        width={200}
                                        height={200}
                                        alt=""
                                    />
                                    <img
                                        className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                                        src="/youtube.svg"
                                        width={200}
                                        height={200}
                                        alt=""
                                    />
                                    <img
                                        className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                                        src="/snapchat.svg"
                                        width={200}
                                        height={200}
                                    />
                                    <img
                                        className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                                        src="/facebook.svg"
                                        width={200}
                                        height={200}
                                        alt=""
                                    />
                                </div>
                                <div className='bannerBorder sm:pl-8'>
                                    <div className='flex justify-center sm:justify-start'>
                                        <h3 className='text-2xl font-semibold mr-2'>4.6</h3>
                                        <img src={'/assets/banner/Stars.svg'} alt="stars-icon" />
                                    </div>
                                    <div>
                                        <h3 className='text-sm'>Rated by 25k on google.</h3>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* DROPDOWN BUTTONS */}


                        <div className="mx-auto max-w-4xl mt-24 pt-6 pb-8 px-6 lg:max-w-4xl lg:px-8 bg-white rounded-lg boxshadow">
                            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-8 xl:gap-x-8">
                                <div className="col-span-6">
                                    <Dropdownone />
                                </div>
                                <div className="col-span-3 sm:col-span-2 mt-2">
                                    <button onClick={()=>setIsOpen(true)} className="bg-purple w-full hover:bg-pruple text-white font-bold py-4 px-3 rounded">
                                        Start
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <MyModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </main>
    )
}

export default Banner;
