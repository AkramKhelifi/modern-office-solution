import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">Capital Bureautique</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-text-primary hover:text-secondary transition-colors">
              Nos Services
            </a>
            <a href="#why-us" className="text-text-primary hover:text-secondary transition-colors">
              Pourquoi Nous
            </a>
            <a href="#contact" className="text-text-primary hover:text-secondary transition-colors">
              Contact
            </a>
            <button className="btn-primary">Espace Client</button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#services"
                className="text-text-primary hover:text-secondary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Nos Services
              </a>
              <a
                href="#why-us"
                className="text-text-primary hover:text-secondary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pourquoi Nous
              </a>
              <a
                href="#contact"
                className="text-text-primary hover:text-secondary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <button className="btn-primary w-full">Espace Client</button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};