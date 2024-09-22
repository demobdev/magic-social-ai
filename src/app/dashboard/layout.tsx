"use client";

import React, { useState, useEffect } from "react";
import { Sidebar } from "./_components/sidebar";
import { Auth } from "@/components/auth";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const DashboardLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <header className="p-4 bg-white z-20 sticky top-0 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/content_flash_icon.png" width={40} height={40} alt="Content Flash Icon" />
          <span className="text-xl ml-2 font-bold">CONTENT FLASH</span>
        </Link>
        <div className="flex items-center">
          <Auth />
          {isMobile && (
            <button onClick={toggleMobileMenu} className="ml-4 text-gray-500 hover:text-gray-700">
              <Menu size={24} />
            </button>
          )}
        </div>
      </header>
      <div className="flex flex-1">
        <div 
          className={`w-64 fixed inset-y-0 left-0 z-30 bg-white transition-transform duration-300 ease-in-out transform ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0 overflow-y-auto pt-16`}
        >
          <Sidebar onClose={toggleMobileMenu} isMobile={isMobile} />
        </div>
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden" 
            onClick={toggleMobileMenu}
          ></div>
        )}
        <div className="flex-1 md:ml-64 bg-gray-50 min-h-screen pb-5 pt-16">
          <div className="p-4 md:p-8">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
