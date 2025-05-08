
import React from 'react';
import Header from '@/components/Header';
import DailyOverview from '@/components/DailyOverview';
import QuickNavigation from '@/components/QuickNavigation';
import ProgressCard from '@/components/ProgressCard';
import MotivationCard from '@/components/MotivationCard';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-appBg pb-safe pt-safe">
      <Header />
      <div className="px-4 py-6 space-y-6 overflow-y-auto">
        <DailyOverview />
        <QuickNavigation />
        <ProgressCard />
        <MotivationCard />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
