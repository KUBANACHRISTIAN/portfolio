import { motion } from 'framer-motion';
import { MapPin, Calendar, Briefcase } from 'lucide-react';
import { experience } from '../../data/portfolio';
import { SectionHeader, fadeUp, stagger } from '../ui';

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-[#F8FAFC] dark:bg-[#060C18]" aria-labelledby="experience-heading">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <SectionHeader
          id="experience-heading"
          label="Work History"
          title="Professional Experience"
          subtitle="Building impactful products across startups and established companies."
          center
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="relative mt-16"
        >
          {/* Timeline track */}
          <div className="absolute left-[27px] sm:left-[35px] top-2 bottom-2 w-px">
            <div className="w-full h-full bg-gradient-to-b from-[#2563EB] via-[#7C3AED] to-transparent opacity-40" />
          </div>

          <div className="space-y-8">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                className="relative flex gap-6 sm:gap-10 group"
              >
                {/* Icon node */}
                <div className="relative flex-shrink-0 z-10">
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    className="w-14 h-14 sm:w-[70px] sm:h-[70px] bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 group-hover:border-[#2563EB] dark:group-hover:border-blue-500 rounded-2xl flex items-center justify-center text-2xl shadow-sm group-hover:shadow-[0_4px_24px_rgba(37,99,235,0.18)] transition-all duration-300"
                  >
                    {exp.logo}
                  </motion.div>
                  {/* Active dot */}
                  {i === 0 && (
                    <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-white dark:border-slate-800 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 bg-white rounded-full" />
                    </span>
                  )}
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="flex-1 card p-6 sm:p-7 transition-all duration-300 group-hover:shadow-[0_12px_48px_rgba(37,99,235,0.09)] dark:group-hover:shadow-[0_12px_48px_rgba(37,99,235,0.05)]"
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-heading font-bold text-xl text-[#0F172A] dark:text-white mb-1">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[#2563EB] dark:text-blue-400 font-semibold text-sm">{exp.company}</span>
                        <span className="text-[#CBD5E1] dark:text-slate-600">·</span>
                        <span className="flex items-center gap-1 text-xs text-[#94A3B8] dark:text-slate-500">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 dark:bg-slate-700/50 rounded-xl border border-slate-100 dark:border-slate-600/50 flex-shrink-0">
                      <Calendar className="w-3 h-3 text-[#94A3B8]" />
                      <span className="text-xs font-semibold text-[#64748B] dark:text-slate-400">{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-[#64748B] dark:text-slate-400 text-sm leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map(t => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs font-semibold bg-blue-50 dark:bg-blue-900/20 text-[#2563EB] dark:text-blue-400 rounded-lg border border-blue-100 dark:border-blue-800/30 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-150"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* End node */}
          <motion.div
            variants={fadeUp}
            className="relative flex gap-6 sm:gap-10 mt-8"
          >
            <div className="flex-shrink-0 z-10">
              <div className="w-14 h-14 sm:w-[70px] sm:h-[70px] bg-gradient-to-br from-blue-50 to-violet-50 dark:from-blue-900/20 dark:to-violet-900/15 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-[#94A3B8] dark:text-slate-500" />
              </div>
            </div>
            <div className="flex-1 flex items-center">
              <p className="text-sm text-[#94A3B8] dark:text-slate-500 italic">
                And the journey continues...
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
