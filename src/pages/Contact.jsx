import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
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
    data.append('_next', `${window.location.origin}/thank-you`);
    data.append('_autoresponse', 'Thank you for contacting NS INC Exports. We have received your message and will get back to you shortly.');

    fetch('https://formsubmit.co/nsinc.exports@gmail.com', {
      method: 'POST',
      body: data
    }).then(() => {
      window.location.href = `${window.location.origin}/thank-you`;
    }).catch(() => {
      alert('Error submitting form. Please try again.');
      setIsSubmitting(false);
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Number',
      value: '+91 98334 52921',
      link: 'tel:+919833452921',
      linear: 'from-orange-600 to-orange-500',
      bgColor: 'from-orange-50 to-orange-100/50'
    },
    {
      icon: Mail,
      title: 'Email Address',
      value: 'nsinc.exports@gmail.com',
      link: 'mailto:nsinc.exports@gmail.com',
      linear: 'from-green-600 to-green-500',
      bgColor: 'from-green-50 to-green-100/50'
    },
    {
      icon: MapPin,
      title: 'Office Address',
      value: 'Teachers colony Bus Stop, Service Road, Western Express Hwy, near Janadhar Foundation, Khar East, Mumbai, Maharashtra 400051',
      link: 'https://maps.app.goo.gl/kKySEWVP2LSWAuUZ9',
      linear: 'from-gray-600 to-gray-500',
      bgColor: 'from-gray-50 to-gray-100/50'
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 via-white to-gray-50 py-12 md:py-16">
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
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          <div className="space-y-6 md:space-y-7">
            <div className="space-y-4 md:space-y-5">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block"
                >
                  <div className={`absolute -inset-2 bg-linear-to-r ${item.linear} rounded-2xl md:rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  
                  <div className={`relative flex items-start gap-4 md:gap-5 bg-linear-to-br ${item.bgColor} p-5 md:p-6 rounded-2xl md:rounded-3xl border border-gray-200 group-hover:border-transparent shadow-sm group-hover:shadow-xl transition-all duration-300`}>
                    <div className={`p-3 md:p-3.5 rounded-xl md:rounded-2xl bg-linear-to-br ${item.linear} shrink-0 shadow-lg`}>
                      <item.icon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg mb-1 md:mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed wrap-break-word">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="relative group">
              <div className="absolute -inset-2 bg-linear-to-r from-orange-600 to-green-600 rounded-2xl md:rounded-3xl blur-xl opacity-20"></div>
              
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.9029853873512!2d72.8462811!3d19.0680026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c925a363d081%3A0xa3efd0140cba6b36!2sNS%20INC!5e0!3m2!1sen!2sin!4v1765999032994!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="NS INC Location"
                  className="w-full h-64 sm:h-72 md:h-80 lg:h-96"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-linear-to-r from-orange-600 to-green-600 rounded-2xl md:rounded-3xl blur-2xl opacity-10"></div>
            
            <div className="relative bg-white rounded-2xl md:rounded-3xl shadow-xl p-6 md:p-8 border border-gray-100">
              <div className="mb-6 md:mb-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-3">
                  Send us a Message
                </h2>
                <p className="text-sm md:text-base text-gray-600">
                  Fill out the form below and we'll get back to you shortly.
                </p>
              </div>

              <div className="space-y-5 md:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm md:text-base font-bold text-gray-900 mb-2 md:mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete='name'
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 md:px-5 md:py-3.5 rounded-xl md:rounded-2xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all duration-200 text-sm md:text-base"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm md:text-base font-bold text-gray-900 mb-2 md:mb-3">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      autoComplete='phone'
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 md:px-5 md:py-3.5 rounded-xl md:rounded-2xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all duration-200 text-sm md:text-base"
                      placeholder="Your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm md:text-base font-bold text-gray-900 mb-2 md:mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete='email'
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 md:px-5 md:py-3.5 rounded-xl md:rounded-2xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all duration-200 text-sm md:text-base"
                      placeholder="Your email address"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm md:text-base font-bold text-gray-900 mb-2 md:mb-3">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    autoComplete='off'
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 md:px-5 md:py-3.5 rounded-xl md:rounded-2xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all duration-200 resize-none text-sm md:text-base"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`group w-full py-3.5 md:py-4 px-6 rounded-xl md:rounded-2xl font-bold text-white text-sm md:text-base transition-all duration-300 flex items-center justify-center gap-2 md:gap-3 shadow-lg hover:shadow-xl ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-linear-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 md:h-6 md:w-6 border-3 border-white border-t-transparent"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 text-green-600 text-sm md:text-base opacity-0">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5" />
                  Message sent successfully!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}