
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
      imageUrl: "/lovable-uploads/603ee084-04f3-4224-8330-c420aae03e07.png",
      name: "Pavel Poppandov",
      role: "Ivan, Peter's Father",
      quote: "There's a story in this film that echoes something I've lived through, and that's why I felt I had to be part of it.",
      imdbLink: "https://www.imdb.com/name/nm0691057/?ref_=nv_sr_srsg_0_tt_0_nm_1_in_0_q_Pavel%2520Popandov"
    },
    {
      imageUrl: "/lovable-uploads/0c9eb4d7-e6e3-4766-97d4-37b48e4d1d29.png",
      name: "Maria Kavardjikova",
      role: "Stanka, Peter's Mother",
      quote: "What drew me in was the script and the chance to reunite on screen with Pavel Poppandov.",
      imdbLink: "https://www.imdb.com/name/nm0442626/?ref_=fn_al_nm_1"
    },
    {
      imageUrl: "/lovable-uploads/24ae05ef-9b26-41cf-9fdb-f5a440a94bf2.png",
      name: "Krastyu Lafazanov",
      role: "Father Stefan",
      quote: "I chose this role because this film is a testament to faith, hope, and love.",
      imdbLink: "https://www.imdb.com/name/nm0480754/?ref_=fn_al_nm_1"
    },
    {
      imageUrl: "/lovable-uploads/ca5b5ce9-5520-4b82-961d-df9733668ee1.png",
      name: "Hristo Garbov",
      role: "Old Peter",
      quote: "I wanted to experience something new - to step, even briefly, into the hearts of those who struggle to forgive themselves.",
      imdbLink: "https://www.imdb.com/name/nm0305009/?ref_=fn_al_nm_1"
    },
    {
      imageUrl: "/lovable-uploads/3dd976b9-1e17-4d87-98e7-21187060a113.png",
      name: "Iren Krivoshieva",
      role: "Dalia, Father Paul and Nikolina's Mother",
      quote: "I sought this role because I love God, and in that love, I find my freedom.",
      imdbLink: "https://www.imdb.com/name/nm0471781/?ref_=nv_sr_srsg_1_tt_0_nm_3_in_0_q_Iren%2520Krivu"
    },
    {
      imageUrl: "/lovable-uploads/8e727614-a3c6-4158-b896-5eefb6d3c778.png",
      name: "Nikolai Urumov",
      role: "Monk Jacob",
      quote: "Because my character carries a noble mission. And because I have faith that Nikolay Egerman understands both the heart of this story and the way to bring it to life!",
      imdbLink: "https://www.imdb.com/name/nm0882196/?ref_=fn_al_nm_1"
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
