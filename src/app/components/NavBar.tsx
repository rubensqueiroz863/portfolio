import Link from "next/link";
import Image from "next/image";

// Items usados no map do naviagation
const navItems = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Photos", href: "/photos" },
];

export default function NavBar() {
  return (
    // Header principal
    <header className="w-full bg-[#0F0F0F]">
      { /* Conteúdo principal */}
      <nav className="flex items-center justify-between h-20 px-4 md:px-12 xl:px-2 text-[#F5F5F5] max-w-7xl mx-auto">
        
        {/* Logo (manda para homepage) */}
        <Link href="/" className=" p-0.5 transition-all">
          <span className="">
            <Image
              src={"https://i.postimg.cc/HLJMbqbN/channels4-profile.jpg"}
              width={128}
              height={128}
              alt="My Logo | Minha logo"
              className="w-10 h-10"
            />
          </span>
        </Link>
        {/* Sistema de navegação com map */}
        <ul className="flex items-center gap-4 md:gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm md:text-[15px] xl:text-[16px] tracking-wide hover:text-[#B0B0B0] transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
