import { Rocket, ChevronDown, Mail, Linkedin, Github, Terminal, Cloud, Database, Cpu, ExternalLink, BriefcaseBusiness } from 'lucide-react';

const Blog = () => {
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

    return(
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 mt-8">
          <div className="flex items-center mb-6">
            <Cpu className="w-6 h-6 sm:w-8 sm:h-8 text-white mr-3" />
            <h2 className="text-xl sm:text-2xl font-bold text-white">Technical Skills</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill) => (
              <div key={skill} className="bg-white/5 rounded-lg p-3 sm:p-4 text-center">
                <span className="text-white font-medium text-sm sm:text-base">{skill}</span>
              </div>
            ))}
          </div>
        </div>
    );
};

export default Blog;
