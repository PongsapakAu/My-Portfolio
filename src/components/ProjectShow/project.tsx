import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Internship, projectInfo } from "../../libs/projectinfo";
import { Descriptions } from "../../libs/resumeinfo";
import { ProjectCard } from "./projectCard";

export default function Project() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
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
    <section id="project" className="py-20" ref={ref}>
      <motion.div
        className="relative"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full blur-3xl opacity-10"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full blur-3xl opacity-10"></div>
        </div>

        {/* Section Header */}
        <motion.div variants={headerVariants} className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            variants={headerVariants}
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </motion.h2>
          
          <motion.div
            className="mx-auto mb-10 max-w-4xl space-y-3 px-2 text-center"
            variants={headerVariants}
          >
            {Descriptions.map((desc, index) => (
              <p key={index} className="text-lg text-gray-400">
                {desc.project}
              </p>
            ))}
          </motion.div>
          
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mx-auto"
            variants={headerVariants}
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Projects Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {[...Internship, ...projectInfo].map((item, index) => (
            <ProjectCard
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
              link={item.link}
              techStack={item.techStack}
              index={index}
            />
          ))}
        </div>

        {/* Floating Code Snippets */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {["{ }", "< />", "=>", "( )", "[ ]", "fn()"].map((symbol, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl font-mono text-purple-400/20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.1, 0.3, 0.1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              {symbol}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
