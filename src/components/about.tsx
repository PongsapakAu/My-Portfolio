import { Descriptions, name } from "../libs/resumeinfo";

export default function About() {
  return (
    <div className="bg-cradbg/30 flex items-center justify-center gap-6 rounded-xl border-[0.5px] border-amber-50/20 px-24 py-12 text-white shadow-xl transition-all duration-500 md:flex-col xl:flex-row">
      <div className="flex flex-col">
        <p className="py-4 text-5xl font-bold uppercase">
          {/* About Me */}
          {name.map((Name, index) => (
            <p key={index}>
              {Name.fullName}:<span className="">{Name.nickName}</span>
            </p>
          ))}
        </p>

        <div className="space-y-4 text-lg text-[14px] leading-relaxed tracking-wide whitespace-pre-wrap">
          {Descriptions.map((Description, index) => (
            <p key={index}>{Description.aboutMe}</p>
          ))}
        </div>
      </div>
      <img
        src="/profile/raw.png"
        className="rounded-full border-[0.5px] border-white object-cover shadow-md transition-transform duration-300 hover:scale-110 hover:border-2 md:h-32 md:w-32 lg:h-64 lg:w-64"
        alt="Profile"
      />
    </div>
  );
}
