"use server";
import React from 'react';
import AnimatedSection from "@/components/ui/AnimatedSection";
import {LayoutGridDemo} from "@/components/LayoutGridDemo";

const Photography = () => {
    return (
        <AnimatedSection id="photography">
            <div className="py-20 w-full h-[4500px]  ">
                <h1 className="heading">
                    My <span className="text-purple">photography works</span>
                </h1>
                <LayoutGridDemo/>
            </div>
        </AnimatedSection>
    );
};

export default Photography;
