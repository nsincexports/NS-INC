import { useState, useEffect, useMemo } from 'react';
import Card from '../components/Card';
import products from '../assets/products/products.js';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, ChevronLeft, ChevronRight, LayoutGrid, ChevronUp, ChevronDown, Info } from 'lucide-react';
import { spicesBg, srrMasalaLogo } from '../assets/index.js';

const Product = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeSubcategory, setActiveSubcategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showCategoryInfo, setShowCategoryInfo] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const categories = ['All', 'Cutlery and Kitchen Accessories', 'Spices', 'FMCG'];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, activeCategory, activeSubcategory]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, activeCategory, activeSubcategory]);

  const availableSubcategories = useMemo(() => {
    const subs = products
      .filter(p => activeCategory === 'All' || p.category === activeCategory)
      .map(p => p.subcategory);
    return ['All', ...new Set(subs)];
  }, [activeCategory]);

  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.id.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      const matchesSubcategory = activeSubcategory === 'All' || item.subcategory === activeSubcategory;
      return searchQuery.length > 0 ? matchesSearch : (matchesCategory && matchesSubcategory);
    });
  }, [searchQuery, activeCategory, activeSubcategory]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = window.innerWidth < 768 ? 3 : 5;
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
      let end = Math.min(totalPages, start + maxVisible - 1);
      if (end === totalPages) start = Math.max(1, end - maxVisible + 1);
      for (let i = start; i <= end; i++) pages.push(i);
    }
    return pages;
  };

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setActiveSubcategory('All');
  };

  return (
    <div className="min-h-screen bg-white py-6 md:py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col min-h-[80vh]">

        <div className="text-center mb-8">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 px-4 py-1.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest mb-4 border border-orange-100">
            <LayoutGrid size={14} /> Our Catalogue
          </motion.div>
          <h1 className="text-3xl md:text-6xl font-black text-gray-900 tracking-tight text-center">
            Premium <span className="text-green-600 italic">Collection</span>
          </h1>
        </div>

        <div className="max-w-2xl mx-auto w-full mb-8 text-center">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500" size={20} />
            <input
              id='search'
              name='search'
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-3.5 md:py-4 bg-white rounded-2xl border-2 border-orange-100 focus:border-orange-500 focus:ring-4 focus:ring-orange-50 outline-none transition-all font-bold text-sm md:text-base text-gray-800"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-600 cursor-pointer">
                <X size={20} />
              </button>
            )}
          </div>
        </div>

        {!searchQuery && (
          <div className="mb-8 space-y-6">
            <div className="flex overflow-x-auto no-scrollbar md:flex-wrap md:justify-center gap-2 pb-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`whitespace-nowrap px-5 py-2.5 rounded-xl text-[11px] md:text-sm font-black transition-all cursor-pointer border-2 ${activeCategory === cat ? 'bg-green-600 border-green-600 text-white shadow-md' : 'bg-white border-green-100 text-green-700 hover:bg-green-50'}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="bg-orange-50/50 p-4 md:p-6 rounded-3xl border-2 border-orange-100 flex flex-col items-center">
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-orange-400 mb-4">Refine Subcategory</span>
              <div className="flex flex-wrap justify-center gap-2">
                {availableSubcategories.map((sub) => (
                  <button
                    key={sub}
                    onClick={() => setActiveSubcategory(sub)}
                    className={`px-4 py-2 rounded-lg text-[10px] md:text-xs font-black transition-all cursor-pointer border-2 ${activeSubcategory === sub ? 'bg-orange-500 border-orange-500 text-white shadow-sm' : 'bg-white border-orange-200 text-orange-400 hover:border-orange-400'}`}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        <AnimatePresence mode='wait'>
          {!searchQuery && activeCategory !== 'All' && (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-12"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-green-700 font-black uppercase tracking-widest text-[10px] md:text-xs flex items-center gap-2">
                  <Info size={16} /> Category Information
                </h3>
                <button
                  onClick={() => setShowCategoryInfo(!showCategoryInfo)}
                  className="text-orange-600 font-bold text-[10px] md:text-xs flex items-center gap-1 hover:underline cursor-pointer bg-orange-50 px-3 py-1 rounded-full border border-orange-100"
                >
                  {showCategoryInfo ? <><ChevronUp size={14} /> Hide Info</> : <><ChevronDown size={14} /> Show Info</>}
                </button>
              </div>

              {showCategoryInfo && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                  {activeCategory === 'Spices' && (
                    <div className="space-y-6 text-center md:text-left">
                      <div className="relative rounded-[2.5rem] overflow-hidden min-h-45 flex flex-col md:flex-row items-center p-8 text-white shadow-xl border-4 border-orange-500/20" style={{ backgroundImage: `url(${spicesBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="absolute inset-0 bg-black/60" />
                        <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-6">
                          <img src={srrMasalaLogo} alt="SRR Logo" draggable="false" className="h-20 md:h-28 object-contain brightness-110 drop-shadow-lg" />
                          <h2 className="text-xl md:text-3xl font-black italic leading-tight md:text-right">
                            Providing The Finest <br /> <span className="text-orange-400">Traditional Spices</span>
                          </h2>
                        </div>
                      </div>
                      <div className="bg-green-50 rounded-3xl p-6 md:p-8 border border-green-100 shadow-sm">
                        <p className="text-green-600 font-black mb-4 text-sm md:text-base leading-relaxed border-l-4 border-green-500 pl-4">
                          We are Proud & authorised distributor of S.R.R Masala for USA, Canada, Europe & Gulf Market
                        </p>
                        <p className="text-gray-600 text-xs md:text-sm leading-relaxed font-medium">
                          Being one of the leading manufacturers and suppliers of the impeccable range of spices, S.R.R Masala is known as the best place to buy spices among the market leaders. For reasons of making the finest products available to their clients, S.R.R Masala is engaged in the utilisation of quality ingredients and modern machines, as per the FDA norms and guidelines. This ensures well maintained products essence, fragrance and shelf life. S.R.R Masala range of products comprises of the finest Chilli, Turmeric, Cumin Seeds, Coriander, etc. available in powder as well as whole form and are widely praised and preferred in the market. S.R.R Masala is among those few companies that use the best quality whole cooking spices and have adopted stringent quality control measures to produce ground spices. Further, S.R.R masala range is known to be marked at a rate, which is one of the best available in the market.
                        </p>
                      </div>
                    </div>
                  )}

                  {activeCategory === 'Cutlery and Kitchen Accessories' && (
                    <div className="p-6 md:p-10 bg-green-50 rounded-[2.5rem] border-2 border-green-100 shadow-sm">
                      <p className="text-green-800 font-bold text-center text-sm md:text-lg italic leading-relaxed">
                        "Our kitchen accessories and cutlery range represents premium quality, precision manufacturing, and long-lasting performance. From everyday essentials to specialized tools, we supply a wide variety of products meeting international quality standards."
                      </p>
                    </div>
                  )}

                  {activeCategory === 'FMCG' && (
                    <div className="p-6 md:p-10 bg-green-50 rounded-[2.5rem] border-2 border-green-100 shadow-sm">
                      <p className="text-green-800 font-black text-center text-sm md:text-lg italic leading-relaxed">
                        "We deal in all top Indian FMCG products and can export in bulk quantity as and when required"
                      </p>
                    </div>
                  )}
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grow">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 min-h-100">
            <AnimatePresence mode='popLayout'>
              {currentProducts.map((item) => (
                <motion.div layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.4 }} key={item.id}>
                  <Card product={item} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProducts.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 w-full text-center">
              <div className="bg-orange-50 w-20 h-20 rounded-full flex items-center justify-center mb-6 text-orange-500">
                <Search size={40} />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-400 font-medium text-sm mb-8 px-6">Adjust your filters or try a different search term.</p>
              <button onClick={() => { setSearchQuery(''); handleCategoryChange('All'); }} className="bg-orange-600 text-white px-8 py-3 rounded-xl font-black shadow-lg hover:bg-orange-700 cursor-pointer uppercase text-[10px] tracking-widest">
                Reset All
              </button>
            </div>
          )}
        </div>

        {totalPages > 1 && (
          <div className="mt-12 md:mt-16 flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <button disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)} className="p-2 md:p-3 rounded-xl bg-white border-2 border-orange-100 text-orange-500 hover:bg-orange-50 disabled:opacity-20 transition-all cursor-pointer"><ChevronLeft size={20} /></button>
              <div className="flex items-center gap-1 md:gap-2">
                {getPageNumbers().map((pageNum) => (
                  <button key={pageNum} onClick={() => setCurrentPage(pageNum)} className={`w-9 h-9 md:w-12 md:h-12 rounded-xl font-black text-xs md:text-sm transition-all cursor-pointer border-2 ${currentPage === pageNum ? 'bg-green-600 border-green-600 text-white shadow-lg' : 'bg-white border-green-100 text-green-600'}`}>{pageNum}</button>
                ))}
              </div>
              <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(p => p + 1)} className="p-2 md:p-3 rounded-xl bg-white border-2 border-orange-100 text-orange-500 hover:bg-orange-50 disabled:opacity-20 transition-all cursor-pointer"><ChevronRight size={20} /></button>
            </div>
          </div>
        )}
      </div>

      <div className="fixed bottom-0 left-0 w-full h-1.5 flex z-50">
        <div className="h-full w-1/3 bg-orange-500" /><div className="h-full w-1/2 bg-white" /><div className="h-full w-1/3 bg-green-600" />
      </div>
    </div>
  );
};

export default Product;