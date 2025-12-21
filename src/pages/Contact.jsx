import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, MessageCircle, Copy, Check } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import SEO from '../components/SEO.jsx';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCopy = (e, text, index) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleEmailCopy = (e, email, emailIndex) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(email);
    setCopiedEmail(emailIndex);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  const handleWhatsApp = () => {
    const phoneNumber = '+919833452921';
    const message = `Hello NS INC Exports,\n\nI'm interested in your export services. Please provide me with more information.\n\nThank you!`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);

    const data = new FormData();
    data.append('name', formData.name);
    data.append('phone', formData.phone);
    data.append('email', formData.email);
    data.append('message', formData.message);
    data.append('_subject', 'New Contact Form Submission - NS INC Exports');
    data.append('_template', 'table');
    data.append('_captcha', 'false');

    fetch('https://formsubmit.co/ajax/nsinc.exports@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(Object.fromEntries(data))
    })
      .then(response => response.json())
      .then(data => {
        setIsSubmitting(false);
        if (data.success === "true") {
          setShowSuccess(true);
          setFormData({ name: '', phone: '', email: '', message: '' });
          setTimeout(() => setShowSuccess(false), 5000);
        } else {
          alert('Something went wrong. Please try again.');
        }
      })
      .catch(() => {
        alert('Error submitting form. Please try again.');
        setIsSubmitting(false);
      });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Number',
      value: '+91 98334 52921',
      copyValue: '+919833452921',
      link: 'tel:+919833452921',
      linear: 'from-orange-600 to-orange-500',
      bgColor: 'from-orange-50 to-orange-100/50'
    },
    {
      icon: MapPin,
      title: 'Office Address',
      value: '366, Teachers colony Bus Stop, Service Road, Western Express Hwy, near Janadhar Foundation, Khar East, Mumbai, Maharashtra 400051',
      copyValue: '366, Teachers colony Bus Stop, Service Road, Western Express Hwy, near Janadhar Foundation, Khar East, Mumbai, Maharashtra 400051',
      link: 'https://www.google.com/maps?q=NS+INC+Exports+Khar+East+Mumbai',
      linear: 'from-gray-600 to-gray-500',
      bgColor: 'from-gray-50 to-gray-100/50'
    }
  ];

  const emails = [
    { email: 'info@nsinc.co.in', link: 'mailto:info@nsinc.co.in' },
    { email: 'nsinc.exports@gmail.com', link: 'mailto:nsinc.exports@gmail.com' }
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 via-white to-gray-50 py-8 sm:py-10 md:py-12 lg:py-16">
      <SEO
        title="Contact NS INC Exports - Mumbai-Based Indian Export Company"
        description="Reach NS INC Exports for premium Indian FMCG, food products & kitchen essentials export. Phone: +91 98334 52921, Email: nsinc.exports@gmail.com. Office address: Khar East, Mumbai. WhatsApp support available."
        keywords="export company contact, Indian suppliers contact, Mumbai exporters phone, FMCG export enquiry form, food products export contact, kitchen accessories supplier WhatsApp, export partnership enquiry, bulk order contact, international distributor contact, NS INC Export contact"
        canonical="/contact"
      />
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-5 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-orange-100 text-orange-700 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm md:text-base font-semibold mb-3 sm:mb-4 md:mb-5 lg:mb-6">
            <MessageCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
            <span className="text-xs sm:text-sm md:text-base">We're Here to Help</span>
          </div>

          <h1 className="text-2xl xs:text-2.5xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-tight">
            Get in <span className="bg-linear-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">Touch</span>
          </h1>

          <p className="text-xs xs:text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
            Have questions or ready to start your export journey? We're here to help you every step of the way.
          </p>

          <div className="mt-6 sm:mt-7 md:mt-8 flex justify-center">
            <button
              onClick={handleWhatsApp}
              className="group inline-flex items-center gap-2 sm:gap-3 bg-linear-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-bold py-2.5 sm:py-3 px-5 sm:px-6 rounded-xl md:rounded-2xl transition-all duration-300 shadow-lg hover:shadow-green-500/25 text-sm sm:text-base"
            >
              <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              <span>Chat on WhatsApp</span>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-7 md:gap-8 lg:gap-10 xl:gap-12">
          <div className="space-y-5 sm:space-y-6 md:space-y-7">
            <div className="space-y-3 sm:space-y-4 md:space-y-5">
              {contactInfo.map((item, index) => (
                <div key={index} className="group relative">
                  <div className={`absolute -inset-1.5 sm:-inset-2 bg-linear-to-r ${item.linear} rounded-xl sm:rounded-2xl md:rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative flex items-start gap-3 sm:gap-4 md:gap-5 bg-linear-to-br ${item.bgColor} p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl md:rounded-3xl border border-gray-200 group-hover:border-transparent shadow-sm group-hover:shadow-xl transition-all duration-300 cursor-pointer w-full text-left`}
                  >
                    <div className={`p-2.5 sm:p-3 md:p-3.5 rounded-lg sm:rounded-xl md:rounded-2xl bg-linear-to-br ${item.linear} shrink-0 shadow-lg`}>
                      {index === 1 ? (
                        <FaWhatsapp className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
                      ) : (
                        <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0 pr-8 sm:pr-10">
                      <h3 className="font-bold text-gray-900 text-xs xs:text-sm sm:text-base md:text-lg mb-1 sm:mb-1.5 md:mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 text-xs xs:text-sm sm:text-sm md:text-base leading-relaxed wrap-break-words">
                        {item.value}
                      </p>
                    </div>

                    <button
                      onClick={(e) => handleCopy(e, item.copyValue, index)}
                      className="absolute top-4 sm:top-5 md:top-6 right-4 sm:right-5 md:right-6 p-1.5 sm:p-2 rounded-lg bg-white/80 hover:bg-white text-gray-500 hover:text-orange-600 transition-all shadow-sm cursor-pointer border border-gray-100 z-10"
                    >
                      {copiedIndex === index ? (
                        <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-green-600" />
                      ) : (
                        <Copy className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                      )}
                    </button>
                  </a>
                </div>
              ))}

              <div className="group relative">
                <div className="absolute -inset-1.5 sm:-inset-2 bg-linear-to-r from-blue-600 to-blue-500 rounded-xl sm:rounded-2xl md:rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

                <div className="relative flex items-start gap-3 sm:gap-4 md:gap-5 bg-linear-to-br from-blue-50 to-blue-100/50 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl md:rounded-3xl border border-gray-200 group-hover:border-transparent shadow-sm group-hover:shadow-xl transition-all duration-300 cursor-pointer w-full text-left">
                  <div className="p-2.5 sm:p-3 md:p-3.5 rounded-lg sm:rounded-xl md:rounded-2xl bg-linear-to-br from-blue-600 to-blue-500 shrink-0 shadow-lg">
                    <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 text-xs xs:text-sm sm:text-base md:text-lg mb-2 sm:mb-3 md:mb-4">
                      Email Address
                    </h3>

                    <div className="space-y-2.5 sm:space-y-3 md:space-y-4">
                      {emails.map((item, index) => (
                        <div key={index} className="group/email relative">
                          <a
                            href={item.link}
                            className="flex items-center justify-between p-2.5 sm:p-3 md:p-4 rounded-lg bg-white/80 border border-gray-100 hover:border-blue-300 hover:bg-white transition-all duration-200"
                          >
                            <div className="flex-1 min-w-0">
                              <p className="text-gray-700 text-xs xs:text-sm sm:text-sm md:text-base font-medium break-all">
                                {item.email}
                              </p>
                            </div>

                            <button
                              onClick={(e) => handleEmailCopy(e, item.email, index)}
                              className="ml-2 sm:ml-3 md:ml-4 p-1.5 sm:p-2 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-500 hover:text-blue-600 transition-all shadow-sm cursor-pointer border border-gray-200"
                            >
                              {copiedEmail === index ? (
                                <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-green-600" />
                              ) : (
                                <Copy className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4" />
                              )}
                            </button>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1.5 sm:-inset-2 bg-linear-to-r from-orange-600 to-green-600 rounded-xl sm:rounded-2xl md:rounded-3xl blur-xl opacity-20"></div>
              <div className="relative rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8931441718043!2d72.8459457752051!3d19.068413152194635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9171f65656b%3A0xc07a826315570d4c!2sService%20Rd%2C%20Khar%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1716120000000!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-48 xs:h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-linear-to-r from-orange-600 to-green-600 rounded-xl sm:rounded-2xl md:rounded-3xl blur-lg sm:blur-xl md:blur-2xl opacity-10"></div>

            <div className="relative bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-xl p-4 sm:p-5 md:p-6 lg:p-8 border border-gray-100">
              {showSuccess ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-8 sm:py-10 md:py-12">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-green-100 rounded-full flex items-center justify-center mb-4 sm:mb-5 md:mb-6">
                    <CheckCircle className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-green-600" />
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-2.5xl lg:text-3xl font-bold text-gray-900 mb-2">Message Sent!</h2>
                  <p className="text-gray-600 text-sm sm:text-base">Thank you for contacting us. We will get back to you shortly.</p>
                  <button
                    onClick={() => setShowSuccess(false)}
                    className="mt-6 sm:mt-7 md:mt-8 text-orange-600 font-bold hover:underline cursor-pointer text-sm sm:text-base"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-5 sm:mb-6 md:mb-7 lg:mb-8">
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-2.5 md:mb-3">
                      Send us a Message
                    </h2>
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                      Fill out the form below and we'll get back to you shortly.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-xs sm:text-sm md:text-base font-bold text-gray-900 mb-1.5 sm:mb-2 md:mb-2.5">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        autoComplete='name'
                        className="w-full px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-3.5 rounded-lg sm:rounded-xl md:rounded-2xl border-2 border-gray-200 focus:border-orange-500 focus:ring-2 sm:focus:ring-4 focus:ring-orange-100 outline-none transition-all duration-200 text-xs sm:text-sm md:text-base"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs sm:text-sm md:text-base font-bold text-gray-900 mb-1.5 sm:mb-2 md:mb-2.5">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        autoComplete='phone'
                        className="w-full px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-3.5 rounded-lg sm:rounded-xl md:rounded-2xl border-2 border-gray-200 focus:border-orange-500 focus:ring-2 sm:focus:ring-4 focus:ring-orange-100 outline-none transition-all duration-200 text-xs sm:text-sm md:text-base"
                        placeholder="Your phone number"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs sm:text-sm md:text-base font-bold text-gray-900 mb-1.5 sm:mb-2 md:mb-2.5">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete='email'
                        className="w-full px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-3.5 rounded-lg sm:rounded-xl md:rounded-2xl border-2 border-gray-200 focus:border-orange-500 focus:ring-2 sm:focus:ring-4 focus:ring-orange-100 outline-none transition-all duration-200 text-xs sm:text-sm md:text-base"
                        placeholder="Your email address"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs sm:text-sm md:text-base font-bold text-gray-900 mb-1.5 sm:mb-2 md:mb-2.5">Your Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        autoComplete='off'
                        className="w-full px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-3.5 rounded-lg sm:rounded-xl md:rounded-2xl border-2 border-gray-200 focus:border-orange-500 focus:ring-2 sm:focus:ring-4 focus:ring-orange-100 outline-none transition-all duration-200 resize-none text-xs sm:text-sm md:text-base"
                        placeholder="Tell us about your requirements..."
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`group w-full py-2.5 sm:py-3 md:py-3.5 lg:py-4 px-5 sm:px-6 rounded-lg sm:rounded-xl md:rounded-2xl font-bold text-white text-xs sm:text-sm md:text-base transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 md:gap-3 shadow-lg ${isSubmitting ? 'bg-gray-400' : 'bg-linear-to-r from-orange-600 to-orange-500 hover:shadow-orange-500/25'
                        }`}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}