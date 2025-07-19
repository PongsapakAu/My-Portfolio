import { Descriptions } from "../libs/resumeinfo";

export default function About() {
  return (
    <div
      id="about"
      className="bg-cradbg/30 rounded-2xl border border-amber-50/20 px-6 py-12 text-white shadow-2xl ring-1 ring-white/5 backdrop-blur-md transition-all duration-500 sm:px-10 md:px-16 xl:px-20"
    >
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-extrabold tracking-wide text-amber-300 uppercase sm:text-4xl md:text-5xl">
          About Me
        </h1>
        <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-amber-400" />
      </div>

      <div className="mx-auto max-w-4xl space-y-6 px-2 text-base leading-relaxed tracking-wide text-white/85 sm:px-0 md:text-lg">
        {Descriptions.map((item, index) => (
          <p key={index} className="text-justify">
            {item.aboutMe}
          </p>
        ))}
      </div>
    </div>
  );
}
