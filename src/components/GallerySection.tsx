
import React, { useState } from 'react';
import { Bike, Briefcase, Wrench, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface GalleryItemProps {
  title: string;
  description: string;
  imageUrl: string;
  icon: React.ReactNode;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ title, description, imageUrl, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        className="metal-card overflow-hidden group cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div 
          className="h-48 bg-cover bg-center relative overflow-hidden" 
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="absolute inset-0 bg-mechanical-dark/40 group-hover:bg-mechanical-dark/20 transition-all duration-300" />
          
          {/* Icon overlay */}
          <div className="absolute top-3 right-3 p-2 bg-mechanical-dark/70 rounded-full">
            {icon}
          </div>
          
          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button variant="outline" className="bg-mechanical-dark/70 border-purple-500 text-white">
              View Details
            </Button>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="font-orbitron text-white mb-1">{title}</h3>
          <p className="text-mechanical-gray text-sm line-clamp-2">{description}</p>
        </div>
      </div>

      {/* Lightbox dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="metal-card max-w-3xl bg-mechanical-dark border-purple-500/20 p-0">
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 rounded-full bg-mechanical-dark/70 hover:bg-mechanical-dark/90 text-white"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
            <div className="w-full h-[300px] sm:h-[400px] bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }} />
          </div>
          <div className="p-6">
            <div className="flex items-center gap-2 mb-2">
              {icon}
              <h3 className="font-orbitron text-lg text-white">{title}</h3>
            </div>
            <p className="text-mechanical-gray">{description}</p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

const GallerySection: React.FC = () => {
  // Show only first 3 gallery items
  const galleryItems = [
    {
      title: "Motorcycle Engineering",
      description: "The art and science of motorbike mechanics — combining precision engineering with the thrill of the ride.",
      imageUrl: "https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      icon: <Bike className="w-5 h-5 text-purple-500" />
    },
    {
      title: "Skateboarding Freedom",
      description: "The perfect balance of technical skill and personal expression — just like your approach to engineering.",
      imageUrl: "https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      icon: <Briefcase className="w-5 h-5 text-purple-400" />
    },
    {
      title: "Precision Tools",
      description: "The tools of the trade for someone who knows how to build, fix, and engineer the world around them.",
      imageUrl: "https://images.unsplash.com/photo-1581166397057-235af2b3c6dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      icon: <Wrench className="w-5 h-5 text-purple-500" />
    }
  ];

  return (
    <section className="section-padding" id="gallery">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-heading after:bg-purple-500">Passion Gallery</h2>
          <p className="text-mechanical-silver max-w-2xl mx-auto">
            A collection celebrating the things that make you uniquely amazing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <GalleryItem
              key={index}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
