import HeroSection from "../components/layouts/HeroSection";
import FloatingToolbar from "../components/layouts/FloatingToolbar";

export default function Home() {
  return (
      <main className="min-h-screen bg-white dark:bg-black pb-20">
           <FloatingToolbar />
           <HeroSection />
      </main>
  );
}
