import Link from "next/link";
import { BebasNeue } from "../layout";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Photos", href: "/photos" },
];

export default function NavBar() {
  return (
    <header className="w-full bg-neutral-900">
      <nav className="flex items-center justify-between h-20 px-8 text-white max-w-7xl mx-auto">
        
        {/* Logo */}
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <span className={`text-3xl ${BebasNeue.className}`}>
            Rubens Dev
          </span>
        </Link>

        {/* Navigation */}
        <ul className="flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-md tracking-wide hover:text-neutral-400 transition-colors"
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
