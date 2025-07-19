import React from 'react'
import { motion } from 'framer-motion';
import { Coffee, Clock } from 'lucide-react';

const WhyChooseSection = () => {
    const features = [
        {
            icon: <Coffee className="h-8 w-8 text-gray-100" />,
            title: 'Premium Quality Beans',
            description: 'Hand-selected beans from the world’s finest regions, roasted to perfection.',
            gradient: 'from-[#2A2A2E] to-[#1F1F23]',
        },
        {
            icon: <div className="w-8 h-8 bg-[#2A2A2E] rounded-full flex items-center justify-center"><div className="w-4 h-4 bg-amber-500 rounded-full"></div></div>,
            title: 'Expert Baristas',
            description: 'Passionate artisans with years of experience in every cup.',
            gradient: 'from-[#2A2A2E] to-[#1F1F23]',
        },
        {
            icon: <div className="w-8 h-8 bg-[#2A2A2E] rounded-lg flex items-center justify-center"><div className="w-4 h-4 bg-amber-500 rounded"></div></div>,
            title: 'Cozy Atmosphere',
            description: 'A blend of modern comfort and rustic charm, perfect for any moment.',
            gradient: 'from-[#2A2A2E] to-[#1F1F23]',
        },
        {
            icon: <div className="w-8 h-8 bg-[#2A2A2E] rounded-full flex items-center justify-center"><div className="w-4 h-4 bg-amber-500 rounded-full"></div></div>,
            title: 'Fresh Pastries',
            description: 'Daily baked goods with locally sourced ingredients.',
            gradient: 'from-[#2A2A2E] to-[#1F1F23]',
        },
        {
            icon: <Clock className="h-8 w-8 text-gray-100" />,
            title: 'Fast Service',
            description: 'Quick, quality service for coffee lovers on the move.',
            gradient: 'from-[#2A2A2E] to-[#1F1F23]',
        },
        {
            icon: <div className="w-8 h-8 bg-[#2A2A2E] rounded-lg flex items-center justify-center"><div className="w-4 h-4 bg-amber-500 rounded-full"></div></div>,
            title: 'Community Hub',
            description: 'A gathering place where connections and communities thrive.',
            gradient: 'from-[#2A2A2E] to-[#1F1F23]',
        },
    ];
    
    return (
        <section id='whychoose' className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-100 font-serif mb-4">
                            Why Choose <span className="text-amber-500">Aroma Cafe</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            We craft more than coffee—we create experiences that ignite your senses and fuel your soul.
                        </p>
                        <div className="w-24 h-1 bg-amber-500 mx-auto mt-6 rounded-full"></div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group relative bg-[#2A2A2E] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-[#2A2A2E] mx-auto max-w-xs sm:max-w-sm md:max-w-none">
                                <div className="absolute -top-4 -right-4 w-8 h-8 bg-amber-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-100 font-serif mb-4">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default WhyChooseSection
