import { skillInfo } from "../../libs/skillinfo";

export default function Skills() {
  return (
    <div className="bg-cradbg/30 rounded-xl border-[0.5px] border-amber-50/20 p-4 px-8 py-6 text-white shadow-xl">
      <p className="flex items-center justify-center pb-4 text-5xl font-bold uppercase">
        My Skills
      </p>
      <div className="gap-4">
        {skillInfo.map((category, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-semibold">{category.title}</h3>
            <ul className="mt-2 flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <li
                  key={i}
                  className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-800"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
