'use client';
import Image from "next/image";
import { easeIn, easeInOut, motion } from "framer-motion";
import '../public/fonts/fonts.css';

export default function Home() {
  return (
    <main className="bg-white">

      <div className="flex min-h-screen w-full bg-white">

        <div className="flex flex-col-reverse md:flex-row w-full min-h-screen justify-center items-center p-5">

          <div className="flex flex-row md:flex-col h-fit md:h-full w-full md:w-4/12 justify-center items-center">

            <div className="hidden md:block h-full w-full bg-[#c7172f] rounded-l-[50px]">
            </div>

            <div className="bg-gradient-to-r from-white md:from-0% to-[#c7172f] to-40% rounded-[50px] md:rounded-none md:pr-10">

              <div className="flex flex-col h-fit w-full items-center p-5 gap-3 rounded-[50px] md:rounded-bl-none md:rounded-tl-none bg-white">
                <h1 className="font-bento text-black text-7xl">Sparkle</h1>

                <div className="border border-[#c7172f] w-11/12 rounded"></div>

                <p className="text-black font-medium w-full h-fit p-5">
                  A member of the Masked Fools. Inscrutable and unscrupulous. A dangerous master of theatrics engrossed in playing roles. A woman of countless masks and many faces. Wealth, status, power... None of this matters to Sparkle. The only thing that can lure her interest is &apos;amusement.&apos;
                </p>

              </div>

            </div>

            <div className="hidden md:block h-full w-full bg-[#c7172f] rounded-l-[50px]">
            </div>

          </div>

          <div className="flex w-full md:w-8/12 h-full">

            <div className="relative w-full h-auto md:bg-[#c7172f] rounded-[20px] md:rounded-l-none">

              <div className="absolute hidden md:flex w-full h-full items-center justify-center">

                <p className="font-ungai w-fit h-fit text-[5rem] md:text-[12rem] font-bold md:text-white">Sparkle</p>

              </div>

              <Image
                src="./sparkle.png"
                className="w-auto h-auto"
                fill
                unoptimized
                alt=""
                style={{ objectFit: "contain" }}
              />

            </div>

          </div>

        </div>

      </div>

      <div className="flex min-h-screen w-full bg-white border-2 border-amber-300 p-5">

        <div className="flex flex-col w-full border-2 border-black">

        </div>

      </div>

    </main>
  );
}
