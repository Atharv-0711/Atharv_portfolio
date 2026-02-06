import { motion } from "framer-motion";
import type { ReactElement } from "react";
import { Brain, Code2, Database, Monitor } from "lucide-react";
import { PageWrapper } from "../components/PageWrapper";
import { SectionHeading } from "../components/SectionHeading";
import { courseworkCategories, education } from "../data/portfolio";

const listVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export const About = () => (
  <PageWrapper>
    <section className="section-padding">
      <div className="container-base py-12">
        <SectionHeading
          eyebrow="About Me"
          title="Education & Coursework"
          subtitle="Academic milestones and core coursework that shape my AI and full-stack foundation."
        />
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            className="space-y-6"
            variants={listVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {education.map((item, index) => (
              <motion.div
                key={`${item.institution}-${index}`}
                className="relative rounded-2xl border border-ink-100 bg-white p-6 shadow-soft"
                variants={itemVariants}
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-ink-900">
                      {item.institution}
                    </h3>
                    <p className="text-sm text-ink-600">
                      {item.degree}
                    </p>
                  </div>
                  <span className="chip text-xs">{item.period}</span>
                </div>
                <p className="mt-4 text-sm text-ink-600">
                  {item.location}
                </p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="space-y-5"
            variants={listVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {courseworkCategories.map((category) => {
              const iconMap: Record<string, ReactElement> = {
                "Core CS": <Monitor size={18} />,
                "AI / ML": <Brain size={18} />,
                "Programming & Tools": <Code2 size={18} />,
                "Data & Analysis": <Database size={18} />,
              };

              return (
                <motion.div
                  key={category.title}
                  className="card"
                  variants={itemVariants}
                >
                  <div className="flex items-center gap-3 text-ink-900">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                      {iconMap[category.title]}
                    </span>
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {category.topics.map((topic) => (
                      <span key={topic} className="chip text-xs">
                        {topic}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  </PageWrapper>
);
