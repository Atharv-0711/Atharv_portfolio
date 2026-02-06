import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, MapPin } from "lucide-react";
import { PageWrapper } from "../components/PageWrapper";
import { SectionHeading } from "../components/SectionHeading";
import { profile, projects } from "../data/portfolio";

const featuredProjects = projects.slice(0, 3);
const listVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export const Home = () => (
  <PageWrapper>
    <section className="section-padding">
      <div className="container-base grid items-center gap-12 py-10 sm:py-12 lg:grid-cols-[1.1fr_0.9fr] lg:py-14">
        <div className="space-y-2">
          <p className="section-subtitle">Portfolio</p>
          <h1 className="mt-3 font-display text-3xl font-semibold text-ink-900 sm:text-4xl lg:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-lg text-ink-600">
            {profile.title}
          </p>
          <p className="mt-4 text-ink-600">
            {profile.summary}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-ink-600">
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} /> {profile.location}
            </span>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 transition hover:text-secondary"
            >
              <Mail size={16} /> {profile.email}
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition hover:bg-secondary"
            >
              View Projects <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-ink-200 px-5 py-2 text-sm font-semibold text-ink-700 transition hover:border-secondary hover:text-secondary"
            >
              Contact Me
            </Link>
            <a
              href={profile.resumeUrl}
              className="inline-flex items-center gap-2 rounded-full border border-ink-200 px-5 py-2 text-sm font-semibold text-ink-700 transition hover:border-secondary hover:text-secondary"
              download
            >
              Download Resume <Download size={16} />
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="card translate-x-2 rotate-1 sm:translate-x-3">
            <img
              src="https://placehold.co/520x520?text=Atharv+Dobhal"
              alt="Placeholder portrait for Atharv Dobhal"
              className="h-full w-full rounded-2xl object-cover"
              loading="lazy"
            />
          </div>
          <img
            src="https://placehold.co/220x140?text=Open+to+Roles"
            alt="Availability badge"
            className="floating absolute -left-6 -bottom-6 hidden h-28 w-44 rounded-2xl border border-ink-100 bg-white object-cover shadow-soft md:block"
            loading="lazy"
          />
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-base py-6">
        <SectionHeading
          eyebrow="Highlights"
          title="Featured Projects"
          subtitle="A snapshot of recent work in education platforms, analytics, and AI."
        />
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {featuredProjects.map((project) => (
            <motion.article
              key={project.title}
              className="card flex h-full flex-col"
              variants={itemVariants}
            >
              <img
                src={project.image}
                alt={`${project.title} project preview`}
                className="h-40 w-full rounded-xl object-cover"
                loading="lazy"
              />
              <div className="mt-4 flex flex-1 flex-col">
                <p className="text-xs uppercase tracking-[0.2em] text-ink-500">
                  {project.type}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-ink-900">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-ink-600">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span key={tech} className="chip text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  to="/projects"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary"
                >
                  Explore project <ArrowRight size={16} />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  </PageWrapper>
);
