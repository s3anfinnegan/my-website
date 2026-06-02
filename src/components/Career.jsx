import { useEffect, useRef } from "react";

const milestones = [
  {
    year: "2026",
    text: "(Present day) I left the cloud databse team and I am currently building agentic tools for the thousands of engineers that work on Fidelity's products and services.",
    tag: "engineering",
  },
  {
    year: "2026",
    text: "I climbed Lugnaquilla - the last of the four Irish peaks left on my list",
    tag: "life",
  },
  {
    year: "2025",
    text: "I worked on a bunch of side of desk projects including an AI avatar demo for a new service. I also got my first promotion to the lofty position of engineer II",
    tag: "engineering",
  },
  {
    year: "2025",
    text: "I took a few weeks off work to travel around Bali, the Gili Islands before heading to Sydney and spending a few nights camping in the bush. Back in Ireland, I spent my weekends hiking, camping, fishing - anything that got me outdoors",
    tag: "life",
  },
  {
    year: "2024",
    text: "I left Breakthrough Maths for a grad role at Fidelity Investments where I subsequently joined the cloud databases team to build database deployment automations",
    tag: "engineering",
  },
  {
    year: "2024",
    text: "I ran my first marathon, a bunch of half marathons and completed my first sprint triathlon. I visited nine countries over the year including five new ones",
    tag: "life",
  },
  {
    year: "2023",
    text: "After a summer of introspection, I wanted to build on my technical abilities so I joined Breakthrough Maths, an edtech startup, as their third engineering hire. I worked closely with the CTO and split my time between building and delivering maths classes to our 800 users (who needs QA engineers when you have users!)",
    tag: "engineering",
  },
  {
    year: "2023",
    text: "I graduated from my B.Eng in Electronic and Computer Engineering. Unsure of what direction I wanted to go, I spent the summer working in a bar before travelling around the US and parts of Europe.",
    tag: "life",
  },
  {
    year: "2022",
    text: "I went full-time on Receipt Relay. We secured an LOI from a major European retailer, but we ultimately didn't reach product-market fit so I returned to college to finsih my degree",
    tag: "startup",
  },
  {
    year: "2021",
    text: "We launched the Receipt Relay MVP with 5 local businesses and raised €50,000 in pre-seed funding from Enterprise Ireland while I was studying for Christmas exams",
    tag: "startup",
  },
  {
    year: "2021",
    text: "I interned for the summer as a software engineer at Fidelity Investments. Receipt Relay partnered with a local POS provider to deliver e-receipts to customers through QR codes",
    tag: "engineering",
  },
  {
    year: "2020",
    text: "I elected to study Electronic and Computer Engineering - one of the most influential decisions I've made in my life to date",
    tag: "education",
  },
  {
    year: "2019",
    text: "I started college and I co-founded a startup with two friends which we named Receipt Relay. We were all working jobs where receipt waste was real and we wanted to solve it",
    tag: "startup",
  },
  {
    year: "2019",
    text: "I sat my Leaving Cert with engineering at the University of Galway as my number one (and only) CAO choice. Everywhere I looked, engineers seemed to make this biggest impact on the world around us and I wanted to be a part of that",
    tag: "life",
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
