import { Descriptions } from "../libs/resumeinfo";

export default function About() {
  return (
    <div className="bg-cradbg/30 rounded-xl border-[0.5px] border-amber-50/20 px-6 py-10 text-white shadow-xl transition-all duration-500 sm:px-10 md:px-16 xl:px-20">
      <h1 className="mb-10 text-center text-4xl font-bold uppercase tracking-wide md:text-5xl">
        About Me
      </h1>

      <div className="space-y-6 text-[15px] leading-relaxed tracking-wide text-white/85 sm:text-base md:text-lg">
        {Descriptions.map((item, index) => (
          <p key={index} className="text-justify">
            {item.aboutMe}
          </p>
        ))}
      </div>
    </div>
  );
}
