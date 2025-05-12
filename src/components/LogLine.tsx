
interface LogLineProps {
  text: string;
}

const LogLine = ({ text }: LogLineProps) => {
  return (
    <div className="py-16 px-8 max-w-4xl mx-auto">
      <p className="text-xl text-black font-medium italic leading-relaxed text-left">{text}</p>
    </div>
  );
};

export default LogLine;
