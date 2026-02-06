import { motion } from "framer-motion";
import { PageWrapper } from "../components/PageWrapper";
import { SectionHeading } from "../components/SectionHeading";
import { experience } from "../data/portfolio";

const listVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export const Experience = () => (
  <PageWrapper>
    <section className="section-padding">
      <div className="container-base py-12">
        <SectionHeading
          eyebrow="Experience"
          title="Training & Internships"
          subtitle="Hands-on exposure to cloud infrastructure and full-stack development."
        />
        <motion.div
          className="space-y-6"
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {experience.map((item, index) => (
            <motion.article
              key={`${item.role}-${index}`}
              className="card flex flex-col gap-4 md:flex-row md:items-start md:justify-between"
              variants={itemVariants}
            >
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-ink-500">
                  {item.company}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-ink-900">
                  {item.role}
                </h3>
                <p className="mt-1 text-sm text-ink-600">
                  {item.location}
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-ink-600">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
              <span className="chip text-xs">{item.period}</span>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  </PageWrapper>
);
