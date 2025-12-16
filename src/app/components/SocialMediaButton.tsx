import Link from "next/link";
import Image from "next/image";

interface GenericLinkProps {
  href: string;
  text: string;
  image: string;
  alt: string;
}

export default function GenericLink({ href, text, image, alt }: GenericLinkProps) {
  return (
    <Link
      href={href}
      className="flex items-center text-[15px] cursor-pointer group gap-1.5 text-white"
    >
      <Image
        src={image}
        width={128}
        height={128}
        alt={alt}
        className="w-5 h-5 bg-neutral-400 rounded-full object-cover transition-all group-hover:bg-white"
      />
      <p>{text}</p>
    </Link>
  );  
}