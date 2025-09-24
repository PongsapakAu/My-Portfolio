import { motion } from "framer-motion";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
};

export default function Container({
  children,
  className = "",
  animate = true,
}: ContainerProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  if (!animate) {
    return (
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {children}
    </motion.div>
  );
}
