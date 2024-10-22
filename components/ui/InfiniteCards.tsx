"use client";

import {cn} from "@/lib/utils";
import React, {useEffect, useState} from "react";
import Link from 'next/link';

export const InfiniteMovingCards = ({
                                        items,
                                        direction = "left",
                                        speed = "slow",
                                        pauseOnHover = true,
                                        className,
                                    }: {
    items: {
        link: string;
        img: string;
        quote: string;
        name: string;
        title: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    useEffect(() => {
        addAnimation();
    }, []);
    const [start, setStart] = useState(false);

    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }

    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
    };
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "200s");
            }
        }
    };
    return (
        <div
            ref={containerRef}
            className={cn(
                // max-w-7xl to w-screen
                "scroller relative z-20 w-screen overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    // change gap-16
                    " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
                    start && "animate-scroll ",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item, idx) => (
                    <li
                        //   change md:w-[450px] to md:w-[60vw] , px-8 py-6 to p-16, border-slate-700 to border-slate-800
                        className="w-[90vw] max-w-full relative rounded-2xl border border-b-0
             flex-shrink-0 border-slate-800 p-5 md:p-5 md:w-[30vw]"
                        style={{
                            //   background:
                            //     "linear-gradient(180deg, var(--slate-800), var(--slate-900)", //remove this one
                            //   add these two
                            //   you can generate the color from here https://cssgradient.io/
                            background: "rgb(4,7,29)",
                            backgroundColor:
                                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                        }}
                        // change to idx cuz we have the same name
                        key={idx}
                    >
                        <Link href={item.link} target="_blank"
                              className="block p-5 md:p-5 cursor-pointer transition-all duration-300 hover:opacity-90">
                            <blockquote>
                                <div
                                    aria-hidden="true"
                                    className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                                ></div>

                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex flex-col">
                                    <span className="text-3xl font-bold leading-[1.6] text-white">
                                        {item.name}
                                    </span>
                                        <span className="text-sm leading-[1.6] text-gray-300 font-normal">
                                        {item.title}
                                    </span>
                                    </div>
                                    <div className="w-12 h-12">
                                        <img src={item.img} alt="logo"/>
                                    </div>
                                </div>
                                <span
                                    className="relative z-20 block text-sm md:text-lg leading-[1.6] text-white font-normal">
                            {item.quote}
                            </span>
                            </blockquote>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};