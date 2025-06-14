import { Descriptions } from "../libs/resumeinfo";

export default function About() {
  return (
    <div className="bg-cradbg/30 rounded-xl border-[0.5px] border-amber-50/20 px-8 py-6 text-white shadow-xl transition-all duration-500">
      <h1 className="mb-6 text-center text-4xl font-bold uppercase md:text-5xl">
        About Me
      </h1>

      <div className="flex flex-col-reverse items-center gap-8 md:flex-col xl:flex-row xl:items-start xl:justify-between">
        {/* Text Section */}
        <div className="space-y-4 text-[14px] leading-relaxed tracking-wide whitespace-pre-wrap xl:w-2/3">
          {Descriptions.map((item, index) => (
            <p key={index}>{item.aboutMe}</p>
          ))}
        </div>

      </div>
    </div>
  );
}
