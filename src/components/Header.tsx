
import React from 'react';
import { Gear, Skateboard } from "lucide-react";
import { cn } from "@/lib/utils";

const Header: React.FC = () => {
  return (
    <header className="py-4 px-4 md:px-8 flex justify-between items-center relative z-10">
      <div className="text-xl md:text-2xl font-orbitron font-bold flex items-center gap-2">
        <Gear className="w-6 h-6 text-mechanical-accent animate-gear-spin" />
        <span>Happy Birthday!</span>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="hidden md:flex items-center gap-2 text-mechanical-silver">
          <Skateboard className="w-5 h-5" />
          <span className="font-roboto-mono">Engineer Extraordinaire</span>
        </div>
        <div className={cn(
          "h-10 w-10 rounded-full bg-gradient-to-r from-mechanical-accent to-mechanical-blue",
          "flex items-center justify-center text-white font-bold"
        )}>
          <Gear className="animate-gear-spin-reverse" />
        </div>
      </div>
      
      {/* Background gears */}
      <div className="gear-decoration -top-16 -right-16 opacity-5">
        <Gear className="w-48 h-48 text-mechanical-silver animate-gear-spin" />
      </div>
      <div className="gear-decoration top-12 -left-12 opacity-5">
        <Gear className="w-32 h-32 text-mechanical-accent animate-gear-spin-reverse" />
      </div>
    </header>
  );
};

export default Header;
