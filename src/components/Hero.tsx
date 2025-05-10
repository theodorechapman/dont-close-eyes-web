
import VideoPlayer from "./VideoPlayer";

interface HeroProps {
  title: string;
  videoId: string;
  backgroundImage?: string;
  thumbnailImage?: string;
}

const Hero = ({ title, videoId, backgroundImage, thumbnailImage }: HeroProps) => {
  return (
    <div 
      className="min-h-screen w-full flex flex-col justify-between relative overflow-hidden"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 z-0"></div>
      
      <div className="z-10 pt-24 pb-4">
        <h1 className="hero-text text-center md:text-left px-8 md:px-16">
          {title}
        </h1>
      </div>
      
      <div className="flex-1 flex items-center justify-center z-10 w-full">
        <VideoPlayer 
          videoId={videoId}
          thumbnailImage={thumbnailImage} 
        />
      </div>
    </div>
  );
};

export default Hero;
