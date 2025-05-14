import { Internship, projectInfo } from "../libs/projectinfo";

export default function Project() {
  return (
    <div className="bg-cradbg rounded-xl px-[80px] py-6 shadow-xl">
      <div className="flex gap-2 text-white">
        {projectInfo.map((project, index) => (
          <div key={index} className="mb-4 rounded-lg border p-4 shadow-md">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-600">
              {project.description || "No description provided."}
            </p>
            <div className="my-2 flex gap-2">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="rounded bg-blue-100 px-2 py-1 text-sm text-blue-800"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                width={50}
                height={50}
                className="mt-2 h-auto w-full"
              />
            )}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-blue-500 underline"
            >
              View Project
            </a>
          </div>
        ))}
          {Internship.map((item, index) => (
            <div key={index} className="mb-4 rounded-lg border p-4 shadow-md">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="mt-2 h-auto w-full"
                />
              )}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-blue-500 underline"
              >
                View Project
              </a>
            </div>
          ))}
      </div>
    </div>
  );
}
