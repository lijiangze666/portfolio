"use client";

import React from "react";

import {testimonials} from "@/data";
import {InfiniteMovingCards} from "./ui/InfiniteCards";
import AnimatedSection from "@/components/ui/AnimatedSection";

const Clients = () => {
    return (
        <AnimatedSection id="about" className="py-20">
            <h1 className="heading">
                <span className="text-purple"> 关于我</span>
            </h1>

            <div className="flex flex-col items-center max-lg:mt-10">
                <div
                    className="h-[50vh] md:h-[40rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
                >
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        </AnimatedSection>
    );
};

export default Clients;
