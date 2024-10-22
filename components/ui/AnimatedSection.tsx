"use client"

import React, { useRef, useEffect, useState } from 'react'
import { motion, useAnimation, Variants } from 'framer-motion'

interface SectionProps {
    children: React.ReactNode
    className?: string
    id?:string
}

const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: "easeOut" }
    }
}

const AnimatedSection: React.FC<SectionProps> = ({ children, className = "", id="" }) => {
    const controls = useAnimation()
    const sectionRef = useRef<HTMLElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    controls.start("visible")
                } else {
                    setIsVisible(false)
                    controls.start("hidden")
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of the section is visible
                rootMargin: "0px 0px -10% 0px" // Slightly reduce the effective viewport
            }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current)
            }
        }
    }, [controls])

    return (
        <motion.section
            ref={sectionRef}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={sectionVariants}
            className={`${className}`}
            id={id}
        >
            {children}
        </motion.section>
    )
}
export default AnimatedSection;
