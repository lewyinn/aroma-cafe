import Image from "next/image";
import { motion } from "framer-motion";
import Cloud from "@/assets/banner/cloud.png"; // Ganti sesuai file cloud kamu
import Wave from "@/assets/banner/wave.svg";   // Ganti sesuai file wave kamu
import { FaWhatsapp } from "react-icons/fa6";

export default function LastBannerSection() {
    return (
        <section className="py-10 flex justify-center items-center">
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="w-full max-w-7xl px-2 sm:px-4"
            >
                <div className="bg-[#014D52] rounded-2xl my-8 mx-auto relative overflow-hidden shadow-lg w-full">
                    <div className="mx-auto py-10 px-4 sm:px-6 text-center relative z-10">
                        <p className="text-xs sm:text-sm uppercase tracking-widest text-gray-300 mb-2 sm:mb-3">
                            Siap menikmati momen santai?
                        </p>
                        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                            Pesan Sekarang & Nikmati Diskon Spesial!
                        </h2>
                        <a
                            href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20reservasi%20di%20Cafe"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full text-base sm:text-lg font-semibold transition active:scale-95 focus:outline-none focus:ring-2 focus:ring-amber-400"
                            style={{ minWidth: 180, justifyContent: 'center', touchAction: 'manipulation' }}
                            aria-label="Pesan via WhatsApp"
                        >
                            <FaWhatsapp size={24} className="" />
                            <span className="whitespace-nowrap">Pesan via WhatsApp</span>
                        </a>
                    </div>

                    {/* Decorative Waves */}
                    <Image
                        src={Wave}
                        alt="Wave left"
                        className="absolute left-2 bottom-2 opacity-30 w-24 sm:w-32 md:w-40"
                        priority
                    />
                    <Image
                        src={Wave}
                        alt="Wave right"
                        className="absolute right-2 top-2 opacity-30 w-24 sm:w-32 md:w-40 transform rotate-180"
                        priority
                    />

                    {/* Decorative Clouds */}
                    <Image
                        src={Cloud}
                        alt="Cloud left"
                        className="absolute left-4 top-4 opacity-80 w-16 sm:w-24 md:w-32"
                        priority
                    />
                    <Image
                        src={Cloud}
                        alt="Cloud right"
                        className="absolute right-4 bottom-4 opacity-80 w-16 sm:w-24 md:w-32"
                        priority
                    />
                </div>
            </motion.div>
        </section>
    );
}
