import React from 'react';
import { LucideIcon } from 'lucide-react';

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'outline' | 'ghost' }> = ({ 
  children, variant = 'primary', className = '', ...props 
}) => {
  const baseStyle = "px-6 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark shadow-md hover:shadow-lg",
    secondary: "bg-secondary text-dark hover:bg-secondary-dark shadow-md",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    ghost: "bg-transparent text-gray-600 hover:bg-gray-100"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export const Section: React.FC<{ children: React.ReactNode, className?: string, id?: string }> = ({ children, className = '', id }) => (
  <section id={id} className={`py-16 md:py-24 px-4 md:px-8 ${className}`}>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
);

export const Card: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 ${className}`}>
    {children}
  </div>
);

export const Badge: React.FC<{ children: React.ReactNode, type?: 'success' | 'warning' | 'danger' | 'neutral' }> = ({ children, type = 'neutral' }) => {
  const styles = {
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    danger: 'bg-red-100 text-red-800',
    neutral: 'bg-gray-100 text-gray-800'
  };
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${styles[type]}`}>
      {children}
    </span>
  );
};

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement> & { label?: string }> = ({ label, className = '', ...props }) => (
  <div className="mb-4">
    {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
    <input 
      className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all ${className}`}
      {...props}
    />
  </div>
);

export const StatCard: React.FC<{ label: string, value: string, icon: LucideIcon, trend?: string }> = ({ label, value, icon: Icon, trend }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
    <div>
      <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">{label}</p>
      <h3 className="text-2xl font-bold text-dark mt-1">{value}</h3>
      {trend && <p className="text-green-500 text-xs mt-1 font-semibold">{trend}</p>}
    </div>
    <div className="p-3 bg-primary/10 rounded-full text-primary">
      <Icon size={24} />
    </div>
  </div>
);

export const LoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center min-h-[50vh] w-full">
    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);