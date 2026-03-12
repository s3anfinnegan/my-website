import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft } from 'lucide-react';

const Route52 = () => {
  const [copied, setCopied] = useState(false);
  const email = "sean2001finnegan@gmail.com";

  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    
    // Reset the "Copied" text after 2 seconds
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      {/* The Card */}
      <div className="max-w-xl w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group">
        
        {/* Subtle decorative glow in the corner of the card */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-orange-500/10 blur-[60px] rounded-full group-hover:bg-orange-500/20 transition-colors duration-700" />

        <Link 
          to="/" 
          className="inline-flex items-center text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft className="w-3 h-3 mr-2" />
          View the rest of my website
        </Link>

        <header className="mb-8">
          <div className="text-orange-400 font-mono text-sm mb-2">Welcome to the webpage!</div>
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Route52 Engineering
          </h1>
        </header>

        <div className="space-y-6 text-lg text-gray-300 font-light leading-relaxed">
          <p>
            If you're looking for a hand setting up a website, I might be able to help.
          </p>
          
          <p>
            Send me an email here and I'll get in touch.
          </p>

          <button 
            onClick={handleCopy}
            className={`inline-flex items-center space-x-3 px-6 py-3 rounded-full font-medium transition-all transform hover:scale-105 active:scale-95 mt-4 ${
                copied ? 'bg-green-500 text-white' : 'bg-white text-black hover:bg-orange-500 hover:text-white'
            }`}
            >
            <Mail className="w-5 h-5" />
            <span>{copied ? "Email Copied!" : "Click to copy email"}</span>
            </button>
        </div>

        <footer className="mt-12 pt-8 border-t border-white/5">
          <p className="italic text-gray-400">
            All the best, <br />
            <span className="text-white font-medium not-italic">Seán</span>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Route52;