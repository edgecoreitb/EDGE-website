import Image from "next/image";
import Image1 from "@/assets/img/about-us-image-1.svg";
import Image2 from "@/assets/img/about-us-image-2.svg";
import Image3 from "@/assets/img/about-us-image-3.svg";
import Image4 from "@/assets/img/about-us-image-4.svg";
import Image5 from "@/assets/img/about-us-image-5.svg";
import Image6 from "@/assets/img/about-us-image-6.svg";
import Image7 from "@/assets/img/about-us-image-7.svg";
import Image8 from "@/assets/img/about-us-image-8.svg";
import Image9 from "@/assets/img/about-us-image-9.svg";
import Image10 from "@/assets/img/about-us-image-10.svg";
import Image11 from "@/assets/img/about-us-image-11.svg";
import Quote from "@/assets/img/quote.svg";
import OurValues from "@/assets/img/our_values.svg";
import Profile from "@/assets/img/profile.svg";
import Forest from "@/assets/img/forest.svg";
import { INTER_FONT, MOHAVE_FONT } from "@/styles/fonts";

export default function AboutUs() {
  return (
    <>
      <div className="bg-[#F2F4F6] w-full flex justify-between gap-x-4">
        <Image className="w-[17.5%] h-auto" src={Image1} alt="image1" />
        <Image className="w-[17.5%] h-auto" src={Image2} alt="image2" />
        <div className="bg-[#191919] flex flex-col justify-start px-20 py-16 w-[65%]">
          <div className="flex items-center gap-x-4">
            <div className="border border-[#F0F3F5] h-0 w-12" />
            <p className={`${INTER_FONT.className} font-light text-[#F0F3F5]`}>
              About Us
            </p>
          </div>
          <div
            className={`${MOHAVE_FONT.className} text-5xl flex flex-col mt-8`}
          >
            <p className="text-[#F0F3F5] mb-4">
              Building a better future, through
            </p>
            <p className="font-semibold bg-gradient-to-r from-[#0071AA] to-[#4BBC53] bg-clip-text text-transparent">
              Sustainable Energy.
            </p>
          </div>
          <p className="text-[#F0F3F5] text-lg mt-4 w-[70%]">
            We are on a mission to help companies and governments transition to
            renewable energy through data-driven innovation, sustainable
            solutions, and meaningful partnerships.
          </p>
        </div>
      </div>
      <div className="relative w-full bg-[#F2F4F6] px-20 pt-28 pb-20 flex flex-col">
        <Image
          className="absolute w-full top-52 left-0"
          src={OurValues}
          alt="our values"
        />
        <div className="relative flex gap-x-2">
          <div className="relative h-0 border border-[#000000] w-24 top-4" />
          <p className={`${MOHAVE_FONT.className} text-5xl font-medium`}>
            We believe that businesses can be a force for good in the world.
            That&apos;s why we are committed to working with our clients to
            create a more sustainable future for all.
          </p>
        </div>
        <div className="relative flex gap-x-6 w-full items-center justify-center mt-36 p-20 bg-[#D9E1E659 rounded border border-[#9CB0BD]">
          <Image
            className="relative transform bottom-8"
            src={Quote}
            alt="quote image"
          />
          <p
            className={`${MOHAVE_FONT.className} font-bold text-2xl text-[#191919]`}
          >
            Our Values
          </p>
          <Image
            className="relative transfrom -scale-x-100 top-8"
            src={Quote}
            alt="quote image"
          />
        </div>
        <div className="flex justify-between gap-x-4 mt-32">
          <div className="w-full flex flex-col justify-between gap-y-20">
            <div className="flex flex-col gap-y-4 text-center">
              <Image className="" src={Image3} alt="image3" />
              <p className={`${MOHAVE_FONT.className} font-semibold text-2xl`}>
                Environmental stewardship
              </p>
              <p>
                We are deeply committed to protecting the natural environment
                and believe that renewable energy is essential to a sustainable
                future.
              </p>
            </div>
            <div className="flex flex-col gap-y-4 text-center">
              <Image className="" src={Image4} alt="image4" />
              <p className={`${MOHAVE_FONT.className} font-semibold text-2xl`}>
                Commitment to sustainability
              </p>
              <p>
                We are committed to sustainability in all aspects of our
                business, from our operations to our supply chain.
              </p>
            </div>
            <div className="flex flex-col gap-y-4 text-center">
              <Image className="" src={Image5} alt="image5" />
              <p className={`${MOHAVE_FONT.className} font-semibold text-2xl`}>
                Integrity and ethics
              </p>
              <p>
                We uphold the highest standards of integrity and ethics. We
                believe that honesty and transparency are essential to building
                trust and long-term relationships.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col justify-between">
            <div className="flex flex-col gap-y-4 text-center">
              <Image className="" src={Image6} alt="image6" />
              <p className={`${MOHAVE_FONT.className} font-semibold text-2xl`}>
                Accuracy and quality
              </p>
              <p>
                We strive for accuracy and quality in everything we do, from our
                data collection and analysis to our consulting services.
              </p>
            </div>
            <div className="flex flex-col gap-y-4 text-center">
              <Image className="" src={Image7} alt="image7" />
              <p className={`${MOHAVE_FONT.className} font-semibold text-2xl`}>
                Strong partnerships
              </p>
              <p>
                We value strong and mutually beneficial partnerships with our
                clients. We believe that collaboration is key to success.
              </p>
            </div>
            <div className="flex flex-col gap-y-4 text-center">
              <Image className="" src={Image8} alt="image8" />
              <p className={`${MOHAVE_FONT.className} font-semibold text-2xl`}>
                Continuous learning
              </p>
              <p>
                We are committed to continuous learning and development, both as
                individuals and as an organization. We believe that this is
                essential to staying ahead of the curve and providing our
                clients with the best possible service.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col justify-between">
            <div className="flex flex-col gap-y-4 text-center">
              <Image className="" src={Image9} alt="image9" />
              <p className={`${MOHAVE_FONT.className} font-semibold text-2xl`}>
                Continuous innovation
              </p>
              <p>
                We are constantly innovating and seeking new ways to improve our
                services and support our client&apos;s renewable energy goals.
              </p>
            </div>
            <div className="flex flex-col gap-y-4 text-center">
              <Image className="" src={Image10} alt="image10" />
              <p className={`${MOHAVE_FONT.className} font-semibold text-2xl`}>
                Education and awareness
              </p>
              <p>
                We are committed to educating and raising awareness about
                renewable energy and environmental issues. We want to inspire
                change and promote a more sustainable culture.
              </p>
            </div>
            <div className="flex flex-col gap-y-4 text-center">
              <Image className="" src={Image11} alt="image11" />
              <p className={`${MOHAVE_FONT.className} font-semibold text-2xl`}>
                Positive impact
              </p>
              <p>
                We strive to make a positive impact on the environment and the
                communities in which we operate. We believe that businesses can
                be a force for good
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center bg-[#E1E7EB] p-20 gap-y-20">
        <p className="text[#191919] font-bold text-3xl text-center">
          Meet Our Team
        </p>
        <div className="w-full grid grid-cols-4 grid-rows-2 gap-y-8 gap-x-4">
          <div className="row-span-1 col-span-1 flex flex-col justify-between items-start">
            <Image src={Profile} alt="profile" />
            <p
              className={`${INTER_FONT.className} text-lg font-extrabold mt-5`}
            >
              Hugh Wilson
            </p>
            <p className={`${INTER_FONT.className} mt-1`}>Manajer Marketing</p>
          </div>
          <div className="row-span-1 col-span-1 flex flex-col justify-between items-start">
            <Image src={Profile} alt="profile" />
            <p
              className={`${INTER_FONT.className} text-lg font-extrabold mt-5`}
            >
              Hugh Wilson
            </p>
            <p className={`${INTER_FONT.className} mt-1`}>Manajer Marketing</p>
          </div>
          <div className="row-span-1 col-span-1 flex flex-col justify-between items-start">
            <Image src={Profile} alt="profile" />
            <p
              className={`${INTER_FONT.className} text-lg font-extrabold mt-5`}
            >
              Hugh Wilson
            </p>
            <p className={`${INTER_FONT.className} mt-1`}>Manajer Marketing</p>
          </div>
          <div className="row-span-1 col-span-1 flex flex-col justify-between items-start">
            <Image src={Profile} alt="profile" />
            <p
              className={`${INTER_FONT.className} text-lg font-extrabold mt-5`}
            >
              Hugh Wilson
            </p>
            <p className={`${INTER_FONT.className} mt-1`}>Manajer Marketing</p>
          </div>
          <div className="row-span-1 col-span-1 flex flex-col justify-between items-start">
            <Image src={Profile} alt="profile" />
            <p
              className={`${INTER_FONT.className} text-lg font-extrabold mt-5`}
            >
              Hugh Wilson
            </p>
            <p className={`${INTER_FONT.className} mt-1`}>Manajer Marketing</p>
          </div>
          <div className="row-span-1 col-span-1 flex flex-col justify-between items-start">
            <Image src={Profile} alt="profile" />
            <p
              className={`${INTER_FONT.className} text-lg font-extrabold mt-5`}
            >
              Hugh Wilson
            </p>
            <p className={`${INTER_FONT.className} mt-1`}>Manajer Marketing</p>
          </div>
          <div className="row-span-1 col-span-1 flex flex-col justify-between items-start">
            <Image src={Profile} alt="profile" />
            <p
              className={`${INTER_FONT.className} text-lg font-extrabold mt-5`}
            >
              Hugh Wilson
            </p>
            <p className={`${INTER_FONT.className} mt-1`}>Manajer Marketing</p>
          </div>
          <div className="row-span-1 col-span-1 flex flex-col justify-between items-start">
            <Image src={Profile} alt="profile" />
            <p
              className={`${INTER_FONT.className} text-lg font-extrabold mt-5`}
            >
              Hugh Wilson
            </p>
            <p className={`${INTER_FONT.className} mt-1`}>Manajer Marketing</p>
          </div>
        </div>
      </div>
      <div className="relative h-max w-full flex justify-center items-center bg-[#FDFEFE] px-20 pb-36 mt-40">
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
