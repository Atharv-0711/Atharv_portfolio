type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export const SectionHeading = ({ eyebrow, title, subtitle }: SectionHeadingProps) => (
  <div className="mb-10">
    <p className="section-subtitle">{eyebrow}</p>
    <h2 className="section-title mt-2">{title}</h2>
    {subtitle ? <p className="mt-3 text-ink-600">{subtitle}</p> : null}
  </div>
);
