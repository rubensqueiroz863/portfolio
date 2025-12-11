"use client";

import Image from "next/image";
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
        <button 
          onClick={() => router.push("/")}
          className="relative cursor-pointer hover:bg-neutral-700 flex transition-all items-center w-80 h-10 text-white rounded-md bg-neutral-800"
        >
          <p className="absolute left-1/2 -translate-x-1/2">view resume</p>
          <Image
            src={"https://i.postimg.cc/x8XsLDj1/external-link-icon-white.png"}
            width={128}
            height={128}
            alt="redirect to resume"
            className="w-5 h-5 absolute right-3"        
          />
        </button>
      </div>
    </div>
  )
}