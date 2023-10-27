import Link from "next/link";
import Image from "next/image";

import Arrow from "@/assets/icon/arrow.svg";

export default function Navbar(){
    return (
        <div className="left-0 top-0 flex w-full justify-between border-b border-[#D9E1E6] bg-[#F8FAFB] from-zinc-200 py-4 px-12 backdrop-blur-2xl">
        <div className="flex items-center justify-start gap-x-8">
          <Link href="/" className="flex justify-start gap-x-2">
            <Image
              className="relative"
              src="/logo.svg"
              alt="Next.js Logo"
              width={40}
              height={20}
              priority
            />
            <Image
              className="relative"
              src="/text.svg"
              alt="Next.js Logo"
              width={40}
              height={20}
              priority
            />
          </Link>
          <div className="bg-[#ABBCC7] w-[2px] h-full" />
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/">About Us</Link>
        </div>
        <Link href="/get-started" className="flex justify-end items-center gap-2 border border-[#5D5D5D] px-5 rounded-full">
          <p>Get Started</p>
          <Image src={Arrow} alt="arrow" className="w-5" />
        </Link>
      </div>
    )
}