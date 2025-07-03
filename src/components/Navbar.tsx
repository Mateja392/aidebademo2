
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full", isScrolled ? "bg-white shadow-sm" : "bg-black")} initial={{
      opacity: 1,
      y: 0
    }} animate={{
      opacity: 1,
      y: 0
    }}>
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <Logo />
            </Link>
          </div>
          
          {/* Contact button */}
          <div>
            <button 
              onClick={() => scrollToSection('contact')} 
              className={cn(
                "px-4 py-2 rounded-md transition-colors font-medium",
                isScrolled 
                  ? "bg-ai-red text-white hover:bg-ai-red-dark" 
                  : "bg-ai-red text-white hover:bg-ai-red-dark"
              )}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

    </motion.nav>
  );
};

export default Navbar;
