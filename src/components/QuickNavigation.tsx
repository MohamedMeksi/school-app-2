
import React from 'react';
import { cn } from '@/lib/utils';
import { BookOpen, Calendar, Mail, FileText, Settings } from 'lucide-react';

interface QuickNavigationProps {
  className?: string;
}

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  bgColor: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, bgColor }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`${bgColor} w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm icon-container`}>
        {icon}
      </div>
      <span className="text-xs font-medium">{label}</span>
    </div>
  );
};

const QuickNavigation: React.FC<QuickNavigationProps> = ({ className }) => {
  return (
    <div className={cn("app-card", className)}>
      <h2 className="text-lg font-semibold mb-4">Navigation rapide</h2>
      
      <div className="dashboard-grid">
        <NavItem 
          icon={<BookOpen className="text-white" size={24} />} 
          label="Cours" 
          bgColor="bg-primary"
        />
        <NavItem 
          icon={<FileText className="text-white" size={24} />} 
          label="Notes" 
          bgColor="bg-amber-400"
        />
        <NavItem 
          icon={<span className="text-white font-bold text-lg">⛔</span>} 
          label="Absences" 
          bgColor="bg-destructive"
        />
        <NavItem 
          icon={<Calendar className="text-white" size={24} />} 
          label="Emploi" 
          bgColor="bg-purple-500"
        />
        <NavItem 
          icon={<Mail className="text-white" size={24} />} 
          label="Messages" 
          bgColor="bg-blue-500"
        />
        <NavItem 
          icon={<Settings className="text-white" size={24} />} 
          label="Paramètres" 
          bgColor="bg-gray-400"
        />
      </div>
    </div>
  );
};

export default QuickNavigation;
