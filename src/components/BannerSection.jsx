import { Coffee } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BannerSection() {

    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="relative bg-[#2A2A2E]/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 shadow-xl border border-[#3A3A3E] overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8"
                >
                    {/* Decorative Background Elements */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute top-1/4 left-1/5 w-24 sm:w-32 h-24 sm:h-32 bg-amber-500 rounded-full blur-2xl" />
                        <div className="absolute bottom-1/4 right-1/5 w-20 sm:w-24 h-20 sm:h-24 bg-amber-500 rounded-full blur-2xl" />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col items-start text-start w-full md:w-2/3 z-10">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-100 font-serif mb-3 sm:mb-4">
                            Unlock <span className="text-amber-500">Coffee Club</span> Perks
                        </h2>
                        <p className="text-base sm:text-lg text-gray-400 mb-4 sm:mb-6 max-w-md">
                            Join our Coffee Club for exclusive discounts, free drinks, and early access to new flavors.
                        </p>
                        <div>
                            <Link href="/coffee-club">
                                <button className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 bg-amber-500 text-gray-900 rounded-full font-medium text-sm sm:text-base hover:bg-amber-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 active:scale-95">
                                    Join Now
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Decorative Icon */}
                    <div
                        className="w-16 h-16 sm:w-20 sm:h-20 bg-[#2A2A2E]/70 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <Coffee className="w-10 h-10 sm:w-12 sm:h-12 text-amber-500" strokeWidth={2} />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}