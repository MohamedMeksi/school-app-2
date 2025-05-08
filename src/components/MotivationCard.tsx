
import React from 'react';
import { cn } from '@/lib/utils';

interface MotivationCardProps {
  className?: string;
}

const MotivationCard: React.FC<MotivationCardProps> = ({ className }) => {
  return (
    <div className={cn(
      "bg-motivation-gradient text-white p-5 rounded-xl shadow-md relative overflow-hidden animate-scale-in",
      className
    )}>
      <div className="relative z-10">
        <div className="text-sm font-bold mb-2">✨ MOTIVATION DU JOUR</div>
        <p className="text-lg font-medium italic">
          "Crois en toi, tu gères plus que tu ne le penses."
        </p>
        <div className="mt-3 bg-white/20 p-2 rounded-lg text-sm">
          <span className="font-medium">💡 Astuce :</span> Révise les maths 15 min après manger.
        </div>
      </div>
      
      {/* Abstract decoration */}
      <div className="absolute top-[-30px] right-[-20px] w-32 h-32 rounded-full bg-white opacity-10"></div>
      <div className="absolute bottom-[-40px] left-[-20px] w-40 h-40 rounded-full bg-white opacity-10"></div>
    </div>
  );
};

export default MotivationCard;
