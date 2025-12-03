import NavBar from "./components/NavBar";
import { ScienceGothic } from "./layout";

export default function Home() {
  return (
    <div className={`w-full h-screen bg-neutral-900 ${ScienceGothic.className}`}>
      <NavBar />
      <div className="w-full h-[0.1] bg-neutral-700"></div>
    </div>
  );
}
