import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Download, ArrowRight, Sparkles, Layers, Cpu } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../ui/SocialIcons';
import { personalInfo, stats } from '../../data/portfolio';
import { useCounter } from '../../hooks';
import { FloatingShape } from '../ui';

const roles = ['Full-Stack Developer', 'UI/UX Designer', 'Cloud Architect', 'AI Engineer'];

function TypeWriter() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[idx];
    const speed = deleting ? 38 : 72;
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) setTimeout(() => setDeleting(true), 2200);
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDeleting(false);
          setIdx(i => (i + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, idx]);

  return (
    <span className="text-gradient">
      {text}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.55, repeat: Infinity, repeatType: 'reverse' }}
        className="inline-block w-0.5 h-8 bg-[#2563EB] ml-0.5 align-middle"
      />
    </span>
  );
}

function StatCard({ label, value, suffix }: { label: string; value: number; suffix: string }) {
  const { count, ref } = useCounter(value, 2200);
  return (
    <div ref={ref} className="flex flex-col items-center">
      <span className="font-heading text-3xl font-bold text-[#0F172A] dark:text-white tabular-nums">
        {count}{suffix}
      </span>
      <span className="text-xs text-[#64748B] dark:text-slate-400 mt-0.5 text-center leading-tight">{label}</span>
    </div>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, -80]);
  const y2 = useTransform(scrollY, [0, 600], [0, -40]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#F8FAFC] dark:bg-[#060C18]"
      aria-label="Hero section"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 dark:opacity-20" />
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Animated gradient orbs */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] pointer-events-none"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400/15 via-indigo-400/10 to-transparent dark:from-blue-600/12 dark:via-indigo-600/8 blur-3xl animate-blob" />
      </motion.div>
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] pointer-events-none"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-tr from-violet-400/12 via-purple-400/8 to-transparent dark:from-violet-600/10 dark:via-purple-600/6 blur-3xl animate-blob-slow" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-[1fr_440px] xl:grid-cols-[1fr_500px] gap-12 xl:gap-20 items-center">

          {/* ── Left column ── */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            {/* Status badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2.5 px-4 py-2 glass rounded-full text-sm font-medium text-[#374151] dark:text-slate-300 mb-8 border border-slate-200/60 dark:border-slate-700/40 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Available for new projects
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-heading text-5xl sm:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight text-[#0F172A] dark:text-white mb-5"
            >
              Hi, I'm{' '}
              <span className="relative inline-block">
                <span className="text-gradient">{personalInfo.name}</span>
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] rounded-full"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.9, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                />
              </span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              variants={itemVariants}
              className="font-heading text-2xl sm:text-3xl font-semibold text-[#64748B] dark:text-slate-400 mb-6 h-10 flex items-center"
            >
              <TypeWriter />
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={itemVariants}
              className="text-[#64748B] dark:text-slate-400 text-lg leading-relaxed mb-10 max-w-[520px]"
            >
              {personalInfo.bio}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-10">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary flex items-center gap-2.5"
              >
                View My Work
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                href={personalInfo.cvUrl}
                className="btn-ghost flex items-center gap-2.5"
              >
                <Download className="w-4 h-4" />
                Download CV
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <span className="text-xs text-[#94A3B8] dark:text-slate-500 font-medium uppercase tracking-wider">Follow</span>
              <div className="w-8 h-px bg-slate-200 dark:bg-slate-700" />
              {[
                { Icon: GithubIcon, href: personalInfo.social.github, label: 'GitHub' },
                { Icon: LinkedinIcon, href: personalInfo.social.linkedin, label: 'LinkedIn' },
                { Icon: TwitterIcon, href: personalInfo.social.twitter, label: 'Twitter' },
              ].map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 flex items-center justify-center text-[#64748B] dark:text-slate-400 hover:text-[#2563EB] hover:border-[#2563EB] dark:hover:text-blue-400 dark:hover:border-blue-400 transition-all duration-200 shadow-sm"
                >
                  <Icon className="w-3.5 h-3.5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right column ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Rotating rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-[-24px] rounded-full border border-dashed border-blue-200/50 dark:border-blue-800/35"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-[-48px] rounded-full border border-dashed border-violet-200/35 dark:border-violet-800/25"
            />

            {/* Avatar container */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 xl:w-[400px] xl:h-[400px]">
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2563EB]/25 to-[#7C3AED]/20 blur-3xl scale-110" />

              {/* Avatar */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-[0_24px_80px_rgba(37,99,235,0.22)]">
                <img
                  src={personalInfo.avatar}
                  alt={`${personalInfo.name} — ${personalInfo.title}`}
                  className="w-full h-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>

{/* Floating card — bottom left */}
              <FloatingShape delay={1.6} className="absolute -bottom-3 -left-6 sm:-left-12">
                <div className="glass rounded-2xl px-4 py-3 shadow-xl border border-white/50 dark:border-slate-700/50 min-w-[140px]">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                      <Layers className="w-3 h-3 text-white" />
                    </div>
                    <div className="text-[10px] text-[#64748B] dark:text-slate-400 uppercase tracking-wide font-semibold">Projects</div>
                  </div>
                  <div className="font-heading font-bold text-[#0F172A] dark:text-white text-sm">12+ Done</div>
                  <div className="w-full h-1 bg-slate-100 dark:bg-slate-700 rounded-full mt-1.5 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '85%' }}
                      transition={{ delay: 1.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </div>
              </FloatingShape>

              {/* Floating badge — left middle */}
              <FloatingShape delay={0.9} className="absolute top-1/2 -translate-y-1/2 -left-8 sm:-left-16">
                <div className="glass rounded-2xl p-3 shadow-lg border border-white/50 dark:border-slate-700/50">
                  <div className="w-9 h-9 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-md">
                    <Cpu className="w-4 h-4 text-white" />
                  </div>
                </div>
              </FloatingShape>
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 pt-10 border-t border-slate-200/60 dark:border-slate-800"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-2xl">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.1, duration: 0.55 }}
              >
                <StatCard {...s} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#94A3B8] dark:text-slate-600 hover:text-[#2563EB] dark:hover:text-blue-400 transition-colors group"
        aria-label="Scroll to about section"
      >
        <span className="text-[10px] font-semibold uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border-2 border-current flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 bg-current rounded-full" />
        </motion.div>
      </motion.button>
    </section>
  );
}
