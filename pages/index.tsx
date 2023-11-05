import Image from "next/image";
import Link from 'next/link'
import Arrow from "@/assets/icon/arrow.svg";
import ArrowLight from "@/assets/icon/arrow_light.svg";
import Data from "@/assets/icon/data.svg";
import Analytic from "@/assets/icon/analytic.svg";
import Consulting from "@/assets/icon/consulting.svg";
import OurMissionBG from "@/assets/img/our_mission.svg";
import Image1 from "@/assets/img/image1.jpeg";
import Image2 from "@/assets/img/image2.jpeg";
import Image3 from "@/assets/img/image3.jpeg";
import Image4 from "@/assets/img/image4.jpeg";
import Line from "@/assets/img/line.svg";
import Windmill from "@/assets/img/windmill.svg";
import Soundwave from "@/assets/img/soundwave.svg";
import Vector1 from "@/assets/img/vector1.svg";
import Logos from "@/assets/img/logos.svg";
import Chart from "@/assets/icon/chart.svg";
import Headset from "@/assets/icon/headset.svg";
import Message from "@/assets/icon/messages.svg";
import Plant from "@/assets/icon/plant.svg";
import Lamp from "@/assets/icon/lamp.svg";
import Recycle from "@/assets/icon/recycle.svg";
import Forest from "@/assets/img/forest.svg";
import { MOHAVE_FONT } from "@/styles/fonts";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | EDGE, Your Future Energy Solution!</title>
      </Head>
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
          <p className="max-w-[75%]">
            We&apos;re an independent advisory firm specializing in renewable
            energy projects, data collection, data analytics, and comprehensive
            consulting—empowering you with crucial insights for better
            decision-making.
          </p>
        </div>
        <div className="row-span-1 col-start-1 col-end-3 flex justify-between z-10">
          <div className="flex justify-between items-center gap-x-4">
            <Image src={Data} alt="data" />
            <p className="text-[#2A2A2A] text-lg">Data Collection</p>
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
          <div className="relative w-[32%] flex flex-col items-center justify-start bg-[#FCFCFD]">
            <button className="absolute top-6 right-6 bg-[#22222280] border border-[#9CB0BD] px-4 py-2 rounded-full">
              <p className="font-semibold text-sm text-white ">
                Our Data Expertise #1
              </p>
            </button>
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
          <div className="relative w-[32%] flex flex-col items-center justify-start bg-[#FCFCFD]">
            <button className="absolute top-6 right-6 bg-[#22222280] border border-[#9CB0BD] px-4 py-2 rounded-full">
              <p className="font-semibold text-sm text-white ">
                Our Data Expertise #2
              </p>
            </button>
            <Image className="w-full" src={Image2} alt="image1" />
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
          <div className="relative w-[32%] flex flex-col items-center justify-start bg-[#FCFCFD]">
            <button className="absolute top-6 right-6 bg-[#22222280] border border-[#9CB0BD] px-4 py-2 rounded-full">
              <p className="font-semibold text-sm text-white ">
                Our Data Expertise #3
              </p>
            </button>
            <Image className="w-full" src={Image3} alt="image1" />
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

        <div className="w-full flex flex-col justify-center items-center gap-y-20">
          <div className="flex flex-col items-center w-[50%]">
            <p
              className={`${MOHAVE_FONT.className} font-semibold text-base bg-gradient-to-r from-[#0273A8] to-[#49BA56] text-transparent bg-clip-text`}
            >
              HOW CAN WE HELP YOU?
            </p>
            <p
              className={`${MOHAVE_FONT.className} font-semibold text-[#C2CED6] text-3xl mt-6 text-center`}
            >
              Your Sustainable Future Starts Here:
            </p>
            <p
              className={`${MOHAVE_FONT.className} font-semibold text-[#C2CED6] text-3xl text-center`}
            >
              {" "}
              Green Solutions, Data Precision, Enduring Impact
            </p>
            <Image className="w-full" src={Vector1} alt="vector1" />
          </div>
          <div className="w-full grid grid-cols-3 gap-x-3 mb-20">
            <div className="group col-span-1 flex flex-col items-start gap-y-4 hover:bg-[#2A2A2A] px-8 py-8 rounded">
              <div
                className={`${MOHAVE_FONT.className} font-semibold text-4xl text-[#D9E1E6] group-hover:text-[#191919] text-center px-5 pt-4 pb-3 group-hover:bg-[#FFB140] rounded-full`}
              >
                01
              </div>
              <p
                className={`${MOHAVE_FONT.className} text-[#F7F8F9] text-xl font-semibold`}
              >
                Tailored Consultations for Your Goals
              </p>
              <p className="text-[#D9E1E6]">
                Unlock the potential of your sustainable energy projects with
                our customized consultations. Our expertise caters precisely to
                your goals, crafting solutions that seamlessly align with your
                vision.
              </p>
            </div>
            <div className="group col-span-1 flex flex-col items-start gap-y-4 hover:bg-[#2A2A2A] px-8 py-8 rounded">
              <div
                className={`${MOHAVE_FONT.className} font-semibold text-4xl text-[#D9E1E6] group-hover:text-[#191919] text-center px-5 pt-4 pb-3 group-hover:bg-[#FFB140] rounded-full`}
              >
                02
              </div>
              <p
                className={`${MOHAVE_FONT.className} text-[#F7F8F9] text-xl font-semibold`}
              >
                Data Precision for Efficient Renewable Projects
              </p>
              <p className="text-[#D9E1E6]">
                Navigate the renewable energy landscape with data-driven
                precision. Identify and bridge strategy gaps for efficient and
                informed decision-making, empowering your projects with lasting
                impact.
              </p>
            </div>
            <div className="group col-span-1 flex flex-col items-start gap-y-4 hover:bg-[#2A2A2A] px-8 py-8 rounded">
              <div
                className={`${MOHAVE_FONT.className} font-semibold text-4xl text-[#D9E1E6] group-hover:text-[#191919] text-center px-5 pt-4 pb-3 group-hover:bg-[#FFB140] rounded-full`}
              >
                03
              </div>
              <p
                className={`${MOHAVE_FONT.className} text-[#F7F8F9] text-xl font-semibold`}
              >
                Maximizing Renewable Energy Potential in Indonesia
              </p>
              <p className="text-[#D9E1E6]">
                Our data-driven commitment extends to optimizing the vast
                potential of renewable sources, contributing to a sustainable
                future.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-max w-full flex flex-col bg-[#F2F4F6] px-20 py-20">
        <div className="grid grid-cols-2">
          <div className="col-span-1 grid grid-rows-4">
            <div className="row-span-2 flex flex-col justify-start gap-y-4">
              <p className="text-base">Find all the data you need</p>
              <p className={`${MOHAVE_FONT.className} font-bold text-4xl`}>
                Unlocking Insights, Unleashing Potential: Where Data Meets
                Purpose.
              </p>
              <div className="flex h-max justify-start items-stretch gap-x-6 pt-4 pb-10">
                <div className="bg-gradient-to-r from-[#0071AA] to-[#4BBC53] py-[4px] px-[1px] rounded-full">
                  <span className="h-full w-full bg-[#F2F4F6] px-6 py-1 rounded-full">
                    Solar Irradiance
                  </span>
                </div>
                <div className="w-[1px] bg-[#191919]" />
                <div className="bg-gradient-to-r from-[#0071AA] to-[#4BBC53] py-[4px] px-[1px] rounded-full">
                  <span className="h-full w-full bg-[#F2F4F6] px-6 py-1 rounded-full">
                    Wind Profile
                  </span>
                </div>
                <div className="w-[1px] bg-[#191919]" />
                <div className="bg-gradient-to-r from-[#0071AA] to-[#4BBC53] py-[4px] px-[1px] rounded-full">
                  <span className="h-full w-full bg-[#F2F4F6] px-6 py-1 rounded-full">
                    Water Level
                  </span>
                </div>
              </div>
              <Image className="w-full" src={Line} alt="line" />
            </div>
            <div className="row-span-2 flex flex-col justify-end gap-y-8">
              <p>
                Find the data you need effortlessly, unlocking valuable insights
                tailored to your goals. It&apos;s not just about information;
                it&apos;s about purposeful discovery for informed decisions and
                unleashing your full potential.
              </p>
              <div className="flex gap-x-6">
                <Link href="https://fadillahazhar7.users.earthengine.app/view/wind-energy-potential-indonesia" prefetch={true} passHref target='_blank' className="flex items-center gap-x-3 bg-[#191919] border border-[#5D5D5D] px-6 py-2 rounded-full">
                  <p className="text-[#F0F3F5] text-lg">
                    Get Access to Our Data
                  </p>
                  <Image className="w-7" src={ArrowLight} alt="arrow" />
                </Link>
                <button className="flex items-center gap-x-3 bg-[#F7F8F9] border border-[#5D5D5D] px-6 py-2 rounded-full">
                  <p className="text-[#191919] text-lg">
                    Book for Consultation
                  </p>
                  <Image className="w-7" src={Arrow} alt="arrow" />
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex justify-end">
            <Image className="w-full rounded-xl" src={Image4} alt="image4" />
          </div>
        </div>
      </div>

      <div className="w-full bg-[#FDFEFE] py-6">
        <Image className="w-full" src={Logos} alt="logos" />
      </div>

      <div className="h-max w-full grid grid-cols-3 grid-rows-4 gap-y-16 gap-x-20 bg-[#E1E7EB] px-20 pt-20">
        <div className="row-start-1 row-end-2 col-start-1 col-end-3 flex items-center gap-x-12">
          <div className="w-[25%] bg-[#191919] py-6 px-8 flex items-stretch justify-between gap-x-6">
            <div className="bg-[#E8EDF0] w-2" />
            <p className="text-[#E8EDF0] text-xl font-bold">
              EDGE FEATURED SERVICES
            </p>
          </div>
          <p
            className={`${MOHAVE_FONT.className} font-bold text-[#191919] text-[2.5rem]`}
          >
            Navigate Your Choices: Your Service, Your Decision, Your Success.
          </p>
        </div>
        <p className="row-start-1 row-end-2 col-start-3 col-end-4 text-lg">
          Accelerating the global transition to renewable energy, we optimize
          resource usage, foster sustainability, build meaningful partnerships,
          drive innovation, ensure positive environmental impact, educate,
          provide top-notch services, uphold integrity, and shape a greener
          future.
        </p>
        <div className="row-start-2 row-end-3 col-start-1 col-end-2 flex flex-col gap-y-4">
          <div className="flex justify-between">
            <Image src={Chart} alt="chart" />
            <p className="text-lg text-[#1D4F21]">01</p>
          </div>
          <div>
            <p className="text-[#191919] font-bold text-xl">Data Analysis</p>
            <p className="text-[#2A2A2A] text-justify">
              Through in-depth data analysis, we empower our partners to
              optimize their energy usage, enhancing efficiency, and reducing
              costs while making informed decisions.
            </p>
          </div>
        </div>
        <div className="row-start-2 row-end-3 col-start-2 col-end-3 flex flex-col gap-y-4">
          <div className="flex justify-between">
            <Image src={Headset} alt="chart" />
            <p className="text-lg text-[#1D4F21]">02</p>
          </div>
          <div>
            <p className="text-[#191919] font-bold text-xl">
              Best Customer Support
            </p>
            <p className="text-[#2A2A2A] text-justify">
              We are always ready to provide the best support to our partners,
              answering their questions, and collaborating to achieve their
              renewable energy goals.
            </p>
          </div>
        </div>
        <div className="row-start-2 row-end-3 col-start-3 col-end-4 flex flex-col gap-y-4">
          <div className="flex justify-between">
            <Image src={Message} alt="chart" />
            <p className="text-lg text-[#1D4F21]">03</p>
          </div>
          <div>
            <p className="text-[#191919] font-bold text-xl">Consultation</p>
            <p className="text-[#2A2A2A] text-justify">
              Our specialized consultations ensure that every solution is
              tailored to the unique goals of each partner, guiding them on a
              path toward sustainable energy development and implementation.
            </p>
          </div>
        </div>
        <div className="row-start-3 row-end-4 col-start-1 col-end-2 flex flex-col gap-y-4">
          <div className="flex justify-between">
            <Image src={Plant} alt="chart" />
            <p className="text-lg text-[#1D4F21]">04</p>
          </div>
          <div>
            <p className="text-[#191919] font-bold text-xl">
              Positive Environmental Impact
            </p>
            <p className="text-[#2A2A2A] text-justify">
              Proudly being a part of the global environmental solution, our
              collaboration aids in reducing carbon footprints and protecting
              the environment.
            </p>
          </div>
        </div>
        <div className="row-start-3 row-end-4 col-start-2 col-end-3 flex flex-col gap-y-4">
          <div className="flex justify-between">
            <Image src={Lamp} alt="chart" />
            <p className="text-lg text-[#1D4F21]">05</p>
          </div>
          <div>
            <p className="text-[#191919] font-bold text-xl">Innovative</p>
            <p className="text-[#2A2A2A] text-justify">
              We stay at the forefront of technology and sustainability trends,
              ensuring that our partners remain ahead of the curve with
              innovative solutions for sustainable energy.
            </p>
          </div>
        </div>
        <div className="row-start-3 row-end-4 col-start-3 col-end-4 flex flex-col gap-y-4">
          <div className="flex justify-between">
            <Image src={Recycle} alt="chart" />
            <p className="text-lg text-[#1D4F21]">06</p>
          </div>
          <div>
            <p className="text-[#191919] font-bold text-xl">Sustainability</p>
            <p className="text-[#2A2A2A] text-justify">
              As pioneers in data-driven sustainability, we inspire others to
              take progressive steps toward renewable energy and environmental
              responsibility.
            </p>
          </div>
        </div>
        <Image
          className="row-start-4 row-end-5 col-span-3 w-full"
          src={Line}
          alt="line"
        />
      </div>

      <div className="relative h-max w-full flex justify-center items-center bg-[#E1E7EB] px-20 pb-36">
        <div className="w-4/5 flex flex-col items-center justify-between gap-y-12 z-10">
          <div>
            <p
              className={`${MOHAVE_FONT.className} font-bold text-4xl text-[#191919] text-center`}
            >
              You&apos;ve come this far. So, why hesitate any longer? Take the
              leap now!
            </p>
            <p
              className={`${MOHAVE_FONT.className} font-bold text-4xl text-[#191919] text-center`}
            >
              Together, we can make a difference.
            </p>
          </div>
          <button className="text-2xl font-medium text-[#D9E1E6] p-4 bg-[#191919]">
            Contact Us Today!
          </button>
        </div>
        <Image
          className="absolute w-full top-[-25%]"
          src={Forest}
          alt="forest"
        />
      </div>
    </>
  );
}
