import { skillInfo } from "../../libs/skillinfo";
import { SkillCard } from "./skillCard";

export default function Skills() {
  return (
    <div
      id="skill"
      className="bg-cradbg/30 rounded-2xl border border-amber-50/20 p-6 text-white shadow-2xl ring-1 ring-white/5 backdrop-blur-md sm:p-10"
    >
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-extrabold text-amber-300 uppercase sm:text-4xl md:text-5xl">
          My Skills
        </h2>
        <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-amber-400" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillInfo.map((category, index) => (
          <SkillCard
            key={index}
            title={category.title}
            skills={category.skills}
          />
        ))}
      </div>
    </div>
  );
}
