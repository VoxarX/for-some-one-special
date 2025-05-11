
import React from 'react';
import { Cog, Wrench, CircleDashed } from "lucide-react";
import { cn } from "@/lib/utils";

const MessageSection: React.FC = () => {
  return (
    <section className="blueprint-section section-padding relative" id="message">
      {/* Background decorations */}
      <div className="gear-decoration top-10 right-10">
        <Cog className="w-32 h-32 text-mechanical-accent/20 animate-gear-spin" />
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
            <Wrench className="w-full h-full text-mechanical-accent" />
          </div>
          <div className="absolute bottom-0 left-0 w-24 h-24 opacity-10">
            <Cog className="w-full h-full text-mechanical-blue animate-gear-spin-reverse" />
          </div>
          
          {/* Message content */}
          <div className="relative z-10">
            <p className="text-lg md:text-xl text-mechanical-silver mb-6 leading-relaxed">
              Dear <span className="text-mechanical-accent font-orbitron">Ruby</span>,
            </p>
            
            <p className="text-mechanical-silver mb-6 leading-relaxed">
              Happy birthday! Just wanted to say how cool it is seeing how passionate you are about the things you love — whether it’s building stuff, fixing things, or pulling off moves on your bike and board.
            </p>

            <p className="text-mechanical-silver mb-6 leading-relaxed">
              You’ve got a way of looking at the world that’s different, and it’s honestly inspiring. Always finding a way, always up for a challenge.
            </p>

            <p className="text-mechanical-silver mb-6 leading-relaxed">
              Hope today’s a good one for you. Here’s to new adventures, good rides, and whatever madness you decide to take on next.
            </p>

            
            <p className="text-xl font-orbitron text-mechanical-accent mt-8">
              Happy Birthday!
            </p>
            
            <p className="text-mechanical-silver">
              With admiration,<br />
              <span className="font-orbitron text-white">Aaron Mathew</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
