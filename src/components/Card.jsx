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
      className="group relative bg-white rounded-[2.5rem] shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden border border-gray-100 flex flex-col h-full"
    >
      <div className="relative w-full h-72 bg-gray-50/50 p-8 overflow-hidden flex items-center justify-center">
        <motion.img
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          src={product.images[0]}
          alt={product.title}
          draggable="false"
          className="w-full h-full object-contain drop-shadow-xl"
        />
      </div>

      <div className="p-6 flex flex-col grow bg-white relative">
        <div className="grow">
          <div className="flex items-center gap-2 mb-3">
            <div className="bg-orange-50 text-orange-600 px-3 py-1 rounded-full flex items-center gap-1.5 border border-orange-100">
              <Tag size={10} className="font-bold" />
              <span className="text-[10px] font-black uppercase tracking-widest leading-none">
                {product.subcategory}
              </span>
            </div>
          </div>

          <h3 className="text-gray-900 font-black text-xl leading-tight mb-3 group-hover:text-orange-600 transition-colors italic">
            {product.title}
          </h3>

          <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed font-medium">
            {product.description}
          </p>
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-gray-50 pt-6">
          <div className="flex flex-col">
            <span className="text-[9px] uppercase tracking-[0.3em] text-gray-400 font-black mb-1">Model ID</span>
            <span className="text-sm font-mono font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-lg border border-green-100">
              {product.id}
            </span>
          </div>

          <motion.div
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 bg-orange-600 group-hover:bg-green-600 text-white px-5 py-3 rounded-2xl font-black text-xs transition-all shadow-xl shadow-gray-200 group-hover:shadow-orange-200 uppercase tracking-widest"
          >
            Explore
            <ArrowRight size={16} />
          </motion.div>
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