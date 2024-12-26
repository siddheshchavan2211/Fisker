"use client";
import Configurator from "@/components/Configurator";
import Header from "@/components/Header";
import Preview from "@/components/Preview";
import { useState } from "react";

function Home() {
  const [state, setState] = useState({
    exterior: "Black Pearl",
    wheel: "Aerostealth",
    interior: "Black",
  });

  const handleStateChange = (option, value) => {
    setState((prevState) => ({
      ...prevState,
      [option]: value,
    }));
  };
  return (
    <div onContextMenu={(e) => e.preventDefault()} className="min-h-screen">
      <Header />
      <main className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-2 sm:flex-row sm:gap-4">
        <section className="w-full sm:w-3/4">
        <Preview {...state} />
        </section>
        <aside className="w-full  sm:w-1/4">
        <Configurator onChange={handleStateChange} {...state} />
        </aside>
      </main>
    </div>
  );
}
export default Home;
