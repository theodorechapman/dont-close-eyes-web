
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-8">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-2xl font-bold mb-6">FOLLOW US</h3>
          <div className="flex space-x-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
              <Instagram size={32} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
              <Facebook size={32} />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
              <Twitter size={32} />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
              <span className="flex items-center justify-center h-8 w-8">
                <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path>
                </svg>
              </span>
            </a>
          </div>
          <div className="mt-8">
            <p className="text-sm text-gray-400">© 2025 Don't Close Your Eyes. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
