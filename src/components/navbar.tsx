import { NavbarText } from "../libs/navbar";

export default function Navbar() {
  return (
    <div className="bg-cradbg/30 flex- fixed top-6 right-48 left-48 z-50 flex h-[50px] items-center justify-between rounded-xl border-[0.5px] border-amber-50/20 px-12 py-8 font-semibold text-white uppercase shadow-2xl backdrop-blur-sm hover:border-amber-50/35">
      <div>
        <p className="text-2xl font-bold">Logo</p>
      </div>
      <div>
        <ul className="flex space-x-6">
          {NavbarText.map((navbar, index) => (
            <li key={index}>
              <a
                href={`#${navbar.toLowerCase().replace(/\s/g, "-")}`}
                className="rounded-md transition-all duration-200 hover:mx-2 hover:bg-gray-300 hover:px-4 hover:py-2 hover:text-gray-800"
              >
                {navbar}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* <a
        href="/resume/Resume-Pongsapak-(Au).pdf"
        download
        className="rounded-md border border-black bg-black px-3 py-2 text-white hover:bg-white/40 hover:text-black"
      >
        <p className="flex items-center justify-center gap-2 font-bold">
          Resume
        </p>
      </a> */}
    </div>
  );
}
