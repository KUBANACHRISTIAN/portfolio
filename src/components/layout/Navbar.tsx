import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X, Zap } from 'lucide-react';
import { useTheme, useActiveSection } from '../../hooks';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const { dark, toggle } = useTheme();
  const active = useActiveSection(navLinks.map(l => l.id));
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass shadow-[0_1px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_1px_40px_rgba(0,0,0,0.35)] py-3'
            : 'bg-transparent py-5'
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo('home')}
            className="flex items-center gap-3 group"
            aria-label="Go to top"
          >
            <div className="relative w-9 h-9">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#2563EB] to-[#7C3AED] rounded-xl opacity-60 blur-sm"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className="relative w-9 h-9 bg-gradient-to-br from-[#2563EB] to-[#4F46E5] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                <span className="font-heading font-black text-white text-sm">IK</span>
              </div>
            </div>
            <span className="font-heading font-bold text-lg text-[#0F172A] dark:text-white tracking-tight">
              Christian<span className="text-gradient">.</span>
            </span>
          </button>

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex items-center bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/40 rounded-2xl px-2 py-1.5 gap-0.5"
            aria-label="Main navigation"
          >
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`relative px-3.5 py-1.5 text-sm font-medium rounded-xl transition-colors duration-200 ${
                  active === link.id
                    ? 'text-[#2563EB] dark:text-blue-400'
                    : 'text-[#64748B] dark:text-slate-400 hover:text-[#0F172A] dark:hover:text-white'
                }`}
                aria-current={active === link.id ? 'page' : undefined}
              >
                {active === link.id && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-blue-50 dark:bg-blue-900/30 rounded-xl"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              className="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 flex items-center justify-center text-[#64748B] dark:text-slate-400 hover:text-[#2563EB] dark:hover:text-blue-400 hover:border-[#2563EB] dark:hover:border-blue-400 transition-all duration-200"
              aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={dark ? 'sun' : 'moon'}
                  initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.2 }}
                >
                  {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </motion.div>
              </AnimatePresence>
            </button>

            <motion.button
              onClick={() => scrollTo('contact')}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="hidden sm:flex btn-primary text-sm py-2.5 px-5 items-center gap-2"
            >
              <Zap className="w-3.5 h-3.5" />
              Let's Talk
            </motion.button>

            <button
              onClick={() => setMobileOpen(o => !o)}
              className="lg:hidden w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 flex items-center justify-center text-[#64748B] dark:text-slate-400"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={mobileOpen ? 'x' : 'menu'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-[300px] glass shadow-2xl flex flex-col pt-6 pb-8 px-6 lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-gradient-to-br from-[#2563EB] to-[#7C3AED] rounded-lg flex items-center justify-center">
                  <span className="font-heading font-black text-white text-[10px]">IK</span>
                </div>
                <span className="font-heading font-bold text-[#0F172A] dark:text-white">Menu</span>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-[#64748B] dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <nav className="flex flex-col gap-1 flex-1" aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => scrollTo(link.id)}
                  className={`text-left px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
                    active === link.id
                      ? 'bg-blue-50 dark:bg-blue-900/30 text-[#2563EB] dark:text-blue-400'
                      : 'text-[#64748B] dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:text-[#0F172A] dark:hover:text-white'
                  }`}
                  aria-current={active === link.id ? 'page' : undefined}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>

            <div className="pt-4 border-t border-slate-200/60 dark:border-slate-700/40 space-y-3">
              <button
                onClick={() => scrollTo('contact')}
                className="btn-primary w-full text-center flex items-center justify-center gap-2"
              >
                <Zap className="w-3.5 h-3.5" />
                Let's Talk
              </button>
              <button
                onClick={toggle}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm font-medium text-[#64748B] dark:text-slate-400 hover:text-[#2563EB] transition-colors"
              >
                {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                {dark ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
