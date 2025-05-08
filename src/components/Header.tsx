
import React from 'react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  // Get current date in French format
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  const formattedDate = today.toLocaleDateString('fr-FR', options);
  // Capitalize first letter
  const formattedDateCapitalized = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

  return (
    <div className={cn(
      "bg-hero-gradient text-white p-6 pt-10 pb-8 rounded-b-3xl shadow-md relative overflow-hidden",
      className
    )}>
      <div className="relative z-10 animate-fade-in">
        <h1 className="text-2xl font-bold mb-1">👋 Bonjour, Youssef !</h1>
        <p className="text-sm font-light opacity-90">📅 Aujourd'hui : {formattedDateCapitalized}</p>
      </div>
      
      {/* Abstract circles for decoration */}
      <div className="absolute top-[-20px] right-[-20px] w-24 h-24 rounded-full bg-white opacity-10"></div>
      <div className="absolute bottom-[-30px] left-[20%] w-32 h-32 rounded-full bg-white opacity-5"></div>
      
      {/* Profile picture placeholder */}
      <div className="absolute right-6 top-8 w-10 h-10 bg-white rounded-full border-2 border-white overflow-hidden">
        <div className="w-full h-full bg-secondary flex items-center justify-center text-textDark font-semibold">Y</div>
      </div>
    </div>
  );
};

export default Header;
