import { motion } from "framer-motion";
import type { ReactElement } from "react";
import {
  Code2,
  Cpu,
  Database,
  ExternalLink,
  Github,
  Layers,
  Server,
  Sparkles,
} from "lucide-react";
import { PageWrapper } from "../components/PageWrapper";
import { SectionHeading } from "../components/SectionHeading";
import { projects } from "../data/portfolio";

const iconMap: Record<string, ReactElement> = {
  React: <Code2 size={14} />,
  "Node.js": <Server size={14} />,
  PostgreSQL: <Database size={14} />,
  Kafka: <Layers size={14} />,
  AWS: <Sparkles size={14} />,
  TypeScript: <Code2 size={14} />,
  "Tailwind CSS": <Layers size={14} />,
  Python: <Code2 size={14} />,
  Streamlit: <Layers size={14} />,
  RAG: <Cpu size={14} />,
  LLMs: <Cpu size={14} />,
};

const listVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export const Projects = () => (
  <PageWrapper>
    <section className="section-padding">
      <div className="container-base py-12">
        <SectionHeading
          eyebrow="Projects"
          title="Selected Work"
          subtitle="Detailed case studies with tech stacks, responsibilities, and outcomes."
        />
        <motion.div
          className="grid gap-8 lg:grid-cols-2"
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              className="card flex h-full flex-col"
              variants={itemVariants}
            >
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="h-48 w-full rounded-xl object-cover"
                loading="lazy"
              />
              <div className="mt-5 flex flex-1 flex-col">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-ink-500">
                      {project.type}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-ink-900">
                      {project.title}
                    </h3>
                  </div>
                  <span className="chip text-xs">{project.period}</span>
                </div>
                <p className="mt-4 text-sm text-ink-600">
                  {project.description}
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-ink-600">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="chip text-xs">
                      {iconMap[tech] ?? <Code2 size={14} />}
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 text-ink-700 transition hover:text-secondary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github size={16} /> GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="inline-flex items-center gap-2 text-ink-700 transition hover:text-secondary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  </PageWrapper>
);
