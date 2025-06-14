import { Experiences } from "../libs/resumeinfo";

export default function Experience() {
  return (
    <div className="bg-cradbg/30 rounded-xl border-[0.5px] border-amber-50/20 px-4 py-8 text-white shadow-xl sm:px-6 md:px-8">
      <h2 className="mb-10 text-center text-3xl font-bold tracking-tight sm:text-4xl">
        Experience
      </h2>

      <div className="relative pl-8 before:absolute before:top-0 before:left-5 before:h-full before:w-[3px] before:bg-amber-300">
        {Experiences.map((item, i) => (
          <div key={i} className="relative mb-12 flex flex-col gap-2">
            {/* จุดวงกลมบนเส้น Timeline */}
            <span className="absolute top-0 left-[-19px] h-4 w-4 rounded-full border-[3px] border-white bg-amber-400 shadow-md" />

            <div className="pl-6">
              <p className="text-xs text-white/50 sm:text-sm">
                {item.yearStart} - {item.yearEnd}
              </p>
              <h3 className="text-base font-bold sm:text-lg">{item.title}</h3>
              <p className="text-sm text-white/80">{item.company}</p>
              <p className="text-xs text-white/60 italic sm:text-sm">
                {item.position}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {item.description}
              </p>
              <p className="mt-2 text-sm text-white/70">
                <span className="font-semibold text-white">Tools:</span> {item.tool}
              </p>
              <p className="text-sm text-white/70">
                <span className="font-semibold text-white">Tech Stack:</span> {item.techStack}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
