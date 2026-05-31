import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowLeft } from "lucide-react";

const Route52 = () => {
  const [copied, setCopied] = useState(false);
  const email = "sean2001finnegan@gmail.com";

  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{
      minHeight: "80vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 64,
      paddingBottom: 64,
    }}>
      <div style={{
        width: "100%",
        maxWidth: 520,
        border: "1px solid var(--rule)",
        borderRadius: 16,
        padding: "48px",
        background: "var(--bg)",
      }}>
        <Link
          to="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontFamily: "var(--f-mono)",
            fontSize: 11,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--muted)",
            textDecoration: "none",
            marginBottom: 48,
            transition: "color 0.15s",
          }}
        >
          <ArrowLeft size={12} />
          Back to site
        </Link>

        <header style={{ marginBottom: 32 }}>
          <p style={{
            fontFamily: "var(--f-mono)",
            fontSize: 11,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: 12,
          }}>
            Route52 Engineering
          </p>
          <h1 style={{
            fontFamily: "var(--f-display)",
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: "clamp(32px, 5vw, 44px)",
            lineHeight: 1.1,
            color: "var(--ink)",
          }}>
            Need a hand with a website?
          </h1>
        </header>

        <div style={{ marginBottom: 40 }}>
          <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.75, color: "var(--ink)", marginBottom: 16 }}>
            I might be able to help. Send me an email and I'll get back to you.
          </p>
        </div>

        <button
          onClick={handleCopy}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "12px 24px",
            border: "1px solid var(--ink)",
            borderRadius: 40,
            background: copied ? "var(--accent)" : "var(--ink)",
            borderColor: copied ? "var(--accent)" : "var(--ink)",
            color: "var(--bg)",
            fontFamily: "var(--f-mono)",
            fontSize: 12,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            cursor: "pointer",
            transition: "background 0.2s, border-color 0.2s",
          }}
        >
          <Mail size={15} />
          {copied ? "Copied!" : "Copy email"}
        </button>

        <footer style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid var(--rule)" }}>
          <p style={{ fontStyle: "italic", color: "var(--muted)", fontSize: 15, fontFamily: "var(--f-display)" }}>
            All the best,{" "}
            <span style={{ color: "var(--ink)", fontWeight: 400 }}>Seán</span>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Route52;
