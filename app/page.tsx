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
import OurMissionBG from "@/assets/img/our_mission.svg";
import Image1 from "@/assets/img/image1.svg";
import Windmill from "@/assets/img/windmill.svg";
import Soundwave from "@/assets/img/soundwave.svg";
import { Mohave } from "next/font/google";

const MOHAVE_FONT = Mohave({
  weight: ["400", "600"],
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
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
      <div className="relative h-max w-full grid grid-rows-[10] grid-cols-4 px-20 pt-20 pb-96 bg-[#F2F4F6]">
        <div className="row-span-1 col-start-1 col-end-3 flex justify-start items-center gap-x-2 z-10">
          <div className="w-10 h-[1px] bg-black" />
          <p className="font-light text-black">HOME</p>
        </div>
        <div
          className={`row-span-3 col-start-1 col-end-3 flex flex-col justify-start gap-y-6 ${MOHAVE_FONT.className} z-10`}
        >
          <p className="text-5xl">Empowering the Future of</p>
          <p className="text-5xl font-semibold bg-gradient-to-r from-[#0071AA] to-[#4BBC53] text-transparent bg-clip-text">
            Renewable Energy.
          </p>
        </div>
        <div className="row-span-5 col-start-1 col-end-3 z-10">
          <p>
            We&apos;re an independent advisory firm specializing in renewable
            energy projects, data collection, data analytics, and comprehensive
            consulting—empowering you with crucial insights for better
            decision-making.
          </p>
        </div>
        <div className="row-span-1 col-start-1 col-end-3 flex justify-between z-10">
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
        <div className="row-start-1 row-end-[11] col-start-4 col-end-5 flex flex-col justify-between gap-y-8 z-10">
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
        <Image
          src={Soundwave}
          alt="soundwave"
          className="absolute bottom-[8%] w-full"
        />
        <Image
          src={Windmill}
          alt="windmill"
          className="absolute bottom-[10%] right-[30%]"
        />
      </div>

      <div className="relative h-max w-full flex flex-col justify-between items-center gap-y-40 px-20 py-10 bg-[#222222]">
        <div className="absolute top-[-10rem] flex justify-between gap-x-4 w-full px-20">
          <div className="w-[32%] flex flex-col items-center justify-start bg-[#FCFCFD]">
            <Image className="w-full" src={Image1} alt="image1" />
            <div className="flex flex-col justify-between items-center gap-y-4 text-center px-8 py-12">
              <p
                className={`${MOHAVE_FONT.className} font-semibold text-2xl text-[#333333]`}
              >
                Smart Transition to Renewable Energy
              </p>
              <p className="text-[#3B3B3B]">
                Lead the way in transitioning to intelligent renewable energy.
                We utilize data to ensure that the shift to renewable energy is
                not only efficient but also environmentally friendly.
              </p>
            </div>
          </div>
          <div className="w-[32%] flex flex-col items-center justify-start bg-[#FCFCFD]">
            <Image className="w-full" src={Image1} alt="image1" />
            <div className="flex flex-col justify-between items-center gap-y-4 text-center px-8 py-12">
              <p
                className={`${MOHAVE_FONT.className} font-semibold text-2xl text-[#333333]`}
              >
                Tailored Insights for B2B and B2G Collaboration
              </p>
              <p className="text-[#3B3B3B]">
                Our expert team delves deep into data to provide insights
                tailored to your specific goals, whether you are a government
                partner or a private company.
              </p>
            </div>
          </div>
          <div className="w-[32%] flex flex-col items-center justify-start bg-[#FCFCFD]">
            <Image className="w-full" src={Image1} alt="image1" />
            <div className="flex flex-col justify-between items-center gap-y-4 text-center px-8 py-12">
              <p
                className={`${MOHAVE_FONT.className} font-semibold text-2xl text-[#333333]`}
              >
                Data Analysis for Informed Decisions
              </p>
              <p className="text-[#3B3B3B]">
                Data is more than numbers. We use cutting-edge data analysis to
                ensure that your renewable energy projects are not only
                beneficial for the environment but also for your business.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-start gap-x-16 pt-20 mt-96">
          <p
            className={`${MOHAVE_FONT.className} font-semibold text-[#D9E1E6] text-4xl`}
          >
            Data-Driven, Future-Ready: Your Energy Revolution Starts Here.
          </p>
          <div className="flex flex-col justify-between items-start gap-y-4">
            <div className="flex items-stretch justify-between gap-x-4">
              <div className="w-1 bg-gradient-to-b from-[#0273A8] to-[#49BA56]" />
              <div>
                <p
                  className={`${MOHAVE_FONT.className} font-semibold text-[#F7F8F9] text-xl`}
                >
                  Sustainable Solutions
                </p>
                <p
                  className={`${MOHAVE_FONT.className} text-[#D9E1E6] text-xl italic`}
                >
                  Transforming Ambition into Action
                </p>
              </div>
            </div>
            <p className="text-[#D9E1E6]">
              Unleash the potential of your renewable energy projects with our
              seamless and expert solutions.
            </p>
          </div>
          <div className="flex flex-col justify-between items-start gap-y-4">
            <div className="flex items-stretch justify-between gap-x-4">
              <div className="w-1 bg-gradient-to-b from-[#0273A8] to-[#49BA56]" />
              <div>
                <p
                  className={`${MOHAVE_FONT.className} font-semibold text-[#F7F8F9] text-xl`}
                >
                  Insightful Data, Informed Choices
                </p>
                <p
                  className={`${MOHAVE_FONT.className} text-[#D9E1E6] text-xl italic`}
                >
                  Closing Gaps, Unlocking Potential
                </p>
              </div>
            </div>
            <p className="text-[#D9E1E6]">
              Navigate the renewable energy landscape with precision. Our
              insights bridge strategy gaps, ensuring efficiency and informed
              decisions.
            </p>
          </div>
        </div>

        <div className="relative w-full flex flex-col justify-center items-center bg-[#181818A6] px-56 pt-20 pb-14 opacity-[0.65] border border-[#3B3B3B] rounded-lg">
          <Image
            className="absolute w-full top-0"
            src={OurMissionBG}
            alt="alt"
          />
          <p
            className={`${MOHAVE_FONT.className} font-semibold text-4xl text-[#D9E1E6]`}
          >
            OUR MISSION
          </p>
          <p className="text-center text-2xl text-[#BAC8D1]">
            We envision a world where renewable energy is a lasting legacy.
            Using data, we&apos;re revolutionizing sustainable solutions to
            endure for generations. Our focus is maximizing renewable energy
            potential in Indonesia.
          </p>
        </div>
        <div></div>
        <div></div>
      </div>

      <div className="w-full flex flex-col gap-y-24 bg-[#191919] px-48 pt-16 pb-12">
        <div className="grid grid-cols-2 gap-x-10">
          <div className="col-span-1 flex flex-col gap-y-4">
            <div className="flex justify-start gap-x-2">
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
