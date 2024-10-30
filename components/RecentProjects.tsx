"use client";
import React from 'react';
import {projects} from "@/data/index";
import {FaLocationArrow} from "react-icons/fa";
import {PinContainer} from "@/components/ui/Pin";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Image from "next/image";

const RecentProjects = () => {
    return (
        <AnimatedSection id="projects">
            <div className="py-20">
                <h1 className="heading">
                    一小部分{" "}
                    <span className="text-purple">最近的项目</span>

                </h1>
                <div className="flex flex-wrap items-center justify-center p-4 mt-10 gap-16" id="haha">
                    {projects.map((item) => (
                        <div
                            className="lg:min-h-[32.5rem] lg:min-w-[592px] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] "
                            key={item.id}
                        >
                            <PinContainer
                                title={item.title}
                                href={item.link}
                            >
                                <div
                                    className="relative flex items-center justify-center  mb-10">
                                    <Image
                                        src={item.img}
                                        alt="cover"
                                        className="z-10  bottom-0 "
                                        width={500}
                                        height={500}
                                    />
                                </div>

                                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                                    {item.title}
                                </h1>

                                <p
                                    className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                                    style={{
                                        color: "#BEC1DD",
                                        margin: "1vh 0",
                                    }}
                                >
                                    {item.des}
                                </p>

                                <div className="flex items-center justify-between mt-7 mb-3">
                                    <div className="flex items-center">
                                        {item.iconLists.map((icon, index) => (
                                            <div
                                                key={index}
                                                className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                                style={{
                                                    transform: `translateX(-${5 * index + 2}px)`,
                                                }}
                                            >
                                                <Image src={icon} alt="icon5" className="p-2" width={30} height={30}/>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex justify-center items-center">
                                        <Link href={item.link} target="_blank"
                                              className="flex lg:text-xl md:text-xs text-sm text-purple">
                                            访问
                                        </Link>
                                        <FaLocationArrow className="ms-3" color="#CBACF9"/>
                                    </div>
                                </div>
                            </PinContainer>
                        </div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
};

export default RecentProjects;
