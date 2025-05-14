
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";

interface CastMemberProps {
  imageUrl: string;
  name: string;
  role: string;
  quote: string;
  imdbLink?: string;
}

const CastMember = ({ imageUrl, name, role, quote, imdbLink }: CastMemberProps) => {
  const content = (
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

  if (imdbLink) {
    return (
      <a href={imdbLink} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
};

const Cast = () => {
  // Updated data for the 3x3 grid
  const castMembers = [
    {
      imageUrl: "/lovable-uploads/00949b64-4b36-430d-859e-37c4551ab1ca.png",
      name: "Alexander Kanev",
      role: "Father Paul",
      quote: "I took on this role because it speaks to something personal, because it has meaning, and because I believe it gives me something worth saying.",
      imdbLink: "https://www.imdb.com/name/nm4802566/?ref_=fn_al_nm_5"
    },
    {
      imageUrl: "/lovable-uploads/8d305fee-c358-4501-a52f-1f2cd575a048.png",
      name: "Yani Malinov (in his debut role)",
      role: "Young Peter",
      quote: "The director chose me and the experience was very interesting.",
      imdbLink: "https://www.imdb.com/name/nm16336095/"
    },
    {
      imageUrl: "/lovable-uploads/949d40a2-030f-46be-ad58-dc12ed18d9ca.png",
      name: "Irena Milyankova",
      role: "Nikolina, Father Paul's Sister",
      quote: "I accepted without a moment of doubt. I believe this role was sent to me by God. It was a calling, and I gave myself to it completely in bringing this character to life.",
      imdbLink: "https://www.imdb.com/name/nm1930377/?ref_=fn_al_nm_1"
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
