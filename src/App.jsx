import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Career from "./components/Career";
import Writing from "./pages/Writing";
import Route52 from "./pages/Route52";
import "./styles/App.css";

const Home = () => (
  <div>
    <section className="hero">
      <div>
        <h1 className="hero-name">Seán Finnegan</h1>
        <p className="hero-tagline">Software Engineer · Galway, Ireland</p>
      </div>
      <nav className="hero-links">
        <a href="https://www.linkedin.com/in/sean-finnegan-/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://www.github.com/s3anfinnegan" target="_blank" rel="noreferrer">GitHub</a>
      </nav>
    </section>

    <div className="two-col">
      <aside className="col-about">
        <span className="section-label">About</span>
        <div className="prose">
          <p>
            Welcome to my website! This exists to show off the things I've worked on/ am working on.
          </p>
          <p>
            I'm a software engineer who spent the last few years at Fidelity Investments building agentic tools to help engineers ship fast and securely, and before that working as a cloud engineer. Before Fidelity, I co-founded{" "}
            <a href="https://www.independent.ie/business/irish/30-under-30-young-guns-who-are-shooting-for-the-stars/41045671.html"
              target="_blank"
              rel="noreferrer"
            > a startup </a>{" "} and I spend a lot of time playing with ideas and side projects.

          </p>
          <p>
            If you want to contact me, you can reach me on <a href="https://www.linkedin.com/in/sean-finnegan-/" target="_blank" rel="noreferrer">LinkedIn</a>. 
            Stuff that I'm publicly working on can be found on my <a href="https://www.github.com/s3anfinnegan" target="_blank" rel="noreferrer">GitHub</a>.
          </p>
        </div>
      </aside>

      <main className="col-career">
        <span className="section-label">Career</span>
        <Career />
      </main>
    </div>

    <section className="section-writing">
      <span className="section-label">Writing</span>
      <div className="prose">
        <p>
          In the rare case I write something that I think is worth sharing, I'll put it on this website. And in the rarer case you want to read it, you can do so <Link to="/writing">here</Link>.
        </p>
      </div>
    </section>
  </div>
);

const App = () => (
  <Router>
    <div className="site-wrap">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/route52" element={<Route52 />} />
        </Routes>
      </main>
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Seán Finnegan</p>
      </footer>
    </div>
  </Router>
);

export default App;
