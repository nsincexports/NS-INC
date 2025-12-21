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
      icon: FaWhatsapp,
      title: 'WhatsApp',
      value: '+91 98334 52921',
      copyValue: '+919833452921',
      link: 'https://wa.me/919833452921',
      linear: 'from-green-600 to-green-500',
      bgColor: 'from-green-50 to-green-100/50'
    },
    {
      icon: Mail,
      title: 'Email Address',
      value: 'nsinc.exports@gmail.com',
      copyValue: 'nsinc.exports@gmail.com',
      link: 'mailto:nsinc.exports@gmail.com',
      linear: 'from-blue-600 to-blue-500',
      bgColor: 'from-blue-50 to-blue-100/50'
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

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 via-white to-gray-50 py-12 md:py-16">
      <SEO
        title="Contact NS INC Exports - Mumbai-Based Indian Export Company"
        description="Reach NS INC Exports for premium Indian FMCG, food products & kitchen essentials export. Phone: +91 98334 52921, Email: nsinc.exports@gmail.com. Office address: Khar East, Mumbai. WhatsApp support available."
        keywords="export company contact, Indian suppliers contact, Mumbai exporters phone, FMCG export enquiry form, food products export contact, kitchen accessories supplier WhatsApp, export partnership enquiry, bulk order contact, international distributor contact, NS INC Export contact"
        canonical="/contact"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-3 py-1.5 rounded-full text-sm md:text-base font-semibold mb-4 md:mb-6">
            <MessageCircle className="w-3 h-3 md:w-4 md:h-4" />
            We're Here to Help
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
            Get in <span className="bg-linear-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">Touch</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have questions or ready to start your export journey? We're here to help you every step of the way.
          </p>

          {/* WhatsApp Quick Button */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={handleWhatsApp}
              className="group inline-flex items-center gap-3 bg-linear-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-bold py-3 px-6 rounded-xl md:rounded-2xl transition-all duration-300 shadow-lg hover:shadow-green-500/25"
            >
              <FaWhatsapp className="w-5 h-5 md:w-6 md:h-6" />
              <span>Chat on WhatsApp</span>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          <div className="space-y-6 md:space-y-7">
            <div className="space-y-4 md:space-y-5">
              {contactInfo.map((item, index) => (
                <div key={index} className="group relative">
                  <div className={`absolute -inset-2 bg-linear-to-r ${item.linear} rounded-2xl md:rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative flex items-start gap-4 md:gap-5 bg-linear-to-br ${item.bgColor} p-5 md:p-6 rounded-2xl md:rounded-3xl border border-gray-200 group-hover:border-transparent shadow-sm group-hover:shadow-xl transition-all duration-300 cursor-pointer w-full text-left`}
                  >
                    <div className={`p-3 md:p-3.5 rounded-xl md:rounded-2xl bg-linear-to-br ${item.linear} shrink-0 shadow-lg`}>
                      {index === 1 ? (
                        <FaWhatsapp className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
                      ) : (
                        <item.icon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0 pr-10">
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg mb-1 md:mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed wrap-break-words">
                        {item.value}
                      </p>
                    </div>

                    <button
                      onClick={(e) => handleCopy(e, item.copyValue, index)}
                      className="absolute top-6 right-6 p-2 rounded-lg bg-white/80 hover:bg-white text-gray-500 hover:text-orange-600 transition-all shadow-sm cursor-pointer border border-gray-100 z-10"
                    >
                      {copiedIndex === index ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </a>
                </div>
              ))}
            </div>

            <div className="relative group">
              <div className="absolute -inset-2 bg-linear-to-r from-orange-600 to-green-600 rounded-2xl md:rounded-3xl blur-xl opacity-20"></div>
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8931441718043!2d72.8459458752051!3d19.068413152194635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9171f65656b%3A0xc07a826315570d4c!2sService%20Rd%2C%20Khar%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1716120000000!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-64 sm:h-72 md:h-80 lg:h-96"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-linear-to-r from-orange-600 to-green-600 rounded-2xl md:rounded-3xl blur-2xl opacity-10"></div>

            <div className="relative bg-white rounded-2xl md:rounded-3xl shadow-xl p-6 md:p-8 border border-gray-100">
              {showSuccess ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h2>
                  <p className="text-gray-600">Thank you for contacting us. We will get back to you shortly.</p>
                  <button
                    onClick={() => setShowSuccess(false)}
                    className="mt-8 text-orange-600 font-bold hover:underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-6 md:mb-8">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-3">
                      Send us a Message
                    </h2>
                    <p className="text-sm md:text-base text-gray-600">
                      Fill out the form below and we'll get back to you shortly.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                    <div>
                      <label className="block text-sm md:text-base font-bold text-gray-900 mb-2 md:mb-3">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 md:px-5 md:py-3.5 rounded-xl md:rounded-2xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all duration-200 text-sm md:text-base"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                      <div>
                        <label className="block text-sm md:text-base font-bold text-gray-900 mb-2 md:mb-3">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 md:px-5 md:py-3.5 rounded-xl md:rounded-2xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all duration-200 text-sm md:text-base"
                          placeholder="Your phone number"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm md:text-base font-bold text-gray-900 mb-2 md:mb-3">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 md:px-5 md:py-3.5 rounded-xl md:rounded-2xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all duration-200 text-sm md:text-base"
                          placeholder="Your email address"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm md:text-base font-bold text-gray-900 mb-2 md:mb-3">Your Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        className="w-full px-4 py-3 md:px-5 md:py-3.5 rounded-xl md:rounded-2xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all duration-200 resize-none text-sm md:text-base"
                        placeholder="Tell us about your requirements..."
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`group w-full py-3.5 md:py-4 px-6 rounded-xl md:rounded-2xl font-bold text-white text-sm md:text-base transition-all duration-300 flex items-center justify-center gap-2 md:gap-3 shadow-lg ${isSubmitting ? 'bg-gray-400' : 'bg-linear-to-r from-orange-600 to-orange-500 hover:shadow-orange-500/25'
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