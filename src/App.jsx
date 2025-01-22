import React, { useState } from 'react';
import { Rocket, ChevronDown, Mail, Linkedin, Github, Terminal, Cloud, Database, Cpu, ExternalLink } from 'lucide-react';

const NewspaperIcon = () => (
  <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="120" height="120" fill="#f0f0f0"/>
    <path d="M100,0 L120,20 L120,120 L0,120 L0,0 Z" fill="#e0e0e0"/>
    <rect x="15" y="20" width="70" height="10" fill="#666"/>
    <rect x="15" y="35" width="50" height="6" fill="#999"/>
    <rect x="15" y="50" width="85" height="3" fill="#999"/>
    <rect x="15" y="58" width="85" height="3" fill="#999"/>
    <rect x="15" y="66" width="85" height="3" fill="#999"/>
    <rect x="15" y="74" width="85" height="3" fill="#999"/>
    <rect x="15" y="82" width="60" height="3" fill="#999"/>
    <rect x="15" y="95" width="30" height="5" fill="#666"/>
  </svg>
);

const ArticlePreview = ({ url, title, description }) => (
  <a 
    href={url}
    target="_blank"
    rel="noopener noreferrer" 
    className="block mt-4 bg-white/5 rounded-lg overflow-hidden hover:bg-white/10 transition-colors"
  >
    <div className="p-4 flex gap-4">
      <div className="w-24 h-24 bg-gray-100 rounded overflow-hidden flex-shrink-0">
        <NewspaperIcon />
      </div>
      <div className="flex-1">
        <h4 className="font-medium text-white mb-2 flex items-center gap-2">
          {title}
          <ExternalLink className="w-4 h-4" />
        </h4>
        <p className="text-gray-300 text-sm line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  </a>
);

const App = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const articles = [
    {
      url: "https://www.independent.ie/business/irish/30-under-30-young-guns-who-are-shooting-for-the-stars/41045671.html",
      title: "30 under 30: Young guns who are shooting for the stars",
      description: "The founders of 30 exciting young Irish companies gathered last week at CHQ, a building steeped in Dublin history"
    },
    {
      url: "https://issuu.com/sparkcrowdfunding/docs/top_100_most_ambitious_companies_in_ireland_2022/150",
      title: "Spark Crowdfunding - The Top 100 Most Ambitious Companies in Ireland 2022",
      description: "Spark Crowdfunding are delighted to announce the Top 100 Most Ambitious Companies in Ireland for 2022."
    },
    {
      url: "https://sharkpod.podbean.com/e/sharkpod-89-saving-the-world-one-receipt-at-a-time-the-founders-of-receipt-relay/",
      title: "SharkPod #89 ”Saving the World - One Receipt at a Time” -The Founders of Receipt Relay",
      description: "On this episode Luke and Mark chat to the 3 guys behind Receipt Relay - a tech startup based out of Galway Ireland"
    }
  ];

  const skills = [
    'Jenkins', 
    'Kubernetes', 
    'Terraform/OpenTofu', 
    'AWS',
    'React.js',
    'Node.js',
    'Restful APIs',
    'Docker',
    'Agile'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500">
      {/* Navigation Bar */}
      <nav className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-white font-bold text-xl">Seán Finnegan</div>
          <div className="relative">
            <button
              onClick={() => setIsContactOpen(!isContactOpen)}
              className="flex items-center space-x-2 text-white hover:text-gray-200 transition-colors"
            >
              <span>Contact Me</span>
              <ChevronDown className={`w-4 h-4 transform transition-transform ${isContactOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isContactOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10">
                <a href="mailto:sean2001finnegan@gmail.com" className="flex items-center px-4 py-2 hover:bg-gray-100">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>Email</span>
                </a>
                <a href="https://linkedin.com/in/sean-finnegan" className="flex items-center px-4 py-2 hover:bg-gray-100">
                  <Linkedin className="w-4 h-4 mr-2" />
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/s3anfinnegan" className="flex items-center px-4 py-2 hover:bg-gray-100">
                  <Github className="w-4 h-4 mr-2" />
                  <span>GitHub</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center text-white mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Associate Software Engineer 
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <div className="flex items-center mb-4">
              <Cloud className="w-8 h-8 text-white mr-3" />
              <h2 className="text-2xl font-bold text-white">Current Role</h2>
            </div>
            <p className="text-gray-200">
              Joined Fidelity Investments in 2021 as a summer intern working with FCAT, Fidelity's applied technology team. 
              Rejoined Fidelity after graduating as an associate software engineer, working extensively with NoSql databases in 
              AWS to provide scalable solutions for our internal units. 
            </p>
            <p className="text-gray-200 mt-4">
              Also working with a small team to deliver user-centric 
              GenAI applications, heavily involved in user interviews, product design and application development/ deployment.  
            </p>
            <p className="text-gray-200 mt-4">
              Recently a member of Fidelity's Ireland Innovation Council.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <div className="flex items-center mb-4">
              <Terminal className="w-8 h-8 text-white mr-3" />
              <h2 className="text-2xl font-bold text-white">Startup Experience</h2>
            </div>
            <p className="text-gray-200">
            Co-Founded Receipt Relay in college, a retail software solution that allows your business to provide eReceipts 
            without the need for hardware.
            </p>
            <p className="text-gray-200 mt-4">
            After launching an MVP with customers in Galway, went on to raised over €60,000 in 
            funding from Enterprise Ireland, before pivoting towards leveraging the purchase data in receipts to build detailed 
            customer profiles for large retail chains.
            </p>
            <p className="text-gray-200 mt-4">
            Ultimately Receipt Relay failed to gain traction but this was a huge 
            lesson on building things that matter. Later joined an EdTech startup in a DevOps engineering role before 
            starting with Fidelity.
            </p>
          </div>
        </div>

        {/* Articles Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
          <div className="flex items-center mb-6">
            <Rocket className="w-8 h-8 text-white mr-3" />
            <h2 className="text-2xl font-bold text-white">Startup Articles</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {articles.map((article, index) => (
              <ArticlePreview key={index} {...article} />
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 mt-8">
          <div className="flex items-center mb-6">
            <Cpu className="w-8 h-8 text-white mr-3" />
            <h2 className="text-2xl font-bold text-white">Technical Skills</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill) => (
              <div key={skill} className="bg-white/5 rounded-lg p-4 text-center">
                <span className="text-white font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-8 bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
          <div className="flex items-center mb-4">
            <Database className="w-8 h-8 text-white mr-3" />
            <h2 className="text-2xl font-bold text-white">Education</h2>
          </div>
          <p className="text-gray-200">
            University of Galway, BEng in Electronic and Computer Engineering (2019-2023)
          </p>
          <ul className="text-gray-200 mt-2">
            <li>- Student Entrepreneur of The Year Runner Up 2022</li> 
            <li>- Start100 Cohort Member 2022</li> 
            <li>- Member of the Engineering Society 2019-2023</li> 
            <li>- Student Ambassador 2019-2020</li> 
          </ul>
          
          <ArticlePreview
          url= "https://drive.google.com/file/d/1Z8JFLn8-KENgdyOBgnzMwQSR85sZ7nLj/view?usp=sharing"
          title= "Thesis: Automating expense uploading through Application Programmable Interface (API) integrations"
          description= "Exploring a novel approach to expense uploading, examining how a uniform schema for POS APIs could enable a paperless solution and retire OCR applications"
          />
        </div>
      </main>
      {/* Footer */}
      <footer className="bg-white/10 backdrop-blur-md py-4 border-t border-white/20 text-center">
        <p className="text-gray-200 text-sm">
          © Seán Finnegan. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;