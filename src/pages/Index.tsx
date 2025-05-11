
import React from 'react';
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TimelineSection from "@/components/TimelineSection";
import GallerySection from "@/components/GallerySection";
import MessageSection from "@/components/MessageSection";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-mechanical-dark text-foreground overflow-hidden">
      {/* Main content */}
      <Header />
      <main>
        <HeroSection />
        <TimelineSection />
        <GallerySection />
        <MessageSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
