
import React from 'react';
import { cn } from '@/lib/utils';
import { Calendar, BookOpen, Bell, CheckSquare } from 'lucide-react';

interface DailyOverviewProps {
  className?: string;
}

const DailyOverview: React.FC<DailyOverviewProps> = ({ className }) => {
  return (
    <div className={cn("app-card animate-fade-in", className)}>
      <h2 className="text-lg font-semibold mb-3">Ma journée</h2>
      
      <div className="grid grid-cols-2 gap-3">
        {/* Prochain cours */}
        <div className="bg-blue-50 p-3 rounded-xl">
          <div className="flex items-center gap-2 mb-1">
            <BookOpen size={16} className="text-primary" />
            <span className="text-xs font-medium">Prochain cours</span>
          </div>
          <p className="text-sm font-semibold">Mathématiques</p>
          <p className="text-xs text-gray-500">10h00 • Salle B104</p>
        </div>
        
        {/* Devoir à rendre */}
        <div className="bg-amber-50 p-3 rounded-xl">
          <div className="flex items-center gap-2 mb-1">
            <CheckSquare size={16} className="text-amber-500" />
            <span className="text-xs font-medium">Devoir à rendre</span>
          </div>
          <p className="text-sm font-semibold">Français</p>
          <p className="text-xs text-gray-500">Dissertation • Aujourd'hui</p>
        </div>
        
        {/* Reste 4 cours */}
        <div className="bg-purple-50 p-3 rounded-xl">
          <div className="flex items-center gap-2 mb-1">
            <Calendar size={16} className="text-purple-500" />
            <span className="text-xs font-medium">Reste 4 cours</span>
          </div>
          <p className="text-sm font-semibold">Voir emploi du temps</p>
          <p className="text-xs text-gray-500">Fin à 17h30</p>
        </div>
        
        {/* Nouvelle note */}
        <div className="bg-green-50 p-3 rounded-xl">
          <div className="flex items-center gap-2 mb-1">
            <Bell size={16} className="text-secondary" />
            <span className="text-xs font-medium">Nouvelle note</span>
          </div>
          <p className="text-sm font-semibold">15/20 en Histoire</p>
          <p className="text-xs text-gray-500">+2 points vs moyenne</p>
        </div>
      </div>
    </div>
  );
};

export default DailyOverview;
