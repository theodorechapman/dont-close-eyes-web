
import { Separator } from "@/components/ui/separator";

interface LogLineProps {
  text: string;
}

const LogLine = ({ text }: LogLineProps) => {
  // The new formatted logline text directly in the component
  const formattedText = (
    <>
      <h2 className="text-3xl font-bold mb-6 text-black text-center">Don't Close Your Eyes</h2>
      <p className="text-xl text-black font-medium leading-relaxed text-center mb-3">Don't close your eyes to foreign films with English subtitles.</p>
      <p className="text-xl text-black font-medium leading-relaxed text-center mb-3">Don't close your eyes to hope in times of darkness.</p>
      <p className="text-xl text-black font-medium leading-relaxed text-center mb-3">All are welcome — all faiths, all walks of life.</p>
      <p className="text-xl text-black font-medium leading-relaxed text-center mb-3">Don't close your eyes to the small miracles hidden in plain sight.</p>
      <p className="text-xl text-black font-medium leading-relaxed text-center mb-6">Smile. Pay it forward. Keep your heart open.</p>
      
      <Separator className="my-8 bg-gray-300" />
      
      <p className="text-xl text-black font-medium leading-relaxed text-center mb-4">
        When a boy gets blamed for his sister's death, he escapes into the mountains and is sheltered by monks. Decades later, a modern-day priest's fate becomes unexpectedly intertwined.
      </p>
      <p className="text-xl text-black font-medium leading-relaxed text-center">
        Set against the breathtaking backdrop of Bulgaria's landscapes, churches, and monasteries, Don't Close Your Eyes is coming to a theater near you.
      </p>
    </>
  );
  
  return (
    <div className="py-10 container mx-auto px-8 max-w-6xl">
      {formattedText}
    </div>
  );
};

export default LogLine;
