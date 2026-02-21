
import { Program, Player, Registration, Stat, Testimonial, NewsItem, CalendarEvent, Partner, TeamMember, Facility, Award, SpecialistProgram, PathwayStage, AlumniStory, Tournament, MatchResult, BlogPost, Invoice, ShopItem, SponsorshipTier, SponsoredChild, FormTemplate, AttendanceRecord, Assessment, VideoAnalysis, Drill, TrainingSession, MatchRecord, DiscountRule, Scholarship, Payment, Expense } from './types';
import { Trophy, Users, Star, Calendar } from 'lucide-react';

export const PROGRAMS: Program[] = [
  {
    id: '1',
    title: 'Little Lions',
    ageGroup: 'U5-U6',
    shortDescription: 'Fun introduction to football fundamentals.',
    description: 'The Little Lions program is designed to introduce our youngest players to the joy of football in a safe, fun, and engaging environment. The focus is on developing basic motor skills, coordination, and social interaction through play.',
    features: ['Basic coordination', 'Fun games', 'Social skills', 'Twice weekly'],
    schedule: 'Saturday & Sunday Mornings (9:00 AM - 10:00 AM)',
    duration: '60 Minutes',
    curriculum: 'ABCs (Agility, Balance, Coordination) & Ball Mastery Basics',
    objectives: ['Develop listening skills', 'Improve gross motor skills', 'Build confidence with the ball', 'Learn to share and play with others'],
    ratio: '1:8',
    pathway: 'Progression to Youth Development (U7)',
    pricing: [
      { name: 'Full Term', amount: 'UGX 300,000', description: '12 weeks' },
      { name: 'Monthly', amount: 'UGX 120,000', description: '4 weeks' }
    ],
    image: 'https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    title: 'Youth Development',
    ageGroup: 'U7-U12',
    shortDescription: 'Skill building and game understanding.',
    description: 'This phase focuses on the "Golden Age of Learning". Players develop their technical foundation, 1v1 skills, and basic tactical understanding. The environment remains fun but introduces more structured coaching points.',
    features: ['Technical drills', 'Small-sided games', 'Position basics', 'Tournament entry'],
    schedule: 'Mon, Wed, Sat (4:30 PM - 6:00 PM)',
    duration: '90 Minutes',
    curriculum: 'Technical Foundation (Passing, Dribbling, Shooting) & Small-Sided Games',
    objectives: ['Mastery of 1v1 situations', 'Understanding space', 'Two-footed ball control', 'Respect and fair play'],
    ratio: '1:12',
    pathway: 'Selection for Academy Competitive Teams',
    pricing: [
      { name: 'Full Term', amount: 'UGX 450,000', description: 'Includes kit' },
      { name: 'Scholarship', amount: 'Merit Based', description: 'Limited slots' }
    ],
    image: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    title: 'Academy Program',
    ageGroup: 'U13-U18',
    shortDescription: 'Competitive pathway for serious players.',
    description: 'A rigorous program for players aiming for high-level competition. We focus on tactical systems, physical conditioning, and mental resilience. Video analysis and individual performance plans are introduced.',
    features: ['Advanced tactics', 'Physical conditioning', 'Video analysis', 'Scouting exposure'],
    schedule: 'Tue, Thu, Fri, Sat (4:00 PM - 6:00 PM)',
    duration: '120 Minutes',
    curriculum: 'Tactical Periodization, Strength & Conditioning, Match Analysis',
    objectives: ['Tactical flexibility', 'Positional expertise', 'Athletic development', 'Leadership skills'],
    ratio: '1:15',
    pathway: 'Elite Program or Regional League Squads',
    pricing: [
      { name: 'Full Term', amount: 'UGX 600,000', description: 'Includes travel' },
      { name: 'Financial Aid', amount: 'Apply', description: 'Needs based' }
    ],
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d6428?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '4',
    title: 'Elite Program',
    ageGroup: 'U19-U21',
    shortDescription: 'Professional preparation and management.',
    description: 'The final step before professional football. This program operates like a pro club environment with daily training, high-intensity matches, and career management services.',
    features: ['Pro-level training', 'Career guidance', 'International trials', 'Media training'],
    schedule: 'Daily Training Sessions',
    duration: '2-3 Hours',
    curriculum: 'Pro-Level Intensity, Advanced Tactics, Career Management',
    objectives: ['Professional contract readiness', 'University scholarship attainment', 'Media handling', 'Elite fitness standards'],
    ratio: '1:18',
    pathway: 'Professional Clubs (Local/Intl) or University Scholarships',
    pricing: [
      { name: 'Scholarship', amount: '100% Covered', description: 'Selection only' }
    ],
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bde9be2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

export const TRIAL_SESSIONS = [
  { id: 't1', date: '2025-03-15', time: '09:00 AM', ageGroup: 'U7-U12', location: 'Main Pitch', fee: 'UGX 20,000' },
  { id: 't2', date: '2025-03-15', time: '02:00 PM', ageGroup: 'U13-U16', location: 'Main Pitch', fee: 'UGX 20,000' },
  { id: 't3', date: '2025-03-22', time: '09:00 AM', ageGroup: 'U17-U21', location: 'Training Ground B', fee: 'UGX 30,000' },
  { id: 't4', date: '2025-03-29', time: '10:00 AM', ageGroup: 'Goalkeepers (All Ages)', location: 'Goal Area 1', fee: 'UGX 25,000' },
];

export const SPECIALIST_PROGRAMS: SpecialistProgram[] = [
  {
    id: 's1',
    title: 'Goalkeeper Academy',
    description: 'Specialized training for the modern goalkeeper, focusing on reflexes, distribution, and command of the area.',
    features: ['Shot stopping', 'Cross handling', 'Distribution', '1v1 techniques'],
    image: 'https://images.unsplash.com/photo-1595786483584-2c069b161c56?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 's2',
    title: 'Holiday Skills Camps',
    description: 'Intensive 1-week clinics during school breaks designed to boost technical skills in a condensed timeframe.',
    features: ['Daily sessions', 'Guest coaches', 'Mini-tournaments', 'Skill challenges'],
    image: 'https://images.unsplash.com/photo-1541252260730-0412e8e2108e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 's3',
    title: '1-on-1 Coaching',
    description: 'Personalized attention to address specific technical weaknesses or accelerate development.',
    features: ['Tailored drills', 'Instant feedback', 'Video review', 'Flexible timing'],
    image: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 's4',
    title: 'Girls Development',
    description: 'Empowering the next generation of female players with dedicated sessions and female coaching staff.',
    features: ['Safe environment', 'Female mentors', 'Confidence building', 'League play'],
    image: 'https://images.unsplash.com/photo-1606297126154-e0c1a2c35831?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 's5',
    title: 'Inclusive Football',
    description: 'Adaptive football sessions for players with disabilities, ensuring the beautiful game is for everyone.',
    features: ['Adapted equipment', 'Specialized support', 'Fun focus', 'Community building'],
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
  }
];

export const STATS: Stat[] = [
  { label: 'Players Trained', value: '1,200+', icon: 'Users' },
  { label: 'Tournaments Won', value: '45', icon: 'Trophy' },
  { label: 'Years Excellence', value: '10', icon: 'Star' },
  { label: 'Pro Signings', value: '12', icon: 'Briefcase' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah K.',
    role: 'Parent',
    content: 'Star Hearts has transformed my son’s confidence both on and off the pitch. The coaches are incredible mentors.',
    image: 'https://picsum.photos/100/100?random=1'
  },
  {
    id: '2',
    name: 'David O.',
    role: 'Alumni (Now Pro)',
    content: 'The foundation I built at Star Hearts Academy was crucial for my professional career in Europe.',
    image: 'https://picsum.photos/100/100?random=2'
  }
];

export const MOCK_PLAYERS: Player[] = [
  { id: 'P001', name: 'James Okello', ageGroup: 'U14', position: 'Midfielder', status: 'Active', registrationDate: '2025-01-10', paymentStatus: 'Paid' },
  { id: 'P002', name: 'Maria Nansubuga', ageGroup: 'U10', position: 'Forward', status: 'Active', registrationDate: '2025-01-12', paymentStatus: 'Paid' },
  { id: 'P003', name: 'Joseph Kato', ageGroup: 'U16', position: 'Defender', status: 'Pending', registrationDate: '2025-02-01', paymentStatus: 'Due' },
  { id: 'P004', name: 'Samuel Opio', ageGroup: 'U12', position: 'Goalkeeper', status: 'Inactive', registrationDate: '2024-11-20', paymentStatus: 'Overdue' },
  { id: 'P005', name: 'Grace Akello', ageGroup: 'U8', position: 'Forward', status: 'Active', registrationDate: '2025-02-14', paymentStatus: 'Paid' },
];

export const MOCK_REGISTRATIONS: Registration[] = [
  { id: 'R001', childName: 'David Kintu', dob: '2015-05-20', guardianName: 'Moses Kintu', email: 'moses.k@email.com', phone: '0772123456', program: 'Youth Development (U10)', status: 'New', submissionDate: '2025-03-10' },
  { id: 'R002', childName: 'Sarah Apio', dob: '2012-08-15', guardianName: 'Jane Apio', email: 'jane.a@email.com', phone: '0701987654', program: 'Academy Program (U13)', status: 'Trial', submissionDate: '2025-03-08', trialDate: '2025-03-15' },
  { id: 'R003', childName: 'John Bosco', dob: '2014-02-10', guardianName: 'Peter Bosco', email: 'peter.b@email.com', phone: '0755112233', program: 'Youth Development (U11)', status: 'Pending', submissionDate: '2025-03-05', notes: 'Waiting for birth certificate copy' },
  { id: 'R004', childName: 'Mary Nakato', dob: '2016-11-25', guardianName: 'Rose Nakato', email: 'rose.n@email.com', phone: '0788998877', program: 'Little Lions (U6)', status: 'Incomplete', submissionDate: '2025-03-01', notes: 'Guardian contact incomplete' },
  { id: 'R005', childName: 'Ivan Ssemwanga', dob: '2008-01-30', guardianName: 'Paul Ssemwanga', email: 'paul.s@email.com', phone: '0702334455', program: 'Elite Program (U17)', status: 'Approved', submissionDate: '2025-02-28', paymentStatus: 'Pending' }
];

export const MOCK_ATTENDANCE_RECORDS: AttendanceRecord[] = [
  { id: 'A001', playerId: 'P001', playerName: 'James Okello', date: '2025-03-10', programId: '3', status: 'Present' },
  { id: 'A002', playerId: 'P001', playerName: 'James Okello', date: '2025-03-08', programId: '3', status: 'Present' },
  { id: 'A003', playerId: 'P001', playerName: 'James Okello', date: '2025-03-05', programId: '3', status: 'Late', notes: 'Traffic' },
  { id: 'A004', playerId: 'P002', playerName: 'Maria Nansubuga', date: '2025-03-10', programId: '2', status: 'Present' },
  { id: 'A005', playerId: 'P002', playerName: 'Maria Nansubuga', date: '2025-03-08', programId: '2', status: 'Absent', notes: 'Sick' },
  { id: 'A006', playerId: 'P003', playerName: 'Joseph Kato', date: '2025-03-10', programId: '3', status: 'Excused', notes: 'School Exam' },
];

export const MOCK_ASSESSMENTS: Assessment[] = [
  {
    id: 'EV001',
    playerId: 'P001',
    date: '2025-02-28',
    coach: 'Sarah Nakato',
    technical: 8.5,
    tactical: 7.0,
    physical: 8.0,
    mental: 9.0,
    overall: 8.1,
    notes: 'James is showing exceptional leadership skills on the pitch. His ball control under pressure has improved significantly.',
    detailedRatings: [
      { category: 'Technical', skill: 'Dribbling', score: 9 },
      { category: 'Technical', skill: 'Passing', score: 8 },
      { category: 'Tactical', skill: 'Positioning', score: 7 },
      { category: 'Physical', skill: 'Speed', score: 8 },
      { category: 'Mental', skill: 'Confidence', score: 9 }
    ]
  },
  {
    id: 'EV002',
    playerId: 'P001',
    date: '2025-01-30',
    coach: 'Sarah Nakato',
    technical: 8.0,
    tactical: 6.5,
    physical: 7.8,
    mental: 8.5,
    overall: 7.7,
    notes: 'Good progress. Needs to work on tracking back defensively.'
  }
];

export const MOCK_PLAYER_VIDEOS: VideoAnalysis[] = [
  {
    id: 'V001',
    playerId: 'P001',
    title: 'Match Highlights vs City Stars',
    date: '2025-03-12',
    url: 'https://images.unsplash.com/photo-1579952363873-27f3bde9be2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', // Using image as video placeholder
    thumbnail: 'https://images.unsplash.com/photo-1579952363873-27f3bde9be2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    notes: '04:20 - Excellent vision to find the winger. 12:15 - Need to release the ball quicker.',
    tags: ['Match', 'Passing', 'Vision']
  },
  {
    id: 'V002',
    playerId: 'P001',
    title: 'Training Session: 1v1 Drills',
    date: '2025-03-05',
    url: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    notes: 'Great use of body feints.',
    tags: ['Training', 'Dribbling']
  }
];

export const DRILL_LIBRARY: Drill[] = [
  {
    id: 'D001',
    name: 'Rondo: 4v2 Possession',
    category: 'Technical',
    duration: '15 mins',
    description: 'Classic possession game. 4 players on the outside keep the ball away from 2 defenders in the middle.',
    image: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    objectives: ['Improve passing accuracy', 'Quick decision making', 'Defensive pressing']
  },
  {
    id: 'D002',
    name: '1v1 Attacking Channels',
    category: 'Tactical',
    duration: '20 mins',
    description: 'Players attack a defender in a narrow channel, encouraging skill moves and acceleration.',
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d6428?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    objectives: ['Confidence in 1v1', 'Beating defenders', 'Finishing under pressure']
  },
  {
    id: 'D003',
    name: 'High Intensity Interval Runs',
    category: 'Fitness',
    duration: '20 mins',
    description: 'Box to box sprints with varied recovery times.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    objectives: ['Anaerobic endurance', 'Match fitness']
  }
];

export const MOCK_TRAINING_SESSIONS: TrainingSession[] = [
  {
    id: 'TS001',
    date: '2025-03-20',
    time: '16:00',
    team: 'U14 Academy',
    title: 'Playing Out From The Back',
    objectives: ['Confidence in possession', 'Full back positioning', 'Breaking the first line of pressure'],
    drills: [DRILL_LIBRARY[0], DRILL_LIBRARY[1]],
    equipment: ['Cones', 'Balls', 'Bibs'],
    notes: 'Focus on the center backs splitting wide.'
  }
];

export const MOCK_MATCH_RECORDS: MatchRecord[] = [
  {
    id: 'MR001',
    date: '2025-03-10',
    opponent: 'City Stars Academy',
    team: 'U14',
    homeOrAway: 'Home',
    homeScore: 2,
    awayScore: 1,
    competition: 'Kampala Junior League',
    status: 'Completed',
    playerStats: [
      { playerId: 'P001', playerName: 'James Okello', goals: 2, assists: 0, minutesPlayed: 70, rating: 9.0 },
      { playerId: 'P003', playerName: 'Joseph Kato', goals: 0, assists: 1, minutesPlayed: 70, rating: 7.5 }
    ],
    report: 'A hard fought victory. The team showed great resilience after conceding early. James Okello was outstanding.'
  },
  {
    id: 'MR002',
    date: '2025-03-17',
    opponent: 'Vipers Junior Team',
    team: 'U14',
    homeOrAway: 'Away',
    homeScore: 0,
    awayScore: 0,
    competition: 'Kampala Junior League',
    status: 'Upcoming',
    playerStats: [],
    report: ''
  }
];

// PARENT PORTAL MOCK DATA
export const MOCK_INVOICES: Invoice[] = [
  { 
    id: 'INV-2025-001', 
    date: '2025-01-05', 
    description: 'Term 1 Tuition', 
    amount: 'UGX 450,000', 
    totalAmount: 450000,
    status: 'Paid', 
    dueDate: '2025-01-20',
    recipientName: 'Moses Kintu',
    items: [{ id: '1', description: 'Tuition Fee Term 1', amount: 450000 }]
  },
  { 
    id: 'INV-2025-015', 
    date: '2025-02-15', 
    description: 'Annual Registration', 
    amount: 'UGX 50,000',
    totalAmount: 50000,
    status: 'Paid', 
    dueDate: '2025-02-20',
    recipientName: 'Moses Kintu',
    items: [{ id: '1', description: 'Registration Fee 2025', amount: 50000 }]
  },
  { 
    id: 'INV-2025-023', 
    date: '2025-03-01', 
    description: 'Tour Bus Fee (Gothia)', 
    amount: 'UGX 150,000', 
    totalAmount: 150000,
    status: 'Pending', 
    dueDate: '2025-03-15',
    recipientName: 'Moses Kintu',
    items: [{ id: '1', description: 'Transport Contribution', amount: 150000 }]
  },
];

export const MOCK_DISCOUNTS: DiscountRule[] = [
  { id: 'D1', name: 'Sibling Discount', type: 'Percentage', value: 10, description: '10% off for the second child onwards.' },
  { id: 'D2', name: 'Early Bird', type: 'Percentage', value: 5, description: '5% off if paid before the term starts.' },
  { id: 'D3', name: 'Staff Child', type: 'Percentage', value: 50, description: '50% off for children of full-time staff.' }
];

export const MOCK_SCHOLARSHIPS: Scholarship[] = [
  { id: 'S1', name: 'Community Excellence', budget: 10000000, allocated: 4500000, beneficiaries: 12, criteria: 'Talented players from Kawempe community with financial need.' },
  { id: 'S2', name: 'Academic Merit', budget: 5000000, allocated: 1200000, beneficiaries: 3, criteria: 'Players maintaining a GPA > 3.5' },
  { id: 'S3', name: 'Director\'s Fund', budget: 2000000, allocated: 500000, beneficiaries: 2, criteria: 'Discretionary fund for emergency support.' }
];

export const MOCK_FORMS: FormTemplate[] = [
  {
    id: 'F001',
    title: 'Academy Registration 2025',
    description: 'Standard intake form for new players.',
    version: 1.2,
    status: 'Active',
    responses: 145,
    lastUpdated: '2025-03-01',
    fields: [
      { id: 'f1', type: 'text', label: 'Player Full Name', required: true, placeholder: 'e.g. James Okello' },
      { id: 'f2', type: 'date', label: 'Date of Birth', required: true },
      { id: 'f3', type: 'select', label: 'Position', required: false, options: ['Forward', 'Midfielder', 'Defender', 'Goalkeeper'] },
      { id: 'f4', type: 'email', label: 'Guardian Email', required: true, placeholder: 'parent@email.com' }
    ]
  },
  {
    id: 'F002',
    title: 'Medical Consent Form',
    description: 'Mandatory for all travelling squads.',
    version: 1.0,
    status: 'Draft',
    responses: 0,
    lastUpdated: '2025-03-10',
    fields: [
      { id: 'm1', type: 'text', label: 'Emergency Contact Name', required: true },
      { id: 'm2', type: 'text', label: 'Doctor Name', required: false },
      { id: 'm3', type: 'checkbox', label: 'I agree to emergency treatment', required: true }
    ]
  }
];

export const NEWS_UPDATES: NewsItem[] = [
  { id: '1', title: 'U14 Team Wins Regional Cup', date: 'March 10, 2025', summary: 'Our U14 squad showed exceptional resilience to win the Kampala Regional Cup.', category: 'Match Report' },
  { id: '2', title: 'Registration Open for Term 2', date: 'March 1, 2025', summary: 'Secure your slot for the upcoming term. Early bird discounts available.', category: 'Announcement' },
  { id: '3', title: 'New Pitch Lighting Installed', date: 'Feb 25, 2025', summary: 'Evening training sessions just got better with our new FIFA-standard floodlights.', category: 'Announcement' },
];

export const UPCOMING_EVENTS: CalendarEvent[] = [
  { id: '1', title: 'Open Trials U10-U14', date: '2025-03-15', day: '15', month: 'MAR', time: '09:00 AM', location: 'Main Pitch, Kitende', type: 'Trial' },
  { id: '2', title: 'Parent & Coach Mixer', date: '2025-03-20', day: '20', month: 'MAR', time: '06:00 PM', location: 'Academy Hall', type: 'Social' },
  { id: '3', title: 'Regional League Match', date: '2025-03-22', day: '22', month: 'MAR', time: '04:00 PM', location: 'Away vs City Stars', type: 'Match' },
  { id: '4', title: 'Elite Squad Video Analysis', date: '2025-03-25', day: '25', month: 'MAR', time: '02:00 PM', location: 'Media Room', type: 'Training' }
];

export const PARTNERS: Partner[] = [
  { id: '1', name: 'Standard Bank', logo: 'https://placehold.co/200x80?text=Standard+Bank', tier: 'Platinum', description: 'Official Academy Banking Partner' },
  { id: '2', name: 'Airtel', logo: 'https://placehold.co/200x80?text=Airtel', tier: 'Gold', description: 'Telecommunications & Data Partner' },
  { id: '3', name: 'Umbro', logo: 'https://placehold.co/200x80?text=Umbro', tier: 'Equipment', description: 'Official Kit Supplier' },
  { id: '4', name: 'PowerEnergy', logo: 'https://placehold.co/200x80?text=PowerEnergy', tier: 'Silver', description: 'Hydration Partner' },
  { id: '5', name: 'City Hospital', logo: 'https://placehold.co/200x80?text=City+Hospital', tier: 'Silver', description: 'Medical Support' },
  { id: '6', name: 'Kampala International School', logo: 'https://placehold.co/200x80?text=KISU', tier: 'Education', description: 'Academic Scholarship Partner' },
  { id: '7', name: 'Real Sociedad', logo: 'https://placehold.co/200x80?text=Real+Sociedad', tier: 'International', description: 'Technical Affiliation' }
];

export const DIRECTOR_INFO = {
  name: 'Coach Michael Ssebo',
  role: 'Academy Director',
  image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
  message: "At Star Hearts, we believe that football is more than just a game; it's a school of life. Our mission is to nurture talent with integrity, ensuring every child has the opportunity to shine on and off the pitch. Welcome to our family."
};

// ABOUT US DATA

export const ACADEMY_HISTORY = "Founded in 2015 on a dusty pitch in Kawempe with just 15 balls and a dream, Star Hearts Sports Academy has grown into East Africa's premier youth development institution. What started as a community project to keep kids off the streets has evolved into a fully accredited academy with over 500 active players, sending talent to national teams and professional clubs across the globe.";

export const PHILOSOPHY = "Our 'Total Player' methodology goes beyond technical skills. We combine modern tactical training with physical conditioning, psychological resilience, and academic support. We believe that a great footballer must first be a great person, which is why character development is integrated into every session.";

export const TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Michael Ssebo',
    role: 'Academy Director',
    bio: 'Michael is the visionary behind Star Hearts. With a career spanning over 15 years in top-flight African football and stints in Europe, he brings a wealth of experience. His leadership is driven by a passion to give every child a chance to succeed.',
    image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    qualifications: ['CAF A License', 'FIFA Football Management Diploma', 'UEFA B License'],
    playingCareer: 'Former National Team Captain (Uganda Cranes), played professionally in South Africa (Kaizer Chiefs) and Serbia.',
    coachingPhilosophy: 'I believe in holistic development. We don\'t just build players; we build people. My tactical approach emphasizes intelligent possession and high pressing.',
    specializations: ['Tactical Periodization', 'Leadership', 'Elite Performance'],
    experience: '15 Years (Pro Player), 8 Years (Coaching)',
    languages: ['English', 'Luganda', 'Swahili'],
    email: 'michael.ssebo@starheartsacademy.com',
    socials: { twitter: '#', linkedin: '#', facebook: '#' }
  },
  {
    id: '2',
    name: 'Sarah Nakato',
    role: 'Head of Youth Development',
    bio: 'Sarah is a specialist in early childhood sports education. Her infectious energy and deep understanding of child psychology make her the perfect leader for our Foundation Phase.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    qualifications: ['CAF B License', 'Diploma in Child Psychology', 'First Aid Certified'],
    playingCareer: 'Played for She Corporates in the FUFA Women Elite League. Represented Uganda U20.',
    coachingPhilosophy: 'Fun is the best teacher. At the youth level, we prioritize ball mastery and creativity over tactical rigidity. Every child develops at their own pace.',
    specializations: ['Grassroots Development', 'Talent Identification', 'Child Psychology'],
    experience: '6 Years',
    languages: ['English', 'Luganda'],
    email: 'sarah.nakato@starheartsacademy.com',
    socials: { linkedin: '#', twitter: '#' }
  },
  {
    id: '3',
    name: 'Coach John Doe',
    role: 'Technical Director',
    bio: 'John oversees the technical curriculum across all age groups. A stickler for detail, he ensures our training methodology aligns with modern international standards.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    qualifications: ['UEFA A License', 'BSc Sports Science', 'Video Analysis Certification'],
    playingCareer: 'Academy graduate who played semi-professionally in the UK while completing university studies.',
    coachingPhilosophy: 'The game is the teacher. My role is to create scenarios in training that replicate match situations, forcing players to solve problems in real-time.',
    specializations: ['Curriculum Design', 'Video Analysis', 'Match Strategy'],
    experience: '10 Years',
    languages: ['English', 'French'],
    email: 'john.doe@starheartsacademy.com',
    socials: { linkedin: '#' }
  },
  {
    id: '4',
    name: 'David Okello',
    role: 'Goalkeeping Coach',
    bio: 'David is tasked with developing our last line of defense. He focuses on modern goalkeeping techniques including distribution and playing out from the back.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    qualifications: ['CAF C License', 'Goalkeeping Level 2'],
    playingCareer: '10 years in the Uganda Premier League with URA FC and Express FC.',
    coachingPhilosophy: 'A goalkeeper must be the first attacker and the last defender. Confidence and communication are as important as shot-stopping.',
    specializations: ['Goalkeeping', 'Set Plays'],
    experience: '5 Years',
    languages: ['English', 'Luganda', 'Swahili'],
    email: 'david.okello@starheartsacademy.com',
    socials: { facebook: '#' }
  }
];

export const FACILITIES: Facility[] = [
  {
    id: 'f1',
    name: 'Main Stadium Pitch',
    description: 'Our crown jewel—a full-size FIFA-standard artificial turf pitch designed for competitive matches and high-level training.',
    image: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    specs: ['105m x 68m Dimensions', 'FIFA Quality Pro Certification', '500-seat covered stand', 'Broadcast-ready gantry'],
    category: 'Training'
  },
  {
    id: 'f2',
    name: 'Training Grounds',
    description: 'Versatile training surfaces including natural grass for tactical drills and small-sided grids for technical work.',
    image: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    specs: ['2 Natural Grass Pitches', '1 Rubber-crumb 5-a-side court', 'Sand pit for resistance training'],
    category: 'Training'
  },
  {
    id: 'f3',
    name: 'Floodlit Arena',
    description: 'Evening sessions continue uninterrupted with our professional-grade LED floodlighting system.',
    image: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    specs: ['500 Lux LED System', 'Auto-dimming capability', 'Shadow-free coverage'],
    category: 'Training'
  },
  {
    id: 'f4',
    name: 'Performance Gym',
    description: 'A fully equipped fitness center focused on football-specific strength, conditioning, and injury prevention.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    specs: ['Olympic lifting platforms', 'Cardio zone', 'Functional movement area', 'Recovery boots station'],
    category: 'Wellness'
  },
  {
    id: 'f5',
    name: 'Medical & Physio Room',
    description: 'On-site medical support ensures player safety and rapid recovery from knocks and injuries.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    specs: ['Examination beds', 'Ultrasound equipment', 'Ice bath facilities', 'Full-time physiotherapist'],
    category: 'Wellness'
  },
  {
    id: 'f6',
    name: 'Video Analysis Suite',
    description: 'A modern classroom environment where players analyze match footage and learn tactical theory.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    specs: ['85-inch 4K Interactive Display', 'Tactical software suite', 'Seating for 30 players', 'Individual tablet stations'],
    category: 'Education'
  },
  {
    id: 'f7',
    name: 'Player Lounge',
    description: 'A dedicated space for relaxation and team bonding between sessions.',
    image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    specs: ['Gaming consoles', 'Study area', 'Kitchenette', 'Comfortable seating'],
    category: 'Social'
  },
  {
    id: 'f8',
    name: 'Changing Rooms',
    description: 'Professional standard locker rooms designed to create a team atmosphere.',
    image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    specs: ['Individual lockers', 'Showers', 'Tactical whiteboards', 'Boot room'],
    category: 'Social'
  }
];

export const AWARDS: Award[] = [
  { id: '1', title: 'Best Youth Academy', year: '2024', organization: 'Uganda Football Federation' },
  { id: '2', title: 'Community Impact Award', year: '2023', organization: 'Kampala City Council' },
  { id: '3', title: 'Regional U17 Champions', year: '2023', organization: 'East Africa Cup' }
];

export const IMPACT_STATS: Stat[] = [
  { label: 'Scholarships Awarded', value: '150+', icon: 'Award' },
  { label: 'Community Hours', value: '5,000+', icon: 'Clock' },
  { label: 'Girls Empowered', value: '400+', icon: 'Heart' },
  { label: 'Schools Partnered', value: '25', icon: 'Book' }
];

export const PATHWAY_STAGES: PathwayStage[] = [
  {
    id: 'p1',
    title: 'Foundation Phase',
    ageRange: 'U5 - U8',
    focus: 'Ball Mastery & Fun',
    description: 'Igniting the love for the game. The focus is purely on the relationship between the player and the ball. We encourage freedom, creativity, and expression without the pressure of results.',
    metrics: ['Ball control with both feet', 'Basic coordination (ABCs)', 'Listening skills', 'Enjoyment level'],
    requirements: ['Regular attendance', 'Positive attitude', 'Enthusiasm to learn'],
    opportunities: ['Internal fun festivals', 'Mascot experiences', 'Community gala days']
  },
  {
    id: 'p2',
    title: 'Development Phase',
    ageRange: 'U9 - U12',
    focus: 'Technical Skills & Game Insight',
    description: 'Learning to play together. Introduction of positions, basic tactics, and refining technique under pressure. Players begin to understand space, support, and the rules of the game.',
    metrics: ['1v1 dominance (Att/Def)', 'Passing range & accuracy', 'Spatial awareness', 'Communication'],
    requirements: ['Technical assessment pass', 'Coach recommendation', 'Teamwork evaluation'],
    opportunities: ['Regional youth leagues', 'Holiday skills camps', 'School partnership matches', 'Captaincy roles']
  },
  {
    id: 'p3',
    title: 'Professional Phase',
    ageRange: 'U13 - U16',
    focus: 'Tactical Periodization & Competitiveness',
    description: 'Training to win. High-intensity tactical work, strength & conditioning, and video analysis. Players are exposed to complex systems of play and competitive league structures.',
    metrics: ['Tactical understanding', 'Physical endurance tests', 'Mental resilience', 'Match performance consistency'],
    requirements: ['Academy trials selection', 'Fitness test standards', 'Academic baseline maintenance'],
    opportunities: ['National youth leagues', 'International youth tournaments (Gothia Cup)', 'National team U15/U17 call-ups', 'Video analysis workshops']
  },
  {
    id: 'p4',
    title: 'Elite / Performance Phase',
    ageRange: 'U17 - U21',
    focus: 'Pro Readiness & Career Management',
    description: 'The final step. Polishing the diamond for professional contracts or university scholarships. Focus shifts to winning, career management, and elite physical conditioning.',
    metrics: ['Pro-level fitness stats', 'Position-specific mastery', 'Media handling', 'Leadership impact'],
    requirements: ['Professional contract offer', 'Agent representation', 'Scout validation', 'Video showreel completion'],
    opportunities: ['Pro club trials (Europe/Africa)', 'US University Scholarships (NCAA)', 'Uganda Premier League loans', 'Showcase events']
  }
];

export const ALUMNI_STORIES: AlumniStory[] = [
    {
        id: 'a1',
        name: 'Joseph Ochaya',
        currentClub: 'Arab Contractors (Egypt)',
        currentLevel: 'Professional',
        position: 'Defender',
        graduationYear: '2016',
        image: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        pathway: 'Academy → KCCA FC → TP Mazembe → Pro Contract',
        journey: 'Joseph started as a raw talent in our U12 setup. His dedication to defensive discipline and overlapping runs made him a standout. After dominating the local league with KCCA, he moved to TP Mazembe and now plays in the Egyptian Premier League.',
        quote: "Star Hearts taught me that talent is nothing without discipline. The pathway is clear if you put in the work.",
        stats: [{ label: 'Caps', value: '45' }, { label: 'Goals', value: '12' }, { label: 'Assists', value: '28' }],
        socials: { twitter: '#', instagram: '#' }
    },
    {
        id: 'a2',
        name: 'Grace N.',
        currentClub: 'University of Kentucky (USA)',
        currentLevel: 'University',
        position: 'Midfielder',
        graduationYear: '2022',
        image: 'https://images.unsplash.com/photo-1434648957308-5e6a859697e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        pathway: 'Girls Dev → U17 National Team → NCAA D1 Scholarship',
        journey: 'Grace balanced elite academics with football. Her vision on the field is unmatched. The academy helped her prepare her highlight reels and SATs, leading to a full scholarship in the USA.',
        quote: "The academic support at the academy was just as important as the coaching. They helped me achieve my dream of studying abroad.",
        stats: [{ label: 'GPA', value: '3.8' }, { label: 'Apps', value: '22' }],
        socials: { instagram: '#' }
    },
    {
        id: 'a3',
        name: 'Samuel K.',
        currentClub: 'Vipers SC',
        currentLevel: 'Professional',
        position: 'Forward',
        graduationYear: '2023',
        image: 'https://images.unsplash.com/photo-1517466787929-bc90951d6428?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        pathway: 'U10 → U17 Elite → Senior Team Debut',
        journey: 'A prolific goal scorer through all age groups. Samuel broke the academy goal scoring record in 2022. He was scouted by Vipers SC and scored on his debut.',
        quote: "Every drill, every sprint at Star Hearts prepared me for the intensity of the Premier League.",
        stats: [{ label: 'Goals', value: '15' }, { label: 'MOTM', value: '4' }],
        socials: { twitter: '#' }
    }
];

// TOURNAMENT DATA
export const UPCOMING_TOURNAMENTS: Tournament[] = [
  {
    id: 't1',
    name: 'Gothia Cup 2025',
    dates: 'July 13 - 19, 2025',
    location: 'Gothenburg, Sweden',
    category: 'International',
    status: 'Upcoming',
    registrationOpen: true,
    description: 'The world’s largest and most international youth football tournament. Our U15 and U17 squads will represent Uganda.',
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0565c6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 't2',
    name: 'Kampala Junior League',
    dates: 'April 2025 - June 2025',
    location: 'Kampala, Uganda',
    category: 'League',
    status: 'Ongoing',
    registrationOpen: false,
    description: 'The premier local league for U10-U14 development squads to gain competitive match experience.',
    image: 'https://images.unsplash.com/photo-1556680262-9990363a3e6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 't3',
    name: 'East Africa Cup',
    dates: 'August 2025',
    location: 'Arusha, Tanzania',
    category: 'Regional',
    status: 'Upcoming',
    registrationOpen: true,
    description: 'A regional showpiece bringing together the best academies from Uganda, Kenya, Tanzania, and Rwanda.',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
  }
];

export const MATCH_RESULTS: MatchResult[] = [
  {
    id: 'm1',
    tournament: 'Kampala Junior League',
    homeTeam: 'Star Hearts U14',
    awayTeam: 'City Stars',
    homeScore: 2,
    awayScore: 1,
    date: 'Today',
    status: 'Live',
    minute: '75',
    logoHome: 'SH',
    logoAway: 'CS'
  },
  {
    id: 'm2',
    tournament: 'Friendly',
    homeTeam: 'Star Hearts U17',
    awayTeam: 'KCCA Junior',
    homeScore: 1,
    awayScore: 1,
    date: 'Yesterday',
    status: 'FT',
    logoHome: 'SH',
    logoAway: 'KC'
  },
  {
    id: 'm3',
    tournament: 'Regional Cup',
    homeTeam: 'Vipers Junior',
    awayTeam: 'Star Hearts U15',
    homeScore: 0,
    awayScore: 3,
    date: '10 Mar 2025',
    status: 'FT',
    logoHome: 'VJ',
    logoAway: 'SH'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'New Artificial Turf Installation Begins',
    excerpt: 'Exciting times ahead as we upgrade our main training pitch to FIFA Quality Pro standards.',
    content: 'We are thrilled to announce that the renovation of our main pitch at Kitende has commenced. This 3-month project will see the installation of a state-of-the-art artificial turf system, approved by FIFA for professional competition. This upgrade ensures consistent training surfaces year-round, regardless of weather conditions. The new pitch will also feature improved drainage and shock absorption technology to reduce injury risks for our young athletes.',
    author: 'Admin',
    role: 'Administration',
    date: 'Mar 12, 2025',
    category: 'News',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    readTime: '3 min',
    likes: 124,
    comments: 18
  },
  {
    id: 'b2',
    title: 'Match Report: U14s Comeback Victory',
    excerpt: 'A thrilling second half performance secures 3 points against City Stars Academy.',
    content: 'It was a game of two halves at the Kampala Junior League yesterday. Trailing 1-0 at the break, the Star Hearts U14 squad showed incredible character. A motivational talk from Coach Sarah sparked a fire in the belly of the young lions. Two quick goals from James Okello in the 55th and 60th minutes turned the tide. The defensive unit held firm in the final minutes to secure a well-deserved 2-1 victory.',
    author: 'Coach Sarah',
    role: 'U14 Head Coach',
    date: 'Mar 10, 2025',
    category: 'Match Report',
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d6428?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    readTime: '4 min',
    likes: 89,
    comments: 12
  },
  {
    id: 'b3',
    title: 'Nutrition 101: Fueling for Game Day',
    excerpt: 'Expert advice on what to eat before and after matches for peak performance.',
    content: 'Nutrition is often the missing link in youth development. For game day, focus on complex carbohydrates 3-4 hours before kick-off. Think pasta, rice, or sweet potatoes. Hydration should start 24 hours prior, not just an hour before. Post-match, protein is key for muscle recovery. A chocolate milk or a chicken wrap within 30 minutes of the final whistle can make a significant difference in recovery time.',
    author: 'Dr. A. Mukasa',
    role: 'Academy Physio',
    date: 'Mar 05, 2025',
    category: 'Nutrition',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    readTime: '5 min',
    likes: 210,
    comments: 45
  },
  {
    id: 'b4',
    title: 'Supporting Your Young Athlete',
    excerpt: 'A guide for parents on providing the right emotional support from the sidelines.',
    content: 'The role of a sporting parent is challenging. It is natural to want your child to win, but at the development stage, the focus must be on effort and learning. Avoid "coaching" from the sidelines as it confuses the player. Instead, be their biggest cheerleader. After the game, ask "Did you have fun?" rather than "Did you win?". This simple shift in mindset helps build a healthy relationship with the sport.',
    author: 'Michael Ssebo',
    role: 'Director',
    date: 'Feb 28, 2025',
    category: 'Parents',
    image: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    readTime: '6 min',
    likes: 345,
    comments: 67
  },
  {
    id: 'b5',
    title: 'Spotlight: Meet Grace, Our U12 Captain',
    excerpt: 'An interview with one of our most promising talents about her journey so far.',
    content: 'Grace Akello joined Star Hearts at age 6. Now 11, she captains the U12 girls team with distinction. "I love the environment here," she says. "The coaches push us hard but they also make us laugh." Grace dreams of playing for the She Cranes (National Team) and becoming a doctor. Her discipline on the pitch mirrors her dedication in the classroom, where she is a top student.',
    author: 'Media Team',
    role: 'Staff',
    date: 'Feb 15, 2025',
    category: 'Player Spotlight',
    image: 'https://images.unsplash.com/photo-1526976668912-1a811878dd37?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    readTime: '3 min',
    likes: 156,
    comments: 23
  },
  {
    id: 'b6',
    title: 'Community Clean-Up Drive Success',
    excerpt: 'Our players and staff gave back to the Kawempe community this weekend.',
    content: 'Football is about community. This Saturday, over 50 players and staff participated in a clean-up drive in the neighborhood surrounding our training grounds. Armed with gloves and bags, the team collected over 200kg of waste. It was a humbling experience that reinforced our core value of civic responsibility. We thank the local council for their partnership in this initiative.',
    author: 'Events Team',
    role: 'Community Outreach',
    date: 'Feb 10, 2025',
    category: 'Community',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    readTime: '2 min',
    likes: 278,
    comments: 31
  }
];

export const MOCK_STAFF_USERS = [
  { id: 'S001', name: 'Michael Ssebo', role: 'Academy Director', email: 'michael@starheartsacademy.com', status: 'Active', accessLevel: 'Super Admin' },
  { id: 'S002', name: 'Sarah Nakato', role: 'Head Coach U12', email: 'sarah@starheartsacademy.com', status: 'Active', accessLevel: 'Coaching Staff' },
  { id: 'S003', name: 'John Doe', role: 'Finance Manager', email: 'finance@starheartsacademy.com', status: 'Active', accessLevel: 'Finance Manager' },
  { id: 'S004', name: 'Jane Smith', role: 'Comms Manager', email: 'comms@starheartsacademy.com', status: 'Active', accessLevel: 'Communications Manager' },
  { id: 'S005', name: 'Reception Desk', role: 'Admin Assistant', email: 'frontdesk@starheartsacademy.com', status: 'Active', accessLevel: 'Reception/Admin' },
];

export const SHOP_ITEMS: ShopItem[] = [
  { id: '1', name: 'Home Kit 2025', price: 'UGX 80,000', image: 'https://images.unsplash.com/photo-1577212017184-8b27d63223f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', category: 'Kit', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
  { id: '2', name: 'Away Kit 2025', price: 'UGX 80,000', image: 'https://images.unsplash.com/photo-1552066344-2464c1135c32?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', category: 'Kit', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
  { id: '3', name: 'Training Jersey', price: 'UGX 50,000', image: 'https://images.unsplash.com/photo-1544698310-74ea9d188d17?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', category: 'Kit', sizes: ['S', 'M', 'L'] },
  { id: '4', name: 'Academy Backpack', price: 'UGX 65,000', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', category: 'Merch' },
  { id: '5', name: 'Water Bottle', price: 'UGX 25,000', image: 'https://images.unsplash.com/photo-1602143407151-011141959845?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', category: 'Merch' },
  { id: '6', name: 'Shin Guards', price: 'UGX 30,000', image: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', category: 'Equipment', sizes: ['S', 'M', 'L'] }
];

export const SPONSORSHIP_TIERS: SponsorshipTier[] = [
  {
    name: 'Platinum',
    price: 'UGX 100M / Year',
    benefits: ['Front of Shirt Branding', 'Stadium Naming Rights', 'VIP Match Day Experience', 'Digital Media Coverage'],
    color: 'bg-gray-800',
    icon: 'Trophy'
  },
  {
    name: 'Gold',
    price: 'UGX 50M / Year',
    benefits: ['Sleeve Branding', 'Pitch-side Boards', 'Signed Jersey', 'Website Feature'],
    color: 'bg-yellow-500',
    icon: 'Star'
  },
  {
    name: 'Silver',
    price: 'UGX 25M / Year',
    benefits: ['Training Kit Logo', 'Social Media Shoutouts', 'Annual Dinner Invite'],
    color: 'bg-gray-400',
    icon: 'Award'
  }
];

export const SPONSOR_CHILDREN: SponsoredChild[] = [
  {
    id: 'sc1',
    alias: 'John O.',
    age: 12,
    story: 'A gifted midfielder from a single-parent home. Needs support for travel to regional tournaments.',
    dream: 'To play for the Cranes',
    fundingNeeded: 'UGX 500,000',
    image: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    category: 'Travel'
  },
  {
    id: 'sc2',
    alias: 'Mary K.',
    age: 14,
    story: 'Top scorer in the girls league. Requires new boots and school fees support.',
    dream: 'To become a doctor and footballer',
    fundingNeeded: 'UGX 800,000',
    image: 'https://images.unsplash.com/photo-1526976668912-1a811878dd37?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    category: 'Kit'
  },
  {
    id: 'sc3',
    alias: 'Peter S.',
    age: 10,
    story: 'Orphaned at a young age, Peter finds solace in football. Needs full kit sponsorship.',
    dream: 'To be like Messi',
    fundingNeeded: 'UGX 300,000',
    image: 'https://images.unsplash.com/photo-1485315758249-f53835f8386b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    category: 'Full Scholarship'
  },
  {
    id: 'sc4',
    alias: 'Sarah N.',
    age: 16,
    story: 'Seeking university scholarship opportunities. Needs help with SAT prep and video portfolio.',
    dream: 'Study in the USA',
    fundingNeeded: 'UGX 1,500,000',
    image: 'https://images.unsplash.com/photo-1434648957308-5e6a859697e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    category: 'Education'
  }
];

export const PARENT_NOTIFICATIONS = [
  { id: '1', message: 'Term 2 fees are due next week', time: '2 hours ago', type: 'Payment' },
  { id: '2', message: 'Match vs City Stars moved to 10 AM', time: '1 day ago', type: 'Schedule' },
  { id: '3', message: 'New kit orders have arrived', time: '2 days ago', type: 'Shop' },
  { id: '4', message: 'Coach Sarah added a new progress report', time: '3 days ago', type: 'Progress' }
];

export const MOCK_PAYMENTS: Payment[] = [
  { id: 'PAY001', invoiceId: 'INV-2025-001', invoiceDescription: 'Term 1 Tuition', amount: 450000, date: '2025-01-20', method: 'Mobile Money', reference: 'MM88293X', status: 'Completed', payerName: 'Moses Kintu' },
  { id: 'PAY002', invoiceId: 'INV-2025-015', invoiceDescription: 'Registration Fee', amount: 50000, date: '2025-02-20', method: 'Cash', reference: 'RECEIPT-099', status: 'Completed', payerName: 'Moses Kintu' },
];

export const MOCK_EXPENSES: Expense[] = [
  { id: 'EXP001', category: 'Equipment', description: '20 New Match Balls', amount: 2000000, date: '2025-03-01', status: 'Paid' },
  { id: 'EXP002', category: 'Facility', description: 'Pitch Maintenance (Feb)', amount: 500000, date: '2025-02-28', status: 'Paid' },
  { id: 'EXP003', category: 'Staff', description: 'Coach Travel Allowances', amount: 350000, date: '2025-03-10', status: 'Pending' },
];
