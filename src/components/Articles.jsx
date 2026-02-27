import { Rocket, Newspaper, Mail, Linkedin, Github, Terminal, Cloud, Database, Cpu, ExternalLink, BriefcaseBusiness } from 'lucide-react';


const Articles = () => {
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
      <div className="p-3 sm:p-4 flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-24 h-24 bg-gray-100 rounded overflow-hidden flex-shrink-0">
          <NewspaperIcon />
        </div>
        <div className="flex-1">
          <h4 className="font-medium text-white mb-2 flex items-center gap-2 text-sm sm:text-base">
            {title}
            <ExternalLink className="w-4 h-4" />
          </h4>
          <p className="text-gray-300 text-xs sm:text-sm line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </a>
  );

  return (
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20">
          <div className="flex items-center mb-6">
            <Newspaper className="w-6 h-6 sm:w-8 sm:h-8 text-white mr-3" />
            <h2 className="text-xl sm:text-2xl font-bold text-white">Articles </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {articles.map((article, index) => (
              <ArticlePreview key={index} {...article} />
            ))}
          </div>
        </div>
  );
};

export default Articles;
