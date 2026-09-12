import Hero from "./components/Hero";
import Features from "./components/Features";
import Course from "./components/Course";
import Price from "./components/Price";
import Founders from "./components/Founders";

export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      <Hero />
      <Features />
      <Course />
      <Price />
      <Founders />
    </main>
  );
}
