"use client";

import { cn } from "@/lib/utils";
import { CreditCard, History, WandSparkles, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { AIUsageClient } from "./ai-usage-client";

interface SidebarProps {
  onClose?: () => void;
  isMobile: boolean;
}

const menuList = [
  {
    name: "Magic Tools",
    icon: WandSparkles,
    path: "/dashboard",
  },
  {
    name: "Output History",
    icon: History,
    path: "/dashboard/history",
  },
  {
    name: "Upgrade",
    icon: CreditCard,
    path: "/dashboard/upgrade",
  },
];

export const Sidebar = ({ onClose, isMobile }: SidebarProps) => {
  const path = usePathname();

  return (
    <div className="flex flex-col h-full">
      {isMobile && (
        <div className="p-5 flex items-center justify-between">
          <div className="flex-1 flex justify-center">
            <Image src="/content_flash_icon.png" width={40} height={40} alt="Content Flash Icon" />
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
      )}
      <nav className="flex-grow p-5 space-y-2">
        {menuList.map((menu) => (
          <Link
            href={menu.path}
            key={menu.name}
            className={cn(
              "flex items-center gap-2 p-3 hover:bg-primary hover:text-white rounded-lg transition-colors",
              path === menu.path && "bg-primary text-white"
            )}
            onClick={onClose}
          >
            <menu.icon className="h-6 w-6" />
            <span className="text-lg">{menu.name}</span>
          </Link>
        ))}
      </nav>
      <div className="p-5">
        <AIUsageClient />
      </div>
    </div>
  );
};
