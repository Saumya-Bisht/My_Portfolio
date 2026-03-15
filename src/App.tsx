import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  // ExternalLink, 
  ChevronRight,
  Code2,
  Briefcase,
  User,
  Projector,
  Cpu,
  GraduationCap,
  Tv,
  FileText,
  Terminal
} from 'lucide-react';
import { portfolioData } from './data';
import profileImg from './assets/Pfp.jpeg';
import studyingImg from './assets/studying.png';

const FloatingElement = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    animate={{
      y: [0, -20, 0],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
  >
    {children}
  </motion.div>
);

const SectionHeading = ({ children, icon: Icon }: { children: React.ReactNode; icon: any }) => (
  <div className="flex items-center gap-3 mb-12">
    <div className="p-3 rounded-2xl bg-dream-purple/50 text-dream-purple-dark">
      <Icon size={24} />
    </div>
    <h2 className="text-3xl font-bold text-gray-800">{children}</h2>
  </div>
);

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center glass px-8 py-3 rounded-full">
        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {portfolioData.name}
        </span>
        <div className="flex gap-8 text-slate-900 font-medium">
          {['About', 'Experience', 'Upskilling', 'Projects', 'YouTube', 'Skills', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-slate-950 font-bold hover:text-indigo-700 transition-colors text-sm"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center pt-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Step into <br />
            <span className="text-dream-purple-dark italic">My Dreamland</span>
          </h1>
          <p className="text-xl text-gray-800 mb-8 leading-relaxed max-w-lg font-medium drop-shadow-sm">
            Hii all, I'm <span className="font-extrabold text-dream-purple-dark">{portfolioData.name}</span>! 
            An explorer, traveller, developer, dreamer & lot more 🤓.
            Building seamless digital experiences as a Software Development Engineer(SDE).
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <a 
              href="#contact"
              className="px-8 py-3 rounded-full bg-dream-purple-dark text-white font-bold hover:shadow-xl hover:scale-105 transition-all shadow-md"
            >
              Contact Me
            </a>
            <a 
              href={portfolioData.resume}
              target="_blank"
              className="flex items-center gap-2 px-8 py-3 rounded-full bg-white/60 text-gray-900 font-bold border border-white/40 hover:bg-white/80 transition-all shadow-sm"
            >
              <FileText size={20} /> Resume
            </a>
            <a 
              href={portfolioData.socials.crio}
              target="_blank"
              className="flex items-center gap-2 px-8 py-3 rounded-full bg-indigo-600/10 text-indigo-700 font-bold border border-indigo-200 hover:bg-indigo-600/20 transition-all shadow-sm"
            >
              <Terminal size={20} />Portfolio
            </a>
            <div className="flex items-center gap-4 ml-2">

              <a href={portfolioData.socials.github} target="_blank" className="text-slate-900 hover:text-black transition-colors"><Github size={24} /></a>
              <a href={portfolioData.socials.linkedin} target="_blank" className="text-slate-900 hover:text-blue-600 transition-colors"><Linkedin size={24} /></a>
              <a href={portfolioData.socials.twitter} target="_blank" className="text-slate-900 hover:text-blue-400 transition-colors"><Twitter size={24} /></a>
            </div>
          </div>
        </motion.div>
        <div className="relative">
          <FloatingElement>
            <div className="w-80 h-80 md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-8 border-white/50 shadow-2xl mx-auto">
              <img 
                src={profileImg} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </FloatingElement>
          {/* Decorative floating elements */}
          <div className="absolute top-0 right-0 p-6 glass rounded-full animate-bounce delay-75">
            <Cpu className="text-dream-blue" size={32} />
          </div>
          <div className="absolute bottom-0 left-0 p-6 glass rounded-full animate-bounce delay-150">
            <Code2 className="text-dream-pink" size={32} />
          </div>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading icon={Briefcase}>Professional Journey</SectionHeading>
        <div className="space-y-8">
          {portfolioData.experience.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 text-dream-purple/20 font-bold text-4xl">
                {exp.period.split(' ')[2]}
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{exp.company}</h3>
              <p className="text-indigo-600 font-bold mb-4">{exp.role} • {exp.period}</p>
              <p className="text-gray-800 mb-6 font-medium">{exp.description}</p>
              <ul className="space-y-3">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-800 font-medium">
                    <ChevronRight size={18} className="text-indigo-500 mt-1 flex-shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Upskilling = () => {
  return (
    <section id="upskilling" className="py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionHeading icon={GraduationCap}>Always Upskilling</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-slate-900 leading-relaxed mb-6">
              I believe learning never stops. Whether it's mastering a new framework, 
              diving deep into Data Structures, or exploring the latest in AI, 
              I'm constantly evolving my tech stack to build better, faster, and smarter.
            </p>
            <div className="flex flex-wrap gap-4">
              {['Learning DSA', 'Full Stack Web Dev', 'Cloud Computing', 'AI/ML Enthusiast'].map((tag) => (
                <span key={tag} className="px-4 py-2 rounded-full bg-dream-mint/30 text-slate-950 font-medium border border-dream-mint/50">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
          <FloatingElement delay={1}>
            <div className="relative">
              <div className="absolute inset-0 bg-dream-purple/20 rounded-full blur-3xl animate-pulse"></div>
              <img 
                src={studyingImg} 
                alt="Upskilling" 
                className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl"
              />
            </div>
          </FloatingElement>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading icon={Projector}>Key Projects</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioData.projects.map((proj, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-3xl flex flex-col h-full group"
            >
              <div className="mb-6 overflow-hidden rounded-2xl h-48 bg-gradient-to-br from-dream-purple/20 to-dream-blue/20 flex items-center justify-center">
                 <Code2 size={48} className="text-dream-purple-dark opacity-50 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-950 mb-3">{proj.title}</h3>
              <p className="text-slate-900 mb-6 flex-grow text-sm leading-relaxed font-medium">{proj.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {proj.tech.map(t => (
                  <span key={t} className="px-3 py-1 rounded-full bg-white/50 text-xs font-medium text-slate-900 border border-gray-100">{t}</span>
                ))}
              </div>
              {/* <a href={proj.link} className="flex items-center gap-2 text-dream-purple font-bold hover:gap-3 transition-all">
                View Project <ExternalLink size={16} />
              </a> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const YouTubeSection = () => {
  return (
    <section id="youtube" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading icon={Tv}>YouTube Highlights</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioData.youtubeVideos.map((url, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="aspect-video rounded-3xl overflow-hidden glass shadow-xl"
            >
              <iframe 
                width="100%" 
                height="100%" 
                src={url} 
                title={`YouTube video ${idx}`}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a 
            href={portfolioData.socials.youtube} 
            target="_blank" 
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#ff0000] text-white font-bold hover:scale-105 transition-all shadow-lg"
          >
            <Youtube /> Subscribe for more!
          </a>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading icon={User}>Skills & Tools</SectionHeading>
        <div className="flex flex-wrap gap-4 justify-center">
          {portfolioData.skills.map((skill, idx) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="px-6 py-3 rounded-2xl glass font-semibold text-slate-950 hover:bg-white transition-colors"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="py-24 px-6 footer-glass mt-12 rounded-t-[50px]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-6 text-slate-950">Reach Out to Me!</h2>
        <p className="text-slate-800 mb-12 max-w-xl mx-auto italic font-medium">
          "Where imagination meets intentionality, magic becomes inevitable." - Me
        </p>
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <a href={portfolioData.socials.github} target="_blank" className="p-4 rounded-full bg-white/40 hover:bg-white/60 transition-colors shadow-sm text-slate-900 border border-white/20"><Github /></a>
          <a href={portfolioData.socials.linkedin} target="_blank" className="p-4 rounded-full bg-white/40 hover:bg-white/60 transition-colors shadow-sm text-slate-900 border border-white/20"><Linkedin /></a>
          <a href={portfolioData.socials.instagram} target="_blank" className="p-4 rounded-full bg-white/40 hover:bg-white/60 transition-colors shadow-sm text-slate-900 border border-white/20"><Instagram /></a>
          <a href={portfolioData.socials.twitter} target="_blank" className="p-4 rounded-full bg-white/40 hover:bg-white/60 transition-colors shadow-sm text-slate-900 border border-white/20"><Twitter /></a>
          <a href={`mailto:${portfolioData.email}`} className="p-4 rounded-full bg-white/40 hover:bg-white/60 transition-colors shadow-sm text-slate-900 border border-white/20"><Mail /></a>
          <a href={portfolioData.socials.youtube} target="_blank" className="p-4 rounded-full bg-white/40 hover:bg-white/60 transition-colors shadow-sm text-slate-900 border border-white/20"><Youtube /></a>
        </div>
        <div className="border-t border-slate-950/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-900 font-bold">Made with 💖 by <span className="text-dream-purple-dark">{portfolioData.name}</span></p>
          <div className="text-slate-900 flex gap-8 font-semibold">
            <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500"></div> Open for Opportunities</span>
            <span>📍 India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="dream-gradient selection:bg-dream-purple/30">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-dream-purple z-[60] origin-left"
        style={{ scaleX }}
      />
      <Navbar />
      <Hero />
      <Experience />
      <Upskilling />
      <Projects />
      <YouTubeSection />
      <Skills />
      <Footer />
    </div>
  );
}
