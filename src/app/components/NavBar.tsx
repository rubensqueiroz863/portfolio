import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

type NavItem = {
  label: string;
  href: string;
};

export default function NavBar() {
  const translation = useTranslations("NavBar");
  const navItems = translation.raw("items") as NavItem[];

  return (
    // Header principal
    <header className="w-full bg-[#F8FAFC] dark:bg-[#0F0F0F]">
      { /* Conteúdo principal */}
      <nav className="flex items-center justify-between h-16 md:h-18 px-6 md:px-12 xl:px-2 text-[#0F172A] dark:text-[#F5F5F5] max-w-7xl mx-auto">
        
        {/* Logo (manda para homepage) */}
        <Link href="/" className=" p-0.5 transition-all">
          <span className="">
            <Image
              src={"https://i.postimg.cc/HLJMbqbN/channels4-profile.jpg"}
              width={128}
              height={128}
              alt="My Logo | Minha logo"
              className="w-8 md:w-10 h-auto"
            />
          </span>
        </Link>
        {/* Sistema de navegação com map */}
        <ul className="flex items-center gap-4 md:gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm md:text-[15px] xl:text-[16px] tracking-wide hover:text-[#334155] dark:hover:text-[#B0B0B0] transition-colors"
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
