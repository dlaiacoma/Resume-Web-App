interface SectionHeadingProps {
  index: string;
  label: string;
  title: string;
  subtitle?: string;
  id?: string;
}

export function SectionHeading({ index, label, title, subtitle, id }: SectionHeadingProps) {
  return (
    <div className="stack sec-head">
      <span className="eyebrow">
        {index} / {label}
      </span>
      <h2 id={id}>{title}</h2>
      {subtitle && <p className="sub">{subtitle}</p>}
    </div>
  );
}
