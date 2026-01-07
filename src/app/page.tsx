'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { motion } from 'framer-motion';
import GenericLink from './components/SocialMediaButton';
import { ScienceGothic } from '../lib/fonts';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import NavBar from './components/NavBar';
import Footer from './components/Footer';


// Pega o github calendar de forma dinâmica e faz importação do GitHubCalendar, renderiza no client
const GitHubCalendar = dynamic(
  () => import('react-github-calendar').then((mod) => mod.GitHubCalendar),
  { ssr: false }
);

export default function HomePage() {
  // Pega o ano atual para o github calendar
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear);
  const years = [2026, 2025];

  // useState para mudar o tamanho da fonte
  const [fontSize, setFontSize] = useState(18);

  // Muda o tamanho da fonte dependendo do viewport para adaptar ao mobile
  useEffect(() => {
    if (window.innerWidth < 640) {
      setFontSize(14);
    }
  }, []);

  // Traduções
  const traslation = useTranslations("HomePage");

  return (
    // Div principal do conteúdo
    <div className="relative w-full min-h-screen bg-[#F8FAFC] dark:bg-[#0F0F0F]">
      { /* Navbar */}
      <NavBar />
      {/* Overlay granulado svg*/}
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
      {/* Conteúdo principal */}
      <div className="relative z-10">
        {/* Linha divisora da navbar */}
        <div className="w-full h-px bg-[#E2E8F0] dark:bg-[#2A2A2A]" />
        { /* Conteúdo */ }
        <div className="flex mb-10 flex-col xl:flex-row items-center px-6 md:px-10 xl:px-20 mt-15 md:mt-20 gap-10 xl:gap-80">
          {/* Textos, Links e Calendario github*/}
          <div className="flex flex-col gap-6 max-w-2xl">
            {/* Titulo */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`text-[#0F172A] dark:text-[#F5F5F5] md:text-4xl text-[23px] ${ScienceGothic.className}`}
            >
              {traslation("title")}
            </motion.p>
            {/* Descrição */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[#334155] dark:text-[#B0B0B0] md:text-[16px] text-[14px]"
            >
              {traslation("description")}
            </motion.p>
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex gap-4 pt-4 mb-8"
            >
              { /* Github */}
              <GenericLink
                href="https://github.com/rubensqueiroz863"
                name="GitHub"
                image="https://i.postimg.cc/BvtxsKyk/25231.png"
                alt="My GitHub"
              />
              { /* Codepen */}
              <GenericLink
                href="https://codepen.io/rubensqueiroz863"
                name="Codepen"
                image="https://i.postimg.cc/C5jb65sz/1907-codepen.png"
                alt="My Codepen"
              />
            </motion.div>
            {/* Mobile Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="xl:hidden"
            >
              { /* tema escuro */}
              <Image
                src="https://i.postimg.cc/CxRgT7s9/pattern-lines-2.png"
                width={512}
                height={512}
                alt="Geometric cubes wireframe"
                className="w-40 hidden dark:flex md:w-60 h-auto"
              />
              { /* tema claro (temporário) */}
              <Image
                src="https://i.postimg.cc/J4jBnBW1/66bfcd68852f621b3819eb99-tech-illustration.png"
                width={512}
                height={512}
                alt="Geometric cubes wireframe"
                className="w-45 dark:hidden md:w-60 h-auto"
              />
            </motion.div>
            {/* Calendario GitHub */}
            <div
              className="flex items-center justify-center rounded-md bg-[#FFFFFF] dark:bg-[#1C1C1C] p-4 mt-10 max-w-full overflow-hidden"
            >
              <section className="md:w-full w-80 text-[#0F172A] dark:text-[#F5F5F5] overflow-x-auto">
                <GitHubCalendar
                  username="rubensqueiroz863"
                  year={year}
                  blockRadius={2}
                  fontSize={fontSize}
                  blockMargin={4}
                />
              </section>
            </div>
            { /* Botões de seleções dos anos do calendario github usando map de forma dinâmica */}
            <div className="flex gap-2 flex-wrap">
              {years.map((y) => (
                <button
                  key={y}
                  onClick={() => setYear(y)}
                  className={`px-5 cursor-pointer py-[5px] rounded-md text-[16px] transition-all
                    ${year === y 
                      ? 'bg-[#16A34A] dark:bg-[#22C55E] border text-[#F8FAFC] dark:text-[#0F0F0F] border-[#CBD5E1] dark:border-[#3A3A3A]' 
                      : 'bg-[#FFFFFF] dark:bg-[#1C1C1C] text-[#0F172A] dark:text-[#F5F5F5] dark:hover:border-[#3A3A3A] hover:border-[#CBD5E1] border border-transparent'}
                  `}
                >
                  {y}
                </button>
              ))}
            </div>
          </div>
          {/* Desktop image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden xl:flex"
          >
            <Image
              src="https://i.postimg.cc/6Q8KVvBv/pattern-lines.webp"
              width={512}
              height={512}
              alt="Geometric cubes wireframe"
              className="w-82 h-auto"
            />
          </motion.div>
        </div>
      </div>
      {/* Linha divisora do footer */}
      <div className="w-full h-px bg-[#E2E8F0] dark:bg-[#2A2A2A] mt-30 md:mt-35" />
      { /* Rodapé da pagina */ }
      <Footer />
    </div>
  );
}
