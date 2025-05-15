import { Internship, projectInfo } from "../../libs/projectinfo";
import { ProjectCard } from "./projectCard";

export default function Project() {
  return (
    <div className="bg-cradbg/30 rounded-xl border-[0.5px] border-amber-50/20 p-4 px-8 py-6 text-white shadow-xl">
      <p className="flex items-center justify-center pb-4 text-5xl font-bold uppercase">
        Project
      </p>
      <p className="pb-4 text-[14px]">
        This project is a comprehensive web-based application designed to
        streamline the process of managing internship projects for students and
        faculty members. It allows students to submit their project proposals,
        receive feedback from supervisors, and track progress throughout the
        internship period. The platform supports real-time communication between
        students and advisors, including file uploads, comment threads, and
        project timelines. Administrators can manage user roles, monitor project
        statuses, and generate reports for academic evaluation. The system
        integrates modern technologies such as React for the frontend and
        Node.js with Express for the backend, ensuring a fast and responsive
        user experience. Additionally, the platform is optimized for mobile
        devices and includes notification features to keep all participants
        updated on deadlines and changes. Security measures such as
        authentication, authorization, and input validation are implemented to
        protect user data and project integrity. This tool greatly improves the
        efficiency and transparency of internship program management in
        educational institutions.
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
