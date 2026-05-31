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

const Writing = () => {
  const [activeArticle, setActiveArticle] = useState(null);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (activeArticle) {
      document.body.style.overflow = "hidden";
      setLoading(true);
      fetch(activeArticle.file)
        .then((res) => {
          if (!res.ok) throw new Error("Failed to load file");
          return res.text();
        })
        .then((text) => { setContent(text); setLoading(false); })
        .catch(() => { setContent("Error loading article content."); setLoading(false); });
    } else {
      document.body.style.overflow = "auto";
      setContent("");
    }
  }, [activeArticle]);

  return (
    <div style={{ minHeight: "70vh", paddingTop: "64px", paddingBottom: "64px" }}>
      <Link to="/" className="page-back">← Home</Link>

      {writings.length === 0 ? (
        <div style={{ maxWidth: 480 }}>
          <p style={{
            fontSize: 17,
            fontWeight: 300,
            lineHeight: 1.75,
            color: "var(--ink)",
            marginBottom: 40,
          }}>
            Nothing here yet.<br />
            <em style={{ color: "var(--muted)", fontFamily: "var(--f-display)", fontSize: 20 }}>
              "If you've nothing good to say, don't say anything at all."
            </em>
          </p>

          <form
            action="https://buttondown.com/api/emails/embed-subscribe/sean-finnegan"
            method="post"
            target="popupwindow"
            style={{
              border: "1px solid var(--rule)",
              borderRadius: 12,
              padding: "32px",
              background: "var(--surface)",
            }}
          >
            <label
              htmlFor="bd-email"
              style={{
                display: "block",
                fontFamily: "var(--f-mono)",
                fontSize: 11,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--muted)",
                marginBottom: 16,
              }}
            >
              Get notified when I post something
            </label>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <input
                type="email"
                name="email"
                id="bd-email"
                placeholder="your@email.com"
                required
                style={{
                  flex: 1,
                  minWidth: 200,
                  padding: "10px 14px",
                  border: "1px solid var(--rule)",
                  borderRadius: 8,
                  background: "var(--bg)",
                  color: "var(--ink)",
                  fontSize: 15,
                  fontFamily: "var(--f-body)",
                  outline: "none",
                }}
              />
              <button
                type="submit"
                style={{
                  padding: "10px 20px",
                  border: "1px solid var(--ink)",
                  borderRadius: 8,
                  background: "var(--ink)",
                  color: "var(--bg)",
                  fontFamily: "var(--f-mono)",
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                }}
              >
                Subscribe
              </button>
            </div>
            <p style={{
              marginTop: 14,
              fontFamily: "var(--f-mono)",
              fontSize: 10,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--muted)",
            }}>
              Powered by Buttondown
            </p>
          </form>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {writings.map((article, index) => (
            <div
              key={index}
              onClick={() => setActiveArticle(article)}
              style={{
                border: "1px solid var(--rule)",
                borderRadius: 10,
                padding: "24px",
                cursor: "pointer",
                background: "var(--bg)",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "var(--surface)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "var(--bg)"}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                <h3 style={{ fontSize: 17, fontWeight: 500, color: "var(--ink)", paddingRight: 16 }}>
                  {article.title}
                </h3>
                <span style={{
                  fontFamily: "var(--f-mono)",
                  fontSize: 10,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  whiteSpace: "nowrap",
                }}>
                  {article.tag}
                </span>
              </div>
              <p style={{ fontSize: 15, color: "var(--muted)", marginBottom: 10, fontWeight: 300 }}>
                {article.excerpt}
              </p>
              <span style={{ fontFamily: "var(--f-mono)", fontSize: 11, color: "var(--muted)" }}>
                {article.readTime}
              </span>
            </div>
          ))}
        </div>
      )}

      {activeArticle && (
        <div style={{ position: "fixed", inset: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
          <div
            style={{ position: "absolute", inset: 0, background: "rgba(17,17,16,0.6)", backdropFilter: "blur(4px)" }}
            onClick={() => setActiveArticle(null)}
          />
          <div style={{
            position: "relative",
            width: "100%",
            maxWidth: 720,
            maxHeight: "90vh",
            background: "var(--bg)",
            borderRadius: 16,
            padding: "48px 56px",
            overflowY: "auto",
            boxShadow: "0 24px 80px rgba(0,0,0,0.18)",
          }}>
            <button
              onClick={() => setActiveArticle(null)}
              style={{
                position: "absolute",
                top: 24,
                right: 24,
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--muted)",
                padding: 4,
              }}
            >
              <X size={20} />
            </button>

            <header style={{ marginBottom: 40, paddingBottom: 32, borderBottom: "1px solid var(--rule)" }}>
              <h2 style={{
                fontFamily: "var(--f-display)",
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 300,
                fontStyle: "italic",
                lineHeight: 1.15,
                color: "var(--ink)",
                marginBottom: 12,
                paddingRight: 40,
              }}>
                {activeArticle.title}
              </h2>
              <p style={{ fontFamily: "var(--f-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)" }}>
                {activeArticle.tag} · {activeArticle.readTime}
              </p>
            </header>

            {loading ? (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "60px 0", color: "var(--muted)" }}>
                <Loader2 size={24} style={{ marginBottom: 12, animation: "spin 1s linear infinite" }} />
                <p style={{ fontFamily: "var(--f-mono)", fontSize: 12, letterSpacing: "0.1em" }}>Loading</p>
              </div>
            ) : (
              <>
                <div style={{ fontSize: 16, lineHeight: 1.8, fontWeight: 300, color: "var(--ink)", whiteSpace: "pre-wrap" }}>
                  {content}
                </div>

                <div style={{ marginTop: 64, paddingTop: 40, borderTop: "1px solid var(--rule)" }}>
                  <form
                    action="https://buttondown.com/api/emails/embed-subscribe/sean-finnegan"
                    method="post"
                    target="popupwindow"
                    style={{ maxWidth: 440, margin: "0 auto", textAlign: "center" }}
                  >
                    <p style={{ fontWeight: 500, marginBottom: 8, fontSize: 16 }}>Enjoyed this?</p>
                    <p style={{ color: "var(--muted)", fontSize: 14, fontWeight: 300, marginBottom: 20 }}>
                      Get notified when I post something new.
                    </p>
                    <div style={{ display: "flex", gap: 10 }}>
                      <input
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        required
                        style={{
                          flex: 1,
                          padding: "10px 14px",
                          border: "1px solid var(--rule)",
                          borderRadius: 8,
                          fontSize: 15,
                          fontFamily: "var(--f-body)",
                          outline: "none",
                          background: "var(--bg)",
                          color: "var(--ink)",
                        }}
                      />
                      <input
                        type="submit"
                        value="Subscribe"
                        style={{
                          padding: "10px 20px",
                          border: "none",
                          borderRadius: 8,
                          background: "var(--ink)",
                          color: "var(--bg)",
                          fontFamily: "var(--f-mono)",
                          fontSize: 11,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          cursor: "pointer",
                        }}
                      />
                    </div>
                  </form>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Writing;
