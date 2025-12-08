import Link from "next/link"
import { ScienceGothic } from "../layout";

export default function NavBar() {
  return (
    <div className="flex items-center justify-between px-8 w-full text-white h-20 bg-neutral-900">
      <Link href={"/"}>
        <p className={`${ScienceGothic.className}`}>Rubens Dev</p>
      </Link>
      <div className="flex justify-between">
        <Link href="/about">
          <p>About</p>
        </Link>
      </div>
      <div></div>
    </div>
  );
}