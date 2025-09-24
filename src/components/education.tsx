import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AcademicCapIcon, CalendarDaysIcon } from "@heroicons/react/24/outline";
import { education } from "../libs/resumeinfo";

export default function Education() {
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
    <section id="education" className="py-20" ref={ref}>
      <motion.div
        className="relative"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full blur-3xl opacity-10"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full blur-3xl opacity-10"></div>
        </div>

        {/* Main Card */}
        <motion.div
          className="relative bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden"
          variants={headerVariants}
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Gradient Background Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-teal-500/5 to-blue-500/5"></div>

          <div className="relative z-10 px-8 py-16 md:px-16 lg:px-24">
            {/* Section Header */}
            <motion.div variants={headerVariants} className="text-center mb-16">
              <motion.div
                className="inline-flex items-center gap-3 mb-4"
                variants={headerVariants}
              >
                <AcademicCapIcon className="w-8 h-8 text-emerald-400" />
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-blue-500 bg-clip-text text-transparent">
                    Education
                  </span>
                </h2>
              </motion.div>
              
              <motion.div
                className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mx-auto"
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
                className="absolute left-8 top-0 w-1 bg-gradient-to-b from-emerald-500 via-teal-500 to-blue-500 rounded-full"
                initial={{ height: 0 }}
                animate={isInView ? { height: "100%" } : { height: 0 }}
                transition={{ duration: 2, delay: 0.8 }}
              />

              {/* Education Items */}
              <div className="space-y-12">
                {education.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="relative flex items-center group"
                  >
                    {/* Timeline Dot */}
                    <motion.div
                      className="absolute left-6 w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full border-4 border-white/20 shadow-lg z-10"
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
                      {/* Date Badge */}
                      <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-400/30 rounded-full mb-4"
                        whileHover={{ scale: 1.05 }}
                      >
                        <CalendarDaysIcon className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm font-medium text-emerald-300">
                          {item.yearStart} - {item.yearEnd}
                        </span>
                      </motion.div>

                      {/* Education Details */}
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                        {item.educationName}
                      </h3>
                      
                      <p className="text-gray-300 font-medium mb-1">
                        {item.faculty}
                      </p>
                      
                      <p className="text-gray-400">
                        {item.branch}
                      </p>

                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
              className="absolute w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-600 rounded-full"
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
