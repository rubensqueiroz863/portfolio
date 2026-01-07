"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import NavBar from "../components/NavBar";
import { useTranslations } from "next-intl";
import Footer from "../components/Footer";

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
      <div className="flex py-20 px-20 gap-4 justify-center flex-col">
        { /* Minha foto de perfil */}
        <div className="flex justify-start">
          <Image
            src={"https://i.postimg.cc/BQ7xHqWh/3da39-no-user-image-icon-27.png"}
            width={128}
            height={128}
            alt="My photo | Minha foto"
            className="w-80 h-80 rounded-xl"
          />
        </div>
        { /* Div dos botões sobre o resumé */}
        <div className="flex gap-2">
          { /* Botão que leva ao resumé */}
          <Link 
            href={"https://s.craft.me/CnNhwPIVj6zztw"}
            className="relative cursor-pointer hover:bg-[#CBD5E1] dark:hover:bg-[#3A3A3A] flex transition-all items-center w-68 h-10 text-[#0F172A] dark:text-[#F5F5F5] rounded-md bg-[#FFFFFF] dark:bg-[#1C1C1C] border-[0.1] border-[#E2E8F0] dark:border-[#2A2A2A]"
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
            className="w-10 flex justify-center items-center h-10 hover:bg-[#CBD5E1] dark:hover:bg-[#3A3A3A] transition-all cursor-pointer bg-[#FFFFFF] dark:bg-[#1C1C1C] border-[0.1] border-[#E2E8F0] dark:border-[#2A2A2A] rounded-md"
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
      { /* Linha divisora do footer */}
      <div className="w-full h-px bg-[#E2E8F0] dark:bg-[#2A2A2A] mt-30 md:mt-35" />
      { /* Rodapé da pagina */ }
      <Footer />
    </div>
  )
}