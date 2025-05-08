
import React from 'react';
import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <div className={cn("text-center mt-6 pb-6", className)}>
      <div className="flex items-center justify-center mb-2">
        <span className="text-primary font-bold text-lg">MySchoolHub</span>
      </div>
      <div className="flex items-center justify-center gap-3 mb-2">
        <button className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
          Donner mon avis
        </button>
        <button className="text-xs font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
          Rejoindre la communauté
        </button>
      </div>
      <p className="text-xs text-gray-400">
        Version Bêta • Conçue pour les étudiants par les étudiants
      </p>
    </div>
  );
};

export default Footer;
