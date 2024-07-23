import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main >
      <div className="border border-black m-[24px] md:m-[32px]">
        <Hero />
      </div>
    </main>
  );
}
