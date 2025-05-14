
import { ArrowDown } from "lucide-react";
import VideoPlayer from "./VideoPlayer";

interface HeroProps {
  title: string;
  videoId: string;
  thumbnailImage?: string;
}

const Hero = ({ videoId, thumbnailImage }: HeroProps) => {
  return (
    <div 
      className="min-h-[calc(100vh-50px)] w-full flex flex-col relative overflow-hidden"
      style={{
        backgroundImage: thumbnailImage ? `url(${thumbnailImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >      
      <div className="flex flex-col h-[calc(100vh-50px)] w-full">
        <div className="z-10 py-6 absolute w-full top-0">
          <h2 className="text-center font-bold text-2xl">
            ICXC NIKA and ITCHY RODENT FILMS
          </h2>
        </div>
        
        <div className="flex-1 flex items-end justify-start z-10 w-full relative">
          <div className="absolute bottom-24 left-12 z-20" style={{ transform: 'translateY(125px)' }}>
            {/* Replace text with image */}
            <img 
              src="/lovable-uploads/6cab4f73-e5c1-4705-8d06-ea31c221d604.png" 
              alt="Don't Close Your Eyes" 
              className="max-w-[80%] h-auto"
            />
          </div>
        </div>
        
        {/* Scroll down arrow */}
        <div className="absolute bottom-20 right-12 z-20 animate-bounce">
          <ArrowDown size={36} className="text-white" />
        </div>
      </div>
      
      <div className="white-bar w-full h-16 bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] absolute bottom-0"></div>
    </div>
  );
};

export default Hero;
