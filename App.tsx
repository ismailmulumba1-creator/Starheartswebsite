import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Navbar, Footer, HomePage, ProgramsPage, ContactPage, RegistrationPage, AboutPage, FacilitiesPage, PathwayPage, TournamentsPage, NewsPage, PartnershipsPage, ShopPage } from './components/PublicPages';
import { Page } from './types';
import { LoadingSpinner } from './components/ui';
import { Chatbot } from './components/Chatbot';

// Lazy load Admin and Parent modules to reduce initial bundle size for public users
const AdminSidebar = lazy(() => import('./components/AdminPages').then(module => ({ default: module.AdminSidebar })));
const DashboardOverview = lazy(() => import('./components/AdminPages').then(module => ({ default: module.DashboardOverview })));
const PlayerManagement = lazy(() => import('./components/AdminPages').then(module => ({ default: module.PlayerManagement })));
const RegistrationManagement = lazy(() => import('./components/AdminPages').then(module => ({ default: module.RegistrationManagement })));
const FormsManagement = lazy(() => import('./components/AdminPages').then(module => ({ default: module.FormsManagement })));
const ProgramManagement = lazy(() => import('./components/AdminPages').then(module => ({ default: module.ProgramManagement })));
const AttendanceManagement = lazy(() => import('./components/AdminPages').then(module => ({ default: module.AttendanceManagement })));
const CoachingManagement = lazy(() => import('./components/AdminPages').then(module => ({ default: module.CoachingManagement })));
const FinanceManagement = lazy(() => import('./components/AdminPages').then(module => ({ default: module.FinanceManagement })));
const AIContentGenerator = lazy(() => import('./components/AdminPages').then(module => ({ default: module.AIContentGenerator })));
const StaffManagement = lazy(() => import('./components/AdminPages').then(module => ({ default: module.StaffManagement })));
const TournamentManagement = lazy(() => import('./components/AdminPages').then(module => ({ default: module.TournamentManagement })));
const ParentPortal = lazy(() => import('./components/ParentPortal').then(module => ({ default: module.ParentPortal })));

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Simple mock routing based on state updates
    if (currentPage.startsWith('ADMIN')) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderContent = () => {
    switch (currentPage) {
      case Page.HOME: return <HomePage navigate={setCurrentPage} />;
      case Page.PROGRAMS: return <ProgramsPage navigate={setCurrentPage} />;
      case Page.FACILITIES: return <FacilitiesPage />;
      case Page.CONTACT: return <ContactPage />;
      case Page.REGISTRATION: return <RegistrationPage navigate={setCurrentPage} />;
      case Page.ABOUT: return <AboutPage />;
      case Page.PATHWAY: return <PathwayPage />;
      case Page.TOURNAMENTS: return <TournamentsPage navigate={setCurrentPage} />;
      case Page.NEWS: return <NewsPage />;
      case Page.PARTNERSHIPS: return <PartnershipsPage />;
      case Page.SHOP: return <ShopPage />;
      // Parent Portal
      case Page.PARENTS_PORTAL: return <ParentPortal navigate={setCurrentPage} />;
      // Admin Pages
      case Page.ADMIN_DASHBOARD: return <DashboardOverview />;
      case Page.ADMIN_PLAYERS: return <PlayerManagement />;
      case Page.ADMIN_REGISTRATIONS: return <RegistrationManagement />;
      case Page.ADMIN_FORMS: return <FormsManagement />;
      case Page.ADMIN_PROGRAMS: return <ProgramManagement />;
      case Page.ADMIN_ATTENDANCE: return <AttendanceManagement />;
      case Page.ADMIN_COACHING: return <CoachingManagement />;
      case Page.ADMIN_TOURNAMENTS: return <TournamentManagement />;
      case Page.ADMIN_FINANCE: return <FinanceManagement />;
      case Page.ADMIN_CONTENT: return <AIContentGenerator />;
      case Page.ADMIN_STAFF: return <StaffManagement />;
      case Page.ADMIN_REPORTS:
      case Page.ADMIN_SETTINGS:
        return (
          <div className="flex items-center justify-center h-96 text-gray-400">
              <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Settings Module</h3>
                  <p>System configuration coming soon.</p>
              </div>
          </div>
      );
      default: return <HomePage navigate={setCurrentPage} />;
    }
  };

  if (isAdmin) {
    return (
      <div className="flex min-h-screen bg-gray-50 font-sans">
        <Suspense fallback={<LoadingSpinner />}>
          <AdminSidebar navigate={setCurrentPage} currentPage={currentPage} />
          <main className="flex-1 ml-64 p-8">
            <header className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-2xl font-bold text-dark">
                  {currentPage === Page.ADMIN_DASHBOARD && 'Dashboard Overview'}
                  {currentPage === Page.ADMIN_PLAYERS && 'Player Management'}
                  {currentPage === Page.ADMIN_REGISTRATIONS && 'Registration Pipeline'}
                  {currentPage === Page.ADMIN_FORMS && 'Forms Builder'}
                  {currentPage === Page.ADMIN_PROGRAMS && 'Programs & Schedule'}
                  {currentPage === Page.ADMIN_ATTENDANCE && 'Attendance'}
                  {currentPage === Page.ADMIN_COACHING && 'Coaching & Performance'}
                  {currentPage === Page.ADMIN_TOURNAMENTS && 'Tournament Management'}
                  {currentPage === Page.ADMIN_FINANCE && 'Financial Management'}
                  {currentPage === Page.ADMIN_CONTENT && 'Content Assistant'}
                  {currentPage === Page.ADMIN_STAFF && 'Staff Management'}
                  {currentPage === Page.ADMIN_REPORTS && 'Reports & Analytics'}
                  {currentPage === Page.ADMIN_SETTINGS && 'System Settings'}
                </h1>
                <p className="text-sm text-gray-500 mt-1">{new Date().toDateString()}</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-md">AD</div>
              </div>
            </header>
            {renderContent()}
          </main>
        </Suspense>
      </div>
    );
  }

  // Parents Portal renders its own layout, so we wrap it here if selected
  if (currentPage === Page.PARENTS_PORTAL) {
      return (
        <div className="font-sans text-gray-800 antialiased">
            <Suspense fallback={<div className="h-screen flex items-center justify-center"><LoadingSpinner /></div>}>
              <ParentPortal navigate={setCurrentPage} />
            </Suspense>
            {/* Optional: Add Chatbot to Parent Portal if desired, though usually for public/support */}
            <Chatbot /> 
        </div>
      )
  }

  return (
    <div className="font-sans text-gray-800 antialiased">
      <Navbar navigate={setCurrentPage} currentPage={currentPage} />
      <main>
        <Suspense fallback={<LoadingSpinner />}>
          {renderContent()}
        </Suspense>
      </main>
      <Footer navigate={setCurrentPage} />
      <Chatbot />
    </div>
  );
};

export default App;