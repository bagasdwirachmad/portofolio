interface WorkCardProps {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export function Card({ title, company, period, description }: WorkCardProps) {
  return (
    <div className="border rounded-2xl p-5 bg-muted/20 dark:bg-muted/10">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-muted-foreground mb-1">
        {company} &middot; <span className="italic">{period}</span>
      </p>
      <ul className="list-disc list-inside text-sm mt-2 space-y-1">
        {description.map((item, index) => (
          <li key={index} className="text-muted-foreground text-justify">{item}</li>
        ))}
      </ul>
    </div>
  );
}
