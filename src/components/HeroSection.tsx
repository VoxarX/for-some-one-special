
import React, { useState, useEffect } from 'react';
import { Bike, Wrench, Gear } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface CountdownProps {
  targetDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    
    return () => clearInterval(interval);
  }, [targetDate]);

  // Check if countdown is expired
  const isExpired = targetDate.getTime() <= new Date().getTime();
  
  return (
    <div className="mt-8 md:mt-12">
      {isExpired ? (
        <div className="text-center">
          <h3 className="text-2xl font-orbitron text-mechanical-accent mb-2">IT'S YOUR DAY!</h3>
          <p className="text-mechanical-silver">Time to celebrate!</p>
        </div>
      ) : (
        <>
          <h3 className="text-xl font-orbitron text-center mb-4">COUNTDOWN TO YOUR DAY</h3>
          <div className="flex justify-center gap-4 text-center">
            {[
              { label: "DAYS", value: timeLeft.days },
              { label: "HOURS", value: timeLeft.hours },
              { label: "MINS", value: timeLeft.minutes },
              { label: "SECS", value: timeLeft.seconds }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className={cn(
                  "w-16 md:w-20 h-16 md:h-20 metal-card",
                  "flex items-center justify-center",
                  "before:content-[''] before:absolute before:inset-[1px]",
                  "before:bg-mechanical-dark before:rounded-md before:z-0"
                )}>
                  <div className="relative z-10">
                    <div className="text-2xl md:text-3xl font-orbitron text-mechanical-accent">
                      {String(item.value).padStart(2, '0')}
                    </div>
                    <div className="text-xs text-mechanical-gray">
                      {item.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const HeroSection: React.FC = () => {
  // Set your crush's birthday here
  const birthdayDate = new Date("2025-05-20"); // YYYY-MM-DD format
  
  return (
    <section className="relative min-h-[calc(100vh-6rem)] flex flex-col justify-center items-center text-center pt-8 pb-16 px-4 md:px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="gear-decoration top-1/4 -left-20">
          <Gear className="w-40 h-40 text-mechanical-accent animate-gear-spin" />
        </div>
        <div className="gear-decoration bottom-1/4 -right-24">
          <Gear className="w-56 h-56 text-mechanical-blue animate-gear-spin-reverse" />
        </div>
        <div className="absolute w-full h-full bg-blueprint opacity-10 z-0" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto animate-fade-in">
        <div className="flex items-center justify-center gap-4 mb-6">
          <Bike className="h-10 w-10 text-mechanical-accent" />
          <div className="h-px flex-1 bg-mechanical-accent/30"></div>
          <Wrench className="h-10 w-10 text-mechanical-blue" />
          <div className="h-px flex-1 bg-mechanical-blue/30"></div>
          <Bike className="h-10 w-10 text-mechanical-accent" />
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold bg-clip-text text-transparent bg-gradient-to-r from-mechanical-accent via-white to-mechanical-blue mb-6">
          Happy Birthday, Engineer!
        </h1>
        
        <p className="text-mechanical-silver text-lg md:text-xl max-w-2xl mx-auto mb-8">
          To the amazing girl who knows her way around motorbikes, skateboards, 
          and the intricate world of mechanical engineering.
        </p>
        
        <Countdown targetDate={birthdayDate} />
        
        <div className="mt-10 md:mt-16">
          <Button
            variant="default"
            size="lg"
            className="font-orbitron bg-gradient-to-r from-mechanical-accent to-mechanical-blue hover:from-mechanical-blue hover:to-mechanical-accent transition-all duration-500 text-white"
          >
            Celebrate With Me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
