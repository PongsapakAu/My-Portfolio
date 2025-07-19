type SkillCardProps = {
  title: string;
  skills: string[];
};

export function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <div className="flex flex-col rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-black/10 p-6 shadow-lg backdrop-blur-md ring-1 ring-white/5 transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
      <h2 className="mb-4 text-xl font-semibold text-amber-300 tracking-wide">
        {title}
      </h2>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <li
            key={i}
            className="rounded-full bg-amber-400/20 px-3 py-1 text-xs sm:text-sm font-medium text-amber-100 hover:bg-amber-400/30 transition"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
