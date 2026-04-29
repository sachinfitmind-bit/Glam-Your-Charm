import { ShoppingBag, Search, User, Menu, X, Instagram, Facebook, Twitter, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-brand-light/90 backdrop-blur-md border-b border-brand-dark/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-brand-dark hover:text-brand-gold transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center flex-1 md:flex-none md:justify-start">
            <a href="/" className="font-serif text-2xl md:text-3xl font-semibold tracking-wide text-brand-dark">
              GlamYourCharm<span className="text-brand-gold">.</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {["Home", "Earrings", "Bracelets", "Rings", "Pendants", "Anti-Tarnish"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm uppercase tracking-wider text-brand-dark/80 hover:text-brand-gold transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <button className="text-brand-dark hover:text-brand-gold transition-colors">
              <Search size={20} />
            </button>
            <button className="text-brand-dark hover:text-brand-gold transition-colors hidden sm:block">
              <User size={20} />
            </button>
            <button className="text-brand-dark hover:text-brand-gold transition-colors relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand-dark text-[10px] text-white">
                0
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-brand-light border-b border-brand-dark/10 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {["Home", "Earrings", "Bracelets", "Rings", "Pendants", "Anti-Tarnish"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-3 py-3 text-base font-medium text-brand-dark hover:text-brand-gold hover:bg-brand-dark/5 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
