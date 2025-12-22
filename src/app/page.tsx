'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { motion } from 'framer-motion';

import GenericLink from './components/SocialMediaButton';
import { ScienceGothic } from '../utils/fonts';

/* ────────────────────────────────────────── */
/* GitHub Calendar (client-only)               */
/* ────────────────────────────────────────── */
const GitHubCalendar = dynamic(
  () => import('react-github-calendar').then((mod) => mod.GitHubCalendar),
  { ssr: false }
);

export default function HomePage() {
  return (
    <div className="relative w-full min-h-screen bg-neutral-900">
      {/* ─────────────── GRAIN OVERLAY ─────────────── */}
      <svg
        className="pointer-events-none fixed inset-0 w-full min-h-screen opacity-[0.1]"
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


      {/* ─────────────── CONTENT ─────────────── */}
      <div className="relative z-10">
        <div className="w-full h-px bg-neutral-700" />

        <div className="flex flex-col xl:flex-row items-center px-20 mt-30 gap-80">
          {/* ───────── TEXT / LINKS / CALENDAR ───────── */}
          <div className="flex flex-col gap-6 max-w-2xl">
            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`text-white text-4xl ${ScienceGothic.className}`}
            >
              Full-Stack Software Engineer (Next.js & Spring Boot)
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-neutral-400 text-[16px]"
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
              <GenericLink
                href="https://github.com/rubensqueiroz863"
                text="GitHub"
                image="https://i.postimg.cc/BvtxsKyk/25231.png"
                alt="My GitHub"
              />
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

            {/* GitHub Contributions */}
            <div className="flex rounded-md bg-neutral-800 p-6 my-10">
              <section className="w-full text-white overflow-x-auto">

              <GitHubCalendar
                username="rubensqueiroz863"
                blockRadius={2}
                fontSize={18}
                blockMargin={4}
              />
            </section>
            </div>
            
          </div>

          {/* ───────── DESKTOP IMAGE ───────── */}
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
              className="w-72 h-auto"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
