import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Calendar, Briefcase, Code, Award, BookOpen, Terminal } from 'lucide-react';

// Components
const SocialLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="text-slate-300 hover:text-white transform hover:scale-110 transition-all duration-300 hover:shadow-glow"
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

const TimelineItem = ({ 
  date, 
  title, 
  company, 
  description, 
  skills,
  side = 'left'
}: { 
  date: string;
  title: string;
  company: string;
  description: string[];
  skills: string[];
  side?: 'left' | 'right';
}) => (
  <div className={`flex flex-col md:flex-row gap-8 items-center md:items-start relative ${side === 'right' ? 'md:flex-row-reverse' : ''}`}>
    <div className="w-full md:w-1/2 relative">
      <div className="absolute top-0 bottom-0 left-1/2 md:left-auto md:right-0 w-px bg-blue-500/20 -translate-x-1/2 md:translate-x-0"></div>
      <div className="bg-slate-800/30 rounded-lg p-6 backdrop-blur-sm hover:bg-slate-700/40 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-xl border border-transparent hover:border-blue-500/20 group">
        <div className="flex items-center gap-2 text-blue-400 mb-2">
          <Calendar size={16} />
          <span>{date}</span>
        </div>
        <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">{title}</h3>
        <p className="text-slate-400 group-hover:text-slate-300 mb-4">{company}</p>
        <ul className="list-disc list-inside text-slate-300 space-y-2 mb-4">
          {description.map((item, index) => (
            <li key={index} className="group-hover:text-white transition-colors">{item}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span key={skill} className="px-2 py-1 bg-blue-500/10 rounded text-sm text-blue-400 group-hover:bg-blue-500/20 transition-colors">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  skills, 
  liveUrl, 
  githubUrl 
}: {
  title: string;
  description: string;
  image: string;
  skills: string[];
  liveUrl?: string;
  githubUrl?: string;
}) => (
  <div className="bg-slate-800/30 rounded-lg overflow-hidden group hover:bg-slate-700/40 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-xl border border-transparent hover:border-emerald-500/20">
    <div className="relative overflow-hidden aspect-video">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <div className="p-4 space-x-2">
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-500/90 rounded-full text-sm hover:bg-emerald-500 transition-colors">
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-3 py-1 bg-slate-700/90 rounded-full text-sm hover:bg-slate-700 transition-colors">
              <Github size={14} />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 group-hover:text-emerald-400 transition-colors">{title}</h3>
      <p className="text-slate-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="px-2 py-1 bg-emerald-500/10 rounded text-sm text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
            {skill}
          </span>
        ))}
      </div>
    </div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative">
        {/* Header/Hero Section */}
        <header className="container mx-auto px-4 py-16 md:py-32">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 md:w-64 md:h-64 relative group perspective">
              <div className="w-full h-full absolute transition-all duration-500 preserve-3d group-hover:rotate-y-180">
                {/* Front of card */}
                <div className="w-full h-full absolute backface-hidden rounded-full overflow-hidden border-4 border-blue-500/20 hover:border-blue-500/40 transition-colors">
                  <img 
                    src="../../dist/assets/profile.jpg" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                </div>
                {/* Back of card */}
                <div className="w-full h-full absolute backface-hidden rounded-full overflow-hidden border-4 border-blue-500/20 rotate-y-180 bg-slate-800 flex items-center justify-center">
                  <div className="text-center">
                  <img 
                    src="../../dist/assets/profile2.png" 
                    alt="avatar" 
                    className="w-full h-full object-cover"
                  />
                    {/* <h3 className="text-xl font-bold mb-2">Hello!</h3>
                    <p className="text-sm text-slate-300">Let's connect!</p> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center md:text-left md:flex-1">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 hover:from-emerald-400 hover:to-blue-400 transition-all duration-500 transform hover:scale-105">
                Mehul Kansal
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-slate-200">Software Design Engineer</h2>
              <p className="text-xl text-slate-300 mb-8 hover:text-white transition-colors max-w-2xl">
                Passionate Software Engineer with expertise in full-stack development, machine learning, and enterprise solutions. 
                Committed to building innovative solutions that drive efficiency and enhance user experience.
              </p>
              <div className="flex justify-center md:justify-start gap-6">
                <SocialLink href="https://github.com/mehulkansal">
                  <Github size={24} />
                </SocialLink>
                <SocialLink href="https://linkedin.com/in/mehulkansal">
                  <Linkedin size={24} />
                </SocialLink>
                <SocialLink href="mailto:24kansalmehul@gmail.com">
                  <Mail size={24} />
                </SocialLink>
              </div>
            </div>
          </div>
        </header>

        {/* Experience Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-2 justify-center mb-8">
              <Briefcase className="text-blue-400" />
              <h2 className="text-3xl font-bold text-center hover:text-blue-400 transition-colors">Experience</h2>
            </div>
            <div className="space-y-12">
              <TimelineItem
                date="July 2023 - Present"
                title="Software Design Engineer"
                company="Newgen Software, Noida"
                description={[
                  "Integrated GenAI features using React and Spring Boot, boosting system efficiency by 50%",
                  "Implemented OAuth 2.0 authentication with Java EE (EJB), enhancing system security by 20%",
                  "Resolved 100+ client issues, reducing average ticket resolution time by 30%",
                  "Developed graph download feature using Selenium, improving product stability by 25%",
                  "Utilized microservices architecture, reducing deployment time by 40%",
                  "Led cross-functional teams in implementing CI/CD pipelines, improving deployment reliability"
                ]}
                skills={["React", "Spring Boot", "OAuth 2.0", "Java EE", "Microservices", "Selenium", "CI/CD"]}
              />
              <TimelineItem
                date="June 2022 - August 2022"
                title="Summer Intern"
                company="Wipro, Noida"
                description={[
                  "Contributed to 3+ operational projects, reducing process bottlenecks by 15%",
                  "Assisted in developing solutions that streamlined workflows, cutting project delivery time by 10%",
                  "Collaborated with senior developers on implementing best practices and code optimization",
                  "Participated in Agile ceremonies and contributed to sprint planning and retrospectives"
                ]}
                skills={["Java", "Spring", "Agile", "Git", "REST APIs", "Team Collaboration"]}
                side="right"
              />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-2 justify-center mb-8">
              <Code className="text-emerald-400" />
              <h2 className="text-3xl font-bold text-center hover:text-emerald-400 transition-colors">Projects</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ProjectCard
                title="NYC Taxi Fare Prediction"
                description="Advanced machine learning model achieving 95% accuracy in predicting taxi fares using a million+ record dataset. Implemented comprehensive data visualization and analysis tools."
                image="https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?w=800&h=400&fit=crop"
                skills={["Python", "Scikit-learn", "TensorFlow", "Pandas", "Matplotlib", "Plotly"]}
                githubUrl="https://github.com/yourusername/taxi-fare-prediction"
              />
              <ProjectCard
                title="Driving Assistant"
                description="Innovative web application providing real-time weather updates and intelligent speed suggestions. Features an advanced drowsiness detection system with 90% accuracy."
                image="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=400&fit=crop"
                skills={["React", "Django", "OpenCV", "TensorFlow", "Google APIs", "Real-time Processing"]}
                liveUrl="https://example.com/driving-assistant"
                githubUrl="https://github.com/yourusername/driving-assistant"
              />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-2 justify-center mb-8">
              <Terminal className="text-purple-400" />
              <h2 className="text-3xl font-bold text-center hover:text-purple-400 transition-colors">Technical Skills</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'Python', 'Java', 'JavaScript', 'React.js',
                'Spring Boot', 'Node.js', 'Django', 'RESTful APIs',
                'OAuth 2.0', 'Microservices', 'TensorFlow', 'Git',
                'SQL', 'MongoDB', 'Docker', 'Jenkins'
              ].map((skill) => (
                <div key={skill} className="bg-slate-800/30 rounded-lg p-4 text-center hover:bg-slate-700/40 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 hover:shadow-xl border border-transparent hover:border-purple-500/20 group">
                  <span className="group-hover:text-purple-400 transition-colors">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-2 justify-center mb-8">
              <Award className="text-yellow-400" />
              <h2 className="text-3xl font-bold text-center hover:text-yellow-400 transition-colors">Achievements</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-800/30 p-6 rounded-lg hover:bg-slate-700/40 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-xl border border-transparent hover:border-yellow-500/20 group">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-yellow-400">High Five Award</h3>
                <p className="text-slate-300 group-hover:text-white">Recognized for exceptional teamwork and contributions that improved efficiency by 20%</p>
              </div>
              <div className="bg-slate-800/30 p-6 rounded-lg hover:bg-slate-700/40 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-xl border border-transparent hover:border-yellow-500/20 group">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-yellow-400">LeetCode Master</h3>
                <p className="text-slate-300 group-hover:text-white">Solved 800+ problems, ranking in top 15% globally</p>
              </div>
              <div className="bg-slate-800/30 p-6 rounded-lg hover:bg-slate-700/40 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-xl border border-transparent hover:border-yellow-500/20 group">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-yellow-400">Google Hash Code</h3>
                <p className="text-slate-300 group-hover:text-white">Placed in top 15% among 6,000+ participants</p>
              </div>
              <div className="bg-slate-800/30 p-6 rounded-lg hover:bg-slate-700/40 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-xl border border-transparent hover:border-yellow-500/20 group">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-yellow-400">Competitive Programming</h3>
                <p className="text-slate-300 group-hover:text-white">Consistently ranked in top 5% with 90%+ average score</p>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 justify-center mb-8">
              <BookOpen className="text-blue-400" />
              <h2 className="text-3xl font-bold text-center hover:text-blue-400 transition-colors">Education</h2>
            </div>
            <div className="bg-slate-800/30 p-8 rounded-lg hover:bg-slate-700/40 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-xl border border-transparent hover:border-blue-500/20 group">
              <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400">Bachelor of Technology (Hons.) in Computer Science</h3>
              <p className="text-xl text-slate-300 mb-2">Jaypee University of Information Technology</p>
              <p className="text-lg text-slate-400 mb-4">Graduated May 2023 | CGPA: 8.44/10</p>
              <p className="text-slate-300">Solan, Himachal Pradesh, India</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 hover:text-blue-400 transition-colors">Get In Touch</h2>
            <p className="text-slate-300 mb-8 hover:text-white transition-colors">
              Looking for new opportunities to create innovative solutions and make an impact.
              Let's connect and build something amazing together!
            </p>
            <a
              href="mailto:24kansalmehul@gmail.com"
              className="inline-block bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-emerald-500 hover:to-blue-500 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Contact Me
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-8">
          <div className="text-center text-slate-400 hover:text-white transition-colors">
            <p>© {new Date().getFullYear()} Mehul Kansal - Built with React & Tailwind CSS</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;