"use client"

import Image from "next/image";

export default function Navbar(){
    return (
        <div className="w-screen h-15 flex grid grid-cols-10 gap-4 p-2 bg-cover" style={{ backgroundImage: "url('/images/heroImage.png')"}}>
            <div>
                <p className="headingShirtsCard text-white" style={{ fontFamily: 'Bauhaus 93'}}>ShineGear</p>
                {/* <Image
                    src="/images/navbarImage.png"
                    alt="logo"
                    width={200}
                    height={100}
                /> */}
            </div>
            <div className="col-span-7"></div>
            <div className="justify-center items-center">
                <Image
                    src="/images/profileIcon.png"
                    alt="Profile Icon"
                    width={30}
                    height={30}
                />
            </div>
            <div className="justify-center items-center">
                <Image
                    src="/images/shoppingIcon.png"
                    alt="Shopping Cart Icon"
                    width={30}
                    height={30}
                />
            </div>
        </div>
    )
}