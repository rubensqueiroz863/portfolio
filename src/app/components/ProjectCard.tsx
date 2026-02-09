import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  alt: string;
  src: string;
  name: string;
  description: string;
  url: string;
}

export default function ProjectCard({ alt, src, name, description, url }: Readonly<ProjectCardProps>) {
  return (
    <Link
      href={url}
      className="flex w-full border border-transparent shadow-sm hover:shadow-md transition-all hover:border-(--hover-border) items-center gap-4 bg-(--bg-card) hover:bg-(--bg-card) py-3 md:py-3 md:px-4 px-3 xl:px-4 rounded-md">
      <Image
        src={src}
        width={800}
        height={800}
        alt={alt}
        className="w-18 xl:w-20 h-auto"
      />
      <div className="flex flex-col gap-1.5 px-2.5  xl:p-4">
        <h1 className="font-bold text-(--text-main) text-[17px] xl:text-[18px]">{name}</h1>
        <p className="text-(--text-secondary) text-[14px] xl:text-[15px]">
          {description}
        </p>
      </div>
    </Link>
  )
}