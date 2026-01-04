import React from "react";
import NavBar from "./components/layout/NavBar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";

function App() {
  return (
    <div className="min-h-screen bg-black pb-[100vh]">
      <NavBar />
      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
}

export default App;
