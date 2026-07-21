'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, Copy } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
      onClose();
    }, 2500);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('creativsingh@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-lg rounded-3xl bg-[var(--card)] border border-[var(--line)] p-8 shadow-2xl overflow-hidden"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-serif text-3xl text-[var(--ink)]">Let&apos;s Connect</h3>
                <p className="text-sm text-[var(--ink-2)]">Send a direct note or copy email</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full border border-[var(--line)] text-[var(--ink)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center text-center space-y-4"
              >
                <div className="p-4 rounded-full bg-emerald-500/10 text-emerald-500">
                  <CheckCircle2 size={48} />
                </div>
                <h4 className="font-serif text-2xl text-[var(--ink)]">Message Sent!</h4>
                <p className="text-sm text-[var(--ink-2)] max-w-xs">
                  Thanks for reaching out. CreativSingh will reply to your inbox shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--ink-2)] mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-2)] border border-[var(--line)] text-[var(--ink)] focus:outline-none focus:border-[var(--accent)]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--ink-2)] mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-2)] border border-[var(--line)] text-[var(--ink)] focus:outline-none focus:border-[var(--accent)]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--ink-2)] mb-1">
                    Message / Project Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your product, timeline, or design needs..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-2)] border border-[var(--line)] text-[var(--ink)] focus:outline-none focus:border-[var(--accent)] resize-none"
                  />
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 py-3 px-6 rounded-full bg-[var(--accent)] text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg shadow-[var(--accent)]/30"
                  >
                    <Send size={16} />
                    Send Message
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="py-3 px-4 rounded-full border border-[var(--line)] text-[var(--ink)] text-sm font-semibold flex items-center gap-2 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                  >
                    {copied ? <CheckCircle2 size={16} className="text-emerald-500" /> : <Copy size={16} />}
                    {copied ? 'Copied!' : 'Copy Email'}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
