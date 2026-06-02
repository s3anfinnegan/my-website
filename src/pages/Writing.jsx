import React, { useState, useEffect } from "react";
import { X, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";

const writings = [
  // {
  //   id: "organic-matter",
  //   title: "The use case for household organic waste in biomethane production",
  //   excerpt: "Is household organic waste an overlooked feedstock for anaerobic digestors?",
  //   tag: "energy + startups",
  //   readTime: "6 min read",
  //   file: "/posts/organic-matter.txt"
  // }
];

const s = {
  wrap: { minHeight: "100vh", padding: "0 52px 64px" },
  back: {
    display: "inline-block",
    fontFamily: "var(--f-mono)",
    fontSize: 11,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "var(--muted)",
    textDecoration: "none",
    padding: "28px 0",
    transition: "color 0.15s",
  },
  emptyWrap: { maxWidth: 440, paddingTop: 8 },
  emptyText: { fontSize: 15, fontWeight: 300, lineHeight: 1.8, color: "var(--ink)", marginBottom: 40 },
  form: {
    border: "1px solid var(--rule)",
    borderRadius: 10,
    padding: 28,
    background: "var(--surface)",
  },
  formLabel: {
    display: "block",
    fontFamily: "var(--f-mono)",
    fontSize: 10,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "var(--muted)",
    marginBottom: 14,
  },
  formRow: { display: "flex", gap: 10, flexWrap: "wrap" },
  input: {
    flex: 1,
    minWidth: 180,
    padding: "10px 14px",
    border: "1px solid var(--rule)",
    borderRadius: 7,
    background: "var(--bg)",
    color: "var(--ink)",
    fontSize: 14,
    fontFamily: "var(--f-body)",
    outline: "none",
  },
  btn: {
    padding: "10px 18px",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: 7,
    background: "rgba(255,255,255,0.07)",
    color: "var(--ink)",
    fontFamily: "var(--f-mono)",
    fontSize: 10,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    cursor: "pointer",
    whiteSpace: "nowrap",
  },
  formNote: {
    marginTop: 12,
    fontFamily: "var(--f-mono)",
    fontSize: 10,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "var(--muted)",
  },
  articleCard: (hovered) => ({
    border: "1px solid var(--rule)",
    borderRadius: 8,
    padding: "22px 24px",
    cursor: "pointer",
    background: hovered ? "var(--surface)" : "transparent",
    transition: "background 0.15s",
    marginBottom: 12,
  }),
  articleTitle: { fontSize: 16, fontWeight: 500, color: "var(--ink)", marginBottom: 6 },
  articleExcerpt: { fontSize: 14, fontWeight: 300, color: "var(--muted)", marginBottom: 10 },
  articleMeta: { fontFamily: "var(--f-mono)", fontSize: 11, color: "var(--muted)" },
  overlay: {
    position: "fixed", inset: 0, zIndex: 50,
    display: "flex", alignItems: "center", justifyContent: "center", padding: 24,
  },
  overlayBg: {
    position: "absolute", inset: 0,
    background: "rgba(10,12,18,0.85)", backdropFilter: "blur(6px)",
  },
  modal: {
    position: "relative",
    width: "100%", maxWidth: 680, maxHeight: "90vh",
    background: "var(--surface)",
    border: "1px solid var(--rule)",
    borderRadius: 12,
    padding: "48px 52px",
    overflowY: "auto",
  },
  closeBtn: {
    position: "absolute", top: 20, right: 20,
    background: "none", border: "none", cursor: "pointer",
    color: "var(--muted)", padding: 4, lineHeight: 1,
  },
  modalTitle: {
    fontFamily: "var(--f-display)",
    fontSize: "clamp(22px, 3.5vw, 32px)",
    fontWeight: 700,
    color: "var(--ink)",
    lineHeight: 1.2,
    marginBottom: 12,
    paddingRight: 32,
  },
  modalMeta: {
    fontFamily: "var(--f-mono)", fontSize: 10,
    letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)",
    marginBottom: 36, paddingBottom: 28, borderBottom: "1px solid var(--rule)",
  },
  modalBody: { fontSize: 15, lineHeight: 1.8, fontWeight: 300, color: "var(--ink)", whiteSpace: "pre-wrap" },
};

const Writing = () => {
  const [activeArticle, setActiveArticle] = useState(null);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  useEffect(() => {
    if (activeArticle) {
      document.body.style.overflow = "hidden";
      setLoading(true);
      fetch(activeArticle.file)
        .then((r) => { if (!r.ok) throw new Error(); return r.text(); })
        .then((t) => { setContent(t); setLoading(false); })
        .catch(() => { setContent("Error loading article."); setLoading(false); });
    } else {
      document.body.style.overflow = "auto";
      setContent("");
    }
  }, [activeArticle]);

  return (
    <div style={s.wrap}>
      <Link to="/" style={s.back}>← Home</Link>

      {writings.length === 0 ? (
        <div style={s.emptyWrap}>
          <p style={s.emptyText}>If you have nothing good to say, don't say anything at all.</p>
          <form
            action="https://buttondown.com/api/emails/embed-subscribe/sean-finnegan"
            method="post"
            target="popupwindow"
            style={s.form}
          >
            <label htmlFor="bd-email" style={s.formLabel}>
              Get notified when I post something
            </label>
            <div style={s.formRow}>
              <input
                type="email" name="email" id="bd-email"
                placeholder="your@email.com" required style={s.input}
              />
              <button type="submit" style={s.btn}>Subscribe</button>
            </div>
            <p style={s.formNote}>Powered by Buttondown</p>
          </form>
        </div>
      ) : (
        <div>
          {writings.map((article, i) => (
            <div
              key={i}
              onClick={() => setActiveArticle(article)}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              style={s.articleCard(hoveredIdx === i)}
            >
              <h3 style={s.articleTitle}>{article.title}</h3>
              <p style={s.articleExcerpt}>{article.excerpt}</p>
              <span style={s.articleMeta}>{article.tag} · {article.readTime}</span>
            </div>
          ))}
        </div>
      )}

      {activeArticle && (
        <div style={s.overlay}>
          <div style={s.overlayBg} onClick={() => setActiveArticle(null)} />
          <div style={s.modal}>
            <button style={s.closeBtn} onClick={() => setActiveArticle(null)}>
              <X size={18} />
            </button>
            <h2 style={s.modalTitle}>{activeArticle.title}</h2>
            <p style={s.modalMeta}>{activeArticle.tag} · {activeArticle.readTime}</p>
            {loading ? (
              <div style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--muted)", padding: "40px 0" }}>
                <Loader2 size={18} style={{ animation: "spin 1s linear infinite" }} />
                <span style={{ fontFamily: "var(--f-mono)", fontSize: 11 }}>Loading</span>
              </div>
            ) : (
              <div style={s.modalBody}>{content}</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Writing;
