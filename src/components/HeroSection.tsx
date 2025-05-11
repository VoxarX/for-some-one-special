
import React from 'react';
import { Bike, Wrench, Cog } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[calc(100vh-6rem)] flex flex-col justify-center items-center text-center pt-8 pb-16 px-4 md:px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="gear-decoration top-1/4 -left-20">
          <Cog className="w-40 h-40 text-purple-500 animate-gear-spin" />
        </div>
        <div className="gear-decoration bottom-1/4 -right-24">
          <Cog className="w-56 h-56 text-purple-400 animate-gear-spin-reverse" />
        </div>
        <div className="absolute w-full h-full bg-blueprint opacity-10 z-0" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto animate-fade-in">
        <div className="flex items-center justify-center gap-4 mb-6">
          <Bike className="h-10 w-10 text-purple-500" />
          <div className="h-px flex-1 bg-purple-500/30"></div>
          <Wrench className="h-10 w-10 text-purple-400" />
          <div className="h-px flex-1 bg-purple-400/30"></div>
          <Bike className="h-10 w-10 text-purple-500" />
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-white to-purple-400 mb-6">
          Happy Birthday, Engineer!
        </h1>
        
        <p className="text-mechanical-silver text-lg md:text-xl max-w-2xl mx-auto mb-8">
          To the amazing girl who knows her way around motorbikes, skateboards, 
          and the intricate world of mechanical engineering.
        </p>
        
        <div className="mt-8 md:mt-12">
          <div className="text-center">
            <h3 className="text-3xl font-orbitron text-purple-400 mb-4">TODAY IS YOUR DAY!</h3>
            <p className="text-mechanical-silver text-xl">Time to celebrate!</p>
          </div>
        </div>
        
        <div className="mt-10 md:mt-16 flex gap-4 justify-center">
          <Button
            variant="default"
            size="lg"
            className="font-orbitron bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 transition-all duration-500 text-white"
          >
            Celebrate With Me
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="font-orbitron border-purple-500 text-purple-300 hover:bg-purple-900/20"
            asChild
          >
            <Link to="/skate-parks">Secret Skate Spots</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
