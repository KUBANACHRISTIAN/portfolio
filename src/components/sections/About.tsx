import { motion } from 'framer-motion';
import { Download, MapPin, Mail, Briefcase, GraduationCap, Coffee } from 'lucide-react';
import { personalInfo, education } from '../../data/portfolio';
import { SectionHeader, fadeUp, slideLeft, stagger } from '../ui';

const highlights = [
  { icon: Coffee, label: 'Coffee Consumed', value: '∞ cups' },
  { icon: Briefcase, label: 'Open to Work', value: 'Available' },
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-white dark:bg-slate-900" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Top: image + bio */}
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center mb-28">

          {/* Image */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="relative"
          >
            <div className="relative max-w-[440px] mx-auto lg:mx-0">
              {/* Decorative shapes */}
              <motion.div
                animate={{ rotate: [0, 6, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/25 dark:to-indigo-900/20 rounded-3xl -z-10"
              />
              <motion.div
                animate={{ rotate: [0, -5, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-br from-violet-100 to-purple-100 dark:from-violet-900/20 dark:to-purple-900/15 rounded-3xl -z-10"
              />

              {/* Main image */}
              <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-[0_24px_80px_rgba(0,0,0,0.1)] dark:shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Overlay card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute bottom-6 left-4 right-4"
              >
                <div className="glass rounded-2xl p-4 border border-white/60 dark:border-slate-700/50 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#2563EB] to-[#7C3AED] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-heading font-bold text-[#0F172A] dark:text-white text-sm truncate">{personalInfo.name}</div>
                      <div className="text-[#2563EB] dark:text-blue-400 text-xs font-medium truncate">{personalInfo.title}</div>
                    </div>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                      <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">Open</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Side highlights */}
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-3">
                {highlights.map(({ icon: Icon, label, value }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                    className="glass rounded-xl px-3 py-2.5 border border-white/50 dark:border-slate-700/50 shadow-lg min-w-[130px]"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-3.5 h-3.5 text-[#2563EB]" />
                      </div>
                      <div>
                        <div className="text-[9px] text-[#94A3B8] dark:text-slate-500 uppercase tracking-wide font-semibold">{label}</div>
                        <div className="text-xs font-bold text-[#0F172A] dark:text-white">{value}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <SectionHeader
              id="about-heading"
              label="About Me"
              title="Crafting digital experiences with purpose"
            />

            <motion.p variants={fadeUp} className="text-[#64748B] dark:text-slate-400 leading-relaxed mt-6 mb-5">
              {personalInfo.bio}
            </motion.p>

            <motion.p variants={fadeUp} className="text-[#64748B] dark:text-slate-400 leading-relaxed mb-8">
              I believe great software is built at the intersection of technical excellence and thoughtful design. Every line of code I write is guided by a commitment to performance, accessibility, and user delight.
            </motion.p>

            {/* Info grid */}
            <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                { icon: MapPin, label: 'Location', value: personalInfo.location },
                { icon: Mail, label: 'Email', value: personalInfo.email },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/50 group hover:border-[#2563EB]/30 dark:hover:border-blue-500/30 transition-colors duration-200">
                  <div className="w-9 h-9 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#2563EB] transition-colors duration-200">
                    <Icon className="w-4 h-4 text-[#2563EB] group-hover:text-white transition-colors duration-200" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#94A3B8] dark:text-slate-500 uppercase tracking-wider font-semibold">{label}</div>
                    <div className="text-sm font-medium text-[#0F172A] dark:text-white truncate">{value}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.a
              variants={fadeUp}
              href={personalInfo.cvUrl}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary inline-flex items-center gap-2.5"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </motion.a>
          </motion.div>
        </div>

        {/* Education */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/20 rounded-xl flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-[#2563EB]" />
            </div>
            <h3 className="font-heading font-bold text-xl text-[#0F172A] dark:text-white">Education & Certifications</h3>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -4 }}
                className="card p-6 group transition-all duration-300 hover:shadow-[0_12px_48px_rgba(37,99,235,0.1)] dark:hover:shadow-[0_12px_48px_rgba(37,99,235,0.06)]"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-violet-50 dark:from-blue-900/30 dark:to-violet-900/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-5 h-5 text-[#2563EB]" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-[#0F172A] dark:text-white mb-0.5">{edu.degree}</div>
                    <div className="text-sm text-[#64748B] dark:text-slate-400">{edu.school}</div>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-xs text-[#94A3B8] dark:text-slate-500">{edu.period}</span>
                      <span className="tag-blue">{edu.gpa}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
