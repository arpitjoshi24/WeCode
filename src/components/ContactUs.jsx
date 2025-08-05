// ContactUs.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Mail,
  MessageCircle,
  Twitter,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";

// DiscordIcon component stays the same
const DiscordIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 245 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Discord">
    {/* SVG paths omitted here for brevity, same as yours */}
  </svg>
);

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await emailjs.send(
        "service_j46p5a2",        // <-- replace with your EmailJS service ID
        "template_llkv8j2",       // <-- replace with your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "C69v2ZSVmyQIJLEzO"          // <-- replace with your public key
      );

      if (res.status === 200) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Email send error:", err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#3b82f6] text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-2">Contact Us</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Got questions, ideas, or want to collaborate? Reach out or follow us on our socials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 rounded-2xl p-8 shadow-xl"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="name">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/15 placeholder-white/70 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/15 placeholder-white/70 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="What do you want to say?"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/15 placeholder-white/70 focus:outline-none resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full inline-flex justify-center items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#3b82f6] to-[#6366f1] font-semibold rounded-full shadow hover:brightness-105 transition"
                disabled={loading}
              >
                {loading ? "Sending..." : <>
                  <MessageCircle size={18} /> Send Message
                </>}
              </button>

              {status === "success" && (
                <p className="text-green-400 text-sm text-center mt-2">✅ Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm text-center mt-2">❌ Something went wrong. Please try again.</p>
              )}
            </form>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-between"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Follow & Connect</h3>
              <p className="text-white/80 mb-6">
                Stay updated with WeCode announcements, resources, and community highlights.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    name: "Discord",
                    icon: <DiscordIcon size={20} />,
                    handle: "WeCodeClub",
                    href: "#",
                    bg: "bg-indigo-600/20",
                  },
                  {
                    name: "Twitter",
                    icon: <Twitter size={20} />,
                    handle: "@WeCodeClub",
                    href: "https://twitter.com/WeCodeClub",
                    bg: "bg-sky-500/20",
                  },
                  {
                    name: "Instagram",
                    icon: <Instagram size={20} />,
                    handle: "@wecode.official",
                    href: "https://www.instagram.com/wecode_gehu/",
                    bg: "bg-pink-500/20",
                  },
                  {
                    name: "LinkedIn",
                    icon: <Linkedin size={20} />,
                    handle: "WeCode Club",
                    href: "https://www.linkedin.com/company/wecodegehu/",
                    bg: "bg-blue-700/20",
                  },
                  {
                    name: "GitHub",
                    icon: <Github size={20} />,
                    handle: "WeCodeClub",
                    href: "https://github.com/gehu-opensource",
                    bg: "bg-white/10",
                  },
                  {
                    name: "Email",
                    icon: <Mail size={20} />,
                    handle: "admin@wecode.college",
                    href: "mailto:admin@wecode.college",
                    bg: "bg-violet-500/20",
                  },
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-xl hover:scale-[1.02] transition ${s.bg}`}
                  >
                    <div className="p-2 bg-white/10 rounded-full">{s.icon}</div>
                    <div>
                      <p className="font-semibold">{s.name}</p>
                      <p className="text-sm text-white/80">{s.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-auto">
              <p className="text-xs text-white/60">
                © {new Date().getFullYear()} WeCode Club. Built with passion.
                <span className="block">Reach out anytime — collaboration fuels growth.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
