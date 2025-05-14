
import { Separator } from "@/components/ui/separator";

interface LogLineProps {
  text: string;
}

const LogLine = ({ text }: LogLineProps) => {
  // The new formatted logline text directly in the component
  const formattedText = (
    <>
      <p className="text-xl text-black font-medium leading-relaxed text-left mb-3">Don't close your eyes to foreign films with <strong>English subtitles</strong>.</p>
      <p className="text-xl text-black font-medium leading-relaxed text-left mb-3">Don't close your eyes to <strong>hope</strong> in times of darkness.</p>
      <p className="text-xl text-black font-medium leading-relaxed text-left mb-3">All are welcome — all faiths, all walks of life.</p>
      <p className="text-xl text-black font-medium leading-relaxed text-left mb-3">Don't close your eyes to the <strong>small miracles</strong> hidden in plain sight.</p>
      <p className="text-xl text-black font-medium leading-relaxed text-left mb-6">Smile. Pay it forward. Keep your heart open.</p>
      
      <Separator className="my-8 bg-gray-300" />
      
      <p className="text-xl text-black font-medium leading-relaxed text-left mb-4">
        When a boy gets blamed for his sister's death, he escapes into the mountains and is sheltered by monks. Decades later, a modern-day priest's fate becomes unexpectedly intertwined.
      </p>
      <p className="text-xl text-black font-medium leading-relaxed text-left">
        Set against the breathtaking backdrop of Bulgaria's landscapes, churches, and monasteries, <strong>Don't Close Your Eyes</strong> is coming to a theater near you.
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
