import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../../data/portfolio';
import { SectionHeader, StarRating, fadeUp, stagger } from '../ui';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent(c => (c + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const go = (dir: number) => {
    setDirection(dir);
    setCurrent(c => (c + dir + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0, scale: 0.97 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0, scale: 0.97 }),
  };

  return (
    <section id="testimonials" className="py-28 bg-[#F8FAFC] dark:bg-[#060C18]" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeader
          id="testimonials-heading"
          label="Testimonials"
          title="What Clients Say"
          subtitle="Don't just take my word for it — hear from the people I've worked with."
          center
        />

        <div className="mt-16 grid lg:grid-cols-[1fr_1.2fr] gap-8 items-start">

          {/* Left: mini cards */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {testimonials.map((t, i) => (
              <motion.button
                key={i}
                variants={fadeUp}
                custom={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className={`text-left p-5 rounded-2xl border transition-all duration-300 ${
                  current === i
                    ? 'bg-white dark:bg-slate-800 border-[#2563EB]/30 dark:border-blue-500/30 shadow-[0_8px_32px_rgba(37,99,235,0.1)]'
                    : 'bg-white/60 dark:bg-slate-800/40 border-slate-200/60 dark:border-slate-700/40 hover:border-slate-300 dark:hover:border-slate-600'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className={`w-10 h-10 rounded-full object-cover border-2 transition-all duration-300 ${
                      current === i ? 'border-[#2563EB]' : 'border-slate-200 dark:border-slate-600'
                    }`}
                  />
                  <div>
                    <div className="font-heading font-bold text-sm text-[#0F172A] dark:text-white">{t.name}</div>
                    <div className="text-xs text-[#64748B] dark:text-slate-400">{t.role}</div>
                  </div>
                  {current === i && (
                    <motion.div
                      layoutId="active-dot"
                      className="ml-auto w-2 h-2 bg-[#2563EB] rounded-full"
                    />
                  )}
                </div>
                <p className="text-xs text-[#64748B] dark:text-slate-400 line-clamp-2 leading-relaxed">
                  "{t.text}"
                </p>
              </motion.button>
            ))}
          </motion.div>

          {/* Right: featured testimonial */}
          <div className="relative">
            {/* Quote icon */}
            <div className="absolute -top-5 -left-2 w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#7C3AED] rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25 z-10">
              <Quote className="w-5 h-5 text-white" />
            </div>

            <div className="card-premium p-8 sm:p-10 overflow-hidden min-h-[320px] flex flex-col justify-between">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col gap-6"
                >
                  <div>
                    <StarRating rating={testimonials[current].rating} />
                    <p className="text-lg sm:text-xl text-[#111827] dark:text-white leading-relaxed mt-5 font-medium">
                      "{testimonials[current].text}"
                    </p>
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-700/50">
                    <img
                      src={testimonials[current].avatar}
                      alt={testimonials[current].name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-[#2563EB] shadow-md"
                    />
                    <div>
                      <div className="font-heading font-bold text-[#111827] dark:text-white">
                        {testimonials[current].name}
                      </div>
                      <div className="text-sm text-[#6B7280] dark:text-slate-400">
                        {testimonials[current].role}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between mt-5">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                    className={`h-2 rounded-full transition-all duration-350 ${
                      i === current ? 'w-8 bg-[#2563EB]' : 'w-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <motion.button
                  onClick={() => go(-1)}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 card rounded-xl flex items-center justify-center text-[#6B7280] hover:text-[#2563EB] hover:border-[#2563EB]/30 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </motion.button>
                <motion.button
                  onClick={() => go(1)}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 card rounded-xl flex items-center justify-center text-[#6B7280] hover:text-[#2563EB] hover:border-[#2563EB]/30 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
