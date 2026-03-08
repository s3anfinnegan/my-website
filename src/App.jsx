import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Career from "./components/Career";
import Writing from "./pages/Writing";

// --- Interactive Liquid Background Component ---
const LiquidBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#1a103d]">
      <div className="absolute inset-0 filter blur-[100px] opacity-60">
        <div
          className="absolute w-[500px] h-[500px] rounded-full bg-[#ff6b35] transition-all duration-700 ease-out"
          style={{
            left: mousePos.x - 250,
            top: mousePos.y - 250,
          }}
        />
        <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] rounded-full bg-[#4a2fbf] animate-pulse" />
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-[#ff4d4d] opacity-80" />
      </div>
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};

// --- Home Page Component ---
const Home = () => (
  // Reduced section spacing from space-y-32 to space-y-20
  <div className="space-y-20">
    {/* Hero & About Section */}
    <section className="max-w-3xl">
      {/* Reduced bottom margin from mb-12 to mb-6 */}
      <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter mb-6">
        Seán Finnegan
      </h1>
      
      <div className="space-y-4">
        <h2 className="text-xs uppercase tracking-[0.2em] text-orange-400 font-bold">
          About Me
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
          Welcome to my website! I built this to show off the things I've done (but also because a software engineer should have a website?). <br/>
          <br/>
          I'm a cloud engineer at <a href="https://www.fidelity.com/" className="text-orange-400 hover:underline">Fidelity Investments</a>, where I build platform tools for our engineering teams. 
          Previously I co-founded a <a href="https://www.independent.ie/business/irish/30-under-30-young-guns-who-are-shooting-for-the-stars/41045671.html" className="text-orange-400 hover:underline">startup</a> and I'm working on a few side projects so I can do that again.
          If you want to contact me, you can reach me on <a href="https://www.linkedin.com/in/sean-finnegan-/" className="text-orange-400 hover:underline">LinkedIn</a>.
          
        </p>
      </div>
    </section>

    {/* Experience Section */}
    <section>
      <h2 className="text-xs uppercase tracking-[0.2em] text-orange-400 font-bold mb-8">
        Experience
      </h2>
      <div className="text-white">
        <Career />
      </div>
    </section>

    {/* Writing Section */}
    <section className="max-w-3xl">
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-xs uppercase tracking-[0.2em] text-orange-400 font-bold">
          Writing
        </h2>
      </div>
      <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
          If by some rare experience, I write something that I think is worth sharing, I'll put it on this website.
          And if by something even rarer, you want to read it, you can do so <Link to="/writing" className="text-orange-400 hover:underline">here</Link>.
      </p>
    </section>
  </div>
);

// --- Main App Component ---
const App = () => {
  return (
    <Router>
      <div className="min-h-screen selection:bg-orange-500/30">
        <LiquidBackground />

        {/* Updated pt-32 md:pt-48 to pt-12 md:pt-20 to move content up */}
        <main className="max-w-5xl mx-auto px-6 pt-12 md:pt-20 relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/writing" element={<Writing />} />
          </Routes>
        </main>

        <footer className="max-w-5xl mx-auto px-6 py-12 opacity-30 text-white relative z-10 border-t border-white/5 mt-10">
          <p className="text-xs uppercase tracking-widest">
            © {new Date().getFullYear()} Seán Finnegan all rights reserved
          </p>
        </footer>
      </div>
    </Router>
  );
};

export default App;