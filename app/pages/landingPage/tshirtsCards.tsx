"use client"

import Image from "next/image";
import Link from "next/link";

export default function TshirtsCard() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* White Tees */}
            <div className="grid grid=rows-3 md:grid-rows-4">
                <div className="flex justify-center place-items-center p-5 md:p-0 md:pt-10">
                    <p className="headingShirtsCard">White Tees</p>
                </div>
                <div className="flex justify-center items-center">
                    <Link href="/pages/productPage">
                        <Image
                            src="/images/GWhite.png"
                            alt="Gold & White Tee"
                            width={300}
                            height={300}
                            className="max-w-full h-auto"
                        />
                    </Link>
                </div>
                <div className="flex justify-center items-center">
                    <Link href="">
                        <Image
                            src="/images/WWhite.png"
                            alt="White & White Tee"
                            width={300}
                            height={300}
                            className="max-w-full h-auto"
                        />
                    </Link>
                </div>
            </div>

            {/* Blue Tees */}
            <div className="grid grid=rows-3 md:grid-rows-4">
                <div></div>
                <div className="flex justify-center place-items-center p-5 md:p-0 md:pt-10">
                    <p className="headingShirtsCard">Blue Tees</p>
                </div>
                <div className="flex justify-center items-center">
                    <Link href="">
                        <Image
                            src="/images/GBlue.png"
                            alt="Gold & Blue Tee"
                            width={300}
                            height={300}
                            className="max-w-full h-auto"
                        />
                    </Link>
                </div>
                <div className="flex justify-center items-center">
                    <Link href="">
                        <Image
                            src="/images/WBlue.png"
                            alt="White & Blue Tee"
                            width={300}
                            height={300}
                            className="max-w-full h-auto"
                        />
                    </Link>
                </div>
            </div>

            {/* Pink Tees */}
            <div className="grid grid=rows-3 md:grid-rows-4">
                <div className="flex justify-center place-items-center p-5 md:p-0 md:pt-10">
                    <p className="headingShirtsCard">Pink Tees</p>
                </div>
                <div className="flex justify-center items-center">
                    <Link href="">
                        <Image
                            src="/images/GPink.png"
                            alt="Gold & Pink Tee"
                            width={300}
                            height={300}
                            className="max-w-full h-auto"
                        />
                    </Link>
                </div>
                <div className="flex justify-center items-center">
                    <Link href="">
                        <Image
                            src="/images/WPink.png"
                            alt="White & Pink Tee"
                            width={300}
                            height={300}
                            className="max-w-full h-auto"
                        />
                    </Link>
                </div>
            </div>

            {/* Oat Tees */}
            <div className="grid grid=rows-3 md:grid-rows-4">
                <div></div>
                <div className="flex justify-center place-items-center p-5 md:p-0 md:pt-10">
                    <p className="headingShirtsCard">Oat Tees</p>
                </div>
                <div className="flex justify-center items-center">
                    <Link href="">
                        <Image
                            src="/images/GOat.png"
                            alt="Gold & Oat Tee"
                            width={300}
                            height={300}
                            className="max-w-full h-auto"
                        />
                    </Link>
                </div>
                <div className="flex justify-center items-center">
                    <Link href="">
                        <Image
                            src="/images/WOat.png"
                            alt="White & Oat Tee"
                            width={300}
                            height={300}
                            className="max-w-full h-auto"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}
