
import Hero from "@/components/Hero";
import VideoPlayer from "@/components/VideoPlayer";
import LogLine from "@/components/LogLine";
import LaurelCarousel from "@/components/LaurelCarousel";
import AudienceReviews from "@/components/AudienceReviews";
import DirectorStatement from "@/components/DirectorStatement";
import Footer from "@/components/Footer";

const Index = () => {
  const laurels = [
    {
      imageUrl: "/lovable-uploads/d760ff68-e491-430e-8a8b-19a1ca4e3560.png",
      altText: "Winner Best Cinematography - International Christian Film and Music Festival 2025"
    },
    {
      imageUrl: "/lovable-uploads/8c89e2dc-269b-48a1-b9a8-5474ffd7c121.png",
      altText: "Best Foreign Language Film - London FFI 2025"
    },
    {
      imageUrl: "/lovable-uploads/cec3e381-98c9-4866-b338-6cf78caf6343.png",
      altText: "Best Foreign Film - 53rd Annual ICVM Crown Awards 2025"
    },
    {
      imageUrl: "/lovable-uploads/01b71563-8abb-4b3d-aa0c-f9179d05bbc8.png",
      altText: "Official Selection - Eurasian Creative Guild Film Festival 2025"
    },
    {
      imageUrl: "/lovable-uploads/f763a5e1-0f81-4d0b-987e-db2e4d0076de.png",
      altText: "Official Selection - Golden FEMI Film Festival 2025"
    },
    {
      imageUrl: "/lovable-uploads/83c1428e-c7e7-48de-8354-88155043be39.png",
      altText: "IMDb Rating 8.3/10 (223 votes)"
    }
  ];

  const audienceReviews = [
    { quote: "A film that heals both body and soul." },
    { quote: "An unforgettable experience - I had to force myself to breathe." },
    { quote: "Not just recommended - prescribed!" },
    { quote: "A world-class production with a cosmic message." },
    { quote: "The audience sat in stunned silence after the credits." },
    { quote: "A film that is felt, not just watched." },
    { quote: "One of the most powerful Bulgarian films ever made." },
    { quote: "A masterpiece that purifies the soul." },
    { quote: "The story will echo in my mind forever." },
    { quote: "A cinematic miracle born of love, truth, and faith." },
    { quote: "No special effects - just pure, soul-piercing cinema." },
    { quote: "Aleksandar Kanev's performance is simply divine." },
    { quote: "After decades, a true, meaningful Bulgarian film has arrived." },
    { quote: "I left the theater cleansed and speechless." },
    { quote: "A stunning work of art that captures every emotion." },
    { quote: "After watching, you realize material things don't matter." },
    { quote: "A powerful, emotional, life-changing experience." }
  ];

  const loglineText = "When a boy gets blamed for his sister's death, he escapes into the mountains and is sheltered by monks. Decades later, a modern-day priest's fate becomes unexpectedly intertwined.";

  const directorStatement = "Creating \"Don't Close Your Eyes\" has been a captivating journey for me, one that has deeply intertwined with my personal experiences and artistic sensibilities. The film is not just a story but a reflection of the shadows and hopes we harbor within us. I was inspired to tell this story by the encounter of my mother with breast cancer. It was this poignant memory that stirred me to explore the narrative through the lens of my camera, turning internal fears into a visual experience.\n\nAt its core, \"Don't Close Your Eyes\" seeks to examine the human condition in its rawest form, drawing attention to the vulnerabilities that define us. My sensibilities as an artist have always leaned towards dissecting the intricate nuances of human emotions. This film allowed me to delve into the facets of fear - how it paralyzes us, and yet, how it can serve as a powerful catalyst for growth when confronted. I believe that by facing our fears, we open the door to profound transformation, and this is a theme I sought to bring to life through vivid cinematography and evocative storytelling.\n\nThe experience of making this film has been one of profound introspection and collaboration. Each scene, dialogue, and character arc was crafted to resonate with authenticity, something I hold dear as a director. Collaborating with an incredibly talented cast and crew allowed me to push the creative boundaries and bring a vision alive that is both intimate and universal.\n\"Don't Close Your Eyes\" is a testament to the strength of storytelling and the shared human experience. My hope is that it will encourage audiences to reflect on their own fears and emerge stronger, acknowledging the light that can emerge from the shadows when we dare to keep our eyes open.";

  return (
    <main className="text-white">
      <div className="relative">
        <Hero 
          title="DON'T CLOSE YOUR EYES" 
          videoId="CphPCxEUZHM"
          thumbnailImage="/lovable-uploads/77f38679-742f-4afd-b471-d00e35cebd3b.png"
        />
        <VideoPlayer
          videoId="CphPCxEUZHM"
          thumbnailImage="/lovable-uploads/77f38679-742f-4afd-b471-d00e35cebd3b.png"
        />
      </div>
      
      <div className="white-section text-black">
        <LogLine text={loglineText} />
        <LaurelCarousel laurels={laurels} />
        <AudienceReviews reviews={audienceReviews} />
        <DirectorStatement name="Nikolay Egermann" statement={directorStatement} />
      </div>
      
      <Footer />
    </main>
  );
};

export default Index;
