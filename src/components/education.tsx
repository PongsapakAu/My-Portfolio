import { education } from "../libs/resumeinfo";

export default function Education() {
  return (
    <div className="bg-cradbg/30 rounded-xl border-[0.5px] border-amber-50/20 px-4 py-8 text-white shadow-xl sm:px-6 md:px-8">
      <h2 className="mb-10 text-center text-3xl font-bold tracking-wide text-white sm:text-4xl md:text-5xl">
        Education
      </h2>

      <div className="relative pl-8 before:absolute before:top-0 before:left-5 before:h-full before:w-[3px] before:bg-amber-300">
        {education.map((item, i) => (
          <div key={i} className="relative mb-12 flex flex-col gap-2">
            {/* จุดวงกลมบนเส้น Timeline */}
            <span className="absolute top-0 left-[-19px] h-4 w-4 rounded-full border-[3px] border-white bg-amber-400 shadow-md" />

            <div className="pl-6">
              <p className="text-xs text-white/60 sm:text-sm">
                {item.yearStart} - {item.yearEnd}
              </p>
              <p className="text-base font-semibold sm:text-lg">
                {item.educationName}
              </p>
              <p className="text-sm text-white/80 sm:text-base">{item.faculty}</p>
              <p className="text-sm text-white/60 sm:text-base">{item.branch}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
