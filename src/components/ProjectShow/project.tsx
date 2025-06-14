import { Internship, projectInfo } from "../../libs/projectinfo";
import { Descriptions } from "../../libs/resumeinfo";
import { ProjectCard } from "./projectCard";

export default function Project() {
  return (
    <div className="bg-cradbg/30 rounded-xl border-[0.5px] border-amber-50/20 px-6 py-8 text-white shadow-xl">
      <h2 className="mb-6 text-center text-3xl font-bold uppercase sm:text-4xl md:text-5xl">
        Project
      </h2>

      <div className="mb-6 space-y-2 text-sm text-white/80 sm:text-base">
        {Descriptions.map((desc, index) => (
          <p key={index}>{desc.project}</p>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Internship.map((item, index) => (
          <ProjectCard
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
            link={item.link}
            techStack={item.techStack}
          />
        ))}
        {projectInfo.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
            techStack={project.techStack}
          />
        ))}
      </div>
    </div>
  );
}
