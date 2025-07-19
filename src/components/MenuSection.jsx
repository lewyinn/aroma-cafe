import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Espresso from '@/assets/menu/coffe.webp';
import Croisant from '@/assets/menu/croisant.jpg';
import Cappucino from '@/assets/menu/Cappuccino.webp';
import MatcaLatte from '@/assets/menu/Matcha-Latte.jpg';
import AvocadoToast from '@/assets/menu/avocado-toast.jpg';
import BlueberryMuffin from '@/assets/menu/blueberry-muffin.jpg';

export default function MenuSection() {
    const [activeTab, setActiveTab] = useState("drinks");

    const menuItems = {
        drinks: [
            {
                name: "Espresso",
                description: "Rich, bold coffee with a smooth crema.",
                price: "$3.50",
                image: Espresso,
            },
            {
                name: "Cappuccino",
                description: "Espresso with steamed milk and foam.",
                price: "$4.00",
                image: Cappucino,
            },
            {
                name: "Matcha Latte",
                description: "Vibrant green tea with steamed milk.",
                price: "$5.00",
                image: MatcaLatte,
            },
        ],
        food: [
            {
                name: "Croissant",
                description: "Buttery, flaky pastry baked fresh daily.",
                price: "$3.00",
                image: Croisant,
            },
            {
                name: "Avocado Toast",
                description: "Smashed avocado on sourdough with herbs.",
                price: "$6.50",
                image: AvocadoToast,
            },
            {
                name: "Blueberry Muffin",
                description: "Moist muffin bursting with fresh blueberries.",
                price: "$3.50",
                image: BlueberryMuffin,
            },
        ],
    };

    const tabVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        },
    };

    return (
        <section id="menu" className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-100 font-serif mb-4">
                        Our <span className="text-amber-500">Menu</span>
                    </h2>
                    <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
                        Explore our handcrafted beverages and freshly baked goods, made with love.
                    </p>
                    <div className="w-24 h-1 bg-amber-500 mx-auto mt-6 rounded-full"></div>
                </motion.div>

                {/* Tabs */}
                <motion.div
                    className="flex justify-center gap-4 mb-8"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}>
                    <button
                        onClick={() => setActiveTab("drinks")}
                        className={`px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 ${activeTab === "drinks"
                                ? "bg-amber-500 text-gray-900"
                                : "bg-[#2A2A2E] text-gray-100 hover:bg-amber-500 hover:text-gray-900"
                            }`}>
                        Drinks
                    </button>
                    <button
                        onClick={() => setActiveTab("food")}
                        className={`px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 ${activeTab === "food"
                                ? "bg-amber-500 text-gray-900"
                                : "bg-[#2A2A2E] text-gray-100 hover:bg-amber-500 hover:text-gray-900"
                            }`}>
                        Food
                    </button>
                </motion.div>

                {/* Menu Cards */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}>
                    {menuItems[activeTab].map((item, index) => (
                        <motion.div
                            key={index}
                            className="cursor-pointer relative bg-[#2A2A2E]/50 backdrop-blur-lg rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-[#3A3A3E]"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}>
                            <div className="absolute -top-3 -right-3 w-6 h-6 bg-amber-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                            <Image
                                src={item.image}
                                alt={item.name}
                                width={300}
                                height={300}
                                className="w-full h-40 sm:h-48 object-cover rounded-xl mb-4"
                            />
                            <h3 className="text-lg sm:text-xl font-bold text-gray-100 font-serif mb-2">{item.name}</h3>
                            <p className="text-sm sm:text-base text-gray-400 mb-3">{item.description}</p>
                            <p className="text-amber-500 font-medium text-base sm:text-lg">{item.price}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}