import { Experiences } from "../libs/resumeinfo";

export default function Experience() {
  return (
    <div className="bg-cradbg/30 rounded-xl border-[0.5px] border-amber-50/20 px-6 py-6 text-white shadow-xl sm:px-12 md:px-16">
      <h2 className="pb-6 text-center text-3xl font-bold tracking-tight sm:text-4xl">
        Experience
      </h2>

      <div className="relative pl-8 before:absolute before:top-0 before:left-5 before:h-full before:w-[3px] before:bg-amber-300">
        {Experiences.map((item, i) => (
          <div key={i} className="relative mb-12 flex flex-col gap-2">
            {/* จุดวงกลมบนเส้น Timeline */}
            <span className="absolute -left-7 top-3 h-5 w-5 rounded-full bg-amber-400 border-2 border-amber-300 shadow-md"></span>

            <div className="pl-4">
              <p className="text-sm text-white/60">
                {item.yearStart} - {item.yearEnd}
              </p>
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-white/80">{item.company}</p>
              <p className="text-sm text-white/60 italic">{item.position}</p>
              <p className="mt-1 text-sm text-white/70">{item.description}</p>
              <p className="mt-1 text-sm text-white/70">
                <span className="font-semibold text-white/90">Tools:</span> {item.tool}
              </p>
              <p className="text-sm text-white/70">
                <span className="font-semibold text-white/90">Tech Stack:</span> {item.techStack}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
