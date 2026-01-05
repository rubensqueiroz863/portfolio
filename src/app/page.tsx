'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { motion } from 'framer-motion';
import GenericLink from './components/SocialMediaButton';
import { ScienceGothic } from '../lib/fonts';
import { useEffect, useState } from 'react';

// Pega o github calendar de forma dinâmica e faz importação do GitHubCalendar, renderiza no client
const GitHubCalendar = dynamic(
  () => import('react-github-calendar').then((mod) => mod.GitHubCalendar),
  { ssr: false }
);

export default function HomePage() {
  // Pega o ano atual para o github calendar
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear);
  const years = [2025];

  // useState para mudar o tamanho da fonte
  const [fontSize, setFontSize] = useState(18);

  // Muda o tamanho da fonte dependendo do viewport para adaptar ao mobile
  useEffect(() => {
    if (window.innerWidth < 640) {
      setFontSize(14);
    }
  }, []);

  return (
    // Div principal do conteúdo
    <div className="relative w-full min-h-screen bg-neutral-900">
      {/* Overlay granulado svg*/}
      <svg
        className="pointer-events-none fixed inset-0 w-screen h-screen opacity-[0.1]"
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
        <div className="w-full h-px bg-neutral-700" />
        { /* Conteúdo */ }
        <div className="flex mb-10 flex-col xl:flex-row items-center px-6 md:px-10 xl:px-20 mt-15 md:mt-30 gap-10 xl:gap-80">
          {/* Textos, Links e Calendario github*/}
          <div className="flex flex-col gap-6 max-w-2xl">
            {/* Titulo */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`text-white md:text-4xl text-[23px] ${ScienceGothic.className}`}
            >
              Full-Stack Software Engineer (Next.js & Spring Boot)
            </motion.p>
            {/* Descrição */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-neutral-400 md:text-[16px] text-[14px]"
            >
              I'm Rubens Q. Alves, a Full-Stack Software Engineer (Next.js & Spring Boot)
              passionate about learning and building open-source software.
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
                text="GitHub"
                image="https://i.postimg.cc/BvtxsKyk/25231.png"
                alt="My GitHub"
              />
              { /* Codepen */}
              <GenericLink
                href="https://codepen.io/rubensqueiroz863"
                text="Codepen"
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
              <Image
                src="https://i.postimg.cc/CxRgT7s9/pattern-lines-2.png"
                width={512}
                height={512}
                alt="Geometric cubes wireframe"
                className="w-60 h-auto"
              />
            </motion.div>
            {/* Calendario GitHub */}
            <div
              className="flex items-center justify-center rounded-md bg-neutral-800 p-4 mt-10 max-w-full overflow-hidden"
            >
              <section className="md:w-full w-90 text-white overflow-x-auto">
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
                  className={`px-5 py-[5px] rounded-md text-[16px] transition-all
                    ${year === y 
                      ? 'bg-green-600 border text-neutral-900 border-neutral-500' 
                      : 'bg-neutral-800 text-white hover:border-neutral-700 border border-transparent'}
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
    </div>
  );
}
