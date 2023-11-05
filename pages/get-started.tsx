import { INTER_FONT, MOHAVE_FONT } from "@/styles/fonts";
import Image from "next/image";
import CallIcon from "@/assets/icon/call.svg";
import MailIcon from "@/assets/icon/mail.svg";
import BG from "@/assets/img/get-started-bg.svg";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";

export default function GetStarted() {
  const searchParams = useSearchParams();
  const item = searchParams.get("item");
  console.log(item)
  return (
    <>
      <Head>
        <title>Get Started | EDGE, Your Future Energy Solution!</title>
      </Head>
      <div className="relative w-full h-max bg-[#F2F4F6] flex px-20 pt-12 pb-32 gap-y-20">
        <Image
          className="absolute h-full  top-0 left-0 object-fill"
          src={BG}
          alt="background"
        />
        <form
          className="bg-[#FAFBFC] w-[50%] flex flex-col py-6 px-12 border border-[#B3C2CC] rounded-2xl z-10"
          id="get-started"
          method="POST"
          action="https://script.google.com/macros/s/AKfycbzQrQcDDkuf0gYbC62NDQ2gMMlyY3FLupXDgVqEJrbXPMfshducYYNsSS5ftKXHslK67A/exec"
        >
          <div className="flex items-center justify-start gap-x-2">
            <div className="border-t border-black h-0 w-12" />
            <p className={`${INTER_FONT.className} font-light text-base`}>
              GET STARTED
            </p>
          </div>
          <div className="flex flex-col gap-y-4">
            <p
              className={`${MOHAVE_FONT.className} font-bold text-3xl text-[#292F36]`}
            >
              Fill the form below to contact us
            </p>
            <p className="text-base text-[#5D5D5D]">
              Please take a moment to complete the form below to get in touch
              with us. Your input is valuable to us. Kindly provide the
              requested information in the form provided. We appreciate your
              interest and look forward to hearing from you.
            </p>
          </div>
          <div className="flex flex-col gap-y-4 pt-10">
            <div className="flex justify-between">
              <div className="flex flex-col w-[47.5%] gap-y-1">
                <label>First Name: *</label>
                <input
                  className="border border-[#6B7B8D] rounded-[0.25rem] py-[0.375rem] px-3"
                  name="First Name"
                  required
                />
              </div>
              <div className="flex flex-col w-[47.5%] gap-y-1">
                <label>Last Name: *</label>
                <input
                  className="border border-[#6B7B8D] rounded-[0.25rem] py-[0.375rem] px-3"
                  name="Last Name"
                  required
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col w-[47.5%] gap-y-1">
                <label>Email Address: *</label>
                <input
                  className="border border-[#6B7B8D] rounded-[0.25rem] py-[0.375rem] px-3"
                  name="Email Address"
                  required
                />
              </div>
              <div className="flex flex-col w-[47.5%] gap-y-1">
                <label>Job Title: *</label>
                <input
                  className="border border-[#6B7B8D] rounded-[0.25rem] py-[0.375rem] px-3"
                  name="Job Title"
                  required
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col w-[47.5%] gap-y-1">
                <label>Company Name: *</label>
                <input
                  className="border border-[#6B7B8D] rounded-[0.25rem] py-[0.375rem] px-3"
                  name="Company Name"
                  required
                />
              </div>
              <div className="flex flex-col w-[47.5%] gap-y-1">
                <label>Service: *</label>
                <select
                  className="border border-[#6B7B8D] rounded-[0.25rem] py-[0.375rem] px-3 bg-[url(/select-arrow.svg)] appearance-none bg-no-repeat bg-[right_0.7rem_top_50%]"
                  name="Services"
                  form="get-started"
                >
                  <option value="Data Collection">Data Collection</option>
                  <option value="Analytics">Analytics</option>
                  <option value="Consulting">Consulting</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col w-full gap-y-1">
              <label>Contact Number: *</label>
              <input
                className="border border-[#6B7B8D] rounded-[0.25rem] py-[0.375rem] px-3"
                name="Contact Number"
                required
              />
            </div>
            <div className="flex flex-col w-full gap-y-1">
              <label>Type your Message Here: *</label>
              <textarea
                className="border border-[#6B7B8D] h-40 rounded-[0.25rem] py-[0.375rem] px-3"
                name="Messages"
                value={item ? `Buy ${item}`: ""}
                required
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-center  pt-6 gap-y-8">
            <p className="text-[#586574]">
              By submitting this form you agree that we can store and process
              your personal data as per our Privacy Statement. We will never
              sell your personal information to any third party.
            </p>
            <button
              type="submit"
              className="bg-[#318337] text-white rounded py-3 px-4"
            >
              Contact Us
            </button>
          </div>
        </form>
        <div className="w-[50%] flex flex-col px-20 gap-y-8 z-10">
          <p
            className={`${MOHAVE_FONT.className} text-3xl text-[#292F36] font-bold`}
          >
            Contact Us
          </p>
          <div className="flex flex-col gap-y-3">
            <div className="flex gap-x-4 justify-start items-center">
              <Image src={CallIcon} alt="Call Icon" />
              <p className={`${MOHAVE_FONT.className} font-semibold text-2xl`}>
                Call Us
              </p>
            </div>
            <p>
              Phone:{" "}
              <span className="font-medium text-[#0071AA]">
                (+62) 8xxxxxxxxxx
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-y-3">
            <div className="flex gap-x-4 justify-start items-center">
              <Image src={MailIcon} alt="Call Icon" />
              <p className={`${MOHAVE_FONT.className} font-semibold text-2xl`}>
                Email
              </p>
            </div>
            <p>
              Sales Contact:{" "}
              <span className="font-medium text-[#0071AA]">info@edge.com</span>
            </p>
            <p>
              Partnership:{" "}
              <span className="font-medium text-[#0071AA]">
                partner@edge.com
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
