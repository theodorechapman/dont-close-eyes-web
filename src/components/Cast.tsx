
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface CastMemberProps {
  imageUrl: string;
  name: string;
  role: string;
  quote: string;
}

const CastMember = ({ imageUrl, name, role, quote }: CastMemberProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
      <div className="relative w-full">
        <AspectRatio ratio={1}>
          <img 
            src={imageUrl} 
            alt={`${name} as ${role}`} 
            className="w-full h-full object-cover"
          />
        </AspectRatio>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-xl mb-1">{name}</h3>
        <p className="text-gray-600 italic mb-2">as {role}</p>
        <p className="text-sm text-gray-800 border-l-4 border-gray-300 pl-3 py-1">"{quote}"</p>
      </div>
    </div>
  );
};

const Cast = () => {
  // Placeholder data for the 3x3 grid
  const castMembers = [
    {
      imageUrl: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
      name: "Aleksandar Kanev",
      role: "Father Neofit",
      quote: "This role changed my perspective on faith and resilience."
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      name: "Maria Petrova",
      role: "Ana",
      quote: "Playing Ana was a journey of emotional discovery."
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
      name: "Dimitar Nikolov",
      role: "Young Boyan",
      quote: "I connected deeply with Boyan's innocence and pain."
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
      name: "Elena Stoyanova",
      role: "Mother Superior",
      quote: "The wisdom in this character's journey resonates with me."
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
      name: "Ivan Yordanov",
      role: "Elder Monk Teodosii",
      quote: "Portraying wisdom and humility was a spiritual experience."
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
      name: "Nikolai Petrov",
      role: "Dr. Stefan",
      quote: "Playing a character torn between science and faith challenged me."
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      name: "Sofia Ivanova",
      role: "Sister Margarita",
      quote: "Her strength in adversity inspired me throughout filming."
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      name: "Georgi Dimitrov",
      role: "Father Kiril",
      quote: "This role taught me about compassion and forgiveness."
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed",
      name: "Viktoria Todorova",
      role: "Young Elitsa",
      quote: "Portraying innocence was both challenging and rewarding."
    },
  ];

  return (
    <div className="py-16 container mx-auto px-8 max-w-6xl">
      <h2 className="text-3xl font-bold mb-10 text-black text-center uppercase" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>THE CAST</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {castMembers.map((member, index) => (
          <CastMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default Cast;
