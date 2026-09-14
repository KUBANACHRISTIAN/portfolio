import { motion } from 'framer-motion';
import { ArrowUp, Heart, Mail, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon, DribbbleIcon } from '../ui/SocialIcons';
import { personalInfo } from '../../data/portfolio';

const footerLinks = {
  Navigation: [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
  ],
  Services: [
    { label: 'Web Development', id: 'services' },
    { label: 'Mobile Apps', id: 'services' },
    { label: 'UI/UX Design', id: 'services' },
    { label: 'Cloud & DevOps', id: 'services' },
  ],
  Resources: [
    { label: 'Blog', id: 'blog' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' },
    { label: 'Download CV', id: 'about' },
  ],
};

const socials = [
  { icon: GithubIcon, href: personalInfo.social.github, label: 'GitHub' },
  { icon: LinkedinIcon, href: personalInfo.social.linkedin, label: 'LinkedIn' },
  { icon: TwitterIcon, href: personalInfo.social.twitter, label: 'Twitter' },
  { icon: DribbbleIcon, href: personalInfo.social.dribbble, label: 'Dribbble' },
];

export default function Footer() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-[#0A1628] text-slate-400 relative overflow-hidden" role="contentinfo">
      {/* Top gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#2563EB]/50 to-transparent" />

      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-blue-900/8 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 mb-14">

          {/* Brand */}
          <div>
            <button onClick={() => scrollTo('home')} className="flex items-center gap-2.5 mb-5 group" aria-label="Go to top">
              <div className="w-9 h-9 bg-gradient-to-br from-[#2563EB] to-[#7C3AED] rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-heading font-bold text-xl text-white">
                Christian<span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">.</span>
              </span>
            </button>

            <p className="text-sm leading-relaxed max-w-xs mb-6">
              Full-stack developer crafting elegant digital experiences. Available for freelance projects and full-time roles.
            </p>

            {/* Social links */}
            <div className="flex gap-2.5">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-[#2563EB] hover:text-white transition-all duration-200"
                >
                  <Icon className="w-3.5 h-3.5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-semibold text-white mb-4 text-sm">{title}</h4>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.id)}
                      className="text-sm hover:text-[#2563EB] transition-colors duration-200 text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact strip */}
        <div className="rounded-2xl bg-slate-800/50 border border-slate-700/50 p-5 flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-blue-900/50 rounded-xl flex items-center justify-center">
              <Mail className="w-4 h-4 text-[#2563EB]" />
            </div>
            <div>
              <div className="text-xs text-slate-500 uppercase tracking-wide font-semibold">Email Me</div>
              <a href={`mailto:${personalInfo.email}`} className="text-sm text-white hover:text-[#2563EB] transition-colors font-medium">
                {personalInfo.email}
              </a>
            </div>
          </div>
          <motion.button
            onClick={() => scrollTo('contact')}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary text-sm py-2.5 px-5 flex-shrink-0"
          >
            Start a Project
          </motion.button>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm flex items-center gap-1.5 flex-wrap justify-center sm:justify-start">
            © {new Date().getFullYear()} {personalInfo.name}. Made with
            <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400 mx-0.5" />
            All rights reserved.
          </p>
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 bg-gradient-to-br from-[#2563EB] to-[#7C3AED] rounded-xl flex items-center justify-center text-white shadow-[0_4px_16px_rgba(37,99,235,0.3)] hover:shadow-[0_8px_24px_rgba(37,99,235,0.4)] transition-shadow duration-200"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
