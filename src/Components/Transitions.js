import { motion } from 'framer-motion';

export default function Transitions({ children }) {
  return (
    <motion.div initial={{ opacity: 0,  duration: 1}}
    animate={{ opacity: 1, duration: 0.3 }}
    exit={{ opacity: 0, x: 200, duration: 0.5 }}
    transition= {{
      duration: 0.9,
      ease: [0.87, 0, 0.13, 1],
    }}>
    {children}
  </motion.div>
  );
}