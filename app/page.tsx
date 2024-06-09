'use client';
import Image from "next/image";
import { easeIn, easeInOut, motion } from "framer-motion";
import '../public/fonts/fonts.css';

export default function Home() {
  return (
    <main className="bg-white">

      <div className="flex md:min-h-screen w-full bg-white">

        <div className="flex flex-col-reverse md:flex-row w-full md:min-h-screen justify-center items-center p-5">

          <div className="flex flex-row md:flex-col h-fit md:h-full w-full md:w-3/12 justify-center items-center">

            <div className="hidden md:block h-full w-full bg-[#c7172f] rounded-l-[50px]">
            </div>

            <div className="bg-gradient-to-r from-white md:from-0% to-[#c7172f] to-40% rounded-[50px] md:rounded-none">

              <div className="flex flex-col h-fit w-full items-center p-5 gap-3 rounded-[50px] md:rounded-bl-none md:rounded-tl-none bg-white">

                <h1 className="font-bento text-black text-7xl">Sparkle</h1>

                <div className="border border-[#c7172f] w-11/12 rounded"></div>

                <p className="text-black font-medium w-full text-justify h-fit p-5">
                  A member of the Masked Fools. Inscrutable and unscrupulous. A dangerous master of theatrics engrossed in
                  playing roles. A woman of countless masks and many faces. Wealth, status, power... None of this matters to
                  Sparkle. The only thing that can lure her interest is &apos;amusement.&apos;
                </p>

              </div>

            </div>

            <div className="hidden md:block h-full w-full bg-[#c7172f] rounded-l-[50px]">
            </div>

          </div>

          <div className="flex w-full md:w-9/12 h-fit md:h-full">

            <div className="flex w-full h-auto md:bg-[#c7172f] rounded-[20px] md:rounded-l-none items-center justify-center">

              <div className="hidden absolute md:flex w-fit h-fit items-center justify-center">

                <p className="font-hon w-fit h-fit text-[16rem] font-bold text-[#c7172f] md:text-white">Sparkle</p>

              </div>

              <div className="flex flex-col h-fit w-full items-center">

                <Image
                  src="./sparkle.png"
                  className="w-full md:w-1/2 h-auto rounded-xl z-0"
                  width="0"
                  height="0"
                  unoptimized
                  alt=""
                />

              </div>

            </div>

          </div>

        </div>

      </div>

      <div className="flex flex-col h-fit w-full items-center bg-white p-5 gap-5">

        <h1 className="font-bento text-5xl md:text-6xl text-black">The Sparkling Splendor</h1>

        <div className="flex flex-col h-fit w-full md:w-6/12 items-center">

          <Image
            src="./sparklebanner.jpg"
            className="w-full h-auto rounded-xl"
            width="0"
            height="0"
            unoptimized
            alt=""
          />

        </div>

        <p className="w-11/12 md:w-8/12 text-black text-sm md:text-base font-medium text-justify">
          The girl, an abandoned orphan, lived without knowledge of her origins or destination until she encountered a passing troupe.
          From a distance, she watched a black-haired lady with a double ponytail, gracefully moving across the stage like a fish.
          Despite donning various masks, they did not hinder her laughs and cries during her performance, captivating the audience
          even from afar. The fish leaped in front of her, then dove back down, creating ripples in the surface of the water.
        </p>

        <p className="w-11/12 md:w-8/12 text-black text-sm md:text-base font-medium text-justify">
          Gradually, she realized she was watching the performance from beneath the stage.
        </p>

        <p className="w-11/12 md:w-8/12 text-black text-sm md:text-base font-medium text-justify">
          Intrigued, she continued to watch the performances for countless days, but she remained an audience member,
          never stepping into the spotlight. After one of the shows ended, she went backstage, where the black-haired
          lady handed her a mask.
        </p>

        <p className="w-11/12 md:w-8/12 text-black text-sm md:text-base font-medium text-justify">
          <i>&quot;Can I perform, too?&quot;</i>
        </p>

      </div>

    </main>
  );
}
