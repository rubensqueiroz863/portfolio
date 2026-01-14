"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="bg-(--soft-border) w-8 h-auto rounded-full p-1 cursor-pointer relative flex items-center justify-center"
    >
      <AnimatePresence mode="wait">
        {mounted && theme == "dark" ? (
          <motion.span
            key="sun"
            initial={{ rotate: -90, scale: 1, opacity: 1 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Image
              src={"https://i.postimg.cc/fWPxzv2B/256-2567818-sun-icon-on-gray-background-matahari-kartun-png.png"}
              width={128}
              height={128}
              alt="Moon dark theme icon"
              className="w-full h-auto"
            />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ rotate: -90, scale: 1, opacity: 1 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Image
              src={"https://i.postimg.cc/brPfkn3X/free-moon-icon-2287-thumb.png"}
              width={128}
              height={128}
              alt="Moon dark theme icon"
              className="w-full h-auto"
            />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  )
}