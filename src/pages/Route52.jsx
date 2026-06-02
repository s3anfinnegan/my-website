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
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "48px 52px",
    }}>
      <div style={{
        width: "100%",
        maxWidth: 480,
        border: "1px solid var(--rule)",
        borderRadius: 12,
        padding: "44px 48px",
        background: "var(--surface)",
      }}>
        <Link
          to="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontFamily: "var(--f-mono)",
            fontSize: 10,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--muted)",
            textDecoration: "none",
            marginBottom: 44,
            transition: "color 0.15s",
          }}
        >
          <ArrowLeft size={11} />
          Back
        </Link>

        <header style={{ marginBottom: 28 }}>
          <p style={{
            fontFamily: "var(--f-mono)",
            fontSize: 10,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: 14,
          }}>
            Route52 Engineering
          </p>
          <h1 style={{
            fontFamily: "var(--f-display)",
            fontWeight: 700,
            fontSize: "clamp(28px, 4vw, 36px)",
            lineHeight: 1.1,
            color: "var(--ink)",
            letterSpacing: "-0.02em",
          }}>
            Need a hand with a website?
          </h1>
        </header>

        <p style={{
          fontSize: 15,
          fontWeight: 300,
          lineHeight: 1.75,
          color: "var(--ink)",
          marginBottom: 36,
        }}>
          I might be able to help. Send me an email and I'll get back to you.
        </p>

        <button
          onClick={handleCopy}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "11px 22px",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: 40,
            background: copied ? "var(--accent)" : "rgba(255,255,255,0.06)",
            borderColor: copied ? "var(--accent)" : "rgba(255,255,255,0.15)",
            color: "var(--ink)",
            fontFamily: "var(--f-mono)",
            fontSize: 11,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            cursor: "pointer",
            transition: "background 0.2s, border-color 0.2s",
          }}
        >
          <Mail size={14} />
          {copied ? "Copied!" : "Copy email"}
        </button>

        <footer style={{
          marginTop: 44,
          paddingTop: 28,
          borderTop: "1px solid var(--rule)",
        }}>
          <p style={{
            fontSize: 14,
            fontWeight: 300,
            color: "var(--muted)",
            fontStyle: "italic",
          }}>
            All the best,{" "}
            <span style={{ color: "var(--ink)", fontStyle: "normal" }}>Seán</span>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Route52;
