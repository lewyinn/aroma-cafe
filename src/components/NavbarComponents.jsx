import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { BiDonateHeart, BiSolidCoffeeTogo } from "react-icons/bi";
import { FaDiscord, FaFacebookF } from "react-icons/fa6";
import { FiX } from "react-icons/fi";
import { HiMenuAlt4 } from "react-icons/hi";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

const navLinks = [
    { to: "hero", text: "Home" },
    { to: "whychoose", text: "Why Choose Us" },
    { to: "menu", text: "Menu" },
    { to: "gallery", text: "Gallery" },
];

const socialButtons = [
    { icon: FaFacebookF, label: "Facebook" },
    { icon: FaDiscord, label: "Discord" },
];

const menuVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
};

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="fixed inset-x-0 top-0 z-50 h-16 bg-[#1F1F23]/80 backdrop-blur-md border-b-2 border-[#2A2A2E]">
            <nav className="mx-auto flex h-full max-w-6xl items-center justify-between px-4 lg:px-0">
                <Link
                    href="/"
                    className="font-fredoka select-none flex justify-center items-center cursor-pointer">
                    <BiSolidCoffeeTogo className="text-4xl inline-block mr-2 text-amber-500" />
                    <span className="text-2xl text-amber-500">
                        AROMA CAFE
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <ScrollLink
                            key={link.text}
                            to={link.to}
                            spy={true}
                            smooth={true}
                            offset={-64}
                            duration={600}
                            className="text-lg font-semibold text-gray-100 hover:text-amber-500 transition-colors cursor-pointer"
                            activeClass="text-amber-500">
                            {link.text}
                        </ScrollLink>
                    ))}
                </div>

                <div className="flex items-center gap-3">
                    {/* Desktop Buttons */}
                    <div className="hidden md:flex items-center gap-3">
                        <button className="flex items-center justify-center rounded-md bg-[#2A2A2E] px-4 py-2 text-sm font-medium text-gray-100 hover:bg-amber-500 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
                            <BiDonateHeart className="w-5 h-5 mr-2" />
                            Join Member
                        </button>
                        {socialButtons.map(({ icon: Icon, label }) => (
                            <button
                                key={label}
                                className="flex items-center justify-center rounded-md bg-[#2A2A2E] w-10 h-10 text-gray-100 hover:bg-amber-500 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
                                <Icon className="w-5 h-5" />
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        onClick={toggleMenu}
                        className="rounded-md p-2 bg-amber-500 hover:bg-amber-600 focus:outline-none md:hidden"
                        whileTap={{ scale: 0.95 }}>
                        <motion.div
                            animate={{ rotate: isMenuOpen ? 90 : 0 }}
                            transition={{ duration: 0.2 }}>
                            {isMenuOpen ? <FiX className="w-6 h-6 text-gray-900" /> : <HiMenuAlt4 className="w-6 h-6 text-gray-900" />}
                        </motion.div>
                    </motion.button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={menuVariants}
                            transition={{ duration: 0.2 }}
                            className="absolute inset-x-0 top-16 border-b-2 bg-[#1F1F23]/80 backdrop-blur-md shadow-lg md:hidden">
                            <div className="flex flex-col gap-4 px-4 py-4">
                                {navLinks.map((link) => (
                                    <ScrollLink
                                        key={link.text}
                                        to={link.to}
                                        spy={true}
                                        smooth={true}
                                        offset={-64}
                                        duration={600}
                                        className="text-lg font-semibold text-gray-100 hover:text-amber-500 transition-colors cursor-pointer"
                                        activeClass="text-amber-500"
                                        onClick={toggleMenu}
                                    >
                                        {link.text}
                                    </ScrollLink>
                                ))}
                                <button className="flex items-center justify-center rounded-md bg-[#2A2A2E] px-4 py-2 text-sm font-medium text-gray-100 hover:bg-amber-500 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 w-full">
                                    <BiDonateHeart className="w-5 h-5 mr-2" />
                                    Join Member
                                </button>
                                <div className="flex justify-center gap-3">
                                    {socialButtons.map(({ icon: Icon, label }) => (
                                        <button
                                            key={label}
                                            className="flex items-center justify-center rounded-md bg-[#2A2A2E] w-10 h-10 text-gray-100 hover:bg-amber-500 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
                                            <Icon className="w-5 h-5" />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}