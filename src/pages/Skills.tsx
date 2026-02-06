import { motion } from "framer-motion";
import { PageWrapper } from "../components/PageWrapper";
import { SectionHeading } from "../components/SectionHeading";
import { skills } from "../data/portfolio";

const listVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export const Skills = () => (
  <PageWrapper>
    <section className="section-padding">
      <div className="container-base py-12">
        <SectionHeading
          eyebrow="Skills"
          title="Tools & Technologies"
          subtitle="A focused toolkit across languages, tooling, and frameworks."
        />
        <motion.div
          className="grid gap-6 lg:grid-cols-3"
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {Object.entries(skills).map(([category, items]) => (
            <motion.div key={category} className="card" variants={itemVariants}>
              <h3 className="text-lg font-semibold text-ink-900">
                {category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span key={item} className="chip text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  </PageWrapper>
);
