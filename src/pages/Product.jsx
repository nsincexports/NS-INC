import { useState, useEffect, useMemo } from 'react';
import Card from '../components/Card';
import products from '../assets/products/products.js';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, X, ChevronLeft, ChevronRight, LayoutGrid, ChevronUp, ChevronDown } from 'lucide-react';

const Product = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeSubcategory, setActiveSubcategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const categories = ['All', 'Cutlery and Kitchen Accessories', 'Spices', 'FMCG'];

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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, activeCategory, activeSubcategory]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, activeCategory, activeSubcategory]);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setActiveSubcategory('All');
  };

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

  const isSearchActive = searchQuery.length > 0;

  return (
    <div className="min-h-screen bg-white py-6 md:py-12">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-8 md:mb-12">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 px-4 py-1.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest mb-4 border border-orange-100">
            <LayoutGrid size={14} /> Our Catalogue
          </motion.div>
          <h1 className="text-3xl md:text-6xl font-black text-gray-900 tracking-tight text-center">
            Premium <span className="text-green-600 italic">Collection</span>
          </h1>
        </div>

        <div className="flex flex-col gap-3 mb-8 md:mb-12">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="relative flex-1">
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
              {isSearchActive && (
                <button onClick={() => setSearchQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-600 cursor-pointer">
                  <X size={20} />
                </button>
              )}
            </div>

            {!isSearchActive && (
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className={`flex items-center justify-center gap-2 px-6 py-3.5 md:py-4 rounded-2xl border-2 font-black transition-all cursor-pointer text-sm md:text-base ${isFilterOpen ? 'bg-orange-600 border-orange-600 text-white shadow-lg' : 'bg-white border-orange-100 text-orange-600 hover:bg-orange-50'
                  }`}
              >
                <Filter size={18} />
                Filter
                {isFilterOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
            )}
          </div>
        </div>

        {!isSearchActive && (
          <div className="mb-10">
            <div className="flex overflow-x-auto no-scrollbar md:flex-wrap md:justify-center gap-2 pb-4 md:pb-0 mb-6 font-bold">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`whitespace-nowrap px-5 py-2.5 rounded-xl text-[11px] md:text-sm font-black transition-all cursor-pointer border-2 ${activeCategory === cat
                    ? 'bg-green-600 border-green-600 text-white shadow-md'
                    : 'bg-white border-green-100 text-green-700 hover:bg-green-50'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <AnimatePresence>
              {isFilterOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="bg-orange-50/50 p-4 md:p-8 rounded-3xl border-2 border-orange-100 flex flex-col items-center mb-10">
                    <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-orange-400 mb-4">Refine Subcategory</span>
                    <div className="flex flex-wrap justify-center gap-2">
                      {availableSubcategories.map((sub) => (
                        <button
                          key={sub}
                          onClick={() => setActiveSubcategory(sub)}
                          className={`px-4 py-2 rounded-lg text-[10px] md:text-xs font-black transition-all cursor-pointer border-2 ${activeSubcategory === sub
                            ? 'bg-orange-500 border-orange-500 text-white shadow-sm'
                            : 'bg-white border-orange-200 text-orange-400 hover:border-orange-400'
                            }`}
                        >
                          {sub}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 min-h-100">
          <AnimatePresence mode='popLayout'>
            {currentProducts.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
              >
                <Card product={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {totalPages > 1 && (
          <div className="mt-12 md:mt-16 flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(p => p - 1)}
                className="p-2 md:p-3 rounded-xl bg-white border-2 border-orange-100 text-orange-500 hover:bg-orange-50 disabled:opacity-20 transition-all cursor-pointer"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex items-center gap-1 md:gap-2">
                {getPageNumbers().map((pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-9 h-9 md:w-12 md:h-12 rounded-xl font-black text-xs md:text-sm transition-all cursor-pointer border-2 ${currentPage === pageNum
                      ? 'bg-green-600 border-green-600 text-white shadow-lg'
                      : 'bg-white border-green-100 text-green-600'
                      }`}
                  >
                    {pageNum}
                  </button>
                ))}
              </div>

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(p => p + 1)}
                className="p-2 md:p-3 rounded-xl bg-white border-2 border-orange-100 text-orange-500 hover:bg-orange-50 disabled:opacity-20 transition-all cursor-pointer"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest">
              Page {currentPage} of {totalPages}
            </p>
          </div>
        )}

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 md:py-24 bg-white rounded-[2.5rem] border-4 border-dashed border-orange-50">
            <div className="bg-orange-50 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-500">
              <Search size={32} />
            </div>
            <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-2 tracking-tight">No products found</h3>
            <p className="text-gray-400 font-medium text-sm md:text-base mb-8 px-6 text-center">Adjust your filters or try a different search term.</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('All'); setActiveSubcategory('All'); setIsFilterOpen(false); }}
              className="bg-orange-600 text-white px-8 py-3 rounded-xl font-black shadow-lg shadow-orange-100 hover:bg-orange-700 transition-all cursor-pointer uppercase text-[10px] tracking-widest"
            >
              Reset All
            </button>
          </div>
        )}
      </div>

      <div className="fixed bottom-0 left-0 w-full h-1.5 flex z-50">
        <div className="h-full w-1/3 bg-orange-500" />
        <div className="h-full w-1/2 bg-white" />
        <div className="h-full w-1/3 bg-green-600" />
      </div>
    </div>
  );
};

export default Product;