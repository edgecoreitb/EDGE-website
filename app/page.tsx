import Image from "next/image";
import Link from "next/link";
import Arrow from "@/assets/icon/arrow.svg";
import Copyright from "@/assets/icon/copyright.svg"
import LinkedIn from "@/assets/icon/linkedin.svg"
import Instagram from "@/assets/icon/instagram.svg"
import Youtube from "@/assets/icon/youtube.svg"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed left-0 top-0 flex w-full justify-between border-b border-[#D9E1E6] bg-[#F8FAFB] from-zinc-200 py-4 px-12 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
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
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
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
            <Image src={Copyright} alt="copyright"/>
            <p>2023 Edge</p>
          </div>
          <div className="flex text-[#5D5D5D] justify-between gap-x-6">
            <p>Attributions:</p>
            <p>Image by Macrovector</p>
            <p>Image by Freepik</p>
          </div>
          <div className="flex justify-end gap-x-4">
            <Image src={LinkedIn} alt="linkedin"/>
            <Image src={Instagram} alt="instagram"/>
            <Image src={Youtube} alt="youtube"/>
          </div>
        </div>
      </div>
    </main>
  );
}
