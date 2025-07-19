import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { BiSolidCoffeeTogo } from "react-icons/bi";

export default function FooterSection() {
    const sectionVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.2
            }
        },
    };

    const childVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    return (
        <footer className="bg-[#1F1F23] text-gray-100 py-12 border-t border-[#2A2A2E]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12"
                    initial="hidden"
                    animate="visible"
                    variants={sectionVariants}
                >
                    {/* Logo and Contact */}
                    <motion.div variants={childVariants}>
                        <div className="flex items-center mb-4">
                            <BiSolidCoffeeTogo className="text-3xl sm:text-4xl text-amber-500 mr-2" />
                            <span className="text-xl sm:text-2xl font-serif font-bold text-amber-500">Aroma Cafe</span>
                        </div>
                        <p className="text-sm sm:text-base text-gray-400 mb-4">
                            Enjoy the finest coffee and cozy vibes at Aroma Cafe.
                        </p>
                        <p className="text-sm sm:text-base text-gray-400">
                            Phone: +62 812 3456 7890<br />
                            Email: info@aromacafe.com
                        </p>
                    </motion.div>

                    {/* Social Media */}
                    <motion.div variants={childVariants}>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-100 mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-500 transition-colors duration-300">
                                <FaFacebookF className="w-5 h-5" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-500 transition-colors duration-300">
                                <FaInstagram className="w-5 h-5" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-500 transition-colors duration-300">
                                <FaTwitter className="w-5 h-5" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={childVariants}>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-100 mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#home" className="text-sm sm:text-base text-gray-400 hover:text-amber-500 transition-colors duration-300">Home</a></li>
                            <li><a href="#menu" className="text-sm sm:text-base text-gray-400 hover:text-amber-500 transition-colors duration-300">Menu</a></li>
                            <li><a href="#gallery" className="text-sm sm:text-base text-gray-400 hover:text-amber-500 transition-colors duration-300">Gallery</a></li>
                            <li><a href="#contact" className="text-sm sm:text-base text-gray-400 hover:text-amber-500 transition-colors duration-300">Contact</a></li>
                        </ul>
                    </motion.div>

                    {/* Map */}
                    <motion.div variants={childVariants}>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-100 mb-4">Visit Us</h3>
                        <div className="relative w-full h-48 sm:h-56 rounded-lg overflow-hidden shadow-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.909123614104!2d106.827163!3d-6.175392999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e36654f109e0!2sStarbucks!5e0!3m2!1sen!2sid!4v1623456789!5m2!1sen!2sid"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Aroma Cafe Location"
                            ></iframe>
                            <div className="absolute inset-0 bg-red-500/20 pointer-events-none"></div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Footer Bottom */}
                <motion.div
                    className="mt-8 text-center text-sm sm:text-base text-gray-400"
                    variants={childVariants}
                >
                    <p>&copy; {new Date().getFullYear()} Aroma Cafe. All rights reserved.</p>
                </motion.div>
            </div>
        </footer>
    );
}