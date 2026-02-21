import React, { useState } from 'react';
import { 
  Menu, X, Facebook, Twitter, Instagram, ChevronRight, 
  MapPin, Phone, Mail, Calendar, Clock, ArrowRight, 
  CheckCircle, Play, Star, Users, Trophy, Download, Heart, Shield, ShoppingBag, Search, Filter, Video,
  Award, Zap, Check, Send
} from 'lucide-react';
import { Button, Section, Card, Badge, Input } from './ui';
import { Page, Program } from '../types';
import { 
  PROGRAMS, UPCOMING_EVENTS, TESTIMONIALS, STATS, PARTNERS, 
  FACILITIES, DIRECTOR_INFO, ACADEMY_HISTORY, PHILOSOPHY, TEAM, 
  AWARDS, IMPACT_STATS, PATHWAY_STAGES, ALUMNI_STORIES, 
  UPCOMING_TOURNAMENTS, MATCH_RESULTS, BLOG_POSTS, TRIAL_SESSIONS, SHOP_ITEMS, SPECIALIST_PROGRAMS 
} from '../constants';

export interface PublicProps {
  navigate: (page: Page) => void;
  currentPage?: Page;
}

export const Navbar: React.FC<PublicProps> = ({ navigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', page: Page.HOME },
    { label: 'About', page: Page.ABOUT },
    { label: 'Programs', page: Page.PROGRAMS },
    { label: 'Pathway', page: Page.PATHWAY },
    { label: 'Tournaments', page: Page.TOURNAMENTS },
    { label: 'Facilities', page: Page.FACILITIES },
    { label: 'News', page: Page.NEWS },
    { label: 'Shop', page: Page.SHOP },
    { label: 'Contact', page: Page.CONTACT },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => navigate(Page.HOME)}>
             <img src="https://i.postimg.cc/bvLX9bk1/Whats-App-Image-2025-12-14-at-23-32-25-905dda09.jpg" alt="Star Hearts" className="h-12 w-12 rounded-lg object-cover mr-3" />
            <div>
               <h1 className="text-xl font-bold text-dark tracking-tight leading-none">STAR HEARTS</h1>
               <p className="text-[10px] font-bold text-primary tracking-[0.2em] uppercase">Sports Academy</p>
            </div>
          </div>
          
          <div className="hidden lg:flex space-x-1 items-center">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => navigate(link.page)}
                className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
                  currentPage === link.page ? 'text-primary bg-primary/5' : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
             <Button variant="outline" className="text-xs px-4" onClick={() => navigate(Page.PARENTS_PORTAL)}>Parent Portal</Button>
             <Button className="text-xs px-4 shadow-lg shadow-primary/30" onClick={() => navigate(Page.REGISTRATION)}>Join Now</Button>
          </div>

          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-primary p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 shadow-xl absolute w-full animate-fade-in">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => { navigate(link.page); setIsOpen(false); }}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-semibold ${
                   currentPage === link.page ? 'text-primary bg-primary/5' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 space-y-3 px-4">
               <Button variant="outline" className="w-full justify-center" onClick={() => { navigate(Page.PARENTS_PORTAL); setIsOpen(false); }}>Parent Portal</Button>
               <Button className="w-full justify-center" onClick={() => { navigate(Page.REGISTRATION); setIsOpen(false); }}>Join Academy</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export const Footer: React.FC<PublicProps> = ({ navigate }) => (
  <footer className="bg-dark text-white pt-16 pb-8 border-t border-gray-800">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
      <div>
        <div className="flex items-center mb-6">
           <img src="https://i.postimg.cc/bvLX9bk1/Whats-App-Image-2025-12-14-at-23-32-25-905dda09.jpg" alt="SH" className="h-10 w-10 rounded mr-3 opacity-90" />
           <span className="text-xl font-bold tracking-tight">STAR HEARTS</span>
        </div>
        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
          Nurturing the next generation of football talent with integrity, discipline, and excellence. More than just a game.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-white"><Facebook size={18} /></a>
          <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-white"><Twitter size={18} /></a>
          <a href="https://www.instagram.com/starheartssportsacademy/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-white"><Instagram size={18} /></a>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-bold mb-6 text-white border-l-4 border-primary pl-3">Quick Links</h3>
        <ul className="space-y-3 text-sm text-gray-400">
          <li><button onClick={() => navigate(Page.ABOUT)} className="hover:text-primary transition-colors flex items-center"><ChevronRight size={14} className="mr-2"/> About Us</button></li>
          <li><button onClick={() => navigate(Page.PROGRAMS)} className="hover:text-primary transition-colors flex items-center"><ChevronRight size={14} className="mr-2"/> Programs</button></li>
          <li><button onClick={() => navigate(Page.FACILITIES)} className="hover:text-primary transition-colors flex items-center"><ChevronRight size={14} className="mr-2"/> Facilities</button></li>
          <li><button onClick={() => navigate(Page.NEWS)} className="hover:text-primary transition-colors flex items-center"><ChevronRight size={14} className="mr-2"/> Latest News</button></li>
          <li><button onClick={() => navigate(Page.ADMIN_DASHBOARD)} className="hover:text-primary transition-colors flex items-center"><ChevronRight size={14} className="mr-2"/> Staff Login</button></li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-6 text-white border-l-4 border-primary pl-3">Programs</h3>
        <ul className="space-y-3 text-sm text-gray-400">
          {PROGRAMS.map(p => (
             <li key={p.id}><button onClick={() => navigate(Page.PROGRAMS)} className="hover:text-primary transition-colors flex items-center"><ChevronRight size={14} className="mr-2"/> {p.title}</button></li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-6 text-white border-l-4 border-primary pl-3">Contact Us</h3>
        <ul className="space-y-4 text-sm text-gray-400">
          <li className="flex items-start">
            <MapPin size={18} className="mr-3 mt-1 text-primary shrink-0" />
            <span>Kawempe, Kampala<br/>Uganda</span>
          </li>
          <li className="flex items-center">
            <Phone size={18} className="mr-3 text-primary shrink-0" />
            <span>+256 700 123 456</span>
          </li>
          <li className="flex items-center">
            <Mail size={18} className="mr-3 text-primary shrink-0" />
            <span>info@starheartsacademy.com</span>
          </li>
        </ul>
      </div>
    </div>
    
    <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
      <p>&copy; {new Date().getFullYear()} Star Hearts Sports Academy. All rights reserved.</p>
    </div>
  </footer>
);

export const HomePage: React.FC<PublicProps> = ({ navigate }) => (
  <div className="animate-fade-in">
    {/* Hero Section */}
    <div className="relative h-screen min-h-[600px] flex items-center">
       <div className="absolute inset-0 z-0">
          <img 
             src="https://images.unsplash.com/photo-1517466787929-bc90951d6428?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
             className="w-full h-full object-cover" 
             alt="Football Pitch" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/90 to-dark/40"></div>
       </div>
       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-20">
          <div className="max-w-3xl">
             <Badge type="warning" className="mb-6 px-4 py-1 text-sm bg-primary text-white border-none shadow-lg shadow-primary/30">Admissions Open 2025</Badge>
             <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Dream Big.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-300">Play With Heart.</span>
             </h1>
             <p className="text-xl text-gray-200 mb-8 max-w-xl leading-relaxed">
                East Africa's premier football academy, dedicated to developing world-class talent and outstanding citizens through the beautiful game.
             </p>
             <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => navigate(Page.REGISTRATION)} className="text-lg px-8 py-4 shadow-xl shadow-primary/20">Join the Academy</Button>
                <Button variant="outline" onClick={() => navigate(Page.ABOUT)} className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-dark">Explore Programs</Button>
             </div>
             
             <div className="mt-16 flex items-center gap-8 text-white/80">
                <div className="flex -space-x-4">
                   {[1,2,3,4].map(i => (
                      <div key={i} className="w-12 h-12 rounded-full border-2 border-dark bg-gray-800 overflow-hidden">
                         <img src={`https://randomuser.me/api/portraits/men/${i*10}.jpg`} alt="User" />
                      </div>
                   ))}
                </div>
                <div>
                   <div className="font-bold text-white text-lg">500+ Players</div>
                   <div className="text-sm">Trusted by families</div>
                </div>
             </div>
          </div>
       </div>
    </div>

    {/* Stats Section */}
    <Section className="bg-white relative -mt-20 z-20 pt-0">
       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((stat, index) => (
             <div key={index} className="bg-white p-8 rounded-xl shadow-xl border-b-4 border-primary text-center group hover:-translate-y-2 transition-transform duration-300">
                <div className="inline-flex p-4 rounded-full bg-gray-50 text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                   {index === 0 && <Users size={32}/>}
                   {index === 1 && <Trophy size={32}/>}
                   {index === 2 && <Star size={32}/>}
                   {index === 3 && <Shield size={32}/>}
                </div>
                <div className="text-4xl font-bold text-dark mb-2">{stat.value}</div>
                <div className="text-gray-500 font-medium uppercase tracking-wide text-sm">{stat.label}</div>
             </div>
          ))}
       </div>
    </Section>

    {/* About Preview */}
    <Section className="bg-gray-50">
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
             <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Training" className="w-full object-cover" />
             </div>
             <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
                <p className="text-lg font-bold text-dark mb-2">"We build players, but more importantly, we build people."</p>
                <p className="text-sm text-gray-500">- Michael Ssebo, Director</p>
             </div>
          </div>
          <div>
             <Badge className="mb-4">Our Philosophy</Badge>
             <h2 className="text-4xl font-bold text-dark mb-6">More Than Just a Game</h2>
             <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                At Star Hearts, we believe in the 'Total Player' approach. Our curriculum combines elite technical training with character development, academic support, and psychological resilience.
             </p>
             <ul className="space-y-4 mb-8">
                {['Professional Coaching Staff', 'Character Development', 'Pathway to Pro'].map((item, i) => (
                   <li key={i} className="flex items-center text-dark font-medium">
                      <CheckCircle className="text-primary mr-3" size={20}/> {item}
                   </li>
                ))}
             </ul>
             <Button onClick={() => navigate(Page.ABOUT)} className="flex items-center">
                Read Our Story <ArrowRight size={18} className="ml-2"/>
             </Button>
          </div>
       </div>
    </Section>

    {/* Programs Preview */}
    <Section>
       <div className="text-center mb-16">
          <Badge className="mb-4">Development Pathway</Badge>
          <h2 className="text-4xl font-bold text-dark mb-4">Programs for Every Age</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">From their first touch to their first professional contract, we have a structured pathway for every stage of development.</p>
       </div>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROGRAMS.slice(0, 3).map((prog) => (
             <Card key={prog.id} className="group hover:border-primary transition-colors">
                <div className="h-48 overflow-hidden">
                   <img src={prog.image} alt={prog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                </div>
                <div className="p-6">
                   <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-dark">{prog.title}</h3>
                      <Badge type="neutral">{prog.ageGroup}</Badge>
                   </div>
                   <p className="text-gray-600 text-sm mb-4 line-clamp-2">{prog.description}</p>
                   <ul className="space-y-2 mb-6">
                      {prog.features.slice(0, 3).map((f, i) => (
                         <li key={i} className="flex items-center text-xs text-gray-500">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div> {f}
                         </li>
                      ))}
                   </ul>
                   <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white" onClick={() => navigate(Page.PROGRAMS)}>Learn More</Button>
                </div>
             </Card>
          ))}
       </div>
    </Section>

    {/* Pathway Section */}
    <Section className="bg-gray-50">
        <div className="text-center mb-16">
            <Badge className="mb-4">Our Roadmap</Badge>
            <h2 className="text-4xl font-bold text-dark mb-4">The Pathway to Pro</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">A proven roadmap helping players navigate from grassroots to the professional game.</p>
        </div>
        <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"></div>
            
            <div className="space-y-12">
               {PATHWAY_STAGES.map((stage, index) => (
                  <div key={stage.id} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                     <div className="md:w-1/2 flex justify-center md:justify-start">
                        <div className={`w-full max-w-lg p-8 bg-white rounded-xl shadow-lg border-l-4 ${index % 2 === 0 ? 'md:ml-auto md:text-right md:border-l-0 md:border-r-4' : ''} border-primary relative`}>
                           {/* Timeline Dot */}
                           <div className={`hidden md:block absolute top-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white shadow ${index % 2 === 0 ? '-left-[44px]' : '-right-[44px]'} transform -translate-y-1/2`}></div>
                           
                           <div className="text-primary font-bold mb-2">{stage.ageRange}</div>
                           <h3 className="text-2xl font-bold text-dark mb-2">{stage.title}</h3>
                           <div className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-4">{stage.focus}</div>
                           <p className="text-gray-600 mb-4">{stage.description}</p>
                           <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                              {stage.metrics.slice(0, 3).map(m => (
                                 <Badge key={m} type="neutral" className="text-xs">{m}</Badge>
                              ))}
                           </div>
                        </div>
                     </div>
                     <div className="md:w-1/2"></div>
                  </div>
               ))}
            </div>
         </div>
    </Section>

    {/* Success Stories Section */}
    <Section className="bg-white">
        <div className="text-center mb-16">
            <Badge className="mb-4">Hall of Fame</Badge>
            <h2 className="text-4xl font-bold text-dark mb-4">Success Stories</h2>
            <p className="text-gray-600">Players who have walked the path.</p>
        </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ALUMNI_STORIES.map(story => (
               <Card key={story.id} className="bg-gray-800 border-gray-700">
                  <div className="p-6">
                     <div className="flex items-center mb-6">
                        <img src={story.image} alt={story.name} className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-primary"/>
                        <div>
                           <h3 className="font-bold text-white">{story.name}</h3>
                           <p className="text-primary text-sm">{story.currentClub}</p>
                        </div>
                     </div>
                     <p className="text-gray-300 italic mb-6">"{story.quote}"</p>
                     <div className="flex justify-between border-t border-gray-700 pt-4">
                        {story.stats.map((stat, i) => (
                           <div key={i} className="text-center">
                              <div className="font-bold text-white">{stat.value}</div>
                              <div className="text-xs text-gray-500 uppercase">{stat.label}</div>
                           </div>
                        ))}
                     </div>
                  </div>
               </Card>
            ))}
         </div>
    </Section>

    {/* Call to Action */}
    <Section className="bg-dark text-white relative overflow-hidden">
       <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 -skew-x-12 transform translate-x-20"></div>
       <div className="relative z-10 text-center max-w-3xl mx-auto py-12">
          <h2 className="text-4xl font-bold mb-6">Ready to Join the Family?</h2>
          <p className="text-xl text-gray-300 mb-8">Registration for the 2025 season is now open. Spaces are limited for each age group.</p>
          <div className="flex justify-center gap-4">
             <Button onClick={() => navigate(Page.REGISTRATION)} className="px-8 py-3 text-lg">Register Now</Button>
             <Button variant="outline" onClick={() => navigate(Page.CONTACT)} className="px-8 py-3 text-lg border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-white">Contact Us</Button>
          </div>
       </div>
    </Section>
  </div>
);

export const AboutPage: React.FC<PublicProps> = ({ navigate }) => (
   <div className="pt-20 animate-fade-in">
      <Section className="bg-gray-50 text-center py-20">
         <h1 className="text-4xl font-bold text-dark mb-4">About Star Hearts</h1>
         <p className="text-xl text-gray-600 max-w-3xl mx-auto">Building the future of Ugandan football, one player at a time.</p>
      </Section>

      <Section>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div>
               <h2 className="text-3xl font-bold text-dark mb-6">Our History</h2>
               <p className="text-gray-600 leading-relaxed mb-6">{ACADEMY_HISTORY}</p>
               <h2 className="text-3xl font-bold text-dark mb-6">Our Philosophy</h2>
               <p className="text-gray-600 leading-relaxed">{PHILOSOPHY}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <img src="https://images.unsplash.com/photo-1579952363873-27f3bde9be2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" className="rounded-xl shadow-lg w-full h-64 object-cover mt-12" alt="History" />
               <img src="https://images.unsplash.com/photo-1511886929837-354d827aae26?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" className="rounded-xl shadow-lg w-full h-64 object-cover" alt="Philosophy" />
            </div>
         </div>

         <h2 className="text-3xl font-bold text-dark mb-12 text-center">Meet The Team</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map(member => (
               <Card key={member.id} className="text-center p-6 hover:shadow-xl transition-shadow">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-4 border-gray-100">
                     <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-bold text-dark">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-gray-500 mb-4">{member.bio.substring(0, 80)}...</p>
                  <div className="flex justify-center space-x-3">
                     <Users size={16} className="text-gray-400 hover:text-primary cursor-pointer"/>
                     <Mail size={16} className="text-gray-400 hover:text-primary cursor-pointer"/>
                  </div>
               </Card>
            ))}
         </div>
      </Section>

      <Section className="bg-dark text-white">
         <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3">
               <img src={DIRECTOR_INFO.image} alt="Director" className="rounded-xl shadow-2xl border-4 border-gray-700" />
            </div>
            <div className="md:w-2/3">
               <div className="text-6xl text-primary mb-4 opacity-30">"</div>
               <h2 className="text-3xl font-bold mb-6 italic leading-relaxed">{DIRECTOR_INFO.message}</h2>
               <div>
                  <div className="font-bold text-xl">{DIRECTOR_INFO.name}</div>
                  <div className="text-primary">{DIRECTOR_INFO.role}</div>
               </div>
            </div>
         </div>
      </Section>
   </div>
);

export const ProgramsPage: React.FC<PublicProps> = ({ navigate }) => (
  <div className="pt-20 animate-fade-in">
    <Section className="bg-primary text-white py-20">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Our Programs</h1>
        <p className="text-xl opacity-90">Comprehensive football education for every age and skill level.</p>
      </div>
    </Section>

    <Section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {PROGRAMS.map((prog, index) => (
          <div key={prog.id} className={`flex flex-col md:flex-row gap-6 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100`}>
             <div className="md:w-2/5 h-64 md:h-auto">
                <img src={prog.image} alt={prog.title} className="w-full h-full object-cover" />
             </div>
             <div className="p-8 md:w-3/5">
                <div className="flex justify-between items-start mb-2">
                   <h3 className="text-2xl font-bold text-dark">{prog.title}</h3>
                   <Badge>{prog.ageGroup}</Badge>
                </div>
                <p className="text-gray-600 mb-6">{prog.description}</p>
                
                <div className="space-y-4 mb-6">
                   <div className="flex items-center text-sm text-gray-500">
                      <Clock size={16} className="mr-2 text-primary" /> {prog.schedule}
                   </div>
                   <div className="flex items-center text-sm text-gray-500">
                      <Users size={16} className="mr-2 text-primary" /> Ratio: {prog.ratio}
                   </div>
                   <div className="flex flex-wrap gap-2">
                      {prog.features.map(f => <span key={f} className="text-xs bg-gray-100 px-2 py-1 rounded">{f}</span>)}
                   </div>
                </div>
                <div className="flex items-center justify-between mt-auto">
                    <div>
                       {prog.pricing.map((p, i) => (
                          <div key={i} className="text-sm">
                             <span className="font-bold text-dark">{p.amount}</span> <span className="text-gray-500">/ {p.name}</span>
                          </div>
                       ))}
                    </div>
                    <Button onClick={() => navigate(Page.REGISTRATION)}>Apply Now</Button>
                </div>
             </div>
          </div>
        ))}
      </div>
    </Section>

    <Section className="bg-gray-50">
       <h2 className="text-3xl font-bold text-dark mb-12 text-center">Specialist Training</h2>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SPECIALIST_PROGRAMS.map(prog => (
             <Card key={prog.id} className="p-6">
                <div className="h-40 rounded-lg overflow-hidden mb-6">
                   <img src={prog.image} alt={prog.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-2">{prog.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{prog.description}</p>
                <ul className="space-y-2">
                   {prog.features.map((f, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-500">
                         <CheckCircle size={14} className="text-primary mr-2" /> {f}
                      </li>
                   ))}
                </ul>
             </Card>
          ))}
       </div>
    </Section>
  </div>
);

export const FacilitiesPage: React.FC<PublicProps> = () => (
  <div className="pt-20 animate-fade-in">
     <Section className="bg-dark text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">World-Class Facilities</h1>
        <p className="text-xl opacity-80 max-w-2xl mx-auto">Providing the perfect environment for player development at our Kitende Campus.</p>
     </Section>

     <Section>
        <div className="space-y-20">
           {FACILITIES.map((facility, index) => (
              <div key={facility.id} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                 <div className="lg:w-1/2">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                       <img src={facility.image} alt={facility.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                       <div className="absolute top-4 left-4">
                          <Badge className="bg-white/90 text-dark backdrop-blur-sm shadow">{facility.category}</Badge>
                       </div>
                    </div>
                 </div>
                 <div className="lg:w-1/2">
                    <h2 className="text-3xl font-bold text-dark mb-4">{facility.name}</h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">{facility.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                       {facility.specs.map((spec, i) => (
                          <div key={i} className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                             <CheckCircle size={18} className="text-primary mr-3 flex-shrink-0" />
                             <span className="text-sm font-medium text-gray-700">{spec}</span>
                          </div>
                       ))}
                    </div>
                 </div>
              </div>
           ))}
        </div>
     </Section>
  </div>
);

export const PathwayPage: React.FC<PublicProps> = () => (
   <div className="pt-20 animate-fade-in">
      <Section className="bg-gray-100 py-20 text-center">
         <h1 className="text-4xl font-bold text-dark mb-4">The Pathway</h1>
         <p className="text-xl text-gray-600">From Grassroots to Professional Football</p>
      </Section>
      
      <Section>
         <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"></div>
            <div className="space-y-16">
               {PATHWAY_STAGES.map((stage, index) => (
                  <div key={stage.id} className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                     <div className="md:w-1/2 flex justify-center md:justify-start">
                        <div className={`w-full max-w-xl bg-white p-8 rounded-2xl shadow-xl border-t-4 border-primary relative ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                           {/* Dot */}
                           <div className={`hidden md:block absolute top-8 w-6 h-6 bg-white border-4 border-primary rounded-full z-10 ${index % 2 === 0 ? '-left-[54px]' : '-right-[54px]'}`}></div>
                           
                           <div className="text-4xl font-bold text-gray-100 absolute top-4 right-8 select-none pointer-events-none">{stage.ageRange}</div>
                           <h3 className="text-2xl font-bold text-dark mb-2 relative z-10">{stage.title}</h3>
                           <div className="text-primary font-bold text-sm uppercase tracking-wider mb-4">{stage.focus}</div>
                           <p className="text-gray-600 mb-6">{stage.description}</p>
                           
                           <div className="grid grid-cols-2 gap-4 text-left">
                              <div className="bg-gray-50 p-3 rounded-lg">
                                 <div className="text-xs font-bold text-gray-400 uppercase mb-2">Metrics</div>
                                 <ul className="text-xs space-y-1 text-gray-600">
                                    {stage.metrics.slice(0, 3).map((m, i) => <li key={i}>• {m}</li>)}
                                 </ul>
                              </div>
                              <div className="bg-gray-50 p-3 rounded-lg">
                                 <div className="text-xs font-bold text-gray-400 uppercase mb-2">Opportunities</div>
                                 <ul className="text-xs space-y-1 text-gray-600">
                                    {stage.opportunities.slice(0, 3).map((o, i) => <li key={i}>• {o}</li>)}
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="md:w-1/2"></div>
                  </div>
               ))}
            </div>
         </div>
      </Section>
   </div>
);

export const TournamentsPage: React.FC<PublicProps> = () => (
   <div className="pt-20 animate-fade-in">
      <Section className="bg-primary text-white py-20 text-center">
         <h1 className="text-4xl font-bold mb-4">Tournaments & Events</h1>
         <p className="text-xl opacity-90">Competing locally and internationally.</p>
      </Section>

      <Section>
         <h2 className="text-2xl font-bold text-dark mb-8">Upcoming Tournaments</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {UPCOMING_TOURNAMENTS.map(tourn => (
               <Card key={tourn.id} className="group">
                  <div className="h-48 overflow-hidden relative">
                     <img src={tourn.image} alt={tourn.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                     <div className="absolute top-2 right-2">
                        <Badge type={tourn.registrationOpen ? 'success' : 'neutral'}>{tourn.registrationOpen ? 'Registration Open' : 'Closed'}</Badge>
                     </div>
                  </div>
                  <div className="p-6">
                     <h3 className="text-xl font-bold text-dark mb-2">{tourn.name}</h3>
                     <div className="flex items-center text-sm text-gray-500 mb-2">
                        <Calendar size={14} className="mr-2" /> {tourn.dates}
                     </div>
                     <div className="flex items-center text-sm text-gray-500 mb-4">
                        <MapPin size={14} className="mr-2" /> {tourn.location}
                     </div>
                     <p className="text-gray-600 text-sm mb-6">{tourn.description}</p>
                     <Button variant="outline" className="w-full">View Details</Button>
                  </div>
               </Card>
            ))}
         </div>

         <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-dark mb-6">Latest Results</h2>
            <div className="overflow-x-auto">
               <table className="w-full">
                  <thead>
                     <tr className="text-left text-sm text-gray-500 border-b border-gray-200">
                        <th className="pb-4">Date</th>
                        <th className="pb-4">Competition</th>
                        <th className="pb-4 text-center">Score</th>
                        <th className="pb-4">Opponent</th>
                        <th className="pb-4">Status</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                     {MATCH_RESULTS.map(match => (
                        <tr key={match.id}>
                           <td className="py-4 text-sm font-medium">{match.date}</td>
                           <td className="py-4 text-sm text-gray-600">{match.tournament}</td>
                           <td className="py-4 text-center font-bold text-lg">
                              {match.homeScore} - {match.awayScore}
                           </td>
                           <td className="py-4 text-sm font-bold text-dark">
                              {match.homeTeam.includes('Star Hearts') ? match.awayTeam : match.homeTeam}
                           </td>
                           <td className="py-4">
                              <Badge type={match.status === 'Live' ? 'danger' : 'neutral'}>{match.status}</Badge>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </Section>
   </div>
);

export const NewsPage: React.FC<PublicProps> = () => (
   <div className="pt-20 animate-fade-in">
      <Section className="py-12 bg-gray-50">
         <div className="text-center">
            <h1 className="text-4xl font-bold text-dark mb-4">News & Updates</h1>
            <p className="text-gray-600">Latest stories from the pitch and beyond.</p>
         </div>
      </Section>

      <Section>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map(post => (
               <Card key={post.id} className="flex flex-col h-full hover:shadow-xl transition-shadow">
                  <div className="h-48 overflow-hidden">
                     <img src={post.image} alt={post.title} className="w-full h-full object-cover"/>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                     <div className="flex justify-between items-center mb-4">
                        <Badge type="neutral">{post.category}</Badge>
                        <span className="text-xs text-gray-400">{post.date}</span>
                     </div>
                     <h3 className="text-xl font-bold text-dark mb-3 line-clamp-2">{post.title}</h3>
                     <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-1">{post.excerpt}</p>
                     <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                        <div className="text-xs text-gray-500">By <span className="font-bold">{post.author}</span></div>
                        <Button variant="ghost" className="text-sm p-0 hover:bg-transparent hover:text-primary">Read More</Button>
                     </div>
                  </div>
               </Card>
            ))}
         </div>
      </Section>
   </div>
);

export const ShopPage: React.FC<PublicProps> = () => (
   <div className="pt-20 animate-fade-in">
      <Section className="bg-white py-12">
         <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div>
               <h1 className="text-3xl font-bold text-dark">Club Shop</h1>
               <p className="text-gray-600">Official kit, training wear, and merchandise.</p>
            </div>
            <div className="flex gap-4 mt-4 md:mt-0">
               <Button variant="outline"><Filter size={18} className="mr-2"/> Filter</Button>
               <Button variant="outline"><ShoppingBag size={18} className="mr-2"/> Cart (0)</Button>
            </div>
         </div>
         
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SHOP_ITEMS.map(item => (
               <Card key={item.id} className="group">
                  <div className="h-64 bg-gray-100 relative overflow-hidden">
                     <img src={item.image} alt={item.name} className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-500"/>
                  </div>
                  <div className="p-4">
                     <div className="text-xs text-gray-400 mb-1">{item.category}</div>
                     <h3 className="font-bold text-dark mb-2">{item.name}</h3>
                     <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-primary">{item.price}</span>
                        <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                           <ShoppingBag size={16}/>
                        </button>
                     </div>
                  </div>
               </Card>
            ))}
         </div>
      </Section>
   </div>
);

export const ContactPage: React.FC<PublicProps> = () => (
   <div className="pt-20 animate-fade-in">
      <Section className="bg-dark text-white py-20 text-center">
         <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
         <p className="text-xl opacity-80">We'd love to hear from you.</p>
      </Section>
      
      <Section>
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
               <h2 className="text-2xl font-bold text-dark mb-6">Contact Information</h2>
               <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                     <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary"><MapPin size={24}/></div>
                     <div>
                        <h3 className="font-bold text-dark">Visit Us</h3>
                        <p className="text-gray-600">Kawempe, Kampala<br/>Uganda</p>
                     </div>
                  </div>
                  <div className="flex items-start">
                     <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary"><Phone size={24}/></div>
                     <div>
                        <h3 className="font-bold text-dark">Call Us</h3>
                        <p className="text-gray-600">+256 700 123 456<br/>Mon - Fri, 8am - 5pm</p>
                     </div>
                  </div>
                  <div className="flex items-start">
                     <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary"><Mail size={24}/></div>
                     <div>
                        <h3 className="font-bold text-dark">Email Us</h3>
                        <p className="text-gray-600">info@starheartsacademy.com<br/>admissions@starheartsacademy.com</p>
                     </div>
                  </div>
               </div>
               
               <div className="h-64 bg-gray-200 rounded-xl overflow-hidden">
                  {/* Map Placeholder */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500 bg-gray-100">
                     <MapPin size={48} className="opacity-20"/>
                  </div>
               </div>
            </div>
            
            <Card className="p-8">
               <h2 className="text-2xl font-bold text-dark mb-6">Send a Message</h2>
               <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                     <Input label="First Name" placeholder="John" />
                     <Input label="Last Name" placeholder="Doe" />
                  </div>
                  <Input label="Email Address" type="email" placeholder="john@example.com" />
                  <Input label="Subject" placeholder="General Inquiry" />
                  <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                     <textarea className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none h-32 resize-none" placeholder="How can we help you?"></textarea>
                  </div>
                  <Button className="w-full">Send Message</Button>
               </form>
            </Card>
         </div>
      </Section>
   </div>
);

export const RegistrationPage: React.FC<PublicProps> = ({ navigate }) => (
   <div className="pt-20 animate-fade-in">
      <Section className="bg-gray-50">
         <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
               <h1 className="text-3xl font-bold text-dark mb-4">Join The Academy</h1>
               <p className="text-gray-600">Start your journey with Star Hearts today. Please fill out the form below.</p>
            </div>

            <Card className="p-8">
               <form className="space-y-6">
                  <div>
                     <h3 className="font-bold text-lg text-dark mb-4 border-b pb-2">Player Information</h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input label="First Name" required />
                        <Input label="Last Name" required />
                        <Input label="Date of Birth" type="date" required />
                        <div className="mb-4">
                           <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                           <select className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:border-primary">
                              <option>Male</option>
                              <option>Female</option>
                           </select>
                        </div>
                     </div>
                  </div>

                  <div>
                     <h3 className="font-bold text-lg text-dark mb-4 border-b pb-2">Parent / Guardian Information</h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input label="Guardian Name" required />
                        <Input label="Relationship" placeholder="Father, Mother, etc." required />
                        <Input label="Phone Number" required />
                        <Input label="Email Address" type="email" required />
                     </div>
                  </div>

                  <div>
                     <h3 className="font-bold text-lg text-dark mb-4 border-b pb-2">Program Selection</h3>
                     <div className="space-y-3">
                        {PROGRAMS.map(prog => (
                           <label key={prog.id} className="flex items-center p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                              <input type="radio" name="program" className="mr-3 h-4 w-4 text-primary" />
                              <div className="flex-1">
                                 <span className="font-bold text-dark block">{prog.title}</span>
                                 <span className="text-xs text-gray-500">{prog.ageGroup} • {prog.schedule}</span>
                              </div>
                              <span className="font-bold text-primary text-sm">{prog.pricing[0].amount}</span>
                           </label>
                        ))}
                     </div>
                  </div>

                  <div className="pt-4">
                     <Button className="w-full py-3 text-lg">Submit Application</Button>
                     <p className="text-xs text-gray-500 text-center mt-4">By submitting this form, you agree to our terms and conditions.</p>
                  </div>
               </form>
            </Card>
         </div>
      </Section>
   </div>
);

export const PartnershipsPage: React.FC<PublicProps> = () => (
   <div className="pt-20 animate-fade-in">
      <Section className="text-center py-20 bg-dark text-white">
         <h1 className="text-4xl font-bold mb-4">Our Partners</h1>
         <p className="text-xl opacity-80">Proudly supported by leading organizations.</p>
      </Section>

      <Section>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PARTNERS.map(partner => (
               <Card key={partner.id} className="p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
                  <div className="h-24 w-full flex items-center justify-center mb-6">
                     <img src={partner.logo} alt={partner.name} className="max-h-full max-w-full object-contain" />
                  </div>
                  <Badge className="mb-4">{partner.tier} Partner</Badge>
                  <h3 className="text-xl font-bold text-dark mb-2">{partner.name}</h3>
                  <p className="text-gray-600 text-sm">{partner.description}</p>
               </Card>
            ))}
         </div>
         
         <div className="mt-20 bg-gray-50 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-dark mb-4">Become a Partner</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">Join us in shaping the future of African football. We offer tailored sponsorship packages that deliver real value to your brand.</p>
            <Button className="px-8 py-3">Download Sponsorship Deck</Button>
         </div>
      </Section>
   </div>
);