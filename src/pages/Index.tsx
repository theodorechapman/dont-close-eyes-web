
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const Index = () => {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero 
        title="DON'T CLOSE YOUR EYES" 
        videoId="CphPCxEUZHM"
        thumbnailImage="public/lovable-uploads/3138acd2-6cb2-48a4-a3ed-f0f15a0251a7.png"
      />
      <div className="white-section"></div>
    </main>
  );
};

export default Index;
