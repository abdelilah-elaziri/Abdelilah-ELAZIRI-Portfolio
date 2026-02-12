
import React, { useEffect } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import { content } from './constants/content';
import type { Language, TimelineItem, RatedItem } from './types';
import ParticleBackground from './components/ParticleBackground';

// --- ICON COMPONENTS ---
const LocationIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gold" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>;
const PhoneIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gold" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>;
const EmailIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gold" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>;
const LinkedInIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gold" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>;
const GithubIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gold" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>;
const SectionIcon: React.FC<{ type: string }> = ({ type }) => {
    const icons: { [key: string]: React.ReactElement } = {
      about: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>,
      experience: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zM4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" /><path d="M6 6h8v2H6V6zm0 4h8v2H6v-2z"/></svg>,
      education: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold" viewBox="0 0 20 20" fill="currentColor"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3.5a1 1 0 00.788 1.84L10 9.48l6.606-2.06a1 1 0 00.788-1.84l-7-3.5zM3 9.38l7 3.11 7-3.11V14a1 1 0 01-1 1H4a1 1 0 01-1-1V9.38z" /></svg>,
      skills: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>,
    };
    return icons[type] || null;
};

// --- HELPER & LAYOUT COMPONENTS ---
const SectionTitle: React.FC<{ title: string; iconType: string }> = ({ title, iconType }) => (
    <div className="flex items-center mb-6">
        <SectionIcon type={iconType} />
        <h2 className="text-2xl font-bold uppercase ml-4 tracking-wider text-gray-800 dark:text-white">{title}</h2>
    </div>
);

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-white/50 dark:bg-dark-blue/50 backdrop-blur-sm p-6 rounded-lg shadow-lg ${className}`}>
    {children}
  </div>
);

const RatingDots: React.FC<{ level: number; total?: number }> = ({ level, total = 5 }) => (
  <div className="flex items-center space-x-1.5">
    {Array.from({ length: total }).map((_, index) => (
      <span
        key={index}
        className={`h-3 w-3 rounded-full transition-colors ${
          index < level
            ? 'bg-gold'
            : 'bg-gray-300 dark:bg-gray-500'
        }`}
      />
    ))}
  </div>
);

// --- SECTION COMPONENTS ---
const ProfileSection: React.FC<{ name: string; title: string; photo: string }> = ({ name, title, photo }) => (
    <Card className="text-center">
        <div className="w-40 h-40 rounded-full mx-auto mb-4 border-4 border-gold shadow-md overflow-hidden">
          <img src={photo} alt={name} className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">{name}</h1>
        <p className="text-gold font-semibold tracking-widest">{title}</p>
    </Card>
);

const ContactSection: React.FC<{ data: any }> = ({ data }) => (
    <Card>
      <h3 className="text-xl font-bold mb-4 pb-2 border-b-2 border-gold uppercase tracking-wider">{data.title}</h3>
      <ul className="space-y-3 text-gray-700 dark:text-gray-300">
        <li className="flex items-center"><LocationIcon /> {data.location}</li>
        <li className="flex items-center"><PhoneIcon /> {data.phone}</li>
        <li className="flex items-center"><EmailIcon /> {data.email}</li>
      </ul>
    </Card>
);

const SocialsSection: React.FC<{ data: any }> = ({ data }) => (
  <Card>
    <h3 className="text-xl font-bold mb-4 pb-2 border-b-2 border-gold uppercase tracking-wider">{data.title}</h3>
    <ul className="space-y-3">
        <li><a href={data.linkedinURL} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-gold transition-colors"><LinkedInIcon /> {data.linkedin}</a></li>
        <li><a href={data.githubURL} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-gold transition-colors"><GithubIcon /> {data.github}</a></li>
    </ul>
  </Card>
);

const RatedListSection: React.FC<{ title: string; items: RatedItem[] }> = ({ title, items }) => (
  <Card>
    <h3 className="text-xl font-bold mb-4 pb-2 border-b-2 border-gold uppercase tracking-wider">{title}</h3>
    <ul className="space-y-3">
      {items.map(item => (
        <li key={item.name} className="flex justify-between items-center text-gray-700 dark:text-gray-300">
          <span>{item.name}</span>
          <RatingDots level={item.level} />
        </li>
      ))}
    </ul>
  </Card>
);

const HobbiesSection: React.FC<{ data: any }> = ({ data }) => (
  <Card>
    <h3 className="text-xl font-bold mb-4 pb-2 border-b-2 border-gold uppercase tracking-wider">{data.title}</h3>
    <div className="flex flex-wrap gap-2">
      {data.items.map((hobby: string) => (
        <span key={hobby} className="bg-gold/20 text-gold text-sm font-medium px-3 py-1 rounded-full">{hobby}</span>
      ))}
    </div>
  </Card>
);

const TimelineSection: React.FC<{ title: string; items: TimelineItem[]; icon: string }> = ({ title, items, icon }) => (
  <Card>
    <SectionTitle title={title} iconType={icon} />
    <div className="relative border-l-2 border-gold/50 ml-4 pl-8 space-y-8">
      {items.map((item, index) => (
        <div key={index} className="relative">
          <div className="absolute -left-[42px] top-1 h-4 w-4 rounded-full bg-gold border-2 border-white dark:border-dark-blue"></div>
          <p className="text-sm font-semibold text-gold tracking-wider">{item.date}</p>
          <h4 className="font-bold text-lg text-gray-800 dark:text-white">{item.title}</h4>
          {item.subtitle && <p className="text-md text-gray-600 dark:text-gray-400 italic">{item.subtitle}</p>}
          <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
            {item.description.map((desc, i) => <li key={i}>{desc}</li>)}
          </ul>
        </div>
      ))}
    </div>
  </Card>
);

const SkillsSection: React.FC<{ data: any }> = ({ data }) => (
    <Card>
        <SectionTitle title={data.title} iconType="skills" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {data.items.map((item: RatedItem) => (
                 <div key={item.name} className="flex justify-between items-center text-gray-700 dark:text-gray-300">
                    <span>{item.name}</span>
                    <RatingDots level={item.level} />
                </div>
            ))}
        </div>
    </Card>
);


// --- MAIN APP COMPONENT ---
const App: React.FC = () => {
    const [theme, setTheme] = useLocalStorage<string>('theme', 'dark');
    const [lang, setLang] = useLocalStorage<Language>('lang', 'en');

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
    
    const toggleLang = () => {
      if (lang === 'en') setLang('fr');
      else if (lang === 'fr') setLang('de');
      else setLang('en');
    };

    const currentContent = content[lang];

    return (
        <div className="relative min-h-screen bg-gray-200 dark:bg-dark-blue text-gray-800 dark:text-gray-200 font-sans transition-colors duration-500 overflow-x-hidden">
            <ParticleBackground theme={theme} />
            <div className="relative container mx-auto p-4 sm:p-6 lg:p-8">

                <header className="flex justify-end items-center gap-4 mb-8">
                    <button onClick={toggleLang} className="bg-white/50 dark:bg-dark-blue/50 backdrop-blur-sm font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gold/20 transition-colors">
                        {currentContent.toggle.lang}
                    </button>
                    <button onClick={toggleTheme} className="bg-white/50 dark:bg-dark-blue/50 backdrop-blur-sm font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gold/20 transition-colors">
                        {theme === 'dark' ? '☀️' : '🌙'}
                    </button>
                </header>

                <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <aside className="lg:col-span-1 space-y-8">
                        <ProfileSection name={currentContent.name} title={currentContent.title} photo={currentContent.profilePhoto} />
                        <ContactSection data={currentContent.contact} />
                        <SocialsSection data={currentContent.socials} />
                        <RatedListSection title={currentContent.languages.title} items={currentContent.languages.items} />
                        <HobbiesSection data={currentContent.hobbies} />
                    </aside>
                    <section className="lg:col-span-2 space-y-8">
                        <Card>
                            <SectionTitle title={currentContent.about.title} iconType="about" />
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{currentContent.about.description}</p>
                        </Card>
                        <TimelineSection title={currentContent.experience.title} items={currentContent.experience.items} icon="experience" />
                        <TimelineSection title={currentContent.education.title} items={currentContent.education.items} icon="education" />
                        <SkillsSection data={currentContent.skills} />
                    </section>
                </main>
                
                <footer className="text-center mt-12 py-4 text-gray-500 dark:text-gray-400">
                    <p>{currentContent.footer}</p>
                </footer>
            </div>
        </div>
    );
};

export default App;
