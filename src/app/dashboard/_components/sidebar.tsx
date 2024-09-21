"use client";

import { cn } from "@/lib/utils";
import { CreditCard, History, WandSparkles, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface SidebarProps {
  onClose?: () => void;
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

export const Sidebar = ({ onClose }: SidebarProps) => {
  const path = usePathname();

  return (
    <div className="flex flex-col h-full">
      <div className="p-5 flex justify-between items-center relative">
        <button onClick={onClose} className="absolute left-5 text-gray-500 hover:text-gray-700 md:hidden">
          <X size={24} />
        </button>
        <div className="flex items-center justify-center w-full">
          <Image src="/content_flash_icon.png" width={40} height={40} alt="Content Flash Icon" />
          <span className="text-xl ml-2 font-bold">Content Flash</span>
        </div>
      </div>
      <div className="p-5 flex-grow">
        <nav className="space-y-2">
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
      </div>
    </div>
  );
};
