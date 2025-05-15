import { Internship, projectInfo } from "../../libs/projectinfo";
import { Descriptions } from "../../libs/resumeinfo";
import { ProjectCard } from "./projectCard";

export default function Project() {
  return (
    <div className="bg-cradbg/30 rounded-xl border-[0.5px] border-amber-50/20 p-4 px-8 py-6 text-white shadow-xl">
      <p className="flex items-center justify-center pb-4 text-5xl font-bold uppercase">
        Project
      </p>
      <p className="pb-4 text-[14px]">
        {Descriptions.map((Description, index) => (
          <p key={index}>{Description.project}</p>
        ))}
      </p>

      <div className="grid grid-cols-3 gap-2">
        {/* <div className="col-span-3"> */}
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
        {/* </div> */}
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
