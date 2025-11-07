"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, Send, MessageCircle, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function MobileContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const showNotification = (type: "success" | "error", message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 5000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      showNotification("error", "Please enter your name!");
      return;
    }
    
    if (!formData.email.trim()) {
      showNotification("error", "Please enter your email!");
      return;
    }
    
    if (!formData.subject.trim()) {
      showNotification("error", "Please enter a subject!");
      return;
    }
    
    if (!formData.message.trim()) {
      showNotification("error", "Message cannot be empty!");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "62aaae85-d00e-44f2-b9c4-5f914e84d438",
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: formData.name,
          to_email: "mogistanlee@gmail.com",
        }),
      });

      const result = await response.json();

      if (result.success) {
        showNotification("success", "Message sent successfully! I'll get back to you soon.");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      showNotification("error", "Failed to send message. Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-12 px-4">
      {/* Notification Toast */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-4 left-4 right-4 z-50 flex items-center gap-2 px-4 py-3 rounded-xl shadow-2xl backdrop-blur-sm text-sm"
            style={{
              backgroundColor: notification.type === "success" ? "rgba(34, 197, 94, 0.95)" : "rgba(239, 68, 68, 0.95)",
            }}
          >
            {notification.type === "success" ? (
              <CheckCircle size={18} className="text-white flex-shrink-0" />
            ) : (
              <AlertCircle size={18} className="text-white flex-shrink-0" />
            )}
            <p className="text-white font-semibold">{notification.message}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-3 leading-tight pb-2">
          Get In Touch
        </h2>
        <p className="text-gray-600">
          Let's collaborate on your next project
        </p>
      </motion.div>

      {/* Contact Cards */}
      <div className="space-y-3 mb-8">
        <motion.a
          href="mailto:mogistanlee@gmail.com"
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-3 p-4 bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-xl hover:shadow-md transition-all group"
        >
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
            <Mail size={18} className="text-white" />
          </div>
          <div className="min-w-0">
            <h4 className="font-semibold text-gray-900 text-sm">Email</h4>
            <p className="text-gray-600 text-xs truncate">mogistanlee@gmail.com</p>
          </div>
        </motion.a>

        <motion.a
          href="https://linkedin.com/in/morstawid"
          whileTap={{ scale: 0.98 }}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-4 bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-xl hover:shadow-md transition-all group"
        >
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
            <Linkedin size={18} className="text-white" />
          </div>
          <div className="min-w-0">
            <h4 className="font-semibold text-gray-900 text-sm">LinkedIn</h4>
            <p className="text-gray-600 text-xs">Connect with me</p>
          </div>
        </motion.a>

        <motion.a
          href="https://github.com/morstawid"
          whileTap={{ scale: 0.98 }}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-4 bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-xl hover:shadow-md transition-all group"
        >
          <div className="w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
            <Github size={18} className="text-white" />
          </div>
          <div className="min-w-0">
            <h4 className="font-semibold text-gray-900 text-sm">GitHub</h4>
            <p className="text-gray-600 text-xs">View my projects</p>
          </div>
        </motion.a>

        <motion.div
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-3 p-4 bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-xl hover:shadow-md transition-all group"
        >
          <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
            <MapPin size={18} className="text-white" />
          </div>
          <div className="min-w-0">
            <h4 className="font-semibold text-gray-900 text-sm">Location</h4>
            <p className="text-gray-600 text-xs">Available for remote work</p>
          </div>
        </motion.div>
      </div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-5 shadow-md"
      >
        <div className="flex items-center gap-2 mb-5">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <MessageCircle size={16} className="text-white" />
          </div>
          <h3 className="text-lg font-bold text-gray-900">Send a Message</h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-xs font-semibold text-gray-700 mb-1.5">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-gray-700 mb-1.5">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-xs font-semibold text-gray-700 mb-1.5">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="What's this about?"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-gray-700 mb-1.5">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            className={`w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all shadow-md hover:shadow-lg font-semibold text-sm ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send size={16} />
                Send Message
              </>
            )}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}

