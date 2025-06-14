import { Descriptions } from "../libs/resumeinfo";

export default function Profile() {
  return (
    <div className="bg-cradbg/30 rounded-xl border-[0.5px] border-amber-50/20 px-6 py-6 text-white shadow-xl">
      <div className="flex flex-col-reverse items-center gap-8 md:flex-col xl:flex-row xl:items-start xl:justify-between">
        {/* Text Section */}
        <div className="text-center xl:text-left">
          <h1 className="pb-2 text-2xl font-bold tracking-tight md:text-3xl">
            Pongsapak Junnasaksri : Au
          </h1>
          <h2 className="pb-6 text-xl font-medium text-amber-300 md:text-2xl">
            Front-End Developer
          </h2>

          <div className="space-y-2 text-sm leading-relaxed text-white/80">
            {Descriptions.map((item, i) => (
              <p key={i}>{item.profile}</p>
            ))}
          </div>
        </div>

        <img
          src="/profile/profile.png"
          alt="Profile"
          className="w-32 rounded-full shadow-md transition duration-300 hover:scale-105 hover:shadow-xl md:w-48 lg:w-72"
        />
      </div>
    </div>
  );
}
