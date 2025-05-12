
interface LogLineProps {
  text: string;
}

const LogLine = ({ text }: LogLineProps) => {
  return (
    <div className="py-16 px-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-black text-center">LOGLINE</h2>
      <p className="text-xl text-black text-center font-medium italic leading-relaxed">{text}</p>
    </div>
  );
};

export default LogLine;
