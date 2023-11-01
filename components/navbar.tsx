import Link from "next/link";
import Image from "next/image";

import Arrow from "@/assets/icon/arrow.svg";
import ArrowWhite from "@/assets/icon/arrow_light.svg";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  console.log(router.pathname);
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
        <div className="relative">
          {router.pathname == "/" && (
            <div className="bg-[#69C770] absolute w-[120%] h-4 top-[60%] left-1/2 right-1/2 -ml-[60%] -z-10" />
          )}
          <Link className={router.pathname == "/" ? "font-bold" : ""} href="/">
            Home
          </Link>
        </div>

        <div className="relative">
          {router.pathname == "/services" && (
            <div className="bg-[#69C770] absolute w-[120%] h-4 top-[60%] left-1/2 right-1/2 -ml-[60%] -z-10" />
          )}
          <Link
            className={router.pathname == "/services" ? "font-bold" : ""}
            href="/services"
          >
            Services
          </Link>
        </div>
        <div className="relative">
          {router.pathname == "/about-us" && (
            <div className="bg-[#69C770] absolute w-[120%] h-4 top-[60%] left-1/2 right-1/2 -ml-[60%] -z-10" />
          )}
          <Link
            className={router.pathname == "/about-us" ? "font-bold" : ""}
            href="/about-us"
          >
            About Us
          </Link>
        </div>
      </div>
      <Link
        href="/get-started"
        className={`flex justify-end items-center gap-2 border border-[#5D5D5D] px-5 rounded-full ${
          router.pathname == "/get-started" &&
          "font-bold text-white bg-[#318337]"
        }`}
      >
        <p>Get Started</p>
        <Image
          src={router.pathname == "/get-started" ? ArrowWhite : Arrow}
          alt="arrow"
          className="w-5"
        />
      </Link>
    </div>
  );
}
