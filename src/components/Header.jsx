import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { logo } from '../assets/index.js';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Product', path: '/products' },
    { name: 'Contact', path: '/contact' }
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white shadow-sm'
          }`}
      >
        <div className="w-full px-4 md:px-6 lg:px-8 py-1">
          <div className="flex items-center justify-between h-20">

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 md:gap-4"
            >
              <NavLink to="/" onClick={closeMenu}>
                <img
                  src={logo}
                  alt="NS INC Exports"
                  draggable="false"
                  className={`w-16 h-16 object-contain transition-all duration-300 ${scrolled ? 'w-14 h-14 md:w-18 md:h-18' : 'w-16 h-16 md:w-20 md:h-20'
                    }`}
                />
              </NavLink>
            </motion.div>

            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:flex items-center space-x-4"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `px-5 py-2.5 text-base font-bold rounded-full transition-all duration-200 ${isActive
                        ? 'bg-orange-600 text-white shadow-md'
                        : 'text-gray-800 hover:text-orange-600 hover:bg-orange-50'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </motion.div>
              ))}
            </motion.nav>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-900 hover:text-orange-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden bg-white shadow-lg border-t"
            >
              <div className="px-5 py-4">
                <nav className="space-y-2">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.path}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 ${isActive
                          ? 'bg-orange-600 text-white shadow-md'
                          : 'bg-gray-50 text-gray-800 hover:bg-orange-50 hover:text-orange-600'
                        }`
                      }
                    >
                      <span className="text-sm font-bold tracking-wider">{item.name}</span>
                    </NavLink>
                  ))}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <div className="h-20"></div>
    </>
  );
}