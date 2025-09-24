import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

type Skill = {
  name: string;
  level: number;
  icon: string;
};

type SkillCardProps = {
  title: string;
  skills: Skill[];
  index: number;
};

export function SkillCard({ title, skills, index }: SkillCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut"
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      className="group relative"
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Background Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
      
      {/* Main Card */}
      <motion.div
        className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-2xl overflow-hidden"
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Floating Orb */}
        <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full blur-2xl opacity-20"></div>
        
        {/* Header */}
        <motion.div className="relative z-10 mb-6">
          <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
            {title}
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
        </motion.div>

        {/* Skills List */}
        <div className="relative z-10 space-y-4">
          {skills.map((skill, skillIndex) => (
            <motion.div
              key={skillIndex}
              variants={skillVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: (index * 0.2) + (skillIndex * 0.1) }}
              className="group/skill"
            >
              {/* Skill Header */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{skill.icon}</span>
                  <span className="text-sm font-medium text-gray-300 group-hover/skill:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
                <span className="text-xs font-bold text-blue-400">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar Container */}
              <div className="relative h-2 bg-gray-700/50 rounded-full overflow-hidden">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full"></div>
                
                {/* Progress Bar */}
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full relative overflow-hidden"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ 
                    duration: 1.5, 
                    delay: (index * 0.2) + (skillIndex * 0.1) + 0.5,
                    ease: "easeOut"
                  }}
                >
                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: (index * 0.2) + (skillIndex * 0.1) + 1,
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hover Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          initial={false}
        />
      </motion.div>
    </motion.div>
  );
}
