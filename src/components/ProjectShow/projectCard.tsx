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
    <div className="flex flex-col rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-black/10 p-4 shadow-lg backdrop-blur-md transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
      {image && (
        <img
          src={image}
          alt={title}
          className="mb-4 aspect-video w-full rounded-xl object-cover ring-1 ring-white/10 transition duration-300 hover:brightness-110"
        />
      )}

      <h2 className="mb-2 text-xl font-semibold text-white">{title}</h2>
      <p className="mb-4 line-clamp-3 text-sm text-white/80">
        {description || "No description provided."}
      </p>

      {techStack && (
        <div className="mb-4 flex flex-wrap gap-2">
          {techStack.map((tech, i) => (
            <span
              key={i}
              className="rounded-full bg-amber-400/20 px-3 py-1 text-xs font-medium text-amber-200"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-auto inline-flex w-fit items-center gap-2 rounded-lg border border-amber-300 px-4 py-2 text-sm font-semibold text-amber-300 transition-all duration-300 hover:bg-amber-300 hover:text-black"
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
