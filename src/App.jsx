import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Career from "./components/Career";
import Articles from "./components/Articles";
import Education from "./components/Education";
import Projects from "./pages/Projects";
import Writing from "./pages/Writing";
import { ChevronDown, Cog, Linkedin, Github, NotebookPen } from "lucide-react";

const Home = () => (
  <>
    {/* Hero Section */}
    <div className="text-center text-white mb-16">
      <h1 className="text-3xl md:text-5xl font-bold mb-6">
        Seán Finnegan
      </h1>
      <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
        Welcome to my website. I'm a cloud engineer at Fidelity with a degree in electronic and computer engineering.
        I previously co-founded a startup called Receipt Relay. I'm also working on various side projects that interest me.
      </p>
    </div>

    <Career />
    <Articles />
    <Education />
  </>
);

const App = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-[#4a2fbf] via-[#ff6b35] to-[#ff4d4d] animate-gradient-x">
        
        {/* Navigation Bar */}
        <nav className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
            
            <Link to="/" className="text-white font-bold text-xl mb-4 sm:mb-0">
              Seán Finnegan
            </Link>

            <div className="relative">
              <button
                onClick={() => setIsContactOpen(!isContactOpen)}
                className="flex items-center space-x-2 text-white hover:text-gray-200 transition-colors"
              >
                <span>Resources</span>
                <ChevronDown
                  className={`w-4 h-4 transform transition-transform ${
                    isContactOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isContactOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10">
                  
                  <a
                    href="https://linkedin.com/in/sean-finnegan-"
                    className="flex items-center px-4 py-2 hover:bg-gray-100"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href="https://github.com/s3anfinnegan"
                    className="flex items-center px-4 py-2 hover:bg-gray-100"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    <span>GitHub</span>
                  </a>

                  <Link
                    to="/projects"
                    onClick={() => setIsContactOpen(false)}
                    className="flex items-center px-4 py-2 hover:bg-gray-100"
                  >
                    <Cog className="w-4 h-4 mr-2" />
                    <span>Projects</span>
                  </Link>

                  <Link
                    to="/writing"
                    onClick={() => setIsContactOpen(false)}
                    className="flex items-center px-4 py-2 hover:bg-gray-100"
                  >
                    <NotebookPen className="w-4 h-4 mr-2" />
                    <span>Writing</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-4 py-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/writing" element={<Writing />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-white/10 backdrop-blur-md py-4 border-t border-white/20 text-center">
          <p className="text-gray-200 text-sm">
            © Seán Finnegan. All rights reserved.
          </p>
        </footer>
      </div>
    </Router>
  );
};

export default App;