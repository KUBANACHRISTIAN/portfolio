import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { services } from '../../data/portfolio';
import { SectionHeader, fadeUp, stagger } from '../ui';

const gradients = [
  { from: 'from-blue-500', to: 'to-indigo-600', glow: 'rgba(37,99,235,0.25)', light: 'from-blue-50/80 to-indigo-50/60 dark:from-blue-900/10 dark:to-indigo-900/8' },
  { from: 'from-violet-500', to: 'to-purple-600', glow: 'rgba(124,58,237,0.25)', light: 'from-violet-50/80 to-purple-50/60 dark:from-violet-900/10 dark:to-purple-900/8' },
  { from: 'from-emerald-500', to: 'to-teal-600', glow: 'rgba(16,185,129,0.25)', light: 'from-emerald-50/80 to-teal-50/60 dark:from-emerald-900/10 dark:to-teal-900/8' },
  { from: 'from-orange-500', to: 'to-amber-600', glow: 'rgba(245,158,11,0.25)', light: 'from-orange-50/80 to-amber-50/60 dark:from-orange-900/10 dark:to-amber-900/8' },
  { from: 'from-pink-500', to: 'to-rose-600', glow: 'rgba(236,72,153,0.25)', light: 'from-pink-50/80 to-rose-50/60 dark:from-pink-900/10 dark:to-rose-900/8' },
  { from: 'from-cyan-500', to: 'to-blue-600', glow: 'rgba(6,182,212,0.25)', light: 'from-cyan-50/80 to-blue-50/60 dark:from-cyan-900/10 dark:to-blue-900/8' },
];

export default function Services() {
  return (
    <section id="services" className="py-28 bg-white dark:bg-slate-900" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-end mb-14">
          <SectionHeader
            id="services-heading"
            label="What I Do"
            title="Services I Offer"
            subtitle="End-to-end solutions from concept to deployment, tailored to your goals."
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            <div className="card px-6 py-4 text-center">
              <div className="font-heading font-bold text-2xl text-[#0F172A] dark:text-white">6</div>
              <div className="text-xs text-[#64748B] dark:text-slate-400 mt-0.5">Core Services</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service, i) => {
            const g = gradients[i % gradients.length];
            return (
              <motion.div
                key={service.title}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="group card p-7 cursor-pointer relative overflow-hidden"
              >
                {/* Hover gradient bg */}
                <div className={`absolute inset-0 bg-gradient-to-br ${g.light} opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl`} />

                <div className="relative">
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-br ${g.from} ${g.to} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-350`}>
                      {service.icon}
                    </div>
                    <motion.div
                      className={`absolute inset-0 w-14 h-14 bg-gradient-to-br ${g.from} ${g.to} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-350`}
                    />
                  </div>

                  <h3 className="font-heading font-bold text-lg text-[#0F172A] dark:text-white mb-3 group-hover:text-[#2563EB] dark:group-hover:text-blue-400 transition-colors duration-200">
                    {service.title}
                  </h3>

                  <p className="text-[#64748B] dark:text-slate-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm font-semibold text-[#2563EB] dark:text-blue-400 group-hover:gap-3 transition-all duration-200">
                    Learn More
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14 rounded-3xl bg-gradient-to-r from-[#0F172A] to-[#1E293B] dark:from-slate-800 dark:to-slate-900 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-700/50"
        >
          <div>
            <h3 className="font-heading font-bold text-xl text-white mb-1">Ready to start a project?</h3>
            <p className="text-slate-400 text-sm">Let's discuss your ideas and build something amazing together.</p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="flex items-center gap-1.5 text-emerald-400 text-sm font-medium">
              <CheckCircle2 className="w-4 h-4" />
              Available Now
            </div>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
