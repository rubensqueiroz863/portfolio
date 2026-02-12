"use client";

import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/NavBar";
import { ScienceGothic } from "@/lib/fonts";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type ThemeImageProps = {
  dark: string;
  light: string;
  width: number;
  height: number;
  alt: string;
}

type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
}

function ThemeImage({ dark, light, width, height, alt }: ThemeImageProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const src = resolvedTheme === "dark" ? dark : light;

  if (!mounted) {
    return (
      <div className="w-full rounded-2xl aspect-video animate-pulse bg-gray-300">
      </div>
    )
  }
    
  
  
  return <Image className="rounded-2xl" src={src} width={width} height={height} alt={alt}/>;
}

function Section({ id, title, children }: SectionProps) {
  return (
    <div className="flex flex-col gap-5 mb-8 mt-8">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Link
          href={`/projects/nexashop#${id}`}
          id={id}
          className="relative font-bold text-[24px] before:content-['#'] before:absolute before:-left-5 before:opacity-0 hover:before:opacity-40 before:transition-opacity"
        >
          {title}
        </Link>
      </motion.div>
      {children}
    </div>
  );
}

export default function NexaShopPage() {
  const translation = useTranslations("NexaShopPage");
  const [features, setFeatures] = useState([""]);
  
  const locale = useLocale();

  useEffect(() => {
    async function getFeaturesList() {
      if (locale === "pt") {
        setFeatures([
          "Catálogo completo de produtos com busca e filtros",
          "Carrinho de compras dinâmico com persistência de dados",
          "API RESTful construída com Spring Boot (Java)",
          "Design responsivo otimizado para dispositivos desktop e móveis",
          "Estrutura amigável para SEO (Next.js), melhorando a descoberta do site"
        ]);
      } else if (locale === "en") {
        setFeatures([
          "Complete product catalog with search and filtering",
          "Dynamic shopping cart with data persistence",
          "RESTful API built with Spring Boot (java)",
          "Responsive design optimized for desktop and mobile devices",
          "SEO-friendly structure (Next.js) for improved discoverability"
        ]);
      }
    }
    
    getFeaturesList();
  }, []);

  return (
    <div>
      { /* Navbar */}
      <NavBar />
      { /* layout granulado svg */}
      <svg
        className="pointer-events-none z-50 fixed inset-0 w-full min-h-full opacity-[0.1]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="noise">
          <feTurbulence
            baseFrequency="0.6"
            numOctaves="2"
            opacity="0.05"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
      { /* Separador da navbar */}
      <div className="w-full mb-14 md:mb-20 xl:mb-25 h-px bg-(--soft-border)"></div>
      { /* Coonteúdo Principal */}
      <div className="px-4 md:px-12 xl:px-98">
        <div className="flex flex-row justify-between mb-8 w-full">
          <div className="flex w-full md:flex-row md:justify-between md:gap-0 gap-2 flex-col">
            <motion.h1 
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className={`flex md:items-center md:justify-center font-bold ${ScienceGothic.className} text-[34px]`}
            >
              NexaShop
            </motion.h1>
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex font-bold flex-row items-center gap-2"
            >
              <Link
                className="flex relative rounded-md border border-transparent transition-color hover:border-(--hover-border) h-9 w-32 items-center justify-center gap-2 py-1 bg-(--bg-card)"
                href={"https://rubensecommerce.vercel.app/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="22"
                  height="22"
                  className="w-4 h-4"
                >
                  <path d="M14 3h7v7"/>
                  <path d="M10 14L21 3"/>
                  <path d="M21 14v7H3V3h7"/>
                </svg>
                URL
              </Link>
              <Link
                className="flex relative rounded-md border border-transparent transition-color hover:border-(--hover-border) h-9 w-32 items-center justify-center gap-2 py-1 bg-(--bg-card)"
                href={"https://github.com/rubensqueiroz863/ecommerce"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={"https://i.postimg.cc/zfGLrzpv/github-white-icon.webp"}
                  width={128}
                  height={128}
                  alt="External link image"
                  className="w-4 h-auto absolute left-3"
                />
                GitHub
              </Link> 
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ThemeImage
            dark="https://i.postimg.cc/MG5xpBMX/Nexa-Shop-Google-Chrome-10-02-2026-20-01-10.png"
            light="https://i.postimg.cc/JzQqh38s/Nexa-Shop-Google-Chrome-10-02-2026-22-46-13.png"
            width={1280}
            height={1280}
            alt="NexaShop image"
          />
        </motion.div>
        <Section id="overview" title="Overview">
          <div className="flex flex-col gap-4 text-(--text-secondary)">
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {translation('overview')}
            </motion.p>
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {translation('overviewApi1')}
              <Link 
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/rubensqueiroz863/ecommerce-backend"
                className="group px-2 inline-flex items-center gap-1 text-blue-400 underline transition-colors hover:text-blue-500"
              >
                Ecommerce-Backend
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5 transition-colors"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M13.5 6H18m0 0v4.5M18 6l-5.5 5.5M6 5.5V18.5h13"
                  />
                </svg>
              </Link>
              {translation('overviewApi2')}
            </motion.p>
          </div>
        </Section>
        <Section id="technologies" title="Technologies">
          <motion.ul
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col pl-2 list-disc gap-2 text-(--text-secondary) md:text-[18px] text-[16px]"
          >
            { /* React */}
            <div className="flex gap-2 items-center">
              <Link 
                className="flex gap-2 items-center underline text-(--link-color) hover:text-(--hover-link)"
                href="https://react.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                src={"https://i.postimg.cc/pTDfhRrM/favicons.webp"}
                width={256}
                height={256}
                alt="React Logo"
                className="w-4 h-4 my-auto"
              />
                React
              </Link>
              <p>- UI Library</p>
            </div>
            { /* Next.js */}
            <div className="flex gap-2 items-center">
              <Link 
                className="flex gap-2 items-center underline text-(--link-color) hover:text-(--hover-link)"
                href="https://nextjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                src={"https://i.postimg.cc/cH2JSn0y/favicons-(1).webp"}
                width={256}
                height={256}
                alt="React Logo"
                className="w-4 h-4 my-auto"
              />
                Next.js
              </Link>
              <p>- React Framework</p>
            </div>
            { /* Tailwind CSS */}
            <div className="flex gap-2 items-center">
              <Link 
                className="flex gap-2 items-center underline text-(--link-color) hover:text-(--hover-link)"
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                src={"https://i.postimg.cc/Dyqw90DZ/favicons-(2).webp"}
                width={256}
                height={256}
                alt="React Logo"
                className="w-4 h-4 my-auto"
              />
                Tailwind CSS
              </Link>
              <p>- Styling Library</p>
            </div>
            { /* TypeScript */}
            <div className="flex gap-2 items-center">
              <Link 
                className="flex gap-2 items-center underline text-(--link-color) hover:text-(--hover-link)"
                href="https://www.typescriptlang.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                src={"https://i.postimg.cc/x1JtjrKx/favicons-(4).webp"}
                width={256}
                height={256}
                alt="React Logo"
                className="w-4 h-4 my-auto"
              />
                TypeScript
              </Link>
              <p>- Superset of JavaScript Library</p>
            </div>
            { /* Spring Boot */}
            <div className="flex gap-2 items-center">
              <Link 
                className="flex gap-2 items-center underline text-(--link-color) hover:text-(--hover-link)"
                href="https://spring.io/projects/spring-boot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                src={"https://i.postimg.cc/LXnzDLNG/8dc1230c-dc76-432e-843c-c377b5d7b6e8-5.webp"}
                width={256}
                height={256}
                alt="React Logo"
                className="w-4 h-4 my-auto"
              />
                Spring Boot
              </Link>
              <p>- Java Framework</p>
            </div>
          </motion.ul>
        </Section>
        <Section id="features" title="Features">
          <div className="flex flex-col gap-4 text-(--text-secondary)">
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {translation('featuresDescription')}
            </motion.p>
            <motion.ul
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="list-disc pl-5"
            >
              {features.map((feature) =>
                <li key={feature}>{feature}</li>
              )}
            </motion.ul>
          </div>
        </Section>
        <Section id="project-design" title="Project Design">
          <div className="flex flex-col gap-4 text-(--text-secondary)">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ThemeImage
                dark="https://i.postimg.cc/MG5xpBMX/Nexa-Shop-Google-Chrome-10-02-2026-20-01-10.png"
                light="https://i.postimg.cc/JzQqh38s/Nexa-Shop-Google-Chrome-10-02-2026-22-46-13.png"
                width={1280}
                height={1280}
                alt="NexaShop image"
              />
              <p className="text-center mb-4">homepage</p>
            </motion.div>
            
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ThemeImage
                dark="https://i.postimg.cc/gJhLxdRP/Nexa-Shop-Google-Chrome-10-02-2026-22-49-04.png"
                light="https://i.postimg.cc/m2jzzmcL/Nexa-Shop-Google-Chrome-10-02-2026-22-50-12.png"
                width={1280}
                height={1280}
                alt="NexaShop image"
              />
              <p className="text-center mb-4">cart menu</p>
            </motion.div>
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ThemeImage
                dark="https://i.postimg.cc/0NwyfnNG/Nexa-Shop-Google-Chrome-10-02-2026-22-53-00.png"
                light="https://i.postimg.cc/QC08tnfn/Nexa-Shop-Google-Chrome-10-02-2026-22-54-06.png"
                width={1280}
                height={1280}
                alt="NexaShop image"
              />
              <p className="text-center">product page</p>
            </motion.div>
          </div>
        </Section>
      </div>
      <div className="w-full mt-35 xl:mt-25 h-px bg-(--hover-border)" />
      <Footer />
    </div>
  );
}