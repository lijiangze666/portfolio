"use client";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "@/components/ui/MagicButton";
import {FaLocationArrow} from "react-icons/fa";
import {ThreeCard} from "@/components/ThreeCard";
import {useEffect, useRef, useState} from "react";

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);
    const heroRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(false);
                    // Use setTimeout to trigger a re-render after a short delay
                    setTimeout(() => setIsVisible(true), 100);
                }
            },
            {
                threshold: 0.1 // Trigger when 10% of the hero is visible
            }
        );

        if (heroRef.current) {
            observer.observe(heroRef.current);
        }

        return () => {
            if (heroRef.current) {
                observer.unobserve(heroRef.current);
            }
        };
    }, []);
    return (
        <div ref={heroRef} className="pb-20 pt-36">
            {isVisible && (
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
            )}
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
                        一名Web开发工程师
                    </p>
                    <TextGenerateEffect
                        words="Hi! I&apos;m Li Jiang Ze, a Web Developer👨🏻‍💻 based in Tianjin, China📍."
                        className="text-center text-[40px] md:text-5xl lg:text-6xl"
                    />
                    <ThreeCard/>


                    <a href="#projects">
                        <MagicButton
                            title="我的作品"
                            icon={<FaLocationArrow/>}
                            position="right"
                        />
                    </a>
                </div>
            </div>


        </div>
    );
};

export default Hero;
