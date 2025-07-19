import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";
import Coffe from '@/assets/menu/coffe.webp';
import Croisant from '@/assets/menu/croisant.jpg';
import CafeCozy from '@/assets/Cozy-Cafe.webp';
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function GallerySection() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const galleryImages = [
        Coffe,
        Croisant,
        CafeCozy,
    ];

    const handleSwipe = (direction) => {
        if (direction === "left" && currentIndex < galleryImages.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else if (direction === "right" && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const diff = touchStartX.current - touchEndX.current;
        if (diff > 50) handleSwipe("left");
        if (diff < -50) handleSwipe("right");
    };

    return (
        <section className="py-16" id="gallery">
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="max-w-6xl mx-auto px-4"
            >
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-100 font-serif mb-4">
                        Our <span className="text-amber-500">Gallery</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Explore the ambiance and moments captured at Aroma Cafe.
                    </p>
                    <div className="w-24 h-1 bg-amber-500 mx-auto mt-6 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={index}
                            className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            onClick={() => {
                                setSelectedImage(image);
                                setCurrentIndex(index);
                            }}
                        >
                            <Image
                                src={image}
                                alt={`Gallery image ${index + 1}`}
                                width={500}
                                height={500}
                                className="w-full h-64 object-cover hover:scale-105 transition-transform"
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Lightbox */}
                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedImage(null)}
                        >
                            <div
                                className="relative w-full h-full flex items-center justify-center"
                                onClick={(e) => e.stopPropagation()}
                                onTouchStart={handleTouchStart}
                                onTouchMove={handleTouchMove}
                                onTouchEnd={handleTouchEnd}
                            >
                                {/* Pagination */}
                                <div className="absolute top-4 left-4 text-white text-sm sm:text-base bg-black/60 px-3 py-1 rounded-full">
                                    {currentIndex + 1} / {galleryImages.length}
                                </div>

                                {/* Close Button */}
                                <button
                                    className="absolute top-4 right-4 text-white hover:text-amber-500"
                                    onClick={() => setSelectedImage(null)}
                                >
                                    <X size={28} />
                                </button>

                                {/* Prev Button */}
                                {currentIndex > 0 && (
                                    <button
                                        className="absolute left-4 md:left-10 text-white hover:text-amber-500"
                                        onClick={() => handleSwipe("right")}
                                    >
                                        <ChevronLeft size={40} />
                                    </button>
                                )}

                                {/* Next Button */}
                                {currentIndex < galleryImages.length - 1 && (
                                    <button
                                        className="absolute right-4 md:right-10 text-white hover:text-amber-500"
                                        onClick={() => handleSwipe("left")}
                                    >
                                        <ChevronRight size={40} />
                                    </button>
                                )}

                                {/* Main Image */}
                                <motion.div
                                    initial={{ scale: 0.95, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.95, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Image
                                        src={galleryImages[currentIndex]}
                                        alt={`Gallery image ${currentIndex + 1}`}
                                        width={1000}
                                        height={800}
                                        className="max-h-[90vh] object-contain rounded-xl"
                                    />
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </section>
    );
}
