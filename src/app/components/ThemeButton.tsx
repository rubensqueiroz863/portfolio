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
      className="bg-(--soft-border) w-8 h-8 rounded-full p-1 cursor-pointer relative flex items-center justify-center"
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
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>

              <line x1="12" y1="1" x2="12" y2="4" stroke="currentColor" strokeWidth="2"/>
              <line x1="12" y1="20" x2="12" y2="23" stroke="currentColor" strokeWidth="2"/>
              <line x1="1" y1="12" x2="4" y2="12" stroke="currentColor" strokeWidth="2"/>
              <line x1="20" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2"/>

              <line x1="4.2" y1="4.2" x2="6.3" y2="6.3" stroke="currentColor" strokeWidth="2"/>
              <line x1="17.7" y1="17.7" x2="19.8" y2="19.8" stroke="currentColor" strokeWidth="2"/>
              <line x1="4.2" y1="19.8" x2="6.3" y2="17.7" stroke="currentColor" strokeWidth="2"/>
              <line x1="17.7" y1="6.3" x2="19.8" y2="4.2" stroke="currentColor" strokeWidth="2"/>
            </svg>

          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ rotate: -90, scale: 1, opacity: 1 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="9" fill="currentColor"/>

              <circle cx="9" cy="10" r="1.5" fill="white" opacity="0.6"/>
              <circle cx="14.5" cy="8" r="1" fill="white" opacity="0.6"/>
              <circle cx="15" cy="14" r="2" fill="white" opacity="0.6"/>
              <circle cx="8" cy="15.5" r="1" fill="white" opacity="0.6"/>
            </svg>
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  )
}