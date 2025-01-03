"use client"

import Image from "next/image";

export default function GWhite() {
    return (
        <div className="bg-white text-gray-800">
            {/* Main Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-white min-h-screen p-5 items-center">
                {/* Left Section (Image Grid) */}
                <div className="grid grid-cols-5 p-2 border border-gray-400">
                    <div className="grid grid-rows-5 gap-1 place-items-center">
                        <Image
                            src="/images/productsImages/GWhite/GWhitebgB.png"
                            alt="Gold & White No Background"
                            width={130}
                            height={40}
                            className="col-span-4 border border-gray-400"
                        />
                        <Image
                            src="/images/productsImages/GWhite/GWhitebgR.png"
                            alt="Gold & White No Background"
                            width={130}
                            height={40}
                            className="col-span-4 border border-gray-400"
                        />
                        <Image
                            src="/images/productsImages/GWhite/GWhiteZoom.JPG"
                            alt="Gold & White No Background"
                            width={130}
                            height={40}
                            className="col-span-4 border border-gray-400"
                        />
                        <Image
                            src="/images/productsImages/GWhite/GWhitebgB.png"
                            alt="Gold & White No Background"
                            width={130}
                            height={40}
                            className="col-span-4 border border-gray-400"
                        />
                        <Image
                            src="/images/productsImages/GWhite/GWhitebgR.png"
                            alt="Gold & White No Background"
                            width={130}
                            height={40}
                            className="col-span-4 border border-gray-400"
                        />
                    </div>
                    <div className="col-span-4 flex justify-center items-center border border-gray-400">
                        <Image
                            src="/images/productsImages/GWhite/GWhite.png"
                            alt="Gold & White Main Image"
                            width={800}
                            height={800}
                            className="max-w-full h-auto"
                        />
                    </div>
                </div>

                {/* Right Section (Text Content) */}
                <div className="space-y-5 md:pl-10">
                    <p className="headingProductsTitle text-xl md:text-4xl font-bold">ShineGear Golden & White T-Shirt</p>
                    <p className="pt-3 text-lg md:text-3xl Thai">
                        เสื้อไชน์เกียร์สีขาวแต่งทอง เราใช้เส้นด้ายเรืองแสงในการเย็บและปัก
                        สามารถกักเก็บแสงและปลดปล่อยออกมาในที่มืดได้!
                    </p>
                    <div className="space-x-4">
                        <button className="Eng h-12 w-28 md:h-15 md:w-32 border-2 border-gray-400 rounded-3xl p-2">
                            Buy Now
                        </button>
                        <button className="Eng h-12 w-28 md:h-15 md:w-32 border-2 border-gray-400 rounded-3xl p-2">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>

            {/* Description Section */}
            <div className="flex flex-col md:flex-row p-5 items-start space-y-5 md:space-y-0 md:space-x-10 justify-center ">
                <p className="text-lg heading2ProductsTitle justify-center flex" style={{ fontFamily: 'Bauhaus 93' }}>
                    Description
                <span className="text-3xl Thai font-bold">-รายละเอียด</span></p>
            </div>

            <div className="pl-5 md:pl-20">
                <h2 className="Thai text-2xl md:text-3xl font-bold mt-5">
                    เนื้อผ้าของ <span className="Eng text-xl md:text-2xl font-normal"> ShineGear T-Shirts</span>
                </h2>
                <p className="Thai text-lg md:text-xl mt-2">
                    ผ้าของเราใช้ผ้าเกรดพรีเมี่ยม ผ่านการใช้เทคนิคพิเศษแปรงบนผิวผ้า (Micro Brushing) 
                    จึงทำให้ผิวสัมผัสนุ่มคล้ายกำมะหยี่น่าสวมใส่แม้แรกสัมผัส
                </p>

                <h2 className="Thai text-2xl md:text-3xl font-bold mt-5">คุณสมบัติเนื้อผ้าของเรา</h2>
                <ul className="list-disc list-inside text-lg md:text-xl Thai mt-2 space-y-2">
                    <li><strong>COTTON COMFORT:</strong> มีส่วนผสมจากฝ้ายธรรมชาติจึงสวมใส่สบาย</li>
                    <li><strong>SOFT TO THE TOUCH, EVEN AFTER WASH:</strong> ผิวสัมผัสนุ่ม ชวนสัมผัสแม้หลังซัก</li>
                    <li><strong>SULFUR FREE:</strong> ย้อมสีไร้กำมะถัน ไม่ระคายต่อผิวคุณเป็นมิตรต่อสิ่งแวดล้อม</li>
                </ul>

                <h2 className="Thai text-2xl md:text-3xl font-bold mt-5">คำแนะนำในการดูแลผ้า <span className="font-normal Eng text-xl md:text-2xl">Cotton Premium</span> ของเรา</h2>
                <ul className="list-disc list-inside text-lg md:text-xl Thai mt-2 space-y-2">
                    <li><strong>Machine Wash cold:</strong> ซักเครื่องใช้น้ำเย็นอุณหภูมิปกติ</li>
                    <li><strong>Tumble dry low heat:</strong> อบผ้าด้วยความร้อนต่ำ</li>
                    <li><strong>Do not Dry Clean:</strong> ห้ามซักแห้ง</li>
                    <li><strong>Do not bleach:</strong> ห้ามใช้สารฟอกขาว</li>
                    <li><strong>Warm iron if needed:</strong> รีดโดยใช้อุณหภูมิปานกลาง</li>
                </ul>
            </div>
        </div>
    )
}
