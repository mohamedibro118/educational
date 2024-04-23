'use client';
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import MyModal from "../mydialog";


export default function About() {
    let [isOpen, setIsOpen] = useState(false)

    return (
        <section className="bg-my-main my-10">
            <div className=" mx-auto max-w-screen-xl sm:flex   pb-12 px-4 md:px-20">
               <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 my-4">Inspire</h2>
            </div>
            <div className="mx-auto  max-w-screen-xl px-4 py-4 lg:py-20 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-4">
                <div className="max-w-xl lg:flex-auto lg:w-1/2 text-center sm:text-left lg:pl-12">
                    <div className="w-full  md:mb-5">
                        <p>With over a decade of experience, I have been dedicated to helping agents and
                            brokers up their social media game to fuel their business growth.
                        </p>
                        <h1 className="text-bgpurple font-bold text-2xl my-4 shadow-sm">My secret sauce?</h1>
                        <p>Empowering real estate professionals to achieve incredible results using social media,
                            all without sacrificing loads of time.
                        </p>
                        <p>
                            Craft a social media marketing plan with confidence, learn about emerging trends, harness the full potential of video and AI...and so much more!

                            Join our thriving community of real estate professionals who are getting smarter about social media and leveraging it to take their businesses to new heights!
                        </p>
                    </div>

                </div>
                <div className="mt-12 sm:mt-16 lg:mt-0 lg:flex-auto lg:w-1/2 pointer-events-none  shadow-md">
                    <Image
                        alt="banner"
                        src={'/test2.jpg'}
                        width={600}
                        height={600}
                        className="w-[100%] md:h-[500px] rounded-md shadow-md"
                    />
                </div>
            </div>
            <MyModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </section>
    );
}
