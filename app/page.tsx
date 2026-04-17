import Nav from "@/components/nav";
import Hero from "@/components/sections/hero";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-red-300">
      <main className="flex flex-1 flex-col w-full max-w-7xl items-center bg-[#F7F7F7]">
        <Nav />
        <Hero />
      </main>
    </div>
  );
}
