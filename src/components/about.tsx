import { Descriptions } from "../libs/resumeinfo";

export default function About() {
  return (
    <div className="bg-cradbg/30 items-center justify-center rounded-xl border-[0.5px] border-amber-50/20 px-8 py-6 text-white shadow-xl transition-all duration-500 md:flex-col xl:flex-row">
      <h1 className="relative flex items-center justify-center  gap-4 pb-5 text-5xl font-bold uppercase">
        About Me
      </h1>

      <div className="space-y-4 text-[14px] leading-relaxed tracking-wide whitespace-pre-wrap">
        {Descriptions.map((item, index) => (
          <p key={index}>{item.aboutMe}</p>
        ))}
      </div>

      {/* <img
        src="/profile/profile.png"
        className="rounded-full border-4 border-cyan-400 object-cover shadow-md transition-transform duration-300 hover:scale-105 md:h-32 md:w-32 lg:h-64 lg:w-64"
        alt="Profile"
      /> */}
    </div>
  );
}
