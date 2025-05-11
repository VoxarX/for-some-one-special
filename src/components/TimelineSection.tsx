
import React from 'react';
import { Bike, Briefcase, Wrench, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  title: string;
  date: string;
  description: string;
  icon: React.ReactNode;
  isLeft?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  title, date, description, icon, isLeft = false
}) => {
  return (
    <div className={cn(
      "flex md:items-center gap-4 mb-12",
      isLeft ? "md:flex-row-reverse" : "md:flex-row",
      "flex-col items-start"
    )}>
      <div className={cn(
        "metal-card p-6 md:w-[calc(50%-2rem)] w-full",
        "transform transition-transform duration-300 hover:-translate-y-1"
      )}>
        <div className="flex items-center gap-2 mb-2">
          {/* Icon */}
          <div className="p-2 rounded-full bg-mechanical-accent/10 text-mechanical-accent">
            {icon}
          </div>
          
          {/* Date */}
          <span className="text-mechanical-silver text-sm">{date}</span>
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-orbitron text-white mb-2">{title}</h3>
        
        {/* Description */}
        <p className="text-mechanical-gray">{description}</p>
      </div>
      
      {/* Center line - only visible on md and above */}
      <div className="hidden md:flex flex-col items-center justify-center">
        <div className="w-4 h-4 rounded-full bg-mechanical-accent z-10" />
        <div className="w-0.5 h-24 bg-mechanical-accent/30 -mt-1 -mb-1" />
      </div>
      
      {/* Empty space for the other side */}
      <div className="hidden md:block md:w-[calc(50%-2rem)]" />
    </div>
  );
};

const TimelineSection: React.FC = () => {
  const timelineItems = [
    {
      title: "First Time I Saw You",
      date: "A While Back",
      description: "I was immediately impressed by your confidence and the way you talked about your passion for mechanical engineering.",
      icon: <Wrench className="w-5 h-5" />
    },
    {
      title: "That Day at the Skate Park",
      date: "Remember When",
      description: "Watching you nail those tricks on your skateboard was incredible. Your determination is something I really admire.",
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      title: "The Motorbike Discussion",
      date: "Not Long Ago",
      description: "When you explained to me how motorcycle engines work, I was fascinated by your knowledge and enthusiasm.",
      icon: <Bike className="w-5 h-5" />
    },
    {
      title: "Today - Your Birthday!",
      date: "Right Now",
      description: "Celebrating you and all the amazing things about you. Here's to another year of being incredibly awesome!",
      icon: <Settings className="w-5 h-5" />
    }
  ];

  return (
    <section className="blueprint-section section-padding relative" id="timeline">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-heading">Our Timeline</h2>
          <p className="text-mechanical-silver max-w-2xl mx-auto">
            Some memorable moments that make me appreciate how amazing you are.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline content */}
          <div className="relative z-10">
            {timelineItems.map((item, index) => (
              <TimelineItem 
                key={index}
                title={item.title}
                date={item.date}
                description={item.description}
                icon={item.icon}
                isLeft={index % 2 === 1}
              />
            ))}
          </div>
          
          {/* Vertical line - only visible on md and above */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-mechanical-accent/30 transform -translate-x-1/2 z-0" />
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
