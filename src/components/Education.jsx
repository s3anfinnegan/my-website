import { Rocket, ChevronDown, Mail, Linkedin, Github, Terminal, Cloud, Database, Cpu, ExternalLink, BriefcaseBusiness } from 'lucide-react';

const Education = () => {

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

    return(
        <div className="mt-8 bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
          <div className="flex items-center mb-4">
            <Database className="w-8 h-8 text-white mr-3" />
            <h2 className="text-2xl font-bold text-white">Education</h2>
          </div>
          <p className="text-gray-200">
            University of Galway, BEng Electronic and Computer Engineering
          </p>
          {/* <ul className="text-gray-200 mt-2">
            <li>Student Entrepreneur of The Year Runner Up 2022</li> 
            <li>Start100 Cohort Member 2022</li> 
            <li>Member of the Engineering Society 2019-2023</li> 
            <li>Student Ambassador 2019-2020</li> 
          </ul> */}
          
          <ArticlePreview
          url= "https://drive.google.com/file/d/1Z8JFLn8-KENgdyOBgnzMwQSR85sZ7nLj/view?usp=sharing"
          title= "Automating expense uploading through Application Programmable Interface (API) integrations"
          description= "Exploring a novel approach to expense uploading, examining how a uniform schema for POS APIs could enable a paperless solution and retire OCR applications"
          />
        </div>
    );
};

export default Education;