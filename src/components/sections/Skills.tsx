import { useState } from 'react';
import { motion } from 'framer-motion';
import { skills, techBadges } from '../../data/portfolio';
import { SectionHeader, ProgressBar, fadeUp, stagger } from '../ui';

const categoryColors = [
  { bg: 'from-blue-500 to-indigo-600', light: 'bg-blue-50 dark:bg-blue-900/20', ring: 'ring-blue-200 dark:ring-blue-800/40' },
  { bg: 'from-violet-500 to-purple-600', light: 'bg-violet-50 dark:bg-violet-900/20', ring: 'ring-violet-200 dark:ring-violet-800/40' },
  { bg: 'from-emerald-500 to-teal-600', light: 'bg-emerald-50 dark:bg-emerald-900/20', ring: 'ring-emerald-200 dark:ring-emerald-800/40' },
  { bg: 'from-orange-500 to-amber-600', light: 'bg-orange-50 dark:bg-orange-900/20', ring: 'ring-orange-200 dark:ring-orange-800/40' },
  { bg: 'from-cyan-500 to-blue-600', light: 'bg-cyan-50 dark:bg-cyan-900/20', ring: 'ring-cyan-200 dark:ring-cyan-800/40' },
  { bg: 'from-pink-500 to-rose-600', light: 'bg-pink-50 dark:bg-pink-900/20', ring: 'ring-pink-200 dark:ring-pink-800/40' },
];

export default function Skills() {
  const [active, setActive] = useState(0);

  return (
    <section id="skills" className="py-28 bg-[#F8FAFC] dark:bg-[#060C18]" aria-labelledby="skills-heading">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeader
          id="skills-heading"
          label="Expertise"
          title="Skills & Technologies"
          subtitle="A comprehensive overview of my technical capabilities across the full development stack."
          center
        />

        {/* Category pills */}
        <div className="flex flex-wrap justify-center gap-2.5 mt-12 mb-14">
          {skills.map((cat, i) => (
            <motion.button
              key={cat.category}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-250 ${
                active === i
                  ? `bg-gradient-to-r ${categoryColors[i % categoryColors.length].bg} text-white shadow-[0_4px_20px_rgba(37,99,235,0.3)]`
                  : 'bg-white dark:bg-slate-800 text-[#64748B] dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:text-[#2563EB] hover:border-[#2563EB] dark:hover:border-blue-400 shadow-sm'
              }`}
            >
              <span className="text-base leading-none">{cat.icon}</span>
              {cat.category}
            </motion.button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 mb-20">
          {skills.map((cat, i) => {
            const color = categoryColors[i % categoryColors.length];
            return (
              <motion.div
                key={cat.category}
                animate={{
                  opacity: active === i ? 1 : 0.38,
                  scale: active === i ? 1 : 0.97,
                  y: active === i ? 0 : 6,
                }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                onClick={() => setActive(i)}
                className={`card p-6 cursor-pointer transition-all duration-300 ${
                  active === i ? `ring-2 ${color.ring} shadow-[0_8px_40px_rgba(37,99,235,0.09)]` : ''
                }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl transition-all duration-300 ${
                    active === i
                      ? `bg-gradient-to-br ${color.bg} shadow-md`
                      : `${color.light}`
                  }`}>
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-[#0F172A] dark:text-white">{cat.category}</h3>
                    <p className="text-xs text-[#94A3B8] dark:text-slate-500">{cat.items.length} technologies</p>
                  </div>
                  {active === i && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className={`ml-auto w-2 h-2 rounded-full bg-gradient-to-br ${color.bg}`}
                    />
                  )}
                </div>
                {cat.items.map(skill => (
                  <ProgressBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </motion.div>
            );
          })}
        </div>

        {/* Tech badges */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="text-center"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 section-label justify-center mb-8">
            <span className="w-6 h-px bg-gradient-to-r from-transparent to-[#2563EB]" />
            Technologies I Work With
            <span className="w-6 h-px bg-gradient-to-l from-transparent to-[#2563EB]" />
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-2.5 max-w-3xl mx-auto">
            {techBadges.map((badge, i) => (
              <motion.span
                key={badge}
                initial={{ opacity: 0, scale: 0.75, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="inline-flex items-center px-3.5 py-1.5 text-xs font-semibold rounded-full bg-white dark:bg-slate-800 text-[#374151] dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-sm hover:border-[#2563EB] hover:text-[#2563EB] hover:shadow-[0_4px_16px_rgba(37,99,235,0.15)] dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-200 cursor-default"
              >
                {badge}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
