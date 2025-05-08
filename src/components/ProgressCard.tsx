
import React from 'react';
import { cn } from '@/lib/utils';

interface ProgressCardProps {
  className?: string;
}

const ProgressCard: React.FC<ProgressCardProps> = ({ className }) => {
  return (
    <div className={cn("app-card", className)}>
      <h2 className="text-lg font-semibold mb-3">Ma progression</h2>
      
      {/* Devoirs rendus */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-medium">Devoirs rendus cette semaine</span>
          <span className="text-sm font-semibold">3/5</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-primary h-2 rounded-full" style={{ width: '60%' }}></div>
        </div>
      </div>
      
      {/* Moyenne générale */}
      <div>
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-medium">Moyenne générale</span>
          <div className="flex items-center gap-1">
            <span className="text-sm font-semibold">14.2</span>
            <span className="text-xs text-secondary">+0.5</span>
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-secondary h-2 rounded-full" style={{ width: '71%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;
