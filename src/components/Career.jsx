import { useEffect, useRef } from "react";

const milestones = [
  {
    year: "2026",
    text: "Joined Fidelity's agentic workflows team — building AI-powered developer tools with frontier models.",
    tag: "engineering",
  },
  {
    year: "2025",
    text: "Promoted to Engineer II. Travelled Indonesia and Sydney. Thru-hiked the Maumturks.",
    tag: "life",
  },
  {
    year: "2024",
    text: "Joined Fidelity's cloud database team, building deployment automation tools.",
    tag: "engineering",
  },
  {
    year: "2023",
    text: "Joined Breakthrough Maths as their third engineering hire.",
    tag: "engineering",
  },
  {
    year: "2023",
    text: "Graduated in electronic and computer engineering. Spent the summer travelling the US and Europe.",
    tag: "life",
  },
  {
    year: "2022",
    text: "Went full-time on Receipt Relay. Secured an LOI from a major European retailer, but didn't reach product-market fit. Returned to college.",
    tag: "startup",
  },
  {
    year: "2021",
    text: "Launched the Receipt Relay MVP with 5 businesses. Raised €50,000 in pre-seed funding from Enterprise Ireland.",
    tag: "startup",
  },
  {
    year: "2021",
    text: "Summer internship as a software engineer at Fidelity Investments. Receipt Relay partnered with a local POS provider.",
    tag: "engineering",
  },
  {
    year: "2020",
    text: "Chose electronic and computer engineering as my degree stream.",
    tag: "education",
  },
  {
    year: "2019",
    text: "Co-founded Receipt Relay with two friends — the easiest way to get an e-receipt.",
    tag: "startup",
  },
  {
    year: "2019",
    text: "Finished secondary school. Started studying engineering at University of Galway.",
    tag: "education",
  },
];

const Career = () => {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -32px 0px" }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="timeline">
      <div className="timeline-spine" />
      {milestones.map((m, i) => (
        <div
          key={i}
          ref={(el) => (refs.current[i] = el)}
          className="milestone"
        >
          <span className="milestone-year">{m.year}</span>
          <div className="milestone-dot" />
          <p className="milestone-text">{m.text}</p>
          <span className="milestone-tag">{m.tag}</span>
        </div>
      ))}
    </div>
  );
};

export default Career;
