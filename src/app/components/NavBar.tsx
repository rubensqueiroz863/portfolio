import { BebasNeue } from "@/lib/fonts";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Photos", href: "/photos" },
];

export default function NavBar() {
  return (
    <header className="w-full bg-neutral-900">
      <nav className="flex items-center justify-between h-20 px-4 md:px-12 xl:px-2 text-white max-w-7xl mx-auto">
        <svg
          className="pointer-events-none absolute inset-0 w-full min-h-full opacity-[0.1]"
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
        {/* Logo */}
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

        {/* Navigation */}
        <ul className="flex items-center gap-4 md:gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm md:text-md xl:text-[15px] tracking-wide hover:text-neutral-400 transition-colors"
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
