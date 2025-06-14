type SkillCardProps = {
  title: string;
  skills: string[];
};

export function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <div className="flex flex-col rounded-xl border border-white/10 bg-white/5 p-4 shadow-md backdrop-blur-sm transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg">
      <h2 className="mb-4 text-lg font-bold text-white">{title}</h2>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <li
            key={i}
            className="rounded-full bg-amber-300/20 px-3 py-1 text-sm font-medium text-amber-200"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
