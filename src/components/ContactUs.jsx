// ContactUs.jsx
import { motion } from "framer-motion";
import {
  Mail,
  MessageCircle,
  Twitter,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";

const DiscordIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 245 240"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Discord"
  >
    <path
      d="M104.4 104.5c-5.7 0-10.2 5-10.2 11.1 0 6.1 4.6 11.1 10.2 11.1 5.7 0 10.2-5 10.2-11.1 0-6.1-4.6-11.1-10.2-11.1zm36.3 0c-5.7 0-10.2 5-10.2 11.1 0 6.1 4.6 11.1 10.2 11.1 5.7 0 10.2-5 10.2-11.1 0-6.1-4.6-11.1-10.2-11.1z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M189.5 20H55.5C43.3 20 32.9 29.9 30.1 42.4L20 150.2c-1.5 14.5 4.9 29 17.6 37.5 0 0 16.5 8 29.6 13.4 0 0 11.2 4.8 20.4-5.3 0 0 9.3-11.2 16.6-20.5 32.4 9.3 47.7 9.3 80.1 0 7.3 9.3 16.6 20.5 16.6 20.5 9.2 10.1 20.4 5.3 20.4 5.3 13.1-5.4 29.6-13.4 29.6-13.4 12.7-8.5 19.1-23 17.6-37.5L214.9 42.4C212.1 29.9 201.7 20 189.5 20zm-22.9 134.3s-10.6-12.6-19.4-23.5c38.4-10.9 52.8-34.8 52.8-34.8-12 8-23.5 13.7-33.9 17.6-14.9 5.4-29.3 8.9-43.5 10.9-29.1 4.1-55.7 1.5-78.3-0.4-17.1-1.5-33-4.1-47.6-9.5-2.3-0.9-4.5-1.9-6.7-3-0.3-0.2-0.6-0.3-0.9-0.5 0 0 14.1 23.7 51.9 34.6-8.8 10.9-19.4 23.5-19.4 23.5-64.5-2.1-89-44.4-89-44.4 0-94.1 42-170.6 42-170.6 42-31.7 82.1-30.9 82.1-30.9l3 3.5c-52.5 15.3-76.6 38.4-76.6 38.4 5.7-2.8 11.3-5 16.7-6.6 34.8-12.3 62.2-15.6 84.5-15.9 1.6-0.1 3.1-0.1 4.7-0.1 1.6 0 3.1 0 4.7 0.1 22.4.3 49.8 3.6 84.5 15.9 5.4 1.6 11 3.8 16.7 6.6 0 0-24.1-23.1-76.6-38.4l3-3.5s40.1-.8 82.1 30.9c0 0 42 76.5 42 170.6 0 0-24.5 42.3-89 44.4z"
      fill="white"
    />
  </svg>
);

export default function ContactUs() {
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
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 rounded-2xl p-8 shadow-xl"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="name">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
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
                  type="email"
                  placeholder="you@example.com"
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
                  rows="4"
                  placeholder="What do you want to say?"
                  className="w-full px-4 py-3 rounded-lg bg-white/15 placeholder-white/70 focus:outline-none resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex justify-center items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#3b82f6] to-[#6366f1] font-semibold rounded-full shadow hover:brightness-105 transition"
              >
                <MessageCircle size={18} /> Send Message
              </button>
            </form>
          </motion.div>

          {/* Social handles */}
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
                Stay updated with WeCode announcements, resources, and community highlights. Pick your favorite platform.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    name: "Discord",
                    icon: <DiscordIcon size={20} />,
                    handle: "WeCodeClub",
                    href: "https://discord.gg/dk25zDfk",
                    bg: "bg-indigo-600/20",
                  },
                  {
                    name: "Twitter",
                    icon: <Twitter size={20} />,
                    handle: "@WeCodeClub",
                    href: "https://www.linkedin.com/company/wecodegehu/",
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
                © {new Date().getFullYear()} WeCode Club. Built with passion.{" "}
                <span className="block">Reach out anytime—collaboration fuels growth.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
