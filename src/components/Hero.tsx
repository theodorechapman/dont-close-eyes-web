
import VideoPlayer from "./VideoPlayer";

interface HeroProps {
  title: string;
  videoId: string;
  thumbnailImage?: string;
}

const Hero = ({ title, videoId, thumbnailImage }: HeroProps) => {
  return (
    <div 
      className="min-h-screen w-full flex flex-col relative overflow-hidden"
      style={{
        backgroundImage: thumbnailImage ? `url(${thumbnailImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >      
      <div className="flex flex-col h-screen w-full">
        <div className="z-10 py-6 absolute w-full top-0">
          <h2 className="text-center font-bold text-2xl tracking-wide">
            ICXC NIKA / ITCHY RODENT FILMS
          </h2>
        </div>
        
        <div className="flex-1 flex items-end justify-start z-10 w-full relative">
          <div className="absolute bottom-24 left-12 z-20">
            <h1 className="hero-text text-left">
              {title}
            </h1>
          </div>
        </div>
      </div>
      
      <div className="white-bar w-full h-16 bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] absolute bottom-0"></div>
    </div>
  );
};

export default Hero;
