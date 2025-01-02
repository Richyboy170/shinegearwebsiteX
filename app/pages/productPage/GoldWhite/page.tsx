"use client"

import Image from "next/image";
import Link from "next/link";

export default function GWhite(){
    return (
        <div className="grid grid-cols-2 gap-1 flex bg-white h-screen p-5 justify-center items-center">
            <div className="">
                <Image
                    src="/images/productsImages/GWhite/GWhite.png"
                    alt="Gold & White No Background"
                    width={800}
                    height={800}
                    className="flex justify-center items-center"
                />
            </div>  
            <div className="place-items-start">
                <p className="headingProductsTitle">ShineGear Golden & White T-Shirt</p>
                <p className="pt-3 pr-10 text-gray-800">เสื้อไชน์เกียร์สีขาวแต่งทอง เราใช้เส้นด้ายเรืองแสงในการเย็บและปัก สามารถกักเก็บแสงและปลดปล่อยออกมาในที่มืดได้!</p>
            </div>
        </div>
    )
}