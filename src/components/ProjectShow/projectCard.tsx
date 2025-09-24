import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from "@heroicons/react/24/outline";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
  techStack?: string[];
  index: number;
};

export function ProjectCard({
  title,
  description,
  image,
  link,
  techStack,
  index,
}: ProjectCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      className="group relative perspective-1000"
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-all duration-700"></div>
      
      {/* Main Card */}
      <motion.div
        className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden shadow-2xl"
        whileHover={{ 
          scale: 1.02, 
          rotateY: 5,
          z: 50,
        }}
        transition={{ 
          type: "spring", 
          stiffness: 300,
          damping: 20 
        }}
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-red-500/5"></div>
        
        {/* Image Container */}
        {image && (
          <div className="relative overflow-hidden">
            <motion.img
              src={image}
              alt={title}
              className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110"
              whileHover={{ scale: 1.1 }}
            />
            
            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Floating Action Buttons */}
            <motion.div
              className="absolute top-4 right-4 flex gap-2"
              initial={{ opacity: 0, scale: 0 }}
              whileHover={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <motion.button
                className="p-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ArrowTopRightOnSquareIcon className="w-4 h-4 text-white" />
              </motion.button>
              <motion.button
                className="p-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <CodeBracketIcon className="w-4 h-4 text-white" />
              </motion.button>
            </motion.div>
          </div>
        )}

        {/* Content */}
        <div className="relative z-10 p-6">
          {/* Title */}
          <motion.h3
            className="text-xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            {title}
          </motion.h3>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3 group-hover:text-gray-300 transition-colors">
            {description || "No description provided."}
          </p>

          {/* Tech Stack */}
          {techStack && (
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, i) => (
                  <motion.span
                    key={i}
                    className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-full text-purple-200 hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ delay: (index * 0.2) + (i * 0.1) + 0.5 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3">
            {link && (
              <motion.a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 group/btn relative overflow-hidden px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-white text-sm text-center transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                  View Demo
                </span>
                
                {/* Ripple Effect */}
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-lg"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            )}
            
            <motion.button
              className="px-4 py-2 border border-gray-500 hover:border-purple-400 rounded-lg font-semibold text-gray-300 hover:text-white text-sm transition-all duration-300 hover:bg-purple-500/10"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <CodeBracketIcon className="w-4 h-4 inline mr-2" />
              Code
            </motion.button>
          </div>
        </div>

        {/* Shine Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 3,
          }}
        />
      </motion.div>
    </motion.div>
  );
}
