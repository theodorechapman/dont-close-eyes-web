
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
      className="min-h-[100vh] w-full flex flex-col relative overflow-hidden"
      style={{
        backgroundImage: thumbnailImage ? `url(${thumbnailImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >      
      <div className={`flex flex-col w-full ${isMobile ? 'h-[calc(100vh-75px)]' : 'h-[100vh]'}`}>
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
              transform: isMobile ? 'translateY(95px)' : 'translateY(140px)',
              left: isMobile ? '5%' : '2rem',
              marginLeft: '0',
            }}
          >
            {/* Title image - mobile size increased by 20% more */}
            <img 
              src="/lovable-uploads/6cab4f73-e5c1-4705-8d06-ea31c221d604.png" 
              alt="Don't Close Your Eyes" 
              className={`${isMobile ? 'max-w-[78%]' : 'max-w-[53%]'} h-auto`}
              style={{ width: isMobile ? '118.8%' : '66%' }}
            />
          </div>
        </div>
        
        {/* Scroll down arrow button - moved 75px upwards on mobile */}
        <button 
          onClick={scrollToContent}
          className="absolute z-30 animate-bounce bg-transparent border-none cursor-pointer p-2 rounded-full hover:bg-black/20 transition-colors"
          style={{ 
            right: isMobile ? '37px' : '48px',
            bottom: isMobile ? '83px' : '8px' 
          }}
          aria-label="Scroll down"
        >
          <ArrowDown size={36} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
