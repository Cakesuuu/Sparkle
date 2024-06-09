'use client';
import Image from "next/image";
import { easeIn, easeInOut, motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-white">

      <div className="flex min-h-screen w-full">

        <div className="flex w-full min-h-screen justify-center items-center p-5">

          <div className="flex flex-col h-full w-3/12 bg-white justify-center items-center">

            <div className="h-full w-full bg-[#c7172f] rounded-[50px] rounded-br-none rounded-tr-none">

            </div>

            <div className="bg-gradient-to-r from-white from-0% to-[#c7172f] to-40%">

              <div className="flex flex-col h-fit w-full items-center p-5 gap-3 rounded-[50px] rounded-bl-none rounded-tl-none bg-white">
                <h1 className="font-bento text-black text-7xl">Sparkle</h1>

                <div className="border border-[#c7172f] w-11/12 rounded"></div>

                <p className="text-black font-medium text-justify w-full h-fit p-5">
                  A member of the Masked Fools. Inscrutable and unscrupulous. A dangerous master of theatrics engrossed in playing roles. A woman of countless masks and many faces. Wealth, status, power... None of this matters to Sparkle. The only thing that can lure her interest is &apos;amusement.&apos;
                </p>

              </div>

            </div>

            <div className="h-full w-full bg-[#c7172f] rounded-[50px] rounded-br-none rounded-tr-none">

            </div>

          </div>

          <div className="flex w-9/12 h-full">

            <div className="relative w-full h-full bg-[#c7172f] rounded-[50px] rounded-tl-none rounded-bl-none">

              <div className="absolute flex w-full h-full items-center justify-center">

                <p className="font-ungai w-fit h-fit text-[12rem] font-bold text-white">Sparkle</p>

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

    </main>
  );
}
