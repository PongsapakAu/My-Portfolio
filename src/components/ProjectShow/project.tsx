import { Internship, projectInfo } from "../../libs/projectinfo";
import { Descriptions } from "../../libs/resumeinfo";
import { ProjectCard } from "./projectCard";

export default function Project() {
  return (
    <div
      id="project"
      className="bg-cradbg/30 rounded-2xl border border-amber-50/20 px-6 py-10 text-white shadow-2xl ring-1 ring-white/5 backdrop-blur-md"
    >
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-extrabold tracking-wide text-amber-300 uppercase sm:text-4xl md:text-5xl">
          Projects
        </h2>
        <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-amber-400" />
      </div>

      <div className="mx-auto mb-10 max-w-4xl space-y-3 px-2 text-center text-sm text-white/80 sm:text-base">
        {Descriptions.map((desc, index) => (
          <p key={index}>{desc.project}</p>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[...Internship, ...projectInfo].map((item, index) => (
          <ProjectCard
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
            link={item.link}
            techStack={item.techStack}
          />
        ))}
      </div>
    </div>
  );
}
