import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Star } from 'lucide-react';
import { GithubIcon } from '../ui/SocialIcons';
import { projects } from '../../data/portfolio';
import { SectionHeader, scaleIn, stagger } from '../ui';

const categories = ['All', 'Web App', 'Mobile', 'AI/ML', 'Dashboard'];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-28 bg-white dark:bg-slate-900" aria-labelledby="projects-heading">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <SectionHeader
            id="projects-heading"
            label="Portfolio"
            title="Featured Projects"
            subtitle="Selected work that demonstrates my approach to building products."
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="hidden sm:flex items-center gap-2 text-sm text-[#64748B] dark:text-slate-400 flex-shrink-0"
          >
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="font-medium">{projects.filter(p => p.featured).length} Featured</span>
          </motion.div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map(cat => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setFilter(cat)}
              className={`relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                filter === cat
                  ? 'text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-[#64748B] dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {filter === cat && (
                <motion.div
                  layoutId="filter-bg"
                  className="absolute inset-0 bg-[#0F172A] dark:bg-white rounded-xl"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
              <span className={`relative z-10 ${filter === cat ? 'text-white dark:text-[#0F172A]' : ''}`}>{cat}</span>
            </motion.button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.article
                key={project.title}
                variants={scaleIn}
                custom={i}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                className="group card overflow-hidden hover:shadow-[0_16px_60px_rgba(37,99,235,0.13)] dark:hover:shadow-[0_16px_60px_rgba(37,99,235,0.07)] transition-all duration-400 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-[#0F172A]/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-350" />

                  {/* Action buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-350 translate-y-3 group-hover:translate-y-0">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-11 h-11 bg-white/95 backdrop-blur-sm rounded-xl flex items-center justify-center text-[#0F172A] shadow-lg hover:bg-white transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <GithubIcon className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-11 h-11 bg-[#2563EB] rounded-xl flex items-center justify-center text-white shadow-lg hover:bg-[#1d4ed8] transition-colors"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    {project.featured && (
                      <span className="flex items-center gap-1 px-2.5 py-1 bg-[#2563EB] text-white text-[10px] font-bold rounded-lg uppercase tracking-wide">
                        <Star className="w-2.5 h-2.5 fill-white" /> Featured
                      </span>
                    )}
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 glass text-[#0F172A] dark:text-white text-[10px] font-semibold rounded-lg border border-white/30">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-heading font-bold text-[#0F172A] dark:text-white group-hover:text-[#2563EB] dark:group-hover:text-blue-400 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-[#94A3B8] dark:text-slate-500 flex-shrink-0 mt-0.5 group-hover:text-[#2563EB] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                  </div>

                  <p className="text-sm text-[#64748B] dark:text-slate-400 leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.slice(0, 4).map(t => (
                      <span key={t} className="px-2 py-0.5 text-[10px] font-semibold bg-slate-50 dark:bg-slate-700/60 text-[#64748B] dark:text-slate-400 rounded-md border border-slate-100 dark:border-slate-600/50">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-0.5 text-[10px] font-semibold bg-slate-50 dark:bg-slate-700/60 text-[#94A3B8] dark:text-slate-500 rounded-md border border-slate-100 dark:border-slate-600/50">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-700/50">
                    <a
                      href={project.github}
                      className="flex items-center gap-1.5 text-xs font-semibold text-[#64748B] dark:text-slate-400 hover:text-[#2563EB] dark:hover:text-blue-400 transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" /> Source
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-1.5 text-xs font-semibold text-[#64748B] dark:text-slate-400 hover:text-[#2563EB] dark:hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
