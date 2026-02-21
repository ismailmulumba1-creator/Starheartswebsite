import React, { useState } from 'react';
import { 
  Home, Calendar, CreditCard, User, ShoppingBag, BookOpen, MessageCircle, 
  LogOut, Bell, ChevronRight, Clock, MapPin, Download, CheckCircle, Truck, 
  HelpCircle, Salad, Video, Image, FileText, Activity, Play
} from 'lucide-react';
import { Button, Card, Badge, StatCard } from './ui';
import { Page, Invoice, ShopItem } from '../types';
import { MOCK_INVOICES, SHOP_ITEMS, PARENT_NOTIFICATIONS, UPCOMING_EVENTS, TRIAL_SESSIONS } from '../constants';

interface ParentProps {
  navigate: (page: Page) => void;
}

export const ParentPortal: React.FC<ParentProps> = ({ navigate }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('Overview');

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <img src="https://i.postimg.cc/bvLX9bk1/Whats-App-Image-2025-12-14-at-23-32-25-905dda09.jpg" alt="SH" className="w-20 h-20 rounded-xl mx-auto mb-4 shadow-lg object-cover" />
            <h1 className="text-2xl font-bold text-dark">Parents Portal</h1>
            <p className="text-gray-500">Secure access to your child's progress and academy resources.</p>
          </div>
          
          <Card className="p-8">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none" 
                  placeholder="parent@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input 
                  type="password" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none" 
                  placeholder="••••••••"
                />
              </div>
              <Button onClick={() => setIsLoggedIn(true)} className="w-full py-3 text-lg">Login</Button>
            </div>
            <div className="mt-6 text-center">
              <button className="text-sm text-primary hover:underline">Forgot Password?</button>
            </div>
            <div className="mt-4 text-center border-t pt-4">
               <button onClick={() => navigate(Page.HOME)} className="text-sm text-gray-500 hover:text-dark">Back to Website</button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  const menuItems = [
    { id: 'Overview', icon: Home, label: 'Overview' },
    { id: 'Schedule', icon: Calendar, label: 'Schedule' },
    { id: 'Progress', icon: Activity, label: 'Progress' },
    { id: 'Payments', icon: CreditCard, label: 'Payments' },
    { id: 'Shop', icon: ShoppingBag, label: 'Uniforms' },
    { id: 'Media', icon: Image, label: 'Gallery' },
    { id: 'Resources', icon: BookOpen, label: 'Resources' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'Overview': return <OverviewTab navigate={navigate} setActiveTab={setActiveTab} />;
      case 'Schedule': return <ScheduleTab />;
      case 'Progress': return <ProgressTab />;
      case 'Payments': return <PaymentsTab />;
      case 'Shop': return <ShopTab />;
      case 'Media': return <MediaTab />;
      case 'Resources': return <ResourcesTab />;
      default: return <OverviewTab navigate={navigate} setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row font-sans">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-white border-r border-gray-200 flex-shrink-0 flex flex-col h-screen sticky top-0">
        <div className="h-20 flex items-center px-6 border-b border-gray-100">
           <div className="w-8 h-8 bg-secondary rounded flex items-center justify-center text-dark font-bold mr-3">P</div>
           <span className="font-bold text-dark tracking-wide">Parent Portal</span>
        </div>
        
        <div className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
          <div className="px-3 mb-6">
             <div className="bg-primary/5 p-4 rounded-xl flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold mr-3">JO</div>
                <div>
                   <div className="text-xs text-gray-500 uppercase font-bold">Player</div>
                   <div className="font-bold text-dark text-sm">James Okello</div>
                </div>
             </div>
          </div>
          
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                activeTab === item.id ? 'bg-primary text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <item.icon size={20} className="mr-3" />
              <span className="font-medium text-sm">{item.label}</span>
            </button>
          ))}
        </div>
        
        <div className="p-4 border-t border-gray-100">
          <button onClick={() => { setIsLoggedIn(false); navigate(Page.HOME); }} className="flex items-center text-gray-500 hover:text-red-600 transition-colors w-full px-4 py-2">
            <LogOut size={18} className="mr-3" />
            <span className="text-sm">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
         <header className="bg-white border-b border-gray-200 h-20 px-8 flex items-center justify-between sticky top-0 z-30">
            <h2 className="text-xl font-bold text-dark">{activeTab}</h2>
            <div className="flex items-center space-x-6">
               <div className="relative cursor-pointer">
                  <Bell size={20} className="text-gray-500 hover:text-primary transition-colors" />
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
               </div>
               <div className="flex items-center space-x-2">
                  <div className="text-right hidden md:block">
                     <div className="text-sm font-bold text-dark">Mr. Okello</div>
                     <div className="text-xs text-gray-500">Parent ID: #8821</div>
                  </div>
                  <div className="w-10 h-10 bg-dark text-white rounded-full flex items-center justify-center font-bold">MO</div>
               </div>
            </div>
         </header>
         <main className="p-4 md:p-8">
            {renderContent()}
         </main>
      </div>
    </div>
  );
};

const OverviewTab: React.FC<{ navigate: (page: Page) => void, setActiveTab: (tab: string) => void }> = ({ navigate, setActiveTab }) => (
   <div className="space-y-6">
      {/* Notifications */}
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex items-start">
         <div className="bg-blue-100 p-2 rounded-full text-blue-600 mr-4 shrink-0">
            <Bell size={18} />
         </div>
         <div>
            <h4 className="font-bold text-blue-800 text-sm mb-1">New Notifications</h4>
            <ul className="space-y-1">
               {PARENT_NOTIFICATIONS.map(n => (
                  <li key={n.id} className="text-xs text-blue-700 flex items-center">
                     <span className="w-1 h-1 bg-blue-400 rounded-full mr-2"></span>
                     {n.message} <span className="opacity-60 ml-2">({n.time})</span>
                  </li>
               ))}
            </ul>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         <StatCard label="Attendance" value="92%" icon={CheckCircle} trend="Excellent" />
         <StatCard label="Next Invoice" value="UGX 150k" icon={CreditCard} trend="Due in 3 days" />
         <StatCard label="Goals (Season)" value="8" icon={Activity} />
         <StatCard label="Next Match" value="Sat, 10am" icon={Calendar} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
         <Card className="p-6">
            <h3 className="font-bold text-dark mb-4 flex items-center justify-between">
               Upcoming Schedule
               <button onClick={() => setActiveTab('Schedule')} className="text-xs text-primary font-bold hover:underline">View All</button>
            </h3>
            <div className="space-y-4">
               {UPCOMING_EVENTS.slice(0, 3).map(evt => (
                  <div key={evt.id} className="flex items-center p-3 border border-gray-100 rounded-lg hover:bg-gray-50">
                     <div className="bg-gray-100 rounded p-2 text-center mr-4 w-12 shrink-0">
                        <div className="text-xs font-bold text-gray-500 uppercase">{evt.month}</div>
                        <div className="text-lg font-bold text-dark">{evt.day}</div>
                     </div>
                     <div>
                        <div className="font-bold text-dark text-sm">{evt.title}</div>
                        <div className="text-xs text-gray-500 flex items-center mt-1">
                           <Clock size={10} className="mr-1"/> {evt.time}
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </Card>
         
         <Card className="p-6">
            <h3 className="font-bold text-dark mb-4">Coach's Corner</h3>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 mb-4">
               <p className="text-gray-600 text-sm italic mb-3">"James has been showing great improvement in his defensive positioning. We are working on his distribution from the back this week."</p>
               <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-300 mr-2"></div>
                  <div className="text-xs">
                     <span className="block font-bold text-dark">Coach Michael</span>
                     <span className="text-gray-500">U14 Head Coach</span>
                  </div>
               </div>
            </div>
            <Button variant="outline" className="w-full text-sm">Send Message to Coach</Button>
         </Card>
      </div>
   </div>
);

const ScheduleTab: React.FC = () => (
   <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
         <h3 className="font-bold text-dark text-lg">Training & Match Calendar</h3>
         <div className="flex gap-2">
            <Button variant="outline" className="text-xs">Download PDF</Button>
            <Button className="text-xs">Sync to Google Cal</Button>
         </div>
      </div>
      <div className="space-y-4">
         {UPCOMING_EVENTS.map(evt => (
            <div key={evt.id} className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-xl hover:shadow-sm transition-shadow">
               <div className="flex items-center mb-4 md:mb-0">
                  <div className={`w-2 h-12 rounded-full mr-4 ${evt.type === 'Match' ? 'bg-red-500' : evt.type === 'Training' ? 'bg-blue-500' : 'bg-yellow-500'}`}></div>
                  <div>
                     <h4 className="font-bold text-dark">{evt.title}</h4>
                     <p className="text-xs text-gray-500">{evt.date} • {evt.type}</p>
                  </div>
               </div>
               <div className="flex flex-col md:flex-row gap-4 md:items-center text-sm text-gray-600">
                  <div className="flex items-center"><Clock size={16} className="mr-2 text-primary"/> {evt.time}</div>
                  <div className="flex items-center"><MapPin size={16} className="mr-2 text-primary"/> {evt.location}</div>
                  {evt.type === 'Match' || evt.type === 'Trial' ? (
                     <Badge type="warning">Attendance Mandatory</Badge>
                  ) : (
                     <Badge type="neutral">Regular Session</Badge>
                  )}
               </div>
            </div>
         ))}
      </div>
   </Card>
);

const ProgressTab: React.FC = () => (
   <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
         <Card className="p-6">
            <h3 className="font-bold text-dark mb-4">Skill Assessment (Term 1)</h3>
            <div className="space-y-6">
               {[
                  { skill: 'Technical (Dribbling/Passing)', score: 85 },
                  { skill: 'Tactical Understanding', score: 70 },
                  { skill: 'Physical (Speed/Stamina)', score: 90 },
                  { skill: 'Psychological (Leadership)', score: 75 }
               ].map((item, i) => (
                  <div key={i}>
                     <div className="flex justify-between mb-2 text-sm font-medium">
                        <span>{item.skill}</span>
                        <span className="font-bold">{item.score}/100</span>
                     </div>
                     <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-primary h-2.5 rounded-full" style={{ width: `${item.score}%` }}></div>
                     </div>
                  </div>
               ))}
            </div>
         </Card>
         <Card className="p-6">
            <h3 className="font-bold text-dark mb-4">Match Statistics</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
               <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-dark">12</div>
                  <div className="text-xs text-gray-500 uppercase">Matches Played</div>
               </div>
               <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-dark">8</div>
                  <div className="text-xs text-gray-500 uppercase">Goals Scored</div>
               </div>
               <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-dark">4</div>
                  <div className="text-xs text-gray-500 uppercase">Assists</div>
               </div>
            </div>
         </Card>
      </div>
      <div className="space-y-6">
         <Card className="p-6">
            <h3 className="font-bold text-dark mb-4">Video Analysis</h3>
            <div className="relative rounded-lg overflow-hidden bg-black aspect-video mb-4 cursor-pointer group">
               <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover opacity-70" alt="Video" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center pl-1 group-hover:scale-110 transition-transform">
                     <Play size={24} className="text-primary fill-primary"/>
                  </div>
               </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">Latest match highlights vs City Stars. Focus on defensive transitions.</p>
            <Button variant="outline" className="w-full text-xs">Open Video Library</Button>
         </Card>
      </div>
   </div>
);

const PaymentsTab: React.FC = () => (
   <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
         <h3 className="font-bold text-dark text-lg">Financial History</h3>
         <Button><CreditCard size={16} className="mr-2"/> Make a Payment</Button>
      </div>
      <div className="overflow-x-auto">
         <table className="w-full text-left">
            <thead>
               <tr className="border-b text-gray-500 text-sm">
                  <th className="py-3 px-2">Invoice ID</th>
                  <th className="py-3 px-2">Description</th>
                  <th className="py-3 px-2">Date</th>
                  <th className="py-3 px-2">Due Date</th>
                  <th className="py-3 px-2">Amount</th>
                  <th className="py-3 px-2">Status</th>
                  <th className="py-3 px-2">Action</th>
               </tr>
            </thead>
            <tbody>
               {MOCK_INVOICES.map((inv) => (
                  <tr key={inv.id} className="border-b last:border-0 text-sm hover:bg-gray-50">
                     <td className="py-4 px-2 font-mono text-gray-500">{inv.id}</td>
                     <td className="py-4 px-2 font-medium text-dark">{inv.description}</td>
                     <td className="py-4 px-2 text-gray-600">{inv.date}</td>
                     <td className="py-4 px-2 text-gray-600">{inv.dueDate}</td>
                     <td className="py-4 px-2 font-bold text-dark">{inv.amount}</td>
                     <td className="py-4 px-2">
                        <Badge type={inv.status === 'Paid' ? 'success' : inv.status === 'Pending' ? 'warning' : 'danger'}>{inv.status}</Badge>
                     </td>
                     <td className="py-4 px-2">
                        {inv.status !== 'Paid' && <button className="text-primary hover:underline font-bold text-xs">Pay Now</button>}
                        {inv.status === 'Paid' && <button className="text-gray-400 hover:text-dark text-xs flex items-center"><Download size={12} className="mr-1"/> Receipt</button>}
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   </Card>
);

const ShopTab: React.FC = () => (
   <div className="space-y-6">
      <div className="flex justify-between items-center">
         <h3 className="font-bold text-dark text-lg">Uniforms & Merchandise</h3>
         <div className="relative">
            <ShoppingBag className="text-dark" />
            <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">0</span>
         </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
         {SHOP_ITEMS.map((item) => (
            <Card key={item.id} className="overflow-hidden group">
               <div className="h-48 relative overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                  <div className="absolute top-2 left-2">
                     <Badge type="neutral">{item.category}</Badge>
                  </div>
               </div>
               <div className="p-4">
                  <h4 className="font-bold text-dark mb-1">{item.name}</h4>
                  <div className="flex justify-between items-center mt-2">
                     <span className="text-primary font-bold">{item.price}</span>
                     <Button variant="outline" className="text-xs px-3 py-1">Add to Cart</Button>
                  </div>
               </div>
            </Card>
         ))}
      </div>
   </div>
);

const MediaTab: React.FC = () => (
   <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[1,2,3,4,5,6,7,8].map(i => (
         <div key={i} className="rounded-xl overflow-hidden relative group cursor-pointer aspect-square">
            <img 
               src={`https://images.unsplash.com/photo-1517466787929-bc90951d6428?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80&random=${i}`} 
               alt="Gallery" 
               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
               <Download className="text-white" size={24} />
            </div>
         </div>
      ))}
   </div>
);

const ResourcesTab: React.FC = () => (
   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card className="p-6">
         <h3 className="font-bold text-dark mb-4 flex items-center"><Truck className="mr-2 text-secondary"/> Transport & Logistics</h3>
         <p className="text-sm text-gray-600 mb-4">Bus schedules for training and match days. Please ensure players are at pickup points 10 minutes early.</p>
         <ul className="space-y-2 text-sm text-gray-600 mb-4">
            <li className="flex justify-between border-b border-gray-100 pb-1">
               <span>City Center Pickup</span>
               <span className="font-bold">7:30 AM</span>
            </li>
            <li className="flex justify-between border-b border-gray-100 pb-1">
               <span>Ntinda Junction</span>
               <span className="font-bold">7:45 AM</span>
            </li>
            <li className="flex justify-between border-b border-gray-100 pb-1">
               <span>Kyambogo Main Gate</span>
               <span className="font-bold">8:00 AM</span>
            </li>
         </ul>
         <Button variant="outline" className="w-full text-xs">View Full Route Map</Button>
      </Card>

      <Card className="p-6">
         <h3 className="font-bold text-dark mb-4 flex items-center"><Salad className="mr-2 text-green-500"/> Nutrition Guidelines</h3>
         <p className="text-sm text-gray-600 mb-4">Recommended meal plans for young athletes to maximize performance and recovery.</p>
         <div className="space-y-3">
            <div className="p-3 bg-green-50 rounded-lg">
               <h4 className="font-bold text-green-800 text-xs uppercase mb-1">Pre-Match Meal (3-4 hrs before)</h4>
               <p className="text-xs text-green-700">Complex carbs: Pasta, Rice, Sweet Potatoes. Low fat protein.</p>
            </div>
            <div className="p-3 bg-yellow-50 rounded-lg">
               <h4 className="font-bold text-yellow-800 text-xs uppercase mb-1">Hydration</h4>
               <p className="text-xs text-yellow-700">500ml water 2 hours before. Sip frequently during training.</p>
            </div>
         </div>
         <Button variant="outline" className="w-full text-xs mt-4">Download Meal Plan PDF</Button>
      </Card>

      <Card className="p-6 md:col-span-2">
         <h3 className="font-bold text-dark mb-4 flex items-center"><HelpCircle className="mr-2 text-primary"/> Frequently Asked Questions</h3>
         <div className="space-y-4">
            {[
               { q: 'How do I order a replacement kit?', a: 'You can order directly through the "Uniforms" tab in this portal. Orders take 3-5 days to process.' },
               { q: 'What happens if it rains on training day?', a: 'Training continues on the all-weather pitch unless there is lightning. Cancellations are notified via SMS.' },
               { q: 'Can I attend the training sessions?', a: 'Parents are welcome to watch from the designated spectator stands. Access to the pitch is restricted to staff and players.' }
            ].map((faq, i) => (
               <div key={i}>
                  <h4 className="font-bold text-sm text-dark">{faq.q}</h4>
                  <p className="text-sm text-gray-600">{faq.a}</p>
               </div>
            ))}
         </div>
      </Card>
   </div>
);