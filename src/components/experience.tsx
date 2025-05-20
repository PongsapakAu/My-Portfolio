import { Experiences } from "../libs/resumeinfo";

export default function Experience() {
  return (
    <div className="bg-cradbg/30 rounded-xl border-[0.5px] border-amber-50/20 px-8 py-6 text-white shadow-xl">
      <h2 className="pb-6 text-center text-3xl font-bold tracking-tight">
        Experience
      </h2>

      <div className="relative pl-6 before:absolute before:top-0 before:left-1 before:h-full before:w-[2px] before:bg-amber-300">
        {Experiences.map((item, i) => (
          <div key={i} className="relative mb-10">
            <div className="absolute top-1 -left-2 h-4 w-4 "></div>
            <div className="pl-4">
              <p className="text-sm text-white/60">
                {item.yearStart} - {item.yearEnd}
              </p>
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-white/80">{item.company}</p>
              <p className="text-sm text-white/60 italic">{item.position}</p>
              <p className="mt-1 text-sm text-white/70">{item.description}</p>
              <p className="mt-1 text-sm text-white/70">
                <span className="font-semibold text-white/90">Tools:</span>{" "}
                {item.tool}
              </p>
              <p className="text-sm text-white/70">
                <span className="font-semibold text-white/90">Tech Stack:</span>{" "}
                {item.techStack}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
