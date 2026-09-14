import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[9999] bg-[#060C18] flex flex-col items-center justify-center"
      aria-label="Loading"
      role="status"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-900/15 via-transparent to-transparent" />

      <motion.div
        initial={{ scale: 0.6, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex flex-col items-center gap-7"
      >
        {/* Logo */}
        <div className="relative">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#2563EB] to-[#7C3AED] rounded-2xl blur-xl opacity-50"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="relative w-16 h-16 bg-gradient-to-br from-[#2563EB] to-[#7C3AED] rounded-2xl flex items-center justify-center shadow-2xl">
            <Code2 className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Name */}
        <div className="font-heading text-2xl font-bold text-white">
          Christian<span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">.</span>
        </div>

        {/* Progress bar */}
        <div className="w-52 h-1 bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#EC4899] rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
        </div>

        {/* Loading text */}
        <motion.p
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="text-xs text-slate-500 uppercase tracking-widest font-medium"
        >
          Loading...
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
