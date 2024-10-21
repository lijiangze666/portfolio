"use client";

import Image from "next/image";
import React, {useState} from "react";
import {CardBody, CardContainer, CardItem} from "@/components/ui/3d-card";
import Link from "next/link";
import {FlipWords} from "@/components/ui/FilpWords";
import { rolesData } from '@/data/index';

export function ThreeCard() {
    const names = ["Li Jiang Ze", "李姜泽"];
    const customStyles = {
        "李姜泽": {
            fontFamily: "'STKaiti', '华文楷体', serif", // 使用华文楷体
            fontSize: '1.1em',
        }
    };
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    return (
        <CardContainer className="inter-var">
            <CardBody
                className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.1] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-3xl p-6 border">
                <CardItem
                    translateZ="20"
                    className="text-xl font-bold text-neutral-600 dark:text-white text-left w-full"
                >
                    My name is:
                </CardItem>
                <CardItem
                    as="div"
                    translateZ="100"
                    className="w-full text-5xl font-bold mt-8 tracking-wider text-center"
                >
                    <FlipWords
                        words={names}
                        duration={2000}
                        className="text-purple dark:text-purple inline-block"
                        customStyles={customStyles}
                    />
                </CardItem>
                <CardItem
                    translateZ="100"
                    className="w-full border-t-2 border-white dark:border-white my-6">
                    <div>
                    </div>
                </CardItem>
                <div className="relative flex flex-col justify-between items-center mt-4">
                    <CardItem
                        translateZ="20"
                        className="text-2xl font-bold text-neutral-600 dark:text-white text-left w-full"
                    >
                        I&rsquo;m a:
                    </CardItem>
                    {rolesData.map((role, index) => (
                        <CardItem
                            key={index}
                            translateZ="20"
                            className="flex px-4 py-2 ml-auto text-xl w-full justify-end"
                        >
                            <Link
                                href={role.href}
                                className={`transition-all duration-300 ease-in-out transform ${
                                    hoveredIndex === index
                                        ? 'text-white dark:text-white scale-110'
                                        : hoveredIndex !== null
                                            ? 'text-gray-500 dark:text-gray-500'
                                            : 'text-white dark:text-white'
                                }`}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {role.name}
                            </Link>
                        </CardItem>
                    ))}
                    <CardItem translateZ="50"
                              className="absolute bottom-0 left-0 px-4 dark:text-white">
                        <Image src="/avatar-modified.jpg" alt="avatar" width={100} height={100}/>
                    </CardItem>
                </div>

            </CardBody>
        </CardContainer>
    );
}
