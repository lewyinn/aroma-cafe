"use client";
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/NavbarComponents';
import HeroSection from '@/components/HeroSection';
import BannerSection from '@/components/BannerSection';
import MenuSection from '@/components/MenuSection';
import ExperienceSection from '@/components/ExperienceSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import GallerySection from '@/components/GallerySection';
import FooterSection from '@/components/FooterSection';
import LastBannerSection from '@/components/LastBanner';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#1F1F23] text-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      <div className='bg-gradient-to-r from-[#1F1F23] to-[#2A2A2E]'>
        {/* Why Choose Section */}
        <WhyChooseSection />

        {/* Banneer Section */}
        <BannerSection />

        {/* Menu Section */}
        <MenuSection />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Gallery Section */}
        <GallerySection />

        {/* Last Banner Section */}
        <LastBannerSection />
      </div>

      <FooterSection />
    </div>
  );
}