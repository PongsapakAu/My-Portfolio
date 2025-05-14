import { Description } from "../libs/resumeinfo";

export default function About() {
  return (
    <div className="bg-cradbg flex items-center justify-center rounded-xl px-[80px] py-[60px] text-white shadow-xl transition-all duration-500 md:flex-col xl:flex-row">
      <div className="flex max-w-2xl flex-col">
        <h1 className="relative flex items-center gap-4 pb-5 text-5xl font-bold uppercase">
          About Me
          <span className="absolute bottom-2 left-0 h-1 w-62 bg-cyan-400"></span>
        </h1>

        <div className="space-y-4 text-lg leading-relaxed tracking-wide whitespace-pre-wrap">
          {Description.map((item, index) => (
            <p key={index}>{item.aboutMe}</p>
          ))}
        </div>
      </div>
      <div>test</div>

      <img
        src="/profile/raw.png"
        className="rounded-full border-4 border-cyan-400 object-cover shadow-md transition-transform duration-300 hover:scale-105 md:h-32 md:w-32 lg:h-64 lg:w-64"
        alt="Profile"
      />
    </div>
  );
}
