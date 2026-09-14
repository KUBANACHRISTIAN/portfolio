import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../ui/SocialIcons';
import { personalInfo } from '../../data/portfolio';
import { SectionHeader, fadeUp, stagger } from '../ui';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email address';
    if (!form.subject.trim()) e.subject = 'Subject is required';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    await new Promise(r => setTimeout(r, 1600));
    setLoading(false);
    setSent(true);
    setTimeout(() => setSent(false), 5000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const contactItems = [
    { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: MapPin, label: 'Location', value: personalInfo.location, href: '#' },
  ];

  const socials = [
    { icon: GithubIcon, href: personalInfo.social.github, label: 'GitHub' },
    { icon: LinkedinIcon, href: personalInfo.social.linkedin, label: 'LinkedIn' },
    { icon: TwitterIcon, href: personalInfo.social.twitter, label: 'Twitter' },
  ];

  return (
    <section id="contact" className="py-28 bg-[#F8FAFC] dark:bg-[#060C18] relative overflow-hidden" aria-labelledby="contact-heading">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 dark:opacity-15" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-blue-100/40 to-transparent dark:from-blue-900/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeader
          id="contact-heading"
          label="Get In Touch"
          title="Let's Work Together"
          subtitle="Have a project in mind? I'd love to hear about it. Let's create something amazing together."
          center
        />

        <div className="grid lg:grid-cols-[420px_1fr] gap-10 mt-14">
          {/* Left: Info */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-5"
          >
            {/* Availability card */}
            <motion.div variants={fadeUp} className="card-premium p-6 bg-gradient-to-br from-[#0F172A] to-[#1E293B] dark:from-slate-800 dark:to-slate-900 border-slate-700/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#2563EB] to-[#7C3AED] rounded-xl flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-heading font-bold text-white text-sm">Open to Work</div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-xs text-emerald-400 font-medium">Available for projects</span>
                  </div>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                I'm currently available for freelance work and full-time opportunities. Let's build something great together.
              </p>
            </motion.div>

            {/* Contact info */}
            <motion.div variants={fadeUp} className="card p-6">
              <h3 className="font-heading font-bold text-lg text-[#111827] dark:text-white mb-5">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactItems.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-11 h-11 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center group-hover:bg-[#2563EB] transition-colors duration-200 flex-shrink-0">
                      <Icon className="w-4 h-4 text-[#2563EB] group-hover:text-white transition-colors duration-200" />
                    </div>
                    <div>
                      <div className="text-[10px] text-[#6B7280] dark:text-slate-400 uppercase tracking-wide font-semibold">{label}</div>
                      <div className="font-medium text-[#111827] dark:text-white group-hover:text-[#2563EB] dark:group-hover:text-blue-400 transition-colors duration-200 text-sm">
                        {value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Social */}
            <motion.div variants={fadeUp} className="card p-5">
              <h3 className="font-heading font-semibold text-[#111827] dark:text-white mb-4 text-sm">
                Follow Me
              </h3>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-11 h-11 bg-slate-50 dark:bg-slate-700 rounded-xl flex items-center justify-center text-[#6B7280] dark:text-slate-400 hover:bg-[#2563EB] hover:text-white transition-all duration-200"
                    aria-label={label}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <form onSubmit={handleSubmit} className="card-premium p-8" noValidate>
              <h3 className="font-heading font-bold text-xl text-[#111827] dark:text-white mb-6">
                Send a Message
              </h3>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-[#374151] dark:text-slate-300 mb-1.5">
                    Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    placeholder="John Doe"
                    className={`input-field ${errors.name ? 'border-red-400 focus:ring-red-400/40 focus:border-red-400' : ''}`}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && <p id="name-error" className="text-xs text-red-400 mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-[#374151] dark:text-slate-300 mb-1.5">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    placeholder="john@example.com"
                    className={`input-field ${errors.email ? 'border-red-400 focus:ring-red-400/40 focus:border-red-400' : ''}`}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && <p id="email-error" className="text-xs text-red-400 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="contact-subject" className="block text-sm font-medium text-[#374151] dark:text-slate-300 mb-1.5">
                  Subject <span className="text-red-400">*</span>
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={form.subject}
                  onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                  placeholder="Project Inquiry"
                  className={`input-field ${errors.subject ? 'border-red-400 focus:ring-red-400/40 focus:border-red-400' : ''}`}
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                />
                {errors.subject && <p id="subject-error" className="text-xs text-red-400 mt-1">{errors.subject}</p>}
              </div>

              <div className="mb-6">
                <label htmlFor="contact-message" className="block text-sm font-medium text-[#374151] dark:text-slate-300 mb-1.5">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  placeholder="Tell me about your project..."
                  className={`input-field resize-none ${errors.message ? 'border-red-400 focus:ring-red-400/40 focus:border-red-400' : ''}`}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && <p id="message-error" className="text-xs text-red-400 mt-1">{errors.message}</p>}
              </div>

              <motion.button
                type="submit"
                disabled={loading || sent}
                whileHover={!loading && !sent ? { scale: 1.02 } : {}}
                whileTap={!loading && !sent ? { scale: 0.98 } : {}}
                className={`w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-semibold transition-all duration-300 ${
                  sent
                    ? 'bg-emerald-500 text-white shadow-[0_8px_24px_rgba(16,185,129,0.3)]'
                    : loading
                    ? 'bg-[#2563EB]/80 text-white cursor-wait'
                    : 'btn-primary'
                }`}
              >
                <AnimatePresence mode="wait">
                  {sent ? (
                    <motion.span
                      key="sent"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle className="w-4 h-4" /> Message Sent!
                    </motion.span>
                  ) : loading ? (
                    <motion.span key="loading" className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </motion.span>
                  ) : (
                    <motion.span key="idle" className="flex items-center gap-2">
                      <Send className="w-4 h-4" /> Send Message
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
