
import React from 'react';
import { Cog, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="py-4 px-4 md:px-8 flex justify-between items-center relative z-10">
      <Link to="/" className="text-xl md:text-2xl font-orbitron font-bold flex items-center gap-2">
        <Cog className="w-6 h-6 text-purple-500 animate-gear-spin" />
        <span>Happy Birthday!</span>
      </Link>
      
      <div className="flex items-center gap-3">
        <div className="hidden md:flex items-center gap-2 text-mechanical-silver">
          <Briefcase className="w-5 h-5" />
          <span className="font-roboto-mono">Ruby</span>
        </div>
        <div className={cn(
          "h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-purple-700",
          "flex items-center justify-center text-white font-bold"
        )}>
          <Cog className="animate-gear-spin-reverse" />
        </div>
      </div>
      
      {/* Background gears */}
      <div className="gear-decoration -top-16 -right-16 opacity-5">
        <Cog className="w-48 h-48 text-purple-400 animate-gear-spin" />
      </div>
      <div className="gear-decoration top-12 -left-12 opacity-5">
        <Cog className="w-32 h-32 text-purple-500 animate-gear-spin-reverse" />
      </div>
    </header>
  );
};

export default Header;
