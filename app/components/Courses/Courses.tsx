"use client"
import * as React from "react";
import { useState } from "react";
import { GlobeAltIcon, DevicePhoneMobileIcon, CircleStackIcon, CloudIcon } from '@heroicons/react/24/outline';
interface Name {
    course: string;
    imageSrc: string;
    category: 'social media' | 'video marketing';
}

const names: Name[] = [
    {
        course: 'content1',
        imageSrc: '/assets/courses/coursesOne.svg',
        category: 'social media',
    },
    {
        course: 'content2',
        imageSrc: '/assets/courses/coursesTwo.svg',
        category: 'social media'
    },
    {
        course: 'content3',
        imageSrc: '/assets/courses/coursesThree.svg',
        category: 'social media'
    },
    {
        course: 'content4',
        imageSrc: '/assets/courses/coursesFour.svg',
        category: 'social media'
    },

];

const NamesList = () => {
    const [showVideo, setShowVideo] = useState(false);
    const [videoOptions, setVideoOptions] = useState({});

    const handleClick = () => {
        setShowVideo(true);
        setVideoOptions({
            autoplay: true,
            controls: true,
            sources: [{ src: 'https://youtu.be/qymEgNbOpyI?si=H4Ph98rB-cIWPX_V', type: 'video/mp4' }],
        });
    };
    const [selectedButton, setSelectedButton] = useState<'social media' | 'video marketing' | 'all' | null>('social media');


    const social_media = names.filter((name) => name.category === 'social media');
    const video_marketing = names.filter((name) => name.category === 'video marketing');


    let selectedNames: Name[] = [];

    if (selectedButton === 'social media') {
        selectedNames = social_media;
    } else if (selectedButton === 'video marketing') {
        selectedNames = video_marketing;
    }


    const nameElements = selectedNames.map((name, index) => (

        <div key={index}>
            <div className=" text-lg sm:text-sm py-5 lg:py-0">
                <div className="h-[300px] aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                    <div>
                        <iframe
                            className="w-full h-[300px]"
                            width={'100%'}
                            height={'100%'}
                            src="https://www.youtube.com/embed/qymEgNbOpyI?si=RskIZ6TcjlbEzxZO"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className="mt-6 block font-normal text-gray-900">
                        {name.course}
                    </div>
                    <div className="mt-6 block text-lg font-semibold text-green border-solid border-2 border-green rounded-md px-1">

                    </div>
                </div>
                <p aria-hidden="true" className="mt-2 mb-5 text-2xl font-semibold ">

                </p>

                <div className='flex justify-between border-solid border-2 border-grey500 rounded-md p-2'>
                    <p>12 Classes</p>
                    <div className='flex flex-row space-x-4'>
                        <div className='flex'>
                            <img src={'/assets/courses/account.svg'} alt="circle" />
                            <p className='text-lightgrey ml-1'>120</p>
                        </div>
                        <div className='flex'>
                            <img src={'/assets/courses/Star.svg'} alt="star" />
                            <p className='ml-1'>4.5</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    ));


    return (
        <div>
            <div id='courses-section' className="mx-auto max-w-2xl py-16 px-4 sm:py-36 sm:px-6 lg:max-w-7xl lg:px-8">

                <div className='sm:flex justify-between items-center pb-12'>
                    <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 my-4">Popular Courses</h2>
                    <div>
                        <button className="bg-transparent hover:bg-purple text-purple font-medium hover:text-white py-3 px-4 border border-purple hover:border-transparent rounded">
                            Explore Classes
                        </button>
                    </div>
                </div>

                <div className='flex nowhitespace space-x-5 rounded-xl bg-white p-1 overflow-x-auto'>

                    {/* FOR DESKTOP VIEW */}
                    <button onClick={() => setSelectedButton('social media')} className={"bg-white " + (selectedButton === 'social media' ? 'text-black border-b-2 border-orange' : 'text-lightgrey') + " pb-2 text-lg hidden sm:block"}>Social Media</button>

                    <button onClick={() => setSelectedButton('video marketing')} className={"bg-white " + (selectedButton === 'video marketing' ? 'text-black border-b-2 border-orange' : 'text-lightgrey') + " pb-2 text-lg hidden sm:block"}>Vedio Marketing</button>


                    {/* FOR MOBILE VIEW */}
                    <GlobeAltIcon onClick={() => setSelectedButton('social media')} width={70} height={70} className={"bg-white " + (selectedButton === 'social media' ? 'border-b-2 border-orange fill-orange' : '') + " pb-2 block sm:hidden"} />

                    <CircleStackIcon onClick={() => setSelectedButton('video marketing')} width={70} height={70} className={"bg-white " + (selectedButton === 'video marketing' ? 'border-b-2 border-orange fill-orange' : '') + " pb-2 block sm:hidden"} />


                </div>

                <div>
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 gap-y-10 gap-x-8 py-12">
                            <div className="col-start-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8">
                                {nameElements.length > 0 ? (
                                    nameElements
                                ) : (
                                    <p>No data to show</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default NamesList;




