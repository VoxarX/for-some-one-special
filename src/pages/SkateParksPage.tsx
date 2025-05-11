
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Briefcase, Wrench, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface SkateSpotProps {
  title: string;
  description: string;
  location: string;
  imageUrl: string;
  difficulty: "Easy" | "Medium" | "Hard";
  isUrbanExplore?: boolean;
}

const SkateSpot: React.FC<SkateSpotProps> = ({ 
  title, description, location, imageUrl, difficulty, isUrbanExplore 
}) => {
  const difficultyColor = 
    difficulty === "Easy" ? "bg-green-500" : 
    difficulty === "Medium" ? "bg-yellow-500" : 
    "bg-red-500";

  return (
    <div className="metal-card overflow-hidden">
      <div 
        className="h-48 md:h-64 bg-cover bg-center relative" 
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute top-3 right-3 flex gap-2">
          <span className={`px-2 py-1 rounded text-xs font-bold text-white ${difficultyColor}`}>
            {difficulty}
          </span>
          {isUrbanExplore && (
            <span className="px-2 py-1 rounded text-xs font-bold text-white bg-purple-600">
              Urban Explore
            </span>
          )}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-orbitron text-white mb-2">{title}</h3>
        <p className="text-mechanical-silver mb-4">{description}</p>
        <div className="flex items-center text-sm text-mechanical-gray">
          <Wrench className="w-4 h-4 mr-1" />
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
};

const SkateParksPage: React.FC = () => {
  const skateSpots = [
    {
      title: "The Underground Pipe",
      description: "An abandoned water facility with perfect pipes for grinding. Only the locals know about this gem.",
      location: "Behind the old factory, North District",
      imageUrl: "https://images.unsplash.com/photo-1572776685600-aca8c3a7e43c?auto=format&fit=crop&q=80&w=1469&ixlib=rb-4.0.3",
      difficulty: "Medium" as const
    },
    {
      title: "School After Hours",
      description: "The high school has some of the best rails and stairs in town, and security rarely checks after 8 PM.",
      location: "Central High School",
      imageUrl: "https://images.unsplash.com/photo-1621544346589-c7b64a096acf?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3",
      difficulty: "Easy" as const
    },
    {
      title: "The Concrete Wave",
      description: "A hidden bowl in the industrial area that looks like it was made specifically for skating, but it's actually an architectural accident.",
      location: "Behind the warehouse district",
      imageUrl: "https://images.unsplash.com/photo-1522163723043-478ef79a5bb4?auto=format&fit=crop&q=80&w=1413&ixlib=rb-4.0.3",
      difficulty: "Hard" as const
    },
    {
      title: "Abandoned Power Station",
      description: "A forgotten power station with multiple levels, rails, and unique architecture. Perfect for urban exploration and skating.",
      location: "Outside city limits, east side",
      imageUrl: "https://images.unsplash.com/photo-1601225998965-d26438c7a00b?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3",
      difficulty: "Hard" as const,
      isUrbanExplore: true
    },
    {
      title: "The Forgotten Mall",
      description: "An abandoned shopping mall with smooth floors and plenty of features. Bring flashlights!",
      location: "Downtown, Old Commerce District",
      imageUrl: "https://images.unsplash.com/photo-1615746370440-1c24afb21fac?auto=format&fit=crop&q=80&w=1619&ixlib=rb-4.0.3",
      difficulty: "Medium" as const,
      isUrbanExplore: true
    },
    {
      title: "Canal Edges",
      description: "The edges of the canal have perfect ledges for grinding, but watch out for security during weekdays.",
      location: "River District",
      imageUrl: "https://images.unsplash.com/photo-1520454233024-41a43b4d37c5?auto=format&fit=crop&q=80&w=1473&ixlib=rb-4.0.3",
      difficulty: "Medium" as const
    }
  ];

  return (
    <div className="min-h-screen bg-mechanical-dark text-foreground overflow-hidden">
      <Header />
      
      <div className="relative bg-mechanical-dark bg-blueprint py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="ghost" asChild>
              <Link to="/" className="flex items-center text-purple-400 hover:text-purple-300">
                <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                Back Home
              </Link>
            </Button>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4">
            <span className="text-purple-500">Secret</span> Skate Spots
          </h1>
          <p className="text-mechanical-silver max-w-2xl mb-12">
            For your eyes only: the best hidden skate locations and urban exploration areas in town. 
            These spots are off the radar and perfect for someone with your skills.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skateSpots.map((spot, index) => (
              <SkateSpot
                key={index}
                title={spot.title}
                description={spot.description}
                location={spot.location}
                imageUrl={spot.imageUrl}
                difficulty={spot.difficulty}
                isUrbanExplore={spot.isUrbanExplore}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-block metal-card p-6 bg-mechanical-dark/60 max-w-xl">
              <Briefcase className="w-8 h-8 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-orbitron text-white mb-2">Safety First</h3>
              <p className="text-mechanical-silver">
                These spots are awesome, but always skate with a friend and bring safety gear.
                Some locations may require permission or could be monitored. Always respect the property!
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SkateParksPage;
