import { ScienceGothic } from "./layout";


export default function HomePage() {
  return (
    <div className="w-full h-screen bg-neutral-900">
      <div className="w-full h-[0.1] bg-neutral-700"></div>
      <div className="flex flex-col gap-6 w-full items-center justify-center mt-30 px-20"> 
        <p className={`text-white text-4xl ${ScienceGothic.className}`}>Full-Stack Software Engineer (Next.js & Spring Boot)</p>
        <p className="text-neutral-400 text-[16px]">I'm Rubens Alves, a Full-Stack Software Engineer (Next.js & Spring Boot) passionate about learning and building open-source software that benefits developers and the world at large.</p>
      </div>
    </div>
  );
}
