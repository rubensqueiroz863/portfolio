"use client";

import { motion } from "framer-motion";
import GenericLink from "./components/SocialMediaButton";
import { ScienceGothic } from "../utils/fonts";

export default function HomePage() {
  return (
    <div className="w-full h-screen bg-neutral-900">
      <div className="w-full h-[0.1] bg-neutral-700"></div>
      <div className="flex flex-col gap-6 w-full items-center justify-center mt-30 px-20"> 
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
          I'm Rubens Alves, a Full-Stack Software Engineer (Next.js & Spring Boot) passionate about learning and building open-source software that benefits developers and the world at large.
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex px-20 py-10 gap-4"
      >
        <GenericLink href="https://github.com/rubensqueiroz863" text="GitHub" image="https://i.postimg.cc/BvtxsKyk/25231.png" alt="My github | Meu github"/>
        <GenericLink href="https://codepen.io/rubensqueiroz863" text="Codepen" image="https://i.postimg.cc/fyM4sLJz/codepen-icon-sm.png" alt="My codepen | Meu codepen"/>
      </motion.div>
    </div>
  );
}