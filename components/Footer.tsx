"use client";

import {socialMedia} from "@/data";
import { Highlight} from "@/components/ui/heroHighLight";
import {useEffect, useRef, useState} from "react";
import {AnimatedModal} from "@/components/AnimatedModal";
import Image from "next/image";

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);
    const footerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            }
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => {
            if (footerRef.current) {
                observer.unobserve(footerRef.current);
            }
        };
    }, []);
    return (
        <footer ref={footerRef} className="w-full pt-20 pb-10" id="contact">
            {/* background grid */}
            <div className="w-full absolute left-0 -bottom-10 min-h-96">
                <Image
                    src="/footer-grid.svg"
                    alt="grid"
                    className="w-full h-full opacity-50 "
                    height={30}
                    width={30}
                />
            </div>

            <div className="flex flex-col">
                <div className=" flex items-start justify-start">
                    <p className="text-3xl md:text-3xl text-left  w-2/3">
                        I&rsquo;m collaborating with individuals from diverse fields, which is precisely why I created
                        this website.{" "}
                        {isVisible && (
                            <Highlight className="text-black dark:text-white">
                                Feel free to contact me.
                            </Highlight>
                        )}
                        {!isVisible && (
                            <span className="text-black dark:text-white">
                                Feel free to contact me.
                            </span>
                        )}
                    </p>
                </div>

                <div  className="flex items-center justify-center">
                    <AnimatedModal/>
                </div>
            </div>
            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-sm md:font-normal font-light">
                    Lee jz & 李姜泽
                </p>

                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map((info) => (
                        <div
                            key={info.id}
                            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                        >
                            <a href={info.link} target="_blank">
                                <Image src={info.img} alt="icon" width={20} height={20} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
