import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Globe, Package, Shield, Truck, Award, ArrowRight, Sparkles, ChevronDown } from 'lucide-react';
import { banner } from '../assets/index.js';
import products from '../assets/products/products.js';
import SEO from '../components/SEO.jsx';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const navigate = useNavigate();

  const displayProducts = useMemo(() => {
    const idsToShow = ['NSINC0028', 'NSINC0014', 'NSINC0027', 'NSINC0018', 'SPICE005', 'SPICE017', 'SPICE023', 'SPICE028', 'SPICE019'];
    return products.filter(p => idsToShow.includes(p.id));
  }, []);

  const features = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving USA, Canada, Europe & Gulf Countries',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Package,
      title: 'Quality Products',
      description: 'Premium FMCG & Food Products',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Shield,
      title: '14+ Years Experience',
      description: 'International Logistics Expertise',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Truck,
      title: 'Reliable Logistics',
      description: 'Secure & Timely Deliveries',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Award,
      title: 'Compliance',
      description: 'International Standards Compliant',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Sparkles,
      title: 'Trusted Partner',
      description: 'Long-term Business Relationships',
      color: 'from-green-500 to-green-600'
    }
  ];

  const markets = [
    'United States of America',
    'Canada',
    'Europe',
    'Gulf Countries'
  ];

  const faqs = [
    {
      question: 'What products does NS INC export?',
      answer: 'NS INC specializes in exporting Premium Cutlery & Kitchen Accessories, Packaged Indian Spices, Ready-to-Eat Food Products, and a wide range of FMCG goods to international markets.'
    },
    {
      question: 'Which countries do you export to?',
      answer: 'We export to major global markets including the United States, Canada, Europe, and Gulf Countries.'
    },
    {
      question: 'Do you provide custom packaging and labeling?',
      answer: 'Yes, we offer export-compliant packaging and labeling services tailored to meet country-specific regulatory requirements.'
    },
    {
      question: 'What is your minimum order quantity (MOQ)?',
      answer: 'Our MOQ varies depending on the product category and destination. Please contact us directly to discuss your specific requirements.'
    },
    {
      question: 'How do you ensure product quality?',
      answer: 'We maintain strict quality control measures including export-compliant packaging and country-specific regulatory adherence.'
    },
    {
      question: 'What is the typical delivery timeline?',
      answer: 'Delivery timelines vary based on destination and order size. We ensure efficient processing and timely deliveries.'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % displayProducts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [displayProducts.length]);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const handleCardClick = (slug) => {
    navigate(`/products/${slug}`);
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white overflow-hidden">
      <SEO
        title="NS INC Exports | Trusted Indian Exporters of FMCG, Food Products & Kitchen Essentials"
        description="NS INC Exports: Mumbai-based export company with 14+ years expertise in exporting premium quality Indian products worldwide. Specializing in FMCG goods, packaged spices, ready-to-eat foods, and kitchen accessories to USA, Canada, Europe & Gulf markets."
        keywords="Indian FMCG exporter, Mumbai based Indian export company, wholesale Indian food exporter, Indian food products exporter, ready to eat food exporter India, packaged spices exporter India, Indian spices bulk supplier, Indian spice exporter for USA, Indian spices exporter Europe, Indian food exporter USA, Indian food exporter Gulf countries, Indian FMCG supplier for importers, FMCG products exporter India, B2B Indian export supplier, trusted Indian merchant exporter, reliable Indian export partner, premium quality Indian products exporter, Indian cutlery exporter, stainless steel kitchenware exporter, kitchen accessories exporter India, kitchen tools wholesale exporter India, Indian kitchenware bulk supplier, India based FMCG export company, Indian exporter to USA, Indian exporter to UAE, Indian exporter to Europe, Indian exporter to Canada, Indian exporter for global markets, export compliant Indian supplier, international logistics exporter India, export documentation and customs clearance India, long term export partnership India, NS INC Mumbai exporter, NS INC Indian export company, NS INC export company"
        canonical="/"
      />
      <motion.section
        className="py-8 md:py-16 lg:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
            <motion.div className="lg:w-1/2 space-y-4 md:space-y-6" variants={itemVariants}>
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-3 py-1.5 rounded-full text-sm font-semibold w-fit">
                <Sparkles className="w-4 h-4" />
                14+ Years of Excellence
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Indian Exporter of{' '}
                <span className="bg-linear-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">FMCG</span>,{' '}
                <span className="bg-linear-to-r from-green-600 to-green-500 bg-clip-text text-transparent">Food Products</span>{' '}
                & <span className="bg-linear-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">Kitchen Essentials</span>
              </h1>

              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                NS INC is a Mumbai-based Indian export company specializing in premium quality products with over 14 years of international logistics expertise.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2">
                <a href="/products" className="group bg-linear-to-r from-orange-600 to-orange-500 text-white px-6 py-3 md:px-8 md:py-3.5 rounded-xl md:rounded-2xl font-bold hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 text-center flex items-center justify-center gap-2">
                  View Products
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="/about" className="group border-2 border-green-600 text-green-600 px-6 py-3 md:px-8 md:py-3.5 rounded-xl md:rounded-2xl font-bold hover:bg-green-600 hover:text-white transition-all duration-300 text-center">
                  Learn About Us
                </a>
              </div>
            </motion.div>

            <motion.div className="lg:w-1/2 w-full" variants={itemVariants}>
              <div className="relative max-w-md mx-auto lg:max-w-none">
                <div className="absolute -inset-4 bg-linear-to-r from-orange-500 to-green-500 rounded-2xl blur-2xl opacity-20 animate-pulse"></div>
                <div className="relative aspect-square w-full max-w-sm mx-auto lg:max-w-none">
                  <img src={banner} alt="NS INC Exports Banner" draggable="false" className="w-full h-full object-cover rounded-2xl shadow-2xl" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-12 md:py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <motion.h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4" variants={itemVariants}>
              Our <span className="bg-linear-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">Product</span> Portfolio
            </motion.h2>
            <motion.p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto" variants={itemVariants}>Premium quality products for global markets</motion.p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
            <motion.div className="lg:w-1/2" variants={itemVariants}>
              <div className="relative aspect-square w-full max-w-md mx-auto lg:max-w-none rounded-2xl md:rounded-3xl overflow-hidden shadow-xl">
                <AnimatePresence mode="wait">
                  {displayProducts.map((product, index) => (
                    currentSlide === index && (
                      <motion.div
                        onClick={() => handleCardClick(product.slug)}
                        key={product.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute inset-0 cursor-pointer"
                      >
                        <img src={product.images[0]} alt={product.title} draggable="false" className="w-full h-full object-contain" />
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                          <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold">{product.title}</h3>
                        </div>
                      </motion.div>
                    )
                  ))}
                </AnimatePresence>
                <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {displayProducts.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-orange-600 w-6 md:w-8' : 'bg-white/50 w-1.5 md:w-2'}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div className="lg:w-1/2 space-y-3 md:space-y-4" variants={itemVariants}>
              {[
                'Premium Cutlery & Kitchen Accessories - Durable and premium quality products for Hotels & Home.',
                'Packaged Indian Spices - Authentic branded Indian spices in export-ready packaging.',
                'Ready-to-Eat Food Products - Shelf-stable products designed for global retail.',
                'FMCG Products - A broad range of goods catering to everyday needs.'
              ].map((text, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 bg-green-50 p-4 md:p-5 rounded-xl hover:bg-green-100 transition-colors duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CheckCircle className="text-green-600 shrink-0 mt-0.5 w-4 h-4 md:w-5 md:h-5" />
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">{text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-12 md:py-16 bg-linear-to-b from-gray-50 to-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <motion.h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4" variants={itemVariants}>
              Why <span className="bg-linear-to-r from-green-600 to-green-500 bg-clip-text text-transparent">Choose</span> NS INC
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group relative bg-white p-5 md:p-6 lg:p-7 rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
              >
                <div className={`absolute inset-0 bg-linear-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                <div className={`relative p-3 rounded-xl bg-linear-to-br ${feature.color} w-fit mb-4`}>
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-12 md:py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
            <motion.div className="lg:w-1/2 space-y-4 md:space-y-5" variants={itemVariants}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Markets We <span className="bg-linear-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">Serve</span>
              </h2>
              <div className="space-y-3">
                {markets.map((market, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 bg-green-50 p-3 md:p-4 rounded-xl hover:bg-green-50 transition-colors duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-linear-to-r from-green-600 to-green-500 rounded-full"></div>
                    <span className="text-gray-800 font-semibold text-sm md:text-base">{market}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div className="lg:w-1/2 w-full" variants={itemVariants}>
              <div className="relative bg-linear-to-br from-orange-600 to-orange-500 rounded-3xl p-6 md:p-10 shadow-2xl">
                <h3 className="text-white text-xl sm:text-2xl font-bold mb-4">Ready to Partner With Us?</h3>
                <p className="text-white/90 text-sm md:text-base mb-8 leading-relaxed">NS INC welcomes distributors, retailers, and importers seeking a reliable Indian export partner.</p>
                <a href="/contact" className="inline-flex items-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                  Contact Us Today
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-12 md:py-16 bg-linear-to-b from-gray-50 to-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <motion.h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4" variants={itemVariants}>
              Frequently Asked <span className="bg-linear-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">Questions</span>
            </motion.h2>
          </div>
          <div className="space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-green-50 rounded-xl shadow-md border border-gray-100 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.05 }}
              >
                <button onClick={() => toggleFaq(index)} className="w-full flex items-center justify-between p-4 md:p-6 text-left">
                  <span className="font-bold text-gray-900 text-sm md:text-base">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-orange-600 shrink-0" />
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === index ? 'auto' : 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-4 md:px-6 pt-0 pb-4"><p className="text-gray-600 text-sm md:text-base">{faq.answer}</p></div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}