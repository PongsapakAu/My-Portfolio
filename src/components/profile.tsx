import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ChevronDownIcon, DocumentArrowDownIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import { Descriptions } from "../libs/resumeinfo";

export default function Profile() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
      {/* Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 w-full max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-[1.1fr,0.9fr] gap-8 md:gap-12 lg:gap-16 items-center min-h-[70vh]">
          {/* Text Content */}
          <motion.div 
            variants={itemVariants} 
            className="w-full text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            {/* Greeting */}
            <motion.div
              className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 backdrop-blur-sm mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="text-blue-300 text-sm font-medium">👋 Hello, I'm</span>
            </motion.div>

            {/* Name with Gradient */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Pongsapak
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                Junnasaksri
              </span>
            </h1>

            {/* Typing Animation */}
            <div className="h-10 sm:h-12 lg:h-14 mb-8">
              <TypeAnimation
                sequence={[
                  'Front-End Developer',
                  2000,
                  'React Enthusiast',
                  2000,
                  'UI/UX Designer',
                  2000,
                  'Creative Problem Solver',
                  2000,
                ]}
                wrapper="h2"
                speed={50}
                className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-300"
                repeat={Infinity}
              />
            </div>

            {/* Description */}
            <motion.div
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-400 mb-8 max-w-lg lg:max-w-xl mx-auto lg:mx-0"
            >
              {Descriptions.map((item, i) => (
                <p key={i} className="leading-relaxed mb-3">
                  {item.profile}
                </p>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants} 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full max-w-sm sm:max-w-none mx-auto lg:mx-0"
            >
              <motion.button
                className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-white shadow-2xl overflow-hidden text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center justify-center gap-2">
                  <DocumentArrowDownIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  Download CV
                </span>
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-xl"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.button
                className="group px-6 py-3 sm:px-8 sm:py-4 border-2 border-gray-500 hover:border-blue-500 rounded-xl font-semibold text-gray-300 hover:text-white transition-all duration-300 backdrop-blur-sm text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center justify-center gap-2">
                  <ChatBubbleLeftRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  Contact Me
                </span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end w-full mb-8 lg:mb-0"
          >
            <motion.div
              className="relative"
              animate={floatingAnimation}
            >
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-30 scale-110"></div>
              {/* Main Image */}
              <motion.img
                src="/profile/profile.png"
                alt="Profile"
                className="relative z-10 w-48 h-48 xs:w-52 xs:h-52 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-88 xl:h-88 rounded-full object-cover border-4 border-white/20 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              {/* Decorative Rings */}
              <motion.div
                className="absolute inset-0 border-2 border-blue-400/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ scale: 1.1 }}
              />
              <motion.div
                className="absolute inset-0 border-2 border-purple-400/30 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                style={{ scale: 1.2 }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ChevronDownIcon className="w-6 h-6 text-gray-400/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
