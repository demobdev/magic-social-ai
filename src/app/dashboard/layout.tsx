"use client";

import React, { useState } from "react";
import { Sidebar } from "./_components/sidebar";
import { AIUsageClient } from "./_components/ai-usage-client";
import { Logo } from "@/components/logo";

const DashboardLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col md:flex-row">
      <header className="md:hidden p-4 bg-white z-20 relative">
        <Logo onMenuClick={toggleMobileMenu} />
      </header>
      <div 
        className={`md:w-64 md:flex md:flex-col fixed inset-y-0 left-0 z-30 bg-white transition-transform duration-300 ease-in-out transform ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 overflow-y-auto`}
      >
        <Sidebar onClose={toggleMobileMenu} />
        <div className="mt-auto p-4">
          <AIUsageClient />
        </div>
      </div>
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden" 
          onClick={toggleMobileMenu}
        ></div>
      )}
      <div className="flex-1 md:ml-64 bg-gray-50 min-h-screen pb-5">
        <div className="p-4 md:p-8">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
