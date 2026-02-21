
export interface PricingTier {
  name: string;
  amount: string;
  description?: string;
}

export interface Program {
  id: string;
  title: string;
  ageGroup: string;
  description: string;
  shortDescription: string;
  features: string[]; // Kept for summary cards
  pricing: PricingTier[];
  schedule: string;
  duration: string;
  curriculum: string;
  objectives: string[];
  ratio: string;
  pathway: string;
  image: string;
  capacity?: number; // Added for admin
  enrolled?: number; // Added for admin
}

export interface SpecialistProgram {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

export interface Player {
  id: string;
  name: string;
  ageGroup: string;
  position: string;
  status: 'Active' | 'Inactive' | 'Pending';
  registrationDate: string;
  paymentStatus: 'Paid' | 'Due' | 'Overdue';
}

export interface Registration {
  id: string;
  childName: string;
  dob: string;
  guardianName: string;
  email: string;
  phone: string;
  program: string;
  status: 'New' | 'Trial' | 'Pending' | 'Incomplete' | 'Approved' | 'Rejected';
  submissionDate: string;
  trialDate?: string;
  notes?: string;
  paymentStatus?: 'Pending' | 'Paid';
}

export interface AttendanceRecord {
  id: string;
  playerId: string;
  playerName: string;
  date: string;
  programId: string;
  status: 'Present' | 'Absent' | 'Late' | 'Excused';
  notes?: string;
}

export interface Assessment {
  id: string;
  playerId: string;
  date: string;
  coach: string;
  technical: number;
  tactical: number;
  physical: number;
  mental: number;
  overall: number;
  notes: string;
  detailedRatings?: {
    category: string;
    skill: string;
    score: number; // 1-10
  }[];
}

export interface VideoAnalysis {
  id: string;
  playerId: string;
  title: string;
  date: string;
  url: string; // Mock URL or file path
  thumbnail: string;
  notes: string;
  tags: string[];
}

export interface Drill {
  id: string;
  name: string;
  category: 'Warmup' | 'Technical' | 'Tactical' | 'Fitness' | 'Cool Down';
  duration: string; 
  description: string;
  image: string;
  objectives: string[];
}

export interface TrainingSession {
  id: string;
  date: string;
  time: string;
  team: string; // e.g. "U14"
  title: string;
  objectives: string[];
  drills: Drill[]; // Subset of drills
  equipment: string[];
  notes: string;
}

export interface PlayerMatchStats {
  playerId: string;
  playerName: string;
  goals: number;
  assists: number;
  minutesPlayed: number;
  rating: number; // 1-10
}

export interface MatchRecord {
  id: string;
  date: string;
  opponent: string;
  team: string; // "U14"
  homeOrAway: 'Home' | 'Away';
  homeScore: number;
  awayScore: number;
  competition: string;
  status: 'Upcoming' | 'Completed';
  playerStats: PlayerMatchStats[];
  report: string;
  highlightsUrl?: string;
}

export interface Stat {
  label: string;
  value: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  category: 'Match Report' | 'Announcement' | 'Event';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  role: string;
  date: string;
  category: 'News' | 'Match Report' | 'Player Spotlight' | 'Coaching' | 'Nutrition' | 'Parents' | 'Community' | 'Industry';
  image: string;
  readTime: string;
  likes: number;
  comments: number;
}

export interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  day: string;
  month: string;
  time: string;
  location: string;
  type: 'Match' | 'Training' | 'Social' | 'Trial';
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  tier?: 'Platinum' | 'Gold' | 'Silver' | 'Equipment' | 'Education' | 'International';
  website?: string;
  description?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  qualifications: string[];
  playingCareer?: string;
  coachingPhilosophy?: string;
  specializations?: string[];
  experience?: string;
  languages?: string[];
  email?: string;
  socials?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export interface Facility {
  id: string;
  name: string;
  description: string;
  image: string;
  specs: string[];
  category: 'Training' | 'Education' | 'Wellness' | 'Social';
}

export interface Award {
  id: string;
  title: string;
  year: string;
  organization: string;
}

export interface PathwayStage {
  id: string;
  title: string;
  ageRange: string;
  focus: string;
  description: string;
  metrics: string[];
  requirements: string[];
  opportunities: string[];
}

export interface AlumniStory {
    id: string;
    name: string;
    currentClub: string;
    currentLevel: 'Professional' | 'University' | 'Semi-Pro';
    position: 'Forward' | 'Midfielder' | 'Defender' | 'Goalkeeper';
    graduationYear: string;
    image: string;
    videoThumbnail?: string;
    pathway: string;
    journey: string;
    quote: string;
    stats: { label: string; value: string }[];
    socials?: {
        instagram?: string;
        twitter?: string;
        linkedin?: string;
    };
}

export interface Tournament {
  id: string;
  name: string;
  dates: string;
  location: string;
  category: 'International' | 'Regional' | 'Friendly' | 'League';
  status: 'Upcoming' | 'Ongoing' | 'Completed';
  description: string;
  image: string;
  registrationOpen: boolean;
}

export interface MatchResult {
  id: string;
  tournament: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  date: string;
  status: 'Live' | 'FT' | 'Upcoming';
  minute?: string;
  logoHome?: string;
  logoAway?: string;
}

export interface InvoiceItem {
  id: string;
  description: string;
  amount: number;
}

export interface Invoice {
  id: string;
  date: string;
  description: string;
  amount: string; // Formatted string for display
  totalAmount: number; // Numeric for calculations
  status: 'Paid' | 'Pending' | 'Overdue' | 'Draft';
  dueDate: string;
  recipientName: string;
  recipientEmail?: string;
  items?: InvoiceItem[];
}

export interface ShopItem {
  id: string;
  name: string;
  price: string;
  image: string;
  category: 'Kit' | 'Merch' | 'Equipment' | 'Digital' | 'Membership';
  description?: string;
  sizes?: string[];
}

export interface SponsorshipTier {
  name: string;
  price: string;
  benefits: string[];
  color: string;
  icon: string;
}

export interface SponsoredChild {
  id: string;
  alias: string;
  age: number;
  story: string;
  dream: string;
  fundingNeeded: string;
  image: string;
  category: 'Education' | 'Kit' | 'Travel' | 'Full Scholarship';
}

export interface DiscountRule {
  id: string;
  name: string;
  type: 'Percentage' | 'Fixed';
  value: number;
  description: string;
  code?: string;
}

export interface Scholarship {
  id: string;
  name: string;
  budget: number;
  allocated: number;
  beneficiaries: number;
  criteria: string;
}

export type PaymentMethod = 'Cash' | 'Mobile Money' | 'Bank Transfer' | 'Card';

export interface Payment {
  id: string;
  invoiceId: string;
  invoiceDescription?: string; // For display convenience
  amount: number;
  date: string;
  method: PaymentMethod;
  reference?: string; // Transaction ID
  status: 'Completed' | 'Refunded';
  payerName: string;
}

export interface Expense {
  id: string;
  category: 'Equipment' | 'Facility' | 'Staff' | 'Travel' | 'Marketing' | 'Other';
  description: string;
  amount: number;
  date: string;
  status: 'Paid' | 'Pending';
}

export type FormFieldType = 'text' | 'textarea' | 'number' | 'email' | 'date' | 'select' | 'checkbox' | 'file';

export interface FormField {
  id: string;
  type: FormFieldType;
  label: string;
  placeholder?: string;
  required: boolean;
  options?: string[]; // For select inputs
}

export interface FormTemplate {
  id: string;
  title: string;
  description?: string;
  version: number;
  status: 'Active' | 'Draft' | 'Archived';
  fields: FormField[];
  responses: number;
  lastUpdated: string;
}

export enum Page {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  PROGRAMS = 'PROGRAMS',
  PATHWAY = 'PATHWAY',
  TOURNAMENTS = 'TOURNAMENTS',
  NEWS = 'NEWS',
  FACILITIES = 'FACILITIES',
  REGISTRATION = 'REGISTRATION',
  CONTACT = 'CONTACT',
  PARTNERSHIPS = 'PARTNERSHIPS',
  SHOP = 'SHOP',
  PARENTS_PORTAL = 'PARENTS_PORTAL',
  ADMIN_DASHBOARD = 'ADMIN_DASHBOARD',
  ADMIN_PLAYERS = 'ADMIN_PLAYERS',
  ADMIN_REGISTRATIONS = 'ADMIN_REGISTRATIONS',
  ADMIN_FORMS = 'ADMIN_FORMS',
  ADMIN_PROGRAMS = 'ADMIN_PROGRAMS',
  ADMIN_ATTENDANCE = 'ADMIN_ATTENDANCE',
  ADMIN_COACHING = 'ADMIN_COACHING',
  ADMIN_TOURNAMENTS = 'ADMIN_TOURNAMENTS',
  ADMIN_CONTENT = 'ADMIN_CONTENT',
  ADMIN_FINANCE = 'ADMIN_FINANCE',
  ADMIN_STAFF = 'ADMIN_STAFF',
  ADMIN_REPORTS = 'ADMIN_REPORTS',
  ADMIN_SETTINGS = 'ADMIN_SETTINGS'
}
