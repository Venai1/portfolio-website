import HeroSection from "@/components/HeroSection";
import TimelineDemo from "@/components/timeline-entries";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative bg-transparent overflow-hidden">
    <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>      
      <HeroSection/>
      <TimelineDemo/>
    </main>
  );
}

