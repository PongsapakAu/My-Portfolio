import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BriefcaseIcon, CalendarDaysIcon, BuildingOfficeIcon, WrenchScrewdriverIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import { Experiences } from "../libs/resumeinfo";

export default function Experience() {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experience" className="py-20" ref={ref}>
      <motion.div
        className="relative"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-orange-500 to-red-600 rounded-full blur-3xl opacity-10"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full blur-3xl opacity-10"></div>
        </div>

        {/* Main Card */}
        <motion.div
          className="relative bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden"
          variants={headerVariants}
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Gradient Background Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-red-500/5 to-yellow-500/5"></div>

          <div className="relative z-10 px-8 py-16 md:px-16 lg:px-24">
            {/* Section Header */}
            <motion.div variants={headerVariants} className="text-center mb-16">
              <motion.div
                className="inline-flex items-center gap-3 mb-4"
                variants={headerVariants}
              >
                <BriefcaseIcon className="w-8 h-8 text-orange-400" />
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  <span className="bg-gradient-to-r from-orange-400 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                    Experience
                  </span>
                </h2>
              </motion.div>
              
              <motion.div
                className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mx-auto"
                variants={headerVariants}
                initial={{ width: 0 }}
                animate={isInView ? { width: 96 } : { width: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </motion.div>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <motion.div
                className="absolute left-8 top-0 w-1 bg-gradient-to-b from-orange-500 via-red-500 to-yellow-500 rounded-full"
                initial={{ height: 0 }}
                animate={isInView ? { height: "100%" } : { height: 0 }}
                transition={{ duration: 2, delay: 0.8 }}
              />

              {/* Experience Items */}
              <div className="space-y-12">
                {Experiences.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="relative flex items-start group"
                  >
                    {/* Timeline Dot */}
                    <motion.div
                      className="absolute left-6 w-6 h-6 bg-gradient-to-r from-orange-500 to-red-600 rounded-full border-4 border-white/20 shadow-lg z-10"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: i * 0.2 + 1, type: "spring", stiffness: 300 }}
                      whileHover={{ scale: 1.2 }}
                    >
                      <div className="absolute inset-1 bg-white/30 rounded-full"></div>
                    </motion.div>

                    {/* Content Card */}
                    <motion.div
                      className="ml-20 flex-1 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 group-hover:scale-[1.02]"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        {/* Date Badge */}
                        <motion.div
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-400/30 rounded-full mb-3 sm:mb-0"
                          whileHover={{ scale: 1.05 }}
                        >
                          <CalendarDaysIcon className="w-4 h-4 text-orange-400" />
                          <span className="text-sm font-medium text-orange-300">
                            {item.yearStart} - {item.yearEnd}
                          </span>
                        </motion.div>
                      </div>

                      {/* Job Title */}
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                        {item.title}
                      </h3>

                      {/* Company & Position */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
                        <div className="flex items-center gap-2">
                          <BuildingOfficeIcon className="w-4 h-4 text-orange-400" />
                          <span className="text-gray-300 font-medium">{item.company}</span>
                        </div>
                        <span className="hidden sm:block text-gray-500">•</span>
                        <span className="text-gray-400 italic">{item.position}</span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Tools & Tech Stack */}
                      <div className="space-y-3">
                        {item.tool && (
                          <div className="flex items-start gap-2">
                            <WrenchScrewdriverIcon className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="text-orange-300 font-medium text-sm">Tools: </span>
                              <span className="text-gray-400 text-sm">{item.tool}</span>
                            </div>
                          </div>
                        )}
                        
                        {item.techStack && (
                          <div className="flex items-start gap-2">
                            <CodeBracketIcon className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="text-orange-300 font-medium text-sm">Tech Stack: </span>
                              <span className="text-gray-400 text-sm">{item.techStack}</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-orange-400 to-red-600 rounded-full"
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
