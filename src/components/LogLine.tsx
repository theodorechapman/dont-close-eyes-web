
interface LogLineProps {
  text: string;
}

const LogLine = ({ text }: LogLineProps) => {
  return (
    <div className="py-10 container mx-auto px-8 max-w-6xl">
      <p className="text-xl text-black font-medium italic leading-relaxed text-left">{text}</p>
    </div>
  );
};

export default LogLine;
