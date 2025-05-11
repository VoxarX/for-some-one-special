
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
      title: "Wythenshawe Park Pump Track",
      description: "A smooth, looping pump track perfect for building momentum and flow. Ideal for skaters and BMX riders of all levels.",
      location: "Wythenshawe Park, M23 0AB",
      imageUrl: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrMPAxS7ZbNljcZVwxaSYdAclztCev653bsfluYW4LTYSnOhPbHjH8s5RPCcEO9jmhWQJbjLBO9VGKmCbGj95dCrMCBWEbUAZIgdncXNHLKF8JrWo-r6LVGuRYo2AnO4YDfkTlWWw=s680-w680-h510",
      difficulty: "Easy" as const
    },
    {
      title: "Projekts MCR Skatepark",
      description: "A large, community-focused skatepark offering various ramps, rails, and ledges. Suitable for all skill levels.",
      location: "41 Baring Street, Manchester, M1 2PY",
      imageUrl: "https://lh3.googleusercontent.com/p/AF1QipNt80G7vR6W0mRKzZS337kDZ3DmwO3lgYoRAcA=s680-w680-h510",
      difficulty: "Medium" as const
    },
    {
      title: "Wythenshawe Forum Roller Disco",
      description: "An indoor roller skating venue hosting regular disco sessions. Great for practicing in a fun, music-filled environment.",
      location: "Forum Centre, Simonsway, Wythenshawe, M22 5RX",
      imageUrl: "https://static.wixstatic.com/media/757605_b9fd8f6ec9f8460eaa442c5325eea5b0~mv2.jpg/v1/fill/w_398,h_398,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/757605_b9fd8f6ec9f8460eaa442c5325eea5b0~mv2.jpg",
      difficulty: "Easy" as const
    },
    {
      title: "Alexandra Park Skatepark",
      description: "A concrete skatepark featuring open bowls, a mini ramp, and a plaza section with stair sets and ledges.",
      location: "Alexandra Park, Manchester, M16 7JL",
      imageUrl: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrFqwcacfgHumFuYNSKrsNWVy_LHAIpcJxxS9zeAF6QOnuzECdxw17X_qLeB1BpWRRiePDpYO27WByb3sz-JsBv4WoUDDHfvL4Li4N3bGLlHWYfiYSJqwNlA61P0zMu2fuASRFg=s680-w680-h510",
      difficulty: "Medium" as const
    },

    {
      title: "Abandoned Tatton Arms Pub",
      description: "A derelict pub offering unique architectural features. Caution advised due to structural instability.",
      location: "Northenden, Manchester, M22",
      imageUrl: "https://i.ytimg.com/vi/vqZ8AGbioeU/maxresdefault.jpg",
      difficulty: "Hard" as const,
      isUrbanExplore: true
    },
    {
      title: "Barclays Data Centre",
      description: "An abandoned data centre with multiple levels and industrial aesthetics. Entry may be restricted.",
      location: "Wythenshawe, Manchester, M23",
      imageUrl: "https://i.ytimg.com/vi/vCYgbdNWHrg/maxresdefault.jpg",
      difficulty: "Hard" as const,
      isUrbanExplore: true
    },

    {
      title: "Peel Hall Moat",
      description: "The remnants of an Elizabethan moated manor house. The area is now a park with recreational facilities.",
      location: "Peel Hall, Manchester, M22",
      imageUrl: "https://archaeologytea.wordpress.com/wp-content/uploads/2020/01/20200118_095921.jpg?w=394&h=526",
      difficulty: "Easy" as const,
      isUrbanExplore: true
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
            <span className="text-purple-500">Skate </span>Spots and more!
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
