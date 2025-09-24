import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  FiMail,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiMessageCircle,
  FiSend,
  FiUser,
  FiMapPin,
} from "react-icons/fi";
import { contactInfo } from "../libs/contact";
import type { JSX } from "react";

const iconMap: Record<string, JSX.Element> = {
  Email: <FiMail className="h-6 w-6" />,
  PhoneNumber: <FiPhone className="h-6 w-6" />,
  Github: <FiGithub className="h-6 w-6" />,
  Linkedin: <FiLinkedin className="h-6 w-6" />,
  Line: <FiMessageCircle className="h-6 w-6" />,
};

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20" ref={ref}>
      <motion.div
        className="relative max-w-7xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-green-500 to-blue-600 rounded-full blur-3xl opacity-10"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full blur-3xl opacity-10"></div>
        </div>

        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </motion.h2>
          
          <motion.p
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-6"
            variants={itemVariants}
          >
            Let's collaborate and create something amazing together!
          </motion.p>
          
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mx-auto"
            variants={itemVariants}
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div variants={itemVariants} className="relative">
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-2xl">
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-blue-500/5 to-purple-500/5 rounded-3xl"></div>
              
              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <motion.div variants={itemVariants} className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiUser className="h-5 w-5 text-gray-400 group-focus-within:text-blue-400 transition-colors" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
                      placeholder="Your Name"
                      required
                    />
                  </motion.div>

                  {/* Email Input */}
                  <motion.div variants={itemVariants} className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiMail className="h-5 w-5 text-gray-400 group-focus-within:text-blue-400 transition-colors" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
                      placeholder="Your Email"
                      required
                    />
                  </motion.div>
                </div>

                {/* Subject Input */}
                <motion.div variants={itemVariants} className="relative">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
                    placeholder="Subject"
                    required
                  />
                </motion.div>

                {/* Message Textarea */}
                <motion.div variants={itemVariants} className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 resize-none"
                    placeholder="Your Message"
                    required
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="group relative w-full px-8 py-4 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-xl font-semibold text-white shadow-2xl overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  variants={itemVariants}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-green-700 via-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative flex items-center justify-center gap-2">
                    <FiSend className="w-5 h-5" />
                    Send Message
                  </span>
                  
                  {/* Ripple Effect */}
                  <motion.div
                    className="absolute inset-0 bg-white/20 rounded-xl"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map(({ title, value, link }, index) => {
                const displayValue = value && value.trim() !== "" ? value : "-";
                const formattedLink =
                  link && !link.startsWith("http") ? `https://${link}` : link;

                return (
                  <motion.div
                    key={index}
                    className="group relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    {/* Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10 flex items-center gap-4">
                      <div className="p-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl border border-green-400/30">
                        <div className="text-green-400">
                          {iconMap[title] || null}
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-semibold text-white mb-1">{title}</h3>
                        {formattedLink ? (
                          <a
                            href={formattedLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-green-400 transition-colors"
                          >
                            {displayValue}
                          </a>
                        ) : (
                          <span className="text-gray-400">{displayValue}</span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Location Card */}
            <motion.div
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6"
              variants={itemVariants}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-400/30">
                  <FiMapPin className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="font-semibold text-white">Location</h3>
              </div>
              <p className="text-gray-400">Bangkok, Thailand</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-green-400 to-blue-600 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
