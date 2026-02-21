import React, { useState } from 'react';
import { 
  Home, Users, FileText, Settings, DollarSign, LogOut, Search, Plus, 
  MoreVertical, Calendar as CalendarIcon, Loader2, Sparkles, Send, 
  Briefcase, BarChart3, Shield, Mail, Edit, Filter, Download, CheckSquare, 
  Square, MoreHorizontal, FileDown, ArrowLeft, Phone, MapPin, AlertCircle, 
  Activity, CreditCard, Clock, Camera, FileCheck, HeartPulse, Printer, 
  MessageSquare, AlertTriangle, GraduationCap, Paperclip, CheckCircle, XCircle, 
  Upload, Ban, Award, School, ClipboardList, CheckCircle2, UserPlus, ArrowRight,
  Trash2, Copy, Eye, GripVertical, Save, PlusCircle, PenTool, Layout, Calendar,
  UserCheck, Zap, Lightbulb, Brain, Heart, Play, Film, MessageCircle, Layers, MonitorPlay, Goal, ListChecks,
  Coins, Wallet, Percent, Receipt, PieChart as PieChartIcon, Video, Star, Trophy, ChevronRight,
  TrendingUp, TrendingDown, FileOutput, Stethoscope, Syringe, Flag, PhoneCall, History, Image as ImageIcon
} from 'lucide-react';
import { Button, Card, StatCard, Badge, Input } from './ui';
import { Page, Player, Registration, FormTemplate, FormFieldType, FormField, Program, CalendarEvent, AttendanceRecord, Assessment, VideoAnalysis, Drill, TrainingSession, MatchRecord, Invoice, InvoiceItem, DiscountRule, Scholarship, Payment, Expense, PaymentMethod, Tournament } from '../types';
import { MOCK_PLAYERS, STATS, MOCK_STAFF_USERS, MOCK_REGISTRATIONS, MOCK_FORMS, PROGRAMS, UPCOMING_EVENTS, MOCK_ATTENDANCE_RECORDS, MOCK_ASSESSMENTS, MOCK_PLAYER_VIDEOS, DRILL_LIBRARY, MOCK_TRAINING_SESSIONS, MOCK_MATCH_RECORDS, MOCK_INVOICES, MOCK_DISCOUNTS, MOCK_SCHOLARSHIPS, MOCK_PAYMENTS, MOCK_EXPENSES, UPCOMING_TOURNAMENTS, MATCH_RESULTS } from '../constants';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, LineChart, Line, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend, AreaChart, Area } from 'recharts';
import { generateAcademyContent } from '../services/geminiService';

interface AdminProps {
  navigate: (page: Page) => void;
  currentPage: Page;
}

export const AdminSidebar: React.FC<AdminProps> = ({ navigate, currentPage }) => {
  const menu = [
    { label: 'Overview', icon: Home, page: Page.ADMIN_DASHBOARD, role: 'All' },
    { label: 'Programs & Schedule', icon: Calendar, page: Page.ADMIN_PROGRAMS, role: 'Admin' },
    { label: 'Tournaments', icon: Trophy, page: Page.ADMIN_TOURNAMENTS, role: 'Admin' },
    { label: 'Coaching & Performance', icon: Activity, page: Page.ADMIN_COACHING, role: 'Coaching' },
    { label: 'Attendance', icon: UserCheck, page: Page.ADMIN_ATTENDANCE, role: 'Coaching' },
    { label: 'Registrations', icon: ClipboardList, page: Page.ADMIN_REGISTRATIONS, role: 'Admin' },
    { label: 'Forms', icon: PenTool, page: Page.ADMIN_FORMS, role: 'Admin' },
    { label: 'Staff Management', icon: Shield, page: Page.ADMIN_STAFF, role: 'Super Admin' },
    { label: 'Players & Teams', icon: Users, page: Page.ADMIN_PLAYERS, role: 'Coaching' },
    { label: 'Finance', icon: DollarSign, page: Page.ADMIN_FINANCE, role: 'Finance' },
    { label: 'Communications', icon: Mail, page: Page.ADMIN_CONTENT, role: 'Comms' },
    { label: 'Reports & Analytics', icon: BarChart3, page: Page.ADMIN_REPORTS, role: 'Director' },
    { label: 'Settings', icon: Settings, page: Page.ADMIN_SETTINGS, role: 'Super Admin' },
  ];

  return (
    <div className="w-64 bg-dark text-gray-300 flex flex-col h-screen fixed left-0 top-0 z-50">
      <div className="h-20 flex items-center px-6 border-b border-gray-800">
        <img src="https://i.postimg.cc/bvLX9bk1/Whats-App-Image-2025-12-14-at-23-32-25-905dda09.jpg" alt="SH" className="w-8 h-8 rounded object-cover mr-3" />
        <div>
           <span className="font-bold text-white tracking-wide block leading-none">ADMIN</span>
           <span className="text-[10px] text-gray-500 uppercase tracking-widest">Portal</span>
        </div>
      </div>
      
      <div className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
        <div className="px-4 mb-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Main Menu</div>
        {menu.map((item) => (
          <button
            key={item.label}
            onClick={() => navigate(item.page)}
            className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors group ${
              currentPage === item.page ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'hover:bg-gray-800'
            }`}
          >
            <item.icon size={20} className={`mr-3 ${currentPage === item.page ? 'text-white' : 'text-gray-400 group-hover:text-white'}`} />
            <span className={`font-medium text-sm ${currentPage === item.page ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>{item.label}</span>
          </button>
        ))}
      </div>

      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center mb-4 px-2">
           <div className="w-8 h-8 rounded-full bg-gray-700 mr-3"></div>
           <div>
              <div className="text-sm font-bold text-white">Super Admin</div>
              <div className="text-xs text-gray-500">System Owner</div>
           </div>
        </div>
        <button onClick={() => navigate(Page.HOME)} className="flex items-center text-gray-400 hover:text-white transition-colors w-full px-4 py-2 hover:bg-white/5 rounded-lg">
          <LogOut size={18} className="mr-3" />
          <span className="text-sm">Exit Dashboard</span>
        </button>
      </div>
    </div>
  );
};

export const DashboardOverview: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard label="Total Players" value="1,245" icon={Users} trend="+12% this month" />
        <StatCard label="Monthly Revenue" value="UGX 45M" icon={DollarSign} trend="+5% vs last month" />
        <StatCard label="New Registrations" value="28" icon={ClipboardList} trend="8 pending review" />
        <StatCard label="Upcoming Matches" value="4" icon={Calendar} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 p-6">
          <h3 className="font-bold text-dark mb-6">Revenue Growth</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={[
                { name: 'Jan', value: 30 }, { name: 'Feb', value: 42 },
                { name: 'Mar', value: 38 }, { name: 'Apr', value: 45 },
                { name: 'May', value: 50 }, { name: 'Jun', value: 55 }
              ]}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#EAB308" strokeWidth={3} dot={{r: 4, fill: '#EAB308'}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6">
           <h3 className="font-bold text-dark mb-4">Pending Tasks</h3>
           <div className="space-y-4">
              {[
                 { title: 'Review Registration: John Doe', type: 'Admin', urgent: true },
                 { title: 'Approve Expense: New Balls', type: 'Finance', urgent: false },
                 { title: 'Update Match Result: U14 vs City', type: 'Media', urgent: true },
                 { title: 'Staff Meeting Notes', type: 'General', urgent: false },
              ].map((task, i) => (
                 <div key={i} className="flex items-start p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <div className={`w-2 h-2 rounded-full mt-1.5 mr-3 ${task.urgent ? 'bg-red-500' : 'bg-green-500'}`}></div>
                    <div>
                       <div className="text-sm font-bold text-dark">{task.title}</div>
                       <div className="text-xs text-gray-500">{task.type}</div>
                    </div>
                 </div>
              ))}
           </div>
        </Card>
      </div>

      <Card className="p-6">
         <h3 className="font-bold text-dark mb-4">Recent Registrations</h3>
         <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
               <thead className="bg-gray-50 text-gray-500 font-bold border-b">
                  <tr>
                     <th className="p-3">Name</th>
                     <th className="p-3">Age Group</th>
                     <th className="p-3">Guardian</th>
                     <th className="p-3">Status</th>
                     <th className="p-3">Date</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-gray-100">
                  {MOCK_REGISTRATIONS.slice(0, 5).map(reg => (
                     <tr key={reg.id} className="hover:bg-gray-50">
                        <td className="p-3 font-bold text-dark">{reg.childName}</td>
                        <td className="p-3">{reg.program}</td>
                        <td className="p-3">{reg.guardianName}</td>
                        <td className="p-3"><Badge type={reg.status === 'Approved' ? 'success' : reg.status === 'Pending' ? 'warning' : 'neutral'}>{reg.status}</Badge></td>
                        <td className="p-3 text-gray-500">{reg.submissionDate}</td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </Card>
    </div>
  );
};

const PlayerProfileDetail: React.FC<{ player: Player; onBack: () => void }> = ({ player, onBack }) => {
  const [activeTab, setActiveTab] = useState<'Overview' | 'Personal' | 'Performance' | 'Financials' | 'History' | 'Gallery'>('Overview');
  const [displayPlayer, setDisplayPlayer] = useState(player);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editForm, setEditForm] = useState(player);

  const handleEditClick = () => {
      setEditForm(displayPlayer);
      setIsEditModalOpen(true);
  };

  const handleSave = () => {
      setDisplayPlayer(editForm);
      setIsEditModalOpen(false);
  };

  // Mock Data Aggregation
  const attendance = MOCK_ATTENDANCE_RECORDS.filter(a => a.playerId === displayPlayer.id);
  const assessments = MOCK_ASSESSMENTS.filter(a => a.playerId === displayPlayer.id);
  const latestAssessment = assessments[0];
  const videos = MOCK_PLAYER_VIDEOS.filter(v => v.playerId === displayPlayer.id);
  
  const attendanceStats = {
     present: attendance.filter(a => a.status === 'Present').length,
     late: attendance.filter(a => a.status === 'Late').length,
     absent: attendance.filter(a => a.status === 'Absent').length,
     total: attendance.length
  };
  const attendanceRate = attendanceStats.total > 0 
    ? Math.round(((attendanceStats.present + attendanceStats.late) / attendanceStats.total) * 100) 
    : 100;

  const playerMatches = MOCK_MATCH_RECORDS.map(m => {
     const stats = m.playerStats.find(ps => ps.playerId === displayPlayer.id);
     return stats ? { ...m, stats } : null;
  }).filter(m => m !== null);

  const radarData = latestAssessment ? [
    { subject: 'Technical', A: latestAssessment.technical, fullMark: 10 },
    { subject: 'Tactical', A: latestAssessment.tactical, fullMark: 10 },
    { subject: 'Physical', A: latestAssessment.physical, fullMark: 10 },
    { subject: 'Mental', A: latestAssessment.mental, fullMark: 10 },
    { subject: 'Social', A: 8, fullMark: 10 },
  ] : [
    { subject: 'Technical', A: 7, fullMark: 10 },
    { subject: 'Tactical', A: 6, fullMark: 10 },
    { subject: 'Physical', A: 8, fullMark: 10 },
    { subject: 'Mental', A: 7, fullMark: 10 },
    { subject: 'Social', A: 8, fullMark: 10 },
  ];

  return (
    <div className="animate-fade-in space-y-6">
       {/* Header */}
       <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-0"></div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
             <div className="flex items-center gap-6">
                <Button variant="ghost" onClick={onBack} className="p-2 h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-100"><ArrowLeft size={20}/></Button>
                <div className="relative">
                   <div className="w-24 h-24 rounded-full bg-primary text-white flex items-center justify-center text-3xl font-bold shadow-lg ring-4 ring-white">
                      {displayPlayer.name.substring(0,2).toUpperCase()}
                   </div>
                   <div className={`absolute bottom-1 right-1 w-6 h-6 rounded-full border-2 border-white ${displayPlayer.status === 'Active' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                </div>
                <div>
                   <h2 className="text-3xl font-bold text-dark">{displayPlayer.name}</h2>
                   <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mt-2">
                      <span className="flex items-center"><UserPlus size={14} className="mr-1"/> ID: {displayPlayer.id}</span>
                      <span className="flex items-center"><Award size={14} className="mr-1"/> {displayPlayer.position}</span>
                      <span className="flex items-center"><CalendarIcon size={14} className="mr-1"/> {displayPlayer.ageGroup}</span>
                   </div>
                </div>
             </div>
             <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline" className="text-sm"><Printer size={16} className="mr-2"/> Export</Button>
                <Button variant="outline" className="text-sm"><Mail size={16} className="mr-2"/> Message</Button>
                <Button onClick={handleEditClick} className="text-sm"><Edit size={16} className="mr-2"/> Edit Profile</Button>
             </div>
          </div>
       </div>

       {/* Tabs */}
       <div className="flex gap-2 border-b border-gray-200 overflow-x-auto pb-1">
          {['Overview', 'Personal', 'Performance', 'Financials', 'History', 'Gallery'].map(tab => (
             <button 
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-4 py-3 text-sm font-bold whitespace-nowrap transition-colors border-b-2 rounded-t-lg ${activeTab === tab ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-gray-500 hover:text-dark hover:bg-gray-50'}`}
             >
                {tab}
             </button>
          ))}
       </div>

       {activeTab === 'Overview' && (
          <div className="space-y-6">
             <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <StatCard label="Attendance Rate" value={`${attendanceRate}%`} icon={Calendar} trend={attendanceRate < 80 ? 'Needs Attention' : 'Excellent'} />
                <StatCard label="Matches Played" value={playerMatches.length.toString()} icon={Trophy} />
                <StatCard label="Goals Scored" value="8" icon={Goal} />
                <StatCard label="Current Status" value={displayPlayer.status} icon={Activity} />
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2 p-6">
                   <h3 className="font-bold text-dark mb-4 flex items-center"><Activity size={18} className="mr-2 text-primary"/> Performance Snapshot</h3>
                   <div className="h-64 w-full flex justify-center">
                      <ResponsiveContainer width="100%" height="100%">
                         <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                            <PolarGrid />
                            <PolarAngleAxis dataKey="subject" />
                            <PolarRadiusAxis angle={30} domain={[0, 10]} />
                            <Radar name={displayPlayer.name} dataKey="A" stroke="#DC2626" fill="#DC2626" fillOpacity={0.6} />
                            <Tooltip />
                         </RadarChart>
                      </ResponsiveContainer>
                   </div>
                </Card>

                <Card className="p-6 bg-yellow-50 border-yellow-200">
                   <h3 className="font-bold text-yellow-800 mb-4 flex items-center"><AlertTriangle size={18} className="mr-2"/> Important Notes</h3>
                   <ul className="space-y-3">
                      <li className="flex items-start text-sm text-yellow-900">
                         <div className="min-w-[4px] h-4 bg-yellow-500 mr-2 mt-1 rounded-full"></div>
                         Player has a mild ankle strain. Physio recommended light training until March 20th.
                      </li>
                      <li className="flex items-start text-sm text-yellow-900">
                         <div className="min-w-[4px] h-4 bg-yellow-500 mr-2 mt-1 rounded-full"></div>
                         Fees for Term 1 are pending. Reminder sent to guardian on March 1st.
                      </li>
                   </ul>
                   <Button variant="ghost" className="w-full mt-4 text-yellow-800 hover:bg-yellow-100 text-xs">+ Add Note</Button>
                </Card>
             </div>
          </div>
       )}

       {activeTab === 'Personal' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
             <Card className="p-6">
                <h3 className="font-bold text-dark mb-4 border-b pb-2">Player Information</h3>
                <div className="space-y-4">
                   <div className="grid grid-cols-2 gap-4">
                      <div>
                         <label className="text-xs text-gray-500 uppercase font-bold">Date of Birth</label>
                         <div className="font-medium">12 May 2012</div>
                      </div>
                      <div>
                         <label className="text-xs text-gray-500 uppercase font-bold">Nationality</label>
                         <div className="font-medium">Ugandan</div>
                      </div>
                      <div>
                         <label className="text-xs text-gray-500 uppercase font-bold">School</label>
                         <div className="font-medium">Kampala Parents School</div>
                      </div>
                      <div>
                         <label className="text-xs text-gray-500 uppercase font-bold">Address</label>
                         <div className="font-medium">Plot 45, Kawempe Road</div>
                      </div>
                   </div>
                </div>
             </Card>

             <Card className="p-6">
                <h3 className="font-bold text-dark mb-4 border-b pb-2">Guardians & Emergency</h3>
                <div className="space-y-6">
                   <div className="flex items-start">
                      <div className="bg-gray-100 p-2 rounded-full mr-3"><UserCheck size={20}/></div>
                      <div>
                         <div className="font-bold text-dark">Moses Kintu (Father)</div>
                         <div className="text-sm text-gray-500">+256 700 123 456</div>
                         <div className="text-sm text-gray-500">moses@email.com</div>
                      </div>
                   </div>
                   <div className="flex items-start">
                      <div className="bg-gray-100 p-2 rounded-full mr-3"><PhoneCall size={20}/></div>
                      <div>
                         <div className="font-bold text-dark">Sarah Kintu (Mother - Emergency)</div>
                         <div className="text-sm text-gray-500">+256 700 987 654</div>
                      </div>
                   </div>
                </div>
             </Card>

             <Card className="p-6 lg:col-span-2 border-l-4 border-l-red-500">
                <h3 className="font-bold text-dark mb-4 flex items-center"><HeartPulse size={20} className="mr-2 text-red-500"/> Medical Profile</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                   <div>
                      <label className="text-xs text-gray-500 uppercase font-bold">Blood Type</label>
                      <div className="font-bold text-lg">O+</div>
                   </div>
                   <div>
                      <label className="text-xs text-gray-500 uppercase font-bold">Allergies</label>
                      <div className="flex gap-2 mt-1">
                         <Badge type="danger">Peanuts</Badge>
                         <Badge type="warning">Penicillin</Badge>
                      </div>
                   </div>
                   <div>
                      <label className="text-xs text-gray-500 uppercase font-bold">Medical Insurance</label>
                      <div className="font-medium">Jubilee Insurance (Policy #99283)</div>
                   </div>
                </div>
                <div className="mt-4 pt-4 border-t">
                   <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-600"><span className="font-bold">Clearance Status:</span> <span className="text-green-600 font-bold">CLEARED TO PLAY</span></div>
                      <Button variant="outline" className="text-xs"><FileCheck size={14} className="mr-1"/> View Medical Form</Button>
                   </div>
                </div>
             </Card>
          </div>
       )}

       {activeTab === 'Performance' && (
          <div className="space-y-6">
             {/* Same as previous Matches tab but enhanced */}
             <Card>
                <div className="p-4 border-b flex justify-between items-center">
                   <h3 className="font-bold text-dark">Match Log</h3>
                   <Button variant="outline" size="sm">Download Stats</Button>
                </div>
                <div className="overflow-x-auto">
                   <table className="w-full text-left text-sm">
                      <thead className="bg-gray-50 text-gray-500 font-bold">
                         <tr>
                            <th className="p-3">Date</th>
                            <th className="p-3">Opponent</th>
                            <th className="p-3">Mins</th>
                            <th className="p-3">G/A</th>
                            <th className="p-3">Rating</th>
                         </tr>
                      </thead>
                      <tbody className="divide-y">
                         {playerMatches.map((m, i) => (
                            <tr key={i}>
                               <td className="p-3 text-gray-500">{m?.date}</td>
                               <td className="p-3 font-medium">{m?.opponent}</td>
                               <td className="p-3">{m?.stats.minutesPlayed}'</td>
                               <td className="p-3">{m?.stats.goals} / {m?.stats.assists}</td>
                               <td className="p-3"><span className="bg-green-100 text-green-700 px-2 py-1 rounded font-bold">{m?.stats.rating}</span></td>
                            </tr>
                         ))}
                      </tbody>
                   </table>
                </div>
             </Card>
          </div>
       )}

       {activeTab === 'Financials' && (
          <Card>
             <div className="p-6 border-b flex justify-between items-center">
                <div>
                   <h3 className="font-bold text-dark">Financial Status</h3>
                   <p className="text-sm text-gray-500">Outstanding Balance: <span className="text-red-600 font-bold">UGX 150,000</span></p>
                </div>
                <Button size="sm"><PlusCircle size={16} className="mr-2"/> New Invoice</Button>
             </div>
             <div className="p-6">
                <table className="w-full text-left text-sm">
                   <thead className="text-gray-500 font-bold border-b">
                      <tr>
                         <th className="pb-3">Invoice #</th>
                         <th className="pb-3">Date</th>
                         <th className="pb-3">Description</th>
                         <th className="pb-3">Amount</th>
                         <th className="pb-3">Status</th>
                      </tr>
                   </thead>
                   <tbody className="divide-y">
                      <tr>
                         <td className="py-3 font-mono">INV-001</td>
                         <td className="py-3">Jan 10, 2025</td>
                         <td className="py-3">Term 1 Tuition</td>
                         <td className="py-3">450,000</td>
                         <td className="py-3"><Badge type="success">Paid</Badge></td>
                      </tr>
                      <tr>
                         <td className="py-3 font-mono">INV-023</td>
                         <td className="py-3">Mar 01, 2025</td>
                         <td className="py-3">Tour Bus Fee</td>
                         <td className="py-3">150,000</td>
                         <td className="py-3"><Badge type="warning">Pending</Badge></td>
                      </tr>
                   </tbody>
                </table>
             </div>
          </Card>
       )}

       {activeTab === 'History' && (
          <div className="space-y-6">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6">
                   <h3 className="font-bold text-dark mb-4 flex items-center"><History size={18} className="mr-2 text-primary"/> Communication Log</h3>
                   <div className="space-y-4 relative before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-200">
                      {[
                         { date: 'Mar 10', type: 'Email', note: 'Sent invoice reminder for Tour Bus fee.' },
                         { date: 'Feb 15', type: 'Phone', note: 'Discussed transport arrangements with father.' },
                         { date: 'Jan 05', type: 'System', note: 'Registration Approved.' }
                      ].map((log, i) => (
                         <div key={i} className="relative pl-6">
                            <div className="absolute left-0 top-1 w-4 h-4 bg-white border-2 border-primary rounded-full"></div>
                            <div className="text-xs text-gray-500 mb-1">{log.date} • {log.type}</div>
                            <div className="text-sm text-gray-700">{log.note}</div>
                         </div>
                      ))}
                   </div>
                </Card>

                <Card className="p-6">
                   <h3 className="font-bold text-dark mb-4 flex items-center"><Flag size={18} className="mr-2 text-red-500"/> Disciplinary Record</h3>
                   <div className="space-y-3">
                      <div className="p-3 border border-red-100 bg-red-50 rounded-lg">
                         <div className="flex justify-between items-start">
                            <div className="font-bold text-red-800 text-sm">Yellow Card - Dissent</div>
                            <div className="text-xs text-red-600">Mar 12, 2025</div>
                         </div>
                         <p className="text-xs text-gray-600 mt-1">Argued with referee decision during U14 league match.</p>
                      </div>
                      <div className="p-3 border border-gray-100 bg-gray-50 rounded-lg">
                         <div className="flex justify-between items-start">
                            <div className="font-bold text-gray-800 text-sm">Late Arrival</div>
                            <div className="text-xs text-gray-500">Feb 20, 2025</div>
                         </div>
                         <p className="text-xs text-gray-600 mt-1">Arrived 15 mins late to training without prior notice.</p>
                      </div>
                   </div>
                </Card>
             </div>

             <Card className="p-6">
                <h3 className="font-bold text-dark mb-4">Documents Repository</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                   {['Birth Certificate', 'Medical Clearance 2025', 'Guardian Consent', 'School Report Card'].map((doc, i) => (
                      <div key={i} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                         <div className="flex items-center overflow-hidden">
                            <FileText size={18} className="text-primary mr-2 flex-shrink-0"/>
                            <span className="text-sm truncate">{doc}</span>
                         </div>
                         <Download size={14} className="text-gray-400 hover:text-dark"/>
                      </div>
                   ))}
                   <button className="flex items-center justify-center p-3 border border-dashed border-gray-300 rounded-lg text-gray-500 hover:text-primary hover:border-primary transition-colors text-sm">
                      <Upload size={16} className="mr-2"/> Upload New
                   </button>
                </div>
             </Card>
          </div>
       )}

       {activeTab === 'Gallery' && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {[1,2,3,4,5].map(i => (
                <div key={i} className="aspect-square bg-gray-100 rounded-xl overflow-hidden relative group">
                   <img src={`https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=400&q=80&random=${i}`} className="w-full h-full object-cover" alt="Gallery" />
                   <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <Button variant="ghost" className="text-white hover:text-primary"><Eye size={20}/></Button>
                      <Button variant="ghost" className="text-white hover:text-red-500"><Trash2 size={20}/></Button>
                   </div>
                </div>
             ))}
             <button className="aspect-square bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-colors">
                <ImageIcon size={32} className="mb-2"/>
                <span className="text-sm font-bold">Add Photo</span>
             </button>
          </div>
       )}

       {/* Edit Modal (Simplified for UI demo) */}
       {isEditModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] animate-fade-in backdrop-blur-sm">
           <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg m-4">
              <div className="p-6 border-b flex justify-between items-center bg-gray-50 rounded-t-xl">
                 <h3 className="font-bold text-xl text-dark">Edit Player Profile</h3>
                 <button onClick={() => setIsEditModalOpen(false)} className="text-gray-400 hover:text-red-500 transition-colors">
                    <XCircle size={24} />
                 </button>
              </div>
              <div className="p-6 space-y-4">
                 <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
                    <input type="text" className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary outline-none" value={editForm.name} onChange={e => setEditForm({...editForm, name: e.target.value})} />
                 </div>
                 {/* ... More fields would go here ... */}
                 <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Status</label>
                        <select className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary outline-none" value={editForm.status} onChange={e => setEditForm({...editForm, status: e.target.value as any})}>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                            <option value="Pending">Pending</option>
                        </select>
                    </div>
                 </div>
              </div>
              <div className="p-6 border-t flex justify-end gap-3 bg-gray-50 rounded-b-xl">
                 <Button variant="outline" onClick={() => setIsEditModalOpen(false)}>Cancel</Button>
                 <Button onClick={handleSave}>Save Changes</Button>
              </div>
           </div>
        </div>
       )}
    </div>
  );
};

export const PlayerManagement: React.FC = () => {
  const [selectedPlayerId, setSelectedPlayerId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterAge, setFilterAge] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  // Registration Modal State
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [formData, setFormData] = useState({
      firstName: '', lastName: '', dob: '', gender: 'Male', nationality: 'Ugandan',
      address: '', city: 'Kampala',
      guardianName: '', guardianRelation: '', guardianPhone: '', guardianEmail: '',
      position: 'Midfielder', dominantFoot: 'Right', height: '', weight: '',
      medicalConditions: '', allergies: '',
      programCategory: 'Youth Development', joiningDate: new Date().toISOString().split('T')[0]
  });

  const handleInputChange = (field: string, value: string) => {
      setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleRegisterSubmit = () => {
      alert("Player registration submitted successfully!");
      setIsRegisterModalOpen(false);
  };

  const selectedPlayer = MOCK_PLAYERS.find(p => p.id === selectedPlayerId);

  if (selectedPlayer) {
    return <PlayerProfileDetail player={selectedPlayer} onBack={() => setSelectedPlayerId(null)} />;
  }

  const filteredPlayers = MOCK_PLAYERS.filter(p => 
    (filterAge === 'All' || p.ageGroup === filterAge) &&
    (filterStatus === 'All' || p.status === filterStatus) &&
    (p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.position.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const toggleSelect = (id: string) => {
     if (selectedIds.includes(id)) {
        setSelectedIds(selectedIds.filter(i => i !== id));
     } else {
        setSelectedIds([...selectedIds, id]);
     }
  };

  const toggleSelectAll = () => {
     if (selectedIds.length === filteredPlayers.length) {
        setSelectedIds([]);
     } else {
        setSelectedIds(filteredPlayers.map(p => p.id));
     }
  };

  return (
    <div className="space-y-6 animate-fade-in">
       <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="flex gap-2 flex-1">
             <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input 
                   type="text" 
                   placeholder="Search players by name, ID, or position..." 
                   className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                   value={searchTerm}
                   onChange={(e) => setSearchTerm(e.target.value)}
                />
             </div>
             <div className="flex items-center gap-2">
                <select className="border rounded-lg px-3 py-2 outline-none text-sm" value={filterAge} onChange={(e) => setFilterAge(e.target.value)}>
                   <option value="All">All Ages</option>
                   <option value="U7-U12">U7-U12</option>
                   <option value="U13-U18">U13-U18</option>
                </select>
                <select className="border rounded-lg px-3 py-2 outline-none text-sm" value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
                   <option value="All">All Status</option>
                   <option value="Active">Active</option>
                   <option value="Inactive">Inactive</option>
                   <option value="Pending">Pending</option>
                </select>
             </div>
          </div>
          <Button onClick={() => setIsRegisterModalOpen(true)}><UserPlus size={18} className="mr-2"/> New Registration</Button>
       </div>

       {selectedIds.length > 0 && (
          <div className="bg-primary/10 border border-primary/20 p-3 rounded-lg flex items-center justify-between">
             <div className="text-sm font-bold text-primary">{selectedIds.length} Players Selected</div>
             <div className="flex gap-2">
                <Button size="sm" variant="outline" className="bg-white border-primary/20 text-primary hover:bg-primary hover:text-white"><Mail size={14} className="mr-2"/> Email</Button>
                <Button size="sm" variant="outline" className="bg-white border-primary/20 text-primary hover:bg-primary hover:text-white"><MessageSquare size={14} className="mr-2"/> SMS</Button>
                <Button size="sm" variant="outline" className="bg-white border-primary/20 text-primary hover:bg-primary hover:text-white"><Download size={14} className="mr-2"/> Export</Button>
                <Button size="sm" variant="outline" className="bg-white border-red-200 text-red-500 hover:bg-red-500 hover:text-white"><Trash2 size={14} className="mr-2"/> Delete</Button>
             </div>
          </div>
       )}

       <Card className="overflow-hidden">
          <table className="w-full text-left text-sm">
             <thead className="bg-gray-50 text-gray-500 font-bold border-b">
                <tr>
                   <th className="p-4 w-10">
                      <input type="checkbox" checked={selectedIds.length === filteredPlayers.length && filteredPlayers.length > 0} onChange={toggleSelectAll} className="rounded border-gray-300"/>
                   </th>
                   <th className="p-4">Name</th>
                   <th className="p-4">Age Group</th>
                   <th className="p-4">Position</th>
                   <th className="p-4">Status</th>
                   <th className="p-4">Fees</th>
                   <th className="p-4">Joined</th>
                   <th className="p-4">Actions</th>
                </tr>
             </thead>
             <tbody className="divide-y">
                {filteredPlayers.map(player => (
                   <tr key={player.id} className="hover:bg-gray-50 group">
                      <td className="p-4">
                         <input type="checkbox" checked={selectedIds.includes(player.id)} onChange={() => toggleSelect(player.id)} className="rounded border-gray-300"/>
                      </td>
                      <td className="p-4 font-bold text-dark flex items-center cursor-pointer" onClick={() => setSelectedPlayerId(player.id)}>
                         <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 text-xs font-bold">
                            {player.name.substring(0,2).toUpperCase()}
                         </div>
                         {player.name}
                      </td>
                      <td className="p-4">{player.ageGroup}</td>
                      <td className="p-4">{player.position}</td>
                      <td className="p-4"><Badge type={player.status === 'Active' ? 'success' : player.status === 'Pending' ? 'warning' : 'neutral'}>{player.status}</Badge></td>
                      <td className="p-4"><Badge type={player.paymentStatus === 'Paid' ? 'success' : player.paymentStatus === 'Due' ? 'warning' : 'danger'}>{player.paymentStatus}</Badge></td>
                      <td className="p-4 text-gray-500">{player.registrationDate}</td>
                      <td className="p-4 text-gray-400">
                         <button onClick={() => setSelectedPlayerId(player.id)} className="p-2 hover:bg-gray-100 rounded-full text-gray-500 hover:text-primary transition-colors">
                            <ChevronRight size={18} />
                         </button>
                      </td>
                   </tr>
                ))}
             </tbody>
          </table>
          <div className="p-4 border-t bg-gray-50 flex justify-between items-center text-xs text-gray-500">
             <div>Showing {filteredPlayers.length} of {MOCK_PLAYERS.length} players</div>
             <div className="flex gap-2">
                <button className="px-3 py-1 border rounded bg-white disabled:opacity-50">Previous</button>
                <button className="px-3 py-1 border rounded bg-white">Next</button>
             </div>
          </div>
       </Card>

       {/* New Registration Modal */}
       {isRegisterModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] animate-fade-in backdrop-blur-sm">
           <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl m-4 max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b flex justify-between items-center bg-gray-50 sticky top-0 z-10">
                 <div>
                    <h3 className="font-bold text-xl text-dark">Register New Player</h3>
                    <p className="text-sm text-gray-500">Complete all required fields to enroll a player.</p>
                 </div>
                 <button onClick={() => setIsRegisterModalOpen(false)} className="text-gray-400 hover:text-red-500 transition-colors">
                    <XCircle size={24} />
                 </button>
              </div>
              <div className="p-8 space-y-8">
                 {/* Section 1: Player Details */}
                 <div className="space-y-4">
                    <h4 className="font-bold text-dark text-lg border-b pb-2 flex items-center"><UserPlus size={20} className="mr-2 text-primary"/> Player Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-1 flex flex-col items-center justify-center bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl h-48 cursor-pointer hover:border-primary transition-colors">
                            <Camera size={32} className="text-gray-400 mb-2"/>
                            <span className="text-sm text-gray-500 font-medium">Upload Photo</span>
                        </div>
                        <div className="md:col-span-2 space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <Input label="First Name" value={formData.firstName} onChange={e => handleInputChange('firstName', e.target.value)} />
                                <Input label="Last Name" value={formData.lastName} onChange={e => handleInputChange('lastName', e.target.value)} />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <Input label="Date of Birth" type="date" value={formData.dob} onChange={e => handleInputChange('dob', e.target.value)} />
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">Gender</label>
                                    <select className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-primary" value={formData.gender} onChange={e => handleInputChange('gender', e.target.value)}>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <Input label="Nationality" value={formData.nationality} onChange={e => handleInputChange('nationality', e.target.value)} />
                                <Input label="City of Residence" value={formData.city} onChange={e => handleInputChange('city', e.target.value)} />
                            </div>
                        </div>
                    </div>
                 </div>

                 {/* Section 2: Guardian Info */}
                 <div className="space-y-4">
                    <h4 className="font-bold text-dark text-lg border-b pb-2 flex items-center"><Shield size={20} className="mr-2 text-primary"/> Guardian Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input label="Guardian Full Name" value={formData.guardianName} onChange={e => handleInputChange('guardianName', e.target.value)} />
                        <Input label="Relationship" placeholder="Father, Mother, etc." value={formData.guardianRelation} onChange={e => handleInputChange('guardianRelation', e.target.value)} />
                        <Input label="Phone Number" type="tel" value={formData.guardianPhone} onChange={e => handleInputChange('guardianPhone', e.target.value)} />
                        <Input label="Email Address" type="email" value={formData.guardianEmail} onChange={e => handleInputChange('guardianEmail', e.target.value)} />
                        <div className="md:col-span-2">
                            <Input label="Home Address" value={formData.address} onChange={e => handleInputChange('address', e.target.value)} />
                        </div>
                    </div>
                 </div>

                 {/* Section 3: Athletic & Medical */}
                 <div className="space-y-4">
                    <h4 className="font-bold text-dark text-lg border-b pb-2 flex items-center"><Activity size={20} className="mr-2 text-primary"/> Athletic & Medical Profile</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Preferred Position</label>
                            <select className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-primary" value={formData.position} onChange={e => handleInputChange('position', e.target.value)}>
                                <option value="Goalkeeper">Goalkeeper</option>
                                <option value="Defender">Defender</option>
                                <option value="Midfielder">Midfielder</option>
                                <option value="Forward">Forward</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Dominant Foot</label>
                            <select className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-primary" value={formData.dominantFoot} onChange={e => handleInputChange('dominantFoot', e.target.value)}>
                                <option value="Right">Right</option>
                                <option value="Left">Left</option>
                                <option value="Both">Both</option>
                            </select>
                        </div>
                        <Input label="Height (cm) - Optional" value={formData.height} onChange={e => handleInputChange('height', e.target.value)} />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Medical Conditions / Allergies</label>
                        <textarea className="w-full border rounded-lg px-4 py-2 h-20 resize-none outline-none focus:ring-2 focus:ring-primary" placeholder="List any known allergies or medical conditions..." value={formData.medicalConditions} onChange={e => handleInputChange('medicalConditions', e.target.value)}></textarea>
                    </div>
                 </div>

                 {/* Section 4: Enrollment */}
                 <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                    <h4 className="font-bold text-primary text-sm uppercase tracking-wide mb-4">Enrollment Details</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Program / Category</label>
                            <select className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-primary bg-white" value={formData.programCategory} onChange={e => handleInputChange('programCategory', e.target.value)}>
                                <option value="Little Lions">Little Lions (U5-U6)</option>
                                <option value="Youth Development">Youth Development (U7-U12)</option>
                                <option value="Academy Program">Academy Program (U13-U18)</option>
                                <option value="Elite Program">Elite Program (U19+)</option>
                            </select>
                        </div>
                        <Input label="Joining Date" type="date" value={formData.joiningDate} onChange={e => handleInputChange('joiningDate', e.target.value)} />
                    </div>
                 </div>
              </div>
              <div className="p-6 border-t flex justify-end gap-3 bg-gray-50 sticky bottom-0">
                 <Button variant="outline" onClick={() => setIsRegisterModalOpen(false)}>Cancel</Button>
                 <Button onClick={handleRegisterSubmit}>Register Player</Button>
              </div>
           </div>
        </div>
       )}
    </div>
  );
};

export const RegistrationManagement: React.FC = () => (
   <div className="space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
         <StatCard label="Pending Review" value="5" icon={ClipboardList} />
         <StatCard label="Approved (This Month)" value="12" icon={CheckCircle} />
         <StatCard label="Total Applications" value="145" icon={Users} />
      </div>

      <Card>
         <div className="p-4 border-b flex justify-between items-center bg-gray-50">
            <h3 className="font-bold text-dark">Recent Applications</h3>
            <Button variant="outline" className="text-xs"><Download size={14} className="mr-1"/> Export CSV</Button>
         </div>
         <table className="w-full text-left text-sm">
             <thead className="text-gray-500 font-bold border-b">
                <tr>
                   <th className="p-4">Child Name</th>
                   <th className="p-4">Program</th>
                   <th className="p-4">Parent</th>
                   <th className="p-4">Contact</th>
                   <th className="p-4">Status</th>
                   <th className="p-4">Actions</th>
                </tr>
             </thead>
             <tbody className="divide-y">
                {MOCK_REGISTRATIONS.map(reg => (
                   <tr key={reg.id} className="hover:bg-gray-50">
                      <td className="p-4 font-bold text-dark">{reg.childName}</td>
                      <td className="p-4">{reg.program}</td>
                      <td className="p-4">{reg.guardianName}</td>
                      <td className="p-4 text-gray-500">{reg.phone}</td>
                      <td className="p-4"><Badge type={reg.status === 'Approved' ? 'success' : reg.status === 'Pending' ? 'warning' : 'neutral'}>{reg.status}</Badge></td>
                      <td className="p-4 flex gap-2">
                         <button className="p-1 hover:bg-green-100 text-green-600 rounded"><CheckCircle size={18}/></button>
                         <button className="p-1 hover:bg-red-100 text-red-600 rounded"><XCircle size={18}/></button>
                      </td>
                   </tr>
                ))}
             </tbody>
         </table>
      </Card>
   </div>
);

export const FormsManagement: React.FC = () => (
   <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
         <div className="relative flex-1 max-w-sm">
             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
             <input type="text" placeholder="Search forms..." className="w-full pl-9 pr-4 py-2 border rounded-lg outline-none focus:border-primary"/>
         </div>
         <Button><Plus size={18} className="mr-2"/> Create New Form</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {MOCK_FORMS.map(form => (
            <Card key={form.id} className="p-6 hover:shadow-lg transition-shadow border-t-4 border-primary">
               <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-gray-50 rounded-lg">
                     <FileText size={24} className="text-primary"/>
                  </div>
                  <button className="text-gray-400 hover:text-dark"><MoreHorizontal size={20}/></button>
               </div>
               <h3 className="font-bold text-dark text-lg mb-2">{form.title}</h3>
               <p className="text-sm text-gray-500 mb-6">{form.description}</p>
               <div className="flex justify-between items-center text-sm text-gray-500 pt-4 border-t border-gray-100">
                  <span>{form.responses} Responses</span>
                  <Badge type={form.status === 'Active' ? 'success' : 'neutral'}>{form.status}</Badge>
               </div>
            </Card>
         ))}
      </div>
   </div>
);

export const ProgramManagement: React.FC = () => {
   const [programs, setPrograms] = useState<Program[]>(PROGRAMS);
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [editingProgram, setEditingProgram] = useState<Partial<Program>>({});

   const handleEdit = (program: Program) => {
      setEditingProgram(program);
      setIsModalOpen(true);
   };

   const handleAdd = () => {
      setEditingProgram({
         id: Date.now().toString(),
         title: '',
         ageGroup: '',
         description: '',
         shortDescription: '',
         schedule: '',
         ratio: '1:10',
         pricing: [{ name: 'Full Term', amount: 'UGX 0', description: 'Term Fee' }],
         features: [],
         image: 'https://images.unsplash.com/photo-1517466787929-bc90951d6428?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      });
      setIsModalOpen(true);
   };

   const handleSave = () => {
      if (editingProgram.id) {
         // Check if it's an existing program
         const existingIndex = programs.findIndex(p => p.id === editingProgram.id);
         if (existingIndex >= 0) {
            const updatedPrograms = [...programs];
            updatedPrograms[existingIndex] = editingProgram as Program;
            setPrograms(updatedPrograms);
         } else {
            // New program
            setPrograms([...programs, editingProgram as Program]);
         }
      }
      setIsModalOpen(false);
   };

   return (
      <div className="space-y-6 animate-fade-in">
         <div className="flex justify-between items-center">
            <div className="flex gap-2">
               <Button variant="secondary">Programs</Button>
               <Button variant="ghost">Schedule Overview</Button>
            </div>
            <Button onClick={handleAdd}><Plus size={18} className="mr-2"/> Add Program</Button>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.map(prog => (
               <Card key={prog.id} className="flex flex-col md:flex-row overflow-hidden group">
                  <div className="md:w-1/3 bg-gray-100 relative">
                     <img src={prog.image} className="w-full h-full object-cover" alt={prog.title}/>
                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                  </div>
                  <div className="p-6 md:w-2/3 flex flex-col">
                     <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-dark text-lg">{prog.title}</h3>
                        <Badge>{prog.ageGroup}</Badge>
                     </div>
                     <p className="text-sm text-gray-600 mb-4 line-clamp-2">{prog.shortDescription}</p>
                     <div className="space-y-2 text-sm text-gray-500 mb-4 flex-1">
                        <div className="flex items-center"><Clock size={14} className="mr-2 text-primary"/> {prog.schedule}</div>
                        <div className="flex items-center"><Users size={14} className="mr-2 text-primary"/> Ratio: {prog.ratio}</div>
                        <div className="flex items-center"><DollarSign size={14} className="mr-2 text-primary"/> {prog.pricing[0].amount}</div>
                     </div>
                     <div className="flex justify-end gap-2 pt-4 border-t border-gray-100">
                        <Button variant="outline" className="text-xs" onClick={() => handleEdit(prog)}>Edit Details</Button>
                        <Button variant="outline" className="text-xs" onClick={() => handleEdit(prog)}>Edit Schedule</Button>
                     </div>
                  </div>
               </Card>
            ))}
         </div>

         {/* Edit/Add Modal */}
         {isModalOpen && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] animate-fade-in backdrop-blur-sm">
               <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl m-4 max-h-[90vh] overflow-y-auto">
                  <div className="p-6 border-b flex justify-between items-center bg-gray-50 sticky top-0 z-10">
                     <h3 className="font-bold text-xl text-dark">{editingProgram.title ? 'Edit Program' : 'New Program'}</h3>
                     <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-red-500 transition-colors">
                        <XCircle size={24} />
                     </button>
                  </div>
                  <div className="p-6 space-y-6">
                     <div className="grid grid-cols-2 gap-4">
                        <div>
                           <label className="block text-sm font-bold text-gray-700 mb-1">Program Title</label>
                           <input type="text" className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-primary" value={editingProgram.title || ''} onChange={e => setEditingProgram({...editingProgram, title: e.target.value})} />
                        </div>
                        <div>
                           <label className="block text-sm font-bold text-gray-700 mb-1">Age Group</label>
                           <input type="text" className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-primary" value={editingProgram.ageGroup || ''} onChange={e => setEditingProgram({...editingProgram, ageGroup: e.target.value})} />
                        </div>
                     </div>
                     
                     <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Short Description</label>
                        <input type="text" className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-primary" value={editingProgram.shortDescription || ''} onChange={e => setEditingProgram({...editingProgram, shortDescription: e.target.value})} />
                     </div>

                     <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Full Description</label>
                        <textarea className="w-full border rounded-lg px-4 py-2 h-24 resize-none outline-none focus:ring-2 focus:ring-primary" value={editingProgram.description || ''} onChange={e => setEditingProgram({...editingProgram, description: e.target.value})}></textarea>
                     </div>

                     <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <h4 className="font-bold text-dark text-sm mb-3 flex items-center"><Clock size={16} className="mr-2 text-primary"/> Schedule & Logistics</h4>
                        <div className="space-y-4">
                           <div>
                              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Weekly Schedule</label>
                              <input type="text" className="w-full border rounded px-3 py-2 text-sm outline-none focus:border-primary" value={editingProgram.schedule || ''} onChange={e => setEditingProgram({...editingProgram, schedule: e.target.value})} placeholder="e.g. Mon, Wed, Fri (4-6 PM)"/>
                           </div>
                           <div className="grid grid-cols-2 gap-4">
                              <div>
                                 <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Duration</label>
                                 <input type="text" className="w-full border rounded px-3 py-2 text-sm outline-none focus:border-primary" value={editingProgram.duration || ''} onChange={e => setEditingProgram({...editingProgram, duration: e.target.value})} />
                              </div>
                              <div>
                                 <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Coach Ratio</label>
                                 <input type="text" className="w-full border rounded px-3 py-2 text-sm outline-none focus:border-primary" value={editingProgram.ratio || ''} onChange={e => setEditingProgram({...editingProgram, ratio: e.target.value})} />
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <h4 className="font-bold text-dark text-sm mb-3 flex items-center"><DollarSign size={16} className="mr-2 text-primary"/> Pricing</h4>
                        <div className="grid grid-cols-2 gap-4">
                           <div>
                              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Amount</label>
                              <input type="text" className="w-full border rounded px-3 py-2 text-sm outline-none focus:border-primary" 
                                 value={editingProgram.pricing?.[0]?.amount || ''} 
                                 onChange={e => {
                                    const newPricing = [...(editingProgram.pricing || [])];
                                    if(newPricing[0]) newPricing[0] = { ...newPricing[0], amount: e.target.value };
                                    else newPricing[0] = { name: 'Standard', amount: e.target.value, description: '' };
                                    setEditingProgram({...editingProgram, pricing: newPricing});
                                 }} 
                              />
                           </div>
                           <div>
                              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Term / Period</label>
                              <input type="text" className="w-full border rounded px-3 py-2 text-sm outline-none focus:border-primary"
                                 value={editingProgram.pricing?.[0]?.name || ''}
                                 onChange={e => {
                                    const newPricing = [...(editingProgram.pricing || [])];
                                    if(newPricing[0]) newPricing[0] = { ...newPricing[0], name: e.target.value };
                                    setEditingProgram({...editingProgram, pricing: newPricing});
                                 }}
                              />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="p-6 border-t flex justify-end gap-3 bg-gray-50 sticky bottom-0">
                     <Button variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                     <Button onClick={handleSave}>Save Program</Button>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
};

export const AttendanceManagement: React.FC = () => (
   <div className="space-y-6 animate-fade-in">
      <Card className="p-6 mb-6">
         <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div>
               <label className="block text-sm font-bold text-gray-700 mb-1">Date</label>
               <input type="date" className="w-full border rounded-lg px-3 py-2 outline-none" defaultValue="2025-03-10"/>
            </div>
            <div>
               <label className="block text-sm font-bold text-gray-700 mb-1">Program</label>
               <select className="w-full border rounded-lg px-3 py-2 outline-none">
                  <option>Academy Program (U13-U18)</option>
                  <option>Youth Development (U7-U12)</option>
               </select>
            </div>
            <div>
               <label className="block text-sm font-bold text-gray-700 mb-1">Session Type</label>
               <select className="w-full border rounded-lg px-3 py-2 outline-none">
                  <option>Training</option>
                  <option>Match</option>
               </select>
            </div>
            <Button className="w-full">Load Sheet</Button>
         </div>
      </Card>

      <Card>
         <div className="p-4 border-b flex justify-between items-center bg-gray-50">
            <h3 className="font-bold text-dark">U13 Attendance Sheet</h3>
            <div className="text-sm text-gray-500">24 Players Listed</div>
         </div>
         <table className="w-full text-left text-sm">
            <thead className="text-gray-500 font-bold border-b">
               <tr>
                  <th className="p-4">Player</th>
                  <th className="p-4 text-center">Present</th>
                  <th className="p-4 text-center">Late</th>
                  <th className="p-4 text-center">Absent</th>
                  <th className="p-4 text-center">Excused</th>
                  <th className="p-4">Notes</th>
               </tr>
            </thead>
            <tbody className="divide-y">
               {MOCK_PLAYERS.slice(0, 5).map(player => (
                  <tr key={player.id} className="hover:bg-gray-50">
                     <td className="p-4 font-bold text-dark">{player.name}</td>
                     <td className="p-4 text-center"><input type="radio" name={`att-${player.id}`} defaultChecked className="w-4 h-4 text-green-600"/></td>
                     <td className="p-4 text-center"><input type="radio" name={`att-${player.id}`} className="w-4 h-4 text-yellow-600"/></td>
                     <td className="p-4 text-center"><input type="radio" name={`att-${player.id}`} className="w-4 h-4 text-red-600"/></td>
                     <td className="p-4 text-center"><input type="radio" name={`att-${player.id}`} className="w-4 h-4 text-blue-600"/></td>
                     <td className="p-4"><input type="text" placeholder="Add note..." className="border-b bg-transparent outline-none w-full text-xs"/></td>
                  </tr>
               ))}
            </tbody>
         </table>
         <div className="p-4 border-t bg-gray-50 flex justify-end">
            <Button>Save Attendance</Button>
         </div>
      </Card>
   </div>
);

export const CoachingManagement: React.FC = () => {
   const [activeTab, setActiveTab] = useState('Drills');
   
   // Modal States
   const [isDrillModalOpen, setIsDrillModalOpen] = useState(false);
   const [isAssessmentModalOpen, setIsAssessmentModalOpen] = useState(false);
   const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

   // Mock Handlers for saving
   const handleSaveDrill = () => { alert('New Drill Created!'); setIsDrillModalOpen(false); };
   const handleSaveAssessment = () => { alert('Assessment Saved!'); setIsAssessmentModalOpen(false); };
   const handleSaveVideo = () => { alert('Video Analysis Uploaded!'); setIsVideoModalOpen(false); };

   return (
      <div className="space-y-6 animate-fade-in">
         <div className="flex border-b border-gray-200">
            {['Drills', 'Assessments', 'Video Analysis'].map(tab => (
               <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 font-bold text-sm border-b-2 transition-colors ${activeTab === tab ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-dark'}`}
               >
                  {tab}
               </button>
            ))}
         </div>

         {activeTab === 'Drills' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               <Card onClick={() => setIsDrillModalOpen(true)} className="p-6 border-dashed border-2 flex flex-col items-center justify-center text-gray-400 hover:text-primary hover:border-primary cursor-pointer min-h-[200px] transition-colors">
                  <PlusCircle size={32} className="mb-2"/>
                  <span className="font-bold">Create New Drill</span>
               </Card>
               {DRILL_LIBRARY.map(drill => (
                  <Card key={drill.id} className="overflow-hidden">
                     <div className="h-40 relative">
                        <img src={drill.image} className="w-full h-full object-cover" alt={drill.name}/>
                        <div className="absolute top-2 right-2">
                           <Badge>{drill.category}</Badge>
                        </div>
                     </div>
                     <div className="p-4">
                        <h3 className="font-bold text-dark">{drill.name}</h3>
                        <p className="text-xs text-gray-500 mb-3">{drill.duration} • {drill.objectives.length} Objectives</p>
                        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{drill.description}</p>
                        <Button variant="outline" className="w-full text-xs">View Plan</Button>
                     </div>
                  </Card>
               ))}
            </div>
         )}
         
         {activeTab === 'Assessments' && (
             <Card>
                <div className="p-4 border-b flex justify-between items-center">
                   <h3 className="font-bold text-dark">Recent Player Assessments</h3>
                   <Button size="sm" onClick={() => setIsAssessmentModalOpen(true)}><Plus size={16} className="mr-2"/> New Assessment</Button>
                </div>
                <table className="w-full text-left text-sm">
                   <thead className="bg-gray-50 text-gray-500 font-bold border-b">
                      <tr>
                         <th className="p-4">Date</th>
                         <th className="p-4">Player</th>
                         <th className="p-4">Coach</th>
                         <th className="p-4">Overall Score</th>
                         <th className="p-4">Notes</th>
                      </tr>
                   </thead>
                   <tbody className="divide-y">
                      {MOCK_ASSESSMENTS.map(ass => (
                         <tr key={ass.id} className="hover:bg-gray-50">
                            <td className="p-4 text-gray-500">{ass.date}</td>
                            <td className="p-4 font-bold text-dark">Player {ass.playerId}</td>
                            <td className="p-4">{ass.coach}</td>
                            <td className="p-4"><span className="font-bold text-primary">{ass.overall}</span>/10</td>
                            <td className="p-4 text-gray-500 truncate max-w-xs">{ass.notes}</td>
                         </tr>
                      ))}
                   </tbody>
                </table>
             </Card>
         )}

         {activeTab === 'Video Analysis' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card onClick={() => setIsVideoModalOpen(true)} className="p-6 border-dashed border-2 flex flex-col items-center justify-center text-gray-400 hover:text-primary hover:border-primary cursor-pointer min-h-[200px] transition-colors">
                   <Upload size={32} className="mb-2"/>
                   <span className="font-bold">Upload Match Footage</span>
                </Card>
                {MOCK_PLAYER_VIDEOS.map(video => (
                   <Card key={video.id} className="overflow-hidden group">
                      <div className="h-40 relative bg-black">
                         <img src={video.thumbnail} className="w-full h-full object-cover opacity-70" alt={video.title}/>
                         <div className="absolute inset-0 flex items-center justify-center">
                            <Play className="text-white fill-white opacity-0 group-hover:opacity-100 transition-opacity" size={32}/>
                         </div>
                      </div>
                      <div className="p-4">
                         <h3 className="font-bold text-dark text-sm">{video.title}</h3>
                         <div className="flex flex-wrap gap-1 mt-2">
                            {video.tags.map(t => <Badge key={t} type="neutral" className="text-[10px] py-0">{t}</Badge>)}
                         </div>
                      </div>
                   </Card>
                ))}
            </div>
         )}

         {/* Drill Modal */}
         {isDrillModalOpen && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] animate-fade-in backdrop-blur-sm">
               <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg m-4">
                  <div className="p-6 border-b flex justify-between items-center bg-gray-50 rounded-t-xl">
                     <h3 className="font-bold text-xl text-dark">Create New Drill</h3>
                     <button onClick={() => setIsDrillModalOpen(false)} className="text-gray-400 hover:text-red-500 transition-colors"><XCircle size={24} /></button>
                  </div>
                  <div className="p-6 space-y-4">
                     <Input label="Drill Name" placeholder="e.g. 4v4 Small Sided Game" />
                     <div className="grid grid-cols-2 gap-4">
                        <div>
                           <label className="block text-sm font-bold text-gray-700 mb-1">Category</label>
                           <select className="w-full border rounded-lg px-4 py-2 outline-none">
                              <option>Technical</option>
                              <option>Tactical</option>
                              <option>Physical</option>
                              <option>Mental</option>
                           </select>
                        </div>
                        <Input label="Duration" placeholder="e.g. 15 mins" />
                     </div>
                     <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Description</label>
                        <textarea className="w-full border rounded-lg px-4 py-2 h-24 resize-none outline-none" placeholder="Describe the drill setup and rules..."></textarea>
                     </div>
                     <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Coaching Points / Objectives</label>
                        <textarea className="w-full border rounded-lg px-4 py-2 h-24 resize-none outline-none" placeholder="Key learning outcomes..."></textarea>
                     </div>
                  </div>
                  <div className="p-6 border-t flex justify-end gap-3 bg-gray-50 rounded-b-xl">
                     <Button variant="outline" onClick={() => setIsDrillModalOpen(false)}>Cancel</Button>
                     <Button onClick={handleSaveDrill}>Save Drill</Button>
                  </div>
               </div>
            </div>
         )}

         {/* Assessment Modal */}
         {isAssessmentModalOpen && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] animate-fade-in backdrop-blur-sm">
               <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg m-4">
                  <div className="p-6 border-b flex justify-between items-center bg-gray-50 rounded-t-xl">
                     <h3 className="font-bold text-xl text-dark">New Player Assessment</h3>
                     <button onClick={() => setIsAssessmentModalOpen(false)} className="text-gray-400 hover:text-red-500 transition-colors"><XCircle size={24} /></button>
                  </div>
                  <div className="p-6 space-y-4">
                     <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Player</label>
                        <select className="w-full border rounded-lg px-4 py-2 outline-none">
                           <option>Select Player...</option>
                           {MOCK_PLAYERS.map(p => <option key={p.id} value={p.id}>{p.name} ({p.ageGroup})</option>)}
                        </select>
                     </div>
                     <Input label="Date" type="date" defaultValue={new Date().toISOString().split('T')[0]} />
                     <div className="grid grid-cols-2 gap-4">
                        <Input label="Technical (1-10)" type="number" min="1" max="10" />
                        <Input label="Tactical (1-10)" type="number" min="1" max="10" />
                        <Input label="Physical (1-10)" type="number" min="1" max="10" />
                        <Input label="Mental (1-10)" type="number" min="1" max="10" />
                     </div>
                     <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Coach Notes</label>
                        <textarea className="w-full border rounded-lg px-4 py-2 h-24 resize-none outline-none" placeholder="Observations and feedback..."></textarea>
                     </div>
                  </div>
                  <div className="p-6 border-t flex justify-end gap-3 bg-gray-50 rounded-b-xl">
                     <Button variant="outline" onClick={() => setIsAssessmentModalOpen(false)}>Cancel</Button>
                     <Button onClick={handleSaveAssessment}>Save Assessment</Button>
                  </div>
               </div>
            </div>
         )}

         {/* Video Modal */}
         {isVideoModalOpen && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] animate-fade-in backdrop-blur-sm">
               <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg m-4">
                  <div className="p-6 border-b flex justify-between items-center bg-gray-50 rounded-t-xl">
                     <h3 className="font-bold text-xl text-dark">Upload Video Analysis</h3>
                     <button onClick={() => setIsVideoModalOpen(false)} className="text-gray-400 hover:text-red-500 transition-colors"><XCircle size={24} /></button>
                  </div>
                  <div className="p-6 space-y-4">
                     <Input label="Video Title" placeholder="e.g. Match Highlights vs Vipers" />
                     <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Player (Optional)</label>
                        <select className="w-full border rounded-lg px-4 py-2 outline-none">
                           <option>Entire Team / General</option>
                           {MOCK_PLAYERS.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                        </select>
                     </div>
                     <Input label="Video URL / File" type="file" />
                     <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Tags</label>
                        <input type="text" className="w-full border rounded-lg px-4 py-2 outline-none" placeholder="Separate by comma e.g. Defense, Pressing" />
                     </div>
                     <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Analysis Notes</label>
                        <textarea className="w-full border rounded-lg px-4 py-2 h-24 resize-none outline-none" placeholder="Key timestamps and comments..."></textarea>
                     </div>
                  </div>
                  <div className="p-6 border-t flex justify-end gap-3 bg-gray-50 rounded-b-xl">
                     <Button variant="outline" onClick={() => setIsVideoModalOpen(false)}>Cancel</Button>
                     <Button onClick={handleSaveVideo}>Upload Video</Button>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
};

export const FinanceManagement: React.FC = () => {
   // Calculate totals
   const totalRevenue = MOCK_PAYMENTS.reduce((sum, p) => sum + p.amount, 0);
   const totalExpenses = MOCK_EXPENSES.reduce((sum, e) => sum + e.amount, 0);
   const netIncome = totalRevenue - totalExpenses;

   return (
      <div className="space-y-6 animate-fade-in">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard label="Total Revenue (YTD)" value={`UGX ${(totalRevenue/1000000).toFixed(1)}M`} icon={DollarSign} trend="+15%" />
            <StatCard label="Total Expenses (YTD)" value={`UGX ${(totalExpenses/1000000).toFixed(1)}M`} icon={TrendingDown} trend="-2%" />
            <StatCard label="Net Income" value={`UGX ${(netIncome/1000000).toFixed(1)}M`} icon={Wallet} trend="Healthy" />
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6">
               <h3 className="font-bold text-dark mb-4">Recent Payments</h3>
               <table className="w-full text-left text-sm">
                  <thead className="bg-gray-50 text-gray-500 font-bold border-b">
                     <tr>
                        <th className="p-3">Date</th>
                        <th className="p-3">Payer</th>
                        <th className="p-3">Amount</th>
                        <th className="p-3">Method</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y">
                     {MOCK_PAYMENTS.map(pay => (
                        <tr key={pay.id}>
                           <td className="p-3 text-gray-500">{pay.date}</td>
                           <td className="p-3 font-bold">{pay.payerName}</td>
                           <td className="p-3 text-green-600 font-bold">+{pay.amount.toLocaleString()}</td>
                           <td className="p-3">{pay.method}</td>
                        </tr>
                     ))}
                  </tbody>
               </table>
               <Button variant="outline" className="w-full mt-4 text-xs">View All Transactions</Button>
            </Card>

            <Card className="p-6">
               <h3 className="font-bold text-dark mb-4">Expenses</h3>
               <table className="w-full text-left text-sm">
                  <thead className="bg-gray-50 text-gray-500 font-bold border-b">
                     <tr>
                        <th className="p-3">Category</th>
                        <th className="p-3">Description</th>
                        <th className="p-3">Amount</th>
                        <th className="p-3">Status</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y">
                     {MOCK_EXPENSES.map(exp => (
                        <tr key={exp.id}>
                           <td className="p-3"><Badge type="neutral">{exp.category}</Badge></td>
                           <td className="p-3 font-medium">{exp.description}</td>
                           <td className="p-3 text-red-600 font-bold">-{exp.amount.toLocaleString()}</td>
                           <td className="p-3 text-xs text-gray-500">{exp.status}</td>
                        </tr>
                     ))}
                  </tbody>
               </table>
               <Button variant="outline" className="w-full mt-4 text-xs">Manage Expenses</Button>
            </Card>
         </div>
      </div>
   );
};

export const AIContentGenerator: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [contentType, setContentType] = useState<'blog' | 'announcement' | 'training'>('blog');
  const [generatedContent, setGeneratedContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    if (!topic) return;
    setIsLoading(true);
    const content = await generateAcademyContent(topic, contentType);
    setGeneratedContent(content);
    setIsLoading(false);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <Card className="p-6">
        <h3 className="text-lg font-bold text-dark mb-4 flex items-center">
          <Sparkles className="mr-2 text-primary" size={20} />
          AI Content Assistant
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Content Type</label>
            <div className="flex gap-4">
              {['blog', 'announcement', 'training'].map((t) => (
                <label key={t} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="contentType"
                    value={t}
                    checked={contentType === t}
                    onChange={(e) => setContentType(e.target.value as any)}
                    className="mr-2 text-primary focus:ring-primary"
                  />
                  <span className="capitalize">{t}</span>
                </label>
              ))}
            </div>
          </div>
          <Input
            label="Topic / Keyword"
            placeholder="e.g. Importance of hydration, U14 Match Report..."
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
          <Button onClick={handleGenerate} disabled={isLoading || !topic}>
            {isLoading ? <span className="flex items-center"><Loader2 className="animate-spin mr-2"/> Generating...</span> : 'Generate Content'}
          </Button>
        </div>
      </Card>

      {generatedContent && (
        <Card className="p-6 bg-gray-50 border border-gray-200">
          <h3 className="font-bold text-dark mb-2">Generated Draft</h3>
          <div className="prose max-w-none text-gray-700 whitespace-pre-wrap">
            {generatedContent}
          </div>
          <div className="mt-4 flex gap-2">
             <Button variant="outline" onClick={() => navigator.clipboard.writeText(generatedContent)}><Copy size={16} className="mr-2"/> Copy</Button>
             <Button variant="outline"><Save size={16} className="mr-2"/> Save to Drafts</Button>
          </div>
        </Card>
      )}
    </div>
  );
};

export const StaffManagement: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
       <div className="flex justify-between items-center">
          <div className="relative flex-1 max-w-md">
             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
             <input type="text" placeholder="Search staff..." className="w-full pl-10 pr-4 py-2 border rounded-lg outline-none focus:border-primary"/>
          </div>
          <Button><UserPlus size={18} className="mr-2"/> Add Staff Member</Button>
       </div>

       <Card>
          <table className="w-full text-left text-sm">
             <thead className="bg-gray-50 text-gray-500 font-bold border-b">
                <tr>
                   <th className="p-4">Name</th>
                   <th className="p-4">Role</th>
                   <th className="p-4">Email</th>
                   <th className="p-4">Access Level</th>
                   <th className="p-4">Status</th>
                   <th className="p-4">Actions</th>
                </tr>
             </thead>
             <tbody className="divide-y">
                {MOCK_STAFF_USERS.map(staff => (
                   <tr key={staff.id} className="hover:bg-gray-50">
                      <td className="p-4 font-bold text-dark flex items-center">
                         <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-3 text-xs">
                            {staff.name.substring(0,2).toUpperCase()}
                         </div>
                         {staff.name}
                      </td>
                      <td className="p-4">{staff.role}</td>
                      <td className="p-4 text-gray-500">{staff.email}</td>
                      <td className="p-4"><Badge type="neutral">{staff.accessLevel}</Badge></td>
                      <td className="p-4"><Badge type={staff.status === 'Active' ? 'success' : 'neutral'}>{staff.status}</Badge></td>
                      <td className="p-4 flex gap-2 text-gray-400">
                         <button className="hover:text-primary"><Edit size={18}/></button>
                         <button className="hover:text-red-500"><Trash2 size={18}/></button>
                      </td>
                   </tr>
                ))}
             </tbody>
          </table>
       </Card>
    </div>
  );
};

export const TournamentManagement: React.FC = () => {
   return (
      <div className="space-y-6 animate-fade-in">
         <div className="flex justify-between items-center">
             <h2 className="text-xl font-bold text-dark">Tournament Schedules</h2>
             <Button><Plus size={18} className="mr-2"/> Register Tournament</Button>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {UPCOMING_TOURNAMENTS.map(tourn => (
               <Card key={tourn.id} className="flex flex-col md:flex-row overflow-hidden">
                  <div className="md:w-1/3 bg-gray-100 relative">
                     <img src={tourn.image} className="w-full h-full object-cover" alt={tourn.name}/>
                     <div className="absolute top-2 left-2">
                        <Badge>{tourn.status}</Badge>
                     </div>
                  </div>
                  <div className="p-6 md:w-2/3 flex flex-col">
                     <h3 className="font-bold text-dark text-lg mb-2">{tourn.name}</h3>
                     <div className="space-y-2 text-sm text-gray-500 mb-4">
                        <div className="flex items-center"><CalendarIcon size={14} className="mr-2 text-primary"/> {tourn.dates}</div>
                        <div className="flex items-center"><MapPin size={14} className="mr-2 text-primary"/> {tourn.location}</div>
                        <div className="flex items-center"><Flag size={14} className="mr-2 text-primary"/> {tourn.category}</div>
                     </div>
                     <p className="text-sm text-gray-600 mb-4 line-clamp-2">{tourn.description}</p>
                     <div className="mt-auto pt-4 border-t flex justify-end gap-2">
                        <Button variant="outline" size="sm">Logistics</Button>
                        <Button variant="outline" size="sm">Manage Squad</Button>
                     </div>
                  </div>
               </Card>
            ))}
         </div>

         <Card className="p-6">
            <h3 className="font-bold text-dark mb-4">Match Results Entry</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end mb-4">
               <div>
                  <label className="text-xs font-bold text-gray-500">Tournament</label>
                  <select className="w-full border rounded p-2 text-sm"><option>Kampala Junior League</option></select>
               </div>
               <div>
                  <label className="text-xs font-bold text-gray-500">Home Team</label>
                  <input type="text" className="w-full border rounded p-2 text-sm" placeholder="Team A"/>
               </div>
               <div className="text-center font-bold text-gray-400">VS</div>
               <div>
                  <label className="text-xs font-bold text-gray-500">Away Team</label>
                  <input type="text" className="w-full border rounded p-2 text-sm" placeholder="Team B"/>
               </div>
               <Button>Record Result</Button>
            </div>
            
            <table className="w-full text-left text-sm mt-4">
               <thead className="bg-gray-50 text-gray-500 font-bold border-b">
                  <tr>
                     <th className="p-3">Date</th>
                     <th className="p-3">Match</th>
                     <th className="p-3">Score</th>
                     <th className="p-3">Status</th>
                     <th className="p-3">Actions</th>
                  </tr>
               </thead>
               <tbody className="divide-y">
                  {MATCH_RESULTS.map(m => (
                     <tr key={m.id}>
                        <td className="p-3">{m.date}</td>
                        <td className="p-3">{m.homeTeam} vs {m.awayTeam}</td>
                        <td className="p-3 font-bold">{m.homeScore} - {m.awayScore}</td>
                        <td className="p-3"><Badge type={m.status === 'Live' ? 'danger' : 'neutral'}>{m.status}</Badge></td>
                        <td className="p-3 text-primary cursor-pointer hover:underline">Edit</td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </Card>
      </div>
   );
};
