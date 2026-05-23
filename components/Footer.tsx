"use client";

import Link from "next/link";
import { ExternalLink, Link as LinkIcon, Mail, MapPin } from "lucide-react";
import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";

const footerLinks = [
  { href: "https://github.com/oishik-biswas", label: "GitHub" },
  { href: "https://www.linkedin.com/in/biswas-oishik/", label: "LinkedIn" },
  { href: "https://leetcode.com/u/_Oishik_/", label: "LeetCode" },
  { href: "https://linktr.ee/oishikbiswas", label: "Linktree" },
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
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
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
        setStatus("Message sent.");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus(data?.message ?? "Message failed.");
      }
    } catch {
      setStatus("Message failed.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <footer id="contact" className="site-footer mt-8">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="section-title mt-3">Let&apos;s build something sharp.</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-muted">
              Open to full-stack work, backend-heavy products, developer tools,
              and interesting language or systems experiments.
            </p>

            <div className="mt-6 grid gap-3 text-sm text-muted">
              <p className="inline-flex items-center gap-2">
                <Mail size={16} />
                <span>biswasoishik5@gmail.com</span>
              </p>
              <p className="inline-flex items-center gap-2">
                <MapPin size={16} />
                <span>India</span>
              </p>
              <Link
                href="https://linktr.ee/oishikbiswas"
                target="_blank"
                rel="noreferrer"
                className="quiet-link inline-flex items-center gap-2"
              >
                <LinkIcon size={16} />
                Linktree
                <ExternalLink size={14} />
              </Link>
            </div>

            <nav
              aria-label="Footer links"
              className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm"
            >
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="quiet-link"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <form onSubmit={handleSubmit} className="section-card">
            <h3 className="text-xl font-semibold text-strong">Send a note</h3>
            <div className="mt-5 grid gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                value={form.name}
                onChange={handleChange}
                className="form-field"
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                value={form.email}
                onChange={handleChange}
                className="form-field"
              />
              <textarea
                name="message"
                placeholder="Your message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="form-field"
              />
              <button type="submit" disabled={isSending} className="primary-button justify-center">
                {isSending ? "Sending..." : "Send message"}
              </button>
              {status && (
                <p className="text-sm text-muted" aria-live="polite">
                  {status}
                </p>
              )}
            </div>
          </form>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-subtle pt-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} Oishik Biswas.</span>
          <span>Built with Next.js, focus, and a few hidden chords.</span>
        </div>
      </div>
    </footer>
  );
}
