import Image from "next/image";
import Link from "next/link";
import Arrow from "@/assets/icon/arrow.svg";
import Copyright from "@/assets/icon/copyright.svg";
import LinkedIn from "@/assets/icon/linkedin.svg";
import Instagram from "@/assets/icon/instagram.svg";
import Youtube from "@/assets/icon/youtube.svg";
import Data from "@/assets/icon/data.svg";
import Analytic from "@/assets/icon/analytic.svg";
import Consulting from "@/assets/icon/consulting.svg";
import { Mohave } from "next/font/google";

const MOHAVE_FONT = Mohave({ weight: ["400", "600"], subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="left-0 top-0 flex w-full justify-between border-b border-[#D9E1E6] bg-[#F8FAFB] from-zinc-200 py-4 px-12 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
        <div className="flex items-center justify-start gap-x-8">
          <Link href="/" className="flex justify-start gap-x-2">
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/logo.svg"
              alt="Next.js Logo"
              width={40}
              height={20}
              priority
            />
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/text.svg"
              alt="Next.js Logo"
              width={40}
              height={20}
              priority
            />
          </Link>
          <div className="bg-[#ABBCC7] w-[2px] h-full" />
          <Link href="/">Home</Link>
          <Link href="/">Services</Link>
          <Link href="/">About Us</Link>
        </div>
        <button className="flex justify-end items-center gap-2 border border-[#5D5D5D] px-5 rounded-full">
          <p>Get Started</p>
          <Image src={Arrow} alt="arrow" className="w-5" />
        </button>
      </div>

      {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div> */}
      <div className="h-max w-full grid grid-rows-[10] grid-cols-4 px-20 pt-20 pb-40">
        <div className="row-span-1 col-start-1 col-end-3 flex justify-start items-center gap-x-2">
          <div className="w-10 h-[1px] bg-black" />
          <p className="font-light text-black">HOME</p>
        </div>
        <div
          className={`row-span-3 col-start-1 col-end-3 flex flex-col justify-start gap-y-6 ${MOHAVE_FONT.className}`}
        >
          <p className="text-5xl">Empowering the Future of</p>
          <p className="text-5xl font-semibold bg-gradient-to-r from-[#0071AA] to-[#4BBC53] text-transparent bg-clip-text">
            Renewable Energy.
          </p>
        </div>
        <div className="row-span-5 col-start-1 col-end-3">
          <p>
            We&apos;re an independent advisory firm specializing in renewable
            energy projects, data collection, data analytics, and comprehensive
            consulting—empowering you with crucial insights for better
            decision-making.
          </p>
        </div>
        <div className="row-span-1 col-start-1 col-end-3 flex justify-between">
          <div className="flex justify-between items-center gap-x-4">
            <Image src={Data} alt="data" />
            <p className="text-[#2A2A2A] text-lg">Data Insight</p>
            <Image className="w-7" src={Arrow} alt="arrow" />
          </div>
          <div className="flex justify-between items-center gap-x-4">
            <Image src={Analytic} alt="data" />
            <p className="text-[#2A2A2A] text-lg">Analytics</p>
            <Image className="w-7" src={Arrow} alt="arrow" />
          </div>
          <div className="flex justify-between items-center gap-x-4">
            <Image src={Consulting} alt="data" />
            <p className="text-[#2A2A2A] text-lg">Consulting</p>
            <Image className="w-7" src={Arrow} alt="arrow" />
          </div>
        </div>
        <div className="row-start-1 row-end-[11] col-start-4 col-end-5 flex flex-col justify-between gap-y-8">
          <div className="flex flex-col justify-between items-start gap-y-3">
            <button className="border border-[#4BBC53] rounded-full px-6 py-1 text-base">
              Solar Irradiance
            </button>
            <p>
              Lorem ipsum dolor sit amet consectetur. Eleifend risus et nisl
              bibendum quisque mauris. Viverra leo ut mauris elit cursus lectus
              sit.
            </p>
          </div>
          <div className="bg-[#191919] h-[1px] w-full" />
          <div className="flex flex-col justify-between items-start gap-y-3">
            <button className="border border-[#4BBC53] rounded-full px-6 py-1 text-base">
              Wind Profile
            </button>
            <p>
              Lorem ipsum dolor sit amet consectetur. Eleifend risus et nisl
              bibendum quisque mauris. Viverra leo ut mauris elit cursus lectus
              sit.
            </p>
          </div>
          <div className="bg-[#191919] h-[1px] w-full" />
          <div className="flex flex-col justify-between items-start gap-y-3">
            <button className="border border-[#4BBC53] rounded-full px-6 py-1 text-base">
              Water Level
            </button>
            <p>
              Lorem ipsum dolor sit amet consectetur. Eleifend risus et nisl
              bibendum quisque mauris. Viverra leo ut mauris elit cursus lectus
              sit.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-y-24 bg-[#191919] px-48 pt-16 pb-12">
        <div className="grid grid-cols-2 gap-x-10">
          <div className="col-span-1 flex flex-col gap-y-4">
            <div className="flex justify-start gap-x-2">
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/logo.svg"
                alt="Next.js Logo"
                width={40}
                height={20}
                priority
              />
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/text.svg"
                alt="Next.js Logo"
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
    </main>
  );
}
