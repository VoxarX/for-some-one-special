
import React from 'react';
import { Gear, Tools, CircleDashed } from "lucide-react";
import { cn } from "@/lib/utils";

const MessageSection: React.FC = () => {
  return (
    <section className="blueprint-section section-padding relative" id="message">
      {/* Background decorations */}
      <div className="gear-decoration top-10 right-10">
        <Gear className="w-32 h-32 text-mechanical-accent/20 animate-gear-spin" />
      </div>
      <div className="gear-decoration bottom-10 left-10">
        <CircleDashed className="w-24 h-24 text-mechanical-blue/20 animate-gear-spin-reverse" />
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-heading">A Birthday Message</h2>
        </div>
        
        <div className="metal-card p-8 md:p-12 relative overflow-hidden">
          {/* Corner decorations */}
          <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
            <Tools className="w-full h-full text-mechanical-accent" />
          </div>
          <div className="absolute bottom-0 left-0 w-24 h-24 opacity-10">
            <Gear className="w-full h-full text-mechanical-blue animate-gear-spin-reverse" />
          </div>
          
          {/* Message content */}
          <div className="relative z-10">
            <p className="text-lg md:text-xl text-mechanical-silver mb-6 leading-relaxed">
              Dear <span className="text-mechanical-accent font-orbitron">[Her Name]</span>,
            </p>
            
            <p className="text-mechanical-silver mb-6 leading-relaxed">
              On your special day, I wanted to create something as unique and amazing as you are. Your passion for mechanics, 
              the way your face lights up when you talk about engineering problems, and your incredible skills 
              on both motorbikes and skateboards never cease to amaze me.
            </p>
            
            <p className="text-mechanical-silver mb-6 leading-relaxed">
              What makes you truly special isn't just your technical knowledge, but how you approach life with the 
              same precision and creativity that you bring to your engineering projects. Your mind works in fascinating ways, 
              finding solutions and seeing possibilities where others don't.
            </p>
            
            <p className="text-mechanical-silver mb-6 leading-relaxed">
              I hope this birthday brings you everything you've been designing in your mind. May your next trip around the 
              sun be filled with new engineering challenges to solve, countless perfect rides (both on boards and bikes), 
              and all the happiness you so richly deserve.
            </p>
            
            <p className="text-xl font-orbitron text-mechanical-accent mt-8">
              Happy Birthday!
            </p>
            
            <p className="text-mechanical-silver">
              With admiration,<br />
              <span className="font-orbitron text-white">[Your Name]</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
