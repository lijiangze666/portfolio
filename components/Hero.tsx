
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "@/components/ui/MagicButton";
import {FaLocationArrow} from "react-icons/fa";
import {ThreeCard} from "@/components/ThreeCard";

const Hero = () => {
    return (
        <div className="pb-20 pt-36">
            <div>
                <Spotlight
                    className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                    fill="white"
                />
                <Spotlight
                    className="h-[80vh] w-[50vw] top-10 left-full"
                    fill="purple"
                />
                <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue"/>
            </div>
            <div
                className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
            >
                <div
                    className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
                />
            </div>

            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                        A Development Engineer
                    </p>
                    <TextGenerateEffect
                        words="Hi! I&apos;m Li Jiang Ze, a Web Developer👨🏻‍💻 based in Tianjin, China📍."
                        className="text-center text-[40px] md:text-5xl lg:text-6xl"
                    />
                    <ThreeCard/>


                    <a href="#projects">
                        <MagicButton
                            title="Show my work"
                            icon={<FaLocationArrow/>}
                            position="right"
                        />
                    </a>
                </div>
                {/*<svg xmlns="http://www.w3.org/2000/svg" version="1.1"*/}
                {/*     className="pointer-events-none absolute inset-0 h-full w-full -z-10 mt-10">*/}
                {/*    <circle className="stroke-black/20 stroke-1 dark:stroke-white/20" cx="50%" cy="50%" r="310"*/}
                {/*            fill="none"*/}
                {/*            stroke-dasharray="4 4"></circle>*/}
                {/*    <circle className="stroke-black/10 stroke-1 dark:stroke-white/10" cx="50%" cy="50%" r="360"*/}
                {/*            fill="none" stroke-dasharray="4 4"></circle>*/}

                {/*</svg>*/}

            </div>


        </div>
    );
};

export default Hero;
