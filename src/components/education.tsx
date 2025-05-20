import { education } from "../libs/resumeinfo";

export default function Education() {
  return (
    <div className="bg-cradbg/30 rounded-xl border-[0.5px] border-amber-50/20 px-8 py-6 text-white shadow-xl">
      <h2 className="mb-4 text-center text-5xl font-semibold text-white">
        Education
      </h2>
      <div className="space-y-6">
        {education.map((item, i) => (
          <div key={i} className="border-l-2 border-amber-200 pl-4">
            <p className="text-sm text-white/60">
              {item.yearStart} - {item.yearEnd}
            </p>
            <p className="text-lg font-semibold">{item.educationName}</p>
            <p className="text-white/80">{item.faculty}</p>
            <p className="text-white/60">{item.branch}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
