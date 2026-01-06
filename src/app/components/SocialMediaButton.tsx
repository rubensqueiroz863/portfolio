import Link from "next/link";
import Image from "next/image";

// Interface com as propriedades usadas no componente GenericLink
interface GenericLinkProps {
  href: string;
  name: string;
  image: string;
  alt: string;
}

export default function GenericLink({ href, name, image, alt }: GenericLinkProps) {
  return (
    // Link que redireciona para respectivos links informado ao charmar o componente
    <Link
      href={href}
      className="flex items-center text-[15px] cursor-pointer group gap-1.5 text-[#F5F5F5]"
    >
      { /* Imagem da rede social */}
      <Image
        src={image}
        width={128}
        height={128}
        alt={alt}
        className="w-5 h-5 bg-[#B0B0B0] rounded-full object-cover transition-all group-hover:bg-[#F5F5F5]"
      />
      { /* Nome da rede social */}
      <p>{name}</p>
    </Link>
  );  
}