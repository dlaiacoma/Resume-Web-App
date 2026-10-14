export function Tags({ items, className = '' }: { items: string[]; className?: string }) {
  return (
    <ul className={`tags ${className}`.trim()} aria-label="Technologies">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}
