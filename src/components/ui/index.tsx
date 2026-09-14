import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

export const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: { duration: 0.55, delay: i * 0.08 },
  }),
};

export const slideLeft = {
  hidden: { opacity: 0, x: -48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export const slideRight = {
  hidden: { opacity: 0, x: 48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

interface SectionHeaderProps {
  id?: string;
  label: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export function SectionHeader({ id, label, title, subtitle, center }: SectionHeaderProps) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={center ? 'text-center' : ''}
    >
      <motion.div variants={fadeUp} className={`section-label ${center ? 'justify-center' : ''}`}>
        <span className="w-6 h-px bg-gradient-to-r from-transparent to-[#2563EB]" />
        {label}
        <span className="w-6 h-px bg-gradient-to-l from-transparent to-[#2563EB]" />
      </motion.div>
      <motion.h2 id={id} variants={fadeUp} className="section-title">
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p variants={fadeUp} className={`section-subtitle ${center ? 'mx-auto' : ''}`}>
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}

interface ProgressBarProps { name: string; level: number }
export function ProgressBar({ name, level }: ProgressBarProps) {
  return (
    <div className="mb-5">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-[#374151] dark:text-slate-300">{name}</span>
        <span className="text-sm font-bold text-[#2563EB] dark:text-blue-400">{level}%</span>
      </div>
      <div className="h-1.5 bg-slate-100 dark:bg-slate-700/80 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED]"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        />
      </div>
    </div>
  );
}

interface BadgeProps { label: string; variant?: 'blue' | 'purple' | 'green' | 'amber' | 'rose' | 'cyan' }
export function Badge({ label, variant = 'blue' }: BadgeProps) {
  const styles = {
    blue: 'bg-blue-50 dark:bg-blue-900/25 text-[#2563EB] dark:text-blue-400 border-blue-100 dark:border-blue-800/40',
    purple: 'bg-purple-50 dark:bg-purple-900/25 text-purple-600 dark:text-purple-400 border-purple-100 dark:border-purple-800/40',
    green: 'bg-emerald-50 dark:bg-emerald-900/25 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-800/40',
    amber: 'bg-amber-50 dark:bg-amber-900/25 text-amber-600 dark:text-amber-400 border-amber-100 dark:border-amber-800/40',
    rose: 'bg-rose-50 dark:bg-rose-900/25 text-rose-600 dark:text-rose-400 border-rose-100 dark:border-rose-800/40',
    cyan: 'bg-cyan-50 dark:bg-cyan-900/25 text-cyan-600 dark:text-cyan-400 border-cyan-100 dark:border-cyan-800/40',
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 text-xs font-semibold rounded-full border ${styles[variant]}`}>
      {label}
    </span>
  );
}

interface StarRatingProps { rating: number }
export function StarRating({ rating }: StarRatingProps) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`w-4 h-4 ${i < rating ? 'text-amber-400' : 'text-slate-200 dark:text-slate-600'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

interface FloatingShapeProps { className?: string; children?: ReactNode; delay?: number }
export function FloatingShape({ className, children, delay = 0 }: FloatingShapeProps) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      {children}
    </motion.div>
  );
}

export function Divider() {
  return <div className="w-12 h-1 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] rounded-full" />;
}
