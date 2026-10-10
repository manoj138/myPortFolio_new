import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Mail, Copy, Send, Check, AlertCircle, ArrowUpRight, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      if (onShowToast) onShowToast('Email address copied to clipboard!', 'success');
      
      // Subtle confetti blast
      try {
        confetti({
          particleCount: 35,
          spread: 50,
          origin: { y: 0.8 },
          colors: ['#c3f36b', '#9bcf3d', '#ffffff']
        });
      } catch (_) {}

      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      if (onShowToast) onShowToast(`Email: ${PERSONAL_INFO.email}`, 'info');
    }
  };

  const validateForm = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide your name (min 2 characters).';
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Please specify a subject.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please write a message (at least 10 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setStatusMessage('Please fix the errors above before sending.');
      return;
    }

    setIsSubmitting(true);
    setStatusMessage('Sending message...');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Direct EmailJS send if environment variables exist
    if (serviceId && templateId && publicKey) {
      try {
        const templateParams = {
          from_name: formData.name,
          name: formData.name,
          from_email: formData.email,
          email: formData.email,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: PERSONAL_INFO.name,
        };

        const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);

        setIsSubmitting(false);
        setStatusMessage('Message sent successfully! Thank you for reaching out.');
        if (onShowToast) onShowToast('Message sent successfully via EmailJS!', 'success');
        
        try {
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.7 },
            colors: ['#c3f36b', '#9bcf3d', '#ffffff']
          });
        } catch (_) {}

        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrors({});
        return;
      } catch (err) {
        console.error('EmailJS Error:', err);
        setIsSubmitting(false);
        const errDetail = err?.text || err?.message || 'Check EmailJS configuration & keys.';
        setStatusMessage(`EmailJS Error: ${errDetail}`);
        if (onShowToast) onShowToast(`Failed to send via EmailJS: ${errDetail}`, 'error');
        return;
      }
    }

    // Fallback if EmailJS environment variables are not set or send failed
    setIsSubmitting(false);
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const body = encodeURIComponent(
      `Hello Manoj,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;

    setStatusMessage('Opening your mail client...');
    if (onShowToast) onShowToast('Preparing email in your default mail app.', 'success');
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 border-t border-[#232720] dark:border-[#232720] light:border-slate-200 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Headline & Direct Copy Action */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-[#c3f36b] font-mono-code text-xs uppercase tracking-widest mb-3">
              <span className="w-6 h-[1px] bg-[#c3f36b]" />
              <span>Get in touch</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white dark:text-white light:text-slate-900 leading-tight mb-4">
              Have a good project to solve?
            </h2>

            <p className="text-sm text-[#9da196] dark:text-[#9da196] light:text-slate-600 leading-relaxed mb-8">
              Whether you have a full stack application idea, an engineering role open, or simply want to chat code — feel free to send a note.
            </p>

            {/* Email Copy Card */}
            <div className="p-5 rounded-2xl bg-[#161815] dark:bg-[#161815] light:bg-slate-100 border border-[#262a23] dark:border-[#262a23] light:border-slate-300 mb-8">
              <span className="text-[10px] font-mono-code text-[#666a61] uppercase tracking-wider block mb-2">
                Direct Email Address
              </span>

              <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-[#1d201c] dark:bg-[#1d201c] light:bg-white border border-[#282d24] dark:border-[#282d24] light:border-slate-200">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 text-[#c3f36b] shrink-0" />
                  <span className="font-mono-code text-xs text-white dark:text-white light:text-slate-900 truncate">
                    {PERSONAL_INFO.email}
                  </span>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-[#252a22] text-[#c3f36b] font-mono-code text-xs font-bold flex items-center gap-1.5 hover:bg-[#c3f36b] hover:text-[#11120f] transition-all shrink-0 focus:outline-none"
                  aria-label="Copy Email Address"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Location & Status Note */}
            <div className="text-xs text-[#9da196] space-y-2">
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#c3f36b]" />
                <span>Based in <strong>{PERSONAL_INFO.location}</strong> • IST (UTC+5:30)</span>
              </p>
              <p className="text-[#666a61] font-mono-code">
                Usually responds within 24 hours.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 p-8 rounded-2xl bg-[#161815] dark:bg-[#161815] light:bg-white border border-[#262a23] dark:border-[#262a23] light:border-slate-200 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-[#9da196] dark:text-[#9da196] light:text-slate-700 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full h-11 px-4 rounded-xl bg-[#1d201c] dark:bg-[#1d201c] light:bg-slate-50 border ${
                      errors.name ? 'border-red-500' : 'border-[#282d24] dark:border-[#282d24] light:border-slate-300'
                    } text-xs text-white dark:text-white light:text-slate-900 placeholder-[#666a61] focus:outline-none focus:border-[#c3f36b] transition-colors`}
                  />
                  {errors.name && <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-[#9da196] dark:text-[#9da196] light:text-slate-700 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full h-11 px-4 rounded-xl bg-[#1d201c] dark:bg-[#1d201c] light:bg-slate-50 border ${
                      errors.email ? 'border-red-500' : 'border-[#282d24] dark:border-[#282d24] light:border-slate-300'
                    } text-xs text-white dark:text-white light:text-slate-900 placeholder-[#666a61] focus:outline-none focus:border-[#c3f36b] transition-colors`}
                  />
                  {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-xs font-medium text-[#9da196] dark:text-[#9da196] light:text-slate-700 mb-1.5">
                  Subject *
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="What would you like to discuss?"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className={`w-full h-11 px-4 rounded-xl bg-[#1d201c] dark:bg-[#1d201c] light:bg-slate-50 border ${
                    errors.subject ? 'border-red-500' : 'border-[#282d24] dark:border-[#282d24] light:border-slate-300'
                  } text-xs text-white dark:text-white light:text-slate-900 placeholder-[#666a61] focus:outline-none focus:border-[#c3f36b] transition-colors`}
                />
                {errors.subject && <p className="text-[11px] text-red-400 mt-1">{errors.subject}</p>}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-medium text-[#9da196] dark:text-[#9da196] light:text-slate-700 mb-1.5">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell me a bit about your project or inquiry..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full p-4 rounded-xl bg-[#1d201c] dark:bg-[#1d201c] light:bg-slate-50 border ${
                    errors.message ? 'border-red-500' : 'border-[#282d24] dark:border-[#282d24] light:border-slate-300'
                  } text-xs text-white dark:text-white light:text-slate-900 placeholder-[#666a61] focus:outline-none focus:border-[#c3f36b] transition-colors resize-none`}
                />
                {errors.message && <p className="text-[11px] text-red-400 mt-1">{errors.message}</p>}
              </div>

              {/* Status Message */}
              {statusMessage && (
                <p className="text-xs font-mono-code text-[#c3f36b] pt-1">{statusMessage}</p>
              )}

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3.5 rounded-xl bg-[#c3f36b] text-[#11120f] font-bold text-xs flex items-center gap-2 hover:bg-[#b0e653] disabled:opacity-50 transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c3f36b]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-[#666a61] pt-2 border-t border-[#232720] leading-normal">
                * Note: Sends directly to Manoj via EmailJS when configured, or opens your default mail client.
              </p>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

