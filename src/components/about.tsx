import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Descriptions } from "../libs/resumeinfo";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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

  return (
    <section id="about" className="py-20" ref={ref}>
      <motion.div
        className="relative"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Background Glassmorphism Card */}
        <motion.div
          className="relative bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Gradient Background Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
          
          {/* Floating Orbs */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-r from-pink-400 to-red-600 rounded-full blur-3xl opacity-20"></div>

          <div className="relative z-10 px-8 py-16 md:px-16 lg:px-24">
            {/* Section Header */}
            <motion.div variants={itemVariants} className="text-center mb-16">
              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                variants={itemVariants}
              >
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  About Me
                </span>
              </motion.h2>
              
              <motion.div
                className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"
                variants={itemVariants}
                initial={{ width: 0 }}
                animate={isInView ? { width: 96 } : { width: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </motion.div>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Profile Image */}
              <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
                <div className="relative">
                  {/* Glowing Ring */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-2xl opacity-30"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  <motion.img
                    src="/profile/profile.png"
                    alt="Profile"
                    className="relative z-10 w-64 h-80 md:w-72 md:h-96 object-cover rounded-2xl border border-white/20 shadow-2xl"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </div>
              </motion.div>

              {/* Text Content */}
              <motion.div variants={itemVariants} className="space-y-6">
                {Descriptions.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group"
                  >
                    <motion.p
                      className="text-lg md:text-xl leading-relaxed text-gray-300 group-hover:text-white transition-colors duration-300"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {item.aboutMe}
                    </motion.p>
                  </motion.div>
                ))}

                {/* Stats Cards */}
                <motion.div
                  variants={itemVariants}
                  className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12"
                >
                  {[
                    { label: "Projects", value: "15+" },
                    { label: "Experience", value: "2+ Years" },
                    { label: "Technologies", value: "10+" },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
