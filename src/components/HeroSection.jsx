import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import ImgCafe from '@/assets/Cozy-Cafe.webp';
import { Link as ScrollLink, animateScroll } from "react-scroll";

export default function HeroSection() {
    const [showMotion, setShowMotion] = useState(true);
    useEffect(() => {
        // Only animate on first mount
        setShowMotion(true);
        return () => setShowMotion(false);
    }, []);
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <section id="hero" className="bg-gradient-to-br from-[#1F1F23] to-[#2A2A2E] flex items-center justify-center overflow-hidden py-36 md:py-52 px-8 md:px-0 relative">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
                <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-amber-500 rounded-full blur-xl" />
                <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-amber-500 rounded-full blur-xl" />
            </div>

            <div className="relative flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto gap-12 md:gap-20">
                {showMotion ? (
                    <motion.div
                        className="flex flex-col items-start text-start w-full md:w-1/2"
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-100 leading-tight">
                            Savor the Moment
                            <br />
                            <span className="text-amber-500">at Aroma Cafe</span>
                        </h1>
                        <p className="mt-4 text-lg sm:text-xl text-gray-400 max-w-md">
                            Discover handcrafted coffee, artisanal pastries, and a warm ambiance that feels like home.
                        </p>
                        <ScrollLink 
                            key='Explore Our Menu'
                            to={`menu`}
                            spy={true}
                            smooth={true}
                            offset={-64}
                            duration={600}>
                            <button className="cursor-pointer mt-6 inline-flex items-center justify-center px-6 py-3 bg-amber-500 text-gray-900 rounded-full font-medium hover:bg-amber-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
                                Explore Our Menu
                            </button>
                        </ScrollLink>
                    </motion.div>
                ) : (
                    <div className="flex flex-col items-start text-start w-full md:w-1/2">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-100 leading-tight">
                            Savor the Moment
                            <br />
                            <span className="text-amber-500">at Aroma Cafe</span>
                        </h1>
                        <p className="mt-4 text-lg sm:text-xl text-gray-400 max-w-md">
                            Discover handcrafted coffee, artisanal pastries, and a warm ambiance that feels like home.
                        </p>
                        <ScrollLink 
                            key='Explore Our Menu'
                            to={`menu`}
                            spy={true}
                            smooth={true}
                            offset={-64}
                            duration={600}>
                            <button className="cursor-pointer mt-6 inline-flex items-center justify-center px-6 py-3 bg-amber-500 text-gray-900 rounded-full font-medium hover:bg-amber-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
                                Explore Our Menu
                            </button>
                        </ScrollLink>
                    </div>
                )}

                {showMotion ? (
                    <motion.div
                        className="relative w-full md:w-1/2 max-w-md mx-auto flex justify-center items-center"
                        initial="hidden"
                        animate="visible"
                        variants={imageVariants}
                    >
                        <Image
                            src={ImgCafe}
                            alt="Cozy cafe scene"
                            width={500}
                            height={500}
                            className="rounded-2xl object-cover shadow-lg"
                            priority
                        />
                        <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-amber-500 rounded-full opacity-20" />
                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-amber-500 rounded-full opacity-20" />
                    </motion.div>
                ) : (
                    <div className="relative w-full md:w-1/2 max-w-md mx-auto flex justify-center items-center">
                        <Image
                            src={ImgCafe}
                            alt="Cozy cafe scene"
                            width={500}
                            height={500}
                            className="rounded-2xl object-cover shadow-lg"
                            priority
                        />
                        <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-amber-500 rounded-full opacity-20" />
                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-amber-500 rounded-full opacity-20" />
                    </div>
                )}
            </div>

            {/* Subtle Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2" aria-hidden="true">
                <svg
                    className="w-6 h-6 text-gray-400 animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </svg>
            </div>
        </section>
    );
}