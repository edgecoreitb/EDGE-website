import Image from "next/image"

import Copyright from "@/assets/icon/copyright.svg";
import LinkedIn from "@/assets/icon/linkedin.svg";
import Instagram from "@/assets/icon/instagram.svg";
import Youtube from "@/assets/icon/youtube.svg";

export default function Footer(){
    return (
        <div className="w-full flex flex-col gap-y-24 bg-[#191919] px-48 pt-16 pb-12">
        <div className="grid grid-cols-2 gap-x-10">
          <div className="col-span-1 flex flex-col gap-y-4">
            <div className="flex justify-start gap-x-2">
              <Image
                className="relative"
                src="/logo.svg"
                alt="EDGE logo"
                width={40}
                height={20}
                priority
              />
              <Image
                className="relative"
                src="/text.svg"
                alt="EDGE logo"
                width={40}
                height={20}
                priority
              />
            </div>
            <p className="text-[#E1E7EB] text-sm">
              We committed to drive a sustainable energy future through
              data-driven innovation. Our expertise lies in renewable energy
              projects, data collection, data analysis, and comprehensive
              consulting services.
            </p>
          </div>
          <div className="col-span-1 flex justify-between">
            <div className="flex flex-col justify-between">
              <p className="text-[#E8EDF0] font-bold">Services</p>
              <p className="text-[#5D5D5D]">Data Collections</p>
              <p className="text-[#5D5D5D]">Data Insights</p>
              <p className="text-[#5D5D5D]">Consultation</p>
            </div>
            <div className="flex flex-col justify-between">
              <p className="text-[#E8EDF0] font-bold">Data Insight</p>
              <p className="text-[#5D5D5D]">Water Level</p>
              <p className="text-[#5D5D5D]">Wind Profile</p>
              <p className="text-[#5D5D5D]">Solar Irradiance</p>
            </div>
            <div className="flex flex-col justify-between">
              <p className="text-[#E8EDF0] font-bold">Company</p>
              <p className="text-[#5D5D5D]">Home</p>
              <p className="text-[#5D5D5D]">Services</p>
              <p className="text-[#5D5D5D]">About Us</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center rounded-full px-8 py-4 bg-[#222222]">
          <div className="flex text-[#E8EDF0] gap-x-1">
            <p>Copyright</p>
            <Image src={Copyright} alt="copyright" />
            <p>2023 Edge</p>
          </div>
          <div className="flex text-[#5D5D5D] justify-between gap-x-6">
            <p>Attributions:</p>
            <p>Image by Macrovector</p>
            <p>Image by Freepik</p>
          </div>
          <div className="flex justify-end gap-x-4">
            <Image src={LinkedIn} alt="linkedin" />
            <Image src={Instagram} alt="instagram" />
            <Image src={Youtube} alt="youtube" />
          </div>
        </div>
      </div>
    )
}