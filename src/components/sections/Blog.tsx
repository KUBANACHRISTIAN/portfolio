import { motion } from 'framer-motion';
import { Clock, ArrowRight, Calendar, BookOpen } from 'lucide-react';
import { blogPosts } from '../../data/portfolio';
import { SectionHeader, fadeUp, stagger } from '../ui';

export default function Blog() {
  return (
    <section id="blog" className="py-28 bg-white dark:bg-slate-900" aria-labelledby="blog-heading">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <SectionHeader
            id="blog-heading"
            label="Blog"
            title="Latest Articles"
            subtitle="Thoughts on development, design, and the future of tech."
          />
          <motion.button
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.04 }}
            className="btn-ghost flex items-center gap-2 self-start sm:self-auto flex-shrink-0 text-sm"
          >
            View All Posts <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-3 gap-6"
        >
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.title}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="group card overflow-hidden cursor-pointer hover:shadow-[0_16px_60px_rgba(37,99,235,0.1)] dark:hover:shadow-[0_16px_60px_rgba(37,99,235,0.06)] transition-all duration-400"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-600"
                  loading="lazy"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-350" />

                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-[#2563EB] text-white text-xs font-semibold rounded-full shadow-sm">
                    {post.category}
                  </span>
                </div>

                {/* Read time overlay */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-350">
                  <span className="flex items-center gap-1.5 px-2.5 py-1 glass rounded-lg text-white text-xs font-medium border border-white/20">
                    <BookOpen className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-4 text-xs text-[#6B7280] dark:text-slate-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {post.readTime}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-[#111827] dark:text-white mb-2 group-hover:text-[#2563EB] dark:group-hover:text-blue-400 transition-colors duration-200 line-clamp-2 leading-snug">
                  {post.title}
                </h3>

                <p className="text-sm text-[#6B7280] dark:text-slate-400 line-clamp-2 mb-5 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] dark:text-blue-400 group-hover:gap-3 transition-all duration-200">
                  Read More <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
