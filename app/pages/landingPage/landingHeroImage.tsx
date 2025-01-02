import Image from "next/image";

export default function LandingHeroImage() {
    return (
        <div className="flex h-screen relative">
            <Image
                src="/images/heroImage.png"
                alt="ShineGear Poster"
                layout="fill"
                objectFit="contain"
                className="p-4"
            />
        </div>
    )
}