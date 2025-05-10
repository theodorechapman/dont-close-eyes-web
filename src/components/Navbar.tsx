
import { useState } from "react";
import { Menu, Search, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mr-2 text-white/80 hover:text-white transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <span className="text-white/80 text-sm uppercase tracking-wider">Menu</span>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <h1 className="font-light text-2xl tracking-wide">A24</h1>
        </div>

        <div>
          <button className="text-white/80 hover:text-white transition-colors" aria-label="Search">
            <Search size={24} />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black pt-20 px-6 z-40">
          <div className="grid gap-4 text-lg">
            <a href="#" className="text-white/80 hover:text-white transition-colors p-2">Home</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors p-2">About</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors p-2">Cast</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors p-2">Reviews</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors p-2">Gallery</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
