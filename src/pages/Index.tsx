
import Hero from "@/components/Hero";
import VideoPlayer from "@/components/VideoPlayer";
import LogLine from "@/components/LogLine";
import LaurelCarousel from "@/components/LaurelCarousel";
import DirectorStatement from "@/components/DirectorStatement";

const Index = () => {
  const laurels = [
    {
      imageUrl: "public/lovable-uploads/88bd40db-cd38-4cfe-acbd-658063fffb51.png",
      altText: "Winner Best Cinematography - International Christian Film and Music Festival 2025"
    },
    {
      imageUrl: "public/lovable-uploads/425f6457-575a-4082-8852-c9114e96d14f.png",
      altText: "Best Foreign Language Film - London FFI 2025"
    },
    {
      imageUrl: "public/lovable-uploads/64419dfb-d482-4eb0-badb-c34fa64f0d2b.png",
      altText: "Best Foreign Film - 53rd Annual ICVM Crown Awards 2025"
    },
    {
      imageUrl: "public/lovable-uploads/564f261f-1e40-4e63-9c15-74ca67ff4373.png",
      altText: "Official Selection - Eurasian Creative Guild Film Festival 2025"
    },
    {
      imageUrl: "public/lovable-uploads/f8d8d9b3-7bf1-42d2-a71e-189bc0477ba2.png",
      altText: "Official Selection - Golden FEMI Film Festival 2025"
    }
  ];

  const loglineText = "When a boy gets blamed for his sister's death, he escapes into the mountains and is sheltered by monks. Decades later, a modern-day priest's fate becomes unexpectedly intertwined.";

  const directorStatement = "Creating \"Don't Close Your Eyes\" has been a captivating journey for me, one that has deeply intertwined with my personal experiences and artistic sensibilities. The film is not just a story but a reflection of the shadows and hopes we harbor within us. I was inspired to tell this story by the encounter of my mother with breast cancer. It was this poignant memory that stirred me to explore the narrative through the lens of my camera, turning internal fears into a visual experience.\n\nAt its core, \"Don't Close Your Eyes\" seeks to examine the human condition in its rawest form, drawing attention to the vulnerabilities that define us. My sensibilities as an artist have always leaned towards dissecting the intricate nuances of human emotions. This film allowed me to delve into the facets of fear - how it paralyzes us, and yet, how it can serve as a powerful catalyst for growth when confronted. I believe that by facing our fears, we open the door to profound transformation, and this is a theme I sought to bring to life through vivid cinematography and evocative storytelling.\n\nThe experience of making this film has been one of profound introspection and collaboration. Each scene, dialogue, and character arc was crafted to resonate with authenticity, something I hold dear as a director. Collaborating with an incredibly talented cast and crew allowed me to push the creative boundaries and bring a vision alive that is both intimate and universal.\n\"Don't Close Your Eyes\" is a testament to the strength of storytelling and the shared human experience. My hope is that it will encourage audiences to reflect on their own fears and emerge stronger, acknowledging the light that can emerge from the shadows when we dare to keep our eyes open.";

  return (
    <main className="text-white">
      <div className="relative">
        <Hero 
          title="DON'T CLOSE YOUR EYES" 
          videoId="CphPCxEUZHM"
          thumbnailImage="public/lovable-uploads/0025e419-60ac-4661-8e93-e5be221387ce.png"
        />
        <VideoPlayer
          videoId="CphPCxEUZHM"
          thumbnailImage="public/lovable-uploads/0025e419-60ac-4661-8e93-e5be221387ce.png"
        />
      </div>
      
      <div className="white-section text-black">
        <LogLine text={loglineText} />
        <LaurelCarousel laurels={laurels} />
        <DirectorStatement name="Nikolay Egermann" statement={directorStatement} />
      </div>
    </main>
  );
};

export default Index;
