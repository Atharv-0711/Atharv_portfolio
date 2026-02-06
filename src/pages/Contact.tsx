import type { FormEvent } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { PageWrapper } from "../components/PageWrapper";
import { SectionHeading } from "../components/SectionHeading";
import { profile } from "../data/portfolio";

const listVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export const Contact = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");
    const mailto = `mailto:${profile.email}?subject=Portfolio inquiry from ${name}&body=From: ${name} (${email})%0D%0A%0D%0A${message}`;
    window.location.href = mailto;
  };

  return (
    <PageWrapper>
      <section className="section-padding">
        <div className="container-base py-12">
          <SectionHeading
            eyebrow="Contact"
            title="Let's Build Something"
            subtitle="Reach out for collaborations, internships, or project discussions."
          />
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
            <motion.div
              className="space-y-6"
              variants={listVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div className="card space-y-4" variants={itemVariants}>
                <div className="flex items-center gap-3 text-ink-700">
                  <Mail size={18} /> {profile.email}
                </div>
                <div className="flex items-center gap-3 text-ink-700">
                  <Phone size={18} /> {profile.phone}
                </div>
                <div className="flex items-center gap-3 text-ink-700">
                  <MapPin size={18} /> {profile.location}
                </div>
              </motion.div>
              <motion.div className="card space-y-4" variants={itemVariants}>
                <h3 className="text-lg font-semibold text-ink-900">
                  Social Links
                </h3>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={profile.linkedin}
                    className="inline-flex items-center gap-2 rounded-full border border-ink-200 px-4 py-2 text-sm text-ink-700 transition hover:border-secondary hover:text-secondary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Linkedin size={16} /> LinkedIn
                  </a>
                  <a
                    href={profile.github}
                    className="inline-flex items-center gap-2 rounded-full border border-ink-200 px-4 py-2 text-sm text-ink-700 transition hover:border-secondary hover:text-secondary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github size={16} /> GitHub
                  </a>
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center gap-2 rounded-full border border-ink-200 px-4 py-2 text-sm text-ink-700 transition hover:border-secondary hover:text-secondary"
                  >
                    <Mail size={16} /> Email
                  </a>
                </div>
                <p className="text-sm text-ink-600">
                  Prefer direct contact? Use the links above or send a message using
                  the form.
                </p>
              </motion.div>
            </motion.div>
            <motion.form
              className="card space-y-4"
              onSubmit={handleSubmit}
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-ink-700"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="mt-2 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-secondary"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-ink-700"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="mt-2 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-secondary"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-ink-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or opportunity."
                  rows={5}
                  required
                  className="mt-2 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-secondary"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-secondary"
              >
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};
