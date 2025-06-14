type ProjectCardProps = {
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
    <div className="flex flex-col justify-between rounded-xl border border-white/10 bg-white/5 p-4 shadow-lg backdrop-blur-sm transition-transform duration-300 hover:scale-[1.03] hover:shadow-xl">
      <div>
        <h2 className="mb-2 text-lg font-bold text-white">{title}</h2>
        <p className="mb-4 text-sm text-white/80 line-clamp-3">
          {description || "No description provided."}
        </p>

        {techStack && (
          <div className="mb-4 flex flex-wrap gap-2">
            {techStack.map((tech, i) => (
              <span
                key={i}
                className="rounded-md bg-amber-400/20 px-2 py-1 text-xs font-medium text-amber-200"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      {image && (
        <img
          src={image}
          alt={title}
          className="mb-4 w-full rounded-lg object-cover aspect-video"
        />
      )}

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-auto inline-flex w-fit items-center gap-2 rounded-md border border-amber-300 px-4 py-2 text-sm font-semibold text-amber-300 transition-all duration-300 hover:bg-amber-300 hover:text-black"
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
