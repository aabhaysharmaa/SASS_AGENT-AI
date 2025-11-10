"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Code, ImageIcon, LayoutDashboard, MessageSquare, Music, Settings, Video } from "lucide-react";
import { usePathname } from "next/navigation";
const montserrat = Montserrat({
  weight: "600",
  subsets: ["latin"]
});


const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-700",
  },
  {
    label: "Video Generation",
    icon: Video,
    href: "/video",
    color: "text-orange-700",
  }, {
    label: "Music Generation",
    icon: Music,
    href: "/music",
    color: "text-emerald-500",
  }, {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-green-700",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/setting",
    color: "text-red-700",
  },
]

const SideBar = () => {
  const pathname = usePathname();
  return (
    <div className="space-y-4  py-4 flex-col h-full bg-[#111827] text-white ">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-full h-16  mr-4  flex justify-start items-center">
            <Image src="/logo.webp" alt="logo" height={50} width={50} />
            <h1 className={cn("text-xl font-bold pl-2", montserrat.className)}>JASPER</h1>
          </div>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link key={route.href} href={route.href} className={cn("text-sm group flex cursor-pointer font-medium p-3  w-full hover:text-white hover:bg-white/10 rounded-lg", pathname === route.href ? "text-white bg-white/10" : "text-zinc-400")} >
              <div className="flex items-center flex-1 ">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SideBar