import { Descriptions } from "../libs/resumeinfo";

export default function Profile() {
  return (
    <div className="bg-cradbg/30 rounded-xl border-[0.5px] border-amber-50/20 px-8 py-6 text-white shadow-xl">
      <div className="flex items-center justify-between gap-2">
        <div>
          <h1 className="pb-4 text-3xl font-bold tracking-tight">
            Pongsapak Junnasaksri : Au
          </h1>
          <h2 className="pb-8 text-2xl font-medium text-amber-300">
            Front-End Developer
          </h2>

          {Descriptions.map((item, i) => (
            <p
              key={i}
              className="mb-2 flex items-start gap-2 text-sm leading-relaxed text-white/80"
            >
              {item.profile}
            </p>
          ))}
        </div>

        <img
          src="/profile/profile.png"
          alt="Profile"
          width={350}
          height={350}
          className="rounded-full shadow-md transition duration-300 hover:scale-105 hover:shadow-xl"
        />
      </div>
    </div>
  );
}
