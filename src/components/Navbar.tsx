
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-5">
      <div className="flex justify-center items-center">
        <div className="text-center">
          <a 
            href="https://itchyrodentfilms.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-bold text-2xl tracking-wide hover:text-gray-300 transition-colors"
          >
            ICXC NIKA and ITCHY RODENT FILMS
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
