"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MuseoModerno } from "next/font/google";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

const museo = MuseoModerno({
  weight: "700",
  subsets: ["latin"],
});

export const Logo = ({ onMenuClick }: { onMenuClick?: () => void }) => {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");

  return (
    <div className="w-full flex items-center justify-between relative">
      <div className="flex items-center">
        {isDashboard && (
          <button onClick={onMenuClick} className="mr-2 md:hidden">
            <Menu size={24} />
          </button>
        )}
        <Link href="/" className="flex items-center cursor-pointer">
          <Image src="/content_flash_icon.png" width={40} height={40} alt="Content Flash Icon" />
          <h2 className={cn(museo.className, "text-xl ml-2")}>Content Flash</h2>
        </Link>
      </div>
    </div>
  );
};
