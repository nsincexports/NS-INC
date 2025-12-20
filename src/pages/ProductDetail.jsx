import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, CheckCircle2 } from 'lucide-react';
import products from '../assets/products/products.js';

const ProductDetail = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const id = searchParams.get('id');

  const [product, setProduct] = useState(null);
  const [selectedImg, setSelectedImg] = useState(0);
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 });
  const [isZooming, setIsZooming] = useState(false);

  useEffect(() => {
    const foundProduct = products.find(p => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [id]);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left - window.scrollX) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;
    setZoomPos({ x, y });
  };

  if (!product) return <div className="h-screen flex items-center justify-center font-bold text-2xl text-orange-600">Loading...</div>;

  return (
    <div className="min-h-screen bg-white pb-20">
      <nav className="max-w-7xl mx-auto px-4 py-6 flex items-center gap-2 text-sm text-gray-500">
        <button
          onClick={() => navigate('/products')}
          className="hover:text-orange-600 flex items-center gap-1 transition-colors font-medium cursor-pointer"
        >
          Products
        </button>
        <ChevronRight size={14} />
        <span className="truncate text-gray-900 font-semibold">{product.title}</span>
      </nav>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-4">
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto pb-2 md:pb-0 h-fit custom-scrollbar">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImg(index)}
                  className={`relative cursor-pointer shrink-0 w-16 h-16 md:w-24 md:h-24 border-2 rounded-2xl overflow-hidden transition-all duration-300 ${selectedImg === index ? 'border-orange-500 ring-4 ring-orange-50' : 'border-gray-100 hover:border-gray-300'}`}
                >
                  <img src={img} alt="product" draggable="false" className="w-full h-full object-contain p-2" />
                </button>
              ))}
            </div>

            <div
              className="flex-1 bg-gray-50 rounded-[2.5rem] p-8 relative h-100 md:h-137.5 flex items-center justify-center border border-gray-100 overflow-hidden cursor-zoom-in"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsZooming(true)}
              onMouseLeave={() => setIsZooming(false)}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedImg}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  src={product.images[selectedImg]}
                  className="w-full h-full object-contain pointer-events-none"
                  style={{
                    transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                    transform: isZooming ? 'scale(2.5)' : 'scale(1)',
                    transition: isZooming ? 'none' : 'transform 0.3s ease-out'
                  }}
                />
              </AnimatePresence>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col pt-4">
            <div className="border-b border-gray-100 pb-8">
              <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-bold tracking-wider text-[10px] uppercase">
                {product.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-black text-gray-900 mt-4 leading-tight italic tracking-tight">
                {product.title}
              </h1>
              <div className="flex items-center gap-4 mt-6">
                <span className="text-gray-500 text-sm font-bold tracking-widest uppercase">Model ID: {product.id}</span>
              </div>
              {product.highlight && (
                <div className="flex items-center gap-4 mt-4">
                  <span className="text-orange-500 text-base md:text-lg font-bold tracking-widest uppercase">{product.highlight}</span>
                </div>
              )}
            </div>

            <div className="py-8 space-y-6">
              <div className="bg-orange-50/50 p-6 rounded-4xl border border-orange-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-100/30 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-110" />
                <h4 className="font-black text-orange-900 mb-4 text-xl italic tracking-wide">Key Features</h4>
                <ul className="space-y-4">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-base text-gray-700 font-medium">
                      <div className="mt-1 bg-green-100 p-0.5 rounded-full">
                        <CheckCircle2 size={18} className="text-green-600 shrink-0" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-2">
                <h4 className="font-bold text-gray-400 uppercase text-[10px] tracking-[0.2em] mb-3">Description</h4>
                <p className="text-gray-600 leading-relaxed text-base font-medium italic">
                  "{product.description}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full h-2 flex z-50">
        <div className="h-full w-1/3 bg-orange-500" />
        <div className="h-full w-1/3 bg-white" />
        <div className="h-full w-1/3 bg-green-600" />
      </div>
    </div>
  );
};

export default ProductDetail;