import { Inter } from "next/font/google";
import Image from "next/image";
import Image1 from "@/assets/img/service-image1.jpeg";
import Image2 from "@/assets/img/service-image2.jpeg";
import Image3 from "@/assets/img/service-image3.jpeg";
import Soundwave from "@/assets/img/service-soundwave.svg";
import Underline from "@/assets/img/service-underline.svg";
import Dashedline from "@/assets/img/line.svg";
import RectangleR from "@/assets/img/rectangle-right.svg";
import RectangleL from "@/assets/img/rectangle-left.svg";
import Forest from "@/assets/img/forest.svg";
import { MOHAVE_FONT } from "@/styles/fonts";

const INTER_FONT = Inter({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal"],
});

export default function Services() {
  return (
    <>
      <div className="relative w-full bg-[#F2F4F6] flex flex-col px-20 pt-12 pb-32 gap-y-20">
        <Image
          className="absolute w-full top-[15%] left-0"
          src={Soundwave}
          alt="soundwave"
        />
        <div className="w-full flex flex-col items-center gap-y-6 mt-10">
          <div className="flex justify-center items-center gap-x-2">
            <div className="border-t border-black h-0 w-12" />
            <p className={`${INTER_FONT.className} font-light`}>OUR SERVICE</p>
            <div className="border-t border-black h-0 w-12" />
          </div>
          <div
            className={`${MOHAVE_FONT.className} font-normal text-5xl text-center`}
          >
            <p>Data-Driven Renewable Energy Solutions for</p>
            <p>
              A{" "}
              <span className="font-semibold bg-gradient-to-r from-[#0071AA] to-[#4BBC53] text-transparent bg-clip-text">
                Sustainable Future.
              </span>
            </p>
          </div>
          <p className="text-center text-lg w-1/2">
            We believe that data is the key to a more sustainable future.
            That&apos;s why we offer a range of services to help companies and
            governments transition to renewable energy in a smarter, more
            cost-effective, and environmentally friendly way.
          </p>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-8 z-10">
          <div className="row-start-1 row-end-3 col-start-1 col-end-2 bg-[#E8EDF0] px-6 pt-4 pb-6 flex flex-col justify-between gap-y-12 border border-[#BAC8D1]">
            <div className="flex flex-col items-start gap-y-8">
              <Image className="w-full rounded-md" src={Image1} alt="image1" />
              <button className="bg-[#F3F6F7] px-6 py-1 text-lg text-[#2A2A2A] rounded-full">
                Data Insight
              </button>
            </div>
            <div className="flex flex-col gap-y-2">
              <p
                className={`${MOHAVE_FONT.className} font-semibold text-[1.75rem] text-[#222222]`}
              >
                Renewable energy data at your fingertips
              </p>
              <p className="text-[#191919]">
                We provide a comprehensive database of renewable energy
                resources in Indonesia, down to the village and district level.
                This data can be used to identify potential project sites,
                assess feasibility, and forecast performance.
              </p>
            </div>
          </div>
          <div className="row-start-1 row-end-2 col-start-2 col-end-3 bg-[#E8EDF0] px-6 pt-4 pb-6 flex flex-col gap-y-12 border border-[#BAC8D1]">
            <div className="flex gap-x-6">
              <Image className="w-full rounded-md" src={Image2} alt="image2" />
              <div className="flex flex-col items-start justify-between">
                <button className="bg-[#F3F6F7] px-6 py-1 text-lg text-[#2A2A2A] rounded-full">
                  Analytics
                </button>
                <div className="flex flex-col gap-y-2">
                  <p
                    className={`${MOHAVE_FONT.className} font-semibold text-2xl text-[#222222]`}
                  >
                    Optimizing renewable energy with data analytics.
                  </p>
                  <p className="text-[#191919]">
                    This analysis can help you identify the best technologies
                    for your project, optimize your design, and make informed
                    decisions about your investment.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row-start-2 row-end-3 col-start-2 col-end-3 bg-[#E8EDF0] px-6 pt-4 pb-6 flex flex-col gap-y-12 border border-[#BAC8D1]">
            <div className="flex gap-x-6">
              <Image className="w-full" src={Image3} alt="image2" />
              <div className="flex flex-col items-start justify-between">
                <button className="bg-[#F3F6F7] px-6 py-1 text-lg text-[#2A2A2A] rounded-full">
                  Consulting
                </button>
                <div className="flex flex-col gap-y-2">
                  <p
                    className={`${MOHAVE_FONT.className} font-semibold text-2xl text-[#222222]`}
                  >
                    Expert consulting for your renewable energy journey.
                  </p>
                  <p className="text-[#191919]">
                    We offer personalized consulting services to help you
                    develop and implement renewable energy solutions that are
                    tailored to your specific needs and goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full bg-[#E1E7EB] flex flex-col px-20 pt-28 pb-32 gap-y-32">
        <Image
          className="absolute top-0 -left-52"
          src={RectangleL}
          alt="rectangle-bg"
        />
        <Image
          className="absolute top-0 -right-52"
          src={RectangleR}
          alt="rectangle-bg"
        />
        <div className="flex flex-col items-center text-center gap-y-6 z-10">
          <p>Let&apos;s Work Together</p>
          <p className={`${MOHAVE_FONT.className} font-bold text-5xl`}>
            Why Choose Us?
          </p>
        </div>
        <div className="flex justify-between items-center gap-x-4 z-10">
          <div className="flex flex-col items-center bg-[#F0F3F5] text-center py-20 px-10 border border-[#ABBCC7] rounded">
            <p className={`${MOHAVE_FONT.className} font-semibold text-2xl`}>
              We offer data-driven solutions to your specific needs and goals.
            </p>
            <Image src={Underline} alt="underline" />
            <p className="pt-2">
              We work closely with you to understand their unique challenges and
              opportunities, and then develop solutions that will help them
              achieve their renewable energy goals.
            </p>
          </div>
          <div className="flex flex-col items-center bg-[#F0F3F5] text-center py-24 px-10 border border-[#ABBCC7] rounded">
            <p className={`${MOHAVE_FONT.className} font-semibold text-2xl`}>
              We offer data-driven solutions to your specific needs and goals.
            </p>
            <Image src={Underline} alt="underline" />
            <p className="pt-2">
              We work closely with you to understand their unique challenges and
              opportunities, and then develop solutions that will help them
              achieve their renewable energy goals.
            </p>
          </div>
          <div className="flex flex-col items-center bg-[#F0F3F5] text-center py-20 px-10 border border-[#ABBCC7] rounded">
            <p className={`${MOHAVE_FONT.className} font-semibold text-2xl`}>
              We offer data-driven solutions to your specific needs and goals.
            </p>
            <Image src={Underline} alt="underline" />
            <p className="pt-2">
              We work closely with you to understand their unique challenges and
              opportunities, and then develop solutions that will help them
              achieve their renewable energy goals.
            </p>
          </div>
        </div>
        <Image className="w-full z-10" src={Dashedline} alt="dashed_line" />
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
