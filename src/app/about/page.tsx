"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AboutPage() {
  const router = useRouter();

  return (
    <div className="bg-neutral-900 h-screen text-white">
      <div className="w-full h-[0.1] bg-neutral-700"></div>
      <div className="flex py-20 px-20 gap-4 justify-center flex-col">
        <div className="flex justify-start">
          <Image
            src={"https://i.postimg.cc/BQ7xHqWh/3da39-no-user-image-icon-27.png"}
            width={128}
            height={128}
            alt="My photo | Minha foto"
            className="w-80 h-80 rounded-xl"
          />
          
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => router.push("/")}
            className="relative cursor-pointer hover:border border-neutral-500 flex transition-all items-center w-68 h-10 text-white rounded-md bg-neutral-800"
          >
            <p className="absolute left-1/2 -translate-x-1/2">view resume</p>
            <Image
              src={"https://i.postimg.cc/x8XsLDj1/external-link-icon-white.png"}
              width={128}
              height={128}
              alt="redirect to my resume | Ir para meu resumo"
              className="w-5 h-5 absolute right-3"        
            />
          </button>
          <button className="w-10 flex justify-center items-center h-10 hover:border border-neutral-500 transition-all cursor-pointer bg-neutral-800 rounded-md">
            <Image
              src={"https://i.postimg.cc/4yTjsVYM/download-flat-icon-install-download-upload-load-symbol-simple-flat-free-png.png"}
              width={128}
              height={128}
              alt="Download Button | Botão de Download"
              className="w-4.5 h-4.5"
            />
          </button>
        </div>
        <Link 
          className="flex hover:text-neutral-400 gap-2 items-center"
          href={"mailto:rubensqueiroz863@gmail.com"}
        >
          <p className="text-2xl">&#9993;&#65038;</p>
          <p> rubensqueiroz863@gmail.com</p>
        </Link>
      </div>
    </div>
  )
}