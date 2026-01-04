import React from "react";
import NavBar from "./components/layout/NavBar";
import Hero from "./components/sections/Hero";

function App() {
  return (
    <div className="min-h-screen bg-black pb-[100vh]">
      <NavBar />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
