import { education } from "../libs/resumeinfo";

export default function Education() {
  return (
    <div className="bg-cradbg/30 rounded-xl border-[0.5px] border-amber-50/20 px-6 py-8 text-white shadow-xl">
      <h2 className="mb-8 text-center text-3xl font-bold text-white sm:text-4xl md:text-5xl">
        Education
      </h2>

      <div className="space-y-6">
        {education.map((item, i) => (
          <div
            key={i}
            className="relative border-l-2 border-amber-200 pl-4 transition-all duration-300 hover:border-amber-400"
          >
            {/* Dot indicator */}
            <span className="absolute -left-[9px] top-1.5 h-3 w-3 rounded-full bg-amber-300" />

            <p className="text-xs text-white/60 sm:text-sm">
              {item.yearStart} - {item.yearEnd}
            </p>
            <p className="text-base font-semibold sm:text-lg">
              {item.educationName}
            </p>
            <p className="text-sm text-white/80 sm:text-base">{item.faculty}</p>
            <p className="text-sm text-white/60 sm:text-base">{item.branch}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
