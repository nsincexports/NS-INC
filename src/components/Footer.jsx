import { motion } from 'motion/react';
import { NavLink } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { logo } from '../assets/index.js';

export default function Footer() {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Product', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white text-gray-800 py-5 border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 mb-8">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 space-y-5"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              src={logo}
              alt="NS INC Exports"
              className="h-14 sm:h-16 md:h-18 w-auto object-contain"
            />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-sm"
            >
              NS INC Exports is a premier global trading partner dedicated to delivering high-quality export solutions with integrity, transparency, and professional excellence.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h4 className="text-gray-900 text-sm sm:text-base font-black uppercase tracking-[0.2em] mb-6 sm:mb-8">
              Quick Links
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `text-sm md:text-base font-bold transition-colors ${isActive
                        ? 'text-orange-600'
                        : 'text-gray-600 hover:text-orange-600'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 lg:col-span-5"
          >
            <h4 className="text-sm sm:text-base font-black uppercase tracking-[0.2em] mb-6 sm:mb-8 text-gray-900">
              Contact & Support
            </h4>
            <div className="space-y-5 sm:space-y-6">
              <motion.a
                whileHover={{ scale: 1.02 }}
                href="https://maps.app.goo.gl/kKySEWVP2LSWAuUZ9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 sm:gap-4 group p-3 sm:p-4 rounded-xl hover:bg-green-50 transition-all"
              >
                <MapPin className="text-orange-600 shrink-0" size={18} />
                <p className="text-gray-600 group-hover:text-orange-600 text-sm md:text-base leading-relaxed transition-colors">
                  Teachers colony Bus Stop, Service Road, Western Express Hwy, near Janadhar Foundation, Khar East, Mumbai, Maharashtra 400051
                </p>
              </motion.a>

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="tel:+919833452921"
                  className="flex items-center gap-3 sm:gap-4 group p-3 sm:p-4 rounded-xl hover:bg-green-50 transition-all"
                >
                  <Phone className="text-orange-600 shrink-0" size={16} />
                  <span className="text-gray-800 font-bold group-hover:text-orange-600 transition-colors text-sm sm:text-base">
                    +91 98334 52921
                  </span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="mailto:nsinc.exports@gmail.com"
                  className="flex items-center gap-3 sm:gap-4 group p-3 sm:p-4 rounded-xl hover:bg-green-50 transition-all"
                >
                  <Mail className="text-orange-600 shrink-0" size={16} />
                  <span className="text-gray-600 font-medium group-hover:text-orange-600 transition-colors truncate text-sm sm:text-base">
                    nsinc.exports@gmail.com
                  </span>
                </motion.a>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-green-50 rounded-xl border border-gray-100"
              >
                <Clock className="text-orange-600 shrink-0" size={18} />
                <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-1">
                  <p className="text-sm md:text-base font-bold text-gray-900">Mon - Sat: 9:30 AM - 7:00 PM</p>
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="text-[10px] sm:text-[10px] font-black uppercase tracking-widest text-red-600 bg-red-50 px-2 py-0.5 rounded"
                  >
                    Sunday Closed
                  </motion.span>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-6 sm:pt-8 border-t border-gray-100 text-center"
        >
          <p className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest">
            © {new Date().getFullYear()} NS INC Exports • All Rights Reserved
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}