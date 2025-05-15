
import { ArrowDown } from "lucide-react";
import VideoPlayer from "./VideoPlayer";
import { useIsMobile } from "@/hooks/use-mobile";

interface HeroProps {
  title: string;
  videoId: string;
  thumbnailImage?: string;
}

const Hero = ({ videoId, thumbnailImage }: HeroProps) => {
  const isMobile = useIsMobile();
  
  const scrollToContent = () => {
    // Scroll down by the viewport height
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };
  
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
          <h2 className="text-center">
            <a 
              href="https://itchyrodentfilms.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-bold text-2xl hover:text-gray-300 transition-colors"
            >
              ICXC NIKA and ITCHY RODENT FILMS
            </a>
          </h2>
        </div>
        
        <div className="flex-1 flex items-end justify-start z-10 w-full relative">
          <div 
            className="absolute bottom-24 z-20"
            style={{ 
              transform: isMobile ? 'translateY(75px)' : 'translateY(125px)',
              left: isMobile ? '5%' : '3rem', // Changed from center to left-justified
              marginLeft: '0', // Removed center positioning
            }}
          >
            {/* Title image - reduced to 66% of original size */}
            <img 
              src="/lovable-uploads/6cab4f73-e5c1-4705-8d06-ea31c221d604.png" 
              alt="Don't Close Your Eyes" 
              className={`${isMobile ? 'max-w-[63%]' : 'max-w-[53%]'} h-auto`} // Removed mx-auto
              style={{ width: '66%' }}
            />
          </div>
        </div>
        
        {/* Scroll down arrow button - positioned lower, closer to the edge of the image */}
        <button 
          onClick={scrollToContent}
          className="absolute bottom-16 z-30 animate-bounce bg-transparent border-none cursor-pointer p-2 rounded-full hover:bg-black/20 transition-colors" // Changed bottom positioning
          style={{ right: isMobile ? '37px' : '48px' }}
          aria-label="Scroll down"
        >
          <ArrowDown size={36} className="text-white" />
        </button>
      </div>
      
      {/* Removed the white bar */}
    </div>
  );
};

export default Hero;
