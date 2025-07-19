import { Descriptions } from "../libs/resumeinfo";

export default function Profile() {
  return (
    <div className="bg-cradbg/30 rounded-2xl border border-amber-50/20 px-6 py-12 text-white shadow-2xl backdrop-blur-md ring-1 ring-white/5 transition-all duration-500 sm:px-10 md:px-16 xl:px-20">
      <div className="flex flex-col-reverse items-center gap-10 md:flex-col xl:flex-row xl:items-start xl:justify-between px-">
        <div className="max-w-2xl text-center xl:text-left">
          <h1 className="pb-2 text-3xl font-extrabold tracking-tight text-amber-100 md:text-4xl">
            Pongsapak Junnasaksri <span className="text-amber-400">: Au</span>
          </h1>
          <h2 className="pb-6 text-xl font-medium text-amber-300 md:text-2xl">
            Front-End Developer
          </h2>

          <div className="space-y-3 text-base leading-relaxed text-white/80">
            {Descriptions.map((item, i) => (
              <p key={i} className="leading-snug">
                {item.profile}
              </p>
            ))}
          </div>
        </div>

        <div className="flex-shrink-0">
          <img
            src="/profile/profile.png"
            alt="Profile"
            className="w-36 rounded-full shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl md:w-52 lg:w-64"
          />
        </div>
      </div>
    </div>
  );
}
