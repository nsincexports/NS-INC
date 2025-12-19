import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Tag } from 'lucide-react';

const Card = ({ product }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      onClick={() => navigate(`/product-detail?id=${product.id}`)}
      className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden border border-gray-100 flex flex-col h-full"
    >
      <div className="relative w-full h-72 bg-[#fdfdfd] p-6 overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          src={product.images[0]}
          alt={product.title}
          className="w-full h-full object-contain"
        />

        <div className="absolute top-4 right-4">
          <div className="px-3 py-1.5 rounded-xl flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest shadow-md bg-white/90 backdrop-blur-md text-orange-600 border border-orange-100">
            <Tag size={12} className="text-orange-500" />
            {product.subcategory}
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col grow bg-white">
        <div className="grow">
          <h3 className="text-gray-900 font-bold text-xl leading-tight mb-3 group-hover:text-orange-600 transition-colors">
            {product.title}
          </h3>
          <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-gray-50 pt-4">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">Model</span>
            <span className="text-sm font-mono font-medium text-green-700">{product.id}</span>
          </div>

          <motion.button
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-orange-100"
          >
            Explore
            <ArrowRight size={18} />
          </motion.button>
        </div>
      </div>

      <div className="h-2 w-full flex">
        <div className="h-full w-1/3 bg-orange-500" />
        <div className="h-full w-1/3 bg-white" />
        <div className="h-full w-1/3 bg-green-600" />
      </div>
    </motion.div>
  );
};

export default Card;