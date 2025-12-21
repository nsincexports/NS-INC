import { motion } from 'motion/react';
import { NavLink } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { logo } from '../assets/index.js';

export default function Footer() {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Product', path: '/products' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-white text-gray-800 pt-12 pb-6 border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">

          <div className="lg:col-span-4 space-y-6">
            <motion.img
              whileHover={{ scale: 1.02 }}
              src={logo}
              alt="NS INC Exports"
              className="h-12 md:h-14 w-auto object-contain"
            />
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              NS INC Exports is a premier global trading partner dedicated to delivering high-quality export solutions with integrity, transparency, and professional excellence.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-gray-900 text-xs font-black uppercase tracking-[0.2em] mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `text-sm font-bold transition-all duration-300 hover:pl-2 ${isActive ? 'text-orange-600' : 'text-gray-600 hover:text-orange-600'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 lg:col-span-6">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-6 text-gray-900">
              Contact & Support
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <a
                  href="https://maps.google.com/?q=366,Teachers+colony+Bus+Stop,Mumbai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 hover:bg-orange-50 transition-colors group"
                >
                  <MapPin className="text-orange-600 shrink-0 mt-1" size={18} />
                  <p className="text-gray-600 group-hover:text-orange-600 text-sm leading-snug">
                    366, Teachers colony Bus Stop, Service Road, Western Express Hwy, near Janadhar Foundation, Khar East, Mumbai, Maharashtra 400051
                  </p>
                </a>
              </div>

              <a href="tel:+919833452921" className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 hover:border-orange-200 transition-all group">
                <Phone className="text-orange-600 shrink-0" size={18} />
                <span className="text-gray-800 font-bold text-sm group-hover:text-orange-600">+91 98334 52921</span>
              </a>

              <div className="p-4 rounded-xl border border-gray-100 space-y-2">
                <a href="mailto:info@nsinc.co.in" className="flex items-center gap-3 text-sm text-gray-600 hover:text-orange-600 transition-colors">
                  <Mail size={16} className="text-orange-600 shrink-0" /> <span className="truncate">info@nsinc.co.in</span>
                </a>
                <a href="mailto:nsinc.exports@gmail.com" className="flex items-center gap-3 text-sm text-gray-600 hover:text-orange-600 transition-colors">
                  <Mail size={16} className="text-orange-600 shrink-0" /> <span className="truncate">nsinc.exports@gmail.com</span>
                </a>
              </div>

              <div className="sm:col-span-2 flex items-center justify-between gap-3 p-4 bg-orange-50/50 rounded-xl border border-orange-100">
                <div className="flex items-center gap-3">
                  <Clock className="text-orange-600 shrink-0" size={18} />
                  <p className="text-sm font-bold text-gray-900">Mon - Sat: 9:30 AM - 7:00 PM</p>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-red-600 bg-white px-2 py-1 rounded shadow-sm">
                  Sunday Closed
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex justify-center items-center gap-4">
          <p className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} NS INC Exports • All Rights Reserved
          </p>
        </div>
      </div>
    </motion.footer>
  );
}