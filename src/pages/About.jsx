import { Target, Eye, CheckCircle, Globe, Package, Shield, Users, Clock, Award, TrendingUp } from 'lucide-react';
import SEO from '../components/SEO.jsx';
import { aboutBanner } from '../assets/index.js';

export default function About() {
  const sections = [
    {
      title: "Company Overview",
      content: "NS INC is a Mumbai-based Indian export company specializing in Premium cutlery, Packaged spices, Ready-to-eat food products and a wide range of FMCG goods. We serve international markets including the USA, Canada, Europe, and the Gulf, delivering high-quality Indian products with reliability and professionalism.\n\nBacked by over 14 years of experience in international logistics, NS INC has strong expertise in global shipping, customs regulations, and cross-border trade compliance. Our operational strength enables us to manage exports efficiently, securely, and on schedule, meeting the expectations of global buyers.\n\nAt NS INC, quality excellence, transparent business practices, and long-term partnerships form the foundation of our operations.",
      icon: Package,
      linear: "from-green-600 to-green-500"
    },
    {
      title: "Our Mission",
      content: "To export India's finest FMCG, food products, and Kitchen essentials to global markets by maintaining the highest standards of quality, compliance and logistics efficiency, while fostering long-term and trustworthy business relationships.",
      icon: Target,
      linear: "from-orange-600 to-orange-500"
    },
    {
      title: "Our Vision",
      content: "To become a globally trusted Indian export partner, recognized for impeccable quality, logistics expertise, and reliable supply of FMCG and food products, contributing to the international growth of Indian brands.",
      icon: Eye,
      linear: "from-green-600 to-green-500"
    }
  ];

  const qualityPoints = [
    "Export-compliant packaging and labelling",
    "Country-specific regulatory adherence",
    "Accurate documentation and customs clearance",
    "Alignment with international shipping and safety standards"
  ];

  const logisticsPoints = [
    "Efficient global shipping solutions",
    "Secure handling and transportation",
    "Timely delivery across international markets",
    "Cost-effective export planning",
    "From Sky to Sea, We Deliver Globally"
  ];

  const whyChooseUs = [
    { text: "14+ years of international logistics expertise", icon: Clock },
    { text: "Wide portfolio of FMCG, Cutlery and food products", icon: Package },
    { text: "Strong understanding of global compliance requirements", icon: Shield },
    { text: "Reliable, on-time international deliveries", icon: TrendingUp },
    { text: "Transparent business practices", icon: CheckCircle },
    { text: "Long-term partnership approach", icon: Users }
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-white via-gray-50 to-white py-12 md:py-16">
      <SEO
        title="About NS INC Exports - Mumbai-Based Indian Export Company Since 2009"
        description="NS INC Exports: Mumbai-based Indian export company with 14+ years expertise in FMCG, food products & kitchen essentials. Serving USA, Canada, Europe & Gulf Countries with quality assurance & international logistics."
        keywords="About NS INC, Indian export company profile, Mumbai based exporter India, trusted Indian exporter company, Indian merchant exporter, quality focused Indian exporter, premium Indian products exporter, long term export partner India, reliable FMCG exporter India, Indian food and FMCG export company, global trade partner India, Indian exporter serving USA Europe Gulf, experienced Indian export company, B2B export supplier India, export focused company Mumbai, international buyers Indian supplier, Indian export business India, export driven FMCG company, Indian exporter with compliance expertise"
        canonical="/about"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-3 py-1.5 rounded-full text-linear md:text-sm font-semibold mb-4 md:mb-6">
            <Award className="w-3 h-3 md:w-4 md:h-4" />
            Quality Impeccable
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
            About <span className="bg-linear-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">NS INC</span> Exports
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Indian Exporter of FMCG, Food Products & Kitchen Essentials
          </p>
        </div>

        <div className="space-y-8 md:space-y-12">
          {sections.map((section, index) => (
            <section
              key={index}
              className="relative group"
            >
              <div className={`absolute -inset-4 bg-linear-to-r ${section.linear} rounded-2xl md:rounded-3xl blur-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

              <div className="relative bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-start gap-4 md:gap-6 mb-4 md:mb-6">
                  <div className={`p-3 md:p-4 rounded-xl md:rounded-2xl bg-linear-to-br ${section.linear} shrink-0 shadow-lg`}>
                    <section.icon className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 pt-1 md:pt-2">
                    {section.title}
                  </h2>
                </div>

                <div className="text-gray-700 text-sm md:text-base leading-relaxed space-y-3 md:space-y-4 pl-0 md:pl-16">
                  {section.content.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </section>
          ))}

          <section className="relative group">
            <div className="absolute -inset-4 bg-linear-to-r from-orange-600 to-orange-500 rounded-2xl md:rounded-3xl blur-2xl opacity-10"></div>

            <div className="relative bg-linear-to-br from-orange-50 to-orange-100/50 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 border border-orange-200">
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <Shield className="text-orange-600 w-6 h-6 md:w-8 md:h-8 lg:w-9 lg:h-9" />
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                  Quality Assurance & Compliance
                </h2>
              </div>

              <p className="text-gray-700 text-sm md:text-base mb-6 md:mb-8 leading-relaxed">
                Quality and compliance are integral to our export operations. NS INC ensures:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {qualityPoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 md:gap-3 bg-white p-4 md:p-5 rounded-xl md:rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <CheckCircle className="text-green-600 shrink-0 mt-0.5 w-4 h-4 md:w-5 md:h-5" />
                    <span className="text-gray-800 text-sm md:text-base font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="relative group">
            <div className="absolute -inset-4 bg-linear-to-r from-green-600 to-green-500 rounded-2xl md:rounded-3xl blur-2xl opacity-10"></div>

            <div className="relative bg-linear-to-br from-green-50 to-green-100/50 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 border border-green-200">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="w-full lg:w-[40%]">
                  <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                    <Clock className="text-green-600 w-6 h-6 md:w-8 md:h-8 lg:w-9 lg:h-9" />
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                      Logistics & Supply Chain Expertise
                    </h2>
                  </div>

                  <p className="text-gray-700 text-sm md:text-base mb-6 md:mb-8 leading-relaxed">
                    With over 14 years of hands-on experience, our logistics team ensures:
                  </p>

                  <div className="flex lg:hidden w-full lg:w-[60%] justify-center lg:justify-end mb-10">
                    <img
                      src={aboutBanner}
                      alt="Logistics Excellence"
                      className="w-full h-auto rounded-2xl shadow-2xl object-cover border-4 border-white"
                    />
                  </div>

                  <div className="space-y-3">
                    {logisticsPoints.map((point, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-2 md:gap-3 bg-white/60 p-3 rounded-xl shadow-sm border border-white"
                      >
                        <CheckCircle className="text-orange-600 shrink-0 mt-0.5 w-4 h-4" />
                        <span className="text-gray-800 text-sm md:text-base font-medium leading-tight">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="hidden lg:flex w-full lg:w-[60%] justify-center lg:justify-end">
                  <img
                    src={aboutBanner}
                    alt="Logistics Excellence"
                    className="w-full h-auto rounded-2xl shadow-2xl object-cover border-4 border-white"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="relative">
            <div className="absolute -inset-4 bg-linear-to-r from-green-600 to-green-500 rounded-2xl md:rounded-3xl blur-3xl opacity-20"></div>

            <div className="relative bg-linear-to-br from-green-600 to-green-500 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 shadow-2xl">
              <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                <Users className="text-white w-6 h-6 md:w-8 md:h-8 lg:w-9 lg:h-9" />
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                  Why Choose NS INC
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                {whyChooseUs.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 md:gap-3 bg-white/10 backdrop-blur-sm p-4 md:p-5 rounded-xl md:rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <item.icon className="text-white shrink-0 mt-0.5 w-4 h-4 md:w-5 md:h-5" />
                    <span className="text-white text-sm md:text-base font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="text-center">
            <div className="bg-linear-to-br from-gray-50 to-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 shadow-lg border border-gray-100">
              <div className="flex items-center justify-center gap-2 md:gap-3 mb-4 md:mb-6">
                <Globe className="text-orange-600 w-6 h-6 md:w-8 md:h-8 lg:w-9 lg:h-9" />
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                  Global Reach & Partnerships
                </h2>
              </div>

              <p className="text-gray-700 text-sm md:text-base max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed">
                NS INC welcomes distributors, retailers, importers, and private-label partners seeking a reliable Indian export partner. Our expertise in international markets ensures successful partnerships.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-12">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-linear-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-1 md:mb-2">
                    14+
                  </div>
                  <div className="text-gray-600 text-sm md:text-base font-semibold">Years Experience</div>
                </div>

                <div className="hidden sm:block w-px h-12 md:h-16 bg-gray-300"></div>

                <div className="text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-linear-to-r from-green-600 to-green-500 bg-clip-text text-transparent mb-1 md:mb-2">
                    4+
                  </div>
                  <div className="text-gray-600 text-sm md:text-base font-semibold">Continents</div>
                </div>

                <div className="hidden sm:block w-px h-12 md:h-16 bg-gray-300"></div>

                <div className="text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-linear-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-1 md:mb-2">
                    50+
                  </div>
                  <div className="text-gray-600 text-sm md:text-base font-semibold">Products</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}