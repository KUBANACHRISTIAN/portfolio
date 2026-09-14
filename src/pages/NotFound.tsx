import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0F172A] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-md"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-8xl mb-6"
        >
          🔍
        </motion.div>
        <h1 className="font-heading text-8xl font-bold text-gradient mb-4">404</h1>
        <h2 className="font-heading text-2xl font-bold text-[#111827] dark:text-white mb-3">
          Page Not Found
        </h2>
        <p className="text-[#6B7280] dark:text-slate-400 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex gap-4 justify-center">
          <button onClick={() => navigate(-1)} className="btn-outline flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Go Back
          </button>
          <button onClick={() => navigate('/')} className="btn-primary flex items-center gap-2">
            <Home className="w-4 h-4" /> Home
          </button>
        </div>
      </motion.div>
    </div>
  );
}
