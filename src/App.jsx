import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Career from "./components/Career";
import Writing from "./pages/Writing";
import Route52 from "./pages/Route52";
import "./styles/App.css";

const Home = () => (
  <div>
    <section className="hero">
      <h1 className="hero-name">
        Seán<br />Finnegan
      </h1>
    </section>

    <section className="section">
      <span className="section-label">About</span>
      <div className="prose">
        <p>
          Welcome to my website! I built this to show off the things I've done (but also because a 
          software engineer should have a website?).
          
          I'm an engineer on Fidelity Investments' agentic workflows team, where I build
          tools that help developers work with frontier AI models. Before that I spent two
          years on the cloud database team, and before that I co-founded{" "}
          <a
            href="https://www.independent.ie/business/irish/30-under-30-young-guns-who-are-shooting-for-the-stars/41045671.html"
            target="_blank"
            rel="noreferrer"
          >
            Receipt Relay
          </a>{" "}
          — we raised €50k, secured an LOI from Lidl Ireland, and learned a lot about
          what product-market fit isn't.
        </p>
        <p>
          I'm based in Galway, Ireland. Outside of work I like being outdoors — hiking,
          running, and travelling when I can.
        </p>
        <nav className="contact-links">
          <a
            href="https://www.linkedin.com/in/sean-finnegan-/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://www.github.com/s3anfinnegan"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </nav>
      </div>
    </section>

    <section className="section">
      <span className="section-label">Career</span>
      <Career />
    </section>

    <section className="section">
      <span className="section-label">Writing</span>
      <div className="prose">
        <p>
          In the rare case I write something worth sharing, I put it{" "}
          <Link to="/writing">here</Link>.
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
