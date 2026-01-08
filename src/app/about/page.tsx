"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import NavBar from "../components/NavBar";
import { useTranslations } from "next-intl";
import Footer from "../components/Footer";
import { ScienceGothic } from "@/lib/fonts";

export default function AboutPage() {
  // Router para navegação de pages
  const router = useRouter();
  //Traduções
  const translation = useTranslations("AboutPage");
  
  return (
    // Div principal
    <div className="relative bg-[#F8FAFC] dark:bg-[#0F0F0F] h-screen text-[#0F172A] dark:text-[#F5F5F5]">
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
      <div className="w-full h-[0.1] bg-[#E2E8F0] dark:bg-[#2A2A2A]"></div>
      { /* Conteúdo principal */}
      <div className="flex py-20 xl:px-80 gap-4 justify-center xl:flex-row flex-col">
        { /* Minha foto de perfil */}
        <div className="flex xl:order-2 xl:mb-0 md:mb-8 justify-center px-10 md:px-20 flex-col gap-4 md:justify-start">
          <Image
            src={"https://i.postimg.cc/Bv8DS8hf/IMG-20260107-231209521.png"}
            width={800}
            height={800}
            alt="My photo | Minha foto"
            className="w-90 h-auto rounded-xl"
          />
          { /* Div dos botões sobre o resumé */}
          <div className="flex gap-2">
            { /* Botão que leva ao resumé */}
            <Link 
              href={"https://s.craft.me/CnNhwPIVj6zztw"}
              className="relative cursor-pointer hover:bg-[#CBD5E1] dark:hover:bg-[#3A3A3A] flex transition-all items-center w-76 h-12 text-[#0F172A] dark:text-[#F5F5F5] rounded-md bg-[#FFFFFF] dark:bg-[#1C1C1C] border-[0.1] border-[#E2E8F0] dark:border-[#2A2A2A]"
            >
              <p className="absolute left-1/2 -translate-x-1/2">{translation("resuméButton")}</p>
              <Image
                src={"https://i.postimg.cc/x8XsLDj1/external-link-icon-white.png"}
                width={128}
                height={128}
                alt="redirect to my resume | Ir para meu resumo"
                className="w-5 h-5 absolute right-3"        
              />
            </Link>
            { /* Botão que faz download do resumé */}
            <Link
              href={"https://drive.google.com/file/d/1WEv7jgRNHhU2uaGy_Gh1qJv3ge9NCVaY/view?usp=drive_link"} 
              className="w-12 flex justify-center items-center h-12 hover:bg-[#CBD5E1] dark:hover:bg-[#3A3A3A] transition-all cursor-pointer bg-[#FFFFFF] dark:bg-[#1C1C1C] border-[0.1] border-[#E2E8F0] dark:border-[#2A2A2A] rounded-md"
            >
              { /* tema escuro */}
              <Image
                src={"https://i.postimg.cc/Hx9wYQt7/downloading-updates-xxl.png"}
                width={128}
                height={128}
                alt="Download Button | Botão de Download"
                className="w-4.5 h-4.5 hidden dark:flex"
              />
              { /* tema claro */}
              <Image
                src={"https://i.postimg.cc/28p72Zd0/724933.png"}
                width={128}
                height={128}
                alt="Download Button | Botão de Download"
                className="w-4.5 h-4.5 dark:hidden"
              />
            </Link>
          </div>
          { /* Link que leva ao email */}
          <Link 
            className="group flex w-20 text-[#0F172A] dark:text-[#F5F5F5] hover:text-[#334155] dark:hover:text-[#B0B0B0] transition-all gap-2 items-center"
            href={"mailto:rubensqueiroz863@gmail.com"}
          >
            <Image
              src={"https://i.postimg.cc/rF1k8sBh/Email.png"}
              width={128}
              height={128}
              alt="My email | Meu email"
              className="w-5 h-auto"
            />
            <p className="mb-1">rubensqueiroz863@gmail.com</p>
          </Link>
        </div>
        { /* Div com texto sobre */}
        <div className="flex xl:order-1 flex-col w-full px-10 md:pl-20 gap-8 xl:pl-0">
          <h1 
            className={`text-[#0F172A] xl:w-xl w-90 md:w-2xl dark:text-[#F5F5F5] md:text-[28px] text-[24px] ${ScienceGothic.className}`}
          >
            {translation("title")}</h1>
          <p className="text-[#334155] dark:text-[#B0B0B0] md:text-[16px] text-[15px]">
            {translation("description1")}
          </p>
          <p className="text-[#334155] dark:text-[#B0B0B0] md:text-[16px] text-[15px]">
            {translation("description2")}
          </p>
          { /* Seção com as habilidades */}
          <section>
            <Link
              href={"/about#skills"}
              id="skills" 
              className={`text-[#0F172A] dark:text-[#F5F5F5] md:text-[28px] text-[24px] ${ScienceGothic.className}`}
            >
              {translation("section1")}
            </Link>
            <ul className="flex flex-col list-disc gap-2 mt-6 px-5 text-[#334155] dark:text-[#B0B0B0] md:text-[16px] text-[15px]">
              <li><strong className="text-[#0F172A] dark:text-[#F5F5F5] text-[17px]">Ui/Ux Design</strong>: {translation("list1")}</li>
              <li><strong className="text-[#0F172A] dark:text-[#F5F5F5] text-[17px]">Next.js</strong>: {translation("list2")}</li>
              <li><strong className="text-[#0F172A] dark:text-[#F5F5F5] text-[17px]">Spring Boot</strong>: {translation("list3")}</li>
            </ul> 
          </section>  
          { /* Seção com tecnologias */}
          <section >
            <Link
              href={"/about#technologies"}
              id="technologies" 
              className={`text-[#0F172A] dark:text-[#F5F5F5] md:text-[28px] text-[24px] ${ScienceGothic.className}`}
            >
              {translation("section2")}
            </Link>
            <div className="flex flex-col list-disc gap-2 mt-6 text-[#334155] dark:text-[#B0B0B0] md:text-[18px] text-[16px]">
              { /* React */}
              <div className="flex gap-2 items-center">
                <Link 
                  className="flex gap-2 items-center underline text-blue-400 hover:text-blue-500"
                  href="https://react.dev/"
                  target="_blank"
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
                  className="flex gap-2 items-center underline text-blue-400 hover:text-blue-500"
                  href="https://nextjs.org/"
                  target="_blank"
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
                  className="flex gap-2 items-center underline text-blue-400 hover:text-blue-500"
                  href="https://tailwindcss.com/"
                  target="_blank"
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
                  className="flex gap-2 items-center underline text-blue-400 hover:text-blue-500"
                  href="https://www.typescriptlang.org/"
                  target="_blank"
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
                  className="flex gap-2 items-center underline text-blue-400 hover:text-blue-500"
                  href="https://spring.io/projects/spring-boot"
                  target="_blank"
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
            </div> 
          </section>
        </div>

      </div>
      { /* Linha divisora do footer */}
      <div className="w-full h-px bg-[#E2E8F0] dark:bg-[#2A2A2A]" />
      { /* Rodapé da pagina */ }
      <Footer />
    </div>
  )
}