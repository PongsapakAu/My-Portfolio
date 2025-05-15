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
    <div className="rounded-lg border p-4 shadow-md duration-250 hover:scale-103 ">
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
          className="mt-2 inline-block text-blue-500 underline hover:text-white/80"
        >
          View Project
        </a>
      )}
    </div>
  );
}
