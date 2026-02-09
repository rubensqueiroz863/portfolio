"use client";

import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import { useTranslations } from "next-intl";
import { ScienceGothic } from "@/lib/fonts";
import ProjectCard from "../components/ProjectCard";

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
      <div className="w-full mb-10 xl:mb-25 h-px bg-(--soft-hover)"></div>
      { /* Conteúdo principal */}
      <div className="flex items-start mb-10 flex-col px-10 md:px-20 xl:px-40 mt-15 md:mt-20 md:gap-6 gap-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-(--text-main) font-bold md:text-4xl text-[28px] ${ScienceGothic.className}`}
        >
          {traslation("title")}
        </motion.h1>
        {/* Descrição */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-(--text-secondary) xl:w-2xl xl:text-[18px] md:text-[17px] text-[15px] mb-4"
        >
          {traslation("description")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid w-full grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <ProjectCard 
            alt="Ecommerce project"
            src="https://i.postimg.cc/ZYQB52Vj/Chat-GPT-Image-9-de-fev-de-2026-11-52-11.png"
            name="Ecommerce" 
            description={traslation("ecommerce")}
            url="projects/ecommerce"
          />
        </motion.div>
      </div>
    </div>
  );
}