"use client";

import Link from "next/link";
import { useState } from "react";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "https://github.com/oishik-biswas", label: "GitHub" },
  { href: "https://www.linkedin.com/in/biswas-oishik/", label: "LinkedIn" },
  { href: "https://leetcode.com/u/_Oishik_/", label: "LeetCode" },
];

export default function Footer() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    setIsSending(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const data = (await res.json().catch(() => null)) as {
        message?: string;
      } | null;

      if (res.ok) {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus(data?.message ?? "Failed to send message.");
      }
    } catch {
      setStatus("Something went wrong.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <footer
      id="contact"
      className="mt-24 border-t border-white/10 bg-[#0f1115]"
    >
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left Section */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Contact
            </p>

            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              Let&apos;s build impactful software.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-gray-400">
              Full-stack developer, backend engineer, GATE-qualified problem
              solver, and software builder with expertise in scalable systems,
              DSA, core CS, and modern product engineering.
            </p>

            <div className="mt-5 space-y-2 text-sm text-gray-400">
              <p>Email: biswasoishik5@gmail.com</p>
              <p>Location: India</p>
            </div>

            <nav
              aria-label="Footer navigation"
              className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm text-gray-400"
            >
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  className="transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-white/10 bg-[#0b0d11] p-6">
            <h3 className="mb-5 text-xl font-semibold text-white">
              Send me a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-white/10 bg-[#090a0c] px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-white/10 bg-[#090a0c] px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-lg border border-white/10 bg-[#090a0c] px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300"
              />

              <button
                type="submit"
                disabled={isSending}
                className="w-full rounded-lg border border-cyan-300/30 bg-cyan-300/10 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-cyan-300/20 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>

              {status && (
                <p className="text-sm text-gray-400" aria-live="polite">
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col gap-3 border-t border-gray-800 pt-5 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} Oishik Biswas.</span>
          <span>Built with Next.js • MERN • Passion</span>
        </div>
      </div>
    </footer>
  );
}
