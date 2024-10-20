"use client";

import Image from "next/image";
import React from "react";
import {CardBody, CardContainer, CardItem} from "@/components/ui/3d-card";
import Link from "next/link";
import {FlipWords} from "@/components/ui/FilpWords";
import { Ma_Shan_Zheng } from "next/font/google";
const maShanZheng = Ma_Shan_Zheng({weight:"400",subsets:['latin']})

export function ThreeCard() {
    const names = ["Li Jiang Ze", "李姜泽"];
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
                    />
                </CardItem>
                <CardItem
                    translateZ="100"
                    className="w-full border-t-2 border-white dark:border-white my-6">
                    <div>
                    </div>
                </CardItem>
                <div className="flex justify-between items-center mt-4">
                    <CardItem
                        translateZ="20"
                        className="text-xl font-bold text-neutral-600 dark:text-white text-left w-full"
                    >
                        I'm a:
                    </CardItem>
                </div>

            </CardBody>
        </CardContainer>
    );
}
