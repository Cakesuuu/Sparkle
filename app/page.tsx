'use client';
import Image from "next/image";
import { easeIn, easeInOut, motion, AnimatePresence } from "framer-motion";
import '../public/fonts/fonts.css';
import { useState } from "react";

export default function Home() {

  const [isSparklingSplendor, setSparklingSplendor] = useState(false);

  const handleImageClick = () => {
    setSparklingSplendor(!isSparklingSplendor);
  };

  return (
    <main className="bg-[#F0F8FF] pb-96">

      <div className="flex md:min-h-screen w-full">

        <div className="flex flex-col-reverse md:flex-row w-full md:min-h-screen items-center p-5 gap-5 md:gap-0">

          <div className="flex flex-row md:flex-col h-fit md:h-full w-full md:w-3/12 justify-center items-center">

            <div className="hidden md:block h-full w-full bg-[#c7172f] rounded-l-[30px]">
            </div>

            <div className="bg-[#c7172f] md:rounded-none">

              <div className="flex flex-col h-fit w-full items-center p-5 gap-3 rounded-[30px] md:rounded-bl-none md:rounded-tl-none bg-[#F0F8FF]">

                <h1 className="font-bento text-black text-7xl">Sparkle</h1>

                <div className="border border-[#c7172f] w-11/12 rounded"></div>

                <p className="text-black text-sm font-medium w-full text-justify h-fit p-5">
                  A member of the Masked Fools. Inscrutable and unscrupulous. A dangerous master of theatrics engrossed in
                  playing roles. A woman of countless masks and many faces. Wealth, status, power... None of this matters to
                  Sparkle. The only thing that can lure her interest is &apos;amusement.&apos;
                </p>

              </div>

            </div>

            <div className="hidden md:block h-full w-full bg-[#c7172f] rounded-l-[30px]">
            </div>

          </div>

          <div className="hidden md:flex w-full md:w-9/12 h-fit md:h-full">

            <div className="flex w-full h-auto md:bg-[#c7172f] rounded-[30px] md:rounded-l-none items-center justify-center">

              <div className="absolute flex w-10/12 md:w-5/12 aspect-square border-4 border-[#7c1825] rounded-full items-center justify-center p-1">
                <div className="w-full aspect-square border-4 border-[#7c1825] rounded-full border-dashed"></div>
              </div>

              <div className="hidden absolute md:flex w-5/12 items-center justify-center">

                <p className="font-hon w-fit h-fit text-[8rem] md:text-[16rem] font-bold text-[#ffcea7]">Sparkle</p>

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

      <div className="flex flex-col gap-5">

        <div className="flex flex-col h-fit w-full items-center gap-3 bg-[#7c1825] rounded-b-3xl shadow-xl md:rounded-none md:shadow-none">

          <div className="flex flex-col-reverse md:flex-row w-full h-fit items-center justify-around">

            <div className="flex flex-col h-fit md:w-4/12 items-center md:border-r-8 md:border-[#ffcea7] md:pr-8">

              <Image
                src="./sparklerender.png"
                className="w-full h-auto"
                width="0"
                height="0"
                unoptimized
                alt=""
              />

            </div>

            <div className="flex flex-col w-full md:w-7/12 gap-3 p-5 md:p-0">

              <h1 className="font-bento text-4xl md:text-6xl text-[#ffcea7]">Appearance</h1>

              <div className="flex flex-col gap-5">

                <p className="text-white w-[#ffcea7] text-sm text-justify">
                  Sparkle is a petite young woman who has black hair that is tied into two high pigtails with a red tie.
                  Her hair reaches her hips and has pink tips, fringe middle bangs, and two locks in front, with the left
                  lock reaching her collarbone and the right lock reaches her shoulder. She has fluorescent pink eyes with a
                  light colored butterfly detail under her pupils, a small cherry blossom flower tattoo on her right collarbone,
                  and tiny black dots under each of her eyes. Additionally, a white-and-red Kitsune mask is at an angle on the
                  top of her head, which has a pink flower gem on its forehead. Below it, a bell is tied into her hair, with another
                  bell hanging off a black neck piece.
                </p>

                <p className="text-white w-[#ffcea7] text-sm text-justify">
                  Sparkle wears a sleeveless and backless short red kimono with crossing black spaghetti straps. Cherry blossom
                  flowers and a grey trim decorate the kimono along with a black obi belt overlaid with a small golden rope, which
                  is tied into a bow. Attached to it is a white spherical ornament with a koi fish inside, with there being a golden
                  tassel attached under it. On the back of her kimono is a large golden rope bow from the back, under which is a black
                  large tied bow. She also wears detached short red sleeves with hanging fabric that reaches her knees, along with a
                  cherry blossom flower ornament and a tassel hanging from it. Two light salmon colored fabrics hang from the back of
                  her kimono, reaching her calves, resembling caudal tails. She has a black glove on her left hand, while her right
                  hand is adorned with red ropes with a small bell attached to it. On her feet, she wears black sandals with thin red
                  ankle straps, with small flowers embellishing each and a bell hanging off the straps of the left sandal. Additionally,
                  red nail polish adorns her fingers and toes.
                </p>

              </div>

            </div>

          </div>

        </div>

        <motion.div className="flex flex-col h-fit w-full items-center gap-3 p-5"
          whileInView={{
            y: [100, 0],
            opacity: [0, 100],
            height: [0, 'auto']
          }}
          transition={{
            duration: 1
          }}
          viewport={{
            once: true
          }}
        >

          <h1 className="font-bento text-4xl md:text-6xl text-black">The Sparkling Splendor</h1>

          <div className="flex flex-col w-full md:w-8/12 h-fit items-center">

            <div className="relative flex flex-col h-fit w-full md:w-10/12 items-center"
              onClick={handleImageClick}
            >

              <Image
                src="./sparklebanner.jpg"
                className="w-full h-auto rounded-xl"
                width="0"
                height="0"
                unoptimized
                alt=""
              />

              {
                !isSparklingSplendor && (

                  <div className="absolute inset-0 flex items-center justify-center z-0"
                    onClick={handleImageClick}
                  >
                    <div className="h-full w-full bg-black opacity-50 rounded-xl"></div>
                    <div className="font-bento text-4xl md:text-8xl absolute inset-0 flex flex-col w-full h-full items-center justify-center">Character Story: Part 1</div>
                  </div>

                )
              }

            </div>

            <AnimatePresence>

              {
                isSparklingSplendor && (
                  <motion.div className="flex w-full flex-col p-5 rounded-xl"
                    initial={{
                      opacity: 0
                    }}
                    animate={{
                      opacity: 1
                    }}
                    exit={{
                      opacity: 0
                    }}
                    transition={{
                      ease: easeInOut,
                      duration: 0.3
                    }}
                  >

                    <div className="flex flex-col w-full h-fit gap-5">

                      <p className="w-full text-black text-sm font-medium text-justify">
                        The girl, an abandoned orphan, lived without knowledge of her origins or destination until she encountered a passing troupe.
                        From a distance, she watched a black-haired lady with a double ponytail, gracefully moving across the stage like a fish.
                        Despite donning various masks, they did not hinder her laughs and cries during her performance, captivating the audience
                        even from afar. The fish leaped in front of her, then dove back down, creating ripples in the surface of the water.
                      </p>

                      <p className="w-full text-black text-sm font-medium text-justify">
                        Gradually, she realized she was watching the performance from beneath the stage.
                      </p>

                      <p className="w-full text-black text-sm font-medium text-justify">
                        Intrigued, she continued to watch the performances for countless days, but she remained an audience member,
                        never stepping into the spotlight. After one of the shows ended, she went backstage, where the black-haired
                        lady handed her a mask.
                      </p>

                      <p className="w-full text-black text-sm font-medium text-justify">
                        <i>&quot;Can I perform, too?&quot;</i>
                      </p>

                      <p className="w-full text-black text-sm font-medium text-justify">
                        <i>&quot;Why not? If others believe you are &apos;Sparkle,&apos; then you are. Go, it&apos;s time for your show.&quot;</i>
                      </p>

                      <p className="w-full text-black text-sm font-medium text-justify">
                        As the curtain, serving as the fourth wall, was drawn, the stage remained dimly lit, revealing an unsettling black void.
                        Though wearing a mask, she knew the audience could see and hear her. She kept recalling Sparkle&apos;s performance,
                        imitating her movements, voice, and demeanor.
                      </p>

                      <p className="w-full text-black text-sm font-medium text-justify">
                        <i>&quot;You&apos;ve done very well for your first time.&quot;</i>
                      </p>

                      <p className="w-full text-black text-sm font-medium text-justify">
                        <i>&quot;But my imitation... Was not perfect.&quot;</i>
                      </p>



                    </div>

                  </motion.div>
                )
              }

            </AnimatePresence>

          </div>

        </motion.div>

      </div>

      <div className="h-16 border-2 border-amber-300">

      </div>

    </main>
  );
}
