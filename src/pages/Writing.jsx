import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const writings = [
//   {
//     title: "Why Cloud Engineering Is More About Tradeoffs Than Code",
//     excerpt:
//       "Cloud systems aren't about writing more code. They're about making better decisions under constraints.",
//     tag: "Cloud",
//     readTime: "6 min read",
//     content: `
// Cloud engineering is often misunderstood.

// People assume it's about Kubernetes manifests, Terraform modules, and scaling microservices.

// But in reality, it's about tradeoffs.

// • Cost vs reliability  
// • Speed vs safety  
// • Simplicity vs flexibility  

// Every architectural decision introduces constraints.
// And great engineers understand that cloud architecture is really decision architecture.

// The tooling changes.
// The tradeoffs remain.
// `,
//   },
//   {
//     title: "What Building a Startup Taught Me About Engineering",
//     excerpt:
//       "Shipping real software to real users changes how you think about 'perfect code'.",
//     tag: "Startups",
//     readTime: "5 min read",
//     content: `
// Co-founding a startup reshaped how I think about engineering.

// In university, you optimise for correctness.
// In production, you optimise for momentum.

// Perfect architecture means nothing if no one uses it.

// You learn quickly:

// • Speed matters  
// • Customers don't care about elegance  
// • Iteration beats perfection  

// And that perspective never leaves you.
// `,
//   },
];

const Writing = () => {
  const [activeArticle, setActiveArticle] = useState(null);

  useEffect(() => {
    if (activeArticle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [activeArticle]);

  return (
    <div className="min-h-[70vh]">

      <Link
        to="/"
        className="inline-block text-gray-300 hover:text-white mb-8 transition-colors"
      >
        ← Back to home
      </Link>

      {/* Article List or Empty State */}
      {writings.length === 0 ? (
        <div className="flex items-center justify-center min-h-[40vh] text-center">
          <p className="text-gray-300 text-lg">
            I haven't posted anything yet. <br />
            If you've nothing good to say, don't say anything at all. 
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {writings.map((article, index) => (
            <div
              key={index}
              onClick={() => setActiveArticle(article)}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 cursor-pointer hover:bg-white/20 transition-all"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-white">
                  {article.title}
                </h3>
                <span className="text-xs text-gray-300 bg-white/10 px-3 py-1 rounded-full">
            {article.tag}
          </span>
        </div>

        <p className="text-gray-300 mb-3">
          {article.excerpt}
        </p>

        <span className="text-sm text-gray-400">
          {article.readTime}
        </span>
      </div>
    ))}
  </div>
)}

{/* Subscribe Form */}
<form
  action="https://buttondown.com/api/emails/embed-subscribe/sean-finnegan"
  method="post"
  target="popupwindow"
  className="mt-16 max-w-md mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-white"
>
  <label htmlFor="bd-email" className="block text-sm text-gray-300 mb-2">
    Subscribe for new posts
  </label>

  <div className="flex gap-2">
    <input
      type="email"
      name="email"
      id="bd-email"
      placeholder="Enter your email"
      className="flex-1 px-3 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30"
      required
    />

    <input
      type="submit"
      value="Subscribe"
      className="px-4 py-2 rounded-md bg-white/20 hover:bg-white/30 transition cursor-pointer"
    />
  </div>

  <p className="text-xs text-gray-400 mt-3">
    <a
      href="https://buttondown.com/refer/sean-finnegan"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-white"
    >
      Powered by Buttondown
    </a>
  </p>
</form>

      {/* FULL SCREEN READING VIEW */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setActiveArticle(null)}
          />

          <div className="relative w-full max-w-4xl h-[90vh] bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-10 overflow-y-auto text-white shadow-2xl">
            
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-6 right-6 text-white hover:text-gray-300"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-3xl font-bold mb-4">
              {activeArticle.title}
            </h3>

            <p className="text-sm text-gray-400 mb-8">
              {activeArticle.tag} • {activeArticle.readTime}
            </p>

            <div className="whitespace-pre-line text-gray-200 leading-relaxed text-lg">
              {activeArticle.content}
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Writing;