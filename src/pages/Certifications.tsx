import { Award } from "lucide-react";
import { motion } from "framer-motion";
import { PageWrapper } from "../components/PageWrapper";
import { SectionHeading } from "../components/SectionHeading";
import { certifications } from "../data/portfolio";

const listVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export const Certifications = () => (
  <PageWrapper>
    <section className="section-padding">
      <div className="container-base py-12">
        <SectionHeading
          eyebrow="Certifications"
          title="Credentials"
          subtitle="Verified training in cloud and machine learning foundations."
        />
        <motion.div
          className="grid gap-6 md:grid-cols-2"
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {certifications.map((certification) => (
            <motion.article
              key={certification.name}
              className="card"
              variants={itemVariants}
            >
              <div className="flex items-start gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                  <Award size={22} />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-ink-900">
                    {certification.name}
                  </h3>
                  <p className="mt-1 text-sm text-ink-600">
                    {certification.issuer}
                  </p>
                  <p className="mt-3 text-xs uppercase tracking-[0.2em] text-ink-500">
                    {certification.date}
                  </p>
                  <p className="mt-2 text-sm text-ink-600">
                    Credential ID: {certification.credentialId}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  </PageWrapper>
);
