"use client";

import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import { useTranslations } from "next-intl";
import { ScienceGothic } from "@/lib/fonts";

export default function ProjectsPage() {
  const traslation = useTranslations("ProjectsPage");

  return (
    <div>
      { /* Navbar */}
      <NavBar />
      { /* layout granulado svg */}
      <svg
        className="pointer-events-none fixed inset-0 w-full min-h-full opacity-[0.1]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
      { /* Separador da navbar */}
      <div className="w-full mb-10 h-[0.1] bg-[#E2E8F0] dark:bg-[#2A2A2A]"></div>
      { /* Conteúdo principal */}
      <div className="flex items-start mb-10 flex-col xl:flex-row px-6 md:px-10 xl:px-20 mt-15 md:mt-20 md:gap-6 gap-4 xl:gap-80">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-[#0F172A] dark:text-[#F5F5F5] md:text-4xl text-[28px] ${ScienceGothic.className}`}
        >
          {traslation("title")}
        </motion.h1>
        {/* Descrição */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#334155] dark:text-[#B0B0B0] md:text-[18px] text-[16px]"
        >
          {traslation("description")}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-[#161b28] my-20 dark:text-[#5c4f2e] md:text-4xl text-[28px] ${ScienceGothic.className}`}
        >
          ...Under construction
        </motion.h1>
      </div>
    </div>
  );
}