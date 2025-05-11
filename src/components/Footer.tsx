
import React from 'react';
import { Gear, Skateboard, Bike } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-4 border-t border-mechanical-gray/20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <Gear className="w-5 h-5 text-mechanical-accent animate-gear-spin" />
          <span className="font-orbitron text-white">Birthday 2025</span>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-mechanical-silver hover-glow">
            <Bike className="w-4 h-4" />
            <span>Motorbikes</span>
          </div>
          <div className="flex items-center gap-2 text-mechanical-silver hover-glow">
            <Skateboard className="w-4 h-4" />
            <span>Skating</span>
          </div>
          <div className="flex items-center gap-2 text-mechanical-silver hover-glow">
            <Gear className="w-4 h-4" />
            <span>Engineering</span>
          </div>
        </div>
        
        <div className="text-mechanical-gray text-sm mt-4 md:mt-0">
          &copy; {currentYear} Made with ❤️
        </div>
      </div>
    </footer>
  );
};

export default Footer;
