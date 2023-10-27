import Image from "next/image"
import Image1 from "@/assets/img/about-us-image-1.svg"
import Image2 from "@/assets/img/about-us-image-2.svg"
import { INTER_FONT, MOHAVE_FONT } from "@/styles/fonts"

export default function AboutUs(){
    return (
        <>
        <div className="bg-[#F2F4F6] w-full flex justify-between gap-x-4">
            <Image className="w-[17.5%] h-auto" src={Image1} alt="image1"/>
            <Image className="w-[17.5%] h-auto" src={Image2} alt="image2"/>
            <div className="bg-[#191919] flex flex-col justify-start px-20 py-16 w-[65%]">
                <div className="flex items-center gap-x-4">
                    <div className="border border-[#F0F3F5] h-0 w-12"/>
                    <p className={`${INTER_FONT.className} font-light text-[#F0F3F5]`}>About Us</p>
                </div>
                <div className={`${MOHAVE_FONT.className} text-5xl flex flex-col mt-8`}>
                    <p className="text-[#F0F3F5] mb-4">Building a better future, through</p>
                    <p className="font-semibold bg-gradient-to-r from-[#0071AA] to-[#4BBC53] bg-clip-text text-transparent">Sustainable Energy.</p>
                </div>
                <p className="text-[#F0F3F5] text-lg mt-4 w-[70%]">We are on a mission to help companies and governments transition to renewable energy through data-driven innovation, sustainable solutions, and meaningful partnerships.</p>
            </div>
        </div>
        </>
    )
}