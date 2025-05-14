import { Description } from "../libs/resumeinfo";

export default function About() {
  return (
    <div className="bg-cradbg shadow-xl flex justify-center items-center  px-[80px] rounded-xl py-[60px] text-white xl:flex-row md:flex-col transition-all duration-500">
      <div className="flex flex-col max-w-2xl">
        <h1 className="font-bold text-5xl pb-5 uppercase flex items-center gap-4 relative">
          About Me
          <span className="absolute bottom-2 left-0 w-62 h-1 bg-cyan-400"></span>
        </h1>

        <div className="space-y-4 whitespace-pre-wrap text-lg leading-relaxed tracking-wide">
          {Description.map((item, index) => (
            <p key={index}>{item.aboutMe}</p>
          ))}
        </div>
      </div>

      <img
        src="/profile/raw.png"
        className="lg:w-64 lg:h-64 md:w-32 md:h-32 rounded-full border-4 border-cyan-400 shadow-md object-cover hover:scale-105 transition-transform duration-300"
        alt="Profile"
      />
    </div>
  );
}
