import { skillInfo } from "../../libs/skillinfo";
import { SkillCard } from "./skillCard";

export default function Skills() {
  return (
    <div className="bg-cradbg/30 rounded-xl border-[0.5px] border-amber-50/20 p-4 px-8 py-6 text-white shadow-xl">
      <p className="flex items-center justify-center pb-4 text-5xl font-bold uppercase">
        My Skills
      </p>
      <div className="grid grid-cols-3 gap-3">
        {skillInfo.map((category, index) => (
            <SkillCard 
                key = {index}
                title = {category.title}
                skills={category.skills}
            />
        ))}
      </div>
    </div>
  );
}
