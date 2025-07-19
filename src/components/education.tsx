import { education } from "../libs/resumeinfo";

export default function Education() {
  return (
    <div className="bg-cradbg/30 rounded-2xl border border-amber-50/20 px-6 py-12 text-white shadow-2xl ring-1 ring-white/5 backdrop-blur-md sm:px-10 md:px-16">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-extrabold tracking-wide text-amber-300 uppercase sm:text-4xl md:text-5xl">
          Education
        </h2>
        <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-amber-400" />
      </div>

      <div className="relative pl-8 before:absolute before:top-0 before:left-5 before:h-full before:w-[3px] before:bg-amber-400/80">
        {education.map((item, i) => (
          <div key={i} className="relative mb-12 flex flex-col gap-2">
            <span className="absolute top-0 left-[-19px] h-4 w-4 rounded-full border-[3px] border-white bg-amber-400 shadow-md" />

            <div className="pl-6">
              <p className="text-xs text-white/60 sm:text-sm">
                {item.yearStart} - {item.yearEnd}
              </p>
              <p className="text-lg font-semibold text-amber-300 sm:text-xl">
                {item.educationName}
              </p>
              <p className="text-sm text-white/80 sm:text-base">
                {item.faculty}
              </p>
              <p className="text-sm text-white/60 sm:text-base">
                {item.branch}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
