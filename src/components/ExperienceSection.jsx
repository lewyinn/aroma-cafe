import { motion } from "framer-motion";
import Image from "next/image";
import ImgCafe from '@/assets/Cozy-Cafe.webp';

export default function ExperienceSection() {
    const sectionVariants = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.2 } },
    };
    const childVariants = {
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="flex flex-col md:flex-row items-center gap-8 sm:gap-12 relative"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={sectionVariants}
                >
                    {/* Enhanced Image Section */}
                    <motion.div
                        className="w-full md:w-1/2 relative overflow-hidden group"
                        variants={childVariants}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-[#2A2A2E]/30 rounded-lg transform -rotate-6 group-hover:rotate-0 transition-transform duration-500"></div>
                        <Image
                            src={ImgCafe}
                            alt="Cozy cafe scene"
                            width={500}
                            height={500}
                            className="w-full h-auto object-cover rounded-lg shadow-lg transform rotate-6 group-hover:rotate-0 transition-transform duration-500"
                        />
                        <div className="absolute bottom-4 right-4 w-12 h-12 bg-amber-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        className="w-full md:w-1/2 text-center md:text-left z-10"
                        variants={childVariants}
                    >
                        {/* Verified Badge */}
                        <motion.div
                            className="bg-white/10 backdrop-blur-md rounded-lg p-3 inline-block mb-4 shadow-md"
                            variants={childVariants}
                        >
                            <div className="flex items-center gap-2">
                                <span className="text-amber-500">★</span>
                                <span className="text-gray-400 text-sm">100% Verified</span>
                            </div>
                        </motion.div>

                        {/* Main Text */}
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-100 font-serif mb-4">
                            Our <span className="text-amber-500">Experience</span>
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-400 mb-6 max-w-md md:max-w-none mx-auto md:mx-0">
                            Pengalaman Terbaik, Layanan Terpercaya ☕
                            <br />
                            Sejak awal berbagi, kami selalu mengutamakan kenikmatan Anda dengan harga terjangkau dan pengalaman seru yang tak terlupakan!
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center md:text-left">
                            <motion.div variants={childVariants}>
                                <p className="text-2xl sm:text-3xl font-bold text-amber-500">5</p>
                                <p className="text-gray-400 text-sm sm:text-base">Years of Experience</p>
                            </motion.div>
                            <motion.div variants={childVariants}>
                                <p className="text-2xl sm:text-3xl font-bold text-amber-500">10K+</p>
                                <p className="text-gray-400 text-sm sm:text-base">Cups Served</p>
                            </motion.div>
                            <motion.div variants={childVariants}>
                                <p className="text-2xl sm:text-3xl font-bold text-amber-500">5K+</p>
                                <p className="text-gray-400 text-sm sm:text-base">Happy Customers</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}