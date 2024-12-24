"use client";
import Configurator from "@/components/Configurator";
import Header from "@/components/Header";
import Preview from "@/components/Preview";
Configurator;
function Home() {
  return (
    <div onContextMenu={(e) => e.preventDefault()} className="min-h-screen">
      <Header />
      <main >
      <Preview />
      <Configurator />
      </main>
    </div>
  );
}
export default Home;
