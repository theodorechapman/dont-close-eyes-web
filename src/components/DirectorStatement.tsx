
interface DirectorStatementProps {
  name: string;
  statement: string;
}

const DirectorStatement = ({ name, statement }: DirectorStatementProps) => {
  // Split statement into paragraphs
  const paragraphs = statement.split('\n\n');
  
  return (
    <div className="py-16 px-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-black text-center">DIRECTOR'S STATEMENT</h2>
      <h3 className="text-xl font-bold mb-4 text-black text-center">{name}</h3>
      <div className="text-black space-y-4">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="leading-relaxed text-lg">{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default DirectorStatement;
