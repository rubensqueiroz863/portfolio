"use client";

import { motion } from "framer-motion";
import GenericLink from "./components/SocialMediaButton";
import { ScienceGothic } from "../utils/fonts";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="relative w-full h-screen bg-neutral-900 overflow-hidden">
      {/* GRAIN OVERLAY */}
      <svg
        className="pointer-events-none absolute inset-0 w-full min-h-full opacity-[0.1]"
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

      {/* CONTEÚDO */}
      <div className="relative z-10">
        <div className="w-full h-px bg-neutral-700" />

        <div className="flex flex-col xl:flex-row items-center px-20 mt-30 gap-80">
          <div className="flex flex-col gap-6 max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`text-white text-4xl ${ScienceGothic.className}`}
            >
              Full-Stack Software Engineer (Next.js & Spring Boot)
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-neutral-400 text-[16px]"
            >
              I'm Rubens Q. Alves, a Full-Stack Software Engineer (Next.js & Spring Boot)
              passionate about learning and building open-source software.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex gap-4 pt-4"
            >
              <GenericLink
                href="https://github.com/rubensqueiroz863"
                text="GitHub"
                image="https://i.postimg.cc/BvtxsKyk/25231.png"
                alt="My github"
              />
              <GenericLink
                href="https://codepen.io/rubensqueiroz863"
                text="Codepen"
                image="https://i.postimg.cc/C5jb65sz/1907-codepen.png"
                alt="My codepen"
              />
            </motion.div>
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
          </div>

          {/* IMAGEM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="xl:flex hidden"
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
//https://i.postimg.cc/kGCJ7SgH/pattern-lines-2.jpg