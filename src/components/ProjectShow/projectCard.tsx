type ProjectCardProps = {
  key: number;
  title: string;
  description: string;
  image: string;
  link: string;
  techStack?: string[];
};

export function ProjectCard({
  title,
  description,
  image,
  link,
  techStack,
}: ProjectCardProps) {
  return (
    <div className="rounded-lg border p-4 shadow-md duration-250 hover:scale-103">
      <h2 className="mb-4 text-xl font-semibold">{title}</h2>
      <p className="line-clamp-3 text-sm">
        {description || "No description provided."}
      </p>
      {techStack && (
        <div className="my-2 flex flex-wrap gap-2">
          {techStack.map((tech, i) => (
            <span
              key={i}
              className="rounded bg-blue-600 px-2 py-1 text-sm font-semibold"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
      {image && (
        <img
          src={image}
          alt={title}
          className="my-2 h-[150px] w-full rounded-xl object-cover"
        />
      )}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-4 inline-flex items-center gap-2 rounded-md border border-blue-500 bg-white px-4 py-2 text-sm font-medium text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-md"
        >
          View Project
          <svg
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      )}
    </div>
  );
}
